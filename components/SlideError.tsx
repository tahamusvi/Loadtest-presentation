import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';
import { SlideWrapper } from './SlideWrapper';

export const SlideError: React.FC = () => (
  <SlideWrapper theme="danger">
    <div className="flex flex-col items-center justify-center z-10 text-center">
      <motion.div 
        animate={{ 
          x: [0, -5, 5, -5, 0], 
          y: [0, 5, -5, 2, 0],
          opacity: [1, 0.8, 1, 0.9, 1] 
        }}
        transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
      >
        <ShieldAlert className="w-24 h-24 md:w-40 md:h-40 text-red-500 mb-4 md:mb-8 drop-shadow-[0_0_50px_rgba(239,68,68,0.8)]" />
      </motion.div>
      
      <motion.h1 
        animate={{ skewX: [0, 10, -10, 0] }}
        transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 2 }}
        className="text-8xl md:text-[12rem] font-black text-white leading-none tracking-tighter"
      >
        500
      </motion.h1>
      
      <div className="bg-red-500 text-black font-bold px-3 py-1 md:px-4 text-lg md:text-2xl tracking-widest mt-4">
        INTERNAL SERVER ERROR
      </div>
      
      <div className="mt-8 md:mt-12 font-mono text-red-400 text-xs md:text-sm bg-black/50 p-4 rounded border border-red-500/30 text-left max-w-full overflow-x-hidden">
        <p className="break-words">{`> System.TimeoutException: The operation has timed out.`}</p>
        <p className="break-words">{`> at System.Net.HttpWebRequest.GetResponse()`}</p>
        <p className="animate-pulse">{`> Connection lost...`}</p>
      </div>
    </div>
  </SlideWrapper>
);