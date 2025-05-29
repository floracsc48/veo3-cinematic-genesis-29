
import React, { useState, useEffect } from 'react';
import { List, X } from 'phosphor-react';

interface NavigationProps {
  hasAccess: boolean;
  onDownloadClick: () => void;
  onGetAccessClick: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  hasAccess, 
  onDownloadClick, 
  onGetAccessClick 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Interface', href: '#interface' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'FAQ', href: '#faq' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-xl bg-black/20 border-b border-white/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-light text-white tracking-tight">
                Google Veo 3
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white/70 hover:text-white transition-colors duration-300 font-light text-sm tracking-wide"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="hidden md:block">
              {hasAccess ? (
                <button
                  onClick={onDownloadClick}
                  className="neuro-button px-6 py-2 text-white font-light text-sm tracking-wide"
                >
                  Download
                </button>
              ) : (
                <button
                  onClick={onGetAccessClick}
                  className="neuro-button px-6 py-2 text-white font-light text-sm tracking-wide"
                >
                  Get Early Access
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} weight="light" /> : <List size={24} weight="light" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
        isMobileMenuOpen 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        <div className={`absolute right-0 top-0 h-full w-80 max-w-full glass transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full p-6 pt-20">
            <div className="space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block text-white/70 hover:text-white transition-colors duration-300 font-light text-lg tracking-wide text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            <div className="mt-auto">
              {hasAccess ? (
                <button
                  onClick={() => {
                    onDownloadClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="neuro-button w-full px-6 py-3 text-white font-light text-sm tracking-wide"
                >
                  Download
                </button>
              ) : (
                <button
                  onClick={() => {
                    onGetAccessClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="neuro-button w-full px-6 py-3 text-white font-light text-sm tracking-wide"
                >
                  Get Early Access
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
