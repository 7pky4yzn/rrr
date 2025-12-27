import React from 'react';
import { Reveal } from './ui/Reveal';
import { Hero } from './Hero';

export const HomeView: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      
      {/* Short Overview Section */}
      <section className="py-24 bg-black text-[#ededed] px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
             <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight opacity-90">
                   Clear ideas.<br />
                   Sharper execution.
                </h2>
                <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
                   My focus lies at the intersection of aeronautics and computational systems. 
                   I build to understand how things break, so I can learn how they work.
                </p>
                <p className="text-sm text-gray-600 font-medium italic pt-4">
                   (Everything else lives where it should.)
                </p>
             </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};