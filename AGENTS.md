<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Repository guide

## Stack

- Next.js 16.4.3 App Router, React 19, TypeScript strict. Uses `pnpm@11.5.2`; use `pnpm`, not npm/yarn.
- Static export is enabled (`output: "export"`, `images.unoptimized: true`). No server runtime: avoid API routes, server actions, and ISR. Every dynamic route needs `generateStaticParams`; deployable output is `out/`.
- Import alias: `@/*` maps to `src/*`.

## Commands

- `pnpm dev` — Turbopack dev server.
- `pnpm build` — production build and TypeScript check. There is no separate `typecheck` script.
- `pnpm lint` — ESLint only. No test suite or test script is configured.
- Run `pnpm build` before finishing changes that touch routes, types, or CSS.

## Structure

- `src/app/(site)/` — public site pages. Root `src/app/layout.tsx` owns global metadata and fonts; `error.tsx`, `not-found.tsx`, `robots.ts`, and `sitemap.ts` live at the app root.
- `src/components/{ui,layout,shared,home,programmes,forms}` — UI by area.
- `src/data/` — static content; `src/types/` — shared types; `src/lib/` — utilities, validation, submission helpers; `src/hooks/` — client hooks.
- Dynamic detail pages generate params from `src/data/*`; add/update data there first.

## Current-state gotchas

- Most pages, components, data, and lib files are placeholders marked with `// Placeholder:`. Read a file before assuming behavior from its name.
- `src/lib/submit-enquiry.ts` only returns `{ ok: true }`; forms have no backend yet. Replace it before wiring real submission.
- `.env.example` defines `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_WHATSAPP_NUMBER`; no current source reads them yet.
- `docs/theme.md` is the real design-token reference. `docs/structure.md`, `docs/content-inventory.md`, and `docs/redirects.md` are still placeholders.

## Next.js 16 and styling

- Read `node_modules/next/dist/docs/` before using unfamiliar APIs. In Next 16, `params`/`searchParams` are async: use generated `PageProps<'/route/[slug]'>` or `LayoutProps<...>` types and `await params`.
- Tailwind is v4 CSS-first in `src/app/globals.css`; there is no `tailwind.config.*`. Use the semantic tokens documented in `docs/theme.md` (`bg-primary`, `text-body`, `border-border`), never raw hex values in components.
- Tailwind requires the `@tailwindcss/turbopack` loader in `next.config.ts` under `turbopack.rules`. Do not remove it or replace it with a PostCSS setup; without it `@theme` fails with `Unknown at rule: @theme`.
- Server Components are the default; add `'use client'` only for browser state/events. Use `cn()` from `src/lib/utils.ts` for conditional Tailwind classes. `lucide-react` is the installed icon library.
- `next-env.d.ts` and `.next/types` are generated; do not edit them.
