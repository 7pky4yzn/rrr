import React from 'react';
import { Reveal } from './ui/Reveal';

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#f9f9f9] px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <Reveal delay={0.1} width="100%">
            <div className="border-t border-gray-300 pt-4">
               <h3 className="font-bold mb-2">Analysis.</h3>
               <p className="text-gray-500 text-sm mb-2">Observation and critical thinking.</p>
               <p className="text-xs text-gray-400 font-medium italic">
                 (Questions answers before accepting them.)
               </p>
            </div>
          </Reveal>

          <Reveal delay={0.2} width="100%">
            <div className="border-t border-gray-300 pt-4">
               <h3 className="font-bold mb-2">Collaboration.</h3>
               <p className="text-gray-500 text-sm mb-2">Knowledge sharing and community.</p>
               <p className="text-xs text-gray-400 font-medium italic">
                 (Works alone. Thinks better together.)
               </p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="border-t border-gray-300 pt-10">
             <h3 className="text-xl font-semibold mb-8 text-gray-900">Snapshot</h3>
             <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                   <tbody className="divide-y divide-gray-200">
                      <tr>
                         <th className="py-4 font-normal text-gray-500 w-1/3">Name</th>
                         <td className="py-4 font-medium text-gray-900">Ishit Singh</td>
                      </tr>
                       <tr>
                         <th className="py-4 font-normal text-gray-500">Education</th>
                         <td className="py-4 font-medium text-gray-900">Aeronautics & Computing</td>
                      </tr>
                       <tr>
                         <th className="py-4 font-normal text-gray-500">Focus</th>
                         <td className="py-4 font-medium text-gray-900">Systems, Algorithms, Propulsion</td>
                      </tr>
                       <tr>
                         <th className="py-4 font-normal text-gray-500">Roles</th>
                         <td className="py-4 font-medium text-gray-900">Researcher, Developer, Moderator</td>
                      </tr>
                   </tbody>
                </table>
             </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};