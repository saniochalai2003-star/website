import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Share2, Heart, ExternalLink } from 'lucide-react';

const feedItems = [
  { id: 1, user: 'CryptoWhale', action: 'bought', amount: '12.5 ETH', token: 'PEPE2', time: '2m ago', avatar: 'W' },
  { id: 2, user: 'MoonHunter', action: 'launched', amount: 'New Token', token: 'SHIB-AI', time: '5m ago', avatar: 'M' },
  { id: 3, user: 'AlphaSeeker', action: 'bought', amount: '5.0 ETH', token: 'DogeAI', time: '8m ago', avatar: 'A' },
  { id: 4, user: 'Degenerate', action: 'bought', amount: '2.2 ETH', token: 'MoonCat', time: '12m ago', avatar: 'D' },
];

export const SocialFeed = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-display text-5xl font-bold mb-8 leading-tight">
            THE PULSE OF <br />
            <span className="text-neon-green italic">DEGEN</span> TRADING
          </h2>
          <p className="text-lg text-white/60 mb-10">
            MoonShot integrates real-time social signals directly into the trading interface. 
            See what the whales are buying before the pump.
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-neon-pink/10 flex items-center justify-center shrink-0">
                <Share2 className="text-neon-pink w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl">Integrated Socials</h4>
                <p className="text-white/40">Connect your X account to share trades and build your reputation.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyber-blue/10 flex items-center justify-center shrink-0">
                <Heart className="text-cyber-blue w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl">Copy Trading</h4>
                <p className="text-white/40">Follow top-performing degens and mirror their successful plays.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-neon-green/10 blur-[100px] rounded-full" />
          <div className="glass rounded-[32px] p-6 relative z-10 overflow-hidden">
            <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
              <span className="font-bold uppercase tracking-widest text-xs opacity-50">Live Activity Feed</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-neon-green rounded-full animate-ping" />
                <span className="text-[10px] font-bold text-neon-green uppercase">Live</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {feedItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-pink to-cyber-blue flex items-center justify-center font-bold">
                        {item.avatar}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm">{item.user}</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-white/60">PRO</span>
                        </div>
                        <p className="text-xs text-white/40">
                          {item.action} <span className="text-white font-medium">{item.amount}</span> of <span className="text-neon-pink font-bold">{item.token}</span>
                        </p>
                      </div>
                    </div>
                    <div className="text-[10px] text-white/20 font-bold uppercase italic">
                      {item.time}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            <div className="mt-6 pt-4 border-t border-white/10">
              <button className="w-full flex items-center justify-center gap-2 text-xs font-bold text-white/40 hover:text-white transition-colors">
                <ExternalLink className="w-3 h-3" />
                View Full On-Chain Activity
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
