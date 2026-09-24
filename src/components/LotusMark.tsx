import React from 'react';
import { m, useReducedMotion } from 'motion/react';

export const LotusMark: React.FC = () => {
  const prefersReduced = useReducedMotion();
  const shouldReduce = Boolean(prefersReduced);

  const easeOutCubic = [0.16, 1, 0.3, 1] as const;

  return (
    <div
      aria-hidden="true"
      className="w-full h-full pointer-events-none select-none"
    >
      <svg
        viewBox="0 0 1000 750"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          {/* Head Circle Gradient */}
          <linearGradient id="lotusHeadGrad" x1="420" y1="30" x2="570" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00E5C0" />
            <stop offset="50%" stopColor="#0FAE9B" />
            <stop offset="100%" stopColor="#092A4A" />
          </linearGradient>

          {/* Central Drop Gradient */}
          <linearGradient id="lotusDropGrad" x1="500" y1="320" x2="500" y2="715" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00A3FF" />
            <stop offset="60%" stopColor="#006AD8" />
            <stop offset="100%" stopColor="#004394" />
          </linearGradient>

          {/* Left Inner Dark Teal Petal */}
          <linearGradient id="lotusInnerLeft" x1="200" y1="150" x2="500" y2="390" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00D2B4" />
            <stop offset="60%" stopColor="#086B60" />
            <stop offset="100%" stopColor="#073B4C" />
          </linearGradient>

          {/* Right Inner Dark Teal Petal */}
          <linearGradient id="lotusInnerRight" x1="800" y1="150" x2="500" y2="390" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00D2B4" />
            <stop offset="60%" stopColor="#086B60" />
            <stop offset="100%" stopColor="#073B4C" />
          </linearGradient>

          {/* Left Teal Leaf */}
          <linearGradient id="lotusLeafLeft" x1="165" y1="210" x2="480" y2="715" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00E5B8" />
            <stop offset="45%" stopColor="#0FAE9B" />
            <stop offset="100%" stopColor="#055B51" />
          </linearGradient>

          {/* Right Teal Leaf */}
          <linearGradient id="lotusLeafRight" x1="835" y1="210" x2="520" y2="715" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00E5B8" />
            <stop offset="45%" stopColor="#0FAE9B" />
            <stop offset="100%" stopColor="#055B51" />
          </linearGradient>

          {/* Leaf Shadow Underside */}
          <linearGradient id="lotusLeafShadow" x1="300" y1="400" x2="500" y2="715" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#054A43" />
            <stop offset="100%" stopColor="#022B26" />
          </linearGradient>

          {/* Left Outer Blue Petal */}
          <linearGradient id="lotusOuterBlueLeft" x1="40" y1="380" x2="500" y2="715" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0088FF" />
            <stop offset="50%" stopColor="#005EDB" />
            <stop offset="100%" stopColor="#00358E" />
          </linearGradient>

          {/* Right Outer Blue Petal */}
          <linearGradient id="lotusOuterBlueRight" x1="960" y1="380" x2="500" y2="715" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0088FF" />
            <stop offset="50%" stopColor="#005EDB" />
            <stop offset="100%" stopColor="#00358E" />
          </linearGradient>

          {/* Outer Blue Shadow */}
          <linearGradient id="lotusBlueShadow" x1="250" y1="550" x2="500" y2="715" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#002D6E" />
            <stop offset="100%" stopColor="#001740" />
          </linearGradient>
        </defs>

        {/* 1. Outer Blue Petals Group (Opens first at t=0s, rotated 25 deg toward center) */}
        <g id="outer-blue-petals">
          {/* Left Outer Petal */}
          <m.g
            initial={{ rotate: shouldReduce ? 0 : 25, opacity: shouldReduce ? 1 : 0.4 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: shouldReduce ? 0 : 1.2, ease: easeOutCubic }}
            style={{ transformOrigin: '500px 715px' }}
          >
            {/* Shadow underside */}
            <path
              d="M 500 715 C 330 715 130 630 42 380 C 110 530 250 670 500 715 Z"
              fill="url(#lotusBlueShadow)"
            />
            {/* Main petal face */}
            <path
              d="M 500 715 C 330 715 130 630 42 380 C 80 470 170 570 330 640 C 400 670 460 700 500 715 Z"
              fill="url(#lotusOuterBlueLeft)"
            />
          </m.g>

          {/* Right Outer Petal */}
          <m.g
            initial={{ rotate: shouldReduce ? 0 : -25, opacity: shouldReduce ? 1 : 0.4 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: shouldReduce ? 0 : 1.2, ease: easeOutCubic }}
            style={{ transformOrigin: '500px 715px' }}
          >
            {/* Shadow underside */}
            <path
              d="M 500 715 C 670 715 870 630 958 380 C 890 530 750 670 500 715 Z"
              fill="url(#lotusBlueShadow)"
            />
            {/* Main petal face */}
            <path
              d="M 500 715 C 670 715 870 630 958 380 C 920 470 830 570 670 640 C 600 670 540 700 500 715 Z"
              fill="url(#lotusOuterBlueRight)"
            />
          </m.g>
        </g>

        {/* 2. Large Teal-Green Leaves (Opens staggered +90ms, rotated 18 deg toward center) */}
        <g id="large-teal-leaves">
          {/* Left Leaf */}
          <m.g
            initial={{ rotate: shouldReduce ? 0 : 18, opacity: shouldReduce ? 1 : 0.5 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ delay: shouldReduce ? 0 : 0.09, duration: shouldReduce ? 0 : 1.2, ease: easeOutCubic }}
            style={{ transformOrigin: '500px 715px' }}
          >
            {/* Shadow crease */}
            <path
              d="M 480 715 C 360 715 240 600 185 450 C 170 410 165 375 165 360 C 165 520 330 715 480 715 Z"
              fill="url(#lotusLeafShadow)"
            />
            {/* Main leaf face */}
            <path
              d="M 480 715 C 330 715 165 520 165 360 C 165 295 175 240 190 205 C 225 310 310 460 380 540 C 430 600 465 660 480 715 Z"
              fill="url(#lotusLeafLeft)"
            />
          </m.g>

          {/* Right Leaf */}
          <m.g
            initial={{ rotate: shouldReduce ? 0 : -18, opacity: shouldReduce ? 1 : 0.5 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ delay: shouldReduce ? 0 : 0.09, duration: shouldReduce ? 0 : 1.2, ease: easeOutCubic }}
            style={{ transformOrigin: '500px 715px' }}
          >
            {/* Shadow crease */}
            <path
              d="M 520 715 C 640 715 760 600 815 450 C 830 410 835 375 835 360 C 835 520 670 715 520 715 Z"
              fill="url(#lotusLeafShadow)"
            />
            {/* Main leaf face */}
            <path
              d="M 520 715 C 670 715 835 520 835 360 C 835 295 825 240 810 205 C 775 310 690 460 620 540 C 570 600 535 660 520 715 Z"
              fill="url(#lotusLeafRight)"
            />
          </m.g>
        </g>

        {/* 3. Inner Dark-Teal Petals (Opens staggered +180ms, rotated 12 deg toward center) */}
        <g id="inner-dark-teal-petals">
          {/* Left Inner Petal */}
          <m.path
            d="M 500 215 C 380 205 280 175 200 145 C 275 240 375 330 500 395 C 490 330 495 260 500 215 Z"
            fill="url(#lotusInnerLeft)"
            initial={{ rotate: shouldReduce ? 0 : 12, opacity: shouldReduce ? 1 : 0.6 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ delay: shouldReduce ? 0 : 0.18, duration: shouldReduce ? 0 : 1.2, ease: easeOutCubic }}
            style={{ transformOrigin: '500px 395px' }}
          />

          {/* Right Inner Petal */}
          <m.path
            d="M 500 215 C 620 205 720 175 800 145 C 725 240 625 330 500 395 C 510 330 505 260 500 215 Z"
            fill="url(#lotusInnerRight)"
            initial={{ rotate: shouldReduce ? 0 : -12, opacity: shouldReduce ? 1 : 0.6 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ delay: shouldReduce ? 0 : 0.18, duration: shouldReduce ? 0 : 1.2, ease: easeOutCubic }}
            style={{ transformOrigin: '500px 395px' }}
          />
        </g>

        {/* 4. Central Blue Drop with White Cross (Fades in at t=0.35s) */}
        <m.g
          id="central-drop-cross"
          initial={{ opacity: shouldReduce ? 1 : 0, scale: shouldReduce ? 1 : 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: shouldReduce ? 0 : 0.35, duration: shouldReduce ? 0 : 0.8, ease: 'easeOut' }}
          style={{ transformOrigin: '500px 540px' }}
        >
          {/* Drop Body */}
          <path
            d="M 500 320 C 470 390 380 460 380 550 C 380 645 435 715 500 715 C 565 715 620 645 620 550 C 620 460 530 390 500 320 Z"
            fill="url(#lotusDropGrad)"
          />

          {/* White Medical Cross */}
          <g id="medical-cross">
            <rect x="430" y="524" width="140" height="42" rx="8" fill="#ffffff" />
            <rect x="479" y="475" width="42" height="140" rx="8" fill="#ffffff" />
          </g>
        </m.g>

        {/* 5. Head Circle (Settles in last with small scale-up at t=0.55s) */}
        <m.circle
          id="head-circle"
          cx="500"
          cy="115"
          r="90"
          fill="url(#lotusHeadGrad)"
          initial={{ opacity: shouldReduce ? 1 : 0, scale: shouldReduce ? 1 : 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: shouldReduce ? 0 : 0.55, duration: shouldReduce ? 0 : 0.7, ease: [0.34, 1.56, 0.64, 1] as const }}
          style={{ transformOrigin: '500px 115px' }}
        />
      </svg>
    </div>
  );
};
