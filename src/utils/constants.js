/**
 * src/utils/constants.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Site-wide constants: organisation identity, contact info, social links,
 * network statistics, and external quick-links.
 *
 * All values here are the single source of truth. Reference these in
 * components instead of hard-coding strings.
 */

// ── Organisation Identity ─────────────────────────────────────────────────────
export const ORG_FULL_NAME   = 'Andhra Pradesh Transmission Corporation Limited';
export const ORG_SHORT_NAME  = 'APTRANSCO';
export const ORG_TAGLINE     = 'Powering Progress. Connecting Andhra Pradesh.';
export const ORG_DESCRIPTION =
  'APTRANSCO is the State Transmission Utility responsible for planning, ' +
  'constructing, and maintaining the Extra High Voltage (EHV) transmission ' +
  'network across Andhra Pradesh.';

export const ORG_ESTABLISHED = '1999';
export const ORG_JURISDICTION = 'Andhra Pradesh, India';

/** Statutory classification */
export const ORG_TYPE = 'State Transmission Utility (STU)';

/** Regulatory authority */
export const REGULATOR = 'Andhra Pradesh Electricity Regulatory Commission (APERC)';

// ── Branding ──────────────────────────────────────────────────────────────────
export const LOGO_PATH    = '/logo.svg';   // SVG shipped in public/
export const OG_IMAGE_PATH = '/og-image.png';
export const FAVICON_PATH  = '/favicon.svg';

export const SITE_URL = 'https://aptransco.gov.in'; // Production canonical

// ── Contact Information ───────────────────────────────────────────────────────
export const CONTACT = {
  /** Registered Office */
  headOffice: {
    name:    'APTRANSCO Corporate Office',
    address: 'Vidyut Soudha, Hyderabad Road, Vijayawada – 520 013',
    city:    'Vijayawada',
    state:   'Andhra Pradesh',
    pincode: '520013',
    phone:   '+91-866-2577777',
    fax:     '+91-866-2577123',
    email:   'cmd@aptransco.gov.in',
  },
  /** Public grievance */
  grievance: {
    email: 'grievance@aptransco.gov.in',
    phone: '1912',
    label: 'Grievance Helpline',
  },
  /** Competition contacts (from README) */
  competition: {
    primary:   'somasekhar.k@aptransco.gov.in',
    secondary: 'cetelecom.vja@aptransco.gov.in',
    acido:     '9440684531',
    aee:       '9490154303',
  },
  /** RTI officer */
  rti: {
    label: 'Central Public Information Officer (CPIO)',
    email: 'rti@aptransco.gov.in',
  },
};

// ── Social Media Links ────────────────────────────────────────────────────────
/** Plain <a> tags only — no embedded widgets per governance guidelines */
export const SOCIAL_LINKS = [
  {
    id:       'twitter',
    label:    'APTRANSCO on Twitter / X',
    href:     'https://twitter.com/APTRANSCO',
    external: true,
  },
  {
    id:       'facebook',
    label:    'APTRANSCO on Facebook',
    href:     'https://www.facebook.com/APTRANSCO',
    external: true,
  },
  {
    id:       'youtube',
    label:    'APTRANSCO on YouTube',
    href:     'https://www.youtube.com/@APTRANSCO',
    external: true,
  },
  {
    id:       'linkedin',
    label:    'APTRANSCO on LinkedIn',
    href:     'https://www.linkedin.com/company/aptransco',
    external: true,
  },
];

// ── Network Statistics (homepage StatsBar) ────────────────────────────────────
export const NETWORK_STATS = [
  { id: 'line-400kv', label: '400 kV Line',       value: '5,479',  unit: 'km' },
  { id: 'line-220kv', label: '220 kV Line',       value: '12,191', unit: 'km' },
  { id: 'line-132kv', label: '132 kV Line',       value: '15,340', unit: 'km' },
  { id: 'substations', label: 'EHV Substations',  value: '1,038',  unit: '' },
  { id: 'capacity',   label: 'Transformation Capacity', value: '1,08,000', unit: 'MVA' },
  { id: 'districts',  label: 'Districts Served',  value: '26',     unit: '' },
];

