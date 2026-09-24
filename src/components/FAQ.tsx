import React from 'react';
import { CaretDown } from '@phosphor-icons/react';

const faqs = [
  ['Who can see my records?', 'Only you. A doctor can view records only after you approve their request, and only for the time you choose.'],
  ['Is SwasthIQ a diagnosis tool?', 'No. The insights explain your reports in plain language. Always discuss results and decisions with your doctor.'],
  ['Which phones does the beta support?', 'Android 8.0 (API 26) or newer. An iPhone version is not available yet.'],
  ['Does it cost anything?', 'The beta is free while it is in public testing.'],
  ['How do I check my download is genuine?', 'Compare the SHA-256 checksum shown in the download section with the file you received.'],
  ['I found a bug. What should I do?', 'Use the Feedback button and tell us your phone model. Please leave personal medical details out of the message.'],
];

export const FAQ: React.FC = () => (
  <section id="faq" className="py-20 md:py-28 bg-swasthiq-bg">
    <div className="max-w-3xl mx-auto px-4 sm:px-6">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-swasthiq-text tracking-tight mb-10">Questions before you install</h2>
      <div className="space-y-3">
        {faqs.map(([q, a]) => (
          <details key={q} className="group rounded-2xl bg-swasthiq-card border border-swasthiq-border px-6 py-4 open:shadow-soft">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-swasthiq-text focus:outline-none focus-visible:ring-2 focus-visible:ring-swasthiq-teal rounded-lg">
              {q}
              <CaretDown size={18} weight="bold" className="shrink-0 transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <p className="pt-3 text-swasthiq-text/75 leading-relaxed">{a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);
