
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  autoSlideInterval?: number;
  className?: string;
}

const ImageCarousel: React.FC<CarouselProps> = ({ 
  images, 
  autoSlideInterval = 5000,
  className 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => {
        setIsAnimating(false);
      }, 500); // Match this to the animation duration
    }
  }, [isAnimating]);

  const goToPrevious = useCallback(() => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    goToSlide(newIndex);
    setUserInteracted(true);
  }, [currentIndex, images.length, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex = (currentIndex + 1) % images.length;
    goToSlide(newIndex);
    setUserInteracted(true);
  }, [currentIndex, images.length, goToSlide]);

  useEffect(() => {
    // Auto-advance slides if user hasn't interacted and isn't paused
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion || userInteracted || isPaused) {
      return;
    }
    
    const intervalId = setInterval(() => {
      goToNext();
    }, autoSlideInterval);
    
    return () => clearInterval(intervalId);
  }, [autoSlideInterval, currentIndex, goToNext, isPaused, userInteracted]);

  // Update current index when images change
  useEffect(() => {
    if (currentIndex >= images.length) {
      setCurrentIndex(0);
    }
  }, [images, currentIndex]);

  if (!images.length) return null;

  return (
    <div 
      className={cn(
        "relative w-full overflow-hidden h-screen", 
        className
      )}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Current slide */}
      <div 
        className="absolute inset-0 w-full h-full animate-carousel-fade"
        key={currentIndex}
      >
        <img 
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Text content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 drop-shadow-lg">
            Black Hawk Society Philippines
          </h1>
        </div>
      </div>
      
      {/* Navigation arrows */}
      <button 
        onClick={goToPrevious} 
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button 
        onClick={goToNext} 
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              currentIndex === index ? "bg-white" : "bg-white/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
