import React, { useState } from 'react';
import { m, useReducedMotion } from 'motion/react';
import { Check } from '@phosphor-icons/react';

interface ScanDemoProps {
  isStatic?: boolean;
}

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

export const ScanDemo: React.FC<ScanDemoProps> = ({ isStatic = false }) => {
  const prefersReduced = useReducedMotion();
  const shouldReduce = isStatic || Boolean(prefersReduced);
  const [replayKey, setReplayKey] = useState(0);

  const handleReplay = () => {
    if (!shouldReduce) {
      setReplayKey((k) => k + 1);
    }
  };

  return (
    <div className="relative">
      <span className="sr-only">
        Interactive sample lab report demonstrating automatic record scanning and flag detection.
      </span>

      <div
        aria-hidden="true"
        onClick={handleReplay}
        className={`w-[240px] bg-white rounded-2xl p-3 border border-swasthiq-border shadow-card select-none text-left relative overflow-hidden transition-transform duration-200 ${
          !shouldReduce ? 'cursor-pointer hover:shadow-floating hover:-translate-y-0.5' : ''
        }`}
        title={!shouldReduce ? 'Click to replay scan' : undefined}
      >
        {/* Animated Scan Line (sweeps top to bottom over ~1s after 600ms) */}
        {!shouldReduce && (
          <m.div
            key={`scan-${replayKey}`}
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: [0, 0, 230],
              opacity: [0, 1, 0],
            }}
            transition={{
              delay: 0.6,
              duration: 1.0,
              times: [0, 0.1, 1],
              ease: 'easeInOut',
            }}
            className="absolute left-0 right-0 top-0 h-[2px] bg-swasthiq-teal shadow-[0_0_8px_rgba(15,174,155,0.8)] pointer-events-none z-30"
          />
        )}

        {/* Card Header */}
        <div className="flex items-center justify-between pb-2 mb-1.5 border-b border-swasthiq-border/60">
          <div>
            <h4 className="text-[11px] font-bold text-swasthiq-text leading-tight">
              Complete Blood Count
            </h4>
            <p className="text-[9px] font-medium text-swasthiq-muted uppercase tracking-wider">
              Sample report
            </p>
          </div>
          <span className="text-[9px] font-semibold text-swasthiq-teal bg-swasthiq-insight px-1.5 py-0.5 rounded-full">
            PDF
          </span>
        </div>

        {/* Rows */}
        <div className="space-y-1" key={`rows-${replayKey}`}>
          {testRows.map((row, idx) => {
            const delay = shouldReduce ? 0 : 0.6 + idx * 0.25;

            if (row.isFlagged) {
              return (
                <div key={row.name} className="relative pt-0.5">
                  <div className="relative px-1.5 py-1 rounded-md text-[10px] overflow-hidden">
                    {/* Background tint: amber for Vitamin D */}
                    <m.div
                      initial={{ opacity: shouldReduce ? 1 : 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay, duration: shouldReduce ? 0 : 0.25 }}
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

                      <div className="flex items-center gap-1">
                        <span className="font-bold text-amber-800">
                          {row.value}
                        </span>
                        <m.span
                          initial={{ opacity: shouldReduce ? 1 : 0, scale: shouldReduce ? 1 : 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay, duration: shouldReduce ? 0 : 0.2 }}
                          className="w-3.5 h-3.5 rounded-full bg-amber-500/20 text-amber-800 flex items-center justify-center text-[9px] font-bold"
                        >
                          !
                        </m.span>
                      </div>
                    </div>
                  </div>

                  {/* Flag guidance pill */}
                  <m.div
                    initial={{ opacity: shouldReduce ? 1 : 0, y: shouldReduce ? 0 : 3 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: shouldReduce ? 0 : delay + 0.15,
                      duration: shouldReduce ? 0 : 0.3,
                    }}
                    className="mt-1 px-1.5 py-0.5 rounded-md bg-amber-50 border border-amber-300 text-amber-800 text-[8.5px] leading-tight font-medium"
                  >
                    Below range. Worth discussing with your doctor.
                  </m.div>
                </div>
              );
            }

            return (
              <div
                key={row.name}
                className="relative px-1.5 py-1 rounded-md text-[10px] overflow-hidden"
              >
                {/* Background tint: soft teal */}
                <m.div
                  initial={{ opacity: shouldReduce ? 1 : 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay, duration: shouldReduce ? 0 : 0.25 }}
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
                      initial={{ opacity: shouldReduce ? 1 : 0, scale: shouldReduce ? 1 : 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay, duration: shouldReduce ? 0 : 0.2 }}
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

        {/* Footer Note */}
        <div className="pt-2 mt-1.5 border-t border-swasthiq-border/40 text-center">
          <p className="text-[8.5px] text-swasthiq-muted/80 font-medium tracking-tight">
            Sample data for illustration
          </p>
        </div>
      </div>
    </div>
  );
};
