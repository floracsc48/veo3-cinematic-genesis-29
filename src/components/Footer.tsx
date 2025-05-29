import React from 'react';
import { Heart } from 'lucide-react';
const Footer: React.FC = () => {
  return <footer className="py-12 px-4 border-t border-white/10 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-light text-lg mb-4 tracking-tight">Google Veo 3</h3>
            <p className="text-white/50 font-light text-sm leading-relaxed mb-6">
              The future of AI-powered video generation. Create stunning, photorealistic videos from simple text descriptions.
            </p>
            
            <div>
              <h4 className="text-white/70 font-light text-sm mb-4 uppercase tracking-wider">Follow us</h4>
              <ul className="space-y-2">
                <li><a href="https://x.com/googledeepmind" className="text-white/50 hover:text-white/70 transition-colors font-light text-sm">X</a></li>
                <li><a href="https://www.instagram.com/googledeepmind" className="text-white/50 hover:text-white/70 transition-colors font-light text-sm">Instagram</a></li>
                <li><a href="https://www.youtube.com/@googledeepmind" className="text-white/50 hover:text-white/70 transition-colors font-light text-sm">YouTube</a></li>
                <li><a href="https://www.linkedin.com/company/googledeepmind/" className="text-white/50 hover:text-white/70 transition-colors font-light text-sm">LinkedIn</a></li>
                <li><a href="https://github.com/google-deepmind" className="text-white/50 hover:text-white/70 transition-colors font-light text-sm">GitHub</a></li>
              </ul>
            </div>
          </div>
          
          <div>
            <h4 className="text-white/70 font-light text-sm mb-4 uppercase tracking-wider">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-white/50 hover:text-white/70 transition-colors font-light text-sm">Features</a></li>
              <li><a href="#interface" className="text-white/50 hover:text-white/70 transition-colors font-light text-sm">Interface</a></li>
              <li><a href="#gallery" className="text-white/50 hover:text-white/70 transition-colors font-light text-sm">Gallery</a></li>
              <li><a href="#faq" className="text-white/50 hover:text-white/70 transition-colors font-light text-sm">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white/70 font-light text-sm mb-4 uppercase tracking-wider">Models</h4>
            <p className="text-white/50 font-light text-xs mb-3">Build with our next generation AI systems</p>
            <ul className="space-y-2">
              <li><a href="https://gemini.google.com/" className="text-white/50 hover:text-white/70 transition-colors font-light text-sm">Gemini</a></li>
              <li><a href="https://deepmind.google/models/gemma/" className="text-white/50 hover:text-white/70 transition-colors font-light text-sm">Gemma</a></li>
              <li><a href="https://google-veo3.com/" className="text-white/50 hover:text-white/70 transition-colors font-light text-sm">Veo</a></li>
              <li><a href="https://deepmind.google/models/imagen/" className="text-white/50 hover:text-white/70 transition-colors font-light text-sm">Imagen</a></li>
              <li><a href="https://deepmind.google/models/lyria/" className="text-white/50 hover:text-white/70 transition-colors font-light text-sm">Lyria</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white/70 font-light text-sm mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/50 hover:text-white/70 transition-colors font-light text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-white/50 hover:text-white/70 transition-colors font-light text-sm">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            
            <p className="text-white/50 font-light mt-4 md:mt-0 py-0 mx-0 my-[11px] px-0 text-xs">© 2025 Google-Veo3. All rights reserved.</p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-white/50 font-light text-xs">
            <a href="https://www.google.com/" className="hover:text-white/70 transition-colors flex items-center">
              <span className="mr-1">🔍</span> Google
            </a>
            <span>•</span>
            <a href="https://about.google/products/" className="hover:text-white/70 transition-colors">Google Products</a>
            <span>•</span>
            <a href="https://policies.google.com/privacy" className="hover:text-white/70 transition-colors">Privacy</a>
            <span>•</span>
            <a href="https://policies.google.com/terms" className="hover:text-white/70 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;