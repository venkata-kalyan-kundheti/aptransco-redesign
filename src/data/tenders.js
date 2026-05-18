/**
 * src/data/tenders.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Sample tender entries — minimum 20 entries.
 *
 * status: 'open' | 'closed' | 'upcoming' | 'cancelled' | 'awarded'
 * category: 'works' | 'supply' | 'consultancy' | 'service' | 'turnkey'
 */

export const TENDERS = [
  // ── Open Tenders ───────────────────────────────────────────────────────────
  {
    id: 'tend-001',
    refNo: 'APTRANSCO/CE(Proj)/NIT/2026/01',
    category: 'works',
    title: 'Construction of 400/220 kV, 2×500 MVA GIS Substation at Tirupati (Phase-II)',
    description:
      'Civil and structural works for 400/220 kV GIS substation including control room, switchyard, cable trenches, boundary wall, and internal roads.',
    issuedDate: '2026-05-01',
    closingDate: '2026-05-31',
    openingDate: '2026-06-02',
    estimatedValue: '₹62.40 Cr',
    emd: '₹62,40,000',
    documentFee: '₹5,000',
    status: 'open',
    downloadUrl: '#',
    corrigendum: [],
  },
  {
    id: 'tend-002',
    refNo: 'APTRANSCO/CE(T&C)/NIT/2026/04',
    category: 'supply',
    title: 'Supply of 220 kV XLPE Underground Cable (4 km) for Visakhapatnam City Network',
    description:
      'Procurement of 220 kV, 1600 mm² XLPE single-core underground cable with all accessories for Visakhapatnam urban underground cabling project.',
    issuedDate: '2026-04-28',
    closingDate: '2026-05-28',
    openingDate: '2026-05-30',
    estimatedValue: '₹18.90 Cr',
    emd: '₹18,90,000',
    documentFee: '₹2,500',
    status: 'open',
    downloadUrl: '#',
    corrigendum: [{ no: 1, date: '2026-05-05', subject: 'Correction in cable specification clause 4.2' }],
  },
  {
    id: 'tend-003',
    refNo: 'APTRANSCO/CE(Proj)/NIT/2026/07',
    category: 'turnkey',
    title: 'Turnkey: Erection & Commissioning of 132/33 kV, 2×40 MVA Substation at Chittoor',
    description:
      'Complete turnkey execution of 132/33 kV substation including supply, erection, testing and commissioning of all equipment at Chittoor.',
    issuedDate: '2026-04-22',
    closingDate: '2026-05-22',
    openingDate: '2026-05-24',
    estimatedValue: '₹24.15 Cr',
    emd: '₹24,15,000',
    documentFee: '₹3,000',
    status: 'open',
    downloadUrl: '#',
    corrigendum: [],
  },
  {
    id: 'tend-004',
    refNo: 'APTRANSCO/CE(Grid)/NIT/2026/02',
    category: 'supply',
    title: 'Supply of SF6 Gas Circuit Breakers — 220 kV, 40 kA (50 Nos)',
    description:
      'Procurement of 220 kV, 40 kA, 2000A SF6 gas circuit breakers (50 numbers) with control panels for various substations across Andhra Pradesh.',
    issuedDate: '2026-05-03',
    closingDate: '2026-06-03',
    openingDate: '2026-06-05',
    estimatedValue: '₹32.00 Cr',
    emd: '₹32,00,000',
    documentFee: '₹5,000',
    status: 'open',
    downloadUrl: '#',
    corrigendum: [],
  },
  {
    id: 'tend-005',
    refNo: 'APTRANSCO/IT/NIT/2026/01',
    category: 'service',
    title: 'Comprehensive Annual Maintenance Contract — SCADA/EMS System (3 Years)',
    description:
      'AMC for SCADA/EMS including NCC, SDC, field RTUs, communication systems across all 250 upgraded substations for a period of 3 years.',
    issuedDate: '2026-04-15',
    closingDate: '2026-05-15',
    openingDate: '2026-05-17',
    estimatedValue: '₹8.50 Cr/yr',
    emd: '₹25,50,000',
    documentFee: '₹2,000',
    status: 'open',
    downloadUrl: '#',
    corrigendum: [{ no: 1, date: '2026-04-22', subject: 'Extension of bid submission date by 7 days' }],
  },
  {
    id: 'tend-006',
    refNo: 'APTRANSCO/CE(Proj)/NIT/2026/09',
    category: 'works',
    title: 'Construction of 220 kV Transmission Line (ACSR Moose) — Ongole to Narasaraopet (85 km)',
    description:
      'Survey, design, supply, erection, testing and commissioning of 220 kV D/C transmission line from Ongole to Narasaraopet (approx. 85 km).',
    issuedDate: '2026-04-30',
    closingDate: '2026-05-30',
    openingDate: '2026-06-01',
    estimatedValue: '₹52.80 Cr',
    emd: '₹52,80,000',
    documentFee: '₹5,000',
    status: 'open',
    downloadUrl: '#',
    corrigendum: [],
  },
  {
    id: 'tend-007',
    refNo: 'APTRANSCO/CE(T&C)/NIT/2026/06',
    category: 'supply',
    title: 'Supply of Power Transformers — 315 MVA, 400/220 kV (4 Nos)',
    description:
      'Procurement of 315 MVA, 400/220/33 kV (ONAN/ONAF), 3-phase power transformers for Kurnool, Tirupati, Guntur, and Vijayanagaram substations.',
    issuedDate: '2026-05-05',
    closingDate: '2026-06-05',
    openingDate: '2026-06-07',
    estimatedValue: '₹87.20 Cr',
    emd: '₹87,20,000',
    documentFee: '₹10,000',
    status: 'open',
    downloadUrl: '#',
    corrigendum: [],
  },

  // ── Upcoming Tenders ───────────────────────────────────────────────────────
  {
    id: 'tend-008',
    refNo: 'APTRANSCO/CE(Proj)/NIT/2026/12',
    category: 'consultancy',
    title: 'Appointment of Project Management Consultant — Transmission System Strengthening',
    description:
      'Selection of PMC agency for planning, design review, bid management, and supervision for ₹2,200 Cr transmission system strengthening project.',
    issuedDate: '2026-05-20',
    closingDate: '2026-06-20',
    openingDate: '2026-06-22',
    estimatedValue: '₹12.00 Cr',
    emd: '₹12,00,000',
    documentFee: '₹5,000',
    status: 'upcoming',
    downloadUrl: '#',
    corrigendum: [],
  },
  {
    id: 'tend-009',
    refNo: 'APTRANSCO/CE(Grid)/NIT/2026/08',
    category: 'supply',
    title: 'Supply of Capacitor Voltage Transformers (CVTs) — 400 kV (80 Nos)',
    description:
      'Procurement of 400 kV, class 0.2, CVTs for metering and protection purposes at various 400 kV substations in Andhra Pradesh.',
    issuedDate: '2026-05-18',
    closingDate: '2026-06-18',
    openingDate: '2026-06-20',
    estimatedValue: '₹7.60 Cr',
    emd: '₹7,60,000',
    documentFee: '₹2,000',
    status: 'upcoming',
    downloadUrl: '#',
    corrigendum: [],
  },

  // ── Closed / Evaluation ────────────────────────────────────────────────────
  {
    id: 'tend-010',
    refNo: 'APTRANSCO/CE(Proj)/NIT/2025/44',
    category: 'works',
    title: 'Civil Works — 400 kV GIS Substation at Kurnool Solar Park Evacuation Bay',
    description:
      'Civil & structural works for 400 kV GIS extension bay at Kurnool Solar Park substation.',
    issuedDate: '2025-12-10',
    closingDate: '2026-01-10',
    openingDate: '2026-01-12',
    estimatedValue: '₹14.20 Cr',
    emd: '₹14,20,000',
    documentFee: '₹3,000',
    status: 'closed',
    downloadUrl: '#',
    corrigendum: [
      { no: 1, date: '2025-12-20', subject: 'Amendment to soil test report requirements' },
      { no: 2, date: '2026-01-05', subject: 'Extension of submission date by 5 days' },
    ],
  },
  {
    id: 'tend-011',
    refNo: 'APTRANSCO/CE(T&C)/NIT/2025/38',
    category: 'supply',
    title: 'Supply of Dry-Type Auxiliary Transformers — 11/0.433 kV (200 Nos)',
    description:
      'Procurement of dry-type, cast-resin, 11/0.433 kV auxiliary transformers for substations under various circles.',
    issuedDate: '2025-11-01',
    closingDate: '2025-11-30',
    openingDate: '2025-12-02',
    estimatedValue: '₹9.80 Cr',
    emd: '₹9,80,000',
    documentFee: '₹2,500',
    status: 'closed',
    downloadUrl: '#',
    corrigendum: [],
  },
  {
    id: 'tend-012',
    refNo: 'APTRANSCO/IT/NIT/2025/05',
    category: 'service',
    title: 'Procurement of ERP Software Licences and Implementation Services',
    description:
      'Selection of vendor for ERP implementation (Finance, HR, Procurement modules) for APTRANSCO with 3-year support.',
    issuedDate: '2025-10-15',
    closingDate: '2025-11-15',
    openingDate: '2025-11-17',
    estimatedValue: '₹28.50 Cr',
    emd: '₹28,50,000',
    documentFee: '₹10,000',
    status: 'closed',
    downloadUrl: '#',
    corrigendum: [],
  },

  // ── Awarded Tenders ────────────────────────────────────────────────────────
  {
    id: 'tend-013',
    refNo: 'APTRANSCO/CE(Proj)/NIT/2025/29',
    category: 'turnkey',
    title: 'Turnkey: 400/220 kV, 2×500 MVA AIS Substation at Nandyal',
    description:
      'Awarded to M/s Kalpataru Power Transmission Ltd at ₹48.60 Cr for turnkey execution of 400/220 kV substation at Nandyal.',
    issuedDate: '2025-08-01',
    closingDate: '2025-09-01',
    openingDate: '2025-09-03',
    estimatedValue: '₹50.00 Cr',
    emd: '₹50,00,000',
    documentFee: '₹5,000',
    status: 'awarded',
    awardedTo: 'M/s Kalpataru Power Transmission Ltd',
    awardedValue: '₹48.60 Cr',
    downloadUrl: '#',
    corrigendum: [],
  },
  {
    id: 'tend-014',
    refNo: 'APTRANSCO/CE(T&C)/NIT/2025/22',
    category: 'supply',
    title: 'Supply of 100 MVA, 220/132 kV ICT (3 Nos) for North Zone Substations',
    description:
      'Awarded to M/s BHEL Bhopal for supply of 100 MVA, 220/132 kV Inter-Connecting Transformers for 3 north-zone substations.',
    issuedDate: '2025-06-15',
    closingDate: '2025-07-15',
    openingDate: '2025-07-17',
    estimatedValue: '₹22.00 Cr',
    emd: '₹22,00,000',
    documentFee: '₹3,000',
    status: 'awarded',
    awardedTo: 'M/s BHEL, Bhopal',
    awardedValue: '₹21.40 Cr',
    downloadUrl: '#',
    corrigendum: [],
  },
  {
    id: 'tend-015',
    refNo: 'APTRANSCO/CE(Grid)/NIT/2025/18',
    category: 'service',
    title: 'Operation & Maintenance Contract — 132 kV Lines in Visakha Circle (2 Years)',
    description:
      'Awarded to M/s G.R. Infra for O&M of 132 kV transmission lines in Visakhapatnam circle for 2 years.',
    issuedDate: '2025-05-10',
    closingDate: '2025-06-10',
    openingDate: '2025-06-12',
    estimatedValue: '₹6.80 Cr/yr',
    emd: '₹13,60,000',
    documentFee: '₹2,000',
    status: 'awarded',
    awardedTo: 'M/s G.R. Infra Projects Ltd',
    awardedValue: '₹12.90 Cr',
    downloadUrl: '#',
    corrigendum: [],
  },

  // ── Cancelled Tenders ──────────────────────────────────────────────────────
  {
    id: 'tend-016',
    refNo: 'APTRANSCO/CE(Proj)/NIT/2025/12',
    category: 'works',
    title: 'Civil Works — 220 kV Substation Extension at Ongole (Cancelled)',
    description:
      'Tender cancelled due to change in scope of work. Fresh NIT will be issued after revised design approval.',
    issuedDate: '2025-03-01',
    closingDate: '2025-04-01',
    openingDate: '2025-04-03',
    estimatedValue: '₹9.40 Cr',
    emd: '₹9,40,000',
    documentFee: '₹2,000',
    status: 'cancelled',
    downloadUrl: '#',
    corrigendum: [],
  },

  // ── Additional Open Tenders ────────────────────────────────────────────────
  {
    id: 'tend-017',
    refNo: 'APTRANSCO/CE(Proj)/NIT/2026/03',
    category: 'supply',
    title: 'Supply of OPGW (Optical Ground Wire) for 400 kV Lines — 400 km',
    description:
      'Procurement of OPGW cable with 24-fibre count for retrofitting on 400 kV existing transmission lines.',
    issuedDate: '2026-04-10',
    closingDate: '2026-05-10',
    openingDate: '2026-05-12',
    estimatedValue: '₹19.20 Cr',
    emd: '₹19,20,000',
    documentFee: '₹3,000',
    status: 'closed',
    downloadUrl: '#',
    corrigendum: [],
  },
  {
    id: 'tend-018',
    refNo: 'APTRANSCO/CE(Grid)/NIT/2026/05',
    category: 'service',
    title: 'Drone-Based Transmission Line Inspection Services (1 Year)',
    description:
      'Engagement of agency for patrol and inspection of 400 kV and 220 kV transmission lines using UAVs/drones.',
    issuedDate: '2026-04-18',
    closingDate: '2026-05-18',
    openingDate: '2026-05-20',
    estimatedValue: '₹3.80 Cr',
    emd: '₹3,80,000',
    documentFee: '₹1,500',
    status: 'open',
    downloadUrl: '#',
    corrigendum: [],
  },
  {
    id: 'tend-019',
    refNo: 'APTRANSCO/PRTI/NIT/2026/01',
    category: 'service',
    title: 'Training Services — Safety & High Voltage Techniques (Batch of 500)',
    description:
      'Appointment of training agency for conducting EHV safety and high-voltage training programmes for 500 field staff across 3 batches.',
    issuedDate: '2026-04-25',
    closingDate: '2026-05-25',
    openingDate: '2026-05-27',
    estimatedValue: '₹1.20 Cr',
    emd: '₹1,20,000',
    documentFee: '₹1,000',
    status: 'open',
    downloadUrl: '#',
    corrigendum: [],
  },
  {
    id: 'tend-020',
    refNo: 'APTRANSCO/CE(Proj)/NIT/2026/11',
    category: 'consultancy',
    title: 'Techno-Economic Feasibility Study — 765 kV Backbone Corridor (AP)',
    description:
      'Selection of consultant for detailed feasibility study, DPR preparation and regulatory filings for a proposed 765 kV inter-regional backbone corridor.',
    issuedDate: '2026-05-06',
    closingDate: '2026-06-06',
    openingDate: '2026-06-08',
    estimatedValue: '₹4.50 Cr',
    emd: '₹4,50,000',
    documentFee: '₹2,000',
    status: 'open',
    downloadUrl: '#',
    corrigendum: [],
  },
];

