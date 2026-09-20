export const CONFIG = {
  feedbackEndpoint: import.meta.env.VITE_FEEDBACK_ENDPOINT || 'https://script.google.com/macros/s/AKfycby_placeholder/exec',
  androidBetaUrl:
    (import.meta.env.VITE_ANDROID_BETA_URL && !import.meta.env.VITE_ANDROID_BETA_URL.includes('SwasthIQ-Flutter'))
      ? import.meta.env.VITE_ANDROID_BETA_URL
      : 'https://github.com/Krishsarvaiya/SwasthIQ/releases/latest/download/SwasthIQ.apk',
};
