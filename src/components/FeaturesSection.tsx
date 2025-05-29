
import React from 'react';
import { Zap, Brain, Sparkles, Globe, Shield, Rocket } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import TypingAnimation from './TypingAnimation';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslation } from '../translations';

const FeaturesSection: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver();
  const { currentLanguage } = useLanguage();
  const t = useTranslation(currentLanguage);

  const features = [
    {
      icon: Brain,
      title: t.advancedAI,
      description: t.advancedAIDesc
    },
    {
      icon: Zap,
      title: t.lightningFast,
      description: t.lightningFastDesc
    },
    {
      icon: Sparkles,
      title: t.stunningVisual,
      description: t.stunningVisualDesc
    },
    {
      icon: Globe,
      title: t.globalAccessibility,
      description: t.globalAccessibilityDesc
    },
    {
      icon: Shield,
      title: t.securePrivate,
      description: t.securePrivateDesc
    },
    {
      icon: Rocket,
      title: t.continuousInnovation,
      description: t.continuousInnovationDesc
    }
  ];

  return (
    <section 
      id="features" 
      ref={ref}
      className={`py-32 px-4 bg-gradient-to-b from-transparent to-black/20 transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-6xl mx-auto">
        <div 
          className={`text-center mb-20 transition-all duration-1000 delay-300 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tighter">
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              <TypingAnimation 
                text={t.revolutionaryFeatures} 
                speed={100} 
                className="inline-block" 
                shouldStart={isIntersecting} 
              />
            </span>
          </h2>
          <p className="text-xl font-light max-w-3xl mx-auto leading-relaxed">
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              {t.featuresDescription}
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`glass-card p-8 group hover:scale-105 transition-all duration-500 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 mr-4">
                  <feature.icon size={24} strokeWidth={1} className="text-blue-400" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
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
