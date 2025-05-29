
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import InterfaceSection from '../components/InterfaceSection';
import GallerySection from '../components/GallerySection';
import FAQSection from '../components/FAQSection';
import FooterCTA from '../components/FooterCTA';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Index = () => {
  const [hasAccess, setHasAccess] = useState(false);
  
  useScrollAnimation();

  const handleAccessGranted = () => {
    setHasAccess(true);
  };

  const handleGetAccessClick = () => {
    const heroSection = document.querySelector('#hero');
    heroSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadClick = () => {
    const heroSection = document.querySelector('#hero');
    heroSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navigation 
        hasAccess={hasAccess}
        onDownloadClick={handleDownloadClick}
        onGetAccessClick={handleGetAccessClick}
      />
      
      <div id="hero">
        <HeroSection 
          hasAccess={hasAccess}
          onAccessGranted={handleAccessGranted}
        />
      </div>
      
      <FeaturesSection />
      <InterfaceSection />
      <GallerySection />
      <FAQSection />
      
      <FooterCTA 
        hasAccess={hasAccess}
        onGetAccessClick={handleGetAccessClick}
        onDownloadClick={handleDownloadClick}
      />
      
      <Footer />
    </div>
  );
};

export default Index;
