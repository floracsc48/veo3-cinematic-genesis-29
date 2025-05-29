import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Volume, VolumeOff, Plus, Play, Pause } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Slider } from "@/components/ui/slider";
import VideoModal from './VideoModal';
interface VideoData {
  videoUrl: string;
  prompt: string;
}
const AudioVideoSection: React.FC = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [modalData, setModalData] = useState<VideoData | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const {
    ref,
    isIntersecting
  } = useIntersectionObserver();
  const videos: VideoData[] = [{
    videoUrl: "https://deepmind.google/api/blob/website/media/us_wm_veo_3_extend_a-follow-shot-of-a-wise-old-owl-high-in-the-air-peeking-through_0pYjNAp.mp4",
    prompt: "A follow shot of a wise old owl high in the air, peeking through the clouds in a moonlit sky above a forest. The wise old owl carefully circles a clearing looking around to the forest floor. After a few moments, it dives down to a moonlit path and sits next to a badger. Audio: wings flapping, birdsong, loud and pleasant wind rustling and the sound of intermittent pleasant sounds buzzing, twigs snapping underfoot, croaking. A light orchestral score with woodwinds throughout with a cheerful, optimistic rhythm, full of innocent curiosity."
  }, {
    videoUrl: "https://deepmind.google/api/blob/website/media/veo__veo-3__us_wm_a-medium-shot-historical-adventure-setting-warm-lamplight-illumi.mp4",
    prompt: "A medium shot, historical adventure setting: Warm lamplight illuminates a cartographer in a cluttered study, poring over an ancient, sprawling map spread across a large table. Cartographer: \"According to this old sea chart, the lost island isn't myth! We must prepare an expedition immediately!\""
  }, {
    videoUrl: "https://deepmind.google/api/blob/website/media/us_wm_a-detective-interrogates-a-nervous-looking-rubber-duck-where-wer_.mp4",
    prompt: "A detective interrogates a nervous-looking rubber duck. \"Where were you on the night of the bubble bath?!\" he quacks. Audio: Detective's stern quack, nervous squeaks from rubber duck."
  }, {
    videoUrl: "https://deepmind.google/api/blob/website/media/us_wm_a155-ccfff61cb0a4_14_1.mp4",
    prompt: "A close up of spies exchanging information in a crowded train station with uniformed guards patrolling nearby \"The microfilm is in your ticket\" he murmured pretending to check his watch \"They're watching the north exit\" she warned casually adjusting her scarf \"Use the service tunnel\" Commuters rush past oblivious to the covert exchange happening amid announcements of arrivals and departures"
  }];
  const handlePrevious = () => {
    setCurrentVideoIndex(prev => prev === 0 ? videos.length - 1 : prev - 1);
    setIsPlaying(true);
  };
  const handleNext = () => {
    setCurrentVideoIndex(prev => prev === videos.length - 1 ? 0 : prev + 1);
    setIsPlaying(true);
  };
  const handleVolumeToggle = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  const handleSliderChange = (values: number[]) => {
    setCurrentVideoIndex(values[0]);
    setIsPlaying(true);
  };
  const handlePromptExpand = () => {
    setModalData(videos[currentVideoIndex]);
  };
  const truncatePrompt = (prompt: string) => {
    if (prompt.length <= 120) return prompt;
    return prompt.substring(0, 120) + '...';
  };
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      if (isPlaying) {
        videoRef.current.play();
      }
    }
  }, [currentVideoIndex, isMuted, isPlaying]);
  const currentVideo = videos[currentVideoIndex];
  return <section id="audio-video" ref={ref} className={`py-32 px-4 transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-2xl md:text-3xl font-light max-w-4xl mx-auto leading-relaxed text-center">
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Veo 3 lets you add sound effects, ambient noise, and even dialogue to your creations – generating all audio natively. It also delivers best in class quality, excelling in physics, realism and prompt adherence.
            </span>
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-500 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Video Container */}
          <div className="relative aspect-video bg-black rounded-2xl overflow-hidden mb-8">
            <video ref={videoRef} src={currentVideo.videoUrl} className="w-full h-full object-cover" autoPlay muted={isMuted} loop playsInline key={currentVideoIndex} />
            
            {/* Navigation Arrows */}
            <button onClick={handlePrevious} className="absolute left-4 top-1/2 transform -translate-y-1/2 button-3d p-3 rounded-full">
              <ArrowLeft size={20} strokeWidth={1} className="text-white" />
            </button>
            
            <button onClick={handleNext} className="absolute right-4 top-1/2 transform -translate-y-1/2 button-3d p-3 rounded-full">
              <ArrowRight size={20} strokeWidth={1} className="text-white" />
            </button>
            
            {/* Video Controls */}
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button onClick={handleVolumeToggle} className="button-3d p-2">
                {isMuted ? <VolumeOff size={16} strokeWidth={1} className="text-white" /> : <Volume size={16} strokeWidth={1} className="text-white" />}
              </button>
              <button onClick={handlePlayPause} className="button-3d p-2">
                {isPlaying ? <Pause size={16} strokeWidth={1} className="text-white" /> : <Play size={16} strokeWidth={1} className="text-white" />}
              </button>
            </div>
          </div>

          {/* Slider */}
          <div className="mb-8">
            <Slider value={[currentVideoIndex]} onValueChange={handleSliderChange} max={videos.length - 1} step={1} className="w-full" />
            
          </div>

          {/* Prompt */}
          <div className="glass-card p-6 rounded-xl">
            <div className="flex items-start justify-between">
              <p className="text-white/70 text-sm font-light leading-relaxed flex-1 mr-4">
                <span className="text-white/50 font-medium">Prompt: </span>
                {truncatePrompt(currentVideo.prompt)}
              </p>
              {currentVideo.prompt.length > 120 && <button onClick={handlePromptExpand} className="button-3d p-2 flex-shrink-0">
                  <Plus size={16} strokeWidth={1} className="text-white" />
                </button>}
            </div>
          </div>
        </div>
      </div>

      <VideoModal isOpen={!!modalData} onClose={() => setModalData(null)} videoUrl={modalData?.videoUrl || ''} prompt={modalData?.prompt || ''} />
    </section>;
};
export default AudioVideoSection;