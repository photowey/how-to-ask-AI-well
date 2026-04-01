# 12. Debugging Production Problems

Production debugging is where weak AI collaboration becomes expensive.

A shallow result here is not merely annoying. It can delay mitigation, hide root cause, and create false confidence under pressure. That is why production debugging needs stronger prompt structure than casual problem solving.

## What usually goes wrong

Users under pressure often ask like this:

```text
Service is failing. Help me fix it.
```

The AI then does something understandable but inadequate:

- it locks onto the visible error
- suggests the most likely immediate fix
- ignores the broader failure chain
- stops before verification is real

## What a better request looks like

```text
This is a depth-first debugging task.
Do not stop at the visible symptom.
Identify the root cause, inspect directly related upstream and downstream components, and show how the fix should be verified.
If direct verification is not possible, define the exact checks and expected results.
```

Then provide:

- the symptom
- the expected behavior
- recent changes
- related modules
- logs, monitoring, or reproduction clues

## The key shift

In production work, you are not merely asking for an explanation. You are asking the model to help build a decision path under uncertainty. That path must distinguish:

- what is known
- what is inferred
- what is unverified
- what is risky

If the model does not separate those clearly, it may sound useful while increasing operational confusion.

## A minimal production-debugging frame

```text
Goal:
Find the root cause and define a safe fix or mitigation.

Done means:
1. root cause is stated
2. impact scope is stated
3. fix or mitigation is defined
4. verification steps are stated
5. remaining unknowns are stated
```

## Closing thought

In high-pressure debugging, asking AI well means reducing false certainty. A good request helps the model investigate deeper while staying honest about what has and has not been confirmed.
