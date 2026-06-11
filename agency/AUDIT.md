# Alfred Capability Audit — Growvera Agency OS

**Date:** 2026-06-11 | **Installed:** 51 agents (`~/.claude/agents/`), 757 skills (`~/.claude/skills/`)

Purpose: map every service line to what Alfred can actually deliver today, flag gaps, and define the self-improvement loop. Working document — re-audit quarterly or when a service line changes.

---

## 1. Web Design (UI/UX)

| Layer | Installed coverage |
|---|---|
| Agents | `designer` (UI/UX designer-developer, visual polish), `cs-frontend-engineer` (framework/rendering/a11y decisions), `cs-ux-researcher` (personas, journey maps, usability analysis) |
| Design skills | `frontend-design`, `frontend-design-direction`, `ui-design-system`, `design-system`, `canvas-design`, `color-expert`, `make-interfaces-feel-better`, `liquid-glass-design`, `nothing-design` |
| Conversion skills | `landing`, `landing-page-generator`, `page-cro`, `form-cro`, `signup-flow-cro`, `onboarding-cro`, `popup-cro`, `customer-journey-map` |
| Motion | `motion-ui`, `motion-foundations`, `motion-patterns`, `gsap-core`, `gsap-scrolltrigger`, `gsap-react` |
| QA | `a11y-audit`, `frontend-a11y`, `visual-verdict`, `full-page-screenshot`, `click-path-audit` |

**Rating: STRONG.** Deepest service line in the stack.

**Optimizations:**
- Build a Growvera design-system starter (tokens, type scale, component set) once via `design-system` + `ui-design-system`; reuse on every client to cut design time ~40%.
- Make `visual-verdict` + `full-page-screenshot` a mandatory pre-preview gate — never send a Vercel URL without a screenshot pass.
- Run `page-cro` on every homepage before client review, not after launch. CRO baked in is a selling point against local competitors.

---

## 2. Copywriting

| Layer | Installed coverage |
|---|---|
| Agents | `writer`, `content-strategist` (ships with `copywriting`, `copy-editing`, `email-sequence`, `content-creator` skills), `cs-content-creator` (brand voice + SEO consistency) |
| Core skills | `copywriting`, `copy-editing`, `article-writing`, `grammar-check`, `content-humanizer`, `brand-voice`, `value-prop-statements` |
| Channel skills | `email-sequence`, `cold-email`, `ad-creative`, `social-content`, `landing`, `marketing-psychology` |

**Rating: STRONG.**

**Optimizations:**
- Always run `content-humanizer` + `grammar-check` as the final pass — Australian small-business owners spot AI-sounding copy instantly, and so do answer engines.
- Capture each client's voice with `brand-voice` / `voice-builder` in discovery and store it in the client folder; every later copy task reads it first. Kills the #1 revision driver (wrong tone).
- Use `marketing-psychology` on pricing/CTA sections specifically — highest-leverage 30 minutes per project.

---

## 3. SEO + AI Visibility (AEO)

| Layer | Installed coverage |
|---|---|
| Agents | `cs-aeo` (dedicated AEO agent: E-E-A-T audit, optimization variants, citation tracking ledger, refuses to trade SEO for AEO), `growth-marketer`, `cs-demand-gen-specialist` |
| SEO skills | `seo`, `seo-audit`, `ai-seo`, `site-architecture`, `schema-markup`, `schema`, `programmatic-seo`, `directory-submissions` |
| AEO skills | `aeo`, `search-first` |
| Intel skills | `competitor-analysis`, `competitive-intel`, `competitor-alternatives`, `competitive-teardown` |

**Rating: STRONG** — and the strongest differentiator. AEO is exactly Growvera's expansion wedge: local SEO clients already trust you for Google Maps; "be the business ChatGPT recommends" is the natural upsell, and `cs-aeo`'s citation ledger gives you a reportable metric no local competitor offers.

**Optimizations:**
- Productize: monthly retainer deliverable = `seo-audit` + `aeo` E-E-A-T pass + citation-ledger update. Same report skeleton every month, client-branded.
- `schema-markup` on every website build by default (LocalBusiness, Service, FAQ) — near-zero marginal cost, direct AEO impact.
- `directory-submissions` + `programmatic-seo` for location/service page matrices — the classic local-SEO multiplier, already installed.
- Gap to watch: rank/citation *tracking over time* relies on the ledger plus manual checks. Schedule a monthly Perplexity/ChatGPT spot-check routine until tooling improves.

