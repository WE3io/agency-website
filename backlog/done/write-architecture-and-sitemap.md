1. Outcome
- `docs/architecture.md` and `docs/sitemap.md` represent the current single-site Astro implementation.

2. Constraints & References
- Do not reference legacy variant directory structures, deprecated variant routes, or removed workflows.
- Route references must derive from `website/src/pages/`.

3. Acceptance Checks
- Every sitemap route maps to an existing page/endpoint.
- Architecture doc names actual active directories and build boundaries.

4. Explicit Non-Goals
- No route restructuring in application code.
