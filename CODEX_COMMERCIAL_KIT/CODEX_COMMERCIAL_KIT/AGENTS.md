# Codex project rules

- Read `START_HERE.txt`, `docs/IMPLEMENTATION_GUIDE.md`, and the active SKU files before editing.
- Work in small, complete slices: implementation, fixture, test, evidence, checkpoint.
- Keep `productionPublish=false` until the user explicitly authorizes the exact SKU, version, and target.
- Never claim Google Sheets/AppSheet/Web deployment, persistence, permissions, or formulas are verified without live evidence.
- Use `reference/` as a deterministic domain reference only; do not ship its in-memory store as production persistence.
- Do not put credentials, customer data, public links, or personal file IDs in source control or release ZIPs.
- For a bug: reproduce, add a failing regression, patch the smallest correct layer, rerun the repro and impacted regression set.
- Run `npm test`, `npm run build:gas`, and `npm run check:kit` before handing off local work.
- Update `PROGRESS.md`, `BLOCKERS.md`, `TEST_REPORT.md`, and `DECISIONS.md` when a work item changes status.
- `NOT_RUN` and `BLOCKED` are evidence states, never passes.
