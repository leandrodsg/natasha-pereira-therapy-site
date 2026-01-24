'use client';

import { ChevronDown } from 'lucide-react';
import type { FAQItem as FAQItemType } from '@/lib/faq-data';

interface FAQItemProps {
  item: FAQItemType;
}

export function FAQItem({ item }: FAQItemProps) {
  return (
    <details
      id={`faq-${item.id}`}
      className="group bg-[#F6E8D9] border border-[#662B2D]/10 rounded-2xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
      role="group"
    >
      <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
        <span className="font-display text-lg text-[#662B2D] font-medium text-left">
          {item.question}
        </span>
        <div className="w-8 h-8 bg-[#662B2D]/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <ChevronDown
            className="w-4 h-4 text-[#662B2D] transition-transform duration-300 group-open:rotate-180"
            aria-hidden="true"
          />
        </div>
      </summary>
      <div className="px-5 pb-4 pt-0 text-sm text-muted-foreground leading-relaxed">
        {item.answer}
      </div>
    </details>
  );
}
