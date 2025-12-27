import React from 'react';
import { Reveal } from './ui/Reveal';

export const AboutSection: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-black text-[#ededed]">
      <div className="max-w-5xl mx-auto">
        <Reveal className="mb-12">
           <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#ededed] opacity-90">About.</h1>
        </Reveal>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px] mb-24">
          
          {/* Primary Tile - Intro */}
          <div className="col-span-1 md:col-span-2 row-span-2 bg-[#0A0A0A] rounded-3xl p-8 md:p-12 flex flex-col justify-between relative overflow-hidden transition-opacity duration-500 hover:opacity-90">
            <Reveal width="100%">
               <h2 className="text-2xl md:text-4xl font-semibold mb-6 leading-tight tracking-tight text-[#ededed]">
                 "I come from Robertsganj, a town that doesn’t rush you into becoming anything."
               </h2>
               <p className="text-gray-400 text-lg leading-relaxed">
                 My name is Ishit Singh. Life here moves at a pace that gives you time to notice things—how people think, how systems work when resources are limited, and how much effort it takes to build something properly when shortcuts are tempting. Growing up here shaped my sense of patience and perspective more than I realized at the time.
               </p>
            </Reveal>
          </div>

          {/* Secondary Tile - Photo Placeholder 1 */}
          <div className="col-span-1 row-span-1 bg-[#0A0A0A] rounded-3xl p-6 relative overflow-hidden flex flex-col justify-end group transition-opacity duration-500 hover:opacity-90">
             {/* Generative placeholder graphic */}
             <div className="absolute inset-0 bg-[#0A0A0A] flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border border-white/10 bg-white/5"></div>
             </div>
             
             <Reveal delay={0.2}>
               <p className="relative z-20 text-sm font-medium text-gray-500">Field work.</p>
             </Reveal>
          </div>

          {/* Secondary Tile - Photo Placeholder 2 (Humor) */}
          <div className="col-span-1 row-span-1 bg-[#0A0A0A] rounded-3xl p-6 relative overflow-hidden flex flex-col justify-end group transition-opacity duration-500 hover:opacity-90">
             {/* Generative placeholder graphic */}
             <div className="absolute inset-0 bg-[#0A0A0A] flex items-center justify-center">
                <div className="w-full h-px bg-white/10 rotate-45"></div>
                <div className="w-full h-px bg-white/10 -rotate-45 absolute"></div>
             </div>
             
             <Reveal delay={0.3}>
                <p className="relative z-20 text-sm font-medium text-gray-600">
                  (Yes, I usually look like this.)
                </p>
             </Reveal>
          </div>

        </div>

        {/* Extended Narrative Section */}
        <Reveal>
           <div className="max-w-3xl space-y-12">
              <div>
                <h3 className="text-xl font-semibold text-[#ededed] mb-4">Structure of thought</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  I study at Sunbeam School, Robertsganj, where academics gave structure to curiosity that already existed. I wasn’t the kind of student driven by spectacle or competition. I preferred understanding things quietly, on my own terms. When something didn’t make sense, I didn’t like letting it slide. I learned early that confusion isn’t a failure—it’s a signal that something is worth spending time on.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-[#ededed] mb-4">Honesty in systems</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Technology entered my life less as a hobby and more as a tool for answers. I was drawn to computers, systems, and later programming because they were honest. If something didn’t work, it failed clearly. There was no ambiguity, no polite encouragement—only logic. That clarity was refreshing. Over time, this turned into a habit of thinking in systems: breaking problems down, tracing causes, and rebuilding things until they made sense.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#ededed] mb-4">Process</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                   Not everything followed a straight line. Like most people, I went through phases of uncertainty—trying to figure out what mattered and what didn’t. Some interests stayed, others faded. What remained consistent was the need to understand how things function beneath the surface. Whether it was a piece of software, a concept in class, or a process that everyone else accepted without question, I wanted to know why.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                   My sense of humor developed alongside this. It’s quiet, usually dry, and rarely intentional. It’s less about being funny and more about staying grounded. When you spend a lot of time thinking seriously, a little self-awareness goes a long way. It keeps the process human. (And occasionally tolerable.)
                </p>
              </div>

              <div className="pt-8 border-t border-gray-900">
                 <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    Today, I see myself as someone still very much in progress. I care about academics, about building things properly, and about learning with intention rather than urgency. I don’t chase noise, and I don’t believe in rushing clarity. I’d rather understand fewer things deeply than collect many things superficially.
                 </p>
                 <blockquote className="text-xl md:text-2xl font-medium text-[#ededed] leading-tight">
                    "Where I come from taught me patience. What I study teaches me structure. What I enjoy teaches me curiosity. Together, they explain how I ended up here—not finished, but deliberate."
                 </blockquote>
              </div>
           </div>
        </Reveal>

      </div>
    </div>
  );
};