import React from 'react';
import { motion } from 'motion/react';
import { Trophy, TrendingUp, Star } from 'lucide-react';

const winners = [
  { name: 'GigaChad', roi: '142x', date: 'Feb 2026', initial: '$0.001', peak: '$0.142', icon: '💪' },
  { name: 'PepeAI', roi: '85x', date: 'Jan 2026', initial: '$0.0004', peak: '$0.034', icon: '🐸' },
  { name: 'MoonWojak', roi: '210x', date: 'Dec 2025', initial: '$0.00001', peak: '$0.0021', icon: '🌚' },
];

export const HallOfFame = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-neon-pink/5 blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl font-bold mb-4 flex items-center justify-center gap-4">
            <Trophy className="text-neon-green w-10 h-10" />
            HALL OF FAME
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto">
            Our track record speaks for itself. These are the tokens that defined the MoonShot ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {winners.map((winner, i) => (
            <motion.div
              key={winner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-pink to-cyber-blue rounded-3xl blur opacity-20 group-hover:opacity-50 transition duration-500" />
              <div className="relative glass p-8 rounded-3xl flex flex-col items-center text-center">
                <div className="text-5xl mb-6">{winner.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{winner.name}</h3>
                <div className="text-neon-green font-display text-4xl font-black mb-6">
                  {winner.roi}
                </div>
                
                <div className="w-full space-y-3 pt-6 border-t border-white/10">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/40">Launch Price</span>
                    <span className="font-mono">{winner.initial}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/40">All-Time High</span>
                    <span className="font-mono text-neon-pink">{winner.peak}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/40">Launch Date</span>
                    <span>{winner.date}</span>
                  </div>
                </div>
                
                <div className="mt-8 flex items-center gap-1 px-3 py-1 rounded-full bg-neon-green/10 text-neon-green text-[10px] font-bold uppercase tracking-widest">
                  <Star className="w-3 h-3 fill-current" />
                  Verified Profit
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 glass p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 border-dashed border-2 border-white/10">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center">
              <TrendingUp className="text-cyber-blue w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold">Average ROI per Launch</h4>
              <p className="text-white/40 italic">Calculated across all 2026 Q1 launches</p>
            </div>
          </div>
          <div className="text-5xl font-display font-bold text-cyber-blue">
            +42.5x
          </div>
        </div>
      </div>
    </section>
  );
};
