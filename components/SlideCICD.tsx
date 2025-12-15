import React from 'react';
import { motion } from 'framer-motion';
import { GitCommit, Box, CheckCircle, Activity, Rocket, ArrowLeft, AlertTriangle, MessageSquare } from 'lucide-react';
import { SlideWrapper, SlideHeader } from './SlideWrapper';

export const SlideCICD: React.FC = () => {
  const pipeline = [
    { label: "Commit", icon: GitCommit, color: "text-slate-300" },
    { label: "Build", icon: Box, color: "text-blue-400" },
    { label: "Unit Test", icon: CheckCircle, color: "text-green-400" },
    { label: "Load Test", sub: "(Smoke)", icon: Activity, color: "text-yellow-400", pulse: true },
    { label: "Deploy", icon: Rocket, color: "text-purple-400" },
  ];

  return (
    <SlideWrapper>
      <SlideHeader />
      <div className="w-full max-w-6xl flex flex-col items-center">
        <h2 className="text-2xl md:text-5xl font-bold font-sans text-cyan-400 mb-10 md:mb-16 text-center">
          CI/CD (Shift Left)
        </h2>

        {/* Pipeline Visualization */}
        <div className="w-full mb-12 md:mb-20 overflow-x-auto pb-4">
           <div className="flex items-center justify-center min-w-[600px] md:min-w-full gap-4">
             {pipeline.map((step, i) => (
               <React.Fragment key={i}>
                 <motion.div 
                   initial={{ scale: 0, opacity: 0 }}
                   animate={{ scale: 1, opacity: 1 }}
                   transition={{ delay: i * 0.2, type: "spring" }}
                   className={`flex flex-col items-center relative ${step.pulse ? 'z-10' : ''}`}
                 >
                    {step.pulse && (
                      <div className="absolute inset-0 bg-yellow-500/20 blur-xl rounded-full animate-pulse"></div>
                    )}
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-slate-800/80 border ${step.pulse ? 'border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.3)]' : 'border-white/10'} flex items-center justify-center mb-3 relative z-10`}>
                      <step.icon className={`w-8 h-8 md:w-10 md:h-10 ${step.color}`} />
                    </div>
                    <span className="text-sm font-bold text-white">{step.label}</span>
                    {step.sub && <span className="text-xs text-yellow-400 font-mono">{step.sub}</span>}
                 </motion.div>
                 {i < pipeline.length - 1 && (
                   <motion.div 
                     initial={{ width: 0 }}
                     animate={{ width: "3rem" }}
                     transition={{ delay: i * 0.2 + 0.1, duration: 0.3 }}
                     className="h-1 bg-gradient-to-r from-slate-700 to-slate-600 rounded-full shrink-0"
                   />
                 )}
               </React.Fragment>
             ))}
           </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-4 md:px-0">
          {[
             {
               title: "Shift Left Testing",
               icon: ArrowLeft,
               desc: "تست زودتر، باگ کمتر. اجرای تست‌های سبک روی هر Commit.",
               color: "text-cyan-400",
               border: "border-cyan-500/20"
             },
             {
               title: "Performance Budgets",
               icon: AlertTriangle,
               desc: "تعریف خط قرمز: اگر سرعت پاسخگویی > ۲۰۰ms شد، بیلد را Fail کن!",
               color: "text-red-400",
               border: "border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.1)]"
             },
             {
               title: "Continuous Feedback",
               icon: MessageSquare,
               desc: "برنامه‌نویس همان لحظه می‌فهمد که تغییرش باعث کندی سیستم شده است.",
               color: "text-green-400",
               border: "border-green-500/20"
             }
          ].map((card, i) => (
            <motion.div 
              key={i}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 + (i * 0.2) }}
              className={`bg-slate-900/40 backdrop-blur-md rounded-xl p-6 border ${card.border} flex flex-col items-center text-center`}
            >
               <div className={`p-3 rounded-full bg-white/5 mb-4 ${card.color}`}>
                 <card.icon className="w-6 h-6" />
               </div>
               <h3 className="text-lg font-bold font-vazir text-white mb-2">{card.title}</h3>
               <p className="text-sm font-vazir text-slate-300 leading-relaxed" dir="rtl">{card.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </SlideWrapper>
  );
};