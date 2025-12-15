import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Slides } from './components/Slides';
import { SlideFooter } from './components/SlideWrapper';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const totalSlides = Slides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'Enter':
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'Backspace':
          prevSlide();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = Slides[currentSlideIndex];

  return (
    <div className="w-screen h-screen bg-black text-white relative overflow-hidden flex flex-col font-sans">
      
      {/* Top Progress Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-white/5 z-50">
        <div 
          className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 shadow-[0_0_10px_rgba(6,182,212,0.8)] transition-all duration-700 ease-[0.22,1,0.36,1]"
          style={{ width: `${((currentSlideIndex + 1) / totalSlides) * 100}%` }}
        />
      </div>

      {/* Main Slide Area */}
      <main className="flex-grow relative w-full h-full">
        <AnimatePresence mode="wait">
          <CurrentSlideComponent key={currentSlideIndex} />
        </AnimatePresence>
      </main>

      {/* Navigation Controls */}
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-10 flex gap-3 z-50">
        <button 
          onClick={prevSlide}
          disabled={currentSlideIndex === 0}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed group"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-white/70 group-hover:text-white" />
        </button>
        <button 
          onClick={nextSlide}
          disabled={currentSlideIndex === totalSlides - 1}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all disabled:opacity-30 disabled:cursor-not-allowed group"
        >
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white/70 group-hover:text-cyan-400" />
        </button>
      </div>

      {/* Footer Meta */}
      <SlideFooter current={currentSlideIndex + 1} total={totalSlides} />
    </div>
  );
};

export default App;