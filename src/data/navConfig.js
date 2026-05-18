/**
 * src/data/navConfig.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Single source of truth for all navigation menus.
 * Used by: Header/Navbar, MobileMenu, Footer, Sitemap.
 *
 * Shape:
 *   {
 *     id:       string        — unique identifier (for keys, ARIA IDs)
 *     label:    string        — display text
 *     href:     string        — primary link (used when no children, or as section root)
 *     children?: NavItem[]   — dropdown items (desktop) / accordion items (mobile)
 *     external?: boolean     — opens in new tab if true
 *     badge?:   string       — optional badge text e.g. "New"
 *   }
 */

export const NAV_ITEMS = [
  {
    id: 'about',
    label: 'About',
    href: '/about',
    children: [
      { id: 'about-overview',      label: 'Company Overview',    href: '/about' },
      { id: 'about-vision',        label: 'Vision & Mission',    href: '/about/vision-mission' },
      { id: 'about-leadership',    label: 'Board & Leadership',  href: '/about/leadership' },
      { id: 'about-org',           label: 'Organization Chart',  href: '/about/organization' },
      { id: 'about-contacts',      label: 'Contact Directory',   href: '/about/contacts' },
    ],
  },
  {
    id: 'operations',
    label: 'Operations',
    href: '/network',
    children: [
      { id: 'ops-network',  label: 'Transmission Network', href: '/network' },
      { id: 'ops-projects', label: 'Projects',             href: '/projects' },
      { id: 'ops-gridmap',  label: 'Grid Map',             href: '/grid-map' },
    ],
  },
  {
    id: 'tenders',
    label: 'Tenders',
    href: '/tenders',
  },
  {
    id: 'notifications',
    label: 'Notifications',
    href: '/notifications',
  },
  {
    id: 'reports',
    label: 'Reports',
    href: '/documents',
    children: [
      { id: 'reports-docs',    label: 'Document Library',      href: '/documents' },
      { id: 'reports-annual',  label: 'Annual Reports',         href: '/reports/annual' },
      { id: 'reports-sector',  label: 'Power Sector Reports',   href: '/reports/power-sector' },
    ],
  },
  {
    id: 'departments',
    label: 'Departments',
    href: '/departments/telecom-it',
    children: [
      { id: 'dept-telecom',   label: 'Telecom & IT',        href: '/departments/telecom-it' },
      { id: 'dept-grid',      label: 'Grid & Transmission', href: '/departments/grid-transmission' },
      { id: 'dept-projects',  label: 'Projects',            href: '/departments/projects' },
      { id: 'dept-finance',   label: 'Finance & Accounts',  href: '/departments/finance' },
      { id: 'dept-hr',        label: 'HR & Administration', href: '/departments/hr-admin' },
      { id: 'dept-training',  label: 'Training / PRTI',     href: '/departments/training' },
    ],
  },
  {
    id: 'compliance',
    label: 'Compliance',
    href: '/rti',
    children: [
      { id: 'comp-rti',       label: 'RTI / Disclosures',    href: '/rti' },
      { id: 'comp-tariff',    label: 'Tariff & Regulatory',  href: '/regulatory' },
      { id: 'comp-safety',    label: 'Safety & Standards',   href: '/safety' },
    ],
  },
  {
    id: 'careers',
    label: 'Careers',
    href: '/careers',
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '/contact',
  },
];

/**
 * Flat list of all nav items (including children) — useful for search, sitemap.
 */
export const NAV_FLAT = NAV_ITEMS.flatMap((item) => {
  if (!item.children) return [item];
  return [item, ...item.children];
});

/**
 * Helper: return the nav item whose href matches a given pathname.
 * Used for active-link highlighting.
 *
 * @param {string} pathname - current window.location.pathname
 * @returns {NavItem | undefined}
 */
export function getActiveNavItem(pathname) {
  // Exact match first
  const exact = NAV_FLAT.find((i) => i.href === pathname);
  if (exact) return exact;

  // Longest prefix match (for nested routes like /about/leadership)
  return NAV_FLAT
    .filter((i) => pathname.startsWith(i.href) && i.href !== '/')
    .sort((a, b) => b.href.length - a.href.length)[0];
}

/**
 * Helper: return the top-level nav item that owns a given child href.
 * Used to keep the parent nav item highlighted when on a child page.
 *
 * @param {string} pathname
 * @returns {NavItem | undefined}
 */
export function getParentNavItem(pathname) {
  return NAV_ITEMS.find((item) =>
    item.children?.some((child) => pathname.startsWith(child.href))
  );
}
