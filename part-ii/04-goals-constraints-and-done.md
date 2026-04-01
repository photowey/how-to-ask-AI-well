# 4. Goals, Constraints, and Definitions of Done

If you want better AI work, three elements matter more than almost anything else:

- the goal
- the constraints
- the definition of done

Without these, even a smart model is operating in a fog.

## Goals: what the work is actually for

A goal is not the action. “Refactor this” is an action. “Refactor this so future pricing-rule changes stop touching five unrelated classes” is a goal.

The distinction matters because goals help the model choose trade-offs. When a request is underspecified, the model tends to optimize for generic usefulness. When the goal is clear, it can optimize for relevance.

Compare:

```text
Improve this function.
```

with:

```text
Improve this function so it is easier to test, easier to extend for new providers, and less dependent on global state.
```

The second prompt is already structurally better because it gives the model a reason to choose one kind of improvement over another.

## Constraints: what may not be sacrificed

Many bad AI results come from missing constraints, not missing intelligence.

Constraints tell the model what must remain true while the work changes. They can include:

- do not change public behavior
- do not increase latency materially
- do not break the external API
- do not rewrite the whole module
- do not introduce new dependencies

Constraints are not bureaucracy. They are how you preserve the shape of the problem.

## Definitions of done: the stopping rule

This is where many serious users still under-specify their requests.

A model can continue forever if the task is exploratory, or stop too early if the task is underspecified. A definition of done helps prevent both.

A strong definition of done often specifies:

- what must be found
- what must be changed
- what must be checked
- what must be reported

For example:

```text
Done means:
1. the root cause is identified
2. the issue is fixed
3. related hidden risks are reviewed
4. verification is performed
5. remaining risks are stated
```

That is much stronger than “be thorough.”

## Why this changes model behavior

A clear goal narrows relevance.
A clear constraint preserves boundaries.
A clear definition of done prevents premature closure.

Together, these three pieces change how the model allocates effort. They make it more likely that the model will:

- investigate before answering
- avoid attractive but irrelevant changes
- stop for the right reasons rather than the first convenient reason

## A reusable pattern

If you improve nothing else in your prompts, improve this:

```text
Goal:

Constraints:
1.
2.
3.

Done means:
1.
2.
3.
```

This small structure is one of the highest-leverage upgrades available in AI collaboration.

## Closing thought

People often think better prompting means more elaborate language. It does not. In most serious tasks, better prompting means better job design. Goals, constraints, and definitions of done are the core of that design.
