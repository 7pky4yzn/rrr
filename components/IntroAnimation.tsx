import React, { useState, useEffect } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'idle' | 'collapsing' | 'moving' | 'done'>('idle');

  useEffect(() => {
    // Prevent scrolling during intro
    document.body.style.overflow = 'hidden';
    
    const handleStart = () => {
      if (stage !== 'idle') return;
      setStage('collapsing');
      
      // Sequence timing matching the "collapse -> drop -> expand" feel
      setTimeout(() => setStage('moving'), 600);
      setTimeout(() => {
        setStage('done');
        document.body.style.overflow = '';
        onComplete();
      }, 1400);
    };

    const handleInteraction = () => handleStart();
    const timer = setTimeout(handleStart, 2000); // Auto start after 2s if no interaction

    window.addEventListener('click', handleInteraction);
    window.addEventListener('wheel', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('wheel', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, [stage, onComplete]);

  if (stage === 'done') return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-500">
      {/* Name Text */}
      <h1 
        className={`text-6xl md:text-9xl font-semibold tracking-tighter text-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          stage === 'idle' ? 'opacity-100 scale-100 translate-y-0 blur-0' : 
          'opacity-0 scale-75 -translate-y-12 blur-sm'
        }`}
      >
        Ishit Singh
      </h1>

      {/* The Morphing Shape - The "Drop" into Nav */}
      <div 
        className={`absolute bg-white rounded-full transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] ${
          stage === 'idle' ? 'opacity-0 w-2 h-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' : ''
        } ${
          stage === 'collapsing' ? 'opacity-100 w-4 h-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' : ''
        } ${
          stage === 'moving' ? 'opacity-0 w-[120vw] h-px top-0 left-1/2 -translate-x-1/2 rounded-none delay-100' : ''
        }`}
      ></div>
    </div>
  );
};