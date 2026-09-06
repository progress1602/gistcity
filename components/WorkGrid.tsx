
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CASE_STUDIES } from '../data';
import { ArrowUpRight } from 'lucide-react';

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
    <section id="work" className="py-16 bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-14 border-b border-yellow-400/20 pb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-400 text-xs font-black uppercase tracking-widest">
              Editorial Highlights
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
              {isLanding ? 'Featured Media Coverage' : 'Curated Media Archive'}
            </h2>
            <p className="text-neutral-400 text-sm font-medium">
              {isLanding 
                ? `Displaying ${displayedProjects.length} featured highlights (Full archive in Coverage & Work)` 
                : `${filteredProjects.length} Verified Stories & Media Highlights`}
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all border ${
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

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project) => (
            <Link 
              to={`/case-study/${project.id}`} 
              key={project.id}
              className="group relative overflow-hidden rounded-[2.5rem] bg-neutral-950 border border-yellow-400/15 h-[440px] flex flex-col justify-end p-8 transition-all hover:border-yellow-400/60 hover:shadow-2xl hover:shadow-yellow-400/15"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={project.mainImage} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-95" />
              </div>

              <div className="relative z-10 space-y-3">
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[9px] font-black uppercase tracking-widest text-neutral-300">
                      {tag}
                    </span>
                  ))}
                  <span className="px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-400 border border-yellow-400/30 text-[9px] font-black uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight group-hover:text-yellow-400 transition-colors text-white leading-tight">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-yellow-400 text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  Read Full Feature <ArrowUpRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Landing Page Link to Full Archive */}
        {isLanding && (
          <div className="mt-14 pt-8 border-t border-yellow-400/15 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-neutral-400 text-sm">
                Looking for our complete media coverage catalog of 24+ stories across America, Nigeria & the UK?
              </p>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-yellow-400/20 hover:scale-105 whitespace-nowrap"
            >
              <span>View All 24+ Stories in Coverage Archive</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkGrid;
