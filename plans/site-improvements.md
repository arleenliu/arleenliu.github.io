# Site Improvement Plan

Identified during codebase analysis on 2026-04-24. All items below were
implemented in the same commit as this document.

---

## P0 — Visible to users / affects SEO

### 1. Fix page title (`public/index.html`)
**Problem:** `<title>` still reads "Landy - React Template" — the name of the
open-source CRA template the site was bootstrapped from.  
**Fix:** Change to "Arleen Liu".

### 2. Update blog nav link to Substack
**Problem:** Header hardcodes `https://arleenliu.wordpress.com/`, which is the
wrong platform.  
**Fix:** Point to `https://arleenl.substack.com/` and open in a new tab
(`window.open` with `noopener,noreferrer`) instead of navigating away.

---

## P1 — Correctness / accessibility

### 3. Fix `ButtonMailTo` — replace `<Link>` with a plain `<a>` tag
**Problem:** `ButtonMailTo` wraps a `mailto:` href in a React Router `<Link to="#">`
with a click handler that manually sets `window.location.href`. This is
semantically wrong, prevents right-click → "Copy email address", and trips up
screen readers that announce it as an in-app navigation link.  
**Fix:** Replace with `<a href={mailto} style={{ color: "white" }}>{label}</a>`.

### 4. Add `aria-label` to `ScrollToTop` button
**Problem:** The floating scroll-to-top button renders with no accessible label —
screen readers announce it as an unlabelled button.  
**Fix:** Add `aria-label="Scroll to top"` to `ScrollUpContainer`.

### 5. Add a 404 Not Found page and catch-all route
**Problem:** React Router v5 has no catch-all route, so any invalid URL renders
a blank white page with no feedback.  
**Fix:** Create `src/pages/NotFound/index.tsx` with a simple message and home
link; add a `<Route>` with no `path` at the end of the `<Switch>` in
`src/router/index.tsx`.

---

## P2 — Half-finished features / broken behaviour

### 6. Guard `useForm` against empty submission URL
**Problem:** `src/common/utils/useForm.tsx` has `const url = ""`. If the
Contact section is ever re-enabled and `url` is still blank, the `fetch` call
will throw because the URL is invalid — the error is caught, but only because
there happens to be a `try/catch`; the root cause is silent.  
**Fix:** Add an early-return guard that shows a clear error notification when
`url` is empty, and leave a prominent `TODO` comment pointing to Formspree as
the recommended drop-in backend.

### 7. Remove dead commented-out code
**Problem:** `src/pages/Home/index.tsx` has a large commented-out block for
Mission and Contact sections along with their dead import comments.
`src/content/MissionContent.json` and `src/content/ContactContent.json` still
contain Landy template placeholder text and are unreferenced. The `Block` and
`MiddleBlock` components are fully built but rendered nowhere.  
**Fix:** Delete the commented-out imports and JSX block from `Home/index.tsx`.
Delete `MissionContent.json`, `ContactContent.json`, `src/components/Block/`,
and `src/components/MiddleBlock/`.

---

## P3 — Type safety / performance

### 8. Fix `ContentBlock` button type — add `toLink`
**Problem:** `ContentBlock/types.ts` defines the `button` array items without a
`toLink` property, but `ContentBlock/index.tsx` reads `item.toLink` at runtime.
TypeScript doesn't catch this because the property is accessed with optional
chaining inside an inline type annotation that overrides the interface.  
**Fix:** Add `toLink?: string` to the button item union types in
`ContentBlock/types.ts` and remove the redundant inline type annotation from
the map callback in `index.tsx`.

### 9. Wrap `ContentBlock` with `React.memo`
**Problem:** `ContentBlock` re-renders whenever its parent re-renders, even
though its props (JSON-sourced strings, a direction string, an icon filename)
never change at runtime.  
**Fix:** Wrap the component in `React.memo` before passing it to
`withTranslation()`.
