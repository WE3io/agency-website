# Agency Website

## Purpose (front desk)
This repo is the public front desk for our agency. It holds the copy, structure, and basic assets that explain who we are, what we do, and how to start a conversation.

## What it is / isn’t
**It is**
- A clean, content-first source of truth for pages and posts.
- A place to agree voice, tone, and brand promises.
- The starting point for a future site build.

**It isn’t**
- A full site framework or design system.
- A marketing automation stack.
- A dumping ground for internal ops.

## Content workflow
1. Raise a content request issue (`.github/ISSUE_TEMPLATE/content-request.md`).
2. Draft or update the relevant Markdown in `content/`.
3. Open a PR and link the issue.
4. Review for clarity, evidence, and tone (see `docs/voice-and-tone.md`).
5. Merge, then publish according to `docs/governance.md`.

## Definitions
- **Front desk**: The public-facing surface that helps people decide if we are a fit.
- **Content**: Copy, headlines, and page structure (not code or design).
- **Evidence**: Specific, verifiable statements (names, numbers, dates) or clear limits on what we can claim.
- **Governance**: How decisions are recorded and changes are approved.

## Website (Astro)
The site lives in `website/` and renders Markdown from `content/`.

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

## Netlify deploy
- Base directory: `website`
- Build command: `pnpm run build`
- Publish directory: `dist`
- Node version: 20 (LTS)
