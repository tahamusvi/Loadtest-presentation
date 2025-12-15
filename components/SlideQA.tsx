import React from 'react';
import { HelpCircle } from 'lucide-react';
import { SlideWrapper, SlideHeader } from './SlideWrapper';

export const SlideQA: React.FC = () => (
  <SlideWrapper>
    <SlideHeader />
    <div className="flex flex-col items-center justify-center relative z-10">
      
      <div className="relative">
        <div className="absolute inset-0 bg-cyan-500 blur-[80px] opacity-20 animate-pulse"></div>
        <HelpCircle className="w-24 h-24 md:w-40 md:h-40 text-cyan-400 mb-6 md:mb-8 relative z-10" strokeWidth={1} />
      </div>

      <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 mb-6">
        Q & A
      </h1>
      
    </div>
  </SlideWrapper>
);