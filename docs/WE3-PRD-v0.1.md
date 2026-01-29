# WE3 PRD v0.1 — Demand-Side Activation & Brief Generator (Client-Side Fast-Pass)

## 0. Doc Meta
- **Feature/Initiative:** WE3 combined platform (demand-side v1) with client-side brief generator
- **Author / Date / Status:** Draft — 2025-xx-xx
- **Stakeholders:** Product, Design, Eng, Sales/BD, Ops, Legal/InfoSec
- **Decision Deadline / Launch Target:** TBC

## 1. Problem & Context

**One-liner:** A client-side brief generator that helps prospects self-qualify and produce crisp project briefs through a fast-pass chat, complete with crew shape and cost/timeline recommendations—all while keeping data local.

- **Problem statement:** Prospects (PE/corp innovation, startups/founders, internal community) cannot quickly self-qualify or produce a clear brief. Leads arrive noisy, causing slow time-to-first-call and lower close confidence.
- **Evidence:** WE3 positioning emphasizes clarity first; triad model depends on strong briefs; current inbound lacks consistent structure.
- **Users/Segments:** PE/corp innovation teams; startup founders; internal WE3 community. Common need: crisp problem framing to engage a crew.
- **Jobs to Be Done:** “When I explore WE3, I want to see how the crews work, costs/timelines, proof, and generate a credible brief so I can decide to engage.”
- **Why WE3 (story):** Small senior triads (product/design/engineering) with fractional surge and apprentices outperform big firms; we bridge strategy ↔ execution, bet on ourselves via studio/ventures, and publish a clarity tool as GTM differentiator.

## 2. Canonical Definitions

**Brief:** A structured document capturing problem, users, goals, constraints, timeline, budget range, and success criteria. A quality brief enables crew formation and scoping.

**Triad:** The core crew unit of product + design + engineering (senior practitioners). Triads may be augmented with fractional specialists or apprentices based on scope.

**Crew shape:** The composition and size of a team for a given brief. Shapes vary from core triad to triad + fractionals + apprentices, determined by scope, timeline, and budget.

**Fast-pass chat:** A guided 6–8 prompt conversation that produces a complete brief with gap checks and fit recommendations.

**Fit check:** Client-side logic that maps brief parameters (budget, urgency, scope) to recommended crew shape, estimated weeks, and cost band.

**Cost/timeline bands:** Pre-defined ranges (e.g., "2–4 weeks, $50–100K") that set expectations without detailed estimates.

## 3. Goals & Non-Goals
- **Goals:** Enable self-qualification; produce high-quality briefs via a fast-pass chat; shorten time-to-first-call; set expectations on crew shape/cost/timeline bands.
- **Non-Goals (v1):** Server-side persistence; heavy collaboration workspaces; full talent/recruiting portal; long-form CMS.
- **Success criteria:** Completion rate of fast-pass chat; % briefs meeting quality bar; time-to-first-call. (Guardrails: bounce before chat; drop-off mid-chat.)

## 4. Solution Outline

**Narrative / Experience**

Visitors learn who WE3 is for, see the triad/crew model, cost/timeline bands, proof/case studies, then launch a fast-pass chat. In ~6–8 prompts, they generate a brief with a client-side fit check (crew shape + week/cost band), copy/export locally, and optionally share a short-lived link.

**User Stories**

- As a prospect, I can view who WE3 is for, understand the triad model, and see proof points before starting
- As a prospect, I can launch a fast-pass chat that guides me through brief creation in 6–8 prompts
- As a prospect, I receive gap checks when I'm missing budget, success criteria, or constraints
- As a prospect, I see a complete brief summary with fit check (crew shape + cost/timeline band)
- As a prospect, I can copy the brief as Markdown or download as JSON
- As a prospect, I can share a short-lived link to collaborate on the brief without server storage
- As a prospect, I can book a call with my brief attached

**Key Flows**

A) Landing & Discovery
- User lands on WE3 site
- Views: Who we serve, triad/crew model explanation, cost/timeline bands, case studies
- Sees clear CTA: "Create Your Brief"

B) Fast-Pass Chat
- Guided prompts (6–8 total):
  1. What problem are you solving?
  2. Who are the users/stakeholders?
  3. What does success look like?
  4. What are your constraints? (tech, timeline, team)
  5. What's your budget range?
  6. What's your timeline/urgency?
  7. Gap checks: missing budget/success criteria/constraints trigger follow-up prompts
  8. Final review: brief summary shown
- All processing happens client-side
- Privacy notice: "Your data stays local, nothing stored on our servers"

C) Output & Next Steps
- Brief displayed as formatted summary
- Fit check shows: recommended crew shape, estimated weeks, cost band
- Actions available:
  - Copy to clipboard (Markdown)
  - Download JSON
  - Generate short-lived link (collaboration)
  - Book a call (brief auto-attached)

**UX Notes**

