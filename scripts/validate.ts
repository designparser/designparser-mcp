#!/usr/bin/env node
/**
 * Validate all rule markdown files.
 * Run: npm run validate
 * Exit 0 = all valid (warnings are okay)
 * Exit 1 = errors found (blocks merge)
 */

import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import yaml from "js-yaml";
import { VALID_TAGS, CATEGORIES } from "../src/types.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function resolveRulesDir(fromDir: string): string {
  const candidates = [
    // running from repo root scripts/: <root>/scripts -> <root>/rules
    path.join(fromDir, "..", "rules"),
    // running from dist/scripts/: <root>/dist/scripts -> <root>/rules
    path.join(fromDir, "..", "..", "rules"),
  ];

  for (const dir of candidates) {
    if (fs.existsSync(dir) && fs.statSync(dir).isDirectory()) return dir;
  }

  return candidates[0];
}

const rulesDir = resolveRulesDir(__dirname);

const VALID_CATEGORIES = Object.keys(CATEGORIES);

const VALID_PRIORITIES = ["critical", "high", "medium", "low"];

// Sections that get structured extraction
const STRUCTURED_SECTIONS = ["The Rule", "Why", "When It Breaks", "In Practice", "Key Numbers"];
// Extra sections that are allowed but not structured
const ALLOWED_EXTRA_SECTIONS = ["Examples", "Anti-Patterns", "References", "Video", "Notes"];
const ALL_KNOWN_SECTIONS = new Set([...STRUCTURED_SECTIONS, ...ALLOWED_EXTRA_SECTIONS]);

interface ValidationResult {
  file: string;
  errors: string[];
  warnings: string[];
}

