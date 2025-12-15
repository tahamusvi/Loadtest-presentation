import React from 'react';
import { motion } from 'framer-motion';
import { Server, Code, Zap, Sparkles } from 'lucide-react';
import { SlideWrapper, SlideHeader } from './SlideWrapper';

export const SlideTools: React.FC = () => {
  const tools = [
    { 
      name: 'JMETER', 
      subtitle: 'Classic & Enterprise', 
      tag: 'Java / GUI',
      note: 'استاندارد قدیمی صنعت؛ قدرتمند برای تست دیتابیس (JDBC) و پروتکل‌های پیچیده، اما سنگین و وابسته به GUI.',
      color: 'text-orange-400', 
      border: 'border-orange-500/50',
      icon: <Server className="w-5 h-5 md:w-6 md:h-6 text-orange-400" />
    },
    { 
      name: 'LOCUST', 
      subtitle: "Developer's Choice",
      tag: 'Python',
      note: 'محبوب‌ترین ابزار برای تیم‌های فنی؛ نوشتن سناریوهای پیچیده با کد پایتون. (ایده‌آل برای تست Logic).',
      color: 'text-green-400', 
      border: 'border-green-500/50',
      icon: <Code className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
    },
    { 
      name: 'K6', 
      subtitle: 'High Performance',
      tag: 'Go / JS',
      note: 'پادشاه سرعت؛ مناسب برای فشارهای بسیار سنگین (High Concurrency) و یکپارچگی با CI/CD.',
      color: 'text-violet-400', 
      border: 'border-violet-500/50',
      icon: <Zap className="w-5 h-5 md:w-6 md:h-6 text-violet-400" />
    },
    { 
      name: 'PROMPTFOO', 
      subtitle: 'AI Native / LLM Eval',
      tag: 'GenAI',
      note: 'ابزار نسل جدید؛ سنجش همزمانِ "سرعت پاسخ" و "کیفیت جواب" (Accuracy) در مدل‌های هوش مصنوعی.',
      color: 'text-pink-400', 
      border: 'border-pink-500/50',
      icon: <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-pink-400" />,
      isAi: true
    }
  ];

  return (
    <SlideWrapper>
      <SlideHeader />
      <div className="text-center mb-6 md:mb-10 mt-8 md:mt-0">
        <h2 className="text-3xl md:text-5xl font-bold font-vazir text-white mb-2 md:mb-4">ابزارهای لودتست</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-5xl px-4">
        {tools.map((t, i) => (
          <motion.div 
            key={i}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className={`group relative overflow-hidden bg-slate-900/60 backdrop-blur-md p-5 md:p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all hover:bg-slate-800 flex flex-col`}
          >
            {/* Background Glow */}
            <div className={`absolute -right-10 -bottom-10 w-32 h-32 rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition-opacity ${t.color.replace('text', 'bg')}`}></div>
            
            {/* AI Native Badge */}
            {t.isAi && (
              <div className="absolute top-0 left-0 bg-pink-500 text-white text-[10px] font-bold px-3 py-1 rounded-br-xl shadow-lg z-20 animate-pulse">
                AI NATIVE
              </div>
            )}

            <div className="flex items-start justify-between relative z-10 mb-2">
               <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className={`text-xl md:text-3xl font-black font-sans ${t.color}`}>{t.name}</h3>
                    <span className="text-[10px] md:text-xs px-2 py-0.5 rounded border border-white/10 text-slate-400 font-mono bg-black/20">{t.tag}</span>
                  </div>
                  <p className="text-slate-300 font-vazir text-xs md:text-sm font-bold opacity-90">{t.subtitle}</p>
               </div>
               <div className="p-2 md:p-3 bg-white/5 rounded-lg border border-white/10">
                  {t.icon}
               </div>
            </div>
            
            <div className="relative z-10 mt-2">
               <p className="text-slate-400 font-vazir text-xs md:text-sm leading-relaxed" dir="rtl">{t.note}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideWrapper>
  );
};