// ── Helpers ────────────────────────────────────────────────────────────────────
export function getTendersByStatus(status) {
  if (!status || status === 'all') return TENDERS;
  return TENDERS.filter((t) => t.status === status);
}

export function getTendersByCategory(category) {
  if (!category || category === 'all') return TENDERS;
  return TENDERS.filter((t) => t.category === category);
}

export function getTenderById(id) {
  return TENDERS.find((t) => t.id === id) ?? null;
}

export function getActiveTenders() {
  return TENDERS.filter((t) => t.status === 'open' || t.status === 'upcoming');
}

// ── Status / Category labels ───────────────────────────────────────────────────
export const TENDER_STATUSES = [
  { value: 'all',       label: 'All Status' },
  { value: 'open',      label: 'Open' },
  { value: 'upcoming',  label: 'Upcoming' },
  { value: 'closed',    label: 'Closed' },
  { value: 'awarded',   label: 'Awarded' },
  { value: 'cancelled', label: 'Cancelled' },
];

export const TENDER_CATEGORIES = [
  { value: 'all',         label: 'All Categories' },
  { value: 'works',       label: 'Works' },
  { value: 'supply',      label: 'Supply' },
  { value: 'turnkey',     label: 'Turnkey' },
  { value: 'service',     label: 'Services' },
  { value: 'consultancy', label: 'Consultancy' },
];
