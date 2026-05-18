# APTRANSCO Website — Project Completion Checklist
> **Competition:** APTRANSCO Website Design Competition – 2026  
> **Deadline:** 02 June 2026  
> **Last Updated:** 2026-05-08  
> **Overall Completion: ~38%** (Phase 1 ✅ + Phase 2 ✅)

---

## Legend
- `[x]` — Complete (production-quality, fully implemented)
- `[~]` — Stub exists (file created, placeholder content only — needs real implementation)
- `[ ]` — Not started

---

## 1. PROJECT FOUNDATION & CONFIG
> **Status: ✅ 100% Complete**

- [x] `package.json` — React 18, react-router-dom, heroicons (only 3 prod deps)
- [x] `index.html` — SEO meta tags, Open Graph, Inter font preconnect, viewport
- [x] `vite.config.js` — `@` alias to `src/`, manual chunks, compressed size report
- [x] `postcss.config.js` — Tailwind + autoprefixer
- [x] `tailwind.config.js` — Full Navy + Gold + Slate color tokens, typography, shadows, z-index, spacing
- [x] `src/index.css` — Tailwind directives, base styles, `.btn`, `.card`, `.badge`, `.nav-item`, `.input`, `.skip-link` component classes
- [x] `src/main.jsx` — React 18 `createRoot` with StrictMode
- [x] `src/App.jsx` — BrowserRouter, all lazy routes wired, `ScrollToTop` hook

---

## 2. DATA LAYER  (`src/data/`)
> **Status: ✅ 100% Complete — 7 of 7 files done**

- [x] `navConfig.js` — All 8 top-level items, all children, `getActiveNavItem()`, `getParentNavItem()`, `NAV_FLAT`
- [x] `notifications.js` — 20 entries: circulars, orders, press releases, recruitment, general
- [x] `tenders.js` — 20 entries across all statuses & categories with corrigendum support
- [x] `leadership.js` — CMD, 4 Directors, 3 Board Members, 4 Key Officers
- [x] `departments.js` — All 6 departments with HOD, key functions, contacts, links
- [x] `stats.js` — Network stats, substation breakup, zone data, key achievements
- [x] `quickLinks.js` — 16 links across 4 categories for utility bar and Important Links page

---

## 3. UTILITIES  (`src/utils/`)
> **Status: ✅ 100% Complete — 3 of 3 files done**

- [x] `constants.js` — Org name, tagline, contact info, social links, network stats, quick tiles, footer links, meta defaults
- [x] `formatDate.js` — `Intl.DateTimeFormat` wrapper (DD MMM YYYY, relative time, deadline urgency, isRecent)
- [x] `truncateText.js` — Word-boundary truncation for cards, titles, tender titles, HTML strip

---

## 4. CUSTOM HOOKS  (`src/hooks/`)
> **Status: ❌ 0% Complete — 0 of 3 files done**

- [ ] `useScrollToTop.js` — Auto scroll to top on route change (currently inline in App.jsx — should be extracted)
- [ ] `useSearch.js` — Client-side search logic: query, results, loading state
- [ ] `useFilter.js` — Filter + sort logic for list pages (category, date range, status)

---

## 5. LAYOUT COMPONENTS  (`src/components/layout/`)
> **Status: 🟢 75% Complete — 3 of 4 files done**

- [x] `Header.jsx` — Top utility bar, logo bar, desktop navbar with dropdowns, mobile slide-out drawer, search overlay, skip link, full ARIA
- [x] `Footer.jsx` — Brand column, 4 link columns, address, phone/email, copyright bar
- [x] `PageShell.jsx` — Breadcrumb nav + page banner (navy-700) + content container
- [ ] `Sidebar.jsx` — Optional right/left sidebar for inner pages (document library, departments)

---

## 6. NAVIGATION COMPONENTS  (`src/components/navigation/`)
> **Status: ❌ 0% Complete — 0 of 4 files done**
> *(Navbar & MobileMenu logic lives inside Header.jsx — should be extracted per README architecture)*

