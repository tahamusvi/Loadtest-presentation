import React from 'react';
import { motion } from 'framer-motion';
import { Users, Link, BarChart, Target } from 'lucide-react';
import { SlideWrapper, SlideHeader } from './SlideWrapper';

export const SlideIntro: React.FC = () => {
  const points = [
    {
      title: "تعریف دقیق",
      subtitle: "Definition",
      text: "شبیه‌سازی ترافیک و رفتار کاربران واقعی روی سرور، قبل از عرضه نهایی.",
      icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />,
      color: "from-blue-500/10 to-cyan-500/10",
      border: "border-cyan-500/30",
      delay: 0
    },
    {
      title: "حلقه گمشده",
      subtitle: "The Missing Link",
      text: "تنها پُل ارتباطی و واقعی میان تیم توسعه (Dev) و تیم عملیات (Ops).",
      icon: <Link className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />,
      color: "from-purple-500/10 to-pink-500/10",
      border: "border-pink-500/30",
      delay: 0.1
    },
    {
      title: "واقعیت‌سنجی",
      subtitle: "Reality Check",
      text: "تبدیل \"فرضیات خوش‌بینانه\" روی لپ‌تاپ برنامه‌نویس به \"داده‌های واقعی\" سرور.",
      icon: <BarChart className="w-8 h-8 md:w-10 md:h-10 text-amber-400" />,
      color: "from-amber-500/10 to-orange-500/10",
      border: "border-orange-500/30",
      delay: 0.2
    },
    {
      title: "هدف نهایی",
      subtitle: "The Goal",
      text: "پیدا کردن گلوگاه‌ها (Bottlenecks) و نقطه شکست سیستم قبل از کاربر.",
      icon: <Target className="w-8 h-8 md:w-10 md:h-10 text-emerald-400" />,
      color: "from-emerald-500/10 to-green-500/10",
      border: "border-emerald-500/30",
      delay: 0.3
    }
  ];

  return (
    <SlideWrapper>
      <SlideHeader />
      <div className="w-full h-full flex flex-col justify-center items-center py-6 md:py-10 max-w-[90rem] mx-auto">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center mb-8 md:mb-12"
        >
            <h2 className="text-3xl md:text-5xl font-black font-vazir text-white mb-2 tracking-tight">
              مقدمه‌ای بر لودتست
            </h2>
            <p className="text-xs md:text-sm font-mono text-slate-500 tracking-widest uppercase">
              Introduction to Load Testing
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full px-4 md:px-0">
          {points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: p.delay, duration: 0.5, ease: "backOut" }}
              className={`group relative overflow-hidden p-5 md:p-6 rounded-2xl border ${p.border} bg-gradient-to-b ${p.color} backdrop-blur-md transition-all duration-300 hover:translate-y-[-5px] hover:shadow-2xl flex flex-col items-center text-center h-full`}
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              
              <div className="mb-4 md:mb-6 p-3 md:p-4 rounded-full bg-slate-950/40 border border-white/5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {p.icon}
              </div>
              
              <h3 className="text-lg md:text-2xl font-black font-vazir text-white mb-1">
                {p.title}
              </h3>
              <span className="text-[10px] font-mono text-slate-500 mb-4 tracking-widest uppercase">
                {p.subtitle}
              </span>
              
              <div className="w-full h-[1px] bg-white/10 mb-4 group-hover:bg-white/20 transition-colors" />
              
              <p className="text-sm md:text-base font-vazir text-slate-200 leading-relaxed" dir="rtl">
                {p.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
};