/**
 * src/components/common/DepartmentCard.jsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Department tile: coloured icon + name + brief description + link
 *
 * Props: department object from src/data/departments.js
 */
import { Link } from 'react-router-dom';
import {
  ComputerDesktopIcon,
  BoltIcon,
  WrenchScrewdriverIcon,
  BanknotesIcon,
  UserGroupIcon,
  AcademicCapIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

const ICON_MAP = {
  ComputerDesktopIcon,
  BoltIcon,
  WrenchScrewdriverIcon,
  BanknotesIcon,
  UserGroupIcon,
  AcademicCapIcon,
};

export default function DepartmentCard({ department, className = '' }) {
  const {
    name,
    tagline,
    description,
    icon,
    pageHref,
    color,
    hod,
  } = department;

  const IconComp = ICON_MAP[icon] ?? BoltIcon;

  return (
    <Link
      to={pageHref}
      className={`card-hover p-6 flex flex-col gap-4 group ${className}`}
      aria-label={`Go to ${name} department page`}
    >
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-200"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      >
        <IconComp className="w-7 h-7" />
      </div>

      {/* Name + tagline */}
      <div>
        <h3 className="text-base font-bold text-navy-800 group-hover:text-navy-600 transition-colors">{name}</h3>
        {tagline && <p className="text-xs text-slate-400 mt-0.5 italic">{tagline}</p>}
      </div>

      {/* Description */}
      <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 flex-1">
        {description}
      </p>

      {/* HOD */}
      {hod && (
        <p className="text-xs text-slate-400 border-t border-slate-100 pt-3">
          <span className="font-medium text-slate-600">HOD:</span> {hod.name}
        </p>
      )}

      {/* CTA */}
      <div className="flex items-center gap-1 text-xs font-semibold text-navy-600 group-hover:text-navy-800 transition-colors mt-auto">
        Explore Department
        <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
      </div>
    </Link>
  );
}
