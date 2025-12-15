import React from 'react';
import { motion } from 'framer-motion';
import { Database, FileText, Link, LogIn, ArrowRight, Search, ShoppingCart, CreditCard, Bot } from 'lucide-react';
import { SlideWrapper, SlideHeader } from './SlideWrapper';

export const SlideScenarios: React.FC = () => {
  return (
    <SlideWrapper>
      <SlideHeader />
      <div className="w-full max-w-7xl flex flex-col items-center">
        <h2 className="text-2xl md:text-4xl font-bold font-vazir text-white mb-8 md:mb-12 text-center">
          شبیه‌سازی پیشرفته رفتار کاربر
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {/* Card 1: Data Sources */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col items-center text-center relative overflow-hidden"
          >
             <div className="bg-blue-500/10 p-4 rounded-full mb-6 relative">
               <Database className="w-10 h-10 text-blue-400 relative z-10" />
               <div className="absolute inset-0 bg-blue-500/20 blur-xl"></div>
             </div>
             
             <h3 className="text-xl font-bold font-vazir text-white mb-1">منابع داده و نقش‌ها</h3>
             <span className="text-[10px] font-mono text-slate-500 tracking-widest uppercase mb-4">Data Sources & Roles</span>
             
             <div className="bg-white/5 rounded px-3 py-1 mb-4 border border-white/10">
               <span className="text-xs text-blue-300 font-mono">Real vs Random Data</span>
             </div>

             <div className="text-sm font-vazir text-slate-300 leading-relaxed" dir="rtl">
               استفاده از لاگ‌های واقعی سرور (Access Logs) و فایل‌های CSV شامل هزاران نقش کاربری مختلف (خریدار، مدیر، بازدیدکننده).
             </div>
             
             {/* Visual Decoration */}
             <div className="absolute bottom-4 right-4 opacity-10 rotate-12">
               <FileText className="w-20 h-20 text-white" />
             </div>
          </motion.div>

          {/* Card 2: Web Scenario Chain */}
          <motion.div 
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col items-center text-center relative overflow-hidden"
          >
             <div className="bg-cyan-500/10 p-4 rounded-full mb-6 relative">
               <Link className="w-10 h-10 text-cyan-400 relative z-10" />
               <div className="absolute inset-0 bg-cyan-500/20 blur-xl"></div>
             </div>

             <h3 className="text-xl font-bold font-vazir text-white mb-1">زنجیره درخواست وب</h3>
             <span className="text-[10px] font-mono text-slate-500 tracking-widest uppercase mb-4">Web Scenario Chain</span>

             {/* Visual Chain */}
             <div className="flex items-center gap-2 mb-6 bg-black/40 p-3 rounded-lg border border-white/5">
                <LogIn className="w-5 h-5 text-slate-400" />
                <ArrowRight className="w-3 h-3 text-white/20" />
                <Search className="w-5 h-5 text-slate-400" />
                <ArrowRight className="w-3 h-3 text-white/20" />
                <ShoppingCart className="w-5 h-5 text-slate-400" />
                <ArrowRight className="w-3 h-3 text-white/20" />
                <CreditCard className="w-5 h-5 text-cyan-400" />
             </div>

             <div className="text-sm font-vazir text-slate-300 leading-relaxed" dir="rtl">
               شبیه‌سازی مسیر کامل کاربر (User Journey)، نه فقط صدا زدن یک URL خاص به صورت ایزوله.
             </div>
          </motion.div>

          {/* Card 3: AI Workload Mix */}
          <motion.div 
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.3 }}
             className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col items-center text-center relative overflow-hidden"
          >
             <div className="bg-purple-500/10 p-4 rounded-full mb-6 relative">
               <Bot className="w-10 h-10 text-purple-400 relative z-10" />
               <div className="absolute inset-0 bg-purple-500/20 blur-xl"></div>
             </div>

             <h3 className="text-xl font-bold font-vazir text-white mb-1">مدل‌سازی بار هوش مصنوعی</h3>
             <span className="text-[10px] font-mono text-slate-500 tracking-widest uppercase mb-4">AI Workload Mix</span>

             {/* Visual Chart */}
             <div className="w-full flex gap-1 h-12 mb-4 px-4">
                <div className="h-full flex-1 bg-green-500/20 border border-green-500/50 rounded flex flex-col justify-center items-center">
                  <span className="text-[10px] font-bold text-green-400">60%</span>
                  <span className="text-[8px] text-white/50">Simple</span>
                </div>
                <div className="h-full w-[30%] bg-yellow-500/20 border border-yellow-500/50 rounded flex flex-col justify-center items-center">
                   <span className="text-[10px] font-bold text-yellow-400">30%</span>
                   <span className="text-[8px] text-white/50">Mid</span>
                </div>
                <div className="h-full w-[10%] bg-red-500/20 border border-red-500/50 rounded flex flex-col justify-center items-center shadow-[0_0_10px_rgba(239,68,68,0.3)]">
                   <span className="text-[10px] font-bold text-red-400">10%</span>
                   <span className="text-[8px] text-white/50">Hard</span>
                </div>
             </div>

             <div className="text-sm font-vazir text-slate-300 leading-relaxed" dir="rtl">
               فشار اصلی روی ۱۰٪ پرامپت‌های پیچیده است که باید دقیق شبیه‌سازی شود (توزیع پرامپت).
             </div>
          </motion.div>
        </div>
      </div>
    </SlideWrapper>
  );
};