---

## 4. Branding

| Layer | Installed coverage |
|---|---|
| Agents | `designer`, `cs-product-strategist`, `cs-ux-researcher`, `content-strategist` |
| Identity skills | `brand-guidelines`, `brand-voice`, `voice-builder`, `product-name`, `color-expert` |
| Strategy skills | `positioning-ideas`, `value-proposition`, `value-prop-statements`, `ideal-customer-profile`, `user-personas`, `competitive-battlecard`, `market-segments` |
| Asset skills | `image`, `fal-ai-media` (AI image/media generation), `canvas-design` |

**Rating: ADEQUATE.** Strategy and verbal identity are strong; visual identity production is the soft spot.

**Gap:** no dedicated logo-design capability. `image`/`fal-ai-media` produce concepts and moodboards, but final vector logo work needs a human designer or external tool.

**Optimizations:**
- Scope branding packages as: strategy + voice + guidelines + colour/type system (Alfred-native, high margin) with logo as either AI-concepts-refined-by-contractor or client-supplied. Price the contractor in.
- Standardize the deliverable: one `brand-guidelines` document template reused across clients.
- Bundle branding into every website project as a mini "brand sheet" (logo usage, colours, fonts, voice) — 2 hours of work, visible value, justifies the upfront fee.

---

## 5. Websites (Full Builds → Vercel)

| Layer | Installed coverage |
|---|---|
| Agents | `cs-frontend-engineer`, `cs-fullstack-engineer`, `cs-backend-engineer`, `executor` (implementation), `architect`, `qa-tester`, `verifier`, `security-reviewer`, `devops-engineer`, `code-reviewer` |
| Build skills | `nextjs-turbopack`, `react-patterns`, `react-performance`, `vite-patterns`, `frontend-patterns`, `saas-scaffolder`, `landing-page-generator` |
| Infra skills | `deployment-patterns`, `env-secrets-manager`, `ship-gate`, `release`, `feature-flags-architect` |
| Data/payments | `postgres-patterns`, `prisma-patterns`, `database-schema-designer`, `stripe-integration-expert` |
| QA skills | `e2e-testing`, `browser-qa`, `pw` (Playwright), `a11y-audit`, `security-review`, `security-scan`, `performance-profiler` |

**Rating: STRONG.** Full pipeline from scaffold to deployed preview exists.

**Optimizations:**
- Create one canonical Growvera starter repo (Next.js + Tailwind, schema markup, analytics, contact form, SEO defaults pre-wired). Every client site forks it. This is the single biggest delivery-speed lever.
- Make `ship-gate` the standard pre-preview checklist: build passes, `a11y-audit`, `security-scan`, Lighthouse, screenshots. Preview URLs only go out gate-green.
- `stripe-integration-expert` enables a future "bookings/payments" upsell tier for local businesses — note it in PRICING but don't lead with it.
- Gap to watch: no CMS-specific skill (WordPress/Sanity). Fine — standardize on Next.js + markdown/Sanity-lite content and position "we maintain it" as part of the retainer.

---

## 6. Automations (NEW)

| Layer | Installed coverage |
|---|---|
| Agents | `cs-backend-engineer`, `executor`, `devops-engineer`, `tracer`, `debugger` |
| Workflow skills | `workflow-builder`, `agent-workflow-designer`, `process-mapper`, `automation-audit-ops`, `autonomous-loops` |
| Integration skills | `api-connector-builder`, `mcp-server-builder`, `browser-automation`, `universal-scraping-architect`, `data-scraper-agent` |
| Ops skills | `email-ops`, `inbox-triage`, `email-template-builder`, `google-workspace-ops`, `google-workspace-cli`, `social-publisher`, `unified-notifications-ops`, `sms`, `marketing-ops` |

**Rating: ADEQUATE → STRONG potential.** The pieces exist; what's missing is packaging and a delivery pattern.

**Gaps:**
- No Zapier/Make/n8n-specific skill — automations will be custom code or scripts, which means *you* maintain them. That's a feature (retainer lock-in) if priced as such, a trap if not.
- No standard hosting pattern yet for client automations (cron, serverless, VPS). Decide once: Vercel cron / Railway, write it down, reuse.

