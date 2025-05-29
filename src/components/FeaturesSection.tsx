
import React from 'react';
import { Zap, Brain, Sparkles, Globe, Shield, Rocket } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const FeaturesSection: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver();

  const features = [
    {
      icon: Brain,
      title: "Advanced AI Technology",
      description: "Powered by cutting-edge artificial intelligence that understands context, style, and narrative flow to create compelling video content."
    },
    {
      icon: Zap,
      title: "Lightning-Fast Generation",
      description: "Generate high-quality videos in minutes, not hours. Our optimized algorithms ensure rapid processing without compromising quality."
    },
    {
      icon: Sparkles,
      title: "Stunning Visual Quality",
      description: "Experience cinema-grade video generation with realistic lighting, textures, and motion that bring your ideas to life."
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description: "Available worldwide with multi-language support, making AI video creation accessible to creators everywhere."
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your content and data are protected with enterprise-grade security. Create with confidence knowing your privacy is our priority."
    },
    {
      icon: Rocket,
      title: "Continuous Innovation",
      description: "Regular updates and new features ensure you always have access to the latest in AI video generation technology."
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
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Revolutionary Features</span>
          </h2>
          <p className="text-xl font-light max-w-3xl mx-auto leading-relaxed">
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Experience the next generation of AI video creation with cutting-edge technology and intuitive design
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