// ── Quick Access Tiles (homepage QuickAccessGrid) ─────────────────────────────
export const QUICK_ACCESS_TILES = [
  {
    id:       'tenders',
    label:    'Tenders',
    href:     '/tenders',
    icon:     'DocumentTextIcon',
    desc:     'Active procurement notices',
  },
  {
    id:       'notifications',
    label:    'Notifications & News',
    href:     '/notifications',
    icon:     'BellAlertIcon',
    desc:     'Circulars, orders & press releases',
  },
  {
    id:       'vendor',
    label:    'Vendor Information',
    href:     '/vendor',
    icon:     'BuildingStorefrontIcon',
    desc:     'Contractor registration & empanelment',
  },
  {
    id:       'rti',
    label:    'RTI / Disclosures',
    href:     '/rti',
    icon:     'EyeIcon',
    desc:     'Public information under RTI Act',
  },
  {
    id:       'careers',
    label:    'Careers',
    href:     '/careers',
    icon:     'BriefcaseIcon',
    desc:     'Recruitment & job notifications',
  },
  {
    id:       'documents',
    label:    'Document Library',
    href:     '/documents',
    icon:     'FolderOpenIcon',
    desc:     'Reports, manuals & regulatory orders',
  },
  {
    id:       'contact',
    label:    'Contact Us',
    href:     '/contact',
    icon:     'PhoneIcon',
    desc:     'Office directory & feedback',
  },
];

// ── Top Utility Bar Quick Links ───────────────────────────────────────────────
export const TOP_BAR_LINKS = [
  { id: 'eoffice',   label: 'e-Office',    href: 'https://eoffice.gov.in',     external: true },
  { id: 'email',     label: 'Webmail',     href: 'https://mail.aptransco.gov.in', external: true },
  { id: 'sldc',      label: 'SLDC',        href: 'https://sldc.ap.gov.in',     external: true },
  { id: 'employee',  label: 'Employee Portal', href: '/employees',              external: false },
  { id: 'sitemap',   label: 'Sitemap',     href: '/sitemap',                   external: false },
];

// ── Accessibility & Governance ────────────────────────────────────────────────
export const ACCESSIBILITY = {
  conformanceLevel: 'WCAG 2.1 Level AA',
  lastAuditDate:    '2026-05-01',
  contactEmail:     'webmaster@aptransco.gov.in',
};

// ── Footer Column Links ───────────────────────────────────────────────────────
export const FOOTER_LINKS = {
  organisation: [
    { label: 'About APTRANSCO',    href: '/about' },
    { label: 'Vision & Mission',   href: '/about/vision-mission' },
    { label: 'Board & Leadership', href: '/about/leadership' },
    { label: 'Organization Chart', href: '/about/organization' },
    { label: 'Contact Directory',  href: '/about/contacts' },
  ],
  information: [
    { label: 'Tenders',             href: '/tenders' },
    { label: 'Notifications & News', href: '/notifications' },
    { label: 'Careers',             href: '/careers' },
    { label: 'Vendor Information',  href: '/vendor' },
    { label: 'Annual Reports',      href: '/reports/annual' },
    { label: 'Document Library',    href: '/documents' },
  ],
  compliance: [
    { label: 'RTI / Disclosures',   href: '/rti' },
    { label: 'Tariff & Regulatory', href: '/regulatory' },
    { label: 'Safety & Standards',  href: '/safety' },
    { label: 'Privacy Policy',      href: '/privacy-policy' },
    { label: 'Disclaimer',          href: '/disclaimer' },
  ],
  utility: [
    { label: 'Search',                href: '/search' },
    { label: 'FAQ',                   href: '/faq' },
    { label: 'Important Links',       href: '/links' },
    { label: 'Sitemap',               href: '/sitemap' },
    { label: 'Accessibility',         href: '/accessibility' },
  ],
};

// ── Meta / SEO defaults ───────────────────────────────────────────────────────
export const DEFAULT_META = {
  titleSuffix: `| ${ORG_SHORT_NAME}`,
  description:
    'Official website of Andhra Pradesh Transmission Corporation (APTRANSCO) — ' +
    'State Transmission Utility responsible for EHV transmission network across Andhra Pradesh.',
  keywords:
    'APTRANSCO, Andhra Pradesh Transmission Corporation, EHV network, tenders, ' +
    'power transmission, AP electricity, SLDC, RTI',
};

// ── Competition Metadata ──────────────────────────────────────────────────────
export const COMPETITION = {
  name:     'APTRANSCO Website Design Competition – 2026',
  prize:    '₹50,000 First Prize',
  deadline: '2026-06-02',
  form:     'https://forms.gle/vaNsfy2LpXSrT99d7',
};
