/*
 * Copyright (c) 2026 Krish Sarvaiya. All rights reserved.
 * Proprietary. Not licensed for copying or reuse. See LICENSE in the repository root.
 */

export const CONFIG = {
  feedbackEndpoint: import.meta.env.VITE_FEEDBACK_ENDPOINT || 'https://script.google.com/macros/s/AKfycby_placeholder/exec',
  androidBetaUrl: 'https://github.com/Krishsarvaiya/SwasthIQ/releases/latest/download/SwasthIQ.apk',
  apkSha256: import.meta.env.VITE_APK_SHA256 || '',
};
