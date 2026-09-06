
import React from 'react';
import { SERVICES } from '../data';
import { CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-black uppercase tracking-widest">
            Core Capabilities
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase">MEDIA & PUBLICITY SERVICES</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-base sm:text-lg font-medium">Strategic media coverage, digital storytelling, branded content, and online publicity across America, Nigeria & the United Kingdom.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="bg-neutral-950 p-10 rounded-[2.5rem] border border-yellow-400/15 hover:border-yellow-400/60 transition-all flex flex-col h-full group shadow-xl">
              <div className="mb-8 w-16 h-16 rounded-2xl bg-yellow-400 flex items-center justify-center text-black shadow-xl shadow-yellow-400/20 group-hover:scale-110 group-hover:bg-yellow-300 transition-transform">
                 <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-yellow-400 transition-colors">{service.title}</h3>
              <p className="text-neutral-400 mb-8 flex-grow leading-relaxed text-sm">{service.description}</p>
              
              <div className="space-y-3 pt-6 border-t border-yellow-400/15">
                <p className="text-xs font-black uppercase tracking-widest text-yellow-400 mb-2">Key Deliverables</p>
                {service.deliverables.map((d, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-neutral-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
