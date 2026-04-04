# 3. The Hidden Cost of Vague Requests

Vague requests are costly in a way that clearly wrong requests are not.

A clearly bad request often fails quickly. A vague request can fail slowly while appearing useful. That is more dangerous, because it spends the user’s time, trust, and attention before the true gap becomes visible.

## Why vagueness is expensive

When a request is vague, the model must infer:

- the true objective
- the appropriate depth
- the relevant scope
- the expected format
- the acceptable trade-offs

Inference is not free. Each missing piece becomes an opportunity for shallow optimization. The model may choose speed over depth, coverage over mechanism, neat summary over meaningful investigation, or pleasing tone over honest uncertainty.

The result is not random failure. It is structured underperformance.

## Vague requests create false agreement

One of the most misleading outcomes in AI interaction is false agreement: the user feels understood, and the model sounds aligned, but both are operating on a weaker version of the task than the real one.

For example:

```text
Can you make this design cleaner?
```

That prompt could mean:

- simplify the visuals
- reduce the number of abstractions
- improve the code structure
- improve maintainability
- remove unnecessary features

The word “cleaner” feels precise because it carries an aesthetic preference. But it is operationally vague. A model may interpret it aesthetically, structurally, or minimally.

## Vagueness and hidden problems

The deeper cost is not only that the answer becomes weaker. It is that hidden issues remain hidden.

A vague request tends to favor what is visible:

- the named bug
- the mentioned file
- the explicit deliverable
- the obvious rewrite

But real problems often live outside the surface description:

- in upstream causes
- in downstream consequences
- in edge conditions
- in badly defined success criteria

If the request does not authorize or require deeper exploration, the model has little reason to keep going.

## A practical example

Consider the difference between these two prompts:

```text
Look at this module and suggest improvements.
```

```text
Review this module for behavioral risk, missing edge cases, and maintainability problems.
Look beyond style.
If the issues you find are symptoms of deeper structural problems, say so and trace them.
```

The second prompt does not simply ask for “more.” It changes where the model is allowed to look and what kinds of findings count.

## The user-side cost

Vagueness also damages the user. It encourages a cycle of reactive correction:

1. ask weakly
2. receive shallow output
3. patch the prompt
4. receive a better partial answer
5. discover another missing layer
6. repeat

This is one reason AI conversations can feel endless. The problem is not always that the model needs more turns. Sometimes the job was never properly defined at the start.

## Closing thought

Vagueness feels flexible, but in practice it creates hidden rigidity. The model locks onto a partial interpretation and begins optimizing around it. If you want stronger work, you must reduce ambiguity where it matters most: objective, scope, evaluation, and stopping rules.
