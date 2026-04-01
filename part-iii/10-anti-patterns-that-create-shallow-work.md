# 10. Anti-Patterns That Push AI Back Into Shallow Work

It is useful to know what to do. It is often even more useful to know what reliably makes things worse.

This chapter focuses on anti-patterns that do not merely weaken AI output. They specifically push the model toward shallow work.

## Anti-pattern 1: Action without objective

```text
Fix this.
```

The problem is obvious: the model knows the first step, but not what the work is for. It may patch the immediate issue while leaving the real concern untouched.

## Anti-pattern 2: Negative preference without completion logic

```text
Don’t give me an MVP.
```

This names frustration, not a stopping rule. It does not tell the model what must be included before the task counts as complete.

## Anti-pattern 3: Speed language mixed with depth language

```text
Please solve this quickly, but be thorough.
```

If no priority is stated, the model often defaults to visible progress. That usually means quick surface work.

## Anti-pattern 4: Design language without change axes

```text
Give me a better architecture.
```

Better for what? Easier extension? Lower coupling? Faster onboarding? More observability? Without a direction of change, “better” becomes decorative.

## Anti-pattern 5: Review without review criteria

```text
Please review this.
```

This can produce almost anything:

- a summary
- praise
- style notes
- superficial risks

If you want findings, you must define what counts as a finding.

## Anti-pattern 6: Missing evidence

```text
If it looks good, just tell me it’s done.
```

That wording invites a confidence-based answer. If the task matters, confidence is not enough.

## Anti-pattern 7: Hidden scope expansion

Some users do the opposite of under-specifying. They imply a giant scope without naming it:

```text
Design a plugin framework for us.
```

Does that mean in-process loading only? Hot reload? Multi-tenant isolation? Versioning? Distributed execution? Without non-goals, this becomes a trap.

## Anti-pattern 8: “Just give me next steps”

Sometimes this is appropriate. Often it is a way of accepting incompletion too early. If work still belongs to the current task, “next steps” can become a disguise for unfinished execution.

## Closing thought

Anti-patterns matter because they often feel normal. They sound like work. They are not. They are the linguistic forms of ambiguity, and ambiguity rewards shallow optimization.
