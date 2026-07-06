import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
            openIndex === i
              ? 'border-teal-200 bg-teal-50/50 shadow-sm'
              : 'border-neutral-200 bg-white hover:border-neutral-300'
          }`}
        >
          <button
            className="w-full flex items-center justify-between px-6 py-5 text-left"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="text-sm font-semibold text-neutral-900 pr-4 leading-snug">{item.question}</span>
            <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
              openIndex === i ? 'bg-teal-500 text-white' : 'bg-neutral-100 text-neutral-500'
            }`}>
              {openIndex === i
                ? <Minus size={14} />
                : <Plus size={14} />
              }
            </div>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === i ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 pb-5 text-sm text-neutral-600 leading-relaxed border-t border-teal-100 pt-4">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
