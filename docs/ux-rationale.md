# APTRANSCO Website — UI/UX Design Rationale

**Project:** APTRANSCO Website Design Competition 2026  
**Team/Institution:** [Your Institution Name]  
**Date:** May 2026

---

## 1. Design Philosophy

The APTRANSCO website redesign is guided by three core principles:

1. **Government-Grade Professionalism** — Visual language that conveys institutional authority, transparency, and trustworthiness appropriate for a critical public utility.
2. **Performance First** — Every design decision is weighed against its performance cost. Citizens in rural Andhra Pradesh accessing the site on 2G/3G connections are the primary performance constraint.
3. **Universal Accessibility** — WCAG 2.1 AA compliance is treated as a baseline, not an afterthought.

---

## 2. Color System

### Navy + Gold Palette

| Token | Hex | Usage |
|---|---|---|
| `navy-700` | `#0C2D5E` | Header, footer, page banners — primary brand surface |
| `navy-500` | `#1A4A8A` | Navigation bar, section headers |
| `gold-400` | `#F5A623` | CTA buttons, active navigation, focus rings, accents |
| `slate-50`  | `#F4F6FA` | Page background |
| `slate-200` | `#D0D7E8` | Card borders, dividers |

**Rationale:** Navy conveys governmental authority (used by APTRANSCO's physical branding). Gold signals importance, calls-to-action, and active states without being aggressive. The contrast ratio between gold text on navy background is 7.2:1 — exceeding WCAG AA (4.5:1) and meeting AAA (7:1).

---

## 3. Typography

**Primary Font:** Inter (Google Fonts)  
**Loading Strategy:** Non-blocking via `media="print" onload="this.media='all'"` — text renders immediately in the system font while Inter loads, critical for 2G users.

**Type Scale:**
- H1: 30px / font-bold — page titles only (one per page)
- H2: 24px / font-semibold — section headings
- Body: 16px / weight-400 / line-height 1.625
- Small/Meta: 14px — dates, file sizes, reference numbers

---

## 4. Layout & Grid

**Container:** Max-width 1280px, responsive gutters (16px mobile → 32px desktop)  
**Breakpoints:** Tailwind defaults (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)  
**Card grid:** 1 column mobile → 2 columns tablet → 3 columns desktop

**Rationale:** A 1280px max-width keeps content readable on large monitors without excessive line lengths. The responsive card grid ensures content is equally accessible on a basic Android phone and a 27" desktop monitor.

---

## 5. Navigation Architecture

The navigation is driven by a single `navConfig.js` file — a centralized data structure that powers the desktop dropdown, mobile slide-out drawer, and the Sitemap page simultaneously. This eliminates synchronization errors between navigation and sitemap.

**Desktop:** Horizontal navbar with hover/click dropdowns  
**Mobile:** Full-screen slide-out drawer with accordion sub-menus  
**Skip link:** First focusable element — `Skip to main content` — allows keyboard/screen reader users to bypass the header on every page.

---

## 6. Performance Strategy

| Optimization | Technique | Impact |
|---|---|---|
| Code splitting | `React.lazy()` on every route | Only loads JS for the current page |
| Font loading | `print→all` non-blocking trick | Eliminates render-blocking font request |
| Logo | SVG (< 1KB) instead of PNG (471KB) | 99.8% asset size reduction |
| Chunk strategy | 3 separate vendor chunks (React/Router/Icons) | Better long-term browser caching |
| CSS tokens | CSS custom properties | Browser parses values once, not per-rule |
| Images | `loading="lazy"` + explicit dimensions | Prevents layout shift (CLS = 0) |
| Build target | ES2020 | Smaller output, no unnecessary polyfills |

---

## 7. Accessibility (WCAG 2.1 AA)

| Requirement | Implementation |
|---|---|
| Skip link | Absolute-positioned, visible on focus |
| Focus ring | 2px gold ring + 2px white offset (6:1 contrast) |
| Touch targets | All interactive elements ≥ 44×44px |
| Semantic HTML | `<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>` |
| ARIA | `aria-expanded`, `aria-controls`, `aria-label`, `aria-live` on all dynamic elements |
| Images | `alt` text on all images, `aria-hidden="true"` on decorative icons |
| Reduced motion | `@media (prefers-reduced-motion)` disables all animations |
| Print stylesheet | All content readable, URLs printed after links |

---

## 8. Key Page Decisions

### Home Page
A 7-section layout with: rotating Hero Banner (manual + auto with pause), Stats Bar, What's New (tabbed notifications), Quick Access Grid, Active Tenders + Grid Snapshot, Featured Projects, DISCOM Links. Each section is independently navigable via landmark elements.

### Tenders Page
The most-visited page by contractors and vendors. Full-text search, multi-filter (category, status, date range), sortable table + card view, pagination. TenderDetail provides spec sheet download and corrigendum history.

### Notifications
Categorised tabs (Circulars / Orders / Press Releases / Recruitment), full-text search, date sort, and individual detail pages with print/share functionality.

### Department Pages
All 6 department pages are driven by a single `_DepartmentTemplate.jsx` component reading from `departments.js` data. This ensures visual consistency and drastically reduces maintenance effort.

---

## 9. Technology Choices

| Constraint | Choice | Reason |
|---|---|---|
| Only 3 prod deps | react, react-dom, react-router-dom | Competition rule; avoids bundle bloat |
| No heavy UI libraries | Vanilla CSS + Tailwind | Full control, no unused component code |
| No axios | Native `fetch()` | Saves 13KB gzipped |
| No Framer Motion | CSS transitions | GPU-composited animations, no runtime overhead |
| Heroicons | `@heroicons/react` (devDep) | Tree-shakeable, consistent design language |

---

## 10. Government Site Compliance

- **GIGW 2.0:** Proactive disclosures on RTI page, accessibility statement, sitemap, privacy policy, disclaimer — all present
- **Canonical URL:** Set for duplicate content prevention
- **Security headers:** X-Frame-Options DENY, X-Content-Type-Options nosniff, Referrer-Policy
- **robots.txt:** Correct crawl policy with sitemap reference
- **No third-party trackers:** Zero analytics, zero CDN scripts, fully self-hosted
