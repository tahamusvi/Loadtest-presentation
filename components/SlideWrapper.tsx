import React from 'react';
import { motion } from 'framer-motion';

interface SlideWrapperProps {
  children: React.ReactNode;
  className?: string;
  theme?: 'default' | 'danger';
}

export const SlideWrapper: React.FC<SlideWrapperProps> = ({ children, className = '', theme = 'default' }) => {
  const isDanger = theme === 'danger';

  return (
    <div className="relative w-full h-full bg-slate-950 overflow-hidden flex flex-col">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        {!isDanger && (
          <>
            <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-cyan-500/20 rounded-full blur-[60px] md:blur-[100px] animate-blob mix-blend-screen" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-violet-500/20 rounded-full blur-[60px] md:blur-[100px] animate-blob animation-delay-2000 mix-blend-screen" />
            <div className="absolute bottom-[20%] left-[20%] w-[40vw] h-[40vw] bg-pink-500/10 rounded-full blur-[60px] md:blur-[100px] animate-blob animation-delay-4000 mix-blend-screen" />
          </>
        )}
        {isDanger && (
          <>
             <div className="absolute top-[10%] left-[10%] w-[70vw] h-[70vw] bg-red-600/20 rounded-full blur-[120px] animate-pulse" />
          </>
        )}
        
        {/* Noise Overlay for Texture */}
        <div className="absolute inset-0 opacity-[0.03] z-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      </div>

      {/* Main Content Container - Scrollable on mobile, Centered on Desktop */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`relative z-20 w-full h-full overflow-y-auto md:overflow-hidden flex flex-col items-center justify-start md:justify-center p-6 md:p-8 pt-20 md:pt-8 ${className}`}
      >
        {children}
        {/* Spacer for mobile scrolling so footer doesn't cover content */}
        <div className="w-full h-24 md:hidden shrink-0" />
      </motion.div>
    </div>
  );
};

export const SlideHeader: React.FC<{ text?: string }> = ({ text = "IUST" }) => (
  <motion.div 
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5 }}
    className="absolute top-4 right-4 md:top-8 md:right-10 flex items-center gap-3 z-30"
  >
    <div className="h-[1px] w-8 md:w-12 bg-white/30"></div>
    <div className="text-white/50 font-black tracking-[0.3em] text-xs md:text-sm uppercase font-sans">
      {text}
    </div>
  </motion.div>
);

export const SlideFooter: React.FC<{ current: number; total: number }> = ({ current, total }) => (
  <motion.div 
    className="absolute bottom-4 left-0 w-full px-4 md:bottom-8 md:px-10 flex items-end justify-start gap-4 md:gap-8 z-30 pointer-events-none"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
  >
    <div className="flex flex-col">
      <span className="text-[10px] md:text-xs font-bold text-cyan-400 tracking-widest mb-1">LOAD TESTING</span>
      <span className="text-[8px] md:text-[10px] text-white/40 uppercase tracking-wider hidden md:block">Software Engineering</span>
    </div>
    
    {/* Vertical Separator (hidden on very small screens) */}
    <div className="w-[1px] h-6 bg-white/10 hidden sm:block"></div>
    
    <div className="flex items-baseline gap-1 md:gap-2">
       <span className="text-[8px] md:text-[10px] text-white/30 font-mono mr-1">PAGE</span>
       <div className="text-xl md:text-2xl font-black text-white/30 font-sans tracking-tighter">
         {current.toString().padStart(2, '0')}
       </div>
       <span className="text-xs md:text-sm text-white/10 font-sans">/ {total.toString().padStart(2, '0')}</span>
    </div>
  </motion.div>
);