# Full-Stack Portfolio — Theme & Recomposition Design

Date: 2026-08-21
Repo: portfolio-nextjs (Next.js 15 App Router, Tailwind 3, framer-motion)
Status: awaiting review

## 1. Goal

Rebuild the portfolio so it reads unmistakably as the work of a full-stack
engineer. The current site is competent but mispositioned: `Bio.description`
opens "Backend engineer", the visual theme is a terminal skin, and the only
frontend evidence is one card in a projects grid.

Success criteria:

1. A visitor who scrolls once can name the four layers the author works in and
   point to production work in each.
2. Nothing on the page is fabricated or unverifiable.
3. The page is fully server-rendered HTML (crawlable, previewable).
4. The design reads intentional, not templated.

## 2. Decisions taken

| Question | Decision |
|---|---|
| Narrative | Balanced full-stack, evidenced structurally |
| Aesthetic | Refined hybrid — editorial base, code motifs as accents |
| Structure | Single page, server-rendered |
| Scope | Full recomposition (new section architecture) |
| Motion | Keep framer-motion, keep `"use client"` |
| Fabricated data | Removed or replaced with measured values |
| Theme motif | Layer strips on every item + 4 semantic hues |

## 3. The theme: the stack itself

The organizing idea is the four layers the author actually works across. It
replaces the terminal conceit, which was a skin — it decorated content without
saying anything about the author.

    CLIENT   React · Next.js · Redux · TypeScript · Tailwind
    API      Node.js · Express · Rails · REST · JWT
    DATA     MySQL · Postgres · MongoDB · Redis · Elasticsearch
    INFRA    Docker · AWS · Linux · Jest · RSpec

This maps onto the existing five `skills` groups in `data/bio.ts`. It is a
promotion of real data, not an invention. **Payments** is deliberately not a
layer: it is a cross-cutting specialism, given its own treatment, which also
gives it more prominence than it has today.

### 3.1 Why this is more persuasive than a headline

Every case study, job, and project renders the same four-segment layer strip.
The full-stack claim is therefore proven by *coverage across the body of work*
rather than asserted in copy.

Critically, individual items do **not** all light up completely:

- `rijul-ui` — CLIENT only (a published component library)
- Yelo — API, DATA, INFRA; CLIENT empty
- Watermark — all four layers (the flagship)

A page where every card showed four full bars would be obviously fake. The
honest distribution, with one genuinely end-to-end piece of work, is the
argument.

The payments case study is API-dominant (API full, DATA minimal, CLIENT and
INFRA empty). Its strip is left honest rather than padded; the specialism badge,
not the strip, is what gives that work its weight. Payments therefore appears
twice by design — as a specialism in section 01 and as a case study in section
02 — and this is not a duplication to be resolved.

### 3.2 Segment fills are derived, not self-assessed

A layer's filled segments = `min(4, stack[layer].length)` where `stack[layer]`
is the list of named technologies from that layer used in that work. Fills are
computed from data, never hand-set. Hovering or expanding a strip reveals the
technology names behind it, so any claim is checkable.

### 3.3 Layer hues

Used **only** inside layer strips and language tags. Headings, body copy,
borders, and backgrounds stay neutral. This is what keeps four hues from
reading as a crayon box.

| Layer | Light | Dark |
|---|---|---|
| CLIENT | `199 89% 40%` | `199 89% 58%` |
| API | `165 75% 30%` | `165 85% 46%` |
| DATA | `262 72% 50%` | `262 83% 68%` |
| INFRA | `32 90% 40%` | `38 92% 55%` |

API reuses the existing primary, so brand continuity holds. Every value must be
verified at >= 4.5:1 against its background before ship.

## 4. Design system

The highest-leverage change: **mono currently does everything** — the `<h1>` is
`font-mono`, body copy is mono, labels are mono. This is the main thing that
reads junior.

New rule, enforced everywhere:

- **Geist Sans** — headings, body, all prose
- **JetBrains Mono** — code, metrics, layer labels, small caps labels only

Also:

- A defined type scale (display / h1 / h2 / h3 / body / small / mono-label)
  replacing ad-hoc `text-6xl`…`text-8xl`
- Consistent section rhythm and one container width
- A light theme that is actually designed, not inherited — it currently applies
  `bg-grid-dark` and dark-tuned shadows

Removed:

- `.text-gradient` on the surname (gradient-text names are the strongest
  template tell)
- `.animate-aurora-1/2/3` — defined in `globals.css`, referenced by no markup
- `.animate-marquee` — references a `marquee` keyframe that does not exist

## 5. Page architecture

| # | Section | Change |
|---|---|---|
| — | Hero | Rebuilt. Name, one specific positioning line, hard-metric stat row, two CTAs in sentence case. Three competing side cards reduced to one artifact: the terminal. |
| 01 | Stack | New. The four layers with real tech, replacing the logo grid. Payments called out as specialism. |
| 02 | Selected work | Rebuilt cards, Watermark first. Keeps problem / constraint / trade-off / result. Adds layer strip + real syntax highlighting. |
| 03 | Experience | Rebuilt as a dense timeline. The `curl -i /api/v1/experience` and GET/POST conceit removed. |
| 04 | Projects | Tightened. `rijul-ui` promoted as the CLIENT-only counterweight. |
| 05 | Education | Collapsed to B.Tech plus one line. |
| 06 | Contact | Keeps the API-request framing. Fixes the real bug (see 6). |

