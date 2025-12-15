import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Zap, Hourglass } from 'lucide-react';
import { SlideWrapper, SlideHeader } from './SlideWrapper';

export const SlideTypes: React.FC = () => {
  const types = [
    {
      title: "STRESS TEST",
      sub: "نقطه شکست کجاست؟",
      icon: <Activity className="w-10 h-10 md:w-12 md:h-12 text-red-500" />,
      desc: "فشار را تا جایی بالا می‌بریم که سیستم متوقف شود. هدف پیدا کردن حد تحمل است.",
      color: "hover:shadow-red-500/30 hover:border-red-500/50",
      bg: "bg-red-500/10"
    },
    {
      title: "SPIKE TEST",
      sub: "شوک ناگهانی",
      icon: <Zap className="w-10 h-10 md:w-12 md:h-12 text-yellow-400" />,
      desc: "افزایش ناگهانی کاربران (مثل بلک فرایدی). آیا سیستم ریکاوری می‌شود؟",
      color: "hover:shadow-yellow-500/30 hover:border-yellow-500/50",
      bg: "bg-yellow-500/10"
    },
    {
      title: "SOAK TEST",
      sub: "استقامت طولانی",
      icon: <Hourglass className="w-10 h-10 md:w-12 md:h-12 text-blue-400" />,
      desc: "تست در بازه زمانی طولانی (مثلاً ۲۴ ساعت) برای پیدا کردن مشکلات پنهان.",
      color: "hover:shadow-blue-500/30 hover:border-blue-500/50",
      bg: "bg-blue-500/10"
    }
  ];

  return (
    <SlideWrapper>
      <SlideHeader />
      <h2 className="text-2xl md:text-4xl font-bold font-vazir text-white mb-8 md:mb-12 text-center bg-white/5 inline-block px-6 md:px-8 py-2 md:py-3 rounded-full border border-white/10 backdrop-blur-md">انواع تست‌های عملکردی</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-7xl px-0 md:px-4" dir="rtl">
        {types.map((t, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * i }}
            className={`group relative min-h-[300px] md:h-[450px] bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col items-center text-center transition-all duration-500 ${t.color}`}
          >
            <div className={`mb-4 md:mb-8 p-4 md:p-6 rounded-full ${t.bg} group-hover:scale-110 transition-transform duration-500`}>
              {t.icon}
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white font-sans mb-1 md:mb-2 tracking-wide">{t.title}</h3>
            <p className="text-base md:text-lg font-vazir text-slate-300 font-bold mb-4 md:mb-6">{t.sub}</p>
            <div className="w-full h-[1px] bg-white/10 mb-4 md:mb-6 group-hover:bg-white/30 transition-colors" />
            <p className="text-sm md:text-base text-slate-400 font-vazir leading-relaxed">
              {t.desc}
            </p>
            
            {/* Animated corner glow */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(255,255,255,0.1), transparent 40%)' }}></div>
          </motion.div>
        ))}
      </div>
    </SlideWrapper>
  );
};