import React from 'react';
import { Reveal } from './ui/Reveal';

export const AboutSection: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <Reveal className="mb-12">
           <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-black">About.</h1>
        </Reveal>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
          
          {/* Primary Tile - Large Intro */}
          <div className="col-span-1 md:col-span-2 row-span-2 bg-[#f5f5f7] rounded-3xl p-8 md:p-12 flex flex-col justify-center relative overflow-hidden transition-transform duration-500 hover:scale-[1.005]">
            <Reveal width="100%">
               <h2 className="text-3xl md:text-5xl font-semibold mb-6 leading-tight tracking-tight text-black">
                 Bridging theory <br/> and reality.
               </h2>
               <p className="text-gray-600 text-lg md:text-xl max-w-md leading-relaxed">
                 My work focuses on aeronautics, computational logic, and efficient algorithms. I build systems to understand them.
               </p>
            </Reveal>
          </div>

          {/* Secondary Tile - Photo Placeholder 1 */}
          <div className="col-span-1 row-span-1 bg-[#f5f5f7] rounded-3xl p-6 relative overflow-hidden flex flex-col justify-end group transition-transform duration-500 hover:scale-[1.01]">
             {/* Generative placeholder graphic */}
             <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/0 to-white/0 z-10"></div>
             <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border border-black/10 bg-white/50"></div>
             </div>
             
             <Reveal delay={0.2}>
               <p className="relative z-20 text-sm font-medium text-gray-500">Field work.</p>
             </Reveal>
          </div>

          {/* Secondary Tile - Photo Placeholder 2 (Humor) */}
          <div className="col-span-1 row-span-1 bg-[#f5f5f7] rounded-3xl p-6 relative overflow-hidden flex flex-col justify-end group transition-transform duration-500 hover:scale-[1.01]">
             {/* Generative placeholder graphic */}
             <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <div className="w-full h-px bg-black/10 rotate-45"></div>
                <div className="w-full h-px bg-black/10 -rotate-45 absolute"></div>
             </div>
             
             <Reveal delay={0.3}>
                <p className="relative z-20 text-sm font-medium text-gray-500">
                  (Yes, I usually look like this.)
                </p>
             </Reveal>
          </div>

        </div>
      </div>
    </div>
  );
};