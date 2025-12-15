import React from 'react';
import { motion } from 'framer-motion';
import { Server, Timer, AlertTriangle, Hourglass, Keyboard, Brain } from 'lucide-react';
import { SlideWrapper, SlideHeader } from './SlideWrapper';

export const SlideMetrics: React.FC = () => {
  const classicMetrics = [
    { label: "RPS", full: "Requests Per Second", desc: "توان خروجی سیستم (چند نفر رو همزمان راه میده؟)", icon: Server },
    { label: "Latency", full: "p95 / p99", desc: "سرعت پاسخگویی (نه میانگین، بلکه بدترین تجربه کاربر).", icon: Timer },
    { label: "Error Rate", full: "< 1%", desc: "درصد خطاها (پایداری سیستم تحت فشار).", icon: AlertTriangle },
  ];

  const aiMetrics = [
    { label: "TTFT", full: "Time To First Token", desc: "کاربر چقدر صبر می‌کنه تا اولین کلمه رو ببینه؟ (حسگرِ سرعت).", icon: Hourglass },
    { label: "TPS", full: "Tokens Per Second", desc: "سرعت تایپ شدن جواب چقدره؟ (حسگرِ روانی).", icon: Keyboard },
    { label: "Quality", full: "Hallucination Rate", desc: "آیا زیر فشار، مدل شروع به پرت‌ون‌بلا گفتن می‌کنه؟", icon: Brain },
  ];

  return (
    <SlideWrapper>
      <SlideHeader />
      <div className="w-full max-w-7xl flex flex-col items-center">
        <h2 className="text-2xl md:text-5xl font-bold font-vazir text-white mb-10 md:mb-12 text-center">
          متریک‌های حیاتی <span className="font-sans text-white/50 text-xl md:text-3xl block mt-2">(What to Measure?)</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-4 md:px-0">
          
          {/* Classic Web Column */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-slate-900/40 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-cyan-500/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 bg-cyan-500/10 rounded-bl-3xl border-b border-l border-cyan-500/20">
               <span className="text-cyan-400 font-bold font-sans tracking-widest">CLASSIC WEB</span>
            </div>
            
            <div className="mt-8 space-y-6">
              {classicMetrics.map((m, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group"
                >
                  <div className="p-3 bg-cyan-500/10 rounded-xl group-hover:scale-110 transition-transform">
                    <m.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div dir="rtl" className="flex-1 text-right">
                    <div className="flex items-center gap-2 mb-1 justify-end">
                       <span className="text-xs text-cyan-300 font-mono opacity-70">({m.full})</span>
                       <h3 className="text-xl font-bold text-white font-sans">{m.label}</h3>
                    </div>
                    <p className="text-sm font-vazir text-slate-300 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* AI / LLM Column */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-slate-900/40 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-pink-500/20 relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-4 bg-pink-500/10 rounded-bl-3xl border-b border-l border-pink-500/20">
               <span className="text-pink-400 font-bold font-sans tracking-widest">AI & LLM</span>
            </div>

            <div className="mt-8 space-y-6">
              {aiMetrics.map((m, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + (i * 0.1) }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group"
                >
                  <div className="p-3 bg-pink-500/10 rounded-xl group-hover:scale-110 transition-transform">
                    <m.icon className="w-6 h-6 text-pink-400" />
                  </div>
                   <div dir="rtl" className="flex-1 text-right">
                    <div className="flex items-center gap-2 mb-1 justify-end">
                       <span className="text-xs text-pink-300 font-mono opacity-70">({m.full})</span>
                       <h3 className="text-xl font-bold text-white font-sans">{m.label}</h3>
                    </div>
                    <p className="text-sm font-vazir text-slate-300 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </SlideWrapper>
  );
};