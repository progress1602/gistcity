
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Award, Sparkles, TrendingUp, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero-section" className="relative min-h-[92vh] flex items-center pt-8 pb-16 overflow-hidden bg-black text-white">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070&auto=format&fit=crop" 
          alt="GistCity Global Media Events" 
          className="w-full h-full object-cover opacity-20"
        />
        {/* Gradient Overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        
        {/* Left Column Content */}
        <div className="lg:col-span-7 space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
          
          <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-black uppercase tracking-widest backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <span>Digital Media & Communications Platform</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.06] tracking-tight text-white uppercase">
            America Leading <br />
            <span className="text-yellow-400">
              Online Social Media Blog
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 max-w-xl leading-relaxed font-medium">
            GistCity connects impactful stories with diverse audiences across <strong className="text-yellow-400 font-bold">America, Nigeria & United Kingdom</strong> through strategic media coverage, digital storytelling, and online publicity.
          </p>

          <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400 font-bold tracking-wide">
            <span className="px-3 py-1.5 rounded-full bg-neutral-900 border border-white/10 text-neutral-300">News & Politics</span>
            <span className="px-3 py-1.5 rounded-full bg-neutral-900 border border-white/10 text-neutral-300">Entertainment</span>
            <span className="px-3 py-1.5 rounded-full bg-neutral-900 border border-white/10 text-neutral-300">Lifestyle</span>
            <span className="px-3 py-1.5 rounded-full bg-yellow-400/15 border border-yellow-400/30 text-yellow-400">African Culture</span>
            <span className="px-3 py-1.5 rounded-full bg-neutral-900 border border-white/10 text-neutral-300">Business</span>
            <span className="px-3 py-1.5 rounded-full bg-neutral-900 border border-white/10 text-neutral-300">Events & Galas</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link
              to="/work"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-yellow-300 transition-all group shadow-xl shadow-yellow-400/20 hover:scale-105"
            >
              <span>Explore Media Coverage</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/events"
              className="bg-neutral-900/90 backdrop-blur-md border border-yellow-400/30 text-yellow-400 px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-yellow-400 hover:text-black transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Upcoming Events</span>
            </Link>
            <Link
              to="/contact"
              className="bg-neutral-900/90 backdrop-blur-md border border-white/15 text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2"
            >
              Get Featured
            </Link>
          </div>

          {/* Key Stat Badges */}
          <div className="pt-4 grid grid-cols-3 gap-4 border-t border-yellow-400/15">
            <div>
              <p className="text-2xl sm:text-3xl font-black text-white">8+ Years</p>
              <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">Media Exp. Since 2018</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-yellow-400">200K+</p>
              <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">Followers Across Platforms</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-white">Over 1,000</p>
              <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">Event covered across America, United Kingdom & Nigeria</p>
            </div>
          </div>
        </div>

        {/* Right Column Visual Showcase */}
        <div className="lg:col-span-5 relative group animate-in fade-in zoom-in duration-1000 delay-200">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-yellow-400/15 blur-[120px] rounded-full group-hover:bg-yellow-400/25 transition-all duration-700" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-500/15 blur-[120px] rounded-full group-hover:bg-amber-500/25 transition-all duration-700" />
          
          <div className="relative z-10 rounded-[3rem] overflow-hidden border border-yellow-400/20 bg-neutral-950 shadow-2xl p-6 sm:p-8 space-y-6">
            
            {/* Logo Display Header - ONLY image logo, no text writeup */}
            <div className="flex items-center justify-between border-b border-yellow-400/15 pb-5">
              <div className="flex items-center">
                <img
                  src="https://res.cloudinary.com/progresshenry/image/upload/v1788683391/gistcity_nn_fgnqpu.png"
                  alt="GistCity"
                  className="h-11 w-auto object-contain drop-shadow-[0_2px_10px_rgba(250,204,21,0.3)]"
                />
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-yellow-400 bg-yellow-400/10 border border-yellow-400/30 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" /> Live Editorial Desk
              </span>
            </div>

            {/* Featured Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-white/10 group-hover:border-yellow-400/40 transition-colors">
              <img 
                src="https://res.cloudinary.com/progresshenry/image/upload/v1788703315/gist.jpg_u76qzj.jpg" 
                alt="GistCity Global Event Coverage" 
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <span className="px-2.5 py-1 rounded-md bg-yellow-400 text-black text-[10px] font-black uppercase tracking-wider">
                  Event Spotlight
                </span>
                <p className="text-white font-bold text-sm sm:text-base mt-1.5 leading-snug">
                  Over 1,000 event covered across America, United Kingdom & Nigeria
                </p>
              </div>
            </div>

            {/* Award Banner */}
            <div className="bg-yellow-400/10 p-4 rounded-2xl border border-yellow-400/30 flex items-center gap-3">
              <div className="p-2 bg-yellow-400/20 rounded-xl text-yellow-400 shrink-0">
                <Award size={22} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-wider text-yellow-400">Award Recognition</p>
                <p className="text-xs font-bold text-white leading-tight">
                  Best Nigerian Cultural TV Channel of the Year (2020)
                </p>
              </div>
            </div>

            {/* Platform stats row */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-black/60 border border-white/5 flex items-center gap-3">
                <Users className="text-yellow-400 shrink-0" size={18} />
                <div>
                  <p className="text-[10px] text-neutral-400 uppercase font-bold">Audience</p>
                  <p className="text-sm font-black text-white">200K+ Follower Base</p>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-black/60 border border-white/5 flex items-center gap-3">
                <Sparkles className="text-yellow-400 shrink-0" size={18} />
                <div>
                  <p className="text-[10px] text-neutral-400 uppercase font-bold">Interviews</p>
                  <p className="text-sm font-black text-white">100+ Celebrities</p>
                </div>
              </div>
            </div>

          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-4 bg-yellow-400 text-black p-4 rounded-2xl shadow-2xl transform rotate-3 hidden sm:flex items-center gap-3 border border-yellow-300">
            <div className="p-2 bg-black rounded-xl text-yellow-400">
              <Globe size={20} />
            </div>
            <div>
              <p className="text-[9px] font-black uppercase tracking-widest text-black/80">Global Syndication</p>
              <p className="text-xs font-black">Nigeria • USA • UK</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
