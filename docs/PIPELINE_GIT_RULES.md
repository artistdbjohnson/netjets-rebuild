# Pipeline Git Rules (Locked)

**Status:** Permanent · Locked 2026-08-17  
**Scope:** This project and all subsequent multi-agent builds  
**Skill:** `team-git-rules` (load before any GitHub write or deploy)

---

## 1. One writer to GitHub

Only **Grok** (or one user-named agent) may call `github___*` **write** tools.

Everyone else stops.

| Allowed for sole writer | Forbidden for all others |
|-------------------------|--------------------------|
| `github___push_files` | Same |
| `github___create_or_update_file` | Same |
| Branch / PR create | Same |
| Any GitHub write | Same |

Read tools are fine for everyone.

## 2. Parallel build, serial land

Agents write files into the **local tree only**.  
One agent batches and pushes.

```
[Lucas] [Benjamin] [Harper]  →  local tree  →  Grok lands  →  GitHub  →  Deploy
     parallel build                serial
```

## 3. No “help with the push”

Other agents may prepare content.  
They may **not** call write tools — not even “just this one file.”

## 4. Hard lanes by path

Example lanes (assign at kickoff):

| Agent | Owns locally | Pushes? |
|-------|--------------|---------|
| Lucas | `src/components/fleet/**`, Three.js | Never |
| Benjamin | Rates, FAQ, glass intensity | Never |
| Harper | Copy / content pages | Never |
| Grok | Integration + **all remote writes** | Yes |

## 5. Deploy is last

No Vercel / production activity until:

1. Local tree is complete for the intended slice  
2. Sole writer has landed that source to GitHub (or explicit sole-writer file deploy)

Deploy is not a progress signal during build.

---

## Why this exists

Concurrent `github___*` writes trigger platform dedupe locks  
(*“Another agent already completed … successfully”*).  
Local `git push` has no credentials here.  
Worktrees isolate local checkouts — **not** remote writers.

---

## Pre-build checklist

- [ ] Sole writer = Grok (unless user names other)
- [ ] Path lanes assigned
- [ ] Team idle on GitHub writes
- [ ] Deploy held until land complete

*Do not relax without explicit user override.*
