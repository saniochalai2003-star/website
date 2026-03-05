import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star, Twitter } from 'lucide-react';

const testimonials = [
  {
    name: 'Alex Rivera',
    handle: '@ariveracrypto',
    text: 'MoonShot is the only launchpad where I actually feel safe. The liquidity locks and audit process are top-notch. Caught the GigaChad launch and my life changed.',
    roi: '142x',
    avatar: 'A'
  },
  {
    name: 'Sarah Chen',
    handle: '@schen_defi',
    text: 'The interface is so fast. When a token drops, every second counts. MoonShot handles the load perfectly. Best UX in the game.',
    roi: '85x',
    avatar: 'S'
  },
  {
    name: 'Degen Dan',
    handle: '@dan_the_degen',
    text: 'I used to get rugged every week. Since switching to MoonShot vetted tokens, my portfolio is finally green. The social feed is a goldmine for alpha.',
    roi: '210x',
    avatar: 'D'
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 px-4 bg-deep-space">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-display text-5xl font-bold mb-4">DEGEN VOICES</h2>
          <p className="text-white/40 max-w-xl">Join 50,000+ traders who trust MoonShot for their daily alpha.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.handle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-[32px] relative group hover:bg-white/[0.08] transition-all"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-white/5 group-hover:text-neon-pink/20 transition-colors" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-pink to-cyber-blue flex items-center justify-center font-bold text-lg">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <div className="flex items-center gap-1 text-cyber-blue text-xs">
                    <Twitter className="w-3 h-3 fill-current" />
                    {t.handle}
                  </div>
                </div>
              </div>

              <p className="text-white/70 italic leading-relaxed mb-8">
                "{t.text}"
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-neon-green fill-current" />
                  ))}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-neon-green">
                  Profit: {t.roi}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
