import React from 'react';
import { Reveal } from './ui/Reveal';

export const OSSection: React.FC = () => {
  return (
    <section className="py-32 bg-black text-white px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal className="mb-24">
          <h2 className="text-5xl md:text-8xl font-bold mb-6">Stack.</h2>
          <p className="text-xl text-gray-500 max-w-2xl mb-4">
            Academic tools and interests.
          </p>
          <p className="text-xs text-gray-600 font-medium">
            (Reads documentation. Sometimes twice.)
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <Reveal delay={0.2} width="100%">
            <div className="border-t border-gray-800 pt-8">
               <ul className="space-y-4 text-gray-400 font-medium text-lg">
                  <li>Python</li>
                  <li>C++</li>
                  <li>MATLAB</li>
                  <li>TypeScript</li>
               </ul>
            </div>
          </Reveal>
          
          <Reveal delay={0.3} width="100%">
            <div className="border-t border-gray-800 pt-8">
               <ul className="space-y-4 text-gray-400 font-medium text-lg">
                  <li>Systems Engineering</li>
                  <li>Computational Logic</li>
                  <li>Data Synthesis</li>
                  <li>Research Methodology</li>
               </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};