Guard-railed chat (like a guided interview), progressive gap checks (budget/success criteria/constraints), clear privacy note (local/ephemeral), copy/export affordances, short-lived link for collaboration, visible fit check.

**Fit/Expectations**

Sets expectations on what WE3 delivers, what the brief does/doesn't guarantee, and that no data is stored server-side (v1). Emphasize hands-on triad model vs. slideware.

## 5. Requirements (concise, testable)
- **Must-haves:**
  - R1: Client-side fast-pass chat (6–8 prompts) producing: problem, users/context, goals, constraints, timelines, budget range, success criteria.
  - R2: Dynamic gap checks for missing budget/success criteria/constraints; prompt user to complete.
  - R3: Outputs: on-page summary + copy-to-clipboard (Markdown), JSON download, and a client-side fit check mapping budget/urgency/scope → crew shape + week/cost band.
  - R4: Collaboration: short-lived session link that does not persist payload server-side + local export option.
  - R5: Privacy notice and “no server store” messaging; optional PII warning.
  - R6: Clear IA for demand-side proof: who WE3 is for, triad/crew model (core + fractional + apprentices), cost/timeline bands, case studies, and the three engagement types (strategic consulting, co-building startups, incubating internal/community ventures).
  - R7: Post-brief CTA to schedule/contact with brief attached by user (no auto-upload).
- **Nice-to-haves (if capacity):**
  - N1: “What would need to be true” block (risks/assumptions) auto-added to output.
  - N2: Lightweight lane hinting (PE vs startup vs internal) to adjust examples only.
  - N3: Micro-survey after completion (clarity rating).
- **Edge cases:** Offline/refresh → warn about loss; missing budget → fallback range suggestion; user refuses constraints → mark as risk; long text → truncate with user confirmation.

## 6. AI/Data Specifics
- **Input boundaries:** Client-side only; no server storage; warn against PII. Attachments not supported in v1.
- **Behavioral rules:** No invention; reflect user inputs; ask when unsure; surface gaps explicitly.
- **Latency / cost targets:** Sub-10s end-to-end per prompt on modern laptop; avoid heavy model calls (consider small/local or hosted with no retention).
- **Models/infra:** Client-only orchestration; if using API, ensure no logging/persistence and document vendor terms. Optional offline/local model TBD.
- **Quality bar:** All required fields present; fit check generated; risks/assumptions noted if gaps remain.

## 7. Architecture & Dependencies
- **System components:** Static FE (chat UI + prompt logic), client-side state, optional lightweight relay for short-lived links without payload storage.
- **Data flows / contracts:** Internal JS schema for brief; JSON export schema; fit-check rule table (crew shapes/week/cost bands).
- **Integrations:** Calendar/contact link only; no backend integrations in v1.
- **Security/Privacy:** No persistence; short-lived links must avoid payload storage; clear disclosures; sanitization of outputs for copy/export.
- **Ops/Tooling:** Feature flag for generator visibility; basic client-side logging (anonymous) optional; version tag in output footer.

## 8. Data Model

**Brief Schema (internal)**
```
{
  id: string (client-generated UUID)
  problem: string
  users: string
  goals: string[]
  constraints: string[]
  timeline: string
  budgetRange: { min: number, max: number, currency: string }
  successCriteria: string[]
  createdAt: timestamp
  version: string
}
```

**Fit Check Output**
```
{
  crewShape: "Core Triad" | "Triad + Fractional" | "Triad + Fractional + Apprentices"
  estimatedWeeks: { min: number, max: number }
  costBand: { min: number, max: number, currency: string }
  confidence: "high" | "medium" | "low"
  notes: string[] (e.g., ["Budget may be tight for scope", "Timeline is aggressive"])
}
```

**Export Formats**
- Markdown: formatted brief with sections
- JSON: full brief object + fit check
- Share link: tokenized URL with client-side brief reconstruction (no server payload)

## 9. Design & Visual Direction

**Visual Aesthetic**
- Clean, professional, approachable
- Emphasize clarity and structure (reflects WE3 positioning)
- Typography-forward with ample whitespace
- Subtle motion and progressive disclosure

**Key UI Elements**
- Clear "Create Your Brief" CTA (primary action)
- Chat interface: conversational but structured (not free-form)
- Progress indicator during fast-pass (e.g., "Step 3 of 6")
- Fit check visualization: crew shape diagram + cost/timeline bands
- Copy/export affordances prominent and clear
- Privacy notice visible but not intrusive

**Tone**
- Confident and competent, not salesy
- Direct and clear (no jargon unless defined)
- Helpful without being prescriptive
- Reflects hands-on builder mindset

## 10. Brand Values (informing experience)

WE3's core values should inform the product experience:
- **Do what's right:** Privacy-first architecture, transparent about no server storage
- **Build together:** Collaboration link enables team input on briefs
- **Stay curious:** Gap checks encourage thoughtful problem framing
- **Choose courage:** Clear CTAs, no friction to getting started
- **See with your heart:** Empathetic prompts that understand prospect challenges
- **Play like it matters:** Professional but not stuffy, makes brief creation feel important

