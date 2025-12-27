import React, { useEffect, useRef, useState } from 'react';
import { RevealProps } from '../../types';

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = "fit-content", 
  className = "", 
  delay = 0,
  threshold = 0.2
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const style = {
    transitionDelay: `${delay}s`,
  };

  return (
    <div ref={ref} style={{ width }} className={`relative overflow-hidden ${className}`}>
      <div
        style={style}
        className={`transition-all duration-1000 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {children}
      </div>
    </div>
  );
};