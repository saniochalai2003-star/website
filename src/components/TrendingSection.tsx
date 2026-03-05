import React from 'react';
import { motion } from 'motion/react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Flame, ArrowUpRight, Users, MessageSquare, ShieldCheck, BadgeCheck } from 'lucide-react';

const data = [
  { name: '10:00', value: 400 },
  { name: '10:05', value: 300 },
  { name: '10:10', value: 600 },
  { name: '10:15', value: 800 },
  { name: '10:20', value: 500 },
  { name: '10:25', value: 900 },
  { name: '10:30', value: 1100 },
];

const tokens = [
  { name: 'PEPE 2.0', symbol: 'PEPE2', price: '$0.0000042', change: '+142%', color: 'text-neon-green', vetted: true },
  { name: 'DogeAI', symbol: 'DAI', price: '$0.012', change: '+85%', color: 'text-cyber-blue', vetted: true },
  { name: 'MoonCat', symbol: 'MCAT', price: '$0.0045', change: '+210%', color: 'text-neon-pink', vetted: false },
];

export const TrendingSection = () => {
  return (
    <section className="py-24 px-4 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-display text-4xl font-bold mb-4 flex items-center gap-3">
              <Flame className="text-neon-pink w-8 h-8 fill-current" />
              TRENDING NOW
            </h2>
            <p className="text-white/40">Real-time market velocity and social hype metrics.</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">1H</button>
            <button className="px-4 py-2 rounded-lg bg-neon-pink text-white text-xs font-bold uppercase tracking-widest">24H</button>
            <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">7D</button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Trending List */}
          <div className="lg:col-span-1 space-y-4">
            {tokens.map((token, i) => (
              <motion.div
                key={token.symbol}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass p-4 rounded-2xl flex items-center justify-between hover:bg-white/10 transition-all cursor-pointer group relative overflow-hidden"
              >
                {token.vetted && (
                  <div className="absolute top-0 right-0 p-1">
                    <BadgeCheck className="w-4 h-4 text-neon-green opacity-50" />
                  </div>
                )}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center font-bold text-lg relative">
                    {token.symbol[0]}
                    {token.vetted && (
                      <div className="absolute -bottom-1 -right-1 bg-deep-space rounded-full p-0.5">
                        <ShieldCheck className="w-3 h-3 text-neon-green" />
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <h3 className="font-bold">{token.name}</h3>
                    </div>
                    <span className="text-xs text-white/40">{token.symbol}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-mono font-bold">{token.price}</div>
                  <div className={`text-xs font-bold ${token.color}`}>{token.change}</div>
                </div>
              </motion.div>
            ))}
            <button className="w-full py-4 rounded-2xl border border-dashed border-white/20 text-white/40 font-bold hover:text-white hover:border-white/40 transition-all">
              View All Trending
            </button>
          </div>

          {/* Hype Chart */}
          <div className="lg:col-span-2 glass rounded-3xl p-8 relative overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-bold">Global Hype Index</h3>
                <span className="text-xs text-white/40">Aggregated social & trade signals</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-cyber-blue" />
                  <span className="text-sm font-bold">12.4k</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-neon-pink" />
                  <span className="text-sm font-bold">8.2k</span>
                </div>
              </div>
            </div>
            
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FF007A" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#FF007A" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                  <XAxis dataKey="name" stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #ffffff20', borderRadius: '12px' }}
                    itemStyle={{ color: '#FF007A' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#FF007A" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                    animationDuration={2000}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
