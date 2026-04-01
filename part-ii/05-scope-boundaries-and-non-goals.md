# 5. Scope, Boundaries, and Non-Goals

One of the simplest ways to improve AI work is also one of the most neglected: define where the task begins, where it ends, and what should not be touched.

People often think scope is obvious. It rarely is.

## Scope is not the same as topic

If you say:

```text
Review this module.
```

the topic is clear. The scope is not.

Should the model:

- stay inside the file?
- inspect related modules?
- read the tests?
- check configuration?
- identify only current bugs, or also future design risk?

Different answers to those questions create very different outputs.

## Boundaries prevent runaway work

When users finally become more ambitious in their prompting, they often create the opposite problem: the request becomes so open that the model sprawls outward and never settles.

That is why good scope has two parts:

- **permission to explore**
- **permission to stop**

For example:

```text
You may inspect directly related modules, tests, and configuration files.
Do not expand into unrelated services or large-scale redesign unless a blocking structural issue requires it.
```

This gives the model enough room to investigate without turning every task into a platform rewrite.

## Non-goals are not optional

If you do not state non-goals, the model has to infer them. That is especially dangerous in design work.

Imagine asking for a plugin framework. Without non-goals, the model may decide to include:

- distributed scheduling
- hot reload
- multi-language plugins
- plugin marketplaces
- runtime sandboxing beyond current needs

None of those are absurd ideas. They may simply not belong in version one.

Non-goals are how you keep ambition from dissolving into sprawl.

## A good boundary statement

Here is a useful pattern:

```text
Allowed scope:
- the current module
- directly related upstream and downstream components
- current tests and configuration

Non-goals for this task:
- no full rewrite
- no unrelated refactor
- no new system-wide abstractions unless required by the current goal
```

This kind of structure reduces both underreach and overreach.

## Why this matters especially in design

In architecture work, boundaries are not just project-management tools. They shape the quality of the design. If the model cannot see the limits, it cannot make meaningful trade-offs. It may offer something more “complete” than necessary, while missing the actual point of the current phase.

That is why strong design requests nearly always include:

- what the system is for
- what future changes are expected
- what this version will not solve

## Closing thought

Scope is where seriousness becomes visible. Weak scope creates shallow work or runaway work. Strong scope gives the model just enough room to investigate and just enough discipline to stop where the task should end.
