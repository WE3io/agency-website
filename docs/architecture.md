# Architecture

## Current Topology
- Application: Astro site in `website/`
- Static assets: `public/` (configured via Astro `publicDir`)
- Design tokens source: `tokens/tokens.json`
- Generated token CSS: `website/src/styles/tokens.generated.css`
- Deployment target: Netlify

## Code Structure
- Pages: `website/src/pages/`
- Layouts: `website/src/layouts/`
- Shared styles: `website/src/styles/`
- Site config/constants: `website/src/lib/`
- Content collections config: `website/src/content/config.ts`

## Runtime Boundaries
- Primary rendering is static Astro output.
- Brief page includes client-side interactivity.
- No server-backed persistence is required for the current product contract.

## Build and Release
- Install: `cd website && pnpm install`
- Build: `cd website && pnpm run build`
- Tokens: `cd website && pnpm run tokens:build`
- CI currently validates build output for pull requests.

## Route Surface (Source of Truth)
Routes are defined by files under `website/src/pages/`:
- `/` -> `index.astro`
- `/story` -> `story.astro`
- `/model` -> `model.astro`
- `/engagements` -> `engagements.astro`
- `/work` -> `work/index.astro`
- `/contact` -> `contact.astro`
- `/contact/success` -> `contact/success.astro`
- `/brief` -> `brief.astro`
- `/tools` -> `tools.astro`
- `/style-guide` -> `style-guide.astro`
- `/logo-iterator` -> `logo-iterator.astro`
- `/404` -> `404.astro`
- `/500` -> `500.astro`
- `/503` -> `public/503.html`

## Out of Scope for This Architecture Baseline
- Legacy multi-variant route trees
- Legacy per-variant source directory model
- External workflow dependencies removed from this repo
