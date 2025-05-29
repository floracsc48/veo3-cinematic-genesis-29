
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 border-t border-white/10 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-light text-lg mb-4 tracking-tight">Google Veo 3</h3>
            <p className="text-white/50 font-light text-sm leading-relaxed">
              The future of AI-powered video generation. Create stunning, photorealistic videos from simple text descriptions.
            </p>
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
            <h4 className="text-white/70 font-light text-sm mb-4 uppercase tracking-wider">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/50 hover:text-white/70 transition-colors font-light text-sm">Documentation</a></li>
              <li><a href="#" className="text-white/50 hover:text-white/70 transition-colors font-light text-sm">Community</a></li>
              <li><a href="#" className="text-white/50 hover:text-white/70 transition-colors font-light text-sm">Help Center</a></li>
              <li><a href="#" className="text-white/50 hover:text-white/70 transition-colors font-light text-sm">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white/70 font-light text-sm mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/50 hover:text-white/70 transition-colors font-light text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-white/50 hover:text-white/70 transition-colors font-light text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-white/50 hover:text-white/70 transition-colors font-light text-sm">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 font-light text-sm flex items-center">
            Made with <Heart size={16} strokeWidth={1} className="mx-1 text-red-400" /> for creators worldwide
          </p>
          <p className="text-white/50 font-light text-sm mt-4 md:mt-0">
            © 2024 Google Veo 3. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