- [ ] `Navbar.jsx` — Extracted desktop horizontal nav with dropdowns
- [ ] `MobileMenu.jsx` — Extracted mobile slide-out drawer
- [ ] `Breadcrumb.jsx` — Standalone breadcrumb component (currently inline in PageShell)
- [ ] `QuickLinks.jsx` — Top-bar utility links as a separate component

---

## 7. HOME PAGE COMPONENTS  (`src/components/home/`)
> **Status: ✅ Implemented inline in Home.jsx (all 8 sections complete)**

- [x] `HeroBanner` — Rotating 3-slide hero with auto-advance, navy gradient, gold accent, slide indicators
- [x] `WhatsNewFeed` — Tabbed (6 categories) filterable notification feed with 12 latest items
- [x] `StatsBar` — 6-stat network bar (400kV/220kV/132kV/substations/MVA/districts)
- [x] `QuickAccessGrid` — 6-tile fast-access grid with hover icon colour change
- [x] `LiveDataWidget` — Mocked frequency (49.98 Hz), peak demand (14,280 MW), transmission loss (2.8%)
- [x] `ProjectsSection` — 3 featured projects with status badge, location, capacity
- [x] `ReportsSection` — Integrated via DocumentLibrary page
- [x] `ElectricityCustomers` — APSPDCL + APEPDCL DISCOM links with district mapping

---

## 8. COMMON COMPONENTS  (`src/components/common/`)
> **Status: ✅ 9 of 14 done**

- [x] `NotificationCard.jsx` — Date badge + category badge + title + NEW indicator + download/view link
- [x] `DocumentCard.jsx` — PDF download card with file-type icon, size, date, download button
- [x] `TenderCard.jsx` — Ref no + title + dates + value + EMD + status/category badges + corrigendum
- [x] `StaffCard.jsx` — Avatar + role badge + name + designation + bio + email/phone links (full + compact)
- [x] `DepartmentCard.jsx` — Coloured icon + name + tagline + description + HOD + arrow CTA
- [ ] `StatCard.jsx` — Metric display: value + unit + label
- [x] `Badge.jsx` — All 15 variants: status, category, notification type, urgency
- [ ] `SearchBar.jsx` — Full search input with debounce + suggestions dropdown
- [x] `FilterBar.jsx` — Search + multi-select filters + result count + reset button
- [x] `Pagination.jsx` — Numbered pages + ellipsis + prev/next + items-per-page
- [ ] `PageBanner.jsx` — Inner page top banner (inline in PageShell)
- [ ] `SectionDivider.jsx` — Visual section separator component
- [x] `EmptyState.jsx` — Illustration + message + optional action button
- [ ] `ErrorBoundary.jsx` — Graceful error fallback UI with retry button

---

## 9. UI PRIMITIVE COMPONENTS  (`src/components/ui/`)
> **Status: 🟢 63% Complete — 5 of 8 components done**

- [x] `Spinner.jsx` — Loading indicator with `role="status"` and full-page variant
- [x] `Button.jsx` — Primary / secondary / ghost / danger / gold variants, sizes, router/anchor, loading state
- [ ] `Input.jsx` — Text input with label, helper text, validation state (error/success)
- [ ] `Select.jsx` — Accessible dropdown select with label
- [x] `Table.jsx` — Responsive data table with sort headers, striped rows, custom renderers, horizontal scroll
- [ ] `Modal.jsx` — Accessible modal dialog with focus trap, Escape-to-close, backdrop
- [x] `Accordion.jsx` — FAQ-style expand/collapse with smooth animation, ARIA, allowMultiple mode
- [x] `Tabs.jsx` — Tab navigation with count badges, ARIA tabs pattern, controlled

---

## 10. PAGES — CORE
> **Status: ✅ 100% Complete**

- [x] `pages/Home.jsx` — All 7 sections: rotating hero, stats bar, tabbed What's New, quick access grid, live data + active tenders, featured projects, DISCOM links

---

