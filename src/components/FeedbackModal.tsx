/*
 * Copyright (c) 2026 Krish Sarvaiya. All rights reserved.
 * Proprietary. Not licensed for copying or reuse. See LICENSE in the repository root.
 */

import React, { useState, useEffect } from 'react';
import { X, CircleNotch, CheckCircle, WarningCircle, ChatText } from '@phosphor-icons/react';
import { CONFIG } from '../config';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose }) => {
  // Form State - Empty by default as required
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [feedbackType, setFeedbackType] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [device, setDevice] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [honeypot, setHoneypot] = useState<string>('');

  // Submission Status State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({});

  const featureOptions = [
    'Onboarding',
    'Upload & Add Records',
    'Medical Records',
    'AI Health Analysis',
    'Health Journey',
    'Doctor Access',
    'Other',
  ];

  const feedbackTypes = [
    "Something isn't working",
    'Suggestion',
    'Something is confusing',
    'Something I liked',
  ];

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && !isSubmitting) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, isSubmitting, onClose]);

  if (!isOpen) return null;

  const toggleFeature = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature) ? prev.filter((f) => f !== feature) : [...prev, feature]
    );
    if (validationErrors.feature) {
      setValidationErrors((prev) => ({ ...prev, feature: '' }));
    }
  };

  const handleSelectType = (type: string) => {
    setFeedbackType(type);
    if (validationErrors.type) {
      setValidationErrors((prev) => ({ ...prev, type: '' }));
    }
  };

  const validate = (): boolean => {
    const errors: { [key: string]: string } = {};

    if (selectedFeatures.length === 0) {
      errors.feature = 'Please select at least one feature you tried.';
    }
    if (!feedbackType) {
      errors.type = 'Please select the type of feedback.';
    }
    if (!description.trim()) {
      errors.description = 'Please describe what happened or what we should improve.';
    }
    if (!device.trim()) {
      errors.device = 'Please enter your Android device model.';
    }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const resetForm = () => {
    setSelectedFeatures([]);
    setFeedbackType('');
    setDescription('');
    setDevice('');
    setEmail('');
    setValidationErrors({});
    setErrorMessage(null);
    setIsSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (honeypot) {
      setIsSuccess(true);
      return;
    }
    let last = 0;
    try { last = Number(sessionStorage.getItem('fb_last') || 0); } catch { /* storage unavailable */ }
    if (Date.now() - last < 30000) {
      setErrorMessage('Please wait a few seconds before sending another message.');
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const payload = {
      feature: selectedFeatures.join(', '),
      feedbackType: feedbackType,
      description: description.trim(),
      device: device.trim(),
      email: email.trim(),
    };

    try {
      // Send as POST request. Note: Google Apps Script Web Apps handle POST via redirect or text/plain
      const response = await fetch(CONFIG.feedbackEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok && response.status !== 0 && response.status !== 302) {
        throw new Error(`Server returned status ${response.status}`);
      }

      try { sessionStorage.setItem('fb_last', String(Date.now())); } catch { /* ignore */ }
      setIsSuccess(true);
      // Clean form on success
      setSelectedFeatures([]);
      setFeedbackType('');
      setDescription('');
      setDevice('');
      setEmail('');
      setValidationErrors({});
    } catch (err: any) {
      console.error('Feedback submission error:', err);
      setErrorMessage("We couldn't submit your feedback. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#092A4A]/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="feedback-modal-title"
    >
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-floating border border-swasthiq-border p-6 sm:p-8 max-h-[90vh] overflow-y-auto animate-modal-in will-change-transform">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-swasthiq-border/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-swasthiq-insight text-swasthiq-teal flex items-center justify-center transition-transform duration-200 hover:scale-105">
              <ChatText size={22} weight="bold" />
            </div>
            <div>
              <h3 id="feedback-modal-title" className="text-xl font-extrabold text-swasthiq-text">
                Beta Feedback
              </h3>
              <p className="text-xs text-swasthiq-muted">Help us polish the SwasthIQ experience</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            disabled={isSubmitting}
            className="p-2 text-swasthiq-muted hover:text-swasthiq-text rounded-xl hover:bg-swasthiq-bg transition-all duration-150 active:scale-95"
            aria-label="Close modal"
          >
            <X size={20} weight="bold" />
          </button>
        </div>

        {/* Success State */}
        {isSuccess ? (
          <div className="py-10 text-center space-y-4 animate-fade-up">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-3xl animate-scale-check shadow-sm">
              💚
            </div>
            <div className="space-y-1">
              <h4 className="text-2xl font-extrabold text-swasthiq-text">Thank you!</h4>
              <p className="text-sm text-swasthiq-text/75 max-w-sm mx-auto">
                Your feedback helps us make SwasthIQ better.
              </p>
              <p className="text-xs text-swasthiq-muted max-w-sm mx-auto">
                We've received your feedback successfully.
              </p>
            </div>
            <div className="pt-4">
              <button
                type="button"
                onClick={() => {
                  resetForm();
                  onClose();
                }}
                className="px-8 py-3 rounded-full text-sm font-bold text-white bg-swasthiq-teal hover:bg-swasthiq-tealHover shadow-sm hover:shadow-md transition-all duration-150 transform hover:-translate-y-0.5 active:scale-95"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Feedback Form */
          <form onSubmit={handleSubmit} className="space-y-6 pt-5">
            {/* Error Banner with smooth entrance */}
            {errorMessage && (
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm animate-screen-enter">
                <WarningCircle size={20} className="shrink-0 mt-0.5" weight="fill" />
                <div className="flex-1">
                  <span>{errorMessage}</span>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="ml-2 font-bold text-rose-700 underline underline-offset-2 hover:text-rose-900 transition-colors"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            )}

            {/* 1. What did you try? */}
            <div>
              <label className="block text-sm font-bold text-swasthiq-text mb-1.5">
                What did you try? <span className="text-rose-500">*</span>
              </label>
              <p className="text-xs text-swasthiq-muted mb-3">Select all features you tested:</p>
              <div className="flex flex-wrap gap-2">
                {featureOptions.map((item) => {
                  const isSelected = selectedFeatures.includes(item);
                  return (
                    <button
                      type="button"
                      key={item}
                      onClick={() => toggleFeature(item)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                        isSelected
                          ? 'bg-swasthiq-teal text-white shadow-sm'
                          : 'bg-swasthiq-bg text-swasthiq-text border border-swasthiq-border hover:border-swasthiq-teal/50'
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
              {validationErrors.feature && (
                <p className="text-xs text-rose-500 font-medium mt-1.5">{validationErrors.feature}</p>
              )}
            </div>

            {/* 2. What type of feedback? */}
            <div>
              <label className="block text-sm font-bold text-swasthiq-text mb-1.5">
                What type of feedback? <span className="text-rose-500">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {feedbackTypes.map((type) => {
                  const isSelected = feedbackType === type;
                  return (
                    <button
                      type="button"
                      key={type}
                      onClick={() => handleSelectType(type)}
                      className={`p-3 rounded-xl text-xs font-semibold text-left transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-swasthiq-insight border-2 border-swasthiq-teal text-swasthiq-text'
                          : 'bg-swasthiq-bg text-swasthiq-text border border-swasthiq-border hover:border-swasthiq-teal/40'
                      }`}
                    >
                      <span>{type}</span>
                      {isSelected && <CheckCircle size={16} className="text-swasthiq-teal shrink-0" weight="fill" />}
                    </button>
                  );
                })}
              </div>
              {validationErrors.type && (
                <p className="text-xs text-rose-500 font-medium mt-1.5">{validationErrors.type}</p>
              )}
            </div>

            {/* 3. Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-bold text-swasthiq-text mb-1.5">
                What happened or what should we improve? <span className="text-rose-500">*</span>
              </label>
              <textarea
                id="description"
                rows={3}
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                  if (validationErrors.description) {
                    setValidationErrors((prev) => ({ ...prev, description: '' }));
                  }
                }}
                placeholder="Share your detailed feedback or describe any bug you encountered..."
                className="w-full p-3 rounded-2xl bg-swasthiq-bg border border-swasthiq-border text-sm text-swasthiq-text placeholder:text-swasthiq-muted/60 focus:outline-none focus:ring-2 focus:ring-swasthiq-teal resize-none"
              />
              {validationErrors.description && (
                <p className="text-xs text-rose-500 font-medium mt-1">{validationErrors.description}</p>
              )}
            </div>

            {/* 4. Android Device */}
            <div>
              <label htmlFor="device" className="block text-sm font-bold text-swasthiq-text mb-1.5">
                Android device <span className="text-rose-500">*</span>
              </label>
              <input
                id="device"
                type="text"
                value={device}
                onChange={(e) => {
                  setDevice(e.target.value);
                  if (validationErrors.device) {
                    setValidationErrors((prev) => ({ ...prev, device: '' }));
                  }
                }}
                placeholder="e.g. Samsung S23, OnePlus 12, Pixel 8"
                className="w-full px-3.5 py-2.5 rounded-xl bg-swasthiq-bg border border-swasthiq-border text-sm text-swasthiq-text placeholder:text-swasthiq-muted/60 focus:outline-none focus:ring-2 focus:ring-swasthiq-teal"
              />
              {validationErrors.device && (
                <p className="text-xs text-rose-500 font-medium mt-1">{validationErrors.device}</p>
              )}
            </div>

            {/* 5. Email (Optional) */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="email" className="block text-sm font-bold text-swasthiq-text">
                  Email <span className="text-xs font-normal text-swasthiq-muted">(Optional)</span>
                </label>
                <span className="text-[11px] text-swasthiq-muted">Only needed if you'd like us to follow up.</span>
              </div>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (validationErrors.email) {
                    setValidationErrors((prev) => ({ ...prev, email: '' }));
                  }
                }}
                placeholder="you@example.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-swasthiq-bg border border-swasthiq-border text-sm text-swasthiq-text placeholder:text-swasthiq-muted/60 focus:outline-none focus:ring-2 focus:ring-swasthiq-teal"
              />
              {validationErrors.email && (
                <p className="text-xs text-rose-500 font-medium mt-1">{validationErrors.email}</p>
              )}
            </div>

            <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} className="hidden" />

            {/* Privacy Note */}
            <p className="text-xs text-swasthiq-muted/80 bg-swasthiq-bg p-3 rounded-xl border border-swasthiq-border/60">
              🔒 <strong>Privacy note:</strong> Please don't include personal medical information in your feedback.
            </p>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="px-5 py-2.5 rounded-full text-sm font-semibold text-swasthiq-text hover:bg-swasthiq-bg transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 px-7 py-2.5 rounded-full text-sm font-bold text-white bg-swasthiq-teal hover:bg-swasthiq-tealHover shadow-sm disabled:opacity-60 transition-all"
              >
                {isSubmitting ? (
                  <>
                    <CircleNotch size={18} className="animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <span>Submit Feedback</span>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
