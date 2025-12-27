import React from 'react';
import { Reveal } from './ui/Reveal';

export const DisplaySection: React.FC = () => {
  return (
    <section className="py-32 bg-[#050505] text-white px-6 border-y border-gray-900">
      <div className="max-w-5xl mx-auto flex flex-col items-start">
        <Reveal>
          <h2 className="text-sm font-medium text-gray-500 mb-6 uppercase tracking-widest">Clarity</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className="text-4xl md:text-7xl font-bold tracking-tight mb-4">
            Clear ideas.
          </h3>
          <p className="text-xl text-gray-400 max-w-xl">
             Sharper execution through structure.
          </p>
          <p className="text-xs text-gray-600 mt-4 font-medium">
             (Noise filtered by default.)
          </p>
        </Reveal>

        <div className="w-full mt-24 border-t border-gray-800"></div>
      </div>
    </section>
  );
};