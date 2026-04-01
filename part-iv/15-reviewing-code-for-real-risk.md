# 15. Reviewing Code for Real Risk

Code review is one of the easiest places for AI to sound useful while doing too little.

If the request is weak, the model often produces:

- summaries
- mild praise
- style commentary
- generic reminders

Those are not worthless, but they are often not what the user actually needs.

## Risk-first review

If you want review to matter, ask for risk:

```text
Review this change for bugs, regressions, edge cases, design risk, performance concerns, and missing tests.
Prioritize findings over summary.
If there are no clear findings, say so directly and note the remaining risks.
```

This works because it changes both the search target and the output contract.

## A useful output structure

Ask the model to respond with:

1. findings, ordered by severity
2. open questions or assumptions
3. a short conclusion

That structure reduces the tendency to bury the real problem inside a polite wall of commentary.

## What good review requires

Even a strong prompt cannot replace missing context entirely. Useful review improves when you include:

- what changed
- why it changed
- what behavior is supposed to remain stable
- what test coverage exists

## Closing thought

The best AI code reviews do not imitate a friendly teammate filling space. They imitate a careful engineer trying to prevent future pain.
