import React from 'react';
import { Reveal } from './ui/Reveal';

export const DesignSection: React.FC = () => {
  return (
    <section className="py-32 bg-white text-black px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="mb-24">
             <h2 className="text-5xl md:text-8xl font-semibold tracking-tight mb-6">
                Discipline.
             </h2>
             <p className="text-2xl text-gray-500 max-w-xl mb-4">
                Routine and consistency.
             </p>
             <p className="text-xs text-gray-400 font-medium">
                (Curiosity, but scheduled.)
             </p>
          </div>
        </Reveal>

        <Reveal delay={0.2} width="100%">
          <div className="w-full h-px bg-gray-200 mb-24"></div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal delay={0.3}>
               <div className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Habit</h3>
                  <p className="text-gray-500">Structured daily practice.</p>
               </div>
            </Reveal>
            <Reveal delay={0.4}>
               <div className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Output</h3>
                  <p className="text-gray-500">Quality on schedule.</p>
               </div>
            </Reveal>
        </div>
      </div>
    </section>
  );
};