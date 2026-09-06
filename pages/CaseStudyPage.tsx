import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CASE_STUDIES } from '../data';
import { ArrowLeft, ExternalLink, Play, Video, Share2 } from 'lucide-react';

const CaseStudyPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = CASE_STUDIES.find(p => p.id === id);

  if (!project) return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">Story not found.</h1>
      <Link to="/work" className="text-yellow-400 font-bold uppercase text-xs tracking-widest hover:underline">
        ← Back to All Coverage
      </Link>
    </div>
  );

  return (
    <div className="pt-24 bg-black text-white min-h-screen selection:bg-yellow-400 selection:text-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-12">
          <Link to="/work" className="inline-flex items-center gap-2 text-neutral-400 hover:text-yellow-400 transition-colors group font-bold text-xs uppercase tracking-widest">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Media Coverage
          </Link>

          {project.videoUrl && (
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-black uppercase tracking-widest transition-transform hover:scale-105 shadow-lg shadow-yellow-400/20"
            >
              <Play size={14} className="fill-black" />
              <span>{project.videoPlatform === 'youtube' ? 'Watch on YouTube' : 'Watch on Instagram'}</span>
              <ExternalLink size={13} />
            </a>
          )}
        </div>

        {/* Hero Header */}
        <div className="grid lg:grid-cols-12 gap-12 mb-16 items-start">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-black uppercase tracking-widest px-3.5 py-1 bg-yellow-400 text-black rounded-full shadow-md">
                {project.category}
              </span>
              {project.videoPlatform && (
                <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1 bg-neutral-900 border border-white/20 rounded-full text-neutral-300 flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${project.videoPlatform === 'youtube' ? 'bg-red-500 animate-pulse' : 'bg-pink-500 animate-pulse'}`} />
                  {project.videoPlatform === 'youtube' ? 'YouTube Broadcast' : 'Instagram Reel Coverage'}
                </span>
              )}
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight uppercase">
              {project.title}
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-yellow-400/15">
              <div>
                <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-1">Client / Partner</p>
                <p className="text-lg font-bold text-white">{project.client}</p>
              </div>
              <div>
                <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-1">Focus Area</p>
                <p className="text-lg font-bold text-yellow-400">{project.industry}</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-1">Verified Coverage</p>
                <p className="text-lg font-bold text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  GistCity Media
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-neutral-950 p-8 rounded-3xl border border-yellow-400/20 space-y-4">
            <p className="text-xs font-black text-yellow-400 uppercase tracking-widest">
              Editorial Objective
            </p>
            <p className="text-base text-neutral-300 leading-relaxed font-medium">
              {project.problem}
            </p>
            {project.videoUrl && (
              <div className="pt-4 border-t border-white/10">
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-full bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-lg"
                >
                  <Play size={14} className="fill-black" />
                  <span>Launch Video Link</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Video Player or Extracted Hero Visual */}
        <div className="mb-20">
          {project.videoPlatform === 'youtube' ? (
            <div className="rounded-[2.5rem] overflow-hidden border border-yellow-400/25 shadow-2xl aspect-[16/9] max-w-5xl mx-auto bg-black">
              <iframe
                src="https://www.youtube-nocookie.com/embed/gyV4iihHT80?rel=0"
                title={project.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="relative rounded-[2.5rem] overflow-hidden border border-yellow-400/20 shadow-2xl aspect-[16/9] max-w-5xl mx-auto bg-neutral-950 group">
              <img 
                src={project.mainImage} 
                alt={project.title} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Direct Play Overlay for Instagram Reels */}
              {project.videoUrl && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-black/80 backdrop-blur-md border border-yellow-400/50 hover:border-yellow-400 hover:scale-105 transition-all shadow-2xl text-center group/center"
                  >
                    <div className="w-20 h-20 rounded-full bg-yellow-400 text-black flex items-center justify-center shadow-2xl shadow-yellow-400/50 group-hover/center:bg-yellow-300 transition-colors">
                      <Play size={34} className="fill-black text-black ml-1" />
                    </div>
                    <span className="text-sm font-black text-yellow-400 uppercase tracking-widest flex items-center gap-1.5">
                      Watch Reel on Instagram
                      <ExternalLink size={14} />
                    </span>
                    <span className="text-xs text-neutral-400 max-w-xs">
                      Click to launch the official high-definition video reel
                    </span>
                  </a>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Content Sections */}
        <div className="grid lg:grid-cols-3 gap-16 mb-24">
          <div className="lg:col-span-2 space-y-10">
            <section className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-black uppercase tracking-widest">
                <Video size={13} />
                <span>On-Site Media Execution</span>
              </div>
              <h3 className="text-3xl font-black tracking-tight uppercase">Coverage & Production Details</h3>
              <p className="text-lg text-neutral-300 leading-relaxed font-medium">
                {project.solution}
              </p>
            </section>

            {/* Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {project.gallery.map((img, i) => (
                <div key={i} className="rounded-3xl overflow-hidden border border-yellow-400/15 shadow-xl h-72 bg-neutral-950">
                  <img 
                    src={img} 
                    alt={`${project.title} gallery visual ${i}`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-8">
            <div className="bg-neutral-950 p-8 rounded-[2.5rem] border border-yellow-400/20 shadow-xl space-y-6">
              <h4 className="text-xs font-black uppercase tracking-widest text-yellow-400">
                Key Deliverables & Reach
              </h4>
              <ul className="space-y-4">
                {project.results.map((res, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                    <span className="font-bold text-sm text-white">{res}</span>
                  </li>
                ))}
              </ul>

              {project.videoUrl && (
                <div className="pt-4 border-t border-white/10">
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3.5 rounded-full bg-neutral-900 border border-yellow-400/30 hover:border-yellow-400 hover:text-yellow-400 text-white text-xs font-black uppercase tracking-widest transition-all"
                  >
                    Open Original Video ↗
                  </a>
                </div>
              )}
            </div>

            <div className="p-8 rounded-[2.5rem] bg-neutral-950 border border-white/10 space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-neutral-400">
                Coverage Tags
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(t => (
                  <span key={t} className="px-3 py-1 rounded-full bg-black border border-white/10 text-xs font-bold text-neutral-300">
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Footer Navigation */}
        <div className="py-16 border-t border-yellow-400/15 flex flex-wrap justify-between items-center gap-4">
          <Link to="/work" className="text-xs font-black uppercase tracking-widest text-neutral-400 hover:text-yellow-400 transition-colors">
            ← All Verified Coverage
          </Link>
          <Link 
            to="/contact" 
            className="px-8 py-3.5 rounded-full bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-black tracking-wider uppercase transition-transform hover:scale-105"
          >
            Submit Your Event For Coverage
          </Link>
          <Link to="/" className="text-xs font-black uppercase tracking-widest text-neutral-400 hover:text-yellow-400 transition-colors">
            Home →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;