**Optimizations:**
- Launch with 3 fixed-scope, productized automations only: (1) lead-capture → CRM/email notification, (2) review-request follow-up sequence (SMS/email via `sms` + `email-ops`), (3) social auto-posting via `social-publisher`. No bespoke automation until those sell.
- Use `process-mapper` in discovery — map the client's manual process first, quote against hours saved per month. That's the pricing anchor.
- `automation-audit-ops` as a paid discovery product ("Automation Audit", fixed fee) that converts into builds.

---

## Cross-Cutting: Sales, Contracts, Ops

Already installed and directly usable for the agency itself: `contract-and-proposal-writer`, `rfp-responder`, `pricing` / `pricing-strategy` / `pricing-strategist`, `cold-email`, `prospecting`, `lead-intelligence`, `customer-billing-ops`, `finance-billing-ops`, `privacy-policy`, `draft-nda`, `deal-desk`, `metrics-dashboard`, `saas-metrics-coach`. Agents: `alfred` (orchestrator), `solo-founder` (weekly cadence + scope control), `finance-lead`, `cs-project-manager`.

---

## Self-Improvement Loop

Installed loop skills: `self-improve`, `self-improving-agent`, `self-eval`, `learner`, `learn-rule`, `reflect`, `retro`, `post-mortem` / `postmortem`, `pre-mortem`, `continuous-learning`, `continuous-learning-v2`, `replay-learnings`, `remember`, `writer-memory`, `decision-logger`, `skill-stocktake`, `skill-builder`, `rules-distill`.

**Principle:** every client project generates learnings; learnings become rules; rules change how the next project runs. If a lesson doesn't end up encoded in a skill, rule, or template, it didn't happen.

### Weekly cadence (90 min total, Friday afternoon)

| Slot | Skill | Action | Output |
|---|---|---|---|
| Fri 30 min | `retro` | Week retrospective: what shipped, what slipped, why | 3 bullet lessons |
| Fri 15 min | `reflect` + `self-eval` | Score the week's Alfred outputs: which agent/skill picks were wrong? Where did revisions cluster? | Misroute list |
| Fri 15 min | `learn-rule` + `remember` | Convert lessons into persistent rules / CLAUDE.md updates | Encoded rules |
| Fri 15 min | `decision-logger` | Log pricing, scoping, and pivot decisions with reasoning | Decision ledger entry |
| Fri 15 min | `metrics-dashboard` | Update MRR, pipeline, revision counts, delivery days per project | One-page dashboard |

### Per-project and monthly

- **Project close:** `post-mortem` within 48h of final approval — actual vs quoted hours, revision count, which playbook step broke. Feed deltas into PLAYBOOKS.md and PRICING.md.
- **Before any new service-line launch:** `pre-mortem` ("it's 3 months later and Automations flopped — why?").
- **Monthly (first Monday):** `skill-stocktake` to prune/spot unused skills; `replay-learnings` + `continuous-learning-v2` to consolidate the month's rules; `self-improve` pass on the most-used playbook. If the same manual step appeared in 3+ projects, build it into a custom skill with `skill-builder`.

---

## Top 10 Prioritized Actions

1. **Build the Growvera Next.js starter repo** (pre-wired SEO, schema markup, analytics, contact form, Tailwind tokens). Biggest delivery-speed lever; every website project forks it.
2. **Finalize contracts** — take `agency/contracts/*.md` to an Australian solicitor once; reuse forever. No retainer revenue is safe until this is done.
3. **Productize the SEO+AEO monthly report** (`seo-audit` + `aeo` + citation ledger, fixed template). This is the retainer's recurring proof of value.
4. **Define the `ship-gate` pre-preview checklist** and make it non-negotiable: no Vercel URL leaves without build + a11y + security + screenshot pass.
5. **Launch Automations with exactly 3 productized offers** (lead capture, review requests, social posting) — fixed scope, fixed price, no bespoke work in v1.
6. **Stand up the Friday self-improvement loop** (`retro` → `learn-rule` → `decision-logger` → `metrics-dashboard`). 90 minutes, calendar-blocked, starts this Friday.
7. **Create a client-folder template** (brand-voice file, design tokens, credentials map via `env-secrets-manager`, decision log) so every agent reads the same context per client.
8. **Write the proposal template** with `contract-and-proposal-writer` — scope, price, timeline, preview-URL process — so quoting takes 30 minutes, not a day.
9. **Solve the logo gap**: line up one freelance vector designer (fixed per-logo rate) and bake their cost into branding pricing.
10. **Pick and document the automation hosting pattern** (Vercel cron / Railway, decided once) before the first automation client signs.
