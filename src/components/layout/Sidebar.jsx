/**
 * src/components/layout/Sidebar.jsx
 * Optional sidebar for inner pages — Document Library, Department pages, Compliance.
 * Used as a right or left companion to the main content area.
 *
 * Usage:
 *   <Sidebar title="Categories" position="left">
 *     <SidebarLink href="/documents" label="All Documents" active />
 *     <SidebarLink href="/reports/annual" label="Annual Reports" />
 *   </Sidebar>
 *
 * Or pass `items` array for auto-render:
 *   <Sidebar title="In This Section" items={navItems} currentPath={location.pathname} />
 */
import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

// ── Individual sidebar link ───────────────────────────────────────────────────
export const SidebarLink = memo(function SidebarLink({ href, label, active, badge, icon: Icon }) {
  return (
    <Link
      to={href}
      aria-current={active ? 'page' : undefined}
      className={[
        'flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium',
        'transition-colors duration-150',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-400',
        active
          ? 'bg-navy-700 text-white'
          : 'text-slate-600 hover:bg-navy-50 hover:text-navy-800',
      ].join(' ')}
    >
      {Icon && <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />}
      <span className="flex-1 leading-snug">{label}</span>
      {badge !== undefined && (
        <span
          className={[
            'text-xs font-semibold rounded-full px-2 py-0.5 min-w-[1.5rem] text-center',
            active ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500',
          ].join(' ')}
          aria-label={`${badge} items`}
        >
          {badge}
        </span>
      )}
      {!active && <ChevronRightIcon className="w-3.5 h-3.5 shrink-0 text-slate-300" aria-hidden="true" />}
    </Link>
  );
});

// ── Sidebar section heading ───────────────────────────────────────────────────
export const SidebarHeading = memo(function SidebarHeading({ children }) {
  return (
    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest px-3 pt-4 pb-1 first:pt-0">
      {children}
    </p>
  );
});

// ── Main Sidebar component ────────────────────────────────────────────────────
const Sidebar = memo(function Sidebar({
  title,
  items = [],         // [{ href, label, badge?, icon?, group? }]
  children,
  position: _position = 'left', // 'left' | 'right' — reserved for layout use
  sticky = true,
  className = '',
}) {
  const { pathname } = useLocation();

  // Group items by their `group` property if present
  const grouped = items.reduce((acc, item) => {
    const g = item.group ?? '';
    if (!acc[g]) acc[g] = [];
    acc[g].push(item);
    return acc;
  }, {});

  return (
    <aside
      aria-label={title ?? 'Sidebar navigation'}
      className={[
        'w-full lg:w-64 shrink-0',
        sticky ? 'lg:sticky lg:top-6 lg:self-start' : '',
        className,
      ].join(' ')}
    >
      <div className="card p-4">
        {title && (
          <h2 className="text-xs font-bold text-navy-700 uppercase tracking-widest mb-3 pb-2 border-b border-slate-100">
            {title}
          </h2>
        )}

        {/* Auto-rendered items from prop */}
        {items.length > 0 ? (
          <nav aria-label={title}>
            {Object.entries(grouped).map(([group, groupItems]) => (
              <div key={group}>
                {group && <SidebarHeading>{group}</SidebarHeading>}
                <ul className="flex flex-col gap-0.5" role="list">
                  {groupItems.map((item) => (
                    <li key={item.href}>
                      <SidebarLink
                        href={item.href}
                        label={item.label}
                        badge={item.badge}
                        icon={item.icon}
                        active={pathname === item.href || pathname.startsWith(item.href + '/')}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        ) : (
          /* Or render arbitrary children */
          children
        )}
      </div>
    </aside>
  );
});

export default Sidebar;
