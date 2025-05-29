
import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const GallerySection: React.FC = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const { ref, isIntersecting } = useIntersectionObserver();

  const galleryItems = [
    {
      prompt: "A majestic eagle soaring through mountain peaks at golden hour",
      description: "Cinematic wildlife footage with dramatic lighting",
      thumbnail: "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Eagle+Soaring",
    },
    {
      prompt: "Underwater coral reef teeming with colorful tropical fish",
      description: "Vibrant marine life in crystal clear waters",
      thumbnail: "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Coral+Reef",
    },
    {
      prompt: "Time-lapse of a bustling city street transitioning from day to night",
      description: "Urban energy captured in accelerated time",
      thumbnail: "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=City+Timelapse",
    },
    {
      prompt: "Northern lights dancing over a snow-covered forest",
      description: "Aurora borealis in all its ethereal beauty",
      thumbnail: "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Northern+Lights",
    },
    {
      prompt: "A steam locomotive crossing a vintage railway bridge",
      description: "Nostalgic transportation through scenic landscapes",
      thumbnail: "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Steam+Train",
    },
    {
      prompt: "Close-up of morning dew drops on spider web",
      description: "Macro photography revealing nature's intricate details",
      thumbnail: "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Dew+Drops",
    },
  ];

  const handleVideoToggle = (index: number) => {
    setPlayingVideo(playingVideo === index ? null : index);
  };

  return (
    <section id="gallery" className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={ref}
          className={`text-center mb-20 animate-in ${isIntersecting ? 'visible' : ''}`}
        >
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tighter">
            Prompt
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Gallery</span>
          </h2>
          <p className="text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
            Explore stunning examples of AI-generated videos created with simple text prompts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`glass-card group cursor-pointer overflow-hidden animate-in ${
                isIntersecting ? 'visible' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleVideoToggle(index)}
            >
              <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.prompt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Play/Pause Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="neuro-button p-4 rounded-full">
                    {playingVideo === index ? (
                      <Pause size={24} strokeWidth={1} className="text-white" />
                    ) : (
                      <Play size={24} strokeWidth={1} className="text-white" />
                    )}
                  </div>
                </div>

                {/* Playing Indicator */}
                {playingVideo === index && (
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center space-x-2 glass px-3 py-1 rounded-full">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      <span className="text-white text-xs font-light">Playing</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-white font-light text-lg mb-3 leading-tight">
                  "{item.prompt}"
                </h3>
                <p className="text-white/70 text-sm font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 animate-in ${isIntersecting ? 'visible' : ''}`}>
          <p className="text-white/50 font-light text-lg mb-8">
            Ready to create your own stunning videos?
          </p>
          <button 
            onClick={() => document.querySelector('#interface')?.scrollIntoView({ behavior: 'smooth' })}
            className="neuro-button px-8 py-4 text-white font-light tracking-wide"
          >
            Try Veo 3 Interface
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
