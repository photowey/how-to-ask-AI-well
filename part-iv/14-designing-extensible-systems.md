# 14. Designing Extensible Systems

When people ask AI for system design, they often ask for sophistication. What they actually need is future affordability.

Extensible systems are not systems with the most abstractions. They are systems where likely future changes can happen without dragging the whole design apart.

## The common mistake

Users say:

```text
Design an extensible architecture for this.
```

The model responds with registries, factories, handlers, lifecycles, adapters, and abstractions of every kind. Some of that may be valid. But without a reason tied to future change, extensibility becomes an aesthetic rather than a discipline.

## Ask with change axes

Better:

```text
Future change axes:
1. new plugin types will be added
2. execution may move to remote isolation
3. scheduling strategies may change

Design the system so those changes are cheaper, without overbuilding V1.
```

This gives the model a real architectural target.

## Use non-goals to protect clarity

In design work, non-goals are often as important as goals:

- no distributed scheduling in V1
- no hot reload in V1
- no multi-language plugin support in V1

Those statements protect the design from seductive but mistimed complexity.

## What a good design answer should include

- module boundaries
- dependency direction
- extension points
- failure boundaries
- likely future migration paths

If these are missing, the answer may sound architectural while remaining shallow.

## Closing thought

Designing extensible systems with AI requires moving from “make it elegant” to “make likely change cheaper.” Once the question changes, the design conversation gets dramatically better.
