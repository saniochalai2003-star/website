import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { TrendingSection } from './components/TrendingSection';
import { HallOfFame } from './components/HallOfFame';
import { SocialFeed } from './components/SocialFeed';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-neon-pink selection:text-white">
      <Header />
      <main>
        <Hero />
        <TrustSection />
        <TrendingSection />
        <HallOfFame />
        <SocialFeed />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
