import React from 'react';
import { Rocket, Twitter, Github, Send, ShieldCheck } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-neon-pink rounded flex items-center justify-center">
                <Rocket className="text-white w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl">MOONSHOT</span>
            </div>
            <p className="text-white/40 max-w-sm mb-8">
              The world's first high-energy memecoin launchpad. 
              We combine fintech precision with degen energy to bring you the best opportunities in Web3.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-neon-pink transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-neon-pink transition-colors">
                <Send className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-neon-pink transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-white/60">Platform</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">Launchpad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trending</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Staking</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Referrals</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-white/60">Resources</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security Audit</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs text-white/20">
            © 2026 MoonShot Protocol. All rights reserved.
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-neon-green/5 border border-neon-green/20">
            <ShieldCheck className="w-4 h-4 text-neon-green" />
            <span className="text-[10px] font-bold text-neon-green uppercase tracking-widest">Audited by MoonShield</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
