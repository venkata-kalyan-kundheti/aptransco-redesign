/**
 * src/data/quickLinks.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Top utility-bar quick links — external and internal resources
 * that are frequently accessed by APTRANSCO employees and the public.
 */

export const QUICK_LINKS = [
  // ── Employee / Internal Portals ────────────────────────────────────────────
  {
    id: 'ql-eoffice',
    category: 'employee',
    label: 'e-Office',
    href: 'https://eoffice.gov.in',
    external: true,
    icon: 'ComputerDesktopIcon',
    description: 'File tracking and digital office management',
  },
  {
    id: 'ql-webmail',
    category: 'employee',
    label: 'Webmail',
    href: 'https://mail.aptransco.gov.in',
    external: true,
    icon: 'EnvelopeIcon',
    description: 'APTRANSCO employee email (NIC hosted)',
  },
  {
    id: 'ql-employee',
    category: 'employee',
    label: 'Employee Portal',
    href: '/employees',
    external: false,
    icon: 'UserIcon',
    description: 'HR self-service portal',
  },
  {
    id: 'ql-payslip',
    category: 'employee',
    label: 'Pay Slip',
    href: '#',
    external: true,
    icon: 'DocumentTextIcon',
    description: 'Monthly salary slip download',
  },

  // ── Grid / Technical ────────────────────────────────────────────────────────
  {
    id: 'ql-sldc',
    category: 'technical',
    label: 'SLDC',
    href: 'https://sldc.ap.gov.in',
    external: true,
    icon: 'BoltIcon',
    description: 'State Load Despatch Centre — real-time grid data',
  },
  {
    id: 'ql-scada',
    category: 'technical',
    label: 'SCADA Portal',
    href: '#',
    external: true,
    icon: 'CpuChipIcon',
    description: 'Supervisory Control and Data Acquisition system',
  },
  {
    id: 'ql-gridmap',
    category: 'technical',
    label: 'Grid Map',
    href: '/grid-map',
    external: false,
    icon: 'MapIcon',
    description: 'AP transmission network map',
  },

  // ── Regulatory / Government ─────────────────────────────────────────────────
  {
    id: 'ql-aperc',
    category: 'regulatory',
    label: 'APERC',
    href: 'https://aperc.gov.in',
    external: true,
    icon: 'ScaleIcon',
    description: 'AP Electricity Regulatory Commission',
  },
  {
    id: 'ql-gem',
    category: 'regulatory',
    label: 'GeM Portal',
    href: 'https://gem.gov.in',
    external: true,
    icon: 'ShoppingBagIcon',
    description: 'Government e-Marketplace for procurement',
  },
  {
    id: 'ql-cpe',
    category: 'regulatory',
    label: 'Energy Dept. AP',
    href: 'https://energy.ap.gov.in',
    external: true,
    icon: 'BuildingLibraryIcon',
    description: 'AP Energy, Infrastructure & Investment Dept.',
  },
  {
    id: 'ql-cerc',
    category: 'regulatory',
    label: 'CERC',
    href: 'https://www.cercind.gov.in',
    external: true,
    icon: 'ScaleIcon',
    description: 'Central Electricity Regulatory Commission',
  },

  // ── Public Services ─────────────────────────────────────────────────────────
  {
    id: 'ql-tenders',
    category: 'public',
    label: 'Tenders',
    href: '/tenders',
    external: false,
    icon: 'DocumentTextIcon',
    description: 'Active procurement notices and NITs',
  },
  {
    id: 'ql-rti',
    category: 'public',
    label: 'RTI / Disclosures',
    href: '/rti',
    external: false,
    icon: 'EyeIcon',
    description: 'Right to Information & mandatory disclosures',
  },
  {
    id: 'ql-careers',
    category: 'public',
    label: 'Careers',
    href: '/careers',
    external: false,
    icon: 'BriefcaseIcon',
    description: 'Recruitment and job notifications',
  },
  {
    id: 'ql-feedback',
    category: 'public',
    label: 'Grievance',
    href: '/contact',
    external: false,
    icon: 'ChatBubbleLeftRightIcon',
    description: 'Submit complaints and feedback — Helpline 1912',
  },
  {
    id: 'ql-sitemap',
    category: 'public',
    label: 'Sitemap',
    href: '/sitemap',
    external: false,
    icon: 'MapIcon',
    description: 'Complete site navigation map',
  },
];

// ── Helpers ────────────────────────────────────────────────────────────────────
export function getQuickLinksByCategory(category) {
  if (!category || category === 'all') return QUICK_LINKS;
  return QUICK_LINKS.filter((l) => l.category === category);
}

export const QUICK_LINK_CATEGORIES = [
  { value: 'all',        label: 'All Links' },
  { value: 'employee',   label: 'Employee Portals' },
  { value: 'technical',  label: 'Grid & Technical' },
  { value: 'regulatory', label: 'Regulatory & Govt' },
  { value: 'public',     label: 'Public Services' },
];

// ── Top-bar subset (shown in utility bar, max 6) ───────────────────────────────
export const TOP_BAR_QUICK_LINKS = QUICK_LINKS.filter((l) =>
  ['ql-eoffice', 'ql-webmail', 'ql-sldc', 'ql-employee', 'ql-sitemap', 'ql-aperc'].includes(l.id)
);
