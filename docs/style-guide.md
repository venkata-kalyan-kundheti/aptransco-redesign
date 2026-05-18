# APTRANSCO Website — Design System & Style Guide

**Project:** APTRANSCO Website Design Competition 2026  
**Version:** 1.0  
**Tech Stack:** React 18 + Tailwind CSS v3  
**Interactive Preview:** `/style-guide` route in the running app

---

## 1. Color Tokens

All colors are defined in `tailwind.config.js` and mirrored as CSS custom properties in `src/index.css`.

### Navy (Primary Brand)

| Token | Hex | CSS Variable | Usage |
|---|---|---|---|
| `navy-50` | `#EEF2F9` | `--color-navy-50` | Light backgrounds, hover states |
| `navy-100` | `#D5DFF0` | `--color-navy-100` | Card borders on navy backgrounds |
| `navy-200` | `#ABBFE1` | `--color-navy-200` | Dividers |
| `navy-500` | `#1A4A8A` | `--color-navy-500` | Navigation bar, section headers |
| `navy-600` | `#163D74` | `--color-navy-600` | Link hover |
| `navy-700` | `#0C2D5E` | `--color-navy-700` | Header, footer, page banners |
| `navy-800` | `#091F42` | `--color-navy-800` | Dark hero sections |
| `navy-900` | `#050F21` | `--color-navy-900` | Deepest contrast |

### Gold (Accent / CTA)

| Token | Hex | Usage |
|---|---|---|
| `gold-300` | `#F9C85F` | Breadcrumb text on navy |
| `gold-400` | `#F5A623` | Primary CTA buttons, active nav, focus rings |
| `gold-500` | `#E0901A` | Button hover |
| `gold-600` | `#B97010` | Text on light backgrounds |

### Slate (Neutral)

| Token | Hex | Usage |
|---|---|---|
| `slate-50` | `#F4F6FA` | Page background |
| `slate-100` | `#E8ECF4` | Card backgrounds |
| `slate-200` | `#D0D7E8` | Borders |
| `slate-400` | `#7A8BAA` | Meta text, dates, labels |
| `slate-600` | `#3D4D66` | Secondary body text |
| `slate-700` | `#2A3650` | Primary body text |

### Semantic

| Name | Hex | Usage |
|---|---|---|
| Success | `#1A7A3F` | Open status badges, success states |
| Warning | `#B97010` | Upcoming status, warnings |
| Danger | `#9B1D1D` | Error states, closed/expired |
| Info | `#1A4A8A` | Info badges (same as navy-500) |

---

## 2. Typography

**Font Family:** Inter (Google Fonts) with system-font fallback  
**Loading:** Non-blocking `print → all` trick — zero render-blocking

### Type Scale

| Role | Size | Weight | Tailwind Class |
|---|---|---|---|
| H1 — Page title | 30px | 700 | `text-3xl font-bold` |
| H2 — Section heading | 24px | 600 | `text-2xl font-semibold` |
| H3 — Sub-section | 20px | 600 | `text-xl font-semibold` |
| H4 — Card title | 16px | 600 | `text-base font-semibold` |
| Body | 16px | 400 | `text-base` |
| Small / Meta | 14px | 400 | `text-sm` |
| Badge / Label | 12px | 500 | `text-xs font-medium` |
| Nav items | 14px | 500 | `text-sm font-medium` |

**Line height:** `leading-relaxed` (1.625) for body, `leading-tight` (1.25) for headings

---

## 3. Spacing Scale

Base unit: 4px (Tailwind default)

| Scale | px | rem | Usage |
|---|---|---|---|
| 1 | 4px | 0.25rem | Icon gaps |
| 2 | 8px | 0.5rem | Tight padding |
| 3 | 12px | 0.75rem | Badge padding |
| 4 | 16px | 1rem | Standard padding |
| 5 | 20px | 1.25rem | Card padding |
| 6 | 24px | 1.5rem | Section gaps |
| 8 | 32px | 2rem | Card grid gaps |
| 12 | 48px | 3rem | Section vertical padding |
| 14 | 56px | 3.5rem | Large section padding |