function validateFile(filePath: string, categoryFromDir: string): { errors: string[]; warnings: string[] } {
  const errors: string[] = [];
  const warnings: string[] = [];
  const raw = fs.readFileSync(filePath, "utf-8");

  if (!raw.startsWith("---")) {
    errors.push("Missing frontmatter (must start with ---)");
    return { errors, warnings };
  }

  const fmMatch = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!fmMatch) {
    errors.push("Frontmatter not closed with ---");
    return { errors, warnings };
  }

  // Parse with js-yaml
  let meta: Record<string, unknown>;
  try {
    meta = (yaml.load(fmMatch[1]) as Record<string, unknown>) ?? {};
  } catch (e) {
    errors.push(`YAML parse error: ${(e as Error).message}`);
    return { errors, warnings };
  }

  const body = fmMatch[2].trim();

  // Required fields
  const requiredFields = ["id", "title", "category", "priority", "tldr"];
  for (const field of requiredFields) {
    if (!meta[field]) errors.push(`Missing required frontmatter field: "${field}"`);
  }

  // ID: must be kebab-case and match filename
  if (meta.id) {
    const id = String(meta.id);
    if (!/^[a-z0-9-]+$/.test(id)) {
      errors.push(`ID "${id}" must be kebab-case (lowercase, numbers, hyphens only)`);
    }
    const expectedFile = `${id}.md`;
    if (path.basename(filePath) !== expectedFile) {
      errors.push(`Filename "${path.basename(filePath)}" does not match id "${id}" (expected "${expectedFile}")`);
    }
  }

  // Category: must be valid and match folder
  if (meta.category) {
    const cat = String(meta.category);
    if (!VALID_CATEGORIES.includes(cat)) {
      errors.push(`Invalid category "${cat}". Valid: ${VALID_CATEGORIES.join(", ")}`);
    } else if (cat !== categoryFromDir) {
      errors.push(`Category "${cat}" in frontmatter doesn't match folder "${categoryFromDir}"`);
    }
  }

  // Priority: must be valid
  if (meta.priority) {
    const pri = String(meta.priority);
    if (!VALID_PRIORITIES.includes(pri)) {
      errors.push(`Invalid priority "${pri}". Valid: ${VALID_PRIORITIES.join(", ")}`);
    }
  }

  // TL;DR: must not be empty
  if (meta.tldr !== undefined && !String(meta.tldr).trim()) {
    errors.push("tldr must not be empty");
  }

  // Sources: required — warning now, will become error in v3
  if (!meta.sources) {
    warnings.push('Missing "sources" — add at least one verifiable source (will become an error in v3)');
  } else if (!Array.isArray(meta.sources) || meta.sources.length === 0) {
    warnings.push('"sources" is empty — add at least one verifiable source (will become an error in v3)');
  } else {
    for (const [i, s] of (meta.sources as unknown[]).entries()) {
      if (typeof s !== "object" || s === null || !(s as Record<string,unknown>)["label"]) {
        errors.push(`sources[${i}]: missing "label" field`);
      }
      const year = (s as Record<string, unknown>)["year"];
      if (year !== undefined && !/^\d{4}$/.test(String(year))) {
        warnings.push(`sources[${i}]: "year" should be a 4-digit number, got "${year}"`);
      }
    }
  }

  // Tags: must be from known vocabulary (warning, not error — allows evolution)
  if (meta.tags) {
    if (!Array.isArray(meta.tags)) {
      errors.push('"tags" must be an array');
    } else {
      for (const tag of meta.tags as string[]) {
        if (!(VALID_TAGS as readonly string[]).includes(tag)) {
          warnings.push(`Unknown tag "${tag}" — add to VALID_TAGS in types.ts if intentional`);
        }
      }
    }
  }

  // related_rules: warn only (IDs existence can't be checked without loading all rules)
  if (meta.related_rules) {
    if (!Array.isArray(meta.related_rules)) {
      errors.push('"related_rules" must be an array of rule IDs');
    } else {
      for (const id of meta.related_rules as string[]) {
        if (!/^[a-z0-9-]+$/.test(String(id))) {
          errors.push(`related_rules: "${id}" is not a valid kebab-case rule ID`);
        }
      }
    }
  }

  // Body: must have at least The Rule or Why
  if (!body.includes("## The Rule") && !body.includes("## Why")) {
    errors.push('Body must contain at least "## The Rule" or "## Why" section');
  }

  // Body sections: warn about unknown ones, don't block
  const sections = [...body.matchAll(/^## (.+)$/gm)].map((m) => m[1].trim());
  for (const section of sections) {
    if (!ALL_KNOWN_SECTIONS.has(section)) {
      warnings.push(`Unknown section "## ${section}" — will be included in full-text search only. Add to ALLOWED_EXTRA_SECTIONS if intentional.`);
    }
  }

  return { errors, warnings };
}

// --- Run validation ---

let totalFiles = 0;
let totalErrors = 0;
let totalWarnings = 0;
const results: ValidationResult[] = [];

for (const category of VALID_CATEGORIES) {
  const catDir = path.join(rulesDir, category);
  if (!fs.existsSync(catDir)) continue;

  const files = fs.readdirSync(catDir).filter((f) => f.endsWith(".md"));
  for (const file of files) {
    const filePath = path.join(catDir, file);
    const { errors, warnings } = validateFile(filePath, category);
    totalFiles++;

    if (errors.length > 0 || warnings.length > 0) {
      results.push({ file: path.relative(rulesDir, filePath), errors, warnings });
      totalErrors += errors.length;
      totalWarnings += warnings.length;
    }
  }
}

// --- Report ---

if (results.length > 0) {
  for (const r of results) {
    if (r.errors.length > 0) {
      console.error(`\n❌ rules/${r.file}`);
      r.errors.forEach((e) => console.error(`   error: ${e}`));
    }
    if (r.warnings.length > 0) {
      console.warn(`\n⚠️  rules/${r.file}`);
      r.warnings.forEach((w) => console.warn(`   warning: ${w}`));
    }
  }
}

console.log(`\n${totalFiles} files checked — ${totalErrors} error(s), ${totalWarnings} warning(s)`);

if (totalErrors > 0) {
  console.error(`\nFix errors above before merging.`);
  process.exit(1);
} else {
  console.log(`✅ All rule files valid.`);
  process.exit(0);
}
