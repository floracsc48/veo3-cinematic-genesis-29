
import React, { useState } from 'react';
import { CaretDown, Lock, Play } from 'phosphor-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const InterfaceSection: React.FC = () => {
  const [selectedMode, setSelectedMode] = useState('Text to Video');
  const [prompt, setPrompt] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [generationStep, setGenerationStep] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  
  const { ref, isIntersecting } = useIntersectionObserver();

  const modes = [
    { name: 'Text to Video', available: true },
    { name: 'Frames to Video', available: false },
    { name: 'Ingredients to Video', available: false },
  ];

  const samplePrompts = [
    "A serene mountain lake at sunset with reflections",
    "Bustling Tokyo street at night with neon lights",
    "Waves crashing against rocky cliffs in slow motion",
    "Time-lapse of flowers blooming in a garden",
  ];

  const getCurrentDate = () => {
    return new Date().toLocaleDateString();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsGenerating(true);
    setGenerationStep(0);

    const steps = [
      "Message sent to model...",
      "Generation started...",
      "Video generated successfully! Duration: 17s\nTo see the result you need to download the app."
    ];

    for (let i = 0; i < steps.length; i++) {
      setTimeout(() => {
        setGenerationStep(i + 1);
        if (i === steps.length - 1) {
          setIsGenerating(false);
        }
      }, (i + 1) * 1000);
    }
  };

  return (
    <section id="interface" className="py-32 px-4 bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={ref}
          className={`text-center mb-20 animate-in ${isIntersecting ? 'visible' : ''}`}
        >
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tighter">
            Veo 3 Interface
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Preview</span>
          </h2>
          <p className="text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
            Experience the power of AI video generation
          </p>
        </div>

        <div className={`glass-card p-8 animate-in ${isIntersecting ? 'visible' : ''}`}>
          {/* Breadcrumb */}
          <div className="mb-8">
            <div className="text-white/50 font-light text-sm tracking-wide">
              Google-Veo3 &gt; {getCurrentDate()} &gt; Scenebuilder
            </div>
          </div>

          {/* Main Interface */}
          <div className="space-y-8">
            <div className="text-center">
              <p className="text-white/70 font-light text-lg">
                Type in the prompt box to start
              </p>
            </div>

            {/* Mode Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="w-full glass p-4 rounded-lg flex items-center justify-between text-left"
              >
                <span className="text-white font-light">{selectedMode}</span>
                <CaretDown 
                  size={20} 
                  weight="light" 
                  className={`text-white/70 transition-transform duration-200 ${
                    showDropdown ? 'rotate-180' : ''
                  }`} 
                />
              </button>

              {showDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 glass rounded-lg overflow-hidden z-10">
                  {modes.map((mode) => (
                    <button
                      key={mode.name}
                      onClick={() => {
                        if (mode.available) {
                          setSelectedMode(mode.name);
                          setShowDropdown(false);
                        }
                      }}
                      className={`w-full p-4 text-left flex items-center justify-between transition-colors duration-200 ${
                        mode.available 
                          ? 'hover:bg-white/10 text-white' 
                          : 'text-white/40 cursor-not-allowed'
                      }`}
                      disabled={!mode.available}
                      title={!mode.available ? "This feature is only available in the Veo 3 App" : ""}
                    >
                      <span className="font-light">{mode.name}</span>
                      {!mode.available && (
                        <Lock size={16} weight="light" className="text-white/40" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Sample Prompts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {samplePrompts.map((samplePrompt, index) => (
                <button
                  key={index}
                  onClick={() => setPrompt(samplePrompt)}
                  className="glass p-3 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm font-light text-left"
                >
                  {samplePrompt}
                </button>
              ))}
            </div>

            {/* Prompt Input */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe the video you want to create..."
                  rows={4}
                  className="w-full glass p-4 rounded-lg text-white placeholder-white/50 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
              </div>

              <button
                type="submit"
                disabled={!prompt.trim() || isGenerating}
                className="neuro-button px-8 py-3 text-white font-light tracking-wide disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                <Play size={20} weight="light" />
                <span>{isGenerating ? 'Generating...' : 'Generate Video'}</span>
              </button>
            </form>

            {/* Generation Status */}
            {generationStep > 0 && (
              <div className="glass-card p-6 space-y-3">
                {generationStep >= 1 && (
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    <span className="text-white/70 font-light">Message sent to model...</span>
                  </div>
                )}
                {generationStep >= 2 && (
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                    <span className="text-white/70 font-light">Generation started...</span>
                  </div>
                )}
                {generationStep >= 3 && (
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <div className="text-white/70 font-light">
                      <div>Video generated successfully! Duration: 17s</div>
                      <div className="text-blue-400">To see the result you need to download the app.</div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterfaceSection;
