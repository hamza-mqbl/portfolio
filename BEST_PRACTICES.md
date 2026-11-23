# Portfolio v2 — Best Practices Reference (research-backed)

> Compiled 2026-11-23 from deep multi-source research across 5 areas. This is the **standard we build the Next.js portfolio rebuild against.** Every section ends with a "Top rules" summary; all sources are cited. Read the relevant section before building that part.

**Contents**
1. [Next.js 16 App Router](#1-nextjs-16-app-router)
2. [Portfolio Design & UX](#2-portfolio-design--ux)
3. [React/TypeScript Code & SOLID](#3-reacttypescript-code--solid)
4. [Theming, Tailwind & Design Systems](#4-theming-tailwind--design-systems)
5. [Performance, SEO & Deployment](#5-performance-seo--deployment)

---

## 1. Next.js 16 App Router

Next.js 16 ships on **React 19.2+, Node 20.9+, TS 5.1+, Turbopack default**, and introduces **Cache Components** (`cacheComponents: true` subsumes the old `ppr`/`useCache`/`dynamicIO` flags).

### Server vs Client Components
- **Server Components are the default** — every `layout.tsx`/`page.tsx`. Keep server-side to hit DB/fs/secrets directly.
- **`"use client"` only for:** state, event handlers, effects, browser APIs (`window`/`localStorage`), or hooks that depend on those.
- **`"use client"` is a boundary, not a per-file tax** — put it once at the top; everything imported downstream joins the client bundle. **Push the boundary to leaves** (extract `<LikeButton>` rather than marking a whole page).
- A Client Component can't *import* a Server Component, but can render one passed as `children`/prop. Props crossing the boundary must be serializable — pass minimal data, never whole DB rows/secrets.

### File conventions
`layout` (persists, no re-render on nav) · `page` (routable UI) · `loading` (auto-Suspense) · `error` (client boundary) · `global-error` · `not-found` · `template` (re-mounts each nav — enter animations) · `route` (API) · `default` (parallel slot fallback). Nesting order: `layout → template → error → loading → not-found → page`.

### Routing
- **Route groups `(name)`** organize without URL impact. **Private `_name`** opt out of routing (colocate `_components`). **Parallel `@slot`** render independent panes — **Next 16: every slot needs a `default.tsx` or build fails.** **Intercepting `(.)`/`(..)`/`(...)`** for modals.
- Colocation is safe — any non-`page`/`route` file isn't routable.

### Data fetching & caching (the big Next 16 shift)
Caching is **opt-in and explicit** — all dynamic code runs at request time by default. Three content types in one route:
1. **Static** — sync code, prerendered (instant CDN shell).
2. **Cached** — async data wrapped in `"use cache"` + `cacheLife()`.
3. **Dynamic** — request data (`cookies()`/`headers()`/`searchParams`) wrapped in `<Suspense>` to stream.

- `'use cache'` (in-memory, Node only) · `'use cache: remote'` (durable KV/Redis) · `'use cache: private'` (only way to use `cookies()` inside cache).
- **Call `cacheLife()` in EVERY `use cache` scope**, at the call site. Profiles: `seconds`/`minutes`/`hours`/`days`/`weeks`/`max` (+`cacheTag()` for targeted invalidation).
- Invalidation: `updateTag(tag)` (Actions, read-your-writes) · `revalidateTag(tag, 'max')` (**2nd arg now required**) · `refresh()` (uncached only).
- **`params`, `searchParams`, `cookies()`, `headers()`, `draftMode()` are all async now** — `await` them.
- Inside `use cache`: no `cookies()`/`headers()`; extract outside and pass as args (args = cache key). `Date.now()`/`Math.random()` freeze at build — use `await connection()` outside.

### Rendering strategy (portfolio)
Prefer **SSG/PPR** for case studies (`generateStaticParams` + `cacheLife('max'/'days')`); SSR only for per-request pages. Model every real page as PPR: static shell + cached islands + Suspense holes.

### Metadata & SEO (App Router)
- `export const metadata` (static) or `generateMetadata({ params })` (dynamic, `await params`). Server Components only.
- Dynamic OG: `opengraph-image.tsx`/`twitter-image.tsx` with `ImageResponse` from `next/og`.
- `sitemap.ts` → `MetadataRoute.Sitemap` (map MDX slugs); `robots.ts` → `MetadataRoute.Robots`; JSON-LD via `<script type="application/ld+json">`.

### MDX for case studies
`@next/mdx @mdx-js/loader @mdx-js/react @types/mdx` → **`mdx-components.tsx` at root (required)** → `createMDX()` + `pageExtensions`. Keep MDX in `content/`, dynamically `import()` after validating slug (else `notFound()`). Validate frontmatter with Zod, export typed `CaseStudy` from `types/`.

### Folder structure
```
src/
  app/            # routing only — layout/page/sitemap.ts/robots.ts; _components/ (private)
  components/     # shared UI (ui/, layout/)
  lib/            # data access, cached fns, helpers
  content/        # MDX case studies / posts
  types/          # shared TS types
  config/         # site config, nav, constants
  mdx-components.tsx
```
Keep `app/` for routing; shared code in root folders; `@/*` alias.

### Anti-patterns
Whole-page `"use client"` · client `useEffect`+`fetch` when server could fetch · sequential `await` waterfalls (parallelize) · relying on implicit caching · `cookies()` inside `use cache` · missing `default.tsx` · non-serializable props across boundary · still using `middleware.ts` (→ `proxy.ts`).

### Config
`cacheComponents: true`, `pageExtensions` for MDX, `images.remotePatterns` (not `domains`). TS `strict`, Turbopack default, **flat-config ESLint** (`next lint` removed), `proxy.ts` replaces `middleware.ts`, `.env` not runtime config. Upgrade: `npx @next/codemod@canary upgrade latest`.

**Top rules:** ① Server Components default, `"use client"` at leaves · ② caching opt-in (`cacheComponents: true`) · ③ `cacheLife()` in every cache scope · ④ model pages as PPR · ⑤ no `cookies()` in cache (pass as args) · ⑥ right invalidation verb · ⑦ `await` async params/cookies · ⑧ `default.tsx` for parallel slots · ⑨ `app/`=routing, shared in `components/lib/content/types` · ⑩ case studies = `[slug]`+`generateStaticParams`+MDX · ⑪ Metadata API + OG + sitemap + JSON-LD · ⑫ `next/image` sizes/priority · ⑬ `next/font` + Suspense streaming · ⑭ no client fetch when server works · ⑮ TS strict, Turbopack, flat ESLint, `proxy.ts`.

**Sources:** [Next 16 blog](https://nextjs.org/blog/next-16) · [16.3 Instant Navigations](https://nextjs.org/blog/next-16-3-instant-navigations) · [cacheComponents](https://nextjs.org/docs/app/api-reference/config/next-config-js/cacheComponents) · [cacheLife](https://nextjs.org/docs/app/api-reference/functions/cacheLife) · [use cache](https://nextjs.org/docs/app/api-reference/directives/use-cache) · [Migrating to Cache Components](https://nextjs.org/docs/app/guides/migrating-to-cache-components) · [Revalidating](https://nextjs.org/docs/app/getting-started/revalidating) · [Upgrading to v16](https://nextjs.org/docs/app/guides/upgrading/version-16) · [Server/Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components) · [Server/Client boundary](https://nextjs.org/docs/app/guides/server-and-client-boundary) · [PPR (Vercel)](https://vercel.com/blog/partial-prerendering-with-next-js-creating-a-new-default-rendering-model) · [Project structure](https://nextjs.org/docs/app/getting-started/project-structure) · [Route Groups](https://nextjs.org/docs/app/api-reference/file-conventions/route-groups) · [Parallel Routes](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes) · [Metadata & OG](https://nextjs.org/docs/app/getting-started/metadata-and-og-images) · [generateMetadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata) · [opengraph-image](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image) · [MDX guide](https://nextjs.org/docs/app/guides/mdx) · [generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params) · [Production checklist](https://nextjs.org/docs/app/guides/production-checklist)

---

## 2. Portfolio Design & UX

Recruiters skim in ~30s; portfolios with real case studies raise offer rates ~43% vs screenshot-only.

### Structure (experienced engineer)
Hero/positioning → **Featured projects (2–4, best case study first, above the bio)** → Experience (scope+impact) → About (after the work) → Blog (optional, high-signal) → Contact (multiple methods). Recruiters verify real work on **GitHub**, not the site — keep it clean + linked.

### Hero (land in 5s)
Answer who/what/why in ~5s. Headline 8–10 words, benefit-led, no jargon, one CTA. Formulas: "I build [X] for [who]" · "[Discipline] + [focus]" · "[What you help achieve] through [craft]". Strong example: *"Product-minded AI engineer. I turn what a business needs into software that works."*

### Project presentation
Cards on index (title, one-line outcome, stack chips, live+code links) → **full case-study pages** for 2–4 flagships. Each case study (400–800 words, Challenge→Approach→Solution→Impact): **Problem/context · Your role (what YOU owned) · Architecture (diagram) · Decisions & trade-offs (biggest senior signal) · Result (quantified) · Links + reflection.** Metrics tied to outcomes ("FCP −22%", "p95 800→180ms", "40k MAU") read senior; vague claims read junior.

### Visual design (Refactoring UI)
Design in **grayscale first** (hierarchy from spacing/size/contrast), add one accent last. Hierarchy via **weight + color**, not just size. **Constrained spacing scale** (4/8px). **Fixed type scale** (12/14/16/20/24/32/48), 1–2 typefaces, body 16–18px, line-height ~1.5–1.6. Color restraint: ~8–10 greys + 5–10 shades of one accent. **Dark mode** is the award-winning default (keep AA contrast). Consistent image aspect ratios, rounded corners, subtle shadows.

### Credibility (senior vs junior)
**Senior:** system ownership, scale, architecture decisions, mentoring, clean GitHub (deep PR descriptions, review comments, simplification commits), outcome-linked metrics. **Junior (cut/minimize):** course/cert walls up top, skill % bars, tutorial clones as flagships, vague impact.

### UX & interaction
Minimal persistent obvious nav. Micro-interactions **150–250ms** (max 300), `transform`/`opacity` only, purposeful not decorative, user-triggered never autoplay. Skeletons over flashy intros. **Always honor `prefers-reduced-motion`** — disable motion, keep function.

### Accessibility (WCAG 2.2 AA)
Landmarks + semantic HTML, one `h1`, logical heading order · descriptive `alt` (empty `alt=""` for decorative) · labels on all controls · contrast ≥4.5:1 text, 3:1 large/UI · full keyboard nav, logical order, no traps · visible focus ≥3:1, not obscured by sticky headers · targets ≥24×24px.

### Reference portfolios (one takeaway each)
[Brittany Chiang](https://brittanychiang.com) — dark, one accent, clean hierarchy · [Lee Robinson](https://leerob.com) — minimal, states identity directly · [Josh Comeau](https://www.joshwcomeau.com) — motion as thoughtful interaction · [Rauno Freiberg](https://rauno.me) — restrained craft · [Paco Coursey](https://paco.me) — interface detail · [Delba](https://delba.dev) — writing+demos as proof · [Emil Kowalski](https://emilkowal.ski) — site = demo reel · [Jhey](https://jhey.dev) — playful CSS proof · [Bruno Simon](https://bruno-simon.com) — aspirational 3D (not a template).

**Top rules:** ① best case study above bio · ② hero who/what/why in 5s · ③ 2–4 deep case studies not 10 cards · ④ case study = Problem→Role→Architecture→Decisions→Result→Links · ⑤ metrics tied to outcomes · ⑥ explain *why* (trade-offs) · ⑦ clean linked GitHub · ⑧ grayscale first, accent last · ⑨ hierarchy via weight+color · ⑩ fixed scales · ⑪ dark mode + AA contrast · ⑫ micro-interactions 150–250ms transform/opacity · ⑬ honor reduced-motion · ⑭ WCAG 2.2 AA must-haves · ⑮ cut junior tells (skill bars, cert walls, clones).

**Sources:** [GreatFrontend portfolio 2026](https://www.greatfrontend.com/blog/frontend-developer-portfolio) · [Kairne SWE portfolio](https://www.kairne.dev/blog/what-to-include-software-engineer-portfolio) · [Showproof checklist](https://showproof.io/guides/what-to-include-in-developer-portfolio/) · [Linkfolio examples that got hired](https://linkfolio.cv/blog/developer-portfolio-examples-that-got-hired-2026) · [Standout senior portfolios](https://standout.work/blog/portfolio-for-senior-software-engineers) · [Riem GitHub seniority signals](https://riem.ai/blog/github-seniority-signals) · [Refactoring UI summary](https://saglitz.com/design/refactoring-ui) · [mnml headline examples](https://mnml.page/blog/portfolio-headline-examples) · [Social Animal micro-interactions/INP](https://socialanimal.dev/blog/micro-interactions-web-design/) · [Line25 a11y checklist 2026](https://line25.com/articles/web-accessibility-checklist-2026/) · [Hontran award-winning 2026](https://www.hontran.dev/blog/best-award-winning-websites-2026) · [Muzli top 100 portfolios](https://muz.li/blog/top-100-most-creative-and-unique-portfolio-websites-of-2025/)

---

## 3. React/TypeScript Code & SOLID

"Pragmatic over dogmatic" — these reduce cost of change; over-abstraction is itself a smell.

### SOLID mapped to React
- **S (SRP):** one reason to change per component/hook. Push data/effect logic into a hook; keep component about rendering. Smell: fetches AND filters AND renders inline.
- **O (OCP):** extend via composition + `children`/props, never by editing internals / adding route-specific branches.
- **L (LSP):** wrappers around native elements preserve the native interface — `type Props = InputHTMLAttributes<HTMLInputElement>` + `{...props}`, don't redeclare a narrow `{value,onChange}`.
- **I (ISP):** accept only props you render (`{ coverUrl }`), not fat objects (`{ video }`) — keeps components reusable across shapes.
- **D (DIP):** inject APIs/data via props/context/hooks; don't `import api` inside a UI component. Hooks are React's native DIP.

### Component architecture
Presentational (pure props) vs container (= a **custom hook** in modern React, maps to Server→Client boundary). **Composition over configuration** (`children`/slots over boolean flag soup). Extract a component to *name a concept*. Extract a hook when logic is duplicated / you're writing an Effect / stepping outside React. Avoid god components. **Prop drilling 1–2 levels is fine** — Context only for cross-cutting low-frequency data (theme/user/locale), kept stable with `useMemo`; it's DI, not a state manager. Compound components for cohesive UI families.

### Custom hooks
`use` + Capital, named by **intent/return** (`useOnlineStatus`). Don't use `use` for functions that call no hooks. Rules of Hooks (top-level only). Keep pure (body re-runs each render). Hooks share *logic* not *state*. Avoid generic `useMount`/`useEffectOnce` wrappers.

### TypeScript
`strict` on (+ `noUncheckedIndexedAccess`). Type props explicitly. **Never `any`** (`unknown` + narrow at boundaries). **Discriminated unions > piles of optional props** (`{status:'loading'} | {status:'error';error} | {status:'success';data}`). Infer locals, annotate boundaries. Utility types (`PropsWithChildren`, `ComponentProps<typeof X>`, `Pick`/`Omit`). Type the data layer (API, MDX frontmatter).

### State management
Classify first: **local UI** → `useState`/`useReducer` · **server/cache state** → TanStack Query/SWR (NOT Redux/Context) · **global low-freq** → Context · **high-freq** → Zustand/Jotai · **form** → local, commit on submit. Most apps need no state lib. **Minimal state — derive the rest** (`useMemo`). **URL as state** for shareable/navigational (filters/tabs/search).

### Folder/naming & clean code
Feature-based structure, colocation (tests+styles next to component), small per-feature barrels only (**no giant `app/` barrel — breaks tree-shaking**). PascalCase components, camelCase hooks/utils, kebab-case folders. Names carry intent; small single-purpose functions; early returns; **Rule of Three / AHA before abstracting**; comments explain *why*; Error Boundaries + query error states.

### Testing (portfolio context)
Unit-test pure logic + non-trivial hooks (`renderHook`+`act`). Component tests (RTL) for user-facing behavior (nav, contact form, theme toggle, filter) — assert what the user sees. Skip tests on static/trivial JSX. One Playwright smoke e2e for the critical path.

**Top rules:** ① one reason to change (SRP) · ② extend by composition (OCP) · ③ spread `...props` on native wrappers (LSP) · ④ accept only props you render (ISP) · ⑤ inject deps, don't import clients (DIP) · ⑥ logic in hooks, components render · ⑦ `use`-prefix only hook-callers, keep pure · ⑧ avoid lifecycle-wrapper hooks · ⑨ `strict` TS, ban `any` · ⑩ discriminated unions, utility types · ⑪ classify state (server≠client store) · ⑫ minimal state, URL for shareable · ⑬ feature folders, no root barrel · ⑭ intent names, early returns, Rule-of-Three, why-comments · ⑮ test logic/behavior, skip static JSX.

**Sources:** [SOLID in React](https://konstantinlebedev.com/solid-in-react/) · [Applying SOLID in React](https://www.elvisduru.com/blog/applying-solid-principles-in-react-a-practical-guide) · [SOLID React Hooks](https://www.perssondennis.com/articles/write-solid-react-hooks) · [React docs — Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks) · [21 React Design Patterns](https://www.perssondennis.com/articles/21-fantastic-react-design-patterns-and-when-to-use-them) · [Compound Components guide](https://pearpages.com/blog/2025/10/7/the-compound-component-pattern-in-react-a-complete-guide) · [React with TS best practices (SitePoint)](https://www.sitepoint.com/react-with-typescript-best-practices/) · [TS for React — 12 mistakes](https://www.greatfrontend.com/blog/typescript-for-react-developers) · [Discriminated unions (Kinney)](https://stevekinney.com/courses/react-typescript/typescript-discriminated-unions) · [Choosing state (local/context/URL/server)](https://johnkavanagh.co.uk/articles/choosing-state-in-react-local-context-url-cache-server/) · [React project structure (Netguru)](https://www.netguru.com/blog/react-project-structure) · [Reusable architecture for large Next.js (freeCodeCamp)](https://www.freecodecamp.org/news/reusable-architecture-for-large-nextjs-applications/) · [Next.js naming conventions](https://www.piyushgambhir.com/blogs/next-js-naming-conventions) · [React clean code](https://codylillyw.medium.com/react-clean-code-best-practices-342b916c3a57) · [Test custom hooks with RTL](https://www.builder.io/blog/test-custom-hooks-react-testing-library)

---

## 4. Theming, Tailwind & Design Systems

Stack: **Next.js (App Router) + Tailwind v4 + shadcn/ui**.

### Design tokens (two-layer)
**Primitives** (`--blue-500`, `--gray-50..950`, `--space-4`) → **Semantic role tokens** (`--background`, `--foreground`, `--primary`, `--muted`, `--border`, `--ring`, `--destructive`). Components touch **only semantic**. In Tailwind v4 declare in `@theme`. **Critical: mutable values on `:root`/`.dark` as plain vars, mapped via `@theme inline`** — plain `@theme` bakes values (breaks runtime theming), `inline` emits `var()` so switching `.dark` flips everything with no rebuild. Use **OKLCH** (perceptually uniform → predictable contrast). ~8–10 greys + semantic roles.

### Dark/light mode
`next-themes` with `attribute="class"`, `defaultTheme="system"`, `enableSystem`, `disableTransitionOnChange`. **`suppressHydrationWarning` on `<html>`** (not body). The injected inline script kills FOUC (runs before paint). Theme-dependent UI (toggle icon) renders only after `mounted` (else hydration mismatch). v4: `@custom-variant dark (&:is(.dark *))`. Same token names across themes, only values change.

### Tailwind v4 architecture
CSS-first (`@import "tailwindcss"` + `@theme`, drop `tailwind.config.js`). **Avoid `@apply`** (team warns against it) — compose utilities in markup, extract **components** not CSS classes; `@apply` only for prose/third-party HTML. Standard helper: `cn() = twMerge(clsx(...))` (so `className` prop overrides defaults). **CVA** for multi-variant components. Arbitrary values (`w-[327px]`) are a one-off escape hatch — repeat one → promote to token.

### shadcn/ui
Not a dependency — **code you own** in `components/ui/`. Theme **only through CSS variables** (edit `:root`/`.dark`), never hardcode colors. Customize via wrappers to keep registry updates clean. **Don't rebuild accessible primitives** (dialog/dropdown/combobox — use Radix-based shadcn); build custom for brand-defining/data-heavy.

### Typography
`next/font` (self-host, `size-adjust` kills CLS, expose `--font-sans`). Modular scale (1.25 ratio: 16/20/25/31/39/49), define only jobs needed. **Fluid headings `clamp(MIN, Arem+Bvw, MAX)`** — never bare `vw` (breaks zoom). Line-height unitless 1.4–1.6 body / 1.1–1.3 headings. Measure 60–75ch (`max-w-prose`).

### Spacing & layout
One **8pt scale** (`--spacing: 0.25rem` base). **Mobile-first min-width** breakpoints, add when content breaks. Flex for 1-D, Grid for 2-D, `gap` over margins. Constrain width (`max-w-7xl mx-auto px-*`).

### Color & contrast
WCAG AA floor (4.5:1 text, 3:1 large/UI) — verify every token pair in both themes. **Tinted grays, not pure gray/black** (shift toward primary). **60/30/10 accent rule.** Desaturate saturated colors ~10–20% on dark. On colored bg, hand-pick hue-matched text (not neutral gray). State colors are semantic tokens (`--destructive`/`--success`/...) — never color alone (add icon/text).

### Motion
Animate **only `transform`/`opacity`** (GPU, no layout). CSS for common cases (hover/fade/focus). **Framer Motion (~43–47kB) only when needed** (layout anim, AnimatePresence, gestures). Honor `prefers-reduced-motion` (prefer opt-in pattern; safety-net sets durations ~0.01ms). Durations 150–300ms, token eases.

**Top rules:** ① two-layer tokens, components use semantic only · ② mutable on `:root`/`.dark` via `@theme inline` · ③ OKLCH · ④ next-themes class + `suppressHydrationWarning` on html · ⑤ dark = same names, diff values · ⑥ avoid `@apply`, extract components · ⑦ `cn()` = twMerge+clsx · ⑧ arbitrary values = one-off escape hatch · ⑨ own shadcn, theme via CSS vars · ⑩ don't rebuild accessible primitives · ⑪ `next/font` self-host · ⑫ modular scale + clamp, never bare vw · ⑬ 8pt scale, mobile-first, Flex 1-D/Grid 2-D · ⑭ AA contrast, tinted grays, 60/30/10, desaturate on dark · ⑮ animate transform/opacity, CSS-first, respect reduced-motion.

**Sources:** [Tailwind theme docs](https://tailwindcss.com/docs/theme) · [shadcn dark mode Next.js](https://ui.shadcn.com/docs/dark-mode/next) · [Theme shadcn with CSS vars (v4)](https://www.shadcndesign.com/blog/how-to-theme-shadcn-ui-with-css-variables) · [shadcn handbook 2026](https://shadcnspace.com/blog/shadcn-ui-handbook) · [Tailwind v4 tokens/dark/a11y](https://tomodahinata.com/en/blog/tailwind-css-v4-css-first-design-tokens-production-guide) · [Tailwind v4 dynamic themes (SitePoint)](https://www.sitepoint.com/tailwind-css-v4-dynamic-themes/) · [Design tokens that scale 2026](https://www.maviklabs.com/blog/design-tokens-tailwind-v4-2026/) · [Is @apply best practice in v4?](https://github.com/tailwindlabs/tailwindcss/discussions/20355) · [Preventing chaos in Tailwind (Evil Martians)](https://evilmartians.com/chronicles/5-best-practices-for-preventing-chaos-in-tailwind-css) · [cn() clsx vs tailwind-merge](https://www.nexus-ui.com/blog/cn-utility-tailwind) · [Next 15 dark mode without flash](https://dev.to/utlkit/nextjs-15-dark-mode-without-the-flash-from-hydration-error-to-zero-flicker-1dmd) · [Refactoring UI summary (color/grays/accent)](https://www.sglavoie.com/posts/2023/09/09/book-summary-refactoring-ui/) · [Fluid typography clamp 2026](https://cssawwwards.com/blog/fluid-typography-css-clamp-guide-2026) · [CSS typography 2026](https://thecrit.co/resources/css-typography-best-practices) · [What to animate + reduced-motion](https://dev.to/weatherclockdash/css-animations-and-transitions-what-to-animate-prefers-reduced-motion-and-performance-4lan) · [Respecting motion preferences (Smashing)](https://www.smashingmagazine.com/2021/10/respecting-users-motion-preferences/) · [Framer Motion vs CSS](https://www.matthewswong.com/en/blog/framer-motion-vs-css-animations/)

---

## 5. Performance, SEO & Deployment

Target **Lighthouse 95+** + passing field Core Web Vitals.

### Core Web Vitals (p75 field)
**LCP ≤2.5s** (hero image/heading): `priority` on LCP image, SSG/ISR from edge, preload LCP image + fonts, keep LCP in server HTML. **INP ≤200ms**: break long tasks (`scheduler.yield()`), reduce hydration JS, debounce handlers, `startTransition`. **CLS ≤0.1**: always size images, reserve space (`aspect-ratio`/`min-height`), `next/font`, animate transform/opacity only.

### Images (`next/image`)
Always size (static import / explicit w·h / `fill`). **`priority` on LCP only**, lazy everything else. **`sizes` mandatory** for `fill`/responsive. AVIF→WebP (`images.formats`). Quality 75–85. `fill` for container-adaptive (cards) — pair with `sizes` + `position:relative` parent.

### Fonts (`next/font`)
Self-host (build-time, no external request), zero CLS (`size-adjust`), variable fonts, preload above-fold, `font-display: swap` (or `optional`), subset (`subsets:['latin']`).

### JavaScript/bundle
Default **Server Components** (not in browser bundle — biggest INP lever). Push `"use client"` to leaves. `next/dynamic` for heavy/below-fold (`ssr:false` for browser-only). Named imports + `optimizePackageImports` for icon/UI libs. Analyze with `@next/bundle-analyzer`.

### SEO
Metadata API (`title.template`, `description`, `alternates.canonical`, `metadataBase` once). OG + Twitter cards (`summary_large_image`). Dynamic OG (`opengraph-image.tsx` + `ImageResponse`). `sitemap.ts` + `robots.ts`. **JSON-LD**: `Person`/`ProfilePage` (home, with `sameAs` socials), `WebSite`, `BreadcrumbList` (nested). Semantic HTML, one `h1`, no skipped levels.

### Accessibility (WCAG 2.2 AA)
One `main` + nav/header/footer + skip-link · meaningful `alt` / empty for decorative · labels on controls · ARIA only when native won't work · visible focus (2.4.7), logical order, no traps, not obscured by sticky (2.4.11) · full keyboard operability · contrast 4.5:1 / 3:1 · reduced-motion · test with VoiceOver/NVDA (automation catches ~30–40%).

### Caching & deployment (Vercel)
Static-first (SSG, edge-cached); ISR for changing content; `s-maxage`/`stale-while-revalidate` for function responses. Git-connected **preview deploys** per push → promote to prod. Add **`@vercel/speed-insights`** (field CWV) + **`@vercel/analytics`**. Env vars scoped Production/Preview/Dev. Custom domain + auto-SSL, one canonical host (www primary, apex redirects), canonical tag to avoid `*.vercel.app` duplicate content.

### Measurement
Lighthouse (lab, prod build + incognito + throttle) · PageSpeed Insights (lab+CrUX field) · Speed Insights (field) · WebPageTest (waterfall) · axe + manual keyboard/screen-reader.

**Top rules:** ① SSG + edge (low TTFB→LCP) · ② `priority` LCP only, lazy rest · ③ always size images/`fill`+`sizes` · ④ AVIF→WebP q75–85 · ⑤ `next/font` self-host · ⑥ Server Components default, `"use client"` leaves · ⑦ `next/dynamic` heavy code · ⑧ break long tasks for INP · ⑨ animate transform/opacity, reserve space · ⑩ full metadata + OG + canonical · ⑪ sitemap/robots/JSON-LD · ⑫ semantic HTML, one h1 · ⑬ WCAG 2.2 AA + screen-reader test · ⑭ Vercel preview deploys + Speed Insights + one canonical domain · ⑮ measure lab AND field + axe.

**Sources:** [web.dev Web Vitals](https://web.dev/articles/vitals) · [CWV thresholds](https://web.dev/articles/defining-core-web-vitals-thresholds) · [optimize LCP](https://web.dev/articles/optimize-lcp) · [optimize INP](https://web.dev/articles/optimize-inp) · [CLS](https://web.dev/articles/cls) · [code-split JS](https://web.dev/learn/performance/code-split-javascript) · [font-display](https://web.dev/font-display/) · [Next Image optimization](https://nextjs.org/docs/app/getting-started/images) · [next/font](https://nextjs.org/docs/app/api-reference/components/font) · [Server/Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components) · [Lazy loading](https://nextjs.org/docs/app/guides/lazy-loading) · [Metadata & OG](https://nextjs.org/docs/app/getting-started/metadata-and-og-images) · [Google structured data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data) · [ProfilePage markup](https://developers.google.com/search/docs/appearance/structured-data/profile-page) · [BreadcrumbList](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb) · [Vercel CDN cache](https://vercel.com/docs/caching/cdn-cache) · [ISR](https://vercel.com/docs/incremental-static-regeneration) · [Vercel deployments](https://vercel.com/docs/deployments) · [Speed Insights](https://vercel.com/docs/speed-insights) · [Avoiding duplicate content](https://vercel.com/kb/guide/avoiding-duplicate-content-with-vercel-app-urls) · [WCAG 2.2](https://www.w3.org/TR/WCAG22/) · [WCAG 2.2 Quickref](https://www.w3.org/WAI/WCAG22/quickref/) · [PageSpeed/CrUX](https://developer.chrome.com/docs/crux/guides/pagespeed-insights)
