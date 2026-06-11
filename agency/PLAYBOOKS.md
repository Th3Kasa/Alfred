# Growvera Delivery Playbooks

One playbook per service line. Same skeleton everywhere: **Discovery → Build → Preview URL → Revisions → Approval → Retainer**. The preview-URL step is the sales close — nothing sloppy ships to it.

**Universal rules**
- No build starts without a signed Service Agreement and the upfront deposit cleared (`agency/contracts/SERVICE-AGREEMENT.md`).
- No preview URL goes out before the `ship-gate` checklist passes (build green, `a11y-audit`, `security-scan`, `visual-verdict` screenshots).
- Revisions are capped per contract (default 2 rounds). Round 3+ is quoted as change request.
- Approval in writing (email is fine) → final invoice → IP transfers on payment → pitch the retainer in the same email.
- Every project ends with `post-mortem` within 48h. Lessons feed back into this file.

---

## 1. Web Design (UI/UX)

**Typical timeline: 1–2 weeks**

| Step | Action | Agent / Skill |
|---|---|---|
| 1. Discovery (day 1) | 30-min client call; capture business, audience, pages, references. Build personas + journey. | `cs-ux-researcher`, `user-personas`, `customer-journey-map` |
| 2. Direction (day 1–2) | Set visual direction: colour, type, layout language; one moodboard, not three. | `designer`, `frontend-design-direction`, `color-expert` |
| 3. Build (day 2–6) | Design in code on the Growvera starter — skip Figma, ship real components. | `designer`, `ui-design-system`, `landing-page-generator`, `motion-ui` |
| 4. CRO pass (day 6) | Audit hero, CTAs, forms before the client ever sees it. | `page-cro`, `form-cro` |
| 5. Gate + Preview (day 7) | Run gate, deploy to Vercel preview, send URL with a 3-line summary of decisions made. | `ship-gate`, `visual-verdict`, `full-page-screenshot` |
| 6. Revisions (day 8–10) | Max 2 rounds, batched (client sends ALL feedback per round). | `designer`, `executor` |
| 7. Approval → Retainer | Written sign-off, final invoice, pitch Care or Growth retainer. | `contract-and-proposal-writer` |

**Deliverables checklist:** ☐ design tokens file ☐ responsive pages (mobile-first) ☐ component inventory ☐ a11y report ☐ screenshot set ☐ Vercel preview URL.

---

## 2. Copywriting

**Typical timeline: 3–7 days**

| Step | Action | Agent / Skill |
|---|---|---|
| 1. Discovery | Voice interview: how does the owner talk about their business? Capture and save to client folder. | `brand-voice`, `voice-builder`, `ideal-customer-profile` |
| 2. Angle | Value props and messaging hierarchy per page/asset. | `value-prop-statements`, `marketing-psychology` |
| 3. Draft | Write all assets in one batch against the saved voice file. | `content-strategist` agent, `copywriting`, `email-sequence` (if email), `ad-creative` (if ads) |
| 4. Polish | Humanize, then edit, then grammar — in that order. | `content-humanizer`, `copy-editing`, `grammar-check` |
| 5. Preview | Deliver in context where possible (copy placed into the live preview site, not a Google Doc). | `executor` |
| 6. Revisions | 2 rounds, batched. Tone disputes → re-read voice file together. | `copy-editing` |
| 7. Approval → Retainer | Sign-off; pitch monthly content retainer (blog/email/social cadence). | `content-strategy` |

**Deliverables checklist:** ☐ brand voice file ☐ all copy assets ☐ SEO title/meta per page ☐ CTA variants ☐ usage notes.

---

## 3. SEO + AI Visibility (AEO)

**Typical timeline: setup 1–2 weeks, then ongoing monthly (this is the retainer engine)**

| Step | Action | Agent / Skill |
|---|---|---|
| 1. Discovery | Baseline: current rankings, GBP status, citations, who do ChatGPT/Perplexity currently recommend for the client's queries? | `seo-audit`, `competitor-analysis` |
| 2. Audit + plan | Technical SEO audit + E-E-A-T/AEO audit; 90-day plan with keyword + question targets. | `cs-aeo` agent, `aeo`, `seo`, `site-architecture` |
| 3. Build (on-page) | Fix technical issues, add LocalBusiness/Service/FAQ schema, optimize key pages, location/service page matrix if warranted. | `schema-markup`, `programmatic-seo`, `executor` |
| 4. Build (off-page) | Directory and citation submissions; GBP optimization. | `directory-submissions` |
| 5. Preview | "Preview" here = the audit report + before/after of optimized pages on a Vercel preview. | `full-page-screenshot` |
| 6. Revisions | One revision round on the plan; SEO work itself iterates monthly. | `cs-aeo` |
| 7. Approval → Retainer | This service IS a retainer. Monthly: re-audit, content optimization, citation-ledger update, plain-English report. | `cs-aeo` citation ledger, `metrics-dashboard`, `report` |

**Monthly retainer deliverables:** ☐ ranking movement ☐ AEO citation-ledger update (which AI engines mention the client) ☐ pages optimized this month ☐ next month's targets ☐ one-page client report.