## 11. PAGES — ABOUT  (`src/pages/about/`)
> **Status: 🟢 60% Complete — 3 of 5 fully implemented**

- [x] `AboutAPTRANSCO.jsx` — Narrative, key facts sidebar, stats bar, achievements timeline, mandates, departments grid
- [x] `VisionMission.jsx` — Vision quote, mission text, 4 core values cards, 6 strategic objectives
- [~] `OrganizationChart.jsx` — Stub (needs: visual org hierarchy chart)
- [x] `BoardLeadership.jsx` — Role-filter tabs, CMD highlight, Directors, Board Members, Key Officers (compact + full cards)
- [~] `ContactDirectory.jsx` — Stub (needs: office list, searchable directory)

---

## 12. PAGES — OPERATIONS  (`src/pages/operations/`)
> **Status: 🟡 Stubs only — 2 of 3 files exist**

- [~] `TransmissionNetwork.jsx` — Stub (needs: network stats, line length table, substation data)
- [~] `Projects.jsx` — Stub (needs: project cards with status badges, filter by status/region)
- [ ] `GridMap.jsx` — **Not created** (needs: AP state map with transmission corridors)

---

## 13. PAGES — TENDERS  (`src/pages/tenders/`)
> **Status: ✅ 100% Complete**

- [x] `TendersList.jsx` — FilterBar (status + category + sort + search), summary stats, TenderCard grid, Pagination
- [x] `TenderDetail.jsx` — Header, key dates, financial details, download, corrigendum history, timeline

---

## 14. PAGES — NOTIFICATIONS  (`src/pages/notifications/`)
> **Status: 🟢 50% Complete**

- [x] `NotificationsList.jsx` — Category tabs with counts, search, sort, NotificationCard grid, Pagination
- [ ] `NotificationDetail.jsx` — **Not created**

---

## 15. PAGES — CAREERS  (`src/pages/careers/`)
> **Status: ✅ 100% Complete**

- [x] `Careers.jsx` — Active posts (vacancies, pay scale, deadline, apply button), exam calendar table, how-to-apply steps, recent notices

---

## 16. PAGES — VENDOR  (`src/pages/vendor/`)
> **Status: 🟡 Stub only**

- [~] `VendorInfo.jsx` — Stub (needs: empanelment process, vendor registration docs, contact)

---

## 17. PAGES — COMPLIANCE  (`src/pages/compliance/`)
> **Status: 🟢 67% Complete — 2 of 3 implemented**

- [x] `RTI.jsx` — All 17 Section 4(1)(b) disclosures (accordion), CPIO info, application process steps
- [~] `TariffRegulatory.jsx` — Stub (Phase 3)
- [x] `RegulatoryCompliance.jsx` — Stub (wired in router)

---

## 18. PAGES — REPORTS  (`src/pages/reports/`)
> **Status: 🟢 33% Complete — 1 of 3 implemented**

- [x] `DocumentLibrary.jsx` — Sidebar category tree, search, 16 documents across 6 categories, DocumentCard grid
- [~] `AnnualReports.jsx` — Stub (Phase 3)
- [~] `PowerSectorReports.jsx` — Stub (Phase 3)

---

## 19. PAGES — SAFETY  (`src/pages/safety/`)
> **Status: 🟡 Stub only**

- [~] `SafetyStandards.jsx` — Stub (needs: safety guidelines, standards list, awareness material)

---

## 20. PAGES — DEPARTMENTS  (`src/pages/departments/`)
> **Status: ✅ 100% Complete — all 6 implemented via shared template**
> All 6 use `_DepartmentTemplate.jsx`: Hero strip → Key Functions → HOD sidebar → Contacts → Useful Links

- [x] `TelecomIT.jsx` — Telecom & IT (OFC, SCADA, PLCC, cybersecurity)
- [x] `GridTransmission.jsx` — Grid Transmission (O&M, outage coordination, zone contacts)
- [x] `ProjectsDept.jsx` — Projects (new substations, line construction, procurement)
- [x] `FinanceAccounts.jsx` — Finance & Accounts (budget, APERC filings, payroll)
- [x] `HRAdmin.jsx` — HR & Admin (recruitment, transfers, welfare, RTI)
- [x] `TrainingPRTI.jsx` — PRTI (training programmes, calendar, external training)

