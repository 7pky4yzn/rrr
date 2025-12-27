import React, { useState } from 'react';
import { Reveal } from './ui/Reveal';

export const AccessoriesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'research' | 'development'>('research');

  return (
    <section id="research" className="py-32 bg-[#f9f9f9] text-black px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-24">
          <Reveal>
             <h2 className="text-4xl md:text-6xl font-semibold mb-6">Competence.</h2>
             <p className="text-xl text-gray-500 mb-4">Extensions of capability.</p>
             <p className="text-xs text-gray-400 font-medium">
               (Still learning. Intentionally.)
             </p>
          </Reveal>
          
          <Reveal delay={0.2} className="mt-12">
            <div className="flex gap-8 text-sm font-medium">
              <button 
                onClick={() => setActiveTab('research')}
                className={`transition-colors ${activeTab === 'research' ? 'text-black border-b border-black pb-1' : 'text-gray-400 hover:text-gray-600'}`}
              >
                Research
              </button>
              <button 
                 onClick={() => setActiveTab('development')}
                 className={`transition-colors ${activeTab === 'development' ? 'text-black border-b border-black pb-1' : 'text-gray-400 hover:text-gray-600'}`}
              >
                Development
              </button>
            </div>
          </Reveal>
        </div>

        <div className="min-h-[300px]">
          {activeTab === 'research' && (
            <Reveal width="100%">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                     <h3 className="text-2xl font-bold mb-6">Inquiry</h3>
                     <p className="text-gray-500 mb-8">Deep dives into aeronautics, systems theory, and computational logic.</p>
                  </div>
                  <div>
                     <ul className="space-y-4 border-l border-gray-300 pl-6 text-gray-700">
                       <li>Literature Review</li>
                       <li>Hypothesis Testing</li>
                       <li>Data Synthesis</li>
                       <li>Technical Writing</li>
                     </ul>
                  </div>
               </div>
            </Reveal>
          )}

          {activeTab === 'development' && (
            <Reveal width="100%">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                     <h3 className="text-2xl font-bold mb-6">Build</h3>
                     <p className="text-gray-500 mb-8">Functional systems for real-world problems.</p>
                  </div>
                  <div>
                     <ul className="space-y-4 border-l border-gray-300 pl-6 text-gray-700">
                       <li>Full Stack Development</li>
                       <li>Algorithm Design</li>
                       <li>System Optimization</li>
                       <li>Prototyping</li>
                     </ul>
                  </div>
               </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
};