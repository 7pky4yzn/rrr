import React from 'react';
import { Reveal } from './ui/Reveal';

export const ContactView: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-white flex flex-col">
      <div className="max-w-2xl mx-auto w-full flex-grow">
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-semibold mb-12 tracking-tight">Contact.</h1>
          
          <div className="space-y-12">
            <div>
              <p className="text-gray-500 mb-2 text-sm font-medium uppercase tracking-wide">Email</p>
              <a href="mailto:contact@ishitsingh.com" className="text-2xl md:text-3xl text-black hover:text-blue-600 transition-colors font-medium">
                contact@ishitsingh.com
              </a>
            </div>

            <div>
              <p className="text-gray-500 mb-2 text-sm font-medium uppercase tracking-wide">Social</p>
              <div className="flex flex-col space-y-4 items-start">
                 <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-xl text-black hover:text-blue-600 transition-colors">
                   GitHub ↗
                 </a>
                 <a href="#" className="text-xl text-black hover:text-blue-600 transition-colors">
                   LinkedIn ↗
                 </a>
                 <a href="#" className="text-xl text-black hover:text-blue-600 transition-colors">
                   ResearchGate ↗
                 </a>
              </div>
            </div>

             <div className="pt-12">
                <p className="text-gray-400 text-lg">
                   Open to academic collaboration and technical discourse.
                </p>
             </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};