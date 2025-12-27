import React from 'react';
import { Reveal } from './ui/Reveal';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center pt-24 pb-12 bg-black text-[#ededed]">
      <div className="z-10 text-center flex flex-col items-center max-w-4xl mx-auto px-6">
        <Reveal delay={0.1}>
          <h1 className="text-6xl md:text-9xl font-semibold tracking-tighter mb-6 text-[#ededed] opacity-90">
            Ishit Singh
          </h1>
        </Reveal>
        
        <Reveal delay={0.3}>
          <p className="text-xl md:text-3xl font-medium text-gray-400">
            Academic discipline. Technical curiosity.
          </p>
          <p className="text-xs text-gray-600 mt-4 font-medium tracking-wide">
            (Occasionally asks unnecessary questions. Keeps the useful ones.)
          </p>
        </Reveal>

        <Reveal delay={0.5} width="100%" className="my-24">
           {/* Ultra-minimal separator - Darker for AMOLED */}
           <div className="w-px h-24 bg-gradient-to-b from-transparent via-gray-900 to-transparent mx-auto"></div>
        </Reveal>

        <Reveal delay={0.7}>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <Button variant="primary" size="lg" className="border border-white/10">Profile</Button>
            <Button variant="link" className="text-lg text-gray-500 hover:text-white">Work</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};