---

## 4. Branding

**Typical timeline: 1–2 weeks**

| Step | Action | Agent / Skill |
|---|---|---|
| 1. Discovery | Positioning workshop: who, against whom, why you. | `positioning-ideas`, `ideal-customer-profile`, `competitive-battlecard` |
| 2. Strategy | Value proposition, brand voice, naming (if needed). | `value-proposition`, `brand-voice`, `product-name` |
| 3. Visual identity | Colour system, typography, moodboard + AI concept directions; logo refined via contractor or client-supplied mark. | `color-expert`, `image`, `fal-ai-media`, `canvas-design` |
| 4. Guidelines | Assemble the brand book: logo usage, colours, type, voice, do/don't examples. | `brand-guidelines`, `designer` |
| 5. Preview | Brand book as a styled one-page site on Vercel preview (doubles as a website-build teaser). | `landing-page-generator`, `ship-gate` |
| 6. Revisions | 2 rounds. Direction changes after round 1 sign-off = change request. | `designer` |
| 7. Approval → Retainer | Sign-off; pitch brand-application retainer (apply identity across site, GBP, socials, templates). | — |

**Deliverables checklist:** ☐ positioning statement ☐ voice guide ☐ colour + type system ☐ logo files (all formats) ☐ brand guidelines doc ☐ social/profile asset pack.

---

## 5. Websites (Full Builds → Vercel)

**Typical timeline: 2–4 weeks**

| Step | Action | Agent / Skill |
|---|---|---|
| 1. Discovery | Pages, features, content sources, integrations, success metric. Written scope into the Service Agreement. | `cs-ux-researcher`, `contract-and-proposal-writer` |
| 2. Architecture | Fork Growvera starter; decide rendering, data, integrations (bookings/Stripe if scoped). | `cs-frontend-engineer`, `architect`, `nextjs-turbopack`, `database-schema-designer` if needed |
| 3. Build (week 1–2) | Implement pages + components; copy via Copywriting playbook in parallel; schema markup by default. | `executor`, `designer`, `react-patterns`, `schema-markup`, `stripe-integration-expert` if scoped |
| 4. QA | E2E pass, a11y, performance, security, cross-device screenshots. | `qa-tester`, `e2e-testing`, `pw`, `a11y-audit`, `security-scan`, `performance-profiler` |
| 5. Gate + Preview | `ship-gate` green → Vercel preview URL to client with walkthrough video or annotated screenshots. | `ship-gate`, `demo-video` |
| 6. Revisions | 2 batched rounds. New pages/features = change request. | `executor`, `verifier` |
| 7. Approval → Launch → Retainer | Sign-off → final payment → domain cutover, analytics, search console → Care retainer pitch (hosting, edits, monitoring). | `devops-engineer`, `deployment-patterns`, `env-secrets-manager`, `release` |

**Deliverables checklist:** ☐ deployed production site ☐ all scoped pages ☐ mobile responsive ☐ schema markup ☐ analytics installed ☐ search console verified ☐ a11y + Lighthouse report ☐ admin/content handover notes.

---

## 6. Automations (NEW)

**Typical timeline: audit 2–3 days; build 1–2 weeks per automation**

Launch scope: only the 3 productized automations (lead capture → notification/CRM, review-request sequences, social auto-posting). Bespoke automations come later.

| Step | Action | Agent / Skill |
|---|---|---|
| 1. Discovery (paid audit) | Map the client's manual processes; quantify hours/week wasted. The audit is a paid product that converts to builds. | `process-mapper`, `automation-audit-ops` |
| 2. Proposal | Pick automations, quote against hours saved/month; define triggers, data, failure behaviour in writing. | `contract-and-proposal-writer`, `workflow-builder` |
| 3. Build | Implement on the standard hosting pattern (decide once: Vercel cron/Railway). | `executor`, `api-connector-builder`, `email-ops`, `sms`, `social-publisher`, `browser-automation` if scraping |
| 4. Test | Dry-run with test data; simulate failures; confirm notifications/alerting. | `qa-tester`, `verifier`, `tracer` |
| 5. Preview | Live demo on real (sandboxed) client data + a one-page "what happens when" diagram. | `process-mapper` output, `demo-video` |
| 6. Revisions | 1 round of trigger/copy/timing tweaks. Logic changes = change request. | `executor` |
| 7. Approval → Retainer | Automations REQUIRE a retainer (you host and maintain them). No retainer, no automation — say it in the proposal. | `unified-notifications-ops` for monitoring |

**Deliverables checklist:** ☐ running automation in production ☐ process diagram ☐ failure alerting configured ☐ monthly run-log summary in retainer report ☐ credentials documented (`env-secrets-manager`).

---

## After Every Project

1. `post-mortem` within 48h: quoted vs actual hours, revision count, what broke.
2. `learn-rule` / `remember`: encode the lesson.
3. Update this file if a playbook step changed.
4. Ask for a Google review + referral at the 30-day retainer mark, not at handover.
