# AGENTS.md

Overview of the ELMIS marketing site for developers and AI agents working on this codebase.

## Project Overview

The public product website for ELMIS (Employee & Leave Management Information System), a modern HR platform.
This is currently a single-page marketing site — there is no backend, authentication, or database wired up yet.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (utility classes + CSS custom properties) |
| Icons | Material Symbols (Google Fonts) |
| Font | Poppins (Google Fonts) |
| Language | TypeScript 5, strict mode |
| Deployment | Netlify |

## Directory Structure

```
src/
  components/
    Nav.tsx              # Fixed header nav, compacts on scroll, mobile menu
    Footer.tsx            # Site footer
    Reveal.tsx            # IntersectionObserver-based scroll-reveal wrapper
    mockups/               # Custom HTML/CSS/SVG "product screenshots" — no real backend
      DashboardMockup.tsx
      EmployeeDirectoryMockup.tsx
      LeaveManagementMockup.tsx
      LeaveCalendarMockup.tsx
      ReportsMockup.tsx
      PhoneMockup.tsx
    sections/              # One component per landing-page section, composed in routes/index.tsx
  routes/
    __root.tsx             # HTML shell, fonts, SEO/OG metadata
    index.tsx              # Composes all sections for the "/" route
  styles.css               # Tailwind import + design tokens (--ink, --blue, --green, etc.) + animation utilities
```

## Conventions

- Color tokens are CSS custom properties defined in `src/styles.css` (`--ink`, `--blue`, `--green`, `--muted`, `--line`, `--mist`). Use these via inline `style` or Tailwind arbitrary values rather than introducing new colors.
- Icons use Material Symbols via `<span className="material-symbols-outlined">icon_name</span>` — find icon names at fonts.google.com/icons.
- All data shown in mockups (employee names, leave balances, stats) is fictional sample data for illustration — do not treat it as real.
- Scroll animations go through the shared `<Reveal>` component (`src/components/Reveal.tsx`), which respects `prefers-reduced-motion`.
- Sections are self-contained files under `src/components/sections/` so the page in `src/routes/index.tsx` stays a simple composition list.
- Modules/features not yet built are explicitly labeled "Coming Soon" in the UI (see `FutureEcosystem.tsx`, `MobileApp.tsx`) — never present unbuilt functionality as available.

## Development Commands

```bash
npm run dev      # Start dev server (or: netlify dev --port 8889)
npm run build    # Production build
```
