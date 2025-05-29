
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import CounterAnimation from './CounterAnimation';
import TypingAnimation from './TypingAnimation';

const StatsVideoSection: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver();

  const stats = [
    { 
      value: 10000, 
      suffix: '+', 
      label: 'Videos Generated' 
    },
    { 
      value: 99.9, 
      suffix: '%', 
      label: 'Uptime' 
    },
    { 
      value: 24, 
      suffix: '/7', 
      label: 'Availability' 
    }
  ];

  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Video Preview */}
        <div 
          ref={ref}
          className={`mb-16 animate-in ${isIntersecting ? 'visible' : ''}`}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <video
              className="w-full h-auto"
              autoPlay
              muted
              loop
              playsInline
              style={{ maxHeight: '500px' }}
            >
              <source src="https://deepmind.google/api/blob/website/media/us_wm_veo_3_a-medium-shot-frames-an-old-sailor-his-knitted-blue-sailor-hat_LLpQrIw.mp4" type="video/mp4" />
            </video>
            
            {/* Video Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 animate-in ${isIntersecting ? 'visible' : ''}`}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl md:text-5xl font-light text-white mb-2">
                <CounterAnimation 
                  targetValue={stat.value}
                  suffix={stat.suffix}
                  duration={2500}
                />
              </div>
              <p className="text-white/70 font-light tracking-wide">
                <TypingAnimation 
                  text={stat.label}
                  speed={50}
                  shouldStart={isIntersecting}
                />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsVideoSection;
