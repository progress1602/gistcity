import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CASE_STUDIES } from '../data';
import { ArrowUpRight, Play, ExternalLink, Video } from 'lucide-react';

interface WorkGridProps {
  limit?: number;
  isLanding?: boolean;
}

const WorkGrid: React.FC<WorkGridProps> = ({ limit, isLanding = false }) => {
  const [filter, setFilter] = useState('All');
  const categories = [
    'All', 
    'Events Coverage', 
    'Entertainment', 
    'Culture & Heritage', 
    'Business & Tech', 
    'Celebrity Interviews', 
    'Brand Campaigns', 
    'Lifestyle'
  ];

  const filteredProjects = filter === 'All' 
    ? CASE_STUDIES 
    : CASE_STUDIES.filter(p => p.category === filter || p.tags.includes(filter));

  // On the landing page, limit the displayed projects to avoid overwhelming images
  const displayedProjects = (isLanding && limit) 
    ? filteredProjects.slice(0, limit) 
    : (isLanding ? filteredProjects.slice(0, 6) : filteredProjects);

  return (
    <section id="work" className="py-16 bg-black text-white selection:bg-yellow-400 selection:text-black">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-14 border-b border-yellow-400/20 pb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-black uppercase tracking-widest">
              <Video size={13} className="text-yellow-400" />
              <span>Verified Video Coverage & Reports</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              {isLanding ? 'Featured Media Coverage' : 'Verified Coverage & Media Archive'}
            </h2>
            <p className="text-neutral-400 text-sm md:text-base font-medium">
              {isLanding 
                ? `Displaying ${displayedProjects.length} featured highlights with direct video links` 
                : `${filteredProjects.length} Verified Stories & Media Highlights with On-Demand Video Playback`}
            </p>
          </div>

          <div className="flex flex-nowrap md:flex-wrap overflow-x-auto no-scrollbar gap-2 pb-2 md:pb-0 max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all border whitespace-nowrap shrink-0 ${
                  filter === cat 
                  ? 'bg-yellow-400 border-yellow-400 text-black shadow-lg shadow-yellow-400/20' 
                  : 'bg-neutral-950 border-white/10 text-neutral-400 hover:border-yellow-400/40 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Stories Grid with Extracted Cover Images and Center Video Link Icon */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-3xl sm:rounded-[2.5rem] bg-neutral-950 border border-yellow-400/20 min-h-[470px] sm:h-[500px] flex flex-col justify-between p-5 sm:p-8 transition-all hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-400/20"
            >
              {/* Extracted Cover Image */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={project.mainImage} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-65 group-hover:opacity-85"
                  loading="lazy"
                />
                {/* Gradient Overlays for optimal readability and depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
              </div>

              {/* Top Bar: Platform Indicator & Category Badge */}
              <div className="relative z-10 flex items-center justify-between gap-3">
                <span className="px-3.5 py-1.5 rounded-full bg-yellow-400 text-black text-[10px] font-black uppercase tracking-widest shadow-md">
                  {project.category}
                </span>

                {project.videoPlatform && (
                  <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-black text-neutral-200 uppercase tracking-wider flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${project.videoPlatform === 'youtube' ? 'bg-red-500 animate-pulse' : 'bg-pink-500 animate-pulse'}`} />
                    {project.videoPlatform === 'youtube' ? 'YouTube Broadcast' : 'Instagram Reel'}
                  </span>
                )}
              </div>

              {/* CENTER VIDEO LINK ICON - Takes user directly to the video link */}
              {project.videoUrl && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="pointer-events-auto group/playbtn flex flex-col items-center gap-3 transform transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none"
                    title={`Watch Video on ${project.videoPlatform === 'youtube' ? 'YouTube' : 'Instagram'}: ${project.title}`}
                    aria-label={`Watch video: ${project.title}`}
                  >
                    <div className="relative flex items-center justify-center">
                      {/* Outer animated halo ring */}
                      <span className="absolute -inset-2.5 rounded-full bg-yellow-400/40 animate-ping opacity-60 pointer-events-none duration-1000" />
                      
                      {/* Play Icon Circle */}
                      <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-yellow-400 text-black flex items-center justify-center shadow-2xl shadow-yellow-400/60 border-2 border-white group-hover/playbtn:bg-yellow-300 transition-colors">
                        <Play size={30} className="fill-black text-black ml-1 transition-transform group-hover/playbtn:scale-115" />
                      </div>
                    </div>

                    {/* Button Label */}
                    <span className="px-4 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-yellow-400/50 text-[11px] font-black text-yellow-400 uppercase tracking-widest shadow-xl flex items-center gap-1.5 transition-all group-hover/playbtn:bg-yellow-400 group-hover/playbtn:text-black">
                      <span>{project.videoPlatform === 'youtube' ? 'Watch on YouTube' : 'Watch on Instagram'}</span>
                      <ExternalLink size={12} />
                    </span>
                  </a>
                </div>
              )}

              {/* Bottom Card Content: Title, Snippet & Case Study Link */}
              <div className="relative z-10 space-y-3 pt-5 sm:pt-6 border-t border-white/10 bg-gradient-to-t from-black/95 to-transparent -mx-5 -mb-5 p-5 sm:-mx-8 sm:-mb-8 sm:p-8">
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="px-2.5 py-0.5 rounded-full bg-neutral-900/90 border border-white/10 text-[9px] font-bold uppercase tracking-wider text-neutral-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/case-study/${project.id}`}
                  className="block group/title"
                >
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover/title:text-yellow-400 transition-colors line-clamp-2 leading-snug">
                    {project.title}
                  </h3>
                </Link>

                <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed">
                  {project.problem}
                </p>

                <div className="flex items-center justify-between pt-1">
                  <Link
                    to={`/case-study/${project.id}`}
                    className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-neutral-400 hover:text-yellow-400 transition-colors"
                  >
                    <span>Read Full Story</span>
                    <ArrowUpRight size={13} />
                  </Link>

                  {project.videoUrl && (
                    <a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-black text-yellow-400 hover:text-yellow-300 transition-colors flex items-center gap-1 uppercase tracking-wider"
                    >
                      <span>Direct Video Link</span>
                      <ExternalLink size={11} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Landing Page Link to Full Archive */}
        {isLanding && (
          <div className="mt-14 pt-8 border-t border-yellow-400/15 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-neutral-300 text-sm font-medium">
                Explore our full catalogue of verified media coverage, interviews, and reels across Nigeria, America & the UK.
              </p>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-yellow-400/20 hover:scale-105 whitespace-nowrap"
            >
              <span>Explore All Verified Coverage & Work</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkGrid;
