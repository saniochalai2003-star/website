import React from 'react';
import { Rocket, Search, Menu, Wallet } from 'lucide-react';
import { motion } from 'motion/react';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <nav className="max-w-7xl mx-auto glass rounded-2xl px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-neon-pink rounded-lg flex items-center justify-center neon-glow-pink">
            <Rocket className="text-white w-6 h-6" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">MOONSHOT</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <a href="#" className="hover:text-neon-pink transition-colors">Launchpad</a>
          <a href="#" className="hover:text-neon-pink transition-colors">Trending</a>
          <a href="#" className="hover:text-neon-pink transition-colors">Staking</a>
          <a href="#" className="hover:text-neon-pink transition-colors">Docs</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-sm font-semibold border border-white/10">
            <Wallet className="w-4 h-4" />
            Connect Wallet
          </button>
          <button className="md:hidden p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>
    </header>
  );
};
