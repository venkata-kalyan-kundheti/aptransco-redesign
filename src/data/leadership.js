/**
 * src/data/leadership.js
 * ─────────────────────────────────────────────────────────────────────────────
 * CMD, Directors, Board members, and key officers of APTRANSCO.
 *
 * role: 'cmd' | 'director' | 'board' | 'officer'
 * avatarColor is used as fallback when photo is not available.
 */

export const LEADERSHIP = [
  // ── CMD ──────────────────────────────────────────────────────────────────
  {
    id: 'leader-01',
    role: 'cmd',
    name: 'Sri K. Vivekananda Reddy, IAS',
    designation: 'Chairman & Managing Director',
    department: 'Corporate',
    photo: null,
    avatarColor: '#1e3a5f',
    email: 'cmd@aptransco.gov.in',
    phone: '+91-866-2577700',
    officeAddress: 'Vidyut Soudha, Vijayawada – 520 013',
    bio: 'Sri Vivekananda Reddy is a 2002-batch IAS officer with extensive experience in power sector administration, infrastructure development, and public utility management across Andhra Pradesh.',
  },

  // ── Directors ─────────────────────────────────────────────────────────────
  {
    id: 'leader-02',
    role: 'director',
    name: 'Sri P. Ramachandra Rao',
    designation: 'Director (Projects)',
    department: 'Projects',
    photo: null,
    avatarColor: '#1e4d2b',
    email: 'dir.projects@aptransco.gov.in',
    phone: '+91-866-2577710',
    officeAddress: 'Vidyut Soudha, Vijayawada – 520 013',
    bio: 'Sri Ramachandra Rao oversees all capital infrastructure projects including new substation construction, transmission line augmentation, and GIS modernisation.',
  },
  {
    id: 'leader-03',
    role: 'director',
    name: 'Sri M. Subrahmanyam',
    designation: 'Director (Operations)',
    department: 'Grid Operations',
    photo: null,
    avatarColor: '#2d1b5e',
    email: 'dir.operations@aptransco.gov.in',
    phone: '+91-866-2577720',
    officeAddress: 'Vidyut Soudha, Vijayawada – 520 013',
    bio: 'Sri Subrahmanyam heads system operations, grid management, SLDC coordination, and all EHV substation maintenance activities.',
  },
  {
    id: 'leader-04',
    role: 'director',
    name: 'Smt. V. Padmavathi',
    designation: 'Director (Finance)',
    department: 'Finance & Accounts',
    photo: null,
    avatarColor: '#5e1b2d',
    email: 'dir.finance@aptransco.gov.in',
    phone: '+91-866-2577730',
    officeAddress: 'Vidyut Soudha, Vijayawada – 520 013',
    bio: 'Smt. Padmavathi is a senior IFS officer managing APTRANSCO\'s financial planning, budgeting, accounts, audit, and regulatory tariff filings before APERC.',
  },
  {
    id: 'leader-05',
    role: 'director',
    name: 'Sri G. Koteswara Rao',
    designation: 'Director (HR & Administration)',
    department: 'HR & Admin',
    photo: null,
    avatarColor: '#5e4a1b',
    email: 'dir.hr@aptransco.gov.in',
    phone: '+91-866-2577740',
    officeAddress: 'Vidyut Soudha, Vijayawada – 520 013',
    bio: 'Sri Koteswara Rao manages human resources, employee relations, training, administrative services, and vigilance functions of APTRANSCO.',
  },

  // ── Board Members ─────────────────────────────────────────────────────────
  {
    id: 'leader-06',
    role: 'board',
    name: 'Sri T. Nageswara Rao',
    designation: 'Independent Director',
    department: 'Board',
    photo: null,
    avatarColor: '#1b4a5e',
    email: '',
    phone: '',
    officeAddress: '',
    bio: 'Sri Nageswara Rao is a retired IAS officer with 35 years of service in public administration, serving as Independent Director on APTRANSCO\'s Board.',
  },
  {
    id: 'leader-07',
    role: 'board',
    name: 'Dr. S. Annamalai',
    designation: 'Independent Director (Technical)',
    department: 'Board',
    photo: null,
    avatarColor: '#2e5e1b',
    email: '',
    phone: '',
    officeAddress: '',
    bio: 'Dr. Annamalai is a retired PGCIL Director with over 30 years of experience in high voltage transmission engineering and grid planning.',
  },
  {
    id: 'leader-08',
    role: 'board',
    name: 'Smt. R. Uma Devi',
    designation: 'Government Nominee Director',
    department: 'Board',
    photo: null,
    avatarColor: '#5e1b4a',
    email: '',
    phone: '',
    officeAddress: '',
    bio: 'Smt. Uma Devi is a serving IAS officer of 2008 batch representing the Government of Andhra Pradesh Energy Department on APTRANSCO\'s Board.',
  },

  // ── Key Officers ──────────────────────────────────────────────────────────
  {
    id: 'leader-09',
    role: 'officer',
    name: 'Sri B. Satyanarayana',
    designation: 'Chief Engineer (Grid Transmission)',
    department: 'Grid Transmission',
    photo: null,
    avatarColor: '#1b3a5e',
    email: 'ce.grid@aptransco.gov.in',
    phone: '+91-866-2577750',
    officeAddress: 'Vidyut Soudha, Vijayawada – 520 013',
    bio: '',
  },
  {
    id: 'leader-10',
    role: 'officer',
    name: 'Sri C. Mahendra Kumar',
    designation: 'Chief Engineer (Projects)',
    department: 'Projects',
    photo: null,
    avatarColor: '#1b5e2e',
    email: 'ce.projects@aptransco.gov.in',
    phone: '+91-866-2577760',
    officeAddress: 'Vidyut Soudha, Vijayawada – 520 013',
    bio: '',
  },
  {
    id: 'leader-11',
    role: 'officer',
    name: 'Sri D. Prasad Rao',
    designation: 'Chief Engineer (Telecom & IT)',
    department: 'Telecom & IT',
    photo: null,
    avatarColor: '#5e1b1b',
    email: 'ce.telecom@aptransco.gov.in',
    phone: '+91-866-2577770',
    officeAddress: 'Vidyut Soudha, Vijayawada – 520 013',
    bio: '',
  },
  {
    id: 'leader-12',
    role: 'officer',
    name: 'Smt. K. Vijayalakshmi',
    designation: 'General Manager (Finance)',
    department: 'Finance & Accounts',
    photo: null,
    avatarColor: '#4a1b5e',
    email: 'gm.finance@aptransco.gov.in',
    phone: '+91-866-2577780',
    officeAddress: 'Vidyut Soudha, Vijayawada – 520 013',
    bio: '',
  },
];

// ── Helpers ────────────────────────────────────────────────────────────────────
export function getLeadersByRole(role) {
  if (!role || role === 'all') return LEADERSHIP;
  return LEADERSHIP.filter((l) => l.role === role);
}

export function getLeaderById(id) {
  return LEADERSHIP.find((l) => l.id === id) ?? null;
}

export const LEADERSHIP_ROLES = [
  { value: 'cmd',     label: 'CMD' },
  { value: 'director',label: 'Directors' },
  { value: 'board',   label: 'Board Members' },
  { value: 'officer', label: 'Key Officers' },
];
