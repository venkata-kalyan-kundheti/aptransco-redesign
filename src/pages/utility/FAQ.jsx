/**
 * src/pages/utility/FAQ.jsx — Full implementation
 * Categorised FAQ with Accordion component, search filter, and smooth UX.
 */
import { useState, useMemo } from 'react';
import { MagnifyingGlassIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import PageShell from '@/components/layout/PageShell';
import Accordion from '@/components/ui/Accordion';
import EmptyState from '@/components/common/EmptyState';

const FAQ_DATA = [
  // ── General ────────────────────────────────────────────────────────────────
  {
    id: 'gen-1',
    category: 'General',
    question: 'What is APTRANSCO?',
    answer:
      'APTRANSCO (Andhra Pradesh Transmission Corporation Limited) is the State Transmission Utility (STU) of Andhra Pradesh. It is responsible for planning, constructing, operating, and maintaining the Extra High Voltage (EHV) transmission network across all 26 districts of Andhra Pradesh. APTRANSCO was incorporated in 1999 following the restructuring of the erstwhile APSEB.',
  },
  {
    id: 'gen-2',
    category: 'General',
    question: 'Who regulates APTRANSCO?',
    answer:
      'APTRANSCO is regulated by the Andhra Pradesh Electricity Regulatory Commission (APERC). APERC sets transmission tariffs, approves capital investment plans, and adjudicates disputes. At the national level, the Central Electricity Regulatory Commission (CERC) governs interstate transmission.',
  },
  {
    id: 'gen-3',
    category: 'General',
    question: 'What is the extent of APTRANSCO\'s transmission network?',
    answer:
      'As of FY 2025-26, APTRANSCO operates: 5,479 km of 400 kV lines, 12,191 km of 220 kV lines, 15,340 km of 132 kV lines, and 1,038 EHV substations with a total transformation capacity of 1,08,000 MVA. The network serves all 26 districts of Andhra Pradesh.',
  },
  {
    id: 'gen-4',
    category: 'General',
    question: 'How do I contact APTRANSCO\'s Corporate Office?',
    answer:
      'APTRANSCO Corporate Office is located at Vidyut Soudha, Hyderabad Road, Vijayawada – 520 013. Phone: +91-866-2577777 | Fax: +91-866-2577123 | Email: cmd@aptransco.gov.in. Office hours: Monday to Friday, 10:00 AM to 5:00 PM (excluding public holidays).',
  },
  {
    id: 'gen-5',
    category: 'General',
    question: 'What are APTRANSCO\'s corporate social responsibility (CSR) activities?',
    answer:
      'APTRANSCO undertakes CSR activities including energy conservation awareness programmes in schools and colleges, skill development initiatives for youth in remote areas, support for government schools near transmission corridors, and tree plantation drives along transmission lines.',
  },

  // ── Tenders ────────────────────────────────────────────────────────────────
  {
    id: 'tend-1',
    category: 'Tenders',
    question: 'How can I participate in APTRANSCO tenders?',
    answer:
      'All APTRANSCO tenders are floated through the State e-Procurement portal (tender.apeprocurement.gov.in). Vendors must register on the portal, obtain a Digital Signature Certificate (DSC), and submit bids online. Physical bid submission is not accepted. Tender documents can be downloaded from this website\'s Tenders section or from the e-Procurement portal.',
  },
  {
    id: 'tend-2',
    category: 'Tenders',
    question: 'What is the Earnest Money Deposit (EMD) and when is it refunded?',
    answer:
      'EMD is a security deposit required with every tender submission to ensure bid seriousness. It is typically 2% of the estimated contract value. EMD is refunded to unsuccessful bidders within 30 days of contract award. The successful bidder\'s EMD is converted into the Security Deposit (SD) on contract execution. Tenders submitted without valid EMD are summarily rejected.',
  },
  {
    id: 'tend-3',
    category: 'Tenders',
    question: 'What categories of tenders does APTRANSCO issue?',
    answer:
      'APTRANSCO issues tenders in five categories: (1) Works — civil and structural construction; (2) Supply — procurement of equipment and materials; (3) Turnkey — combined supply, erection, testing and commissioning; (4) Services — AMC, O&M, consultancy services; (5) Consultancy — feasibility studies, DPR preparation. Each category has specific eligibility criteria.',
  },
  {
    id: 'tend-4',
    category: 'Tenders',
    question: 'Can a corrigendum change the closing date of a tender?',
    answer:
      'Yes. APTRANSCO may issue corrigenda to modify tender conditions, specifications, or closing dates. All corrigenda are published on this website and on the AP e-Procurement portal. Bidders are advised to check for corrigenda before final submission. Changes notified via corrigendum take precedence over the original NIT.',
  },
  {
    id: 'tend-5',
    category: 'Tenders',
    question: 'Who can I contact for tender-related queries?',
    answer:
      'For queries on specific tenders, contact the issuing authority mentioned in the NIT (Notice Inviting Tender). General procurement queries can be directed to: CE (Projects), APTRANSCO, Vijayawada. Phone: +91-866-2577200. Email: cep@aptransco.gov.in. Queries on the e-Procurement portal should be directed to: helpdesk.eprocurement@ap.gov.in.',
  },

  // ── RTI ────────────────────────────────────────────────────────────────────
  {
    id: 'rti-1',
    category: 'RTI',
    question: 'How do I file an RTI application with APTRANSCO?',
    answer:
      'RTI applications can be filed: (1) Online via the RTI Online Portal (rtionline.gov.in) — select "APTRANSCO" as the public authority; (2) By post — addressed to the Central Public Information Officer (CPIO), APTRANSCO, Vidyut Soudha, Vijayawada – 520 013; (3) In person at the APTRANSCO Corporate Office. Application fee: ₹10 (by Demand Draft, Postal Order, or online payment). Applicants from BPL category are exempt from fees.',
  },
  {
    id: 'rti-2',
    category: 'RTI',
    question: 'What is the timeline for getting a response to my RTI application?',
    answer:
      'Under the Right to Information Act, 2005, APTRANSCO is required to respond within 30 days of receiving your application. If the information requested concerns the life or liberty of a person, the response must be provided within 48 hours. If your request is transferred to another Public Authority, an additional 30 days may apply from the date of transfer.',
  },
  {
    id: 'rti-3',
    category: 'RTI',
    question: 'What information is available under Section 4 proactive disclosures?',
    answer:
      'Under Section 4(1)(b) of the RTI Act, APTRANSCO proactively publishes 17 categories of information including: organisational structure, powers and duties of officers, decision-making procedures, norms for performance, rules and regulations, policies, budgets and expenditure, directory of officers, salary details, subsidiary information, and details of public information officers. These are available on the RTI page of this website.',
  },

  // ── Careers ────────────────────────────────────────────────────────────────
  {
    id: 'car-1',
    category: 'Careers',
    question: 'How do I apply for jobs in APTRANSCO?',
    answer:
      'APTRANSCO recruitment notifications are published on this website (Careers section), in major Telugu and English newspapers, and on the official AP government employment news portal. All applications are accepted online through the APTRANSCO recruitment portal or through the AP State Public Service Commission (APPSC) for certain posts. Walk-in applications and direct postal applications are not entertained.',
  },
  {
    id: 'car-2',
    category: 'Careers',
    question: 'What are the major post categories in APTRANSCO?',
    answer:
      'APTRANSCO recruits in several categories: Engineering (AE, AAE, Sub-Engineer), Supervisory (Junior Lineman, Senior Lineman), Accounts (JAO, Sr. Accounts Assistant), Administrative (Jr. Assistant), and Technical Support (Sub-Station Operators, Cable Jointers). Eligibility criteria, pay scales, and selection process vary by post.',
  },
  {
    id: 'car-3',
    category: 'Careers',
    question: 'Is there a reservation policy in APTRANSCO recruitment?',
    answer:
      'Yes. APTRANSCO follows the Government of Andhra Pradesh reservation policy: SC – 15%, ST – 6%, BC (A to E) – 29%, EWS – 10%, and remaining for Open Category. Horizontal reservations apply for Ex-Servicemen, Physically Challenged, Women (33%), and Sports persons as per Government orders in force at the time of notification.',
  },

  // ── Safety ─────────────────────────────────────────────────────────────────
  {
    id: 'safe-1',
    category: 'Safety',
    question: 'What should I do if I notice a damaged power line or fallen conductor?',
    answer:
      'If you see a damaged transmission line or fallen conductor: (1) Stay at least 30 metres away — a fallen conductor may still be live; (2) Do NOT touch or approach the wire; (3) Keep others away; (4) Call APTRANSCO Emergency: 1912 or your nearest DISCOM helpline; (5) Contact local police if traffic or public safety is at risk. Never attempt to move or lift a fallen line yourself.',
  },
  {
    id: 'safe-2',
    category: 'Safety',
    question: 'How close can I build near a transmission line?',
    answer:
      'Central Electricity Authority (CEA) Regulations specify minimum ground clearance and building proximity restrictions for transmission lines. For 400 kV lines, the right-of-way (RoW) is 52 metres (26m on each side of the centreline). For 220 kV: 35m, 132 kV: 27m. No permanent construction is permitted within the RoW. Contact APTRANSCO\'s land and RoW section for specific approvals: row@aptransco.gov.in.',
  },

  // ── Technical ──────────────────────────────────────────────────────────────
  {
    id: 'tech-1',
    category: 'Technical',
    question: 'What is SLDC and what does it do?',
    answer:
      'SLDC stands for State Load Despatch Centre. APTRANSCO\'s SLDC, located in Vijayawada, is responsible for scheduling and despatching power across the Andhra Pradesh grid, monitoring real-time grid frequency, co-ordinating with the Regional Load Despatch Centre (RLDC) of the Southern Region, managing grid emergencies, and ensuring grid discipline. Real-time data from SLDC is available at sldc.ap.gov.in.',
  },
  {
    id: 'tech-2',
    category: 'Technical',
    question: 'What voltage levels does APTRANSCO operate?',
    answer:
      'APTRANSCO operates the EHV (Extra High Voltage) transmission system at three voltage levels: 400 kV (highest — for long-distance bulk power transfer and inter-state connections), 220 kV (sub-transmission between major substations), and 132 kV (local transmission feeding DISCOMs). Distribution at 33 kV and below is managed by the three DISCOMs (APSPDCL, APEPDCL, APCPDCL).',
  },
  {
    id: 'tech-3',
    category: 'Technical',
    question: 'How do I apply for a new transmission connection or grid connectivity?',
    answer:
      'Applications for new transmission connections (e.g., for large industries, renewable energy generators, or bulk consumers) must be submitted to the Chief Engineer (Grid & Transmission), APTRANSCO. The application should include load details, proposed voltage level, location survey, and proposed substation. APTRANSCO will then conduct a System Impact Study and issue a connectivity agreement. Contact: ceg@aptransco.gov.in.',
  },
];

const CATEGORIES = ['All', ...new Set(FAQ_DATA.map((f) => f.category))];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    let items = FAQ_DATA;
    if (activeCategory !== 'All') {
      items = items.filter((f) => f.category === activeCategory);
    }
    if (searchQuery.trim().length >= 2) {
      const q = searchQuery.trim().toLowerCase();
      items = items.filter(
        (f) =>
          f.question.toLowerCase().includes(q) ||
          f.answer.toLowerCase().includes(q)
      );
    }
    return items;
  }, [activeCategory, searchQuery]);

  // Group by category for display
  const grouped = useMemo(() => {
    const map = {};
    filtered.forEach((item) => {
      if (!map[item.category]) map[item.category] = [];
      map[item.category].push(item);
    });
    return map;
  }, [filtered]);

  return (
    <PageShell
      title="Frequently Asked Questions"
      description="Answers to common questions about APTRANSCO, tenders, RTI, careers, and technical operations."
      breadcrumb={['FAQ']}
    >
      <div className="max-w-4xl">
        {/* Search */}
        <div className="relative mb-6">
          <MagnifyingGlassIcon
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none"
            aria-hidden="true"
          />
          <input
            id="faq-search"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs…"
            className="input pl-10 h-11 w-full md:max-w-md"
            aria-label="Search frequently asked questions"
          />
        </div>

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter by category">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={[
                'px-3 py-1.5 text-sm rounded-full border transition-colors duration-150',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400',
                activeCategory === cat
                  ? 'bg-navy-600 border-navy-600 text-white font-medium'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-navy-400 hover:text-navy-700',
              ].join(' ')}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results */}
        {filtered.length === 0 ? (
          <EmptyState
            title="No matching questions"
            message="Try different keywords or select a different category."
            action={{ label: 'Clear search', onClick: () => { setSearchQuery(''); setActiveCategory('All'); } }}
          />
        ) : (
          <div className="flex flex-col gap-10">
            {Object.entries(grouped).map(([category, items]) => (
              <section key={category} aria-labelledby={`faq-cat-${category}`}>
                <div className="flex items-center gap-2 mb-4">
                  <QuestionMarkCircleIcon className="w-5 h-5 text-gold-500" aria-hidden="true" />
                  <h2
                    id={`faq-cat-${category}`}
                    className="text-base font-bold text-navy-700 uppercase tracking-wide"
                  >
                    {category}
                  </h2>
                  <span className="ml-1 text-xs text-slate-400">({items.length})</span>
                </div>
                <Accordion items={items} allowMultiple />
              </section>
            ))}
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-12 card p-6 bg-navy-50 border-navy-200 text-center">
          <h2 className="text-base font-bold text-navy-800 mb-2">Didn&apos;t find your answer?</h2>
          <p className="text-sm text-slate-600 mb-4">
            Our team is happy to help with any queries not covered above.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="/contact" className="btn-primary btn-sm">Contact Us</a>
            <a href="mailto:cmd@aptransco.gov.in" className="btn-secondary btn-sm">Email Us</a>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
