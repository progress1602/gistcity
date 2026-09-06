
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    { num: '01', title: 'Editorial Discovery', desc: 'Identifying the core news angle, story hook, event milestones, and dignitary profiles.' },
    { num: '02', title: 'Audience Strategy', desc: 'Crafting tailored angles for regional audiences across America, Nigeria & the United Kingdom.' },
    { num: '03', title: 'Media Production', desc: 'Deploying red-carpet coverage, broadcast video crews, photographers, and field journalists.' },
    { num: '04', title: 'Content Packaging', desc: 'Polishing high-impact video reels, verified press releases, and editorial articles.' },
    { num: '05', title: 'Global Syndication', desc: 'Rapid broadcast to our 200K+ community followers and partner international blogs.' },
    { num: '06', title: 'Digital Footprint & PR', desc: 'Tracking reach, syndication analytics, and archiving permanent media citations.' }
  ];

  return (
    <div className="pt-32 pb-24 bg-black text-white min-h-screen selection:bg-yellow-400 selection:text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-black uppercase tracking-widest mb-4">
            Coverage Workflow
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-6 uppercase">HOW WE <span className="text-yellow-400">AMPLIFY.</span></h1>
          <p className="text-neutral-400 max-w-xl mx-auto text-lg leading-relaxed font-medium">
            A proven, professional media methodology honed over 8+ years of operation since 2018.
          </p>
        </div>

        <div className="relative">
           {/* Vertical line for desktop */}
           <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden lg:block" />

           <div className="space-y-24 lg:space-y-48">
              {steps.map((step, i) => (
                <div key={i} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                   <div className="flex-1 w-full text-center lg:text-right">
                      {i % 2 === 0 ? (
                        <div className="space-y-4">
                           <span className="text-8xl font-black text-yellow-400/10 leading-none">{step.num}</span>
                           <h3 className="text-4xl font-black uppercase">{step.title}</h3>
                           <p className="text-neutral-400 max-w-sm ml-auto">{step.desc}</p>
                        </div>
                      ) : <div className="hidden lg:block h-32" />}
                   </div>

                   <div className="relative z-10 w-16 h-16 rounded-full bg-yellow-400 text-black border-8 border-black flex items-center justify-center font-black text-xl shadow-xl shadow-yellow-400/20">
                      {step.num}
                   </div>

                   <div className="flex-1 w-full text-center lg:text-left">
                      {i % 2 !== 0 ? (
                        <div className="space-y-4">
                           <span className="text-8xl font-black text-yellow-400/10 leading-none">{step.num}</span>
                           <h3 className="text-4xl font-black uppercase">{step.title}</h3>
                           <p className="text-neutral-400 max-w-sm mr-auto">{step.desc}</p>
                        </div>
                      ) : <div className="hidden lg:block h-32" />}
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
