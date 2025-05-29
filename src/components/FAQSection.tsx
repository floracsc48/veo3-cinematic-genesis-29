
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const FAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const { ref, isIntersecting } = useIntersectionObserver();

  const faqs = [
    {
      question: "What is Google Veo 3?",
      answer: "Google Veo 3 is an advanced AI-powered video generation tool that creates high-quality, photorealistic videos from simple text descriptions. It represents the latest breakthrough in generative AI technology."
    },
    {
      question: "Is Veo 3 really free to use?",
      answer: "Yes! Veo 3 is completely free during the early access period. We believe in democratizing AI video creation and making this powerful technology accessible to everyone."
    },
    {
      question: "What video formats and resolutions are supported?",
      answer: "Veo 3 supports multiple output formats including MP4, WebM, and MOV. You can generate videos in resolutions up to 4K, with typical generation times of 10-30 seconds depending on complexity."
    },
    {
      question: "How long can the generated videos be?",
      answer: "Currently, Veo 3 can generate videos up to 60 seconds in length. This duration is perfect for social media content, marketing materials, and creative projects."
    },
    {
      question: "Do I need any technical knowledge to use Veo 3?",
      answer: "Not at all! Veo 3 is designed to be user-friendly. Simply describe what you want to see in natural language, and our AI will create the video for you. No video editing experience required."
    },
    {
      question: "Can I use generated videos commercially?",
      answer: "Yes, videos generated with Veo 3 can be used for commercial purposes. You retain full rights to the content you create, making it perfect for business and creative projects."
    },
    {
      question: "What makes Veo 3 different from other AI video tools?",
      answer: "Veo 3 offers superior video quality, faster generation times, and more accurate interpretation of text prompts. Our advanced neural networks create more realistic motion, lighting, and detail than previous generations."
    },
    {
      question: "How do I get access to the full version?",
      answer: "Download the Veo 3 app using the provided link and use the archive password to unlock all features. The full version includes additional generation modes and advanced customization options."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <div 
          ref={ref}
          className={`text-center mb-20 animate-in ${isIntersecting ? 'visible' : ''}`}
        >
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tighter">
            Frequently Asked
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Questions</span>
          </h2>
          <p className="text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about Google Veo 3
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`glass-card overflow-hidden animate-in ${
                isIntersecting ? 'visible' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
              >
                <h3 className="text-white font-light text-lg pr-4 leading-tight">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <Minus size={24} strokeWidth={1} className="text-white/70" />
                  ) : (
                    <Plus size={24} strokeWidth={1} className="text-white/70" />
                  )}
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <p className="text-white/70 font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
