import React from 'react';
import { UpcomingEventsSection } from '../components/UpcomingEventsSection';
import { Radio, Calendar, Sparkles, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const EventsPage: React.FC = () => {
  return (
    <div className="pt-24 bg-black text-white min-h-screen">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-black uppercase tracking-widest mb-6">
          <Radio size={14} className="animate-pulse" />
          <span>Official GistCity Editorial & Events Dispatch</span>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight uppercase mb-8 leading-none">
          EVENTS & <br />
          <span className="text-yellow-400">DISPATCH.</span>
        </h1>

        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          The premier calendar of cultural festivals, luxury awards galas, tech summits, and entertainment premieres across America, Nigeria & the United Kingdom.
        </p>

        {/* Global Hubs Quick Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          <span className="px-4 py-1.5 rounded-full bg-neutral-900 border border-yellow-400/20 text-xs font-bold text-neutral-300 flex items-center gap-1.5">
            <MapPin size={13} className="text-yellow-400" />
            Lagos & Abuja (West Africa)
          </span>
          <span className="px-4 py-1.5 rounded-full bg-neutral-900 border border-yellow-400/20 text-xs font-bold text-neutral-300 flex items-center gap-1.5">
            <MapPin size={13} className="text-yellow-400" />
            London (United Kingdom)
          </span>
          <span className="px-4 py-1.5 rounded-full bg-neutral-900 border border-yellow-400/20 text-xs font-bold text-neutral-300 flex items-center gap-1.5">
            <MapPin size={13} className="text-yellow-400" />
            New York & Atlanta (North America)
          </span>
        </div>
      </div>

      {/* Full Upcoming Events Calendar Component */}
      <UpcomingEventsSection isLanding={false} />

      {/* Host / Media Accreditation Callout */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-neutral-950 border border-yellow-400/30 rounded-[3rem] p-10 md:p-16 text-center space-y-6 relative overflow-hidden shadow-2xl shadow-yellow-400/10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />
          
          <span className="text-xs font-black uppercase tracking-[0.25em] text-yellow-400">
            Hosting An Event?
          </span>

          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white max-w-2xl mx-auto">
            Get Your Upcoming Event Listed & Covered by GistCity
          </h2>

          <p className="text-neutral-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Partner with GistCity for official media broadcast, red-carpet interviews, live social media updates to 200K+ followers, and international press syndication.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-yellow-400/20 transform hover:scale-105"
            >
              Submit Your Event For Coverage
            </Link>
            <a
              href="mailto:editorial@gistcity.com"
              className="px-8 py-4 rounded-full border border-white/20 text-white hover:border-yellow-400 hover:text-yellow-400 transition-all text-xs font-black uppercase tracking-widest"
            >
              Email Editorial Desk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
