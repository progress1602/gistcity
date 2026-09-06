
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CASE_STUDIES } from '../data';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const CaseStudyPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = CASE_STUDIES.find(p => p.id === id);

  if (!project) return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <h1 className="text-4xl font-bold">Project not found.</h1>
    </div>
  );

  return (
    <div className="pt-24 bg-black text-white min-h-screen selection:bg-yellow-400 selection:text-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Navigation */}
        <Link to="/work" className="inline-flex items-center gap-2 text-neutral-400 hover:text-yellow-400 transition-colors mb-12 group font-bold text-xs uppercase tracking-widest">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Media Coverage
        </Link>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8">
            <div className="flex flex-wrap gap-2">
              {project.tags.map(t => (
                <span key={t} className="text-xs font-black uppercase tracking-widest px-3.5 py-1 bg-yellow-400/10 border border-yellow-400/30 rounded-full text-yellow-400">
                  {t}
                </span>
              ))}
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase">{project.title}</h1>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-yellow-400/15">
               <div>
                 <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-2">Client / Partner</p>
                 <p className="text-xl font-bold text-white">{project.client}</p>
               </div>
               <div>
                 <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-2">Category</p>
                 <p className="text-xl font-bold text-yellow-400">{project.industry}</p>
               </div>
            </div>
          </div>
          <div className="flex flex-col justify-end">
             <p className="text-xl text-neutral-300 leading-relaxed border-l-4 border-yellow-400 pl-8 font-medium">
                {project.problem}
             </p>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="rounded-[3rem] overflow-hidden mb-24 aspect-[21/9] border border-yellow-400/20 shadow-2xl">
           <img src={project.mainImage} alt={project.title} className="w-full h-full object-cover" />
        </div>

        {/* Content Sections */}
        <div className="grid lg:grid-cols-3 gap-16 mb-24">
           <div className="lg:col-span-2 space-y-12">
              <section className="space-y-6">
                <h3 className="text-3xl font-black tracking-tight uppercase">The Strategy & Coverage Plan</h3>
                <p className="text-lg text-neutral-300 leading-relaxed">{project.solution}</p>
              </section>

              <div className="grid grid-cols-2 gap-8">
                 {project.gallery.map((img, i) => (
                   <img key={i} src={img} alt={`${project.title} screenshot ${i}`} className="rounded-[2rem] border border-yellow-400/15 shadow-xl object-cover h-64 w-full" />
                 ))}
              </div>
           </div>

           <aside className="space-y-12">
              <div className="bg-neutral-950 p-10 rounded-[2.5rem] border border-yellow-400/20 shadow-xl">
                 <h4 className="text-xs font-black uppercase tracking-widest text-yellow-400 mb-8">Key Media Results</h4>
                 <ul className="space-y-6">
                    {project.results.map((res, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                        <span className="font-bold text-base text-white">{res}</span>
                      </li>
                    ))}
                 </ul>
              </div>

              <div className="space-y-4">
                 <h4 className="text-xs font-black uppercase tracking-widest text-neutral-400">Share Story</h4>
                 <div className="flex gap-3">
                    {['X', 'LinkedIn', 'Copy Link'].map(s => (
                      <button key={s} className="px-5 py-2.5 bg-neutral-900 hover:bg-yellow-400 hover:text-black transition-all rounded-full text-xs font-black uppercase tracking-wider border border-white/10 cursor-pointer">
                        {s}
                      </button>
                    ))}
                 </div>
              </div>
           </aside>
        </div>

        {/* Media Highlights Showcase */}
        <div className="py-24 border-t border-yellow-400/15">
           <h2 className="text-4xl font-black tracking-tight mb-12 uppercase">MEDIA & BROADCAST HIGHLIGHTS</h2>
           <div className="grid md:grid-cols-4 gap-4 h-auto md:h-[360px]">
              <div className="bg-yellow-400 text-black rounded-3xl flex flex-col justify-between p-8 min-h-[200px] shadow-xl">
                 <span className="text-xs font-black uppercase tracking-widest text-black/70">Broadcast Channel</span>
                 <p className="font-black text-2xl">Digital Media & Editorial Feature</p>
                 <span className="text-xs font-bold text-black/80">Nigeria • USA • UK</span>
              </div>
              <div className="bg-neutral-900 text-white rounded-3xl flex flex-col justify-between p-8 min-h-[200px] border border-yellow-400/20">
                 <span className="text-xs font-black uppercase tracking-widest text-yellow-400">Audience Impact</span>
                 <p className="font-black text-2xl">200K+ Community & Global Syndication</p>
                 <span className="text-xs font-bold text-neutral-400">Cross-Platform Distribution</span>
              </div>
              <div className="md:col-span-2 bg-neutral-900 rounded-3xl overflow-hidden min-h-[240px] border border-white/10">
                 <img src={project.mainImage} alt={project.title} className="w-full h-full object-cover" />
              </div>
           </div>
        </div>

        {/* Footer Navigation */}
        <div className="py-24 border-t border-yellow-400/15 flex justify-between items-center">
           <Link to="/work" className="text-xs font-black uppercase tracking-widest text-neutral-400 hover:text-yellow-400 transition-colors">← All Media Coverage</Link>
           <Link to="/contact" className="text-lg md:text-xl font-black tracking-tight text-yellow-400 hover:text-white transition-colors uppercase">GET YOUR STORY FEATURED</Link>
           <Link to="/" className="text-xs font-black uppercase tracking-widest text-neutral-400 hover:text-yellow-400 transition-colors">Home →</Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;
