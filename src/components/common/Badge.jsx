/**
 * src/components/common/Badge.jsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Reusable badge / pill component for categories and status labels.
 *
 * variant: 'circular' | 'order' | 'press-release' | 'recruitment' | 'general'
 *          | 'open' | 'closed' | 'upcoming' | 'awarded' | 'cancelled'
 *          | 'works' | 'supply' | 'turnkey' | 'service' | 'consultancy'
 *          | 'new' | 'urgent' | 'default'
 *
 * size: 'sm' | 'md' (default 'md')
 */

const VARIANT_CLASSES = {
  // Notification categories
  circular:       'bg-blue-100 text-blue-800 ring-1 ring-blue-200',
  order:          'bg-purple-100 text-purple-800 ring-1 ring-purple-200',
  'press-release':'bg-teal-100 text-teal-800 ring-1 ring-teal-200',
  recruitment:    'bg-amber-100 text-amber-800 ring-1 ring-amber-200',
  general:        'bg-slate-100 text-slate-700 ring-1 ring-slate-200',

  // Tender status
  open:           'bg-green-100 text-green-800 ring-1 ring-green-200',
  closed:         'bg-slate-100 text-slate-600 ring-1 ring-slate-200',
  upcoming:       'bg-sky-100 text-sky-800 ring-1 ring-sky-200',
  awarded:        'bg-emerald-100 text-emerald-800 ring-1 ring-emerald-200',
  cancelled:      'bg-red-100 text-red-700 ring-1 ring-red-200',

  // Tender categories
  works:          'bg-orange-100 text-orange-800 ring-1 ring-orange-200',
  supply:         'bg-blue-100 text-blue-700 ring-1 ring-blue-200',
  turnkey:        'bg-violet-100 text-violet-800 ring-1 ring-violet-200',
  service:        'bg-cyan-100 text-cyan-800 ring-1 ring-cyan-200',
  consultancy:    'bg-indigo-100 text-indigo-800 ring-1 ring-indigo-200',

  // Generic
  new:            'bg-gold-100 text-gold-800 ring-1 ring-gold-200',
  urgent:         'bg-red-100 text-red-700 ring-1 ring-red-200',
  default:        'bg-slate-100 text-slate-600 ring-1 ring-slate-200',
};

const VARIANT_LABELS = {
  'press-release': 'Press Release',
  recruitment:     'Recruitment',
};

export default function Badge({ variant = 'default', label, size = 'md', className = '' }) {
  const classes = VARIANT_CLASSES[variant] ?? VARIANT_CLASSES.default;
  const displayLabel = label ?? VARIANT_LABELS[variant] ?? capitalise(variant);
  const sizeClasses  = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-xs';

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full ${sizeClasses} ${classes} ${className}`}
    >
      {displayLabel}
    </span>
  );
}

function capitalise(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
