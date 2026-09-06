
import React from 'react';
import { Search, Compass, Video, Share2, Award } from 'lucide-react';

const Strategy: React.FC = () => {
  const steps = [
    { title: 'Narrative & Angle Discovery', icon: <Search size={22} />, desc: 'We uncover the authentic human hook, cultural relevance, and news value behind your story, event, or brand.' },
    { title: 'Cross-Border Audience Mapping', icon: <Compass size={22} />, desc: 'We target key demographics across America, Nigeria & the United Kingdom to ensure cultural resonance.' },
    { title: 'High-Impact Media Production', icon: <Video size={22} />, desc: 'Deploying red-carpet coverage, broadcast journalism, high-definition reels, and compelling editorial releases.' },
    { title: '200K+ Community Syndication', icon: <Share2 size={22} />, desc: 'Rapid distribution across our social community, video channels, and established international media partner blogs.' },
    { title: 'Publicity & Cultural Legacy', icon: <Award size={22} />, desc: 'Securing lasting digital footprint, verified press citations, and brand prestige that drives real audience growth.' }
  ];

  return (
    <section id="strategy-section" className="py-24 bg-white text-black rounded-[3rem] mx-4 my-12 overflow-hidden border border-yellow-400/30 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black text-yellow-400 text-xs font-black uppercase tracking-widest">
              Our Methodology
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none uppercase">
              STRATEGIC MEDIA <br />
              <span className="text-black underline decoration-yellow-400 decoration-8 underline-offset-8">MAXIMUM IMPACT.</span>
            </h2>
            <p className="text-lg text-neutral-700 max-w-lg leading-relaxed font-medium">
              We do more than just publish. We architect compelling media moments that capture attention, preserve heritage, and position leaders on the world stage.
            </p>
            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-neutral-200">
              <div>
                <p className="text-3xl font-black text-black">8+ Yrs</p>
                <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Media Track Record</p>
              </div>
              <div>
                <p className="text-3xl font-black text-black">200K+</p>
                <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Followers Base</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-black">Over 1,000</p>
                <p className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider">Event covered across America, United Kingdom & Nigeria</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {steps.map((step, idx) => (
              <div key={idx} className="group flex items-start gap-5 p-5 rounded-2xl hover:bg-neutral-50 transition-colors border border-transparent hover:border-yellow-400/40">
                <div className="p-3.5 rounded-xl bg-yellow-400 text-black group-hover:bg-black group-hover:text-yellow-400 transition-all shrink-0 shadow-md">
                  {step.icon}
                </div>
                <div>
                  <h4 className="text-lg font-black mb-1">{step.title}</h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategy;
