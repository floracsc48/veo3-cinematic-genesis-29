
import React, { useState } from 'react';
import { ChevronDown, Lock, ArrowUp } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const InterfaceSection: React.FC = () => {
  const [selectedMode, setSelectedMode] = useState('Text to Video');
  const [prompt, setPrompt] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{id: number, text: string, isUser: boolean}>>([]);
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
    return new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isGenerating) return;

    const userMessage = { id: Date.now(), text: prompt, isUser: true };
    setChatMessages(prev => [...prev, userMessage]);
    
    const currentPrompt = prompt;
    setPrompt('');
    setIsGenerating(true);

    // Simulate response delay
    setTimeout(() => {
      const botMessage = { 
        id: Date.now() + 1, 
        text: `Video generated successfully! Duration: 17s\nTo see the result you need to download the app.`, 
        isUser: false 
      };
      setChatMessages(prev => [...prev, botMessage]);
      setIsGenerating(false);
    }, 2000);
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

          {/* Separator line */}
          <div className="border-t border-white/10 mb-8"></div>

          {/* Main prompt text */}
          <div className="text-center mb-8">
            <p className="text-white/70 font-light text-lg">
              Type in the prompt box to start
            </p>
          </div>

          {/* Chat area */}
          <div className="min-h-[200px] mb-8 glass p-4 rounded-lg">
            {chatMessages.length === 0 ? (
              <div className="text-white/40 text-center py-8">
                Chat messages will appear here...
              </div>
            ) : (
              <div className="space-y-4 max-h-60 overflow-y-auto">
                {chatMessages.map((message) => (
                  <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-lg ${
                      message.isUser 
                        ? 'bg-blue-500/20 text-white' 
                        : 'bg-gray-600/20 text-white/80'
                    }`}>
                      <p className="text-sm font-light whitespace-pre-line">{message.text}</p>
                    </div>
                  </div>
                ))}
                {isGenerating && (
                  <div className="flex justify-start">
                    <div className="bg-gray-600/20 text-white/80 p-3 rounded-lg">
                      <p className="text-sm font-light">Generating video...</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Bottom controls */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Mode Dropdown - Left */}
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="w-full glass p-4 rounded-lg flex items-center justify-between text-left"
              >
                <span className="text-white font-light">{selectedMode}</span>
                <ChevronDown 
                  size={20} 
                  strokeWidth={1}
                  className={`text-white/70 transition-transform duration-200 ${
                    showDropdown ? 'rotate-180' : ''
                  }`} 
                />
              </button>

              {showDropdown && (
                <div className="absolute bottom-full left-0 right-0 mb-2 glass rounded-lg overflow-hidden z-10">
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
                        <Lock size={16} strokeWidth={1} className="text-white/40" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Prompt Input - Center and Right */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="flex space-x-2">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe the video you want to create..."
                  rows={3}
                  className="flex-1 glass p-4 rounded-lg text-white placeholder-white/50 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
                <button
                  type="submit"
                  disabled={!prompt.trim() || isGenerating}
                  className="glass p-4 rounded-lg hover:bg-white/20 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowUp size={20} strokeWidth={1} className="text-white" />
                </button>
              </form>
            </div>
          </div>

          {/* Sample Prompts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
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

          {/* Generate button - Bottom Left */}
          <div className="flex justify-start">
            <button
              onClick={handleSubmit}
              disabled={!prompt.trim() || isGenerating}
              className="neuro-button px-6 py-3 text-white font-light tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? 'Generating...' : 'Generate Video'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterfaceSection;
