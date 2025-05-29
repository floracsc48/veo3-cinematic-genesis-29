
import React from 'react';
import { Sparkle, Lightning, Infinity, Globe } from 'phosphor-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const FeaturesSection: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver();

  const features = [
    {
      icon: Sparkle,
      title: 'AI-Powered Generation',
      description: 'Advanced neural networks create stunning videos from your text descriptions with unprecedented quality and realism.',
    },
    {
      icon: Lightning,
      title: 'Lightning Fast',
      description: 'Generate high-quality videos in seconds, not hours. Our optimized infrastructure ensures rapid processing.',
    },
    {
      icon: Infinity,
      title: 'Unlimited Creativity',
      description: 'No limits on style, genre, or content. From cinematic scenes to abstract art, bring any vision to life.',
    },
    {
      icon: Globe,
      title: 'Global Accessibility',
      description: 'Available worldwide with multi-language support. Create content for any audience, anywhere.',
    },
  ];

  return (
    <section id="features" className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={ref}
          className={`text-center mb-20 animate-in ${isIntersecting ? 'visible' : ''}`}
        >
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tighter">
            Revolutionary
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Features</span>
          </h2>
          <p className="text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
            Experience the next generation of AI video creation with cutting-edge technology
            that transforms imagination into reality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`glass-card p-8 group hover:bg-white/10 transition-all duration-500 animate-in ${
                isIntersecting ? 'visible' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <feature.icon 
                  size={48} 
                  weight="light" 
                  className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" 
                />
              </div>
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-white/70 font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
