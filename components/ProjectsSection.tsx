import React, { useState, useEffect } from 'react';
import { Reveal } from './ui/Reveal';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 'p1',
    title: 'Autonomous Swarm Logic',
    overview: 'Distributed decision-making algorithms for drone formations.',
    purpose: 'To minimize collision latency in non-deterministic environments.',
    learnings: 'Centralized control fails at scale. Localized logic prevails.',
    technologies: ['Python', 'ROS', 'C++'],
    microCopy: '(Built to understand the problem. Kept for what it taught.)'
  },
  {
    id: 'p2',
    title: 'Neural Optimization',
    overview: 'Reducing computational cost of image recognition models.',
    purpose: 'Running inference on constrained edge hardware.',
    learnings: 'Precision is expensive. Approximation is efficient.',
    technologies: ['PyTorch', 'CUDA', 'Quantization'],
    microCopy: '(Sometimes, 98% accuracy is better than 100% latency.)'
  },
  {
    id: 'p3',
    title: 'Legacy Refactor',
    overview: 'Modernizing a decade-old monolithic codebase.',
    purpose: 'Improving maintainability without breaking production.',
    learnings: 'Code is read more than it is written. Structure matters.',
    technologies: ['TypeScript', 'Docker', 'CI/CD'],
    microCopy: '(Not glamorous. Just necessary.)'
  }
];

export const ProjectsSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedId(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const activeProject = projects.find(p => p.id === selectedId);

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">Projects.</h1>
            <p className="text-xl text-gray-500">Applied theory and experimentation.</p>
          </div>
        </Reveal>

        {/* Bento Grid for Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.1} width="100%">
              <div 
                onClick={() => setSelectedId(project.id)}
                className="group aspect-square md:aspect-[4/3] bg-[#f5f5f7] rounded-3xl p-8 cursor-pointer shadow-sm hover:shadow-md transition-all duration-500 ease-out hover:scale-[1.02] flex flex-col justify-between border border-gray-100 relative overflow-hidden"
              >
                {/* Minimal Background Decoration */}
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <span className="text-lg text-black">↗</span>
                    </div>
                </div>

                <div className="mt-auto">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2 leading-tight">
                    {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                        View details
                    </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Project Window Overlay */}
      {activeProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500"
            onClick={() => setSelectedId(null)}
          ></div>
          
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300 transform transition-all">
            {/* Window Header */}
            <div className="h-10 bg-[#f0f0f0] border-b border-gray-200 flex items-center justify-between px-4">
               <div className="flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-[#ff5f57] cursor-pointer hover:bg-[#ff5f57]/80 transition-colors shadow-sm" onClick={() => setSelectedId(null)}></div>
                 <div className="w-3 h-3 rounded-full bg-[#febc2e] shadow-sm"></div>
                 <div className="w-3 h-3 rounded-full bg-[#28c840] shadow-sm"></div>
               </div>
               <span className="text-xs font-medium text-gray-500 opacity-50">{activeProject.title}</span>
               <div className="w-10"></div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12 overflow-y-auto max-h-[80vh]">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">{activeProject.title}</h3>
              <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-light">{activeProject.overview}</p>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Problem & Intent</h4>
                  <p className="text-gray-900 font-medium text-base">{activeProject.purpose}</p>
                </div>
                
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Learnings</h4>
                  <p className="text-gray-900 font-medium text-base">{activeProject.learnings}</p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-md border border-gray-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-100 mt-8">
                  <p className="text-sm text-gray-400 italic font-medium">
                    {activeProject.microCopy}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};