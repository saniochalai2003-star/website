import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Zap, TrendingUp, Sparkles, ShieldCheck } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neon-pink/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyber-blue/20 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-neon-green" />
            <span className="text-xs font-bold tracking-wider text-neon-green uppercase">The Future of Memecoins</span>
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl font-extrabold leading-[0.9] mb-6">
            LAUNCH <br />
            <span className="text-gradient-pink">BEYOND</span> <br />
            THE LIMITS
          </h1>
          
          <p className="text-lg text-white/60 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
            MoonShot is the premier high-velocity launchpad for the next generation of viral tokens. 
            Security, speed, and 100x potential in every click.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-neon-pink text-white font-bold text-lg neon-glow-pink hover:scale-105 transition-transform flex items-center justify-center gap-2">
              <Zap className="w-5 h-5 fill-current" />
              Launch in 1 Click
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/5 text-white font-bold text-lg border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Discover Next 100x
            </button>
          </div>
          
          <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-2xl font-bold">$420M+</span>
              <span className="text-[10px] uppercase tracking-widest font-bold">Total Volume</span>
            </div>
            <div className="w-px h-8 bg-white/20 hidden sm:block" />
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-2xl font-bold">1,200+</span>
              <span className="text-[10px] uppercase tracking-widest font-bold">Tokens Launched</span>
            </div>
            <div className="w-px h-8 bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neon-green/10 border border-neon-green/20">
              <ShieldCheck className="w-4 h-4 text-neon-green" />
              <span className="text-[10px] font-bold text-neon-green uppercase tracking-widest">Audited & Verified</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-[500px] aspect-square">
            {/* Animated Rocket Visual */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 1, -1, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative z-20"
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-neon-pink/40 blur-[100px] rounded-full animate-pulse" />
                  <Rocket className="w-64 h-64 text-white drop-shadow-[0_0_30px_rgba(255,0,122,0.8)]" />
                </div>
              </div>
            </motion.div>
            
            {/* Orbiting Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 z-10"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 glass rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-neon-green rounded-full neon-glow-green" />
              </div>
            </motion.div>
            
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 z-10"
            >
              <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-10 h-10 glass rounded-xl flex items-center justify-center">
                <div className="w-5 h-5 bg-cyber-blue rounded-full" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