---

## 21. PAGES — UTILITY  (`src/pages/utility/`)
> **Status: 🟢 20% Complete — 2 real + 8 stubs**

- [~] `SearchResults.jsx` — Stub (Phase 3)
- [x] `ContactFeedback.jsx` — Contact form (validated: name, email, phone, subject, message), success state, office directory, 1912 helpline
- [~] `FAQ.jsx` — Stub (Phase 3)
- [~] `ImportantLinks.jsx` — Stub (Phase 3)
- [~] `Sitemap.jsx` — Stub (Phase 3)
- [~] `PrivacyPolicy.jsx` — Stub (Phase 3)
- [~] `Disclaimer.jsx` — Stub (Phase 3)
- [~] `AccessibilityStatement.jsx` — Stub (Phase 3)
- [x] `NotFound.jsx` — **Complete** (404 with back-to-home + sitemap link)
- [ ] `employees/EmployeePortal.jsx` — **Not created**

---

## 22. PAGES — TRAINING  (`src/pages/training/`)
> **Status: ❌ Not created**

- [ ] `Training.jsx` — Not created (needs: PRTI info, training calendar, registration)

---

## 23. DESIGN SYSTEM  (`src/design-system/`)
> **Status: ❌ 0% Complete**

- [ ] `colors.js` — Color token reference (mirrors tailwind.config — for JS usage)
- [ ] `spacing.js` — Spacing scale reference document
- [ ] `StyleGuidePreview.jsx` — Visual style guide page (dev-only route `/style-guide`)

---

## 24. PUBLIC ASSETS  (`public/`)
> **Status: ❌ 0% Complete**

- [ ] `favicon.ico` — APTRANSCO branded favicon (currently 404)
- [ ] `logo.png` — Official APTRANSCO logo (currently using bolt icon placeholder)
- [ ] `og-image.png` — Open Graph social share image (1200×630px)

---

## 25. DOCUMENTATION  (`docs/`)
> **Status: ❌ 0% Complete**

- [ ] `docs/sitemap.md` — Full site hierarchy in markdown text
- [ ] `docs/ux-rationale.md` — UI/UX design rationale document (mandatory submission item)
- [ ] `docs/style-guide.md` — Exported style guide for submission
- [ ] `docs/declaration.pdf` — Signed originality declaration

---

## 26. SUBMISSION DELIVERABLES (README Section 18)
> **Status: ❌ 0% Complete**

- [ ] Homepage mockup — full implementation (not just stub)
- [ ] 5+ major inner-page mockups — Tenders, Notifications, Document Library, About, RTI, Leadership, Careers, Projects
- [ ] 5+ sub-page mockups — 6 department pages + TenderDetail + NotificationDetail
- [ ] Sitemap page + `docs/sitemap.md`
- [ ] UI/UX rationale note — `docs/ux-rationale.md` (exported to PDF)
- [ ] Design system / style guide — `src/design-system/` + `docs/style-guide.md`
- [ ] Prototype / demo — Vercel/Netlify deployment URL
- [ ] Covering letter from institution/team
- [ ] Participant details form submitted (https://forms.gle/vaNsfy2LpXSrT99d7)
- [ ] Bonafide certificate / ID proof
- [ ] Declaration of originality (signed PDF)
- [ ] Screenshots of each page at desktop + mobile breakpoints

---

## COMPLETION SUMMARY TABLE

| Area | Done | Total | % |
|---|:---:|:---:|:---:|
| Project Foundation & Config | 8 | 8 | **100%** |
| Data Layer (`src/data/`) | 1 | 7 | **14%** |
| Utilities (`src/utils/`) | 1 | 3 | **33%** |
| Custom Hooks (`src/hooks/`) | 0 | 3 | **0%** |
| Layout Components | 3 | 4 | **75%** |
| Navigation Components (standalone) | 0 | 4 | **0%** |
| Home Page Components | 0 | 8 | **0%** |
| Common Components | 0 | 14 | **0%** |
| UI Primitive Components | 1 | 8 | **13%** |
| Pages — Core | 0 | 1 | **0%** *(stub)* |
| Pages — About | 0 | 5 | **0%** *(stubs)* |
| Pages — Operations | 0 | 3 | **0%** *(stubs)* |
| Pages — Tenders | 0 | 2 | **0%** *(stubs)* |
| Pages — Notifications | 0 | 2 | **0%** *(1 stub)* |
| Pages — Careers | 0 | 1 | **0%** *(stub)* |
| Pages — Vendor | 0 | 1 | **0%** *(stub)* |
| Pages — Compliance | 0 | 3 | **0%** *(stubs)* |
| Pages — Reports | 0 | 3 | **0%** *(stubs)* |
| Pages — Safety | 0 | 1 | **0%** *(stub)* |
| Pages — Departments | 0 | 6 | **0%** *(stubs)* |
| Pages — Utility | 1 | 10 | **10%** |
| Pages — Training | 0 | 1 | **0%** |
| Design System | 0 | 3 | **0%** |
| Public Assets | 0 | 3 | **0%** |
| Documentation (`docs/`) | 0 | 4 | **0%** |
| Submission Deliverables | 0 | 12 | **0%** |
| **GRAND TOTAL** | **15** | **~120** | **~12%** |

---

## RECOMMENDED BUILD ORDER (by competition priority)

### 🔴 Phase 1 — Critical Path (Week 1: May 8–15)
1. `src/data/tenders.js` + `notifications.js` + `leadership.js` + `departments.js`
2. `src/utils/formatDate.js` + `truncateText.js`
3. `src/components/common/Badge.jsx` + `TenderCard.jsx` + `NotificationCard.jsx` + `DocumentCard.jsx`
4. `src/components/ui/Button.jsx` + `Table.jsx` + `Tabs.jsx` + `Accordion.jsx`
5. `src/components/common/FilterBar.jsx` + `Pagination.jsx` + `EmptyState.jsx`
6. **Home page** — Full implementation (all 8 sections with real components + data)
7. **Tenders page** — `TendersList.jsx` + `TenderDetail.jsx` (core competition criterion)
8. **Notifications page** — `NotificationsList.jsx` (tabbed, filtered, real data)

### 🟡 Phase 2 — High Priority (Week 2: May 15–22)
9. **About pages** — `AboutAPTRANSCO.jsx` + `BoardLeadership.jsx` (institutional credibility)
10. **RTI page** — required compliance section
11. **Document Library** — full sidebar + card grid
12. **All 6 Department pages** — shared template, fast to implement
13. `src/components/common/StaffCard.jsx` + `DepartmentCard.jsx`
14. **Careers page** — high public traffic page
15. **Contact/Feedback page** — with form validation

### 🟢 Phase 3 — Polish (Week 3: May 22–29)
16. **Search Results page** — with `useSearch.js` hook
17. **Sitemap page** — auto-generated from navConfig
18. **FAQ page** — with Accordion component
19. `src/design-system/` — StyleGuidePreview, colors.js, spacing.js
20. `public/` — favicon.ico, logo.png, og-image.png
21. `src/components/ui/Modal.jsx` + `ErrorBoundary.jsx`
22. Remaining utility pages (Privacy, Disclaimer, Accessibility)

### 🏁 Phase 4 — Submission Prep (Week 4: May 29–June 2)
23. `docs/ux-rationale.md` — written rationale document
24. `docs/sitemap.md` — site hierarchy document
25. `docs/style-guide.md` — exported style guide
26. Deploy to Vercel/Netlify for prototype link
27. Take desktop + mobile screenshots of all pages
28. Prepare declaration + covering letter + bonafide
29. Submit form at https://forms.gle/vaNsfy2LpXSrT99d7
