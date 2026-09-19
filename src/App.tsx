import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OnePlace } from './components/OnePlace';
import { CoreFeatures } from './components/CoreFeatures';
import { AppShowcase } from './components/AppShowcase';
import { HowItWorks } from './components/HowItWorks';
import { DoctorAccess } from './components/DoctorAccess';
import { BetaCTA } from './components/BetaCTA';
import { FeedbackModal } from './components/FeedbackModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  return (
    <div className="min-h-screen bg-swasthiq-bg text-swasthiq-text flex flex-col selection:bg-swasthiq-insight selection:text-swasthiq-teal">
      {/* 1. Navbar */}
      <Navbar onOpenFeedback={() => setIsFeedbackOpen(true)} />

      <main className="flex-grow">
        {/* 2. Hero */}
        <Hero />

        {/* 3. One Place for Your Health */}
        <OnePlace />

        {/* 4. Core Features */}
        <CoreFeatures />

        {/* 5. Real App Showcase */}
        <AppShowcase />

        {/* 6. How It Works */}
        <HowItWorks />

        {/* 7. Doctor Access */}
        <DoctorAccess />

        {/* 8. Android Beta CTA */}
        <BetaCTA onOpenFeedback={() => setIsFeedbackOpen(true)} />
      </main>

      {/* 9. Feedback Modal */}
      <FeedbackModal
        isOpen={isFeedbackOpen}
        onClose={() => setIsFeedbackOpen(false)}
      />

      {/* 10. Footer */}
      <Footer onOpenFeedback={() => setIsFeedbackOpen(true)} />
    </div>
  );
};

export default App;
