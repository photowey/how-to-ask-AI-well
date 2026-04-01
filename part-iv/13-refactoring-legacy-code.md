# 13. Refactoring Legacy Code

Legacy code invites two opposite failures: fearful inaction and reckless redesign. Weak AI prompting often oscillates between them.

The model either makes tiny cosmetic edits that leave the structure untouched, or it proposes a grand rewrite that ignores the real constraints of the system. Better requests create a middle path.

## What matters in legacy refactoring

In most legacy work, the goal is not beauty. It is controlled change:

- clarify responsibilities
- reduce coupling
- improve testability
- make future changes cheaper

That means the request should force the model to distinguish between:

- surface cleanup
- structural improvement
- future debt that still remains

## A better refactor request

```text
This is a refactoring task, not a cosmetic cleanup task.
Please improve the structure of this module for maintainability, testability, and future extension.
Do not propose a full rewrite.
First identify the main structural problems, then show the refactor direction, then state what debt remains.
```

## What to give the model

Provide at least:

- the module’s role
- current pain points
- common change scenarios
- known coupling or testing issues

Without those, the model may optimize for general cleanliness rather than the real cost centers.

## What success looks like

A good legacy refactor outcome usually includes:

- clearer responsibility boundaries
- fewer hidden dependencies
- more stable seams for testing
- a realistic account of what was improved and what was left alone

## Closing thought

Refactoring with AI works best when the request honors the real nature of legacy systems: not blank canvases, but constrained environments where better structure matters more than maximal novelty.
