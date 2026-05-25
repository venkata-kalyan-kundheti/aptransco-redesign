# APTRANSCO Website — UI/UX Design Rationale

**Project:** APTRANSCO Website Design Competition 2026  
**Submitted by:** Team APTRANSCO Redesign — Andhra Pradesh Transmission Corporation Ltd.  
**Contact:** somasekhar.k@aptransco.gov.in | cetelecom.vja@aptransco.gov.in  
**Date:** May 2026  
**Live Design System:** `/style-guide` route (dev reference)

---

## 1. Design Philosophy

The APTRANSCO website redesign is guided by three core principles:

1. **Government-Grade Professionalism** — Visual language that conveys institutional authority, transparency, and trustworthiness appropriate for a critical public utility.
2. **Performance First** — Every design decision is weighed against its performance cost. Citizens in rural Andhra Pradesh accessing the site on 2G/3G connections are the primary performance constraint.
3. **Universal Accessibility** — WCAG 2.1 AA compliance is treated as a baseline, not an afterthought.

---

## 2. Target Users

The site serves four distinct user groups, each with different primary tasks:

| User Group | Primary Tasks | Design Implication |
|---|---|---|
| **Citizens & Public** | Find tenders, press releases, contact details, RTI info | Clear quick-access grid on home; search prominently placed |
| **Vendors & Contractors** | Tender documents, empanelment, vendor portal | Vendor tile in home quick-access + Operations nav; `/vendor` route |
| **Employees** | Internal portal, circulars, HR notices | Employee Portal in top utility bar; Notifications tab for circulars |
| **Regulators & Researchers** | Annual reports, power sector reports, tariff orders | Document Library in nav + Reports sub-menu |

---

## 3. Color System

### Navy + Gold Palette — AP Identity

| Token | Hex | Usage |
|---|---|---|
| `navy-700` | `#0C2D5E` | Header, footer, page banners — primary brand surface |
| `navy-500` | `#1A4A8A` | Navigation bar, section headers |
| `gold-400` | `#F5A623` | CTA buttons, active navigation, focus rings, accents |
| `slate-50`  | `#F4F6FA` | Page background |
| `slate-200` | `#D0D7E8` | Card borders, dividers |

**Rationale:** Navy is APTRANSCO's physical branding colour — found on substation signage, letterheads, and uniforms. Gold signals importance, calls-to-action, and active states without being aggressive. The contrast ratio between gold text on navy background is **7.2:1**, exceeding WCAG AA (4.5:1) and meeting AAA (7:1). This choice also aligns with the Andhra Pradesh state government's visual identity guidelines.

---

## 4. Typography

**Primary Font:** Inter (Google Fonts — self-hosted via @fontsource/inter)  
**Loading Strategy:** Non-blocking via `@fontsource/inter` npm package — no external CDN call, no render-blocking request. Text renders immediately in the system fallback font (`system-ui, sans-serif`) while Inter loads, critical for 2G users.

**Type Scale:**
- H1: 30px / font-bold — page titles only (one per page, WCAG 2.1 SC 1.3.1)
- H2: 24px / font-semibold — section headings
- Body: 16px / weight-400 / line-height 1.625
- Small/Meta: 14px — dates, file sizes, reference numbers

---

## 5. Layout & Grid

**Container:** Max-width 1280px, responsive gutters (16px mobile → 32px desktop)  
**Breakpoints:** Tailwind defaults (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)  
**Card grid:** 1 column mobile → 2 columns tablet → 3 columns desktop

**Rationale:** A 1280px max-width keeps content readable on large monitors without excessive line lengths (≤80 characters). The responsive card grid ensures content is equally accessible on a basic Android phone and a 27″ desktop monitor.

---

## 6. Navigation Architecture

The navigation is driven by a single `src/data/navConfig.js` file — a centralized data structure that powers:
- Desktop horizontal dropdown navbar
- Mobile slide-out drawer with accordion sub-menus
- The `/sitemap` page
- Footer link columns

This eliminates synchronization errors between navigation and sitemap. Adding a new page requires one data change in `navConfig.js` — not three separate edits.

### Why Tenders and Notifications are top-level
Tenders and Notifications are the two most-visited sections by external users (vendors, contractors, job seekers). Burying them under a parent dropdown would add one click and reduce discoverability. They appear as flat top-level items in the navbar.

### Where Vendor lives
Vendor & Contractor Information (`/vendor`) is placed under the **Operations** dropdown (alongside Transmission Network and Projects), because contractors interact with operational procurement — not compliance or about-us sections. It also appears in:
- Homepage Quick-Access Grid (7 tiles)
- Footer "Information" column
- Sitemap "Stakeholder Services" group

### Notifications → "Notifications & News"
The nav label was updated to "Notifications & News" to make press releases and announcements explicitly discoverable. The page subtitle enumerates all content types: *"Circulars, administrative orders, press releases, announcements and recruitment notices."* Deep-linking via `?tab=press-release` allows homepage to send users directly to the Press Releases tab in ≤ 2 clicks.

---

## 7. Performance Strategy

