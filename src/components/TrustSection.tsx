import React from 'react';
import { ShieldCheck, Lock, Eye, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const partners = [
  { name: 'CertiK', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/CertiK_Logo.svg/2560px-CertiK_Logo.svg.png' },
  { name: 'Chainlink', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Chainlink_Logo.svg/2560px-Chainlink_Logo.svg.png' },
  { name: 'Hacken', logo: 'https://hacken.io/wp-content/uploads/2022/03/Hacken-Logo-Horizontal-White.svg' },
  { name: 'SlowMist', logo: 'https://www.slowmist.com/images/logo-white.png' },
];

export const TrustSection = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-40 hover:opacity-100 transition-opacity duration-500">
          {partners.map((partner) => (
            <div key={partner.name} className="flex justify-center">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-6 md:h-8 object-contain grayscale invert brightness-200"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <motion.div 
            whileHover={{ y: -5 }}
            className="glass p-6 rounded-2xl border-l-4 border-l-neon-green"
          >
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="text-neon-green w-6 h-6" />
              <h4 className="font-bold text-lg">Multi-Audit Verified</h4>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Every contract on MoonShot undergoes rigorous triple-layer audits by industry leaders before deployment.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="glass p-6 rounded-2xl border-l-4 border-l-cyber-blue"
          >
            <div className="flex items-center gap-3 mb-4">
              <Lock className="text-cyber-blue w-6 h-6" />
              <h4 className="font-bold text-lg">Liquidity Locked</h4>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Automatic 12-month liquidity locks are enforced on all successful launches, ensuring zero rug-pull risk.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="glass p-6 rounded-2xl border-l-4 border-l-neon-pink"
          >
            <div className="flex items-center gap-3 mb-4">
              <Eye className="text-neon-pink w-6 h-6" />
              <h4 className="font-bold text-lg">Anti-Whale Tech</h4>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Proprietary algorithms prevent bot manipulation and whale dumping during the critical first 48 hours.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
