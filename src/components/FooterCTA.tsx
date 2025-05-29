
import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface FooterCTAProps {
  hasAccess: boolean;
  onGetAccessClick: () => void;
  onDownloadClick: () => void;
}

const FooterCTA: React.FC<FooterCTAProps> = ({ 
  hasAccess, 
  onGetAccessClick, 
  onDownloadClick 
}) => {
  const { ref, isIntersecting } = useIntersectionObserver();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-32 px-4 bg-gradient-to-t from-black/50 to-transparent">
      <div className="max-w-4xl mx-auto">
        <div 
          ref={ref}
          className={`text-center glass-card p-12 animate-in ${isIntersecting ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-5xl font-light text-white mb-6 tracking-tighter">
            Ready to Create
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Amazing Videos?</span>
          </h2>
          
          <p className="text-xl text-white/70 font-light mb-12 leading-relaxed">
            Join thousands of creators who are already transforming their ideas into stunning visual content
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            {hasAccess ? (
              <button
                onClick={onDownloadClick}
                className="neuro-button px-8 py-4 text-white font-light text-lg tracking-wide hover:animate-glow"
              >
                Download Veo 3 Now
              </button>
            ) : (
              <button
                onClick={onGetAccessClick}
                className="neuro-button px-8 py-4 text-white font-light text-lg tracking-wide hover:animate-glow"
              >
                Get Early Access
              </button>
            )}
            
            <button
              onClick={scrollToTop}
              className="glass px-6 py-4 text-white/70 hover:text-white transition-all duration-300 font-light tracking-wide flex items-center space-x-2"
            >
              <ArrowUp size={20} strokeWidth={1} />
              <span>Back to Top</span>
            </button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/10">
            <div>
              <div className="text-3xl font-light text-white mb-2">10,000+</div>
              <div className="text-white/50 text-sm font-light">Videos Generated</div>
            </div>
            <div>
              <div className="text-3xl font-light text-white mb-2">99.9%</div>
              <div className="text-white/50 text-sm font-light">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-light text-white mb-2">24/7</div>
              <div className="text-white/50 text-sm font-light">Availability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