## 11. Growth Loop

**Loop Mechanics**

1. **Activation:** Prospect creates brief via fast-pass chat
2. **Value delivery:** Gets fit check + crew recommendation immediately
3. **Share trigger:** Prospect shares brief link with internal stakeholders (PE partners, founders, innovation team)
4. **Discovery:** Recipients see WE3 value prop + their colleague's brief
5. **New activation:** Recipients create their own briefs for different projects

**Share Experience**

When someone opens a shared brief link:
- See brief summary with fit check
- Attribution: "Brief created by [Name] using WE3"
- Value prop: Who WE3 is for, triad model, proof
- CTA: "Create your own brief"

**Growth Drivers**
- High-quality briefs are inherently shareable (show clarity of thinking)
- PE/innovation teams naturally collaborate on briefs
- Each brief becomes a mini case study of WE3's value
- Viral coefficient target: 0.3–0.5 (30–50% of briefs shared lead to new brief creation)

## 12. Phasing / Roadmap

**MVP (Friends & Beta)**
- Demand IA: Who WE3 serves, triad/crew model, cost/timeline bands, case studies
- Fast-pass chat: R1–R3 (chat prompts, gap checks, outputs)
- Core requirements: R5 (privacy notice), R7 (post-brief CTA)
- Outputs: Markdown copy, JSON download, fit check visualization
- Manual brief quality review by Sales/Ops team
- Feature flag for visibility control

**V1 (Initial Public Launch)**
- Collaboration link (R4): short-lived shareable links
- "What would need to be true" risk/assumptions block (N1)
- Clarity micro-survey post-completion (N3)
- Lane hinting: PE vs startup vs internal examples (N2)
- Growth loop instrumentation and tracking
- Expanded case studies and proof points

**V2 (Scale & Enhancement)**
- Server-backed collaboration with legal/privacy review
- Authenticated save/return: users can save and edit briefs
- Richer CMS for case studies and content
- Talent/supply-side hub exploration
- Attachment support (with security review)
- Push notifications for shared brief updates

**Logical Dependency Chain**

Demand IA → Fast-pass chat core → Outputs/export/fit-check → Privacy/UX guardrails → Collaboration link → Growth loop instrumentation → Surveys/lanes → Authentication/persistence

## 13. Metrics & Evaluation

**Primary Metrics**
- Fast-pass completion rate (% who start and finish)
- % briefs meeting quality bar (internal scoring by Sales/Ops)
- Time-to-first-call from brief completion
- Brief-to-engagement conversion rate

**Secondary Metrics**
- Bounce rate before starting chat
- Mid-chat drop-off (by step)
- Optional clarity rating (post-completion survey)
- Manual Sales/Ops confidence score of briefs
- Share link creation rate
- Share link → new brief conversion rate (viral coefficient)

**Guardrail Metrics**
- Gap check trigger rate (should be high early, decrease as UX improves)
- Export usage rate (copy vs JSON vs share)
- Privacy notice view/acknowledgment rate

**Analytics Events**
- `landing_page_viewed`
- `create_brief_clicked`
- `chat_started`
- `chat_prompt_answered` (with step number)
- `gap_check_triggered` (with missing field)
- `gap_check_completed`
- `chat_completed`
- `brief_displayed`
- `fit_check_viewed`
- `markdown_copied`
- `json_downloaded`
- `share_link_created`
- `share_link_opened`
- `book_call_clicked`
- `privacy_notice_viewed`

**Instrumentation Plan**

Client-side eventing using privacy-respecting analytics:
- Events stored with anonymous session ID (no PII)
- Respect Do Not Track headers
- Local-only analytics or zero-logging vendor
- Weekly data export for manual analysis during MVP
- No cross-site tracking or third-party data sharing

**Review Cadence**
- Daily during first week of beta
- Weekly during beta phase
- Bi-weekly after public launch

## 14. Risks & Mitigations
- **Product:** Briefs still low quality → strengthen gap checks; add examples; show required fields progress.  
- **Technical:** Collaboration link leaking data → avoid payload on server; use tokenized P2P or client-side handoff.  
- **Operational:** Sales/Ops don’t trust outputs → align on quality bar, score briefs, iterate prompts.  
- **Legal/Privacy:** API logs data → pick no-log vendor or local-only; disclose clearly; no attachments v1.
- **Open questions:** Fit-check rule set; exact bands for cost/timeline; chosen model/vendor; P2P link feasibility.

## 15. Appendix (optional)
- Links: `we3/docs/business-info.md`, `we3/docs/innovation-process.md`, `we3/docs/we3_research_foundation_full.md`
- Story/positioning: `we3/docs/Small Teams for Big Challenges_ The WE3 Story.docx`
- Future: example prompts, fit-check rule table, IA sitemap, brand/tone notes.
