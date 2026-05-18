/**
 * src/components/ui/Accordion.jsx
 * ─────────────────────────────────────────────────────────────────────────────
 * FAQ-style accessible accordion with smooth animation and ARIA.
 *
 * Usage:
 *   <Accordion items={[{ id, question, answer }]} />
 *
 * Or controlled:
 *   <AccordionItem question="..." answer="..." isOpen={...} onToggle={() => ...} />
 */
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

// ── Single Item ────────────────────────────────────────────────────────────────
export function AccordionItem({ id, question, answer, isOpen, onToggle, className = '' }) {
  return (
    <div
      className={`border border-slate-200 rounded-lg overflow-hidden ${className}`}
      id={`accordion-${id}`}
    >
      <button
        type="button"
        id={`accordion-btn-${id}`}
        aria-expanded={isOpen}
        aria-controls={`accordion-panel-${id}`}
        onClick={onToggle}
        className={[
          'w-full flex items-center justify-between px-5 py-4 text-left',
          'text-sm font-semibold text-navy-800 transition-colors duration-150',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-navy-400',
          isOpen ? 'bg-navy-50 text-navy-700' : 'bg-white hover:bg-slate-50',
        ].join(' ')}
      >
        <span>{question}</span>
        <ChevronDownIcon
          className={`w-5 h-5 shrink-0 text-navy-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>
      <div
        id={`accordion-panel-${id}`}
        role="region"
        aria-labelledby={`accordion-btn-${id}`}
        className={[
          'overflow-hidden transition-all duration-200',
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <div className="px-5 pb-5 pt-3 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
          {answer}
        </div>
      </div>
    </div>
  );
}

// ── Accordion (manages state internally) ──────────────────────────────────────
export default function Accordion({ items = [], allowMultiple = false, className = '' }) {
  const [openIds, setOpenIds] = useState([]);

  function toggle(id) {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev[0] === id ? [] : [id]));
    }
  }

  return (
    <div className={`flex flex-col gap-2 ${className}`} role="list">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openIds.includes(item.id)}
          onToggle={() => toggle(item.id)}
        />
      ))}
    </div>
  );
}
