import React from 'react';
import Navbar from '@/components/shared/organisms/Navbar';
import Hero from '../organisms/Hero';
import FeaturedPlans from '../organisms/FeaturedPlans';
import Footer from '@/components/shared/organisms/Footer';

const HomeTemplate: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light font-display text-slate-900 selection:bg-primary/20 selection:text-primary">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <main className="flex-1 bg-white dark:bg-background-dark">
        {/* Featured Plans */}
        <FeaturedPlans />

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomeTemplate;
