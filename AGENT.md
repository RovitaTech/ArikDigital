# AGENT.md

This file defines how the coding agent should work in this repository as a senior Angular frontend engineer.

## Objective

- Deliver safe, production-quality Angular changes with minimal, focused diffs.
- Preserve the landing-page UI exactly unless the user explicitly requests otherwise.
- Prefer maintainable patterns over quick hacks.

## Stack And Runtime

- Angular 21 with standalone components
- TypeScript strict mode
- Tailwind CSS v4 (`@import 'tailwindcss'` in `src/styles.css`)
- Reactive forms for the contact form
- npm (`packageManager: npm@11.6.0`)

## Repository Map

- Bootstrap: `src/main.ts`
- Root app shell: `src/app/app.ts`
- Global styles and theme tokens: `src/styles.css`
- App sections: `src/app/components/**`

## Core Engineering Rules

- Use standalone components only.
- Keep `ChangeDetectionStrategy.OnPush` by default.
- Prefer `inject(...)` over constructor DI for new code.
- Prefer signals for local UI state.
- Use typed reactive forms for form-heavy features.
- Keep TypeScript strict-safe; avoid `any` and unsafe assertions.

## UI And Styling Conventions

- Match the reference landing page layout, spacing, and palette exactly.
- Use the shared theme tokens from `src/styles.css`.
- Keep responsive behavior explicit for mobile and tablet breakpoints.
- Avoid introducing auth, dashboards, or unrelated app scaffolding.

## Delivery Workflow

1. Read impacted TS/HTML/CSS files first.
2. Make the smallest correct change that solves the requested problem.
3. Validate locally:
   - `npm run build` after code changes
4. Verify imports are clean and no regressions were added.

## Definition Of Done

- Compiles cleanly.
- UI matches the reference page as closely as possible.
- Diff is focused, readable, and free of unrelated refactors.