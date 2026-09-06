
import React from 'react';
import WorkGrid from '../components/WorkGrid';
import { Award, Globe, Radio } from 'lucide-react';

const Work: React.FC = () => {
  return (
    <div className="pt-24 bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-black uppercase tracking-widest mb-6">
          <Radio size={14} className="animate-pulse" />
          <span>Complete Media Archive • <span className="whitespace-nowrap">Over 1,000</span> event covered across America, United Kingdom & Nigeria</span>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tight mb-8 leading-none uppercase">
          MEDIA & <br /><span className="text-yellow-400">STORIES.</span>
        </h1>

        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-medium">
          Our complete archive of international events covered, celebrity interviews, brand campaigns, and cultural features across America, Nigeria & United Kingdom.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <span className="px-4 py-1.5 rounded-full bg-neutral-900 border border-white/10 text-xs font-bold text-neutral-300">
            200K+ Follower Social Reach
          </span>
          <span className="px-4 py-1.5 rounded-full bg-neutral-900 border border-white/10 text-xs font-bold text-neutral-300">
            America • Nigeria • UK
          </span>
          <span className="px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-xs font-bold text-yellow-400">
            Award-Winning Broadcast Quality
          </span>
        </div>
      </div>

      <div className="pb-24">
        <WorkGrid isLanding={false} />
      </div>
    </div>
  );
};

export default Work;
