
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TechSection from '@/components/TechSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-soft-cream">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <TechSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
