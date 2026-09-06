
import React from 'react';
import { TESTIMONIALS } from '../data';
import { Quote, Building2, MapPin } from 'lucide-react';

const TestimonialsPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-black uppercase tracking-widest mb-4">
            Partner Feedback & Endorsements
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-6 uppercase">
            VOICES & <span className="text-yellow-400">TRUST.</span>
          </h1>
          <p className="text-neutral-400 max-w-xl mx-auto text-lg leading-relaxed font-medium">
            Hear from corporate directors, concert organizers, and cultural leaders across Nigeria who trust GistCity for high-impact media publicity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-neutral-950 p-10 md:p-12 rounded-[2.5rem] border border-yellow-400/15 relative group hover:border-yellow-400/60 transition-all shadow-xl hover:shadow-yellow-400/10"
            >
              <Quote
                className="absolute top-10 right-10 text-yellow-400/10 group-hover:text-yellow-400/20 transition-colors"
                size={70}
              />
              <div className="relative z-10 space-y-6">
                <p className="text-xl md:text-2xl font-medium leading-relaxed italic text-neutral-200">
                  "{t.quote}"
                </p>

                {/* No Avatar - Clean Editorial Author Info with Nigerian names */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between border-t border-yellow-400/15 pt-6 gap-4">
                  <div className="space-y-1">
                    <h4 className="font-black text-white text-lg tracking-tight group-hover:text-yellow-400 transition-colors">
                      {t.author}
                    </h4>
                    <p className="text-xs text-yellow-400 font-bold uppercase tracking-wider">
                      {t.role}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-neutral-400 pt-1">
                      <span className="flex items-center gap-1">
                        <Building2 size={13} className="text-yellow-400" />
                        {t.organization}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin size={13} className="text-neutral-500" />
                        {t.location}
                      </span>
                    </div>
                  </div>

                  <div className="sm:text-right bg-black/60 p-3 rounded-2xl border border-white/5">
                    <p className="text-[10px] font-black text-yellow-400 uppercase tracking-widest mb-0.5">
                      Verified Result
                    </p>
                    <p className="font-black text-sm text-white">
                      {t.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
