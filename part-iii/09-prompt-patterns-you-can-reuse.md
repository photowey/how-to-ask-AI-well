# 9. Prompt Patterns You Can Reuse

Patterns matter because real work repeats. You will not want to design a request from scratch every time you need a deep bug investigation, a code review, or a design discussion.

But reusable patterns work only when they remain structural rather than ornamental. A good pattern is not a dramatic paragraph. It is a compact frame that can hold real work.

## Pattern 1: Complete-delivery task

Use this when you do not want shallow closure:

```text
Treat this as a complete-delivery task.
First scan the full relevant scope.
Within the current scope, close the work in one pass.
Do not replace unfinished work with “next step” suggestions.
Only stop for real blockers.
```

## Pattern 2: Deep debugging

Use this when the symptom is visible but the cause is not:

```text
This is a depth-first debugging task.
Do not stop at the visible error.
Find the root cause, inspect directly related upstream and downstream components, and state how the fix was verified.
If there are hidden related risks, name them.
```

## Pattern 3: Design before implementation

Use this when the task is architectural or still ambiguous:

```text
Do not implement yet.
First propose 2-3 design approaches, explain boundaries, trade-offs, change axes, and likely future evolution costs.
Recommend one approach and justify it before moving to implementation.
```

## Pattern 4: Risk-first code review

Use this when you want review findings rather than style comments:

```text
Review this change for bugs, regressions, edge cases, design risk, and missing tests.
Do not prioritize style feedback.
If there are no clear findings, say so directly and note the remaining risks.
```

## Pattern 5: Better design through change axes

Use this when “make it better” is too vague:

```text
Future change axes:
1.
2.
3.

Please propose a design that reduces the cost of those future changes without overbuilding this version.
```

## How to adapt patterns correctly

Do not merely paste patterns. Replace their abstractions:

- replace “scope” with the actual module, repo, system, or workflow
- replace “constraints” with actual business or technical limits
- replace “verification” with evidence that matters for this task
- replace “done” with criteria that would actually satisfy you

## Closing thought

Patterns are not there to make you sound more advanced. They are there to stop you from forgetting the same crucial pieces under time pressure.