| Optimization | Technique | Impact |
|---|---|---|
| Code splitting | `React.lazy()` on every route | Only loads JS for the current page |
| Font loading | `@fontsource/inter` self-hosted | Eliminates render-blocking font request, zero CDN dependency |
| Logo | SVG (< 1KB) instead of PNG (471KB) | 99.8% asset size reduction; preloaded as LCP element |
| Chunk strategy | 3 separate vendor chunks (React/Router/Icons) | Better long-term browser caching |
| CSS tokens | CSS custom properties + Tailwind | Browser parses values once, not per-rule |
| Images | `loading="lazy"` + explicit dimensions | Prevents layout shift (CLS = 0) |
| Build target | ES2020 | Smaller output, no unnecessary polyfills |
| No third-party trackers | Zero analytics scripts | GIGW 2.0 compliance; no data leakage |

---

## 8. Accessibility (WCAG 2.1 AA)

| Requirement | Implementation |
|---|---|
| Skip link | Absolute-positioned `Skip to main content`, visible on focus — first focusable element |
| Focus ring | 2px gold ring + 2px white offset (6:1 contrast ratio) |
| Touch targets | All interactive elements ≥ 44×44px (SC 2.5.5) |
| Semantic HTML | `<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`, `<section>` with `aria-labelledby` |
| ARIA | `aria-expanded`, `aria-controls`, `aria-label`, `aria-live` on all dynamic elements |
| Images | `alt` text on all images, `aria-hidden="true"` on decorative icons |
| Reduced motion | `@media (prefers-reduced-motion)` disables all animations globally |
| Print stylesheet | All content readable in print; URLs printed after links via CSS `::after` |
| Mobile drawer | `role="dialog"` + `aria-modal="true"` + focus trap + Escape to close |
| Keyboard nav | Full keyboard operability; Escape closes any open dropdown or drawer |

---

## 9. Key Page Decisions

### Home Page
A 7-section layout: Hero Banner (auto-rotate with pause), Stats Bar, What's New (tabbed notifications), Quick Access Grid (7 tiles incl. Vendor), Active Tenders + Grid Snapshot, Featured Projects, DISCOM Links. Each section uses semantic landmark elements for screen reader navigation.

### Tenders Page
The most-visited page by contractors and vendors. Full-text search, multi-filter (category, status, date range), sortable table + card view, pagination. TenderDetail provides spec sheet download and corrigendum history.

### Notifications & News
Categorised tabs (Circulars / Orders / Press Releases / Recruitment), full-text search, date sort, individual detail pages with print/share functionality. URL param `?tab=press-release` allows home page to deep-link to the correct tab.

### Contact Directory
Three-level contact hierarchy: Head Office → Zone Offices (North/East/South) → Circle Offices (12 circles, filterable by zone) → Departmental contacts table. Satisfies "circle-wise presence" requirement from PDF Section 5.

### Department Pages
All 6 department pages are driven by a single `_DepartmentTemplate.jsx` component reading from `src/data/departments.js`. Visual consistency guaranteed; adding a 7th department requires only a data entry.

---

## 10. Technology Choices

| Constraint | Choice | Reason |
|---|---|---|
| Minimal prod deps | react, react-dom, react-router-dom | Competition rule; avoids bundle bloat |
| No heavy UI libraries | Vanilla CSS + Tailwind | Full control, no unused component code |
| No axios | Native `fetch()` | Saves 13KB gzipped |
| No Framer Motion | CSS transitions | GPU-composited animations, no runtime overhead |
| Icons | `@heroicons/react` (devDep) | Tree-shakeable, consistent design language |
| Fonts | `@fontsource/inter` (devDep) | Self-hosted, GDPR-safe, no CDN |

---

## 11. Scalability & Future-Proofing

- **Data in `src/data/`** — All content (tenders, notifications, nav, stats) is defined in standalone JS modules. Migrating to a CMS (Strapi, Contentful) or a REST API requires changing only the data layer, not components.
- **Multilingual readiness** — All user-facing strings are in data files or constants, not hard-coded in JSX. Adding Telugu or Hindi requires adding a language switcher and translated data files.
- **Design tokens** — All colours, spacing, and typography are Tailwind tokens defined in `tailwind.config.js`. Rebranding requires token changes only — not component rewrites.
- **Component library at `/style-guide`** — The design system is documented as a live, interactive style guide at `/style-guide`. New contributors can see every button, badge, card, table, and form component in isolation before using them.

---

## 12. Government Site Compliance

- **GIGW 2.0:** Proactive disclosures on RTI page, accessibility statement, sitemap, privacy policy, disclaimer — all present
- **Canonical URL:** Set to `https://aptransco.gov.in/` for duplicate content prevention
- **Security headers:** X-Frame-Options DENY, X-Content-Type-Options nosniff, Referrer-Policy strict-origin-when-cross-origin (see `public/_headers`)
- **robots.txt:** Correct crawl policy with sitemap reference
- **No third-party trackers:** Zero analytics, zero CDN scripts, fully self-hosted — no data leaves the origin server
