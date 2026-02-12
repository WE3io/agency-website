# WE3 Product Requirements Document

## Status
- Status: Active
- Effective date: 2026-02-12
- Supersedes: `docs/WE3-PRD-v0.1.md`, `docs/WE3-PRD-v0.2.md`

## Product Scope
WE3 is a public-facing agency website that:
- Explains who WE3 is, who it serves, and how it works.
- Presents the triad model and engagement pathways.
- Provides a brief builder that helps prospects produce a structured project brief.

## Audience
- Prospective clients (founders, operators, innovation teams).
- Referral and partner stakeholders evaluating fit.
- Internal team members who use the brief output for discovery.

## Goals
- Make the WE3 value proposition clear within one page view.
- Improve inbound lead quality using a guided brief flow.
- Reduce time-to-first-call by standardizing intake context.
- Keep the initial brief flow privacy-first and operationally simple.

## Explicit Non-Goals
- No authenticated accounts.
- No server-side brief persistence in this phase.
- No CMS migration as part of this phase.
- No recruiting portal or talent marketplace.

## Core Requirements
1. Story and model pages must explain WE3 positioning and engagement model.
2. Brief flow must capture: problem, users, goals, constraints, budget, timeline, and success criteria.
3. Brief output must be exportable in human-readable and machine-readable formats.
4. Contact path must be visible from all core pages.
5. Content and docs must stay aligned with shipped routes and architecture.

## Success Metrics
- Brief start rate from core CTA.
- Brief completion rate.
- Contact conversion rate from brief completion.
- Time from brief completion to first call.
- Internal quality rating of submitted briefs.

## Release Assumptions
- Current release model is a single Astro site in `website/`.
- Static deployment target remains Netlify.
- Token pipeline remains Style Dictionary based.
- Analytics and external integrations are optional and can be phased later.

## Resolved Contradictions from Prior PRDs
- Data handling baseline: no server-side persistence for brief payloads in this phase.
- AI/runtime baseline: brief quality is achieved through deterministic guidance and rules first; external AI calls are deferred unless approved in a future ADR.
- Engagement framing: current docs cover consulting, co-building, and venture pathways without requiring route proliferation.
