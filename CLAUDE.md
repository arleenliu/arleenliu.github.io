# CLAUDE.md

## Personal Principles & Skills Reference

Arleen maintains a folder of general coding principles, personal standards, and skills she applies across all projects. Before making significant design or implementation decisions on this site, check:

```
~/.claude/personal/
```

That directory (separate from this project) contains cross-project guidance — things like preferred code style, how to approach trade-offs, and skills she wants consistently applied. Treat it as a layer above this project's own rules: project-specific instructions here take precedence for site-specific concerns, but personal principles apply wherever this file is silent.

---

## Project Overview

Personal portfolio website for Arleen Liu, hosted at **arleenliu.com** via GitHub Pages.

Built on a React/TypeScript single-page app (bootstrapped from the "Landy" Create React App template). Styling uses styled-components and Ant Design. Sections are driven by JSON content files so copy changes don't require touching component code.

---

## After Every Change

Run these three steps in order after completing any change:

```bash
# 1. Build and deploy to the live site (gh-pages branch)
npm run deploy

# 2. Commit the source changes to master
git add <changed files>
git commit -m "..."

# 3. Push master
git push origin master
```

`npm run deploy` automatically runs `npm run build` first (via the `predeploy` script), then pushes the compiled `build/` folder to the `gh-pages` branch, which GitHub Pages serves. Always run it before committing so you catch build errors before they land on master.

---

## Key Commands

| Command | Purpose |
|---|---|
| `npm start` | Local dev server (hot reload) |
| `npm run build` | Production build to `build/` |
| `npm run deploy` | Build + push to GitHub Pages (live site) |
| `npm run build-localhost` | Build with `PUBLIC_URL=/` for local preview |

---

## Directory Structure

```
/
├── public/                     # Static assets copied verbatim to build output
│   ├── index.html              # HTML shell — edit <title> and meta tags here
│   ├── Arleen_Liu_Resume.pdf   # Resume — update both public/ AND build/ when replacing
│   ├── fonts/                  # Motiva Sans (Light + Bold) TTF files
│   └── img/svg/                # SVG icons used by SvgIcon component
│       ├── logo.svg            # Site logo (shown in Header and Footer)
│       ├── developer.svg       # Hero section illustration
│       ├── graphs.svg          # About section illustration
│       ├── github.svg          # Footer social icon
│       ├── instagram.svg       # Footer social icon
│       ├── linkedin.svg        # Footer social icon
│       └── substack.svg        # Footer social icon
│
├── src/
│   ├── index.tsx               # App entry point — BrowserRouter + I18nextProvider
│   ├── translation.ts          # i18next config (EN default, ES supported)
│   ├── react-app-env.d.ts      # CRA type shim
│   │
│   ├── styles/
│   │   └── styles.ts           # Global styles (font-face, resets, antd form overrides)
│   │
│   ├── content/                # JSON files that drive section copy — edit here for text changes
│   │   ├── IntroContent.json   # Hero section: title, body text, buttons
│   │   └── AboutContent.json   # About section: title, body text
│   │
│   ├── locales/                # i18next translation strings
│   │   ├── en/translation.json # English (default)
│   │   └── es/translation.json # Spanish
│   │
│   ├── router/
│   │   ├── config.ts           # Route definitions (path → page component name)
│   │   └── index.tsx           # Layout shell: renders Header, Switch, Footer
│   │
│   ├── pages/
│   │   ├── Home/index.tsx      # Main page — composes ContentBlock sections from JSON
│   │   └── NotFound/index.tsx  # 404 catch-all page
│   │
│   ├── components/             # Page-level composed components
│   │   ├── Header/             # Top nav with burger menu, Blog link, Contact button
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── Footer/             # Social links (GitHub, Instagram, LinkedIn, Substack)
│   │   │   │                   # + language switcher + "Let's Chat" mailto
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   └── ContentBlock/       # Reusable two-column section (icon + text + optional buttons)
│   │       ├── index.tsx
│   │       ├── styles.ts
│   │       └── types.ts
│   │
│   └── common/                 # Primitive / reusable UI building blocks
│       ├── types.ts            # Shared TypeScript interfaces
│       ├── Button/             # <Button> and <ButtonMailTo> (plain <a href="mailto:">)
│       ├── Container/          # Max-width responsive wrapper
│       ├── Input/              # Styled text input (used by forms)
│       ├── TextArea/           # Styled textarea (used by forms)
│       ├── ScrollToTop/        # Floating button that appears after 350px scroll
│       ├── SvgIcon/            # Renders SVGs from public/img/svg/ by filename
│       └── utils/
│           ├── useForm.tsx     # Form state + validation hook (fetch URL is a TODO)
│           └── validationRules.ts
│
├── build/                      # Compiled output — do not edit manually
│   └── Arleen_Liu_Resume.pdf   # Keep in sync with public/ when updating the resume
│
├── plans/
│   └── site-improvements.md   # Record of improvements made in April 2026
│
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript config
└── CLAUDE.md                   # This file
```

---

## Common Tasks

### Update site copy
Edit the relevant JSON file in `src/content/` — no component changes needed.

### Add a new section
1. Create a JSON file in `src/content/`
2. Import it in `src/pages/Home/index.tsx`
3. Add a `<ContentBlock>` with the appropriate props

### Replace the resume
Copy the new PDF to **both** locations:
```bash
cp ~/path/to/new-resume.pdf public/Arleen_Liu_Resume.pdf
cp ~/path/to/new-resume.pdf build/Arleen_Liu_Resume.pdf
```

### Add a social icon
1. Drop an SVG into `public/img/svg/`
2. Add a `<SocialLink href="..." src="filename.svg" />` in `src/components/Footer/index.tsx`

### Update nav links
- **Blog link**: edit `blogSite` constant in `src/components/Header/index.tsx`
- **Contact email**: edit the `mailto:` href in `src/components/Footer/index.tsx` and `src/components/Header/index.tsx`

---

## Architecture Notes

- **Single page app** — all routes render within one HTML shell. The `gh-pages` branch holds the compiled output; `master` holds the source.
- **Content is separate from components** — prefer editing `src/content/*.json` over touching component files for copy changes.
- **Styling**: styled-components for all component styles; Ant Design Grid (`Row`/`Col`) for layout.
- **i18n**: all user-facing strings should go through `t()` from `react-i18next` and have entries in both `src/locales/en/` and `src/locales/es/`.
- **Contact form**: `useForm.tsx` has a `TODO` for a Formspree endpoint — the form is not currently rendered. Wire up a Formspree form ID before enabling it.
