import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { SlideWrapper, SlideHeader } from './SlideWrapper';

export const SlidePractices: React.FC = () => {
  const practices = [
    {
      title: "واقع‌گرایی و محیط",
      desc: "همیشه در محیط Staging و با داده‌های واقعی (Production-like) تست بگیرید تا نتایج قابل استناد باشند."
    },
    {
      title: "استراتژی اعمال بار",
      desc: "افزایش کاربران باید پله‌ای (Ramp-up) و متناسب با پروژه باشد. همچنین زمان اجرای تست برای کشف مشکلات حیاتی است."
    },
    {
      title: "محدودیت‌های بیرونی",
      desc: "محدودیت‌های زیرساخت (Network) و سرویس‌های بیرونی (مثل درگاه پرداخت یا SMS) را قبل از تست بشناسید."
    },
    {
      title: "رویت‌پذیری کامل",
      desc: "فقط به نتیجه Pass/Fail اکتفا نکنید؛ لاگ‌ها و متریک‌ها (CPU, RAM) را به صورت موازی مانیتور کنید."
    }
  ];

  return (
    <SlideWrapper>
      <SlideHeader />
      <div className="flex flex-col-reverse md:flex-row w-full max-w-7xl items-center gap-8 md:gap-16">
        {/* Visual Content (Left) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full md:w-1/2"
        >
          <div className="relative bg-slate-900/80 border border-white/10 rounded-2xl p-4 md:p-6 shadow-2xl overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-cyan-500"></div>
             <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
               <span className="text-[10px] md:text-xs font-mono text-slate-500">DASHBOARD_V2.0</span>
               <div className="flex gap-2">
                 <div className="w-2 h-2 rounded-full bg-red-500"></div>
                 <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                 <div className="w-2 h-2 rounded-full bg-green-500"></div>
               </div>
             </div>
             
             {/* Fake Chart */}
             <div className="flex items-end gap-1 md:gap-2 h-40 md:h-64 w-full pl-2 md:pl-4 border-l border-white/10 border-b pb-2">
                {[40, 60, 45, 80, 70, 90, 85, 95].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 0.5 + (i*0.1), duration: 1, type: "spring" }}
                    className="flex-1 bg-cyan-500/20 hover:bg-cyan-500 rounded-t-sm relative group cursor-pointer"
                  >
                     <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-[10px] md:text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/20 z-10">
                       RPS: {h * 12}
                     </div>
                  </motion.div>
                ))}
             </div>
          </div>
        </motion.div>

        {/* Text Content (Right) */}
        <div className="w-full md:w-1/2 text-right">
          <h2 className="text-3xl md:text-6xl font-bold font-vazir text-white mb-6 md:mb-10 text-right leading-tight">
            نکاتی برای <span className="text-cyan-400">لودتست استاندارد</span>
          </h2>
          <p className="text-xs md:text-sm font-mono text-slate-500 tracking-widest uppercase mb-8 text-right">
            Best Practices
          </p>
          
          <div className="space-y-4 md:space-y-6" dir="rtl">
            {practices.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className="flex items-start gap-3 md:gap-4 bg-white/5 p-3 md:p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="bg-green-500/20 p-2 rounded-full shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
                </div>
                <div>
                  <h4 className="font-vazir text-sm md:text-base font-bold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="font-vazir text-xs md:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};