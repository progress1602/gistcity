
import React from 'react';
import { SERVICES } from '../data';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-black text-white min-h-screen selection:bg-yellow-400 selection:text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-black uppercase tracking-widest">
            Coverage, Storytelling & Online Publicity
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none uppercase">MEDIA & PR <br/><span className="text-yellow-400">SERVICES.</span></h1>
          <p className="text-xl text-neutral-300 max-w-2xl leading-relaxed font-medium">
            From strategic media coverage and celebrity interviews to branded storytelling and online publicity across Nigeria, America & United Kingdom, we amplify your voice globally.
          </p>
        </div>

        <div className="space-y-8">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="group p-12 rounded-[3rem] bg-neutral-950 border border-yellow-400/15 hover:border-yellow-400/50 transition-all shadow-xl">
              <div className="grid lg:grid-cols-2 gap-12">
                 <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-[10px] font-black uppercase tracking-widest">
                       Service 0{idx + 1}
                    </div>
                    <h3 className="text-4xl md:text-6xl font-black tracking-tight group-hover:text-yellow-400 transition-colors">{service.title}</h3>
                    <p className="text-lg text-neutral-400 leading-relaxed">{service.description}</p>
                    <Link to="/contact" className="inline-flex items-center gap-3 font-black text-xs uppercase tracking-widest text-yellow-400 hover:gap-5 transition-all">
                       Book This Service <ArrowRight size={18} />
                    </Link>
                 </div>
                 <div className="bg-black p-10 rounded-[2rem] border border-yellow-400/15">
                    <p className="text-xs font-black uppercase tracking-widest text-yellow-400 mb-6">Key Deliverables</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       {service.deliverables.map((d, i) => (
                         <div key={i} className="flex items-center gap-3 text-neutral-300">
                            <CheckCircle2 size={18} className="text-yellow-400 shrink-0" />
                            <span className="font-medium text-sm">{d}</span>
                         </div>
                       ))}
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

export default ServicesPage;
