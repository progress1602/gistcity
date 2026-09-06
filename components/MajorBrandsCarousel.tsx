import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowUpRight, 
  ShieldCheck, 
  Maximize2,
  X
} from 'lucide-react';
import { MAJOR_BRANDS } from '../data';
import { BrandPartner } from '../types';

interface MajorBrandsCarouselProps {
  className?: string;
}

export const MajorBrandsCarousel: React.FC<MajorBrandsCarouselProps> = ({ className = '' }) => {
  const [activeBrandModal, setActiveBrandModal] = useState<BrandPartner | null>(null);
  const [isHoveredOnBrand, setIsHoveredOnBrand] = useState<boolean>(false);

  // Duplicate the array twice for an uninterrupted seamless loop
  const duplicatedBrands = [...MAJOR_BRANDS, ...MAJOR_BRANDS];

  return (
    <section 
      id="our-major-brands" 
      className={`py-20 bg-black relative border-b border-yellow-400/20 overflow-hidden ${className}`}
    >
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-black uppercase tracking-widest shadow-sm">
              <Sparkles size={14} className="text-yellow-400 animate-pulse" />
              <span>Strategic Partnerships & Sponsors</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
              OUR MAJOR BRANDS
            </h2>
            
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
              Proudly collaborating with visionary brands, corporate leaders, and community organizations across <strong className="text-yellow-400">America, Nigeria & the United Kingdom</strong>.
            </p>
          </div>

          {/* Action Button */}
          <div className="flex items-center self-start md:self-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider transition-all transform active:scale-95 shadow-md shadow-yellow-400/20"
            >
              <span>Partner With Us</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Carousel Viewport Container */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Edge Blur Gradients for Seamless Depth */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

          {/* Hardware-Accelerated Smooth Glide Track */}
          <div
            className="brands-glide-track flex gap-6"
            style={{
              animationPlayState: isHoveredOnBrand ? 'paused' : 'running'
            }}
          >
            {duplicatedBrands.map((brand, idx) => (
              <div
                key={`${brand.id}-${idx}`}
                onMouseEnter={() => setIsHoveredOnBrand(true)}
                onMouseLeave={() => setIsHoveredOnBrand(false)}
                className="brand-card-hover-target w-64 sm:w-72 md:w-80 shrink-0 bg-neutral-950/90 border border-white/10 hover:border-yellow-400/60 rounded-3xl p-5 sm:p-6 transition-colors duration-300 shadow-xl hover:shadow-2xl hover:shadow-yellow-400/15 flex flex-col justify-between relative overflow-hidden group/card backdrop-blur-sm"
              >
                {/* Subtle Card Accent Light */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-yellow-400/10 rounded-full blur-xl group-hover/card:bg-yellow-400/25 transition-colors duration-500 pointer-events-none" />

                {/* Top Card Pill / Category */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-2.5 py-1 rounded-full">
                    <ShieldCheck size={12} className="text-yellow-400" />
                    <span>{brand.category || 'Major Brand'}</span>
                  </span>

                  <button
                    onClick={() => setActiveBrandModal(brand)}
                    className="text-neutral-500 hover:text-yellow-400 p-1 rounded-md transition-colors"
                    title="View sharp high-res logo"
                    aria-label={`View ${brand.name} logo`}
                  >
                    <Maximize2 size={13} />
                  </button>
                </div>

                {/* High-Contrast Pristine Stage for 100% Crisp Sharpness */}
                <div 
                  onClick={() => setActiveBrandModal(brand)}
                  className="bg-white rounded-2xl p-5 sm:p-6 h-28 sm:h-32 flex items-center justify-center shadow-md relative overflow-hidden transition-transform duration-300 group-hover/card:scale-[1.02] cursor-pointer ring-1 ring-black/5"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    loading="lazy"
                    className="max-h-16 sm:max-h-20 w-auto max-w-[85%] object-contain filter drop-shadow-sm transition-transform duration-300 group-hover/card:scale-105"
                  />
                </div>

                {/* Card Subtitle / Indicator */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
                  <span className="font-semibold text-neutral-300 truncate max-w-[170px]">
                    {brand.subtitle || 'Official Partner'}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-400/80">
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Partnership Value Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-neutral-950 border border-yellow-400/20 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          <div className="space-y-1 pt-2 sm:pt-0">
            <p className="text-2xl font-black text-yellow-400">Over 1,000</p>
            <p className="text-xs uppercase font-bold tracking-wider text-neutral-400">
              International Events Covered
            </p>
          </div>
          <div className="space-y-1 pt-4 sm:pt-0">
            <p className="text-2xl font-black text-yellow-400">200K+ Audience</p>
            <p className="text-xs uppercase font-bold tracking-wider text-neutral-400">
              Cross-Platform Global Reach
            </p>
          </div>
          <div className="space-y-1 pt-4 sm:pt-0">
            <p className="text-2xl font-black text-yellow-400">3 Continents</p>
            <p className="text-xs uppercase font-bold tracking-wider text-neutral-400">
              America • Nigeria • United Kingdom
            </p>
          </div>
        </div>
      </div>

      {/* Sharp High-Resolution Logo Inspection Modal */}
      {activeBrandModal && (
        <div className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-neutral-950 border border-yellow-400/40 rounded-3xl max-w-lg w-full p-8 relative shadow-2xl shadow-yellow-400/20 text-white animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveBrandModal(null)}
              className="absolute top-6 right-6 text-neutral-400 hover:text-yellow-400 text-xl font-bold cursor-pointer"
              aria-label="Close brand preview modal"
            >
              <X size={20} />
            </button>

            <div className="space-y-6 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-400 text-xs font-black uppercase tracking-wider">
                <span>{activeBrandModal.category || 'Major Brand Partner'}</span>
              </div>

              <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                Official Brand Collaboration
              </h3>

              <div className="bg-white rounded-2xl p-8 flex items-center justify-center shadow-2xl ring-1 ring-black/10 my-4 min-h-[160px]">
                <img
                  src={activeBrandModal.logo}
                  alt={activeBrandModal.name}
                  className="max-h-28 w-auto max-w-full object-contain filter drop-shadow-md"
                />
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed max-w-sm mx-auto">
                {activeBrandModal.subtitle || 'Partnered with GistCity across high-profile international events, digital publicity campaigns, and broadcast features.'}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/contact"
                  onClick={() => setActiveBrandModal(null)}
                  className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all shadow-lg shadow-yellow-400/20 inline-flex items-center justify-center gap-2"
                >
                  <span>Inquire Brand Sponsorship</span>
                  <ArrowUpRight size={14} />
                </Link>
                <button
                  onClick={() => setActiveBrandModal(null)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-bold text-neutral-400 hover:text-white cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
