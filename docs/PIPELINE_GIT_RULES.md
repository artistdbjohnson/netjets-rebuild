# Pipeline Git Rules (Locked)

## Single-Writer Rule — Permanent

**Only one agent may write to GitHub.**

| Role | Allowed | Forbidden |
|------|---------|-----------|
| **Grok (team lead)** | All `github___*` write tools | — |
| **Harper / Benjamin / Lucas** | Local file edit only | Any GitHub write tool |

### Operating model
1. Parallel build — agents own path lanes, local tree only.
2. Serial land — Grok batches and pushes.
3. No help with the push.
4. Deploy last.

*Locked 2026-08-17. Applies to all subsequent projects.*
