# WE3 Agency Front Desk — Codex Variant Sitemap

```mermaid
graph TD
  Home[/codex/] --> Story["#why-we3"]
  Home --> Serve["#who-we-serve"]
  Home --> Model["#triad-model"]
  Home --> Layers["#three-layer-team"]
  Home --> Engagements["#engagement-modes"]
  Home --> Pricing["#pricing-teaser"]
  Home --> Proof["#case-studies"]
  Home --> Community["#community"]
  Home --> Values["#values"]
  Home --> Brief["#brief-builder"]
  Home --> Contact["#contact"]

  BriefRoute[/codex/brief] --> Brief
  Share[/codex/share/:token] --> ShareView["Shared Brief View"]
  ShareView --> Home
```

## Notes
- Codex uses a single‑page narrative with anchored sections for the core story.
- `/codex/brief` is a dedicated entry that scrolls/lands to the Brief Builder section.
- `/codex/share/:token` is a stub for the brief‑share flow (v1 target; can render a read‑only brief for now).