### 5.1 New / changed components

- `components/layer-strip.tsx` — pure presentational, derives fills from a
  `stack` object. Used by case studies, experience, and projects.
- `components/stack-section.tsx` — replaces `skills-section.tsx`
- `components/hero.tsx` — extracted from `app/page.tsx`
- `components/timeline.tsx` — replaces `experience-section.tsx`
- `components/case-study-card.tsx` — extracted from `projects-section.tsx`
- Deleted: `web-vitals.tsx`, `live-logs.tsx`, `sidebar.tsx`, `mode-toggle.tsx`

### 5.2 Data model

`data/bio.ts` gains a `stack` field per experience, case study, and project:

    stack: {
      client: string[]
      api:    string[]
      data:   string[]
      infra:  string[]
    }

Populated from the `skills` / `tags` arrays already present. `LayerStrip`
consumes only this field, so the visual can never drift from the data.

## 6. Correctness and credibility fixes

Verified issues in the current codebase:

1. **Fabricated data.** `web-vitals.tsx` hardcodes 98/100/100/100 with fake LCP
   / CLS / FCP / TBT values. `live-logs.tsx` fakes a log stream. Both deleted.
   No performance section exists in the new architecture (section 5). A real
   Lighthouse run happens after the rebuild; if the measured score is 95 or
   above, a single measured line may go in the footer, attributed and dated.
   If it is lower, nothing is shown. No score is ever estimated.
2. **Contradictory copy.** `Bio.description` says tokenized payments across
   "two processors"; the payments case study names three (Razorpay, Stripe,
   Worldpay). Resolved to three — the case study is the more specific source.
   Flagged for author confirmation.
3. **Open image proxy.** `next.config.ts` allows `hostname: '**'` over both
   http and https. Narrowed to the hosts actually used.
4. **Fragile hotlinks.** Ten skill icons load from wikipedia.org, nodejs.org,
   jestjs.io, rspec.info, git-scm.com. Self-hosted in `public/`.
5. **Favicon is a photo.** `icons: { icon: '/profile.jpg' }`. Replaced with a
   real icon.
6. **Contact form navigates away.** It is a raw form POST to herotofu with no
   validation and no success state, so submitting leaves the site. Converted to
   `fetch` + inline success/error state.
7. **`ssr: false` blanks the page for crawlers.** All six `dynamic()` calls in
   `app/page.tsx` drop the flag. `"use client"` and framer-motion are
   unaffected — client components still pre-render to HTML.
8. **Dead code.** `sidebar.tsx`, `mode-toggle.tsx`, `live-logs.tsx` are
   imported by nothing. `<Toaster />` is mounted in `layout.tsx` but `toast()`
   is never called.
9. **Unused dependencies.** `react-hook-form`, `react-intersection-observer`,
   and `next-themes` (used only by the dead `mode-toggle.tsx`). All three are
   removed: the contact-form rework uses native constraint validation plus
   `fetch`, so `react-hook-form` is not adopted. The theme toggle in
   `header.tsx` uses the local `theme-provider.tsx`, not `next-themes`, so its
   removal is safe.
10. **Responsive type inversion.** `web-vitals.tsx:69` uses
    `text-sm sm:text-[11px]`, shrinking text on larger screens. Dies with the
    file.

## 7. Content gaps and assumptions

**Gap — Watermark frontend detail.** Watermark is the flagship full-stack case
study but the author has not supplied a specific frontend problem (a complex
form, a data table, Redux state architecture, a perf issue). It will be written
from the facts already in `data/bio.ts`, producing a thinner card than Yelo's.
One concrete sentence from the author upgrades it materially. This is the single
remaining gap between the intended balance and what is currently provable.

Assumptions, to be corrected if wrong:

- The `roles` typewriter is removed. Cycling "Full Stack Developer / Backend
  Engineer / Frontend Developer / Programmer" dilutes the positioning, and
  "Programmer" weakens it.
- Class 10th and 12th education entries are removed. They read junior for an
  engineer with three years of experience, and both currently use the same
  `lmps.webp` logo regardless of school.
- The Dec 2024 to Jun 2025 employment gap is left unexplained. A timeline makes
  it visible; no entry is invented to fill it.
- `rijul.dev` is the live domain (hardcoded in `metadataBase` and JSON-LD).
- Payments totals three processors (see 6.2).

## 8. Testing and verification

Before any completion claim:

- `npx tsc --noEmit` clean
- `npm run build` clean, and the built HTML contains case-study prose (proving
  the `ssr: false` fix)
- `npm run lint` clean
- Real Lighthouse run; recorded, not estimated
- Both themes checked at 375 / 768 / 1440
- Layer-hue contrast verified at >= 4.5:1 in both themes
- Every external link and every image resolves
- `prefers-reduced-motion` still honoured

## 9. Out of scope

- Per-case-study routes (`/work/[slug]`) — the author chose single-page
- A blog or MDX pipeline
- A CMS
- Rewriting resume content itself
