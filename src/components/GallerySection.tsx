import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume, VolumeOff, Plus } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import VideoModal from './VideoModal';
const GallerySection: React.FC = () => {
  const [mutedVideos, setMutedVideos] = useState<Set<number>>(new Set());
  const [modalData, setModalData] = useState<{
    videoUrl: string;
    prompt: string;
  } | null>(null);
  const {
    ref,
    isIntersecting
  } = useIntersectionObserver();
  const galleryItems = [{
    videoUrl: "https://deepmind.google/api/blob/website/media/veo__veo-3__us_wm_the-scene-explodes-with-the-raw-visceral-and-unpredictable-energ.mp4",
    prompt: "The scene explodes with the raw, visceral, and unpredictable energy of a hardcore off-road rally, captured with a dynamic, almost found-footage or embedded sports documentary aesthetic. The camera is often shaky, seemingly mounted inside one of the vehicles or held by a daring spectator very close to the action, frequently splattered with mud or water, catching unintentional lens flares from the natural, often harsh, sunlight filtering through trees or reflecting off wet surfaces. We are immersed in a challenging, untamed natural environment – perhaps a dense, muddy forest trail, a treacherous rocky incline littered with loose scree, or a series_of shallow, fast-flowing river crossings. Several heavily modified, entirely unidentifiable, and unbranded off-road vehicles are engaged in a frenetic, no-holds-barred race. These are not showroom models; they are custom-built, rugged machines – open-wheeled buggies with exposed engines and prominent roll cages, heavily armored pickup trucks with oversized, knobby tires and snorkel exhausts, their original forms and manufacturers completely obscured by extreme modifications, layers of caked-on mud, and a general air of brutal functionality. The dominant sounds are the deafening, guttural roar of powerful, untamed engines, the whine of transmissions, the percussive impact of suspension bottoming out, and the constant spray of mud and water. Within an 8-second sequence, one of the lead vehicles, a low-slung, open-cockpit buggy so caked in thick, brown mud that its original color is a mystery, approaches a wide, shallow river crossing at incredible speed. Without the slightest hesitation, its unseen driver powers straight into the water. The impact sends an enormous, almost solid, opaque sheet of muddy water, mixed with stones and debris from the riverbed, spectacularly high into the air, completely engulfing the small buggy for a terrifying moment, obscuring it from view as if it has been swallowed by the river itself. Right on its tail, a pursuing, equally mud-encrusted, custom-built truck – a hulking, high-clearance beast with a heavily reinforced external roll cage and no discernible badging – arrives at the river crossing just as this massive wall of airborne water reaches its peak. Instead of slowing or attempting to find a clearer path, the truck's driver, with unwavering aggression, plunges directly into and through this opaque, turbulent curtain of muddy spray at full throttle. A split second later, the truck bursts out from the other side of the deluge, water cascading from its roof and chassis, its oversized windshield wipers struggling frantically to clear the torrent of muddy water obscuring the driver's vision. It lands heavily on the far bank, suspension groaning, but still in hot pursuit of the now-reappearing buggy. This thrilling, messy, and visually spectacular sequence of one vehicle creating a massive environmental obstacle and the next immediately conquering it through sheer force, forms the core, immersive, attention-grabbing event of the 8-second sequence. The race continues with undiminished ferocity, the natural terrain itself an active participant in the conflict."
  }, {
    videoUrl: "https://deepmind.google/api/blob/website/media/veo__veo-3__us_wm_the-scene-opens-with-a-top-down-or-wide-angle-shot-showcasing-a.mp4",
    prompt: "The scene opens with a top-down or wide-angle shot showcasing a vast, perfectly flat, neutral-colored surface – perhaps the polished concrete floor of an enormous, empty aircraft hangar, or a giant, minimalist tabletop stretching beyond the frame, under bright, even, shadowless studio lighting. This surface is meticulously covered with thousands upon thousands of small, identical, brightly colored paper squares, arranged in a simple, orderly grid. Each square is a single, vibrant, uncreased sheet – a sea of reds, blues, yellows, greens, oranges, creating a stunning, static mosaic of pure potential. The atmosphere is one of quiet anticipation, a sense of immense latent energy waiting to be unleashed. There is no visible mechanism, no hint of how these papers might be manipulated. Within an 8-second sequence, initiated by an unseen cue – perhaps a subtle, almost inaudible, low-frequency hum that ripples almost invisibly across the surface, or a sudden, soft flash of diffused light – all the thousands of paper squares simultaneously, and with breathtaking precision, leap a few inches into the air as if startled into life. Then, in a mesmerizing, perfectly synchronized, and incredibly high-speed aerial ballet, they begin to fold themselves in mid-air. With impossible, almost magical celerity and accuracy, unseen forces guide each individual square through a complex series of sharp creases, neat tucks, and intricate folds. The swarm of fluttering, self-constructing papers is a blur of color and motion, a chaotic yet utterly controlled explosion of activity. Within a mere five to six seconds, this frenetic process of airborne origami completes. Each of the thousands of squares has transformed into an identical, perfectly formed, complex origami figure – perhaps graceful cranes with outstretched wings, delicate multi-petaled lotus flowers, or miniature, intricately detailed dragons. In the final two to three seconds of the sequence, these newly formed origami figures, still hovering in mid-air, then smoothly and rapidly arrange themselves, like a flock of perfectly trained birds or a sophisticated, self-organizing swarm of nanobots, into a stunning, larger, three-dimensional collective pattern or a recognizable mosaic image – perhaps a giant, hovering sphere composed of countless tiny birds, or a complex, flowing wave of flowers, or even a pixel-perfect, three-dimensional representation of a face or symbol. This collective sculpture holds its form for a beat before the individual origami figures begin to gently, gracefully, and silently settle back down onto the surface, now arranged in their magnificent new configuration. This entire rapid, impossible, and beautiful transformation – from simple squares to a synchronized swarm of self-folding forms creating a complex collective artwork – is the core, eye-popping, and meticulously detailed VFX spectacle of the 8-second sequence. The visual is one of magical precision, emergent complexity, and the beauty of mass synchronized action."
  }, {
    videoUrl: "https://deepmind.google/api/blob/website/media/us_wm_in-rural-ireland-circa-1860s-two-women-their-long-modest-dresses.mp4",
    prompt: "In rural Ireland, circa 1860s, two women, their long, modest dresses of homespun fabric whipping gently in the strong coastal wind, walk with determined strides across a windswept cliff top. The ground is carpeted with hardy wildflowers in muted hues. They move steadily towards the precipitous edge, where the vast, turbulent grey-green ocean roars and crashes against the sheer rock face far below, sending plumes of white spray into the air."
  }, {
    videoUrl: "https://deepmind.google/api/blob/website/media/veo__veo-3__us_wm_a-breathtaking-painterly-2d-animated-continuous-visual-narrative.mp4",
    prompt: "A breathtaking, painterly 2D animated continuous visual narrative, rendered with the lush, vibrant, and slightly surreal, almost dreamlike, infused with the intricate, delicate detail of traditional Japanese woodblock prints (Ukiyo-e), follows a young, adventurous, and kind-hearted girl (perhaps with bright, curious eyes and wearing simple, practical, beautifully patterned traditional Japanese farm attire) as she befriends a colossal, gentle, ancient Forest Spirit. The Spirit is a magnificent, awe-inspiring creature, its form a harmonious blend of animal and plant – perhaps with moss-covered, antler-like branches, fur like shimmering leaves that change color with its mood, and eyes like deep, tranquil forest pools. They meet in a sun-dappled, sacred grove deep within an ancient, primeval forest, where impossibly tall, gnarled trees form a living cathedral and tiny, glowing, friendly forest sprites (Kodama-like) peek from behind mossy rocks and giant, fantastical mushrooms. The girl, initially awestruck, offers the massive Spirit a small, carefully cultivated offering – perhaps a perfectly ripe persimmon or a handful of wild berries – her gesture one of pure, innocent respect and affection. The Forest Spirit responds with a slow, gentle inclination of its massive head, its leafy fur rustling like a thousand whispers, and perhaps causes a shower of magical, luminous flower petals to drift down from the canopy, or a tiny, new sapling to sprout at the girl's feet. The animation captures the incredible, detailed textures of the forest, the Spirit's majestic yet gentle presence, and the profound, unspoken emotional connection forming between the child and this ancient guardian of nature. The color palette is a rich symphony of deep forest greens, earthy browns, vibrant floral hues, and the soft, magical glow of the sprites and the Spirit's own subtle luminescence. This continuous, sweeping visual journey is a celebration of the profound, often mystical, bond between humanity and nature, the innocence and courage of childhood, and the power of kindness and respect to bridge even the most fantastical of divides, an affectionate, visually intoxicating ode to ecological harmony and interspecies understanding. The only implied sounds are the gentle rustling of leaves, the distant calls of unseen forest birds, the girl's soft, respectful breathing, the Spirit's deep, resonant, almost inaudible hum, and a soaring, emotionally resonant, orchestral score."
  }, {
    videoUrl: "https://deepmind.google/api/blob/website/media/veo__veo-3__us_wm_a-keyboard-whose-keys-are-made-of-different-types-of-candy-typin_1.mp4",
    prompt: "A keyboard whose keys are made of different types of candy. Typing makes sweet, crunchy sounds. Audio: Crunchy, sugary typing sounds, delighted giggles."
  }, {
    videoUrl: "https://deepmind.google/api/blob/website/media/veo__veo-3__us_wm_veo_3_a-snow-covered-plain-of-iridescent-moon-dust-under-twilight-skie.mp4",
    prompt: "A snow-covered plain of iridescent moon-dust under twilight skies. Thirty-foot crystalline flowers bloom, refracting light into slow-moving rainbows. A fur-cloaked figure walks between these colossal blossoms, leaving the only footprints in untouched dust."
  }, {
    videoUrl: "https://deepmind.google/api/blob/website/media/veo__veo-3__us_wm_a-african-american-classical-violinist-with-intense-focus-plays-_1.mp4",
    prompt: "A woman, classical violinist with intense focus plays a complex, rapid passage from a Vivaldi concerto in an ornate, sunlit baroque hall during a rehearsal. Their bow dances across the strings with virtuosic speed and precision. Audio: Bright, virtuosic violin playing, resonant acoustics of the hall, distant footsteps of crew, conductor's occasional soft count-in (muffled), rustling sheet music."
  }, {
    videoUrl: "https://deepmind.google/api/blob/website/media/veo__veo-3__us_wm_a-close-up-in-a-smooth-slow-pan-focuses-intently-on-diced-onions.mp4",
    prompt: "A close up in a smooth, slow pan focuses intently on diced onions hitting a scorching hot pan, instantly creating a dramatic sizzle. Audio: distinct sizzle."
  }];

  // Initialize all videos as muted for autoplay
  useEffect(() => {
    setMutedVideos(new Set(galleryItems.map((_, index) => index)));
  }, []);
  const handleVolumeToggle = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const newMutedVideos = new Set(mutedVideos);
    if (mutedVideos.has(index)) {
      newMutedVideos.delete(index);
    } else {
      newMutedVideos.add(index);
    }
    setMutedVideos(newMutedVideos);
  };
  const handlePromptExpand = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setModalData({
      videoUrl: galleryItems[index].videoUrl,
      prompt: galleryItems[index].prompt
    });
  };
  const truncatePrompt = (prompt: string) => {
    if (prompt.length <= 67) return prompt;
    return prompt.substring(0, 67) + '...';
  };
  return <section id="gallery" className="px-4 py-[49px]">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`text-center mb-20 animate-in ${isIntersecting ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tighter">
            Prompt
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Gallery</span>
          </h2>
          <p className="text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
            Explore stunning examples of AI-generated videos created with simple text prompts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => <div key={index} className={`glass-card group overflow-hidden animate-in ${isIntersecting ? 'visible' : ''}`} style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                <video src={item.videoUrl} className="w-full h-full object-cover" autoPlay muted={mutedVideos.has(index)} loop playsInline />
                
                <div className="absolute bottom-3 right-3 flex space-x-2">
                  <button onClick={e => handleVolumeToggle(index, e)} className="button-3d p-2">
                    {mutedVideos.has(index) ? <VolumeOff size={16} strokeWidth={1} className="text-white" /> : <Volume size={16} strokeWidth={1} className="text-white" />}
                  </button>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between">
                  <p className="text-white/70 text-sm font-light leading-relaxed flex-1 mr-2">
                    {truncatePrompt(item.prompt)}
                  </p>
                  {item.prompt.length > 67 && <button onClick={e => handlePromptExpand(index, e)} className="button-3d p-1 flex-shrink-0">
                      <Plus size={16} strokeWidth={1} className="text-white" />
                    </button>}
                </div>
              </div>
            </div>)}
        </div>

        <div className={`text-center mt-16 animate-in ${isIntersecting ? 'visible' : ''}`}>
          
          
        </div>
      </div>

      <VideoModal isOpen={!!modalData} onClose={() => setModalData(null)} videoUrl={modalData?.videoUrl || ''} prompt={modalData?.prompt || ''} />
    </section>;
};
export default GallerySection;