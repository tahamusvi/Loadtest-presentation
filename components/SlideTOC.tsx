import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SlideWrapper, SlideHeader } from './SlideWrapper';
import { containerVariants, itemVariants } from './animations';

export const SlideTOC: React.FC = () => {
  const items = [
    { title: "WHAT IS LOAD TESTING?", sub: "Core Concepts" },
    { title: "TYPES OF PERFORMANCE TESTS", sub: "Stress, Spike, Soak" },
    { title: "REAL STORY: A SERVER CRASH", sub: "Case Study" },
    { title: "LOAD TESTING TOOLS", sub: "Locust, K6, JMeter, Promptfoo" },
    { title: "CI/CD & SHIFT LEFT", sub: "Automated Pipelines" },
    { title: "WHAT TO MEASURE?", sub: "Web vs AI Metrics" },
    { title: "REALISTIC SCENARIOS", sub: "User Simulation" },
    { title: "BEST PRACTICES", sub: "Final Thoughts" }
  ];

  return (
    <SlideWrapper className="items-center md:items-start pl-0 md:pl-20">
      <SlideHeader />
      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-8 md:gap-12">
        <div className="w-full md:w-1/3 pt-0 md:pt-12 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
            TABLE OF <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">CONTENTS</span>
          </h2>
          <div className="w-20 h-2 bg-cyan-500 rounded-full mx-auto md:mx-0"/>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full md:w-2/3 grid grid-cols-1 gap-2 md:gap-4"
        >
          {items.map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="group flex items-center gap-4 md:gap-6 p-3 md:p-4 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-pointer border border-transparent hover:border-white/10"
            >
              <div className="text-2xl md:text-4xl font-black text-white/10 group-hover:text-cyan-400 transition-colors font-sans">
                0{idx + 1}
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">{item.title}</h3>
                <p className="text-xs md:text-sm text-white/40 group-hover:text-white/60">{item.sub}</p>
              </div>
              <div className="ml-auto opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all hidden md:block">
                <ArrowRight className="text-cyan-400" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SlideWrapper>
  );
};