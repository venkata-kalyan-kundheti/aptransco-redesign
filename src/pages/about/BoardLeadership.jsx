/**
 * src/pages/about/BoardLeadership.jsx — Full implementation
 * ─────────────────────────────────────────────────────────────────────────────
 * CMD + Directors + Board Members + Key Officers with StaffCard grid.
 * Filter tabs by role.
 */
import { useState } from 'react';
import PageShell from '@/components/layout/PageShell';
import StaffCard from '@/components/common/StaffCard';
import Tabs from '@/components/ui/Tabs';
import { LEADERSHIP, getLeadersByRole } from '@/data/leadership';

const TABS = [
  { value: 'all',      label: 'All',         count: LEADERSHIP.length },
  { value: 'cmd',      label: 'CMD',          count: LEADERSHIP.filter(l => l.role === 'cmd').length },
  { value: 'director', label: 'Directors',    count: LEADERSHIP.filter(l => l.role === 'director').length },
  { value: 'board',    label: 'Board',        count: LEADERSHIP.filter(l => l.role === 'board').length },
  { value: 'officer',  label: 'Key Officers', count: LEADERSHIP.filter(l => l.role === 'officer').length },
];

export default function BoardLeadership() {
  const [activeTab, setActiveTab] = useState('all');

  const leaders = getLeadersByRole(activeTab === 'all' ? null : activeTab);

  // CMD always first
  const sorted = [...leaders].sort((a, b) => {
    const order = { cmd: 0, director: 1, board: 2, officer: 3 };
    return (order[a.role] ?? 9) - (order[b.role] ?? 9);
  });

  return (
    <PageShell
      title="Board & Leadership"
      subtitle="CMD, Directors, Board Members and Key Officers of APTRANSCO"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Board & Leadership' },
      ]}
    >
      {/* Intro */}
      <p className="text-slate-600 max-w-2xl mb-8 leading-relaxed">
        APTRANSCO is governed by a Board of Directors constituted under the
        AP Electricity Reforms Act, 1998. The Board provides strategic oversight
        while the CMD and Executive Directors manage day-to-day operations.
      </p>

      {/* Role filter tabs */}
      <Tabs
        id="leadership"
        tabs={TABS}
        active={activeTab}
        onChange={setActiveTab}
        className="mb-8"
      />

      {/* CMD — full-width highlight */}
      {(activeTab === 'all' || activeTab === 'cmd') && (
        <div className="mb-10">
          <h2 className="text-sm font-bold text-navy-500 uppercase tracking-widest mb-4">
            Chairman &amp; Managing Director
          </h2>
          {sorted.filter(l => l.role === 'cmd').map(leader => (
            <StaffCard key={leader.id} leader={leader} variant="full"
              className="max-w-xl shadow-md border-l-4 border-gold-400" />
          ))}
        </div>
      )}

      {/* Directors */}
      {(activeTab === 'all' || activeTab === 'director') && (
        <div className="mb-10">
          <h2 className="text-sm font-bold text-navy-500 uppercase tracking-widest mb-4">
            Executive Directors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sorted.filter(l => l.role === 'director').map(leader => (
              <StaffCard key={leader.id} leader={leader} variant="full" />
            ))}
          </div>
        </div>
      )}

      {/* Board Members */}
      {(activeTab === 'all' || activeTab === 'board') && (
        <div className="mb-10">
          <h2 className="text-sm font-bold text-navy-500 uppercase tracking-widest mb-4">
            Board of Directors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sorted.filter(l => l.role === 'board').map(leader => (
              <StaffCard key={leader.id} leader={leader} variant="full" />
            ))}
          </div>
        </div>
      )}

      {/* Key Officers */}
      {(activeTab === 'all' || activeTab === 'officer') && (
        <div>
          <h2 className="text-sm font-bold text-navy-500 uppercase tracking-widest mb-4">
            Key Officers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sorted.filter(l => l.role === 'officer').map(leader => (
              <StaffCard key={leader.id} leader={leader} variant="compact" />
            ))}
          </div>
        </div>
      )}
    </PageShell>
  );
}
