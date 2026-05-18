/**
 * src/components/common/StaffCard.jsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Leadership profile card: avatar/photo + name + designation + contact links.
 *
 * Props: leader object from src/data/leadership.js
 * variant: 'full' (default) | 'compact'
 */
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function StaffCard({ leader, variant = 'full', className = '' }) {
  const {
    name,
    designation,
    department,
    photo,
    avatarColor,
    email,
    phone,
    bio,
    role,
  } = leader;

  const isCompact = variant === 'compact';

  // Role badge colours
  const roleBadge = {
    cmd:      'bg-gold-100 text-gold-800',
    director: 'bg-navy-100 text-navy-700',
    board:    'bg-purple-100 text-purple-700',
    officer:  'bg-slate-100 text-slate-600',
  }[role] ?? 'bg-slate-100 text-slate-600';

  const roleLabel = {
    cmd:      'CMD',
    director: 'Director',
    board:    'Board Member',
    officer:  'Key Officer',
  }[role] ?? role;

  return (
    <article
      className={`card p-5 flex ${isCompact ? 'flex-row items-center gap-4' : 'flex-col items-center text-center gap-4'} ${className}`}
      aria-label={`${designation} — ${name}`}
    >
      {/* Avatar / Photo */}
      <div
        className={`shrink-0 rounded-full flex items-center justify-center text-white font-bold
          ${isCompact ? 'w-14 h-14 text-lg' : 'w-24 h-24 text-3xl'}`}
        style={{ backgroundColor: avatarColor ?? '#1e3a5f' }}
        aria-hidden="true"
      >
        {photo
          ? <img src={photo} alt="" className="w-full h-full rounded-full object-cover" />
          : initials(name)}
      </div>

      <div className={`min-w-0 ${isCompact ? '' : 'w-full'}`}>
        {/* Role badge */}
        <span className={`inline-block px-2 py-0.5 text-xs font-semibold rounded-full mb-2 ${roleBadge}`}>
          {roleLabel}
        </span>

        {/* Name */}
        <h3 className={`font-bold text-navy-900 leading-snug ${isCompact ? 'text-sm' : 'text-base'}`}>
          {name}
        </h3>

        {/* Designation */}
        <p className="text-xs text-slate-500 mt-0.5 leading-snug">{designation}</p>
        {department && (
          <p className="text-xs text-slate-400 mt-0.5">{department}</p>
        )}

        {/* Bio (full variant only) */}
        {!isCompact && bio && (
          <p className="text-xs text-slate-500 mt-3 leading-relaxed text-left">{bio}</p>
        )}

        {/* Contact links */}
        {(email || phone) && (
          <div className={`flex flex-wrap gap-3 mt-3 ${isCompact ? '' : 'justify-center'}`}>
            {email && (
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-1 text-xs text-navy-600 hover:text-navy-800 hover:underline transition-colors"
                aria-label={`Email ${name}`}
              >
                <EnvelopeIcon className="w-3.5 h-3.5" aria-hidden="true" />
                {isCompact ? 'Email' : email}
              </a>
            )}
            {phone && (
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-1 text-xs text-navy-600 hover:text-navy-800 hover:underline transition-colors"
                aria-label={`Call ${name}`}
              >
                <PhoneIcon className="w-3.5 h-3.5" aria-hidden="true" />
                {isCompact ? 'Call' : phone}
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

function initials(name = '') {
  return name
    .split(' ')
    .filter((w) => /^[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join('');
}
