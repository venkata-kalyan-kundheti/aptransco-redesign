/**
 * src/components/ui/Tabs.jsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Accessible tab navigation component (ARIA tabs pattern).
 * Used by Notifications, Departments, FAQ pages.
 *
 * Usage:
 *   <Tabs
 *     tabs={[{ value: 'all', label: 'All', count: 20 }, ...]}
 *     active="all"
 *     onChange={(value) => setActive(value)}
 *   />
 */

export default function Tabs({ tabs = [], active, onChange, className = '', id = 'tabs' }) {
  return (
    <div
      role="tablist"
      aria-label="Content filter tabs"
      className={`flex flex-wrap gap-1 border-b border-slate-200 ${className}`}
    >
      {tabs.map((tab) => {
        const isActive = tab.value === active;
        return (
          <button
            key={tab.value}
            id={`${id}-tab-${tab.value}`}
            role="tab"
            aria-selected={isActive}
            aria-controls={`${id}-panel-${tab.value}`}
            onClick={() => onChange?.(tab.value)}
            className={[
              'inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium',
              'rounded-t-lg border-b-2 transition-colors duration-150',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-400',
              isActive
                ? 'border-navy-700 text-navy-700 bg-white'
                : 'border-transparent text-slate-500 hover:text-navy-700 hover:border-slate-300',
            ].join(' ')}
          >
            {tab.label}
            {tab.count !== undefined && (
              <span
                className={`inline-flex items-center justify-center min-w-[1.25rem] h-5 px-1.5 text-xs font-bold rounded-full ${
                  isActive
                    ? 'bg-navy-700 text-white'
                    : 'bg-slate-100 text-slate-500'
                }`}
              >
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

/**
 * TabPanel — wraps content for a specific tab.
 * Use id that matches `${id}-panel-${tab.value}`.
 */
export function TabPanel({ id, active, value, children }) {
  const isVisible = active === value;
  return (
    <div
      id={`${id}-panel-${value}`}
      role="tabpanel"
      aria-labelledby={`${id}-tab-${value}`}
      hidden={!isVisible}
    >
      {isVisible ? children : null}
    </div>
  );
}
