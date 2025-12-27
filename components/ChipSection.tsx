import React from 'react';
import { Reveal } from './ui/Reveal';

export const ChipSection: React.FC = () => {
  return (
    <section id="academics" className="py-32 bg-black text-white px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
            Thinking, Refined.
          </h2>
          <p className="text-xs text-gray-600 font-medium mb-12">
            (Debugging counts as meditation.)
          </p>
        </Reveal>
        
        <Reveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-800 pt-12">
            <div>
               <h3 className="text-xl font-bold text-white mb-2">Logical reasoning.</h3>
            </div>
            <div>
               <h3 className="text-xl font-bold text-white mb-2">Systems thinking.</h3>
            </div>
            <div>
               <h3 className="text-xl font-bold text-white mb-2">Problem decomposition.</h3>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};