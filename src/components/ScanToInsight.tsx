import React, { useState } from 'react';
import { m, useReducedMotion } from 'motion/react';
import {
  FileText,
  Check,
  Sparkle,
  ArrowCounterClockwise,
} from '@phosphor-icons/react';

interface TestRow {
  name: string;
  value: string;
  ref: string;
  isFlagged?: boolean;
}

const testRows: TestRow[] = [
  { name: 'Hemoglobin', value: '13.8 g/dL', ref: '13.0–17.0' },
  { name: 'WBC', value: '7,200 /uL', ref: '4,000–11,000' },
  { name: 'Platelets', value: '250 x10^3/uL', ref: '150–450' },
  { name: 'RBC', value: '5.1 million/uL', ref: '4.5–5.9' },
  { name: 'Vitamin D', value: '18 ng/mL', ref: '20–100', isFlagged: true },
];

export const ScanToInsight: React.FC = () => {
  const prefersReduced = useReducedMotion();
  const shouldReduce = Boolean(prefersReduced);
  const [replayKey, setReplayKey] = useState(0);

  const handleReplay = () => {
    if (!shouldReduce) {
      setReplayKey((k) => k + 1);
    }
  };

  return (
    <section id="scan-demo" className="py-12 md:py-16 bg-swasthiq-bg border-b border-swasthiq-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-swasthiq-insight text-swasthiq-teal text-xs font-bold uppercase tracking-wider">
            <Sparkle size={14} weight="fill" />
            <span>Process Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-swasthiq-text tracking-tight">
            From a photo of your report to a plain-language summary.
          </h2>
          <p className="text-base sm:text-lg text-swasthiq-text/75">
            Here is what happens after you add a lab report.
          </p>
        </div>

        {/* Screen Reader Summary */}
        <span className="sr-only">
          Step-by-step visual demonstration of SwasthIQ scanning a sample CBC lab report, extracting validated biomarkers with reference ranges, and generating a plain-language AI health summary.
        </span>

        {/* 3 Step Cards Grid with Desktop Visual Connector */}
        <m.div
          key={`process-${replayKey}`}
          aria-hidden="true"
          initial={shouldReduce ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
        >
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-[18%] right-[18%] h-0.5 bg-gradient-to-r from-swasthiq-teal/20 via-swasthiq-teal/40 to-swasthiq-teal/20 -z-0" />

          {/* CARD 1: Add your report */}
          <div className="rounded-3xl p-6 sm:p-7 border border-swasthiq-border bg-swasthiq-card shadow-soft flex flex-col justify-between relative z-10">
            <div>
              {/* Step Badge & Title */}
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-swasthiq-insight text-swasthiq-teal font-extrabold text-xs flex items-center justify-center shrink-0">
                  01
                </span>
                <h3 className="text-lg font-bold text-swasthiq-text">
                  Add your report
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-swasthiq-text/70 mb-5">
                Photograph or upload your blood test or prescription document.
              </p>

              {/* Report Paper Preview with Scan Line */}
              <div className="bg-white rounded-2xl p-4 border border-swasthiq-border/80 shadow-sm relative overflow-hidden text-left">
                {/* Sweeping Teal Scan Line */}
                {!shouldReduce && (
                  <m.div
                    variants={{
                      hidden: { y: 0, opacity: 0 },
                      visible: {
                        y: [0, 0, 240],
                        opacity: [0, 1, 0],
                        transition: {
                          delay: 0.2,
                          duration: 1.2,
                          times: [0, 0.1, 1],
                          ease: 'easeInOut',
                        },
                      },
                    }}
                    className="absolute left-0 right-0 top-0 h-[2px] bg-swasthiq-teal shadow-[0_0_8px_rgba(15,174,155,0.85)] pointer-events-none z-20"
                  />
                )}

                {/* Header text inside report */}
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-swasthiq-border/60">
                  <div className="flex items-center gap-2">
                    <FileText size={16} className="text-swasthiq-teal" weight="bold" />
                    <div>
                      <h4 className="text-xs font-bold text-swasthiq-text leading-tight">
                        Complete Blood Count
                      </h4>
                      <p className="text-[9px] font-medium text-swasthiq-muted uppercase tracking-wider">
                        Sample report
                      </p>
                    </div>
                  </div>
                  <span className="text-[9px] font-semibold text-swasthiq-teal bg-swasthiq-insight px-2 py-0.5 rounded-full">
                    Document
                  </span>
                </div>

                {/* Unprocessed rows representation */}
                <div className="space-y-1.5">
                  {testRows.map((row) => (
                    <div
                      key={`card1-${row.name}`}
                      className="px-2 py-1 rounded-md text-[10px] flex items-center justify-between bg-swasthiq-bg/60"
                    >
                      <div>
                        <span className="font-medium text-swasthiq-text/80">
                          {row.name}
                        </span>
                        <span className="text-[8px] text-swasthiq-muted ml-1.5">
                          Ref: {row.ref}
                        </span>
                      </div>
                      <span className="font-semibold text-swasthiq-text/90">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 mt-2 border-t border-swasthiq-border/40 text-left">
              <span className="text-[10px] font-medium text-swasthiq-muted">
                Accepts smartphone photos, PDFs, and paper scans.
              </span>
            </div>
          </div>

          {/* CARD 2: Values are extracted */}
          <div className="rounded-3xl p-6 sm:p-7 border border-swasthiq-border bg-swasthiq-card shadow-soft flex flex-col justify-between relative z-10">
            <div>
              {/* Step Badge & Title */}
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-swasthiq-insight text-swasthiq-teal font-extrabold text-xs flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg font-bold text-swasthiq-text">
                  Values are extracted
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-swasthiq-text/70 mb-5">
                Every biomarker, unit, and reference interval is checked cleanly.
              </p>

              {/* Parsed List Container */}
              <div className="bg-white rounded-2xl p-4 border border-swasthiq-border/80 shadow-sm space-y-1.5 text-left">
                {testRows.map((row, idx) => {
                  const delay = shouldReduce ? 0 : 1.2 + idx * 0.25;

                  if (row.isFlagged) {
                    return (
                      <div key={`card2-${row.name}`} className="relative pt-0.5">
                        <div className="relative px-2 py-1 rounded-md text-[10px] overflow-hidden">
                          {/* Amber background tint */}
                          <m.div
                            variants={{
                              hidden: { opacity: shouldReduce ? 1 : 0 },
                              visible: {
                                opacity: 1,
                                transition: { delay, duration: shouldReduce ? 0 : 0.25 },
                              },
                            }}
                            className="absolute inset-0 bg-amber-50 border border-amber-300 rounded-md -z-10"
                          />

                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-semibold text-amber-800 leading-tight">
                                {row.name}
                              </div>
                              <div className="text-[8px] text-amber-800/70">
                                Ref: {row.ref}
                              </div>
                            </div>
                            <span className="font-bold text-amber-800">
                              {row.value}
                            </span>
                          </div>
                        </div>

                        {/* Below range pill */}
                        <m.div
                          variants={{
                            hidden: { opacity: shouldReduce ? 1 : 0, y: shouldReduce ? 0 : 3 },
                            visible: {
                              opacity: 1,
                              y: 0,
                              transition: {
                                delay: shouldReduce ? 0 : delay + 0.15,
                                duration: shouldReduce ? 0 : 0.3,
                              },
                            },
                          }}
                          className="mt-1 px-2 py-0.5 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-[9px] font-semibold inline-flex items-center gap-1"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                          <span>Below range</span>
                        </m.div>
                      </div>
                    );
                  }

                  return (
                    <div
                      key={`card2-${row.name}`}
                      className="relative px-2 py-1 rounded-md text-[10px] overflow-hidden"
                    >
                      {/* Soft teal background tint */}
                      <m.div
                        variants={{
                          hidden: { opacity: shouldReduce ? 1 : 0 },
                          visible: {
                            opacity: 1,
                            transition: { delay, duration: shouldReduce ? 0 : 0.25 },
                          },
                        }}
                        className="absolute inset-0 bg-swasthiq-insight/70 rounded-md -z-10"
                      />

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-swasthiq-text leading-tight">
                            {row.name}
                          </div>
                          <div className="text-[8px] text-swasthiq-muted">
                            Ref: {row.ref}
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <span className="font-semibold text-swasthiq-text">
                            {row.value}
                          </span>
                          <m.span
                            variants={{
                              hidden: { opacity: shouldReduce ? 1 : 0, scale: shouldReduce ? 1 : 0.5 },
                              visible: {
                                opacity: 1,
                                scale: 1,
                                transition: { delay, duration: shouldReduce ? 0 : 0.2 },
                              },
                            }}
                            className="w-3.5 h-3.5 rounded-full bg-swasthiq-teal/15 text-swasthiq-teal flex items-center justify-center shrink-0"
                          >
                            <Check size={9} weight="bold" />
                          </m.span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 mt-2 border-t border-swasthiq-border/40 text-left">
              <span className="text-[10px] font-medium text-swasthiq-muted">
                Recognizes standard laboratory reference ranges automatically.
              </span>
            </div>
          </div>

          {/* CARD 3: You get a plain-language summary */}
          <div className="rounded-3xl p-6 sm:p-7 border border-swasthiq-border bg-swasthiq-card shadow-soft flex flex-col justify-between relative z-10">
            <div>
              {/* Step Badge & Title */}
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-swasthiq-insight text-swasthiq-teal font-extrabold text-xs flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg font-bold text-swasthiq-text">
                  You get a plain-language summary
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-swasthiq-text/70 mb-5">
                Understand your numbers clearly before your next consultation.
              </p>

              {/* AI Health Summary Card */}
              <m.div
                variants={{
                  hidden: { opacity: shouldReduce ? 1 : 0, y: shouldReduce ? 0 : 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: shouldReduce ? 0 : 2.5,
                      duration: shouldReduce ? 0 : 0.6,
                      ease: 'easeOut',
                    },
                  },
                }}
                className="bg-swasthiq-insight rounded-2xl p-4 sm:p-5 border border-swasthiq-teal/30 shadow-sm text-left"
              >
                <div className="flex items-center gap-2 mb-2 pb-2 border-b border-swasthiq-teal/20">
                  <Sparkle size={18} className="text-swasthiq-teal" weight="fill" />
                  <h4 className="text-sm font-bold text-swasthiq-text">
                    AI Health Summary
                  </h4>
                </div>

                <p className="text-xs sm:text-sm text-swasthiq-text/90 leading-relaxed font-normal">
                  Most reported results are within the laboratory&apos;s reference ranges. Vitamin D is below range and worth discussing with your doctor.
                </p>

                <div className="mt-4 pt-3 border-t border-swasthiq-teal/20">
                  <h5 className="text-[11px] font-bold text-swasthiq-text uppercase tracking-wider mb-2">
                    What to do next
                  </h5>
                  <ul className="space-y-1.5 text-xs text-swasthiq-text/80">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-swasthiq-teal mt-1.5 shrink-0" />
                      <span>Review this report with your doctor</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-swasthiq-teal mt-1.5 shrink-0" />
                      <span>Ask whether repeat testing is needed</span>
                    </li>
                  </ul>
                </div>
              </m.div>
            </div>

            <div className="pt-4 mt-2 border-t border-swasthiq-border/40 text-left">
              <span className="text-[10px] font-medium text-swasthiq-muted">
                Educational synthesis to empower patient-doctor conversations.
              </span>
            </div>
          </div>
        </m.div>

        {/* Section Footer: Replay Button & Visible Sample Data Note */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-swasthiq-border/60">
          <p className="text-xs font-semibold text-swasthiq-muted">
            Sample data for illustration
          </p>

          <button
            type="button"
            onClick={handleReplay}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-swasthiq-teal bg-swasthiq-card hover:bg-swasthiq-insight border border-swasthiq-border shadow-soft transition-all duration-150 transform hover:-translate-y-0.5 active:scale-95"
          >
            <ArrowCounterClockwise size={14} weight="bold" />
            <span>Replay demonstration</span>
          </button>
        </div>
      </div>
    </section>
  );
};
