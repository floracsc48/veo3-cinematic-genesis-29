
import React, { useState, useRef, useEffect } from 'react';
import { X, Play, Pause, Volume, VolumeOff } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  prompt: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl, prompt }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [isOpen]);

  const handleVideoToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-content modal-animate-in">
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <h2 className="text-xl font-light text-white">Video Preview</h2>
          <button
            onClick={onClose}
            className="button-3d p-2"
          >
            <X size={20} strokeWidth={1} className="text-white" />
          </button>
        </div>
        
        <div className="flex-1 p-6 overflow-hidden flex flex-col">
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden mb-6">
            <video
              ref={videoRef}
              src={videoUrl}
              className="w-full h-full object-cover"
              muted={isMuted}
              loop
              playsInline
            />
            
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button
                onClick={handleVolumeToggle}
                className="button-3d p-2"
              >
                {isMuted ? (
                  <VolumeOff size={16} strokeWidth={1} className="text-white" />
                ) : (
                  <Volume size={16} strokeWidth={1} className="text-white" />
                )}
              </button>
              <button
                onClick={handleVideoToggle}
                className="button-3d p-2"
              >
                {isPlaying ? (
                  <Pause size={16} strokeWidth={1} className="text-white" />
                ) : (
                  <Play size={16} strokeWidth={1} className="text-white" />
                )}
              </button>
            </div>
          </div>
          
          <div className="glass-card p-4 rounded-lg">
            <h3 className="text-white/90 font-medium mb-2">Prompt</h3>
            <p className="text-white/70 text-sm font-light leading-relaxed">
              {prompt}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoModal;
