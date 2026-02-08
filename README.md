# Agency Website

## Purpose
Public-facing website for WE3. Holds copy, structure, and assets that explain who we are, what we do, and how to start a conversation.

## Website (Astro)
The site lives in `website/` and uses static assets from `public/` (one level above `website/`, configured via `publicDir: "../public"` in `astro.config.mjs`).

### Pages
| Route | File | Description |
|-------|------|-------------|
| `/` | `index.astro` | Homepage |
| `/story` | `story.astro` | Our Story |
| `/model` | `model.astro` | The Model |
| `/engagements` | `engagements.astro` | Engagements |
| `/work` | `work/index.astro` | Work |
| `/contact` | `contact.astro` | Contact |
| `/brief` | `brief.astro` | Start Your Brief |
| `/tools` | `tools.astro` | Tools |
| `/style-guide` | `style-guide.astro` | Design system reference |
| `/logo-iterator` | `logo-iterator.astro` | Logo iteration tool |
| `/404` | `404.astro` | Custom 404 page |
| `/500` | `500.astro` | Custom 500 page |

### Key systems
- **Design tokens** — Style Dictionary pipeline (`pnpm run tokens:build`) generates `src/styles/tokens.generated.css` from `sd.config.js`
- **Logo variants** — SVG logos stored in `public/images/logos/`. Active variant controlled by `SITE.logo` in `src/lib/site.ts`. One-line change to swap logos site-wide.
- **Floating nav dock** — Contextual frosted-glass pill nav that appears at scroll 200px and docks into the footer stripe on desktop

### Install
```sh
cd website
pnpm install
```

### Run locally
```sh
cd website
pnpm run dev
```

### Build
```sh
cd website
pnpm run build
```
