import React from 'react';
import { motion } from 'framer-motion';
import { SlideWrapper, SlideHeader } from './SlideWrapper';

export const SlideTitle: React.FC = () => (
  <SlideWrapper>
    <SlideHeader />
    <div className="relative z-10 flex flex-col items-center justify-center text-center w-full">
      {/* Abstract decorative circle - Resized for mobile */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full border border-white/5 border-dashed pointer-events-none"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full border border-cyan-500/20 border-dotted pointer-events-none"
      />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative flex flex-col items-center w-full"
      >
        <h1 className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-white/50 tracking-tighter mb-4 md:mb-2 drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">
          LOAD TEST
        </h1>
        
        {/* Tagline */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-cyan-400 font-mono text-sm md:text-lg tracking-widest mb-6 font-bold px-4 text-center"
        >
          "Breaking the system before users do"
        </motion.p>

        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="h-0.5 md:h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-8 md:mb-12 max-w-[150px] md:max-w-[300px]"
        />
      </motion.div>
      
      {/* Subtitle Pill */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/10 mb-10 max-w-[90vw]"
      >
        <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse shrink-0"/>
        <p className="text-slate-300 text-[10px] md:text-sm font-semibold tracking-[0.1em] md:tracking-[0.2em] uppercase text-center">
          Modern Strategies: From Web APIs to AI Agents
        </p>
      </motion.div>
    </div>
  </SlideWrapper>
);