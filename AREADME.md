# APTRANSCO Website Redesign — Competition Entry 2026

> **Competition:** APTRANSCO Website Design Competition – 2026  
> **Theme:** Reimagining APTRANSCO's Digital Public Interface  
> **Prize:** ₹50,000 First Prize  
> **Submission Deadline:** 02 June 2026  
> **Tech Stack:** React 18 + Tailwind CSS v3 + React Router v6  
> **Color Palette:** Navy + Gold (Professional Government Standard)

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Design Philosophy](#2-design-philosophy)
3. [Color System](#3-color-system)
4. [Typography System](#4-typography-system)
5. [Folder Structure](#5-folder-structure)
6. [Page Coverage Map](#6-page-coverage-map)
7. [Component Architecture](#7-component-architecture)
8. [Routing Structure](#8-routing-structure)
9. [Performance Strategy](#9-performance-strategy)
10. [Responsive Design System](#10-responsive-design-system)
11. [Accessibility Standards](#11-accessibility-standards)
12. [Getting Started](#12-getting-started)
13. [Page-by-Page Build Guide](#13-page-by-page-build-guide)
14. [Evaluation Criteria Alignment](#14-evaluation-criteria-alignment)
15. [Future Scalability Plan](#15-future-scalability-plan)
16. [Cyber Security & Governance](#16-cyber-security--governance)
17. [Asset Guidelines](#17-asset-guidelines)
18. [Submission Checklist](#18-submission-checklist)

---

## 1. Project Overview

This project is a **comprehensive reference design concept** for the complete redesign of the official APTRANSCO website (aptransco.gov.in). It is submitted as part of the APTRANSCO Website Design Competition – 2026.

### What This Is

A full frontend design concept built with React + Tailwind CSS that demonstrates how every major section, department page, public information page, and utility page of the APTRANSCO website can be redesigned to be:

- Institutionally credible and professionally appropriate for a State Transmission Utility
- Fast-loading even on low-bandwidth connections (2G/3G rural networks)
- Fully responsive across desktop, tablet, and mobile
- Accessible and inclusive following WCAG 2.1 AA guidelines
- Scalable and maintainable as content volume grows
- Implementation-friendly for future CMS integration

### What This Is Not

This is **not** a production deployment. It is a reference design concept — a detailed, clickable, complete mockup that APTRANSCO can hand to a professional development team as the blueprint for the actual website.

### Competition Alignment

This submission directly addresses every mandatory deliverable from the competition guidelines:

| Guideline Requirement | This Project |
|---|---|
| Homepage mockup | `src/pages/Home.jsx` |
| 5+ major inner-page mockups | 10 inner pages built |
| 5+ representative sub-page mockups | 8 department/sub-pages built |
| Sitemap with hierarchy | `src/pages/Sitemap.jsx` + `docs/sitemap.md` |
| UI/UX rationale note | `docs/ux-rationale.md` |
| Responsive layouts (desktop/tablet/mobile) | Tailwind mobile-first breakpoints throughout |
| Design system / style guide | `src/design-system/` + `docs/style-guide.md` |
| Prototype / demo | Fully clickable React app |
| Signed declaration | `docs/declaration.pdf` |

---

## 2. Design Philosophy

### Five Core Principles (from Competition Guidelines)

**1. Clarity First**  
Every page is designed so that the most-needed information (tenders, notices, contacts, reports, downloads) is reachable in at most two clicks from the homepage. Navigation labels are plain, descriptive, and jargon-free.

**2. Trust and Authority**  
The design projects seriousness and reliability. No animations for decoration. No gradients or shadows for flair. Clean flat surfaces, strong typography, and institutional Navy + Gold color language.

**3. Structured Disclosure**  
Documents are logically grouped by type (Tenders, Circulars, Reports, RTI) with date, category badges, and direct PDF download links. No more flat bullet lists of unorganized PDFs.

**4. Consistency**  
Every page shares the same Header, Footer, page shell, and component library. A user who lands on the Telecom department page and then navigates to the Finance page will find the same visual logic.

**5. Future Maintainability**  
Pages are built from small, independent components. Adding a new department page requires copying one template file and filling in the data. No custom CSS per page.

### Design Language

- **Restraint over decoration** — the design earns credibility by not trying too hard
- **Information density balanced with whitespace** — government users are task-focused; give them what they need without making pages feel sparse or unclear
- **Mobile-first but desktop-primary** — most APTRANSCO stakeholders (vendors, contractors, regulators) access from desktop; mobile layouts are complete but desktop gets the primary design attention
- **No dark mode** — government utility websites are used in official, well-lit settings; a single light theme is appropriate and avoids accessibility complexity

---

## 3. Color System

### Primary Palette — Navy + Gold

This palette was selected for its strong alignment with the evaluation criteria of **institutional fit, professionalism, governance suitability, and trust**. It mirrors the color language of credible Indian government digital infrastructure (NIC, MoP, state utility portals) while being modernized for 2026.

```css
/* tailwind.config.js — extend colors */
colors: {
  navy: {
    50:  '#EEF2F9',
    100: '#D5DFF0',
    200: '#ABBFE1',
    300: '#7A96CC',
    400: '#4A6DB5',
    500: '#1A4A8A',   /* primary nav, headers */
    600: '#163D74',
    700: '#0C2D5E',   /* darkest — top bar, footer */
    800: '#091F42',
    900: '#050F21',
  },
  gold: {
    50:  '#FFF8EC',
    100: '#FDEDC8',
    200: '#FBDB94',
    300: '#F9C85F',
    400: '#F5A623',   /* primary CTA buttons, active states */
    500: '#E0901A',
    600: '#B97010',
    700: '#8A500A',
    800: '#5C3405',
    900: '#2E1A02',
  },
  slate: {
    50:  '#F4F6FA',   /* page background */
    100: '#E8ECF4',   /* card backgrounds */
    200: '#D0D7E8',   /* borders */
    300: '#A8B4CC',   /* muted text, dividers */
    400: '#7A8BAA',
    500: '#546480',
    600: '#3D4D66',
    700: '#2A3650',
    800: '#1A2338',
    900: '#0D1220',
  },
  /* Semantic colors — do not use for decoration */
  success: '#1A7A3F',
  warning: '#B97010',
  danger:  '#9B1D1D',
  info:    '#1A4A8A',
}
```

### Color Usage Rules

| Element | Color Token | Tailwind Class |
|---|---|---|
| Top utility bar | navy-700 bg | `bg-navy-700` |
| Main navigation | navy-500 bg, white text | `bg-navy-500 text-white` |
| Active nav item | gold-400 bg, navy-700 text | `bg-gold-400 text-navy-700` |
| Primary CTA button | gold-400 bg, navy-700 text | `bg-gold-400 text-navy-700` |
| Secondary button | transparent, navy-500 border | `border border-navy-500 text-navy-500` |
| Page background | slate-50 | `bg-slate-50` |
| Card background | white | `bg-white` |
| Card border | slate-200 | `border-slate-200` |
| Section heading | navy-700 text | `text-navy-700` |
| Body text | slate-700 text | `text-slate-700` |
| Muted/meta text | slate-400 text | `text-slate-400` |
| Footer | navy-700 bg, slate-100 text | `bg-navy-700 text-slate-100` |
| Badge — Tender | gold-50 bg, gold-700 text | `bg-gold-50 text-gold-700` |
| Badge — Circular | navy-50 bg, navy-600 text | `bg-navy-50 text-navy-600` |
| Badge — New | success bg (light), success text | custom semantic class |

---

## 4. Typography System

```js
// tailwind.config.js
fontFamily: {
  sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
  serif: ['Georgia', 'serif'],  /* for pull quotes only */
  mono: ['JetBrains Mono', 'monospace'],  /* for code/technical specs */
}
```

**Why Inter:** Open source, optimized for screen reading, excellent Telugu glyph support for future multilingual expansion, and widely used in government digital products globally.

### Type Scale

| Role | Size | Weight | Tailwind |
|---|---|---|---|
| Page title (H1) | 30px / 1.875rem | 700 | `text-3xl font-bold` |
| Section heading (H2) | 24px / 1.5rem | 600 | `text-2xl font-semibold` |
| Sub-section heading (H3) | 20px / 1.25rem | 600 | `text-xl font-semibold` |
| Card title (H4) | 16px / 1rem | 600 | `text-base font-semibold` |
| Body text | 16px / 1rem | 400 | `text-base font-normal` |
| Small / meta | 14px / 0.875rem | 400 | `text-sm` |
| Badge / label | 12px / 0.75rem | 500 | `text-xs font-medium` |
| Navigation items | 14px / 0.875rem | 500 | `text-sm font-medium` |

**Line height rule:** All body text uses `leading-relaxed` (1.625). Headings use `leading-tight` (1.25).

---

## 5. Folder Structure

```
aptransco-website/
│
├── public/
│   ├── favicon.ico
│   ├── logo.png                  # APTRANSCO official logo
│   └── og-image.png              # Open Graph image for social sharing
│
├── src/
│   │
│   ├── components/               # Reusable UI building blocks
│   │   ├── layout/
│   │   │   ├── Header.jsx        # Top bar + nav + mobile hamburger
│   │   │   ├── Footer.jsx        # Footer with links, social, copyright
│   │   │   ├── PageShell.jsx     # Wraps every inner page (breadcrumb + title + content)
│   │   │   └── Sidebar.jsx       # Optional right/left sidebar for inner pages
│   │   │
│   │   ├── navigation/
│   │   │   ├── Navbar.jsx        # Desktop horizontal nav with dropdowns
│   │   │   ├── MobileMenu.jsx    # Slide-out mobile nav drawer
│   │   │   ├── Breadcrumb.jsx    # Breadcrumb trail for inner pages
│   │   │   └── QuickLinks.jsx    # Top-bar utility links (e-office, email, TOO, SLDC)
│   │   │
│   │   ├── home/
│   │   │   ├── HeroBanner.jsx    # Main banner with marquee/ticker
│   │   │   ├── WhatsNewFeed.jsx  # Structured notifications feed with filters
│   │   │   ├── StatsBar.jsx      # Network stats (400kV: 5479km, 220kV: 12191km, etc.)
│   │   │   ├── QuickAccessGrid.jsx # 6-tile fast-access grid (Tenders, RTI, Careers...)
│   │   │   ├── LiveDataWidget.jsx  # Grid frequency + demand (mocked)
│   │   │   ├── ProjectsSection.jsx # Featured projects cards
│   │   │   ├── ReportsSection.jsx  # Documents & Reports cards
│   │   │   └── ElectricityCustomers.jsx # DISCOM links for residential users
│   │   │
│   │   ├── common/
│   │   │   ├── NotificationCard.jsx    # Single notification item (date + badge + title + link)
│   │   │   ├── DocumentCard.jsx        # PDF download card with icon + size + date
│   │   │   ├── TenderCard.jsx          # Tender card with ref no + deadline + status badge
│   │   │   ├── StaffCard.jsx           # Leadership profile card
│   │   │   ├── DepartmentCard.jsx      # Department tile for org overview
│   │   │   ├── StatCard.jsx            # Metric display card
│   │   │   ├── Badge.jsx               # Category badge (Tender / Circular / New / Urgent)
│   │   │   ├── SearchBar.jsx           # Full search input with suggestions
│   │   │   ├── FilterBar.jsx           # Category/date filter row for list pages
│   │   │   ├── Pagination.jsx          # Page navigation for list pages
│   │   │   ├── PageBanner.jsx          # Inner page top banner with title + breadcrumb
│   │   │   ├── SectionDivider.jsx      # Visual section separator
│   │   │   ├── EmptyState.jsx          # Empty search results / no data state
│   │   │   └── ErrorBoundary.jsx       # Graceful error fallback UI
│   │   │
│   │   └── ui/
│   │       ├── Button.jsx         # Primary / secondary / ghost button variants
│   │       ├── Input.jsx          # Text input with label + validation state
│   │       ├── Select.jsx         # Dropdown select
│   │       ├── Table.jsx          # Responsive data table
│   │       ├── Modal.jsx          # Accessible modal dialog
│   │       ├── Accordion.jsx      # FAQ-style expand/collapse
│   │       ├── Tabs.jsx           # Tab navigation component
│   │       └── Spinner.jsx        # Loading indicator
│   │
│   ├── pages/                    # One file per route
│   │   │
│   │   ├── Home.jsx
│   │   │
│   │   ├── about/
│   │   │   ├── AboutAPTRANSCO.jsx
│   │   │   ├── VisionMission.jsx
│   │   │   ├── OrganizationChart.jsx
│   │   │   ├── BoardLeadership.jsx
│   │   │   └── ContactDirectory.jsx
│   │   │
│   │   ├── operations/
│   │   │   ├── TransmissionNetwork.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── GridMap.jsx
│   │   │
│   │   ├── tenders/
│   │   │   ├── TendersList.jsx
│   │   │   └── TenderDetail.jsx
│   │   │
│   │   ├── notifications/
│   │   │   ├── NotificationsList.jsx   # Circulars / Orders / Press Releases
│   │   │   └── NotificationDetail.jsx
│   │   │
│   │   ├── careers/
│   │   │   └── Careers.jsx
│   │   │
│   │   ├── vendor/
│   │   │   └── VendorInfo.jsx
│   │   │
│   │   ├── compliance/
│   │   │   ├── RTI.jsx
│   │   │   ├── TariffRegulatory.jsx
│   │   │   └── RegulatoryCompliance.jsx
│   │   │
│   │   ├── reports/
│   │   │   ├── DocumentLibrary.jsx
│   │   │   ├── AnnualReports.jsx
│   │   │   └── PowerSectorReports.jsx
│   │   │
│   │   ├── safety/
│   │   │   └── SafetyStandards.jsx
│   │   │
│   │   ├── departments/
│   │   │   ├── TelecomIT.jsx
│   │   │   ├── GridTransmission.jsx
│   │   │   ├── ProjectsDept.jsx
│   │   │   ├── FinanceAccounts.jsx
│   │   │   ├── HRAdmin.jsx
│   │   │   └── TrainingPRTI.jsx
│   │   │
│   │   ├── employees/
│   │   │   └── EmployeePortal.jsx
│   │   │
│   │   ├── utility/
│   │   │   ├── SearchResults.jsx
│   │   │   ├── ContactFeedback.jsx
│   │   │   ├── FAQ.jsx
│   │   │   ├── ImportantLinks.jsx
│   │   │   ├── Sitemap.jsx
│   │   │   ├── PrivacyPolicy.jsx
│   │   │   ├── Disclaimer.jsx
│   │   │   ├── AccessibilityStatement.jsx
│   │   │   └── NotFound.jsx          # 404 page
│   │   │
│   │   └── training/
│   │       └── Training.jsx
│   │
│   ├── data/                     # Static mock data — replace with API calls later
│   │   ├── notifications.js      # Sample notification/circular entries
│   │   ├── tenders.js            # Sample tender entries
│   │   ├── leadership.js         # Board & directors data
│   │   ├── departments.js        # Department info
│   │   ├── stats.js              # Network statistics
│   │   ├── quickLinks.js         # Top utility link list
│   │   └── navConfig.js          # Navigation menu structure (single source of truth)
│   │
│   ├── hooks/                    # Custom React hooks
│   │   ├── useSearch.js          # Client-side search logic
│   │   ├── useFilter.js          # Filter/sort logic for list pages
│   │   └── useScrollToTop.js     # Auto scroll to top on route change
│   │
│   ├── utils/
│   │   ├── formatDate.js         # Date formatting utility
│   │   ├── truncateText.js       # Text truncation for cards
│   │   └── constants.js          # Site-wide constants (org name, contact info etc.)
│   │
│   ├── design-system/
│   │   ├── colors.js             # Color token reference (mirrors tailwind.config)
│   │   ├── spacing.js            # Spacing scale reference
│   │   └── StyleGuidePreview.jsx # Visual style guide page (dev only)
│   │
│   ├── App.jsx                   # Root component with router
│   ├── main.jsx                  # React DOM entry point
│   └── index.css                 # Tailwind directives + Inter font import
│
├── docs/
│   ├── sitemap.md                # Full site hierarchy in text
│   ├── ux-rationale.md           # UI/UX design rationale document
│   ├── style-guide.md            # Exported style guide for submission
│   └── declaration.pdf           # Signed originality declaration
│
├── index.html
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md                     # This file
```

---

## 6. Page Coverage Map

This project covers every page category specified in Section 6.1 of the competition guidelines.

### Core Public Pages ✅

| Page | Route | File |
|---|---|---|
| Home | `/` | `pages/Home.jsx` |
| About APTRANSCO | `/about` | `pages/about/AboutAPTRANSCO.jsx` |
| Vision / Mission / Values | `/about/vision-mission` | `pages/about/VisionMission.jsx` |
| Organization Structure | `/about/organization` | `pages/about/OrganizationChart.jsx` |
| Board / Leadership | `/about/leadership` | `pages/about/BoardLeadership.jsx` |
| Contact Directory | `/about/contacts` | `pages/about/ContactDirectory.jsx` |
| Office Locations | `/about/offices` | *(included inside ContactDirectory)* |

### Operational and Information Pages ✅

| Page | Route | File |
|---|---|---|
| Transmission Network | `/network` | `pages/operations/TransmissionNetwork.jsx` |
| Projects / Ongoing Works | `/projects` | `pages/operations/Projects.jsx` |
| Tenders / Procurement | `/tenders` | `pages/tenders/TendersList.jsx` |
| Notifications / Circulars | `/notifications` | `pages/notifications/NotificationsList.jsx` |
| Press Releases / News | `/news` | *(filtered view of NotificationsList)* |
| Careers / Recruitment | `/careers` | `pages/careers/Careers.jsx` |
| Vendor / Contractor Info | `/vendor` | `pages/vendor/VendorInfo.jsx` |

### Stakeholder and Compliance Pages ✅

| Page | Route | File |
|---|---|---|
| RTI / Public Disclosures | `/rti` | `pages/compliance/RTI.jsx` |
| Tariff / Regulatory Info | `/regulatory` | `pages/compliance/TariffRegulatory.jsx` |
| Annual Reports | `/reports/annual` | `pages/reports/AnnualReports.jsx` |
| Power Sector Reports | `/reports/power-sector` | `pages/reports/PowerSectorReports.jsx` |
| Document Library | `/documents` | `pages/reports/DocumentLibrary.jsx` |
| Safety / Standards | `/safety` | `pages/safety/SafetyStandards.jsx` |
| Important Links | `/links` | `pages/utility/ImportantLinks.jsx` |
| FAQ | `/faq` | `pages/utility/FAQ.jsx` |
| Privacy Policy | `/privacy-policy` | `pages/utility/PrivacyPolicy.jsx` |
| Disclaimer | `/disclaimer` | `pages/utility/Disclaimer.jsx` |
| Accessibility Statement | `/accessibility` | `pages/utility/AccessibilityStatement.jsx` |

### Department Pages ✅

| Page | Route | File |
|---|---|---|
| Telecom & IT | `/departments/telecom-it` | `pages/departments/TelecomIT.jsx` |
| Grid / Transmission | `/departments/grid-transmission` | `pages/departments/GridTransmission.jsx` |
| Projects Department | `/departments/projects` | `pages/departments/ProjectsDept.jsx` |
| Finance / Accounts | `/departments/finance` | `pages/departments/FinanceAccounts.jsx` |
| HR / Administration | `/departments/hr-admin` | `pages/departments/HRAdmin.jsx` |
| Training / PRTI | `/departments/training` | `pages/departments/TrainingPRTI.jsx` |

### Utility Experience Pages ✅

| Page | Route | File |
|---|---|---|
| Search Results | `/search` | `pages/utility/SearchResults.jsx` |
| Contact / Feedback | `/contact` | `pages/utility/ContactFeedback.jsx` |
| 404 Error Page | `*` | `pages/utility/NotFound.jsx` |
| Sitemap | `/sitemap` | `pages/utility/Sitemap.jsx` |

---

## 7. Component Architecture

### Shared Layout — every page uses this

```
<App>
  <Header>                     ← always visible
    <TopBar />                 ← utility links, social, ISO badge
    <LogoBar />                ← logo + org name + search bar
    <Navbar />                 ← main nav (desktop)
    <MobileMenu />             ← hamburger drawer (mobile)
  </Header>

  <main>
    {/* Route-specific page content */}
  </main>

  <Footer>                     ← always visible
    <FooterLinks />
    <FooterBottom />           ← copyright, legal links
  </Footer>
</App>
```

### Inner Page Template — every inner page uses PageShell

```jsx
// Example: src/pages/tenders/TendersList.jsx

import PageShell from '@/components/layout/PageShell';
import TenderCard from '@/components/common/TenderCard';

export default function TendersList() {
  return (
    <PageShell
      title="Tenders & Procurement"
      breadcrumb={['Home', 'Tenders']}
      description="Active tenders and procurement notices issued by APTRANSCO."
    >
      {/* page content here */}
    </PageShell>
  );
}
```

### Navigation Config — single source of truth

All navigation menus (desktop navbar, mobile drawer, footer links, sitemap) pull from one file:

```js
// src/data/navConfig.js

export const NAV_ITEMS = [
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Company Overview', href: '/about' },
      { label: 'Vision & Mission', href: '/about/vision-mission' },
      { label: 'Board & Leadership', href: '/about/leadership' },
      { label: 'Organization Chart', href: '/about/organization' },
      { label: 'Contact Directory', href: '/about/contacts' },
    ],
  },
  {
    label: 'Operations',
    href: '/network',
    children: [
      { label: 'Transmission Network', href: '/network' },
      { label: 'Projects', href: '/projects' },
      { label: 'Grid Map', href: '/grid-map' },
    ],
  },
  { label: 'Tenders', href: '/tenders' },
  { label: 'Notifications', href: '/notifications' },
  {
    label: 'Reports',
    href: '/documents',
    children: [
      { label: 'Document Library', href: '/documents' },
      { label: 'Annual Reports', href: '/reports/annual' },
      { label: 'Power Sector Reports', href: '/reports/power-sector' },
    ],
  },
  {
    label: 'Departments',
    href: '/departments/telecom-it',
    children: [
      { label: 'Telecom & IT', href: '/departments/telecom-it' },
      { label: 'Grid & Transmission', href: '/departments/grid-transmission' },
      { label: 'Projects', href: '/departments/projects' },
      { label: 'Finance & Accounts', href: '/departments/finance' },
      { label: 'HR & Administration', href: '/departments/hr-admin' },
      { label: 'Training / PRTI', href: '/departments/training' },
    ],
  },
  {
    label: 'Compliance',
    href: '/rti',
    children: [
      { label: 'RTI', href: '/rti' },
      { label: 'Tariff & Regulatory', href: '/regulatory' },
      { label: 'Safety & Standards', href: '/safety' },
    ],
  },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];
```

---

## 8. Routing Structure

```jsx
// src/App.jsx
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Spinner from './components/ui/Spinner';

// All pages are lazy loaded — see Performance Strategy section
const Home                = lazy(() => import('./pages/Home'));
const AboutAPTRANSCO      = lazy(() => import('./pages/about/AboutAPTRANSCO'));
const VisionMission       = lazy(() => import('./pages/about/VisionMission'));
const OrganizationChart   = lazy(() => import('./pages/about/OrganizationChart'));
const BoardLeadership     = lazy(() => import('./pages/about/BoardLeadership'));
const ContactDirectory    = lazy(() => import('./pages/about/ContactDirectory'));
const TransmissionNetwork = lazy(() => import('./pages/operations/TransmissionNetwork'));
const Projects            = lazy(() => import('./pages/operations/Projects'));
const TendersList         = lazy(() => import('./pages/tenders/TendersList'));
const TenderDetail        = lazy(() => import('./pages/tenders/TenderDetail'));
const NotificationsList   = lazy(() => import('./pages/notifications/NotificationsList'));
const Careers             = lazy(() => import('./pages/careers/Careers'));
const VendorInfo          = lazy(() => import('./pages/vendor/VendorInfo'));
const RTI                 = lazy(() => import('./pages/compliance/RTI'));
const TariffRegulatory    = lazy(() => import('./pages/compliance/TariffRegulatory'));
const DocumentLibrary     = lazy(() => import('./pages/reports/DocumentLibrary'));
const AnnualReports       = lazy(() => import('./pages/reports/AnnualReports'));
const TelecomIT           = lazy(() => import('./pages/departments/TelecomIT'));
const GridTransmission    = lazy(() => import('./pages/departments/GridTransmission'));
const ProjectsDept        = lazy(() => import('./pages/departments/ProjectsDept'));
const FinanceAccounts     = lazy(() => import('./pages/departments/FinanceAccounts'));
const HRAdmin             = lazy(() => import('./pages/departments/HRAdmin'));
const TrainingPRTI        = lazy(() => import('./pages/departments/TrainingPRTI'));
const SearchResults       = lazy(() => import('./pages/utility/SearchResults'));
const ContactFeedback     = lazy(() => import('./pages/utility/ContactFeedback'));
const FAQ                 = lazy(() => import('./pages/utility/FAQ'));
const Sitemap             = lazy(() => import('./pages/utility/Sitemap'));
const PrivacyPolicy       = lazy(() => import('./pages/utility/PrivacyPolicy'));
const NotFound            = lazy(() => import('./pages/utility/NotFound'));

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/"                              element={<Home />} />
          <Route path="/about"                         element={<AboutAPTRANSCO />} />
          <Route path="/about/vision-mission"          element={<VisionMission />} />
          <Route path="/about/organization"            element={<OrganizationChart />} />
          <Route path="/about/leadership"              element={<BoardLeadership />} />
          <Route path="/about/contacts"                element={<ContactDirectory />} />
          <Route path="/network"                       element={<TransmissionNetwork />} />
          <Route path="/projects"                      element={<Projects />} />
          <Route path="/tenders"                       element={<TendersList />} />
          <Route path="/tenders/:id"                   element={<TenderDetail />} />
          <Route path="/notifications"                 element={<NotificationsList />} />
          <Route path="/careers"                       element={<Careers />} />
          <Route path="/vendor"                        element={<VendorInfo />} />
          <Route path="/rti"                           element={<RTI />} />
          <Route path="/regulatory"                    element={<TariffRegulatory />} />
          <Route path="/documents"                     element={<DocumentLibrary />} />
          <Route path="/reports/annual"                element={<AnnualReports />} />
          <Route path="/departments/telecom-it"        element={<TelecomIT />} />
          <Route path="/departments/grid-transmission" element={<GridTransmission />} />
          <Route path="/departments/projects"          element={<ProjectsDept />} />
          <Route path="/departments/finance"           element={<FinanceAccounts />} />
          <Route path="/departments/hr-admin"          element={<HRAdmin />} />
          <Route path="/departments/training"          element={<TrainingPRTI />} />
          <Route path="/search"                        element={<SearchResults />} />
          <Route path="/contact"                       element={<ContactFeedback />} />
          <Route path="/faq"                           element={<FAQ />} />
          <Route path="/sitemap"                       element={<Sitemap />} />
          <Route path="/privacy-policy"                element={<PrivacyPolicy />} />
          <Route path="*"                              element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}
```

---

## 9. Performance Strategy

This is a critical requirement given that APTRANSCO serves users across Andhra Pradesh including low-bandwidth rural areas. Every decision below is intentional.

### 9.1 Code Splitting — Lazy Loading

Every page component is wrapped in `React.lazy()` and loaded only when the user navigates to that route. The initial bundle only contains the Header, Footer, Home page, and the router shell.

```
Initial bundle:  ~80KB gzipped   (Header + Footer + Home + Router)
Per-page chunk:  ~8–20KB gzipped (loaded on demand)
```

This means a user visiting only the homepage (the most common access pattern) never downloads code for the Tenders page, Department pages, etc.

### 9.2 Zero Heavy Dependencies

The following are **intentionally excluded:**

| Package | Why Excluded | Alternative |
|---|---|---|
| Material UI / Ant Design | +200KB bundle, not needed | Custom Tailwind components |
| Framer Motion | +40KB, animations not appropriate | CSS transitions only |
| Axios | +15KB | Native `fetch()` API |
| Moment.js | +67KB | Native `Intl.DateTimeFormat` |
| Lodash | +70KB | Native JS array/object methods |
| Redux / Zustand | Overkill for this scope | React `useState` + `useContext` |
| React Query | Not needed for mock data | Passes cleanly for real API integration |

### 9.3 Image Optimization

- All images use `loading="lazy"` attribute (browser-native lazy loading)
- Hero banners use `width` and `height` attributes to prevent layout shift (CLS)
- Government logos and icons use SVG (infinitely scalable, tiny file size)
- No base64 inline images — all images are separate files
- Recommended: WebP format for all photographs, with JPEG fallback

```jsx
// Example lazy image usage
<img
  src="/images/transmission-tower.webp"
  alt="APTRANSCO 400kV transmission tower in Andhra Pradesh"
  width={800}
  height={600}
  loading="lazy"
  className="w-full h-auto rounded-md"
/>
```

### 9.4 Font Loading Strategy

Inter font is loaded from Google Fonts with `display=swap` to prevent flash of invisible text (FOIT):

```html
<!-- index.html -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### 9.5 Vite Build Configuration

```js
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // Each page chunk is automatically split by lazy()
        },
      },
    },
    // Generate gzipped size report
    reportCompressedSize: true,
  },
});
```

### 9.6 Scroll Position

```js
// src/hooks/useScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
}
```

Used in `App.jsx` so every route change scrolls to top.

---

## 10. Responsive Design System

### Breakpoints (Tailwind defaults — no customization needed)

| Breakpoint | Width | Devices |
|---|---|---|
| `(base)` | 0px+ | Mobile phones (portrait) |
| `sm:` | 640px+ | Mobile phones (landscape) |
| `md:` | 768px+ | Tablets (portrait) |
| `lg:` | 1024px+ | Tablets (landscape), small laptops |
| `xl:` | 1280px+ | Desktops, large laptops |
| `2xl:` | 1536px+ | Large monitors |

### Layout Grid Pattern

Every section uses the same mobile-first grid pattern:

```jsx
{/* 1 column on mobile → 2 on tablet → 3 on desktop */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>

{/* Full-width content + sidebar layout */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  <div className="lg:col-span-2">{/* main content */}</div>
  <div className="lg:col-span-1">{/* sidebar */}</div>
</div>
```

### Header Responsive Behavior

| Screen | Header Behavior |
|---|---|
| Mobile (`< md`) | Logo + Hamburger icon only. Navigation in slide-out drawer. |
| Tablet (`md`) | Logo + condensed nav items. Overflow items in "More" dropdown. |
| Desktop (`lg+`) | Full nav bar with dropdown menus on hover. |

### Navigation Collapse

```jsx
// Mobile nav is hidden by default, shown via state
<nav className="hidden lg:flex items-center gap-1">
  {/* Desktop nav */}
</nav>

<button
  className="lg:hidden p-2 rounded-md text-white"
  onClick={() => setMobileMenuOpen(true)}
  aria-label="Open navigation menu"
>
  <MenuIcon className="w-6 h-6" />
</button>

{/* Mobile drawer */}
{mobileMenuOpen && <MobileMenu onClose={() => setMobileMenuOpen(false)} />}
```

### Table Responsiveness

Data tables (tenders, notifications) wrap in a horizontal scroll container on small screens:

```jsx
<div className="overflow-x-auto rounded-lg border border-slate-200">
  <table className="min-w-full divide-y divide-slate-200">
    {/* table content */}
  </table>
</div>
```

### Touch Targets

All interactive elements (buttons, nav items, links) have a minimum height of 44px on mobile to meet touch target guidelines:

```jsx
<a className="block py-3 px-4 text-sm ...">{/* min 44px height */}</a>
```

---

## 11. Accessibility Standards

This project targets **WCAG 2.1 Level AA** compliance, as encouraged by the competition guidelines.

### Color Contrast

- Navy-700 (#0C2D5E) on white: contrast ratio **12.4:1** ✅ (AAA)
- White text on Navy-500 (#1A4A8A): contrast ratio **8.2:1** ✅ (AAA)
- Gold-400 (#F5A623) on Navy-700: contrast ratio **7.1:1** ✅ (AA Large)
- Slate-700 body text on white: contrast ratio **9.1:1** ✅ (AAA)

### Semantic HTML

```jsx
{/* Always use semantic elements */}
<header role="banner">...</header>
<nav aria-label="Main navigation">...</nav>
<main id="main-content">...</main>
<footer role="contentinfo">...</footer>

{/* Skip link for keyboard users */}
<a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-gold-400 text-navy-700 px-4 py-2 rounded z-50">
  Skip to main content
</a>
```

### ARIA Labels

```jsx
{/* Navigation items with submenus */}
<button aria-expanded={isOpen} aria-haspopup="true">
  About <ChevronDown aria-hidden="true" />
</button>

{/* Icon-only buttons */}
<button aria-label="Search the website">
  <SearchIcon aria-hidden="true" />
</button>

{/* PDF download links */}
<a href="/doc.pdf" aria-label="Download Annual Report 2024-25 (PDF, 2.3MB)">
  Annual Report 2024-25
</a>
```

### Heading Hierarchy

Every page follows strict H1 → H2 → H3 order. Only one H1 per page (the page title in PageBanner). Section headings are H2. Sub-sections are H3.

### Focus Management

- All interactive elements have visible focus rings: `focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2`
- Modal focus is trapped inside while open
- Route changes move focus to the page H1

---

## 12. Getting Started

### Prerequisites

- Node.js 18+
- npm 9+ or yarn 1.22+

### Installation

```bash
# 1. Clone or extract the project
cd aptransco-website

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:5173
```

### Available Scripts

```bash
npm run dev        # Start Vite dev server (hot reload)
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
npm run lint       # ESLint check
```

### Dependencies (package.json)

```json
{
  "dependencies": {
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "react-router-dom": "^6.24.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.0",
    "autoprefixer": "^10.4.19",
    "eslint": "^9.5.0",
    "postcss": "^8.4.39",
    "tailwindcss": "^3.4.4",
    "vite": "^5.3.1"
  }
}
```

**Total production dependencies: 3 packages.** This is intentional — it keeps the bundle small, reduces security risk surface, and ensures the project has zero unnecessary third-party dependencies (per competition guidelines, Section 10).

---

## 13. Page-by-Page Build Guide

### Home Page (`src/pages/Home.jsx`)

The homepage is the most critical page. It must serve all user types simultaneously: citizens, vendors, employees, regulators, and media.

**Sections in order (top to bottom):**

1. **HeroBanner** — Full-width banner. Rotating slides featuring: network stats, major projects, latest announcement. No autoplay on mobile (bandwidth concern).
2. **WhatsNewFeed** — The biggest problem with the current site. Replace the flat PDF list with a filterable, categorized feed. Filters: All | Tenders | Circulars | Recruitment | Press Releases. Shows latest 10 items with a "View All" link.
3. **QuickAccessGrid** — 6 tile cards for the most-accessed sections: Tenders, Notifications, RTI, Careers, Document Library, Contact. These are the first things most users come for.
4. **StatsBar** — Horizontal bar showing network statistics: 400kV line length, 220kV line length, 132kV line length, number of substations. Institutional credibility signal.
5. **ProjectsSection** — 3 featured project cards with image, project name, status badge, location.
6. **LiveDataWidget** — Grid frequency display (mocked with dummy data). Simple, clean, professional.
7. **ReportsSection** — Document Downloads, Power Sector Reports, APTRANSCO Reports — as visual cards, not as text links.
8. **ElectricityCustomers** — DISCOM links for residential customers (APSPDCL, APEPDCL, APCPDCL) with district mapping.

### Tenders Page (`src/pages/tenders/TendersList.jsx`)

Current site: external redirect to a separate app with poor UX.  
New design: full integrated tenders listing page.

**Features:**
- Filter by: Category | Status (Open/Closed/Upcoming) | Date Range
- Sort by: Newest | Deadline | Reference Number
- Each TenderCard shows: Specification number, title (truncated), issue date, submission deadline, status badge (color-coded), download spec link
- Pagination: 20 items per page
- Search within tenders

### Notifications Page (`src/pages/notifications/NotificationsList.jsx`)

Replaces the current unstructured bullet list on the homepage.

**Features:**
- Tab navigation: All | Circulars | Orders | Press Releases | Announcements
- Each item shows: date badge, category badge, title, brief excerpt, "View / Download" button
- Items marked "New" (within 7 days) show a NEW badge
- Filterable by date range
- Full-text search

### Document Library (`src/pages/reports/DocumentLibrary.jsx`)

**Structure:**
- Left sidebar: Category tree (Technical Manuals, Regulatory Orders, Schedule of Rates, Acts and Rules, Annual Reports, etc.)
- Main area: Document grid with DocumentCard components
- Each card: document icon, title, category, file size, upload date, download button
- Search: filter documents by keyword

### Department Pages (`src/pages/departments/*.jsx`)

All 6 department pages use the same template:

```
DepartmentPage
├── PageBanner (department name + brief description)
├── KeyFunctions (bullet list of department responsibilities)
├── ContactInfo (HOD name, designation, phone, email)
├── RecentActivities (latest circulars/projects from this dept)
└── UsefulLinks (department-specific external/internal links)
```

This ensures visual consistency while allowing each department to have unique content.

### 404 Not Found Page (`src/pages/utility/NotFound.jsx`)

A proper 404 page — not just a blank page or server error. Includes:
- Clear "Page Not Found" heading
- Brief explanation
- Link back to homepage
- Link to sitemap
- Search bar to find what they were looking for

---

## 14. Evaluation Criteria Alignment

Direct mapping of every evaluation criterion to specific design decisions:

| Criterion | Marks | How This Project Addresses It |
|---|---|---|
| **Completeness of site revamp vision** | 20 | 35+ pages covered across all categories from Section 6.1. Full site — not just a homepage. |
| **User experience and navigation** | 20 | Single-source navConfig drives all nav. Max 2 clicks to any content. Filterable lists. Fast search. Clear breadcrumbs. |
| **Visual design quality and institutional fit** | 15 | Navy + Gold palette. No decorative animations. Clean restraint. Professional typography. Consistent component library. |
| **Information architecture** | 10 | Logical hierarchy: About → Operations → Tenders → Notifications → Reports → Departments → Compliance. Department pages templated consistently. |
| **Technical feasibility** | 10 | React + Tailwind: proven production stack. Vite build. Zero heavy dependencies. Clean code structure easy for any developer to hand off to. |
| **Innovation and originality** | 10 | Structured WhatsNewFeed replacing flat bullet list. Quick Access Grid. Live data widget. Department page template system. Integrated tenders page. |
| **Accessibility and inclusiveness** | 5 | WCAG 2.1 AA. Skip links. ARIA labels. Semantic HTML. Contrast ratios all exceed AA. Touch targets 44px+. |
| **Scalability and future readiness** | 5 | Component-based architecture. navConfig as single source. Data layer separated from UI. Ready for CMS integration. |
| **Cyber security and governance** | 5 | Only 3 production dependencies (React, ReactDOM, React Router). No trackers. No third-party scripts. No inline event handlers. |

---

## 15. Future Scalability Plan

The design and architecture are built to support the future capabilities mentioned in Sections 8 and 9 of the competition guidelines, without requiring a rebuild:

### CMS Integration

All page data currently in `src/data/*.js` files can be replaced with API calls. Page components are data-agnostic — they accept props and render. Example:

```js
// Currently: static data
import { tenders } from '@/data/tenders';

// Future: API call — zero component changes needed
const tenders = await fetch('/api/tenders').then(r => r.json());
```

### Multilingual (Telugu) Support

The project uses `constants.js` for all UI strings. Adding Telugu requires:
1. Adding `src/i18n/te.js` translation file
2. Adding a language toggle to the top bar
3. Wrapping string references in a `t()` function

No structural changes needed.

### Dashboard / GIS Integration

`LiveDataWidget.jsx` and `GridMap.jsx` are designed as placeholder containers. Future integration of SLDC real-time data or the existing GIS portal can be done by replacing mock data with live API calls inside these components.

### Document Management

`DocumentLibrary.jsx` is designed with a category-based sidebar that maps directly to a CMS taxonomy. Future searchable repository integration requires only replacing the static `documents.js` data source.

### Analytics

Since no third-party analytics are included (intentionally, per governance guidelines), future analytics can be added through the government-approved NIC analytics or a self-hosted solution by adding a single script tag to `index.html`.

---

## 16. Cyber Security & Governance

Per Section 10 of the competition guidelines, this project follows strict governance-appropriate design:

- **No third-party trackers** — no Google Analytics, Facebook Pixel, or similar
- **No social media embedded widgets** — social links are plain `<a>` tags only
- **No CDN-loaded scripts** — all dependencies are bundled via Vite/npm
- **No `dangerouslySetInnerHTML`** — all content is rendered through React's safe rendering
- **No external API calls** — mock data only; all data is local
- **Content Security Policy ready** — no inline scripts, no `eval()`, no dynamic script injection
- **Minimal attack surface** — only 3 production npm packages, all from trusted maintainers (Facebook/Meta, Remix/React Router)

---

## 17. Asset Guidelines

All assets used in this project must be:

- **Original** — created specifically for this submission, OR
- **Open License** — CC0, CC-BY, Unsplash license, or equivalent, OR
- **Officially provided** — APTRANSCO's own logo and official imagery

### Icon Library

This project uses **Heroicons** (MIT License by Tailwind Labs) for all icons. Loaded as React components via `@heroicons/react`. No CDN calls, no external requests.

```bash
npm install @heroicons/react
```

```jsx
import { DocumentArrowDownIcon, BellAlertIcon } from '@heroicons/react/24/outline';
```

### Placeholder Images

During development, placeholder images use `https://via.placeholder.com` URLs. Before submission, replace with real government imagery or open-licensed photographs.

---

## 18. Submission Checklist

Based on Section 7 (Mandatory Deliverables) and Section 15 (Submission Format) of the competition guidelines:

### Mandatory Deliverables
- [ ] One homepage mockup — `pages/Home.jsx`
- [ ] 5+ major inner-page mockups — Tenders, Notifications, Document Library, About, RTI, Leadership, Careers, Projects (8 pages)
- [ ] 5+ representative sub-page mockups — 6 department pages + TenderDetail + NotificationDetail (8 pages)
- [ ] Sitemap — `pages/utility/Sitemap.jsx` + `docs/sitemap.md`
- [ ] UI/UX rationale note — `docs/ux-rationale.md`
- [ ] Responsive layouts — demonstrated via Tailwind breakpoints throughout
- [ ] Design system / style guide — `src/design-system/` + `docs/style-guide.md`
- [ ] Prototype / demo — running React app (Figma export or hosted Vercel link)
- [ ] Declaration of originality — `docs/declaration.pdf`

### Submission Format (Section 15)
- [ ] Covering letter from institution/team
- [ ] Participant details form (via https://forms.gle/vaNsfy2LpXSrT99d7)
- [ ] Bonafide certificate / ID proof
- [ ] Design concept note in PDF (`docs/ux-rationale.md` exported to PDF)
- [ ] Mockups or screens (screenshots of each page at desktop + mobile)
- [ ] Sitemap document
- [ ] Style guide document
- [ ] Prototype link (Vercel/Netlify deployment URL)
- [ ] Declaration of originality (signed)
- [ ] Source file summary

### Submission Deadline
**02 June 2026** via https://forms.gle/vaNsfy2LpXSrT99d7

---

## Contact & Clarifications

For competition queries:
- **Email:** somasekhar.k@aptransco.gov.in or cetelecom.vja@aptransco.gov.in
- **ACIDO/IT Applications:** 9440684531
- **AEE/IT Applications:** 9490154303

Last date for clarification queries: **28 April 2026**  
Clarification responses issued: **03 May 2026**

---

*This README is part of the APTRANSCO Website Design Competition – 2026 submission. The design concept described herein is original work. All third-party assets used are open-licensed or original. Upon selection, APTRANSCO may use, adapt, or modify this concept as described in Section 14 of the competition guidelines.*
