# Contributing to designparser-mcp

Thanks for wanting to contribute. This is a community project built on top of [designparser](https://designparser.de) — a design education project focused on evidence-based design knowledge.

**All rule content is authored and curated by designparser.** Community contributions are reviewed and merged by the maintainer.

---

## Ways to contribute

### 1. Suggest a new rule (issues)
Open an issue using the "Suggest a rule" template. Describe:
- What the rule is
- Why it matters (research or established source)
- What category it fits

The maintainer will research, write, and add it if it fits the standard.

### 2. Report a bug in existing rule content (issues)
Found an error, outdated source, or incorrect number? Open a "Bug report" issue with the rule ID and what's wrong.

### 3. Submit a new rule (pull request)
If you want to write a rule yourself:
1. Check that the rule doesn't already exist (`list_rules` or browse `/rules`)
2. Copy `RULE_TEMPLATE.md` to `rules/<category>/<rule-id>.md`
3. Fill in all sections — sources are required
4. Run `npm run validate` and fix any errors
5. Open a PR

**Important:** Rule PRs are accepted at the maintainer's discretion. Not all suggestions will be merged. Quality bar is high — this is a curated knowledge base, not a wiki.

### 4. Improve the code (pull request)
Bug fixes, search improvements, new tools, performance — all welcome. For larger changes, open an issue first to discuss.

---

## Standards for rule content

- **Evidence-based only.** Every rule needs a real source (study, book, established standard).
- **Actionable.** Rules must give concrete, implementable guidance — not abstract principles.
- **Precise.** Use numbers where they exist. "Large enough" is not a rule. "44px minimum" is.
- **No duplication.** Check existing rules before writing a new one.
- **Tone.** Direct, no filler, no hedging. designparser tone: "Parsed, not guessed."

---

## Running locally

```bash
git clone https://github.com/designparser/designparser-mcp
cd designparser-mcp
npm install
npm run build
npm run validate
```

Test with Claude Desktop by pointing to the local build:

```json
{
  "mcpServers": {
    "designparser": {
      "command": "node",
      "args": ["/path/to/designparser-mcp/dist/src/index.js"]
    }
  }
}
```

---

## Code of conduct

Be direct, be useful, don't be a dick.
