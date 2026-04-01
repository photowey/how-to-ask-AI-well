# 8. The Eight Modules of a Strong Request

By now, the book has argued for better goals, clearer scope, stronger constraints, explicit non-goals, and real verification. This chapter pulls those ideas into one operating model.

When a request is strong, it usually contains eight modules. Not every task needs them at the same depth, but serious work benefits from treating them as a checklist.

## The eight modules

1. **Goal**  
   What the work is really for.

2. **Definition of done**  
   What must be true before the task can stop.

3. **Context**  
   The facts, history, files, symptoms, or audience that shape the problem.

4. **Scope**  
   What areas are in play.

5. **Boundaries**  
   Where the task should not spread.

6. **Constraints**  
   What may not be sacrificed.

7. **Verification**  
   What counts as proof.

8. **Output shape**  
   What form the answer should take.

## Why modules work better than vague advice

Generic advice such as “be specific” is too weak because it does not tell you *which kind* of specificity is missing. A request can be highly detailed and still be weak if it lacks a definition of done. It can be polite and explicit and still be weak if it lacks verification. It can be technically rich and still be weak if it does not define boundaries.

Thinking in modules gives you diagnostic power. When a prompt fails, you can ask:

- Did I fail to define the goal?
- Did I omit the stopping rule?
- Did I provide context but no scope?
- Did I describe constraints but no output shape?

This is far more useful than asking whether the prompt was “good enough.”

## An example

Here is a weak request:

```text
Please improve this module and make the design better.
```

Here is the same request with the eight modules:

```text
Goal:
Improve this module so it is easier to extend for new providers and easier to test.

Done means:
1. the main extension points are clear
2. unnecessary coupling is reduced
3. the proposed structure is explained
4. remaining technical debt is stated

Context:
This module currently handles payment-provider selection, retries, and logging in one place.

Scope:
You may inspect directly related interfaces, tests, and configuration.

Boundaries:
Do not redesign unrelated services or propose a full system rewrite.

Constraints:
1. public behavior must not change
2. new providers should remain straightforward to add

Verification:
Explain how the new structure would be tested and what would confirm the refactor helped.

Output:
Give me a diagnosis, a refactor proposal, and a list of risks.
```

This is not only longer. It is more governable.

## The minimum viable structure

If eight modules feel too heavy, start with four:

- goal
- done
- boundaries
- verification

That smaller set alone can dramatically improve results.

## Closing thought

You do not need literary prompts. You need complete requests. The eight modules make “complete” visible.
