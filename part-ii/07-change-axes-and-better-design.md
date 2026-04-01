# 7. Change Axes: How to Ask for Better Design, Not Just More Code

“I want a better design” is one of the most common and least useful requests people give to AI.

It sounds ambitious. It signals taste. It often produces generic architecture talk.

The reason is simple: “better design” says nothing about what must become easier to change.

## Design is about future movement

A design is not good in the abstract. It is good relative to the kinds of change you expect.

If future providers will be added, extensibility matters.
If deployment targets will change, isolation matters.
If domain rules shift constantly, change isolation matters.
If reliability is the problem, observability and failure boundaries matter.

What many users call “good design” is really one of these concerns in disguise.

## The concept of a change axis

A **change axis** is a dimension along which the system is likely to evolve. Naming these axes is one of the most powerful ways to improve design discussions with AI.

Examples:

- new plugin types will be added
- execution environments may move from in-process execution to remote isolation
- scheduling strategies may need to change
- new data sources may appear
- one subsystem will grow faster than the rest

Once the change axes are visible, the design discussion improves immediately. The model can stop guessing what “better” means and start organizing around real pressure.

## From taste language to design language

Compare:

```text
I want this framework to have better design and be more extensible.
```

with:

```text
Future change axes:
1. new plugin types will be added
2. scheduling strategies may change
3. plugin dependencies may conflict
4. execution may later move to a remote sandbox

Please propose a design that reduces the cost of those changes without overbuilding V1.
```

The second prompt is dramatically stronger. It gives the model a direction for abstraction, boundaries, and trade-offs.

## Change axes prevent fake sophistication

Without change axes, AI often defaults to the appearance of architecture:

- extra interfaces
- generic factories
- lifecycle managers
- plugin registries
- strategy layers

Some of those may be right. But without a reason tied to future change, they are only structure-shaped objects. Change axes force the conversation to justify complexity.

## A practical pattern

When asking for design, include:

```text
Future change axes:
1.
2.
3.

Constraints:
1.
2.

Non-goals:
1.
2.
```

Then ask the model to explain how each proposed abstraction reduces future cost rather than merely increasing elegance.

## A note from recent research

One useful line of thought behind this book comes from taking AI framing more seriously. A recent paper on trust-based versus fear-based prompting in AI debugging depth<sup><a href="/appendices/sources#source-trust-over-fear-paper">[1]</a></sup> sharpened a simple lesson: structure and framing influence how deeply the model investigates. In design work, that matters just as much. If you ask vaguely, the model optimizes for presentability. If you ask around change axes, the model is more likely to reason around evolution.

## Closing thought

Better design is not what you get by asking for more pattern language. Better design is what you get when you define what future changes must become cheaper. Once you learn to ask that way, architecture conversations with AI become far more grounded.
