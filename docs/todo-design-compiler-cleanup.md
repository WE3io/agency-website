# Design Compiler Cleanup TODO

## Remaining cleanup items
- [ ] If Neon DB already exists, drop legacy columns `radius_unit` and `spacing_unit` (or leave unused).
- [ ] Update audit docs to match new named scales (remove `radiusUnit`/`spacingUnit` references):
  - `design-compiler-audit.md` (several sections still reference single-unit radius/spacing)
- [ ] Review other docs in `/docs` for legacy mentions and update if needed (search: `radiusUnit`, `spacingUnit`).
- [ ] (Optional) Backfill stored designs in Neon with updated `tokens_json` (so new `radius.small` is present everywhere).

## Notes
- Local JSON data (`data/projects.json`) already scrubbed.
- DTCG output now uses `reference.radius`/`system.radius` and `reference.spacing`/`system.spacing` only.
