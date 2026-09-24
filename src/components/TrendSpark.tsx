import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

const dataPoints = [
  { month: 'Mar', val: 13.1, x: 24, y: 51 },
  { month: 'Apr', val: 13.0, x: 72, y: 56 },
  { month: 'May', val: 13.4, x: 120, y: 36 },
  { month: 'Jun', val: 13.5, x: 168, y: 31 },
  { month: 'Jul', val: 13.7, x: 216, y: 21 },
  { month: 'Aug', val: 13.8, x: 264, y: 16 },
];

const curvePath =
  'M 24 51 C 48 53, 54 56, 72 56 C 90 56, 102 40, 120 36 C 138 32, 150 32, 168 31 C 186 30, 200 23, 216 21 C 232 19, 248 16, 264 16';

export const TrendSpark: React.FC = () => {
  const prefersReduced = useReducedMotion();
  const shouldReduce = Boolean(prefersReduced);

  return (
    <div className="w-full mt-4 pt-3 border-t border-swasthiq-border/60">
      <span className="sr-only">
        Hemoglobin trend chart from March to August showing gradual rise from 13.1 to 13.8 g/dL. Sample data for illustration.
      </span>

      <motion.div
        aria-hidden="true"
        initial={shouldReduce ? 'visible' : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        className="w-full bg-swasthiq-bg/60 rounded-2xl p-3 border border-swasthiq-border/50"
      >
        {/* Metric Header */}
        <div className="flex items-center justify-between text-xs pb-1">
          <span className="font-semibold text-swasthiq-text text-[11px]">
            Hemoglobin (Hb)
          </span>
          <span className="text-[10px] font-bold text-swasthiq-teal bg-swasthiq-insight px-2 py-0.5 rounded-full">
            Optimal trend
          </span>
        </div>

        {/* SVG Chart Container (reserved 96px height) */}
        <div className="w-full h-24 relative flex items-center justify-center">
          <svg
            viewBox="0 0 320 84"
            className="w-full h-full overflow-visible"
            fill="none"
          >
            {/* Subtle Horizontal Reference Gridlines */}
            <line
              x1="20"
              y1="16"
              x2="268"
              y2="16"
              stroke="#0FAE9B"
              strokeOpacity="0.12"
              strokeDasharray="3 3"
            />
            <line
              x1="20"
              y1="56"
              x2="268"
              y2="56"
              stroke="#0FAE9B"
              strokeOpacity="0.12"
              strokeDasharray="3 3"
            />

            {/* Background subtle gradient area */}
            <defs>
              <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0FAE9B" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#0FAE9B" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path
              d={`${curvePath} L 264 68 L 24 68 Z`}
              fill="url(#trendGradient)"
              opacity={0.7}
            />

            {/* Smooth Teal Trend Line */}
            <motion.path
              d={curvePath}
              stroke="#0FAE9B"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: {
                  pathLength: 1,
                  opacity: 1,
                  transition: {
                    duration: shouldReduce ? 0 : 1.4,
                    ease: 'easeOut',
                  },
                },
              }}
            />

            {/* Data Dots */}
            {dataPoints.map((pt, idx) => (
              <motion.circle
                key={pt.month}
                cx={pt.x}
                cy={pt.y}
                r={idx === dataPoints.length - 1 ? 4.5 : 3.5}
                fill={idx === dataPoints.length - 1 ? '#0FAE9B' : '#ffffff'}
                stroke="#0FAE9B"
                strokeWidth={idx === dataPoints.length - 1 ? 2.5 : 2}
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: shouldReduce ? 0 : 1.4 + idx * 0.08,
                      duration: shouldReduce ? 0 : 0.25,
                      ease: 'easeOut',
                    },
                  },
                }}
                style={{ transformOrigin: `${pt.x}px ${pt.y}px` }}
              />
            ))}

            {/* Final Value Callout near last point */}
            <motion.g
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: shouldReduce ? 0 : 1.85,
                    duration: shouldReduce ? 0 : 0.3,
                  },
                },
              }}
              style={{ transformOrigin: '270px 16px' }}
            >
              <rect
                x="272"
                y="6"
                width="46"
                height="20"
                rx="6"
                fill="#0FAE9B"
              />
              <text
                x="295"
                y="19"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="9"
                fontWeight="700"
              >
                13.8 g/dL
              </text>
            </motion.g>

            {/* Tiny Month Labels along X-Axis */}
            {dataPoints.map((pt) => (
              <text
                key={`label-${pt.month}`}
                x={pt.x}
                y="76"
                textAnchor="middle"
                fill="#5A7184"
                fontSize="8.5"
                fontWeight="500"
              >
                {pt.month}
              </text>
            ))}
          </svg>
        </div>

        {/* Visibility note */}
        <p className="text-[8.5px] text-swasthiq-muted/80 text-center pt-1 font-medium">
          Sample data for illustration
        </p>
      </motion.div>
    </div>
  );
};
