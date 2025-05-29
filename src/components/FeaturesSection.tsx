
import React from 'react';
import { Zap, Shield, Clock, Sparkles, Play, Wand2 } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import TypingAnimation from './TypingAnimation';

const FeaturesSection: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver();

  const features = [
    {
      icon: <Sparkles size={24} strokeWidth={1} />,
      title: "Advanced AI Models",
      description: "Powered by Google's latest Veo 3 technology for unparalleled video generation quality"
    },
    {
      icon: <Zap size={24} strokeWidth={1} />,
      title: "Lightning Fast",
      description: "Generate stunning videos in minutes, not hours. Our optimized infrastructure ensures rapid processing"
    },
    {
      icon: <Shield size={24} strokeWidth={1} />,
      title: "Enterprise Grade",
      description: "Built with security and reliability in mind. Your data and creations are always protected"
    },
    {
      icon: <Wand2 size={24} strokeWidth={1} />,
      title: "Simple Interface",
      description: "No technical expertise required. Just describe your vision and watch it come to life"
    },
    {
      icon: <Play size={24} strokeWidth={1} />,
      title: "Multiple Formats",
      description: "Export in various resolutions and formats to suit any platform or use case"
    },
    {
      icon: <Clock size={24} strokeWidth={1} />,
      title: "Real-time Preview",
      description: "See your video generation progress in real-time with our advanced preview system"
    }
  ];

  return (
    <section id="features" className="py-32 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div 
          ref={ref}
          className={`text-center mb-20 animate-in ${isIntersecting ? 'visible' : ''}`}
        >
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tighter">
            <TypingAnimation 
              text="Revolutionary Features"
              speed={100}
              shouldStart={isIntersecting}
            />
          </h2>
          <p className="text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
            Experience the next generation of AI video creation with cutting-edge technology and intuitive design
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden animate-in ${
                isIntersecting ? 'visible' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Mobile: Remove glass effect, use solid background */}
              <div className="md:glass-card bg-gray-900/80 md:bg-transparent border border-white/10 rounded-xl p-8 h-full transition-all duration-500 group-hover:border-white/20">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors duration-300">
                    <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-light text-white mb-3 group-hover:text-blue-100 transition-colors duration-300">
                      {feature.title}
                    </h3>
                  </div>
                </div>
                <p className="text-white/70 font-light leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
