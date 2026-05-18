/**
 * src/data/notifications.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Sample notifications / circulars / press releases / orders data.
 * Minimum 20 entries across all categories.
 *
 * Categories: 'circular' | 'order' | 'press-release' | 'recruitment' | 'general'
 */

export const NOTIFICATIONS = [
  // ── Circulars ──────────────────────────────────────────────────────────────
  {
    id: 'notif-001',
    refNo: 'APTRANSCO/CE(Telecom)/Circular/2026/01',
    category: 'circular',
    title: 'Revised Safety Procedures for EHV Substation Maintenance Works',
    summary:
      'All field personnel engaged in EHV substation maintenance must adhere to updated IS 5216 safety protocols effective from 01 June 2026.',
    date: '2026-05-05',
    isNew: true,
    documentUrl: '#',
    documentSize: '1.2 MB',
  },
  {
    id: 'notif-002',
    refNo: 'APTRANSCO/HRD/Circular/2026/12',
    category: 'circular',
    title: 'Circular on Revised TA/DA Rates for Outstation Deputation',
    summary:
      'Travel Allowance and Daily Allowance rates for outstation duties have been revised as per GO Ms. No. 47, Finance Dept, dated 20-04-2026.',
    date: '2026-05-01',
    isNew: true,
    documentUrl: '#',
    documentSize: '480 KB',
  },
  {
    id: 'notif-003',
    refNo: 'APTRANSCO/CE(Grid)/Circular/2026/08',
    category: 'circular',
    title: 'Instructions on Load Shedding Schedule for Summer 2026',
    summary:
      'Load shedding schedule for all 26 districts for April–June 2026 peak period is enclosed. DISCOMs to coordinate accordingly.',
    date: '2026-04-25',
    isNew: false,
    documentUrl: '#',
    documentSize: '820 KB',
  },
  {
    id: 'notif-004',
    refNo: 'APTRANSCO/IT/Circular/2026/03',
    category: 'circular',
    title: 'Mandatory Cyber Security Awareness Training for All Employees',
    summary:
      'All employees are required to complete the NCIIPC-recommended cyber security online module by 31 May 2026.',
    date: '2026-04-18',
    isNew: false,
    documentUrl: '#',
    documentSize: '310 KB',
  },
  {
    id: 'notif-005',
    refNo: 'APTRANSCO/F&A/Circular/2026/05',
    category: 'circular',
    title: 'Year-End Accounts Closure Procedures — FY 2025-26',
    summary:
      'All DDOs must ensure submission of expenditure statements and reconciliation before 25 March 2026 for timely accounts closure.',
    date: '2026-03-10',
    isNew: false,
    documentUrl: '#',
    documentSize: '560 KB',
  },

  // ── Orders ─────────────────────────────────────────────────────────────────
  {
    id: 'notif-006',
    refNo: 'APTRANSCO/GM(HR)/Order/2026/47',
    category: 'order',
    title: 'Posting Order — Junior Lineman (Electrical) Grade-II Batch 2026',
    summary:
      '420 Junior Linemen are hereby posted to various substations in North/South/East zones with effect from 01 June 2026.',
    date: '2026-05-04',
    isNew: true,
    documentUrl: '#',
    documentSize: '2.1 MB',
  },
  {
    id: 'notif-007',
    refNo: 'APTRANSCO/CE(Proj)/Order/2026/22',
    category: 'order',
    title: 'Work Order: Erection of 220/132 kV Substation at Nandyal',
    summary:
      'M/s Kalpataru Power Transmission Ltd is awarded the work of erection and commissioning of 220/132 kV substation at Nandyal at a contract value of ₹48.6 Cr.',
    date: '2026-04-29',
    isNew: false,
    documentUrl: '#',
    documentSize: '1.5 MB',
  },
  {
    id: 'notif-008',
    refNo: 'APTRANSCO/CMD/Order/2026/09',
    category: 'order',
    title: 'Administrative Order — Transfer of Chief Engineers (Incharge)',
    summary:
      'Transfers and postings of 6 Chief Engineers with immediate effect as per mutual requests and administrative exigency.',
    date: '2026-04-15',
    isNew: false,
    documentUrl: '#',
    documentSize: '395 KB',
  },
  {
    id: 'notif-009',
    refNo: 'APTRANSCO/GM(Proj)/Order/2026/31',
    category: 'order',
    title: 'Order on Waiving Off Liquidated Damages — M/s BHEL Contract',
    summary:
      'On review of force-majeure conditions (COVID-19 legacy delays), LD charges of ₹2.4 Cr are waived for M/s BHEL under contract no. P-204.',
    date: '2026-03-28',
    isNew: false,
    documentUrl: '#',
    documentSize: '720 KB',
  },

  // ── Press Releases ─────────────────────────────────────────────────────────
  {
    id: 'notif-010',
    refNo: 'APTRANSCO/PR/2026/04',
    category: 'press-release',
    title: 'APTRANSCO Commissions 400 kV Substation at Kurnool Solar Park',
    summary:
      'APTRANSCO has successfully energised the 400 kV substation at Kurnool Solar Park, adding 2,000 MVA evacuation capacity to support the state\'s renewable energy target.',
    date: '2026-05-03',
    isNew: true,
    documentUrl: '#',
    documentSize: '950 KB',
  },
  {
    id: 'notif-011',
    refNo: 'APTRANSCO/PR/2026/03',
    category: 'press-release',
    title: 'APTRANSCO Wins National Award for Best Transmission Utility 2025',
    summary:
      'The Ministry of Power conferred the "Best Transmission Utility" award to APTRANSCO for achieving the lowest transmission loss of 2.8% among all STUs in India.',
    date: '2026-04-20',
    isNew: false,
    documentUrl: '#',
    documentSize: '1.1 MB',
  },
  {
    id: 'notif-012',
    refNo: 'APTRANSCO/PR/2026/02',
    category: 'press-release',
    title: 'MoU Signed with PGCIL for High-Capacity Inter-State Transmission',
    summary:
      'APTRANSCO and PGCIL signed a Memorandum of Understanding for developing 6 high-capacity inter-state transmission corridors to evacuate power from Andhra Pradesh to northern states.',
    date: '2026-03-18',
    isNew: false,
    documentUrl: '#',
    documentSize: '780 KB',
  },
  {
    id: 'notif-013',
    refNo: 'APTRANSCO/PR/2026/01',
    category: 'press-release',
    title: 'APTRANSCO Launches SCADA Upgrade Phase-II Across 250 Substations',
    summary:
      'CMD inaugurated the SCADA/EMS upgrade project that will modernise remote monitoring and control systems across 250 EHV substations statewide.',
    date: '2026-02-28',
    isNew: false,
    documentUrl: '#',
    documentSize: '660 KB',
  },

  // ── Recruitment ────────────────────────────────────────────────────────────
  {
    id: 'notif-014',
    refNo: 'APTRANSCO/Recr/2026/001',
    category: 'recruitment',
    title: 'Recruitment Notification — Assistant Engineer (Electrical) 2026',
    summary:
      'APTRANSCO invites online applications from eligible B.Tech/B.E (Electrical) candidates for 312 posts of Assistant Engineer (Electrical) Grade-I.',
    date: '2026-05-02',
    isNew: true,
    documentUrl: '#',
    documentSize: '3.4 MB',
    deadline: '2026-05-31',
  },
  {
    id: 'notif-015',
    refNo: 'APTRANSCO/Recr/2026/002',
    category: 'recruitment',
    title: 'Hall Ticket Download — Junior Accounts Officer (JAO) Written Exam',
    summary:
      'Hall tickets for the JAO written examination scheduled on 25 May 2026 are available for download. Candidates must carry a valid photo ID.',
    date: '2026-05-01',
    isNew: true,
    documentUrl: '#',
    documentSize: 'Online',
    deadline: '2026-05-25',
  },
  {
    id: 'notif-016',
    refNo: 'APTRANSCO/Recr/2025/008',
    category: 'recruitment',
    title: 'Final Selection List — Lineman Grade-I (2025 Recruitment)',
    summary:
      'Final merit list of selected candidates for Lineman Grade-I posts from the 2025 recruitment drive. Join date: 01 June 2026.',
    date: '2026-04-28',
    isNew: false,
    documentUrl: '#',
    documentSize: '4.8 MB',
  },
  {
    id: 'notif-017',
    refNo: 'APTRANSCO/Recr/2025/006',
    category: 'recruitment',
    title: 'Postponement of Document Verification — Sub-Engineer (Civil)',
    summary:
      'Document verification for Sub-Engineer (Civil) posts, originally scheduled on 10 May 2026, is postponed to 20 May 2026 at the Vijayawada Corporate Office.',
    date: '2026-04-26',
    isNew: false,
    documentUrl: '#',
    documentSize: '220 KB',
  },

  // ── General ────────────────────────────────────────────────────────────────
  {
    id: 'notif-018',
    refNo: 'APTRANSCO/CE(Grid)/General/2026/11',
    category: 'general',
    title: 'Advisory: Planned Outage at Kakinada 400 kV Substation — 12 May 2026',
    summary:
      'Planned maintenance outage at Kakinada 400 kV SS from 06:00 to 14:00 hrs on 12 May 2026. DISCOMs to make alternate arrangements.',
    date: '2026-05-06',
    isNew: true,
    documentUrl: '#',
    documentSize: '180 KB',
  },
  {
    id: 'notif-019',
    refNo: 'APTRANSCO/PRTI/General/2026/04',
    category: 'general',
    title: 'Training Calendar 2026-27 — PRTI Vijayawada',
    summary:
      'PRTI Vijayawada releases the annual technical training calendar for FY 2026-27. Online registration open for all eligible employees.',
    date: '2026-04-30',
    isNew: false,
    documentUrl: '#',
    documentSize: '540 KB',
  },
  {
    id: 'notif-020',
    refNo: 'APTRANSCO/CE(T&C)/General/2026/07',
    category: 'general',
    title: 'Energy Conservation Week Celebrations — 14 to 20 May 2026',
    summary:
      'All circle offices to organise Energy Conservation awareness programmes for schools and industries in their jurisdiction during 14–20 May 2026.',
    date: '2026-04-22',
    isNew: false,
    documentUrl: '#',
    documentSize: '290 KB',
  },
];

// ── Helper: get latest N notifications ────────────────────────────────────────
export function getLatestNotifications(n = 10) {
  return [...NOTIFICATIONS]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, n);
}

// ── Helper: filter by category ─────────────────────────────────────────────────
export function getNotificationsByCategory(category) {
  if (!category || category === 'all') return NOTIFICATIONS;
  return NOTIFICATIONS.filter((n) => n.category === category);
}

// ── Category display labels ────────────────────────────────────────────────────
export const NOTIFICATION_CATEGORIES = [
  { value: 'all',          label: 'All' },
  { value: 'circular',     label: 'Circulars' },
  { value: 'order',        label: 'Orders' },
  { value: 'press-release',label: 'Press Releases' },
  { value: 'recruitment',  label: 'Recruitment' },
  { value: 'general',      label: 'General' },
];
