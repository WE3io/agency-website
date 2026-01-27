# Agent Onboarding: Multi-Variant Construction

Welcome to the WE3 Agency Website experiment. You are building one of four side-by-side variants.

## Your Remit
- **Claude**: Owns `src/variants/claude/` and `src/pages/claude/`
- **Codex**: Owns `src/variants/codex/` and `src/pages/codex/`

## The Ground Rules
1.  **Isolation**: Stay inside your `variants/` folder. Do not modify other agent's code.
2.  **Styles**: Use Astro scoped CSS. **Rule**: Extend visual ideas through `tokens/tokens.json` extensions, not hard-coded CSS values.
3.  **Baseline**: Start with the **Curated Collector Domestic** theme. Reference it at `localhost:4321/style-guide`.
4.  **Brief Builder**: Must be **deterministic and local**. No external AI APIs in V0. Output 1 human-readable artifact + 1 JSON artifact.
5.  **Proxying**: Your actual URL route lives in `src/pages/[agent-name]/`. Use these files as simple proxies to your `variants/` implementation.

## Shared Resource usage
- **Tokens**: Run `npm run tokens:build` after editing `tokens/tokens.json`.
- **Content**: Use `src/content/pages/[agent-name]/` for your variant's markdown files.

Good luck. Express new ideas, but keep the system integrity.
