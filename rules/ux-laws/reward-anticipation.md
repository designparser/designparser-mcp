---
id: "reward-anticipation"
title: "Reward Anticipation"
category: "ux-laws"
priority: "medium"
tldr: "The moment before a reward arrives, when its size or timing is uncertain, can drive more engagement than the reward itself, an effect studied via reward prediction error and variable ratio reinforcement research. Interfaces that introduce unpredictability (pull to refresh, spinning loaders, variable notification counts) resemble this pattern, but direct evidence from consumer interfaces is limited."
tags:
  - ux-law
  - conversion
  - interaction
related_rules:
  - decoy-effect
  - default-effect
sources:
  - label: "Schultz, Dayan, Montague. A Neural Substrate of Prediction and Reward. Science, 275(5306)"
    year: "1997"
  - label: "Ferster, Skinner. Schedules of Reinforcement. Appleton-Century-Crofts"
    year: "1957"
  - label: "Brignull. darkpatterns.org (now deceptive.design), coinage of \"dark pattern\""
    year: "2010"
  - label: "Belgian Gaming Commission. Ruling on paid loot boxes under the Belgian Gaming and Betting Act"
    year: "2018"
---

## The Rule
- When a feature depends on repeat engagement, design the moment of anticipation, not just the reward. This is what the user sees and feels between the trigger action and the outcome.
- Uncertainty in outcome (will there be new content, how many likes, what drops) can increase persistence and repeat engagement more than a guaranteed, fixed outcome, an effect grounded in reinforcement-learning research. Not every uncertain outcome produces this, it is not automatic.
- A brief, variable delay before revealing an outcome (a spinner, a shuffle animation, a slot-style reveal) can be used deliberately. Use it only where the delay reflects real processing, or where the user retains control over whether to repeat the action.
- Predictable, fixed reward delivery is the correct choice for transactional and utility interfaces (checkout confirmation, form submission, file save). Do not introduce artificial uncertainty there.
- Any use of variable reward timing or size must leave the user able to stop, exit, or ignore the loop without penalty or friction.

## Why
- Schultz recorded primate neurons (Schultz, Dayan & Montague 1997): midbrain dopamine neurons fire to a cue predicting reward, not to its consumption. Firing rises above baseline when reward exceeds prediction, dips below when it falls short, the reward prediction error signal.
- The prediction error signal is largest when the outcome is uncertain. A fully predicted reward produces little or no dopamine response at delivery, since the firing already occurred at the predictive cue. This is why the response concentrates in anticipation, not the outcome itself.
- Skinner and Ferster's operant research (1950s) studied variable ratio schedules: reinforcement after an unpredictable number of responses. These produce steadier, more extinction-resistant response rates than fixed schedules, a separate behavioral evidence base from the dopamine findings.
- These are two separate research programs, different eras and species (Skinner: pigeons and rats; Schultz: primate neurons, decades later). Interface design writing often merges them into one loose narrative. Neither directly measured a consumer app, a notification badge, or a UI pattern.

## When It Breaks
- Popular design writing often claims a feature gives users "a dopamine hit." Schultz's data show phasic dopamine firing to a reward-predicting cue under uncertainty, a prediction error signal, not a hit tied to any UI element. This misstates the finding.
- Repeated exposure to the same variable reward pattern produces habituation. Once a pattern becomes expected (pull to refresh sometimes shows nothing new), the anticipatory response should diminish. This is the mechanism behind compulsive-use complaints about variable reward interfaces.
- Harry Brignull coined "dark pattern" in 2010 (now "deceptive pattern") for interfaces designed to trick users into unintended actions. Engineered unpredictability that extends session time or spending, without real user benefit, sits inside that definition. Treat it as an ethical limit.
- Belgium's Gaming Commission ruled in April 2018 that paid loot boxes with randomized, purchasable rewards can be unlicensed gambling. The precedent applies to randomized, monetized rewards specifically, not to unpredictability in general; a free pull to refresh is not addressed by it.

## In Practice
- Pull to refresh with content that is not guaranteed to have changed: the gesture, the release animation, and the load delay form the anticipation phase before an uncertain outcome.
- Notification badges and counts that vary in number and timing rather than appearing on a fixed schedule.
- Loot boxes and randomized in-app reward reveals, where a purchased or earned action has an uncertain outcome revealed after a short animated delay.