---

## 4. Component Classes (from `index.css`)

### Buttons
```css
.btn          — base: px-4 py-2.5, min-h 44px, rounded-lg, font-medium, transition
.btn-primary  — gold-400 bg, navy-700 text
.btn-secondary— navy-500 border, navy-500 text, transparent bg
.btn-ghost    — no border, slate-600 text, slate-100 hover bg
.btn-sm       — reduced padding: px-3 py-1.5, text-sm
.btn-lg       — increased padding: px-6 py-3, text-base
```

### Cards
```css
.card         — white bg, slate-200 border, rounded-xl, shadow-card
.card-hover   — card + hover:shadow-card-md + hover:-translate-y-0.5 (GPU only)
```

### Badges
```css
.badge            — base: px-2 py-0.5, text-xs, font-medium, rounded-full
.badge-tender     — gold-50 bg, gold-700 text
.badge-circular   — navy-50 bg, navy-600 text
.badge-new        — emerald-50 bg, emerald-700 text
.badge-upcoming   — amber-50 bg, amber-700 text
.badge-open       — emerald-100 bg, emerald-700 text
.badge-closed     — slate-100 bg, slate-500 text
.badge-urgent     — red-50 bg, red-700 text
.badge-info       — sky-50 bg, sky-700 text
```

### Navigation
```css
.nav-item     — base: px-3 py-2, text-sm, font-medium, rounded, transition
.nav-item-active — gold-400 bg, navy-700 text
```

### Layout
```css
.container-site — max-w-screen-xl, mx-auto, px-4 sm:px-6 lg:px-8
.page-banner    — navy-700 bg, white text, py-8 sm:py-10
.section-title  — text-2xl, font-bold, text-navy-700, leading-tight
.section-subtitle — text-slate-500, text-sm/base
```

### Tables
```css
.table-responsive — overflow-x-auto, rounded-lg, border border-slate-200
.table-base       — min-w-full, divide-y
.table-th         — navy-50 bg, navy-700 text, text-xs uppercase tracking-wide
.table-tr         — hover:bg-slate-50, border-b
.table-td         — px-4 py-3, text-sm
```

### Forms
```css
.input           — w-full, border-slate-200, rounded-lg, focus:ring-navy-400
.input-error     — border-danger, focus:ring-danger/30
```

---

## 5. Shadow Scale

```css
--shadow-card:    0 1px 3px rgba(12,45,94,.06), 0 1px 2px rgba(12,45,94,.04)
--shadow-card-md: 0 4px 16px rgba(12,45,94,.10), 0 2px 4px rgba(12,45,94,.06)
--shadow-card-lg: 0 8px 32px rgba(12,45,94,.14), 0 4px 8px rgba(12,45,94,.08)
```

Navy-tinted shadows match the navy color system and look more intentional than neutral grey shadows.

---

## 6. Breakpoints

| Name | Width | Devices |
|---|---|---|
| (base) | 0px+ | Mobile portrait |
| sm | 640px+ | Mobile landscape |
| md | 768px+ | Tablet portrait |
| lg | 1024px+ | Small laptop |
| xl | 1280px+ | Desktop |

---

## 7. Icon System

**Library:** Heroicons 24/outline (`@heroicons/react/24/outline`)  
**License:** MIT  
**Usage:** All icons are `aria-hidden="true"` when decorative. Icon-only buttons always have `aria-label`.

---

## 8. Accessibility Tokens

| Feature | Implementation |
|---|---|
| Focus ring | `focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2` |
| Min touch target | `min-h-[44px]` on all interactive elements |
| Skip link | Absolute at top, visible on focus only |
| Reduced motion | `@media (prefers-reduced-motion: reduce)` — all animations disabled |
| Color contrast | All text/background combos exceed WCAG AA 4.5:1 |

---

*Interactive style guide available at `/style-guide` in the running application.*
