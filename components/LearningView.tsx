import React from 'react';
import { Reveal } from './ui/Reveal';

export const LearningView: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-black text-[#ededed]">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <Reveal className="mb-20">
          <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight text-[#ededed] opacity-90">Learning.</h1>
          <p className="text-xl text-gray-400">Structure of thought and tools of trade.</p>
          <p className="text-xs text-gray-600 mt-2 font-medium">(Still unfinished. Intentionally.)</p>
        </Reveal>

        <div className="space-y-24">
          
          {/* Areas of Focus */}
          <section>
            <Reveal>
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-8">Academics</h2>
              <ul className="space-y-6">
                <li className="group">
                  <h3 className="text-2xl font-medium text-[#ededed] mb-1 group-hover:opacity-70 transition-opacity">Aeronautics</h3>
                  <p className="text-gray-500">Fluid dynamics, propulsion systems, and flight stability.</p>
                </li>
                <li className="group">
                  <h3 className="text-2xl font-medium text-[#ededed] mb-1 group-hover:opacity-70 transition-opacity">Systems Theory</h3>
                  <p className="text-gray-500">Control loops, feedback mechanisms, and emergent behavior.</p>
                </li>
                <li className="group">
                  <h3 className="text-2xl font-medium text-[#ededed] mb-1 group-hover:opacity-70 transition-opacity">Computational Logic</h3>
                  <p className="text-gray-500">Algorithm design, efficiency analysis, and data structures.</p>
                </li>
              </ul>
            </Reveal>
          </section>

          {/* Stack */}
          <section>
             <Reveal delay={0.1}>
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-8">Technical Stack</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">
                 <div>
                    <h4 className="font-medium text-[#ededed]">Languages</h4>
                    <ul className="mt-2 space-y-1 text-gray-500 text-sm">
                       <li>Python</li>
                       <li>C++</li>
                       <li>TypeScript</li>
                       <li>MATLAB</li>
                    </ul>
                 </div>
                 <div>
                    <h4 className="font-medium text-[#ededed]">Tools</h4>
                    <ul className="mt-2 space-y-1 text-gray-500 text-sm">
                       <li>Docker</li>
                       <li>Git</li>
                       <li>Linux</li>
                       <li>ROS</li>
                    </ul>
                 </div>
                 <div>
                    <h4 className="font-medium text-[#ededed]">Methods</h4>
                    <ul className="mt-2 space-y-1 text-gray-500 text-sm">
                       <li>CI/CD</li>
                       <li>Unit Testing</li>
                       <li>Agile</li>
                       <li>Technical Writing</li>
                    </ul>
                 </div>
              </div>
            </Reveal>
          </section>

          {/* Research */}
          <section>
            <Reveal delay={0.2}>
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-8">Current Research</h2>
               <div className="prose prose-invert max-w-none">
                  <p className="text-xl font-light leading-relaxed text-gray-400">
                     Exploring distributed decision-making in autonomous drone swarms. 
                     Specifically focusing on minimizing latency in collision avoidance protocols 
                     without relying on centralized processing units.
                  </p>
               </div>
            </Reveal>
          </section>

        </div>
      </div>
    </div>
  );
};