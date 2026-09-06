
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import WorkGrid from '../components/WorkGrid';
import Strategy from '../components/Strategy';
import Services from '../components/Services';
import BeforeAfter from '../components/BeforeAfter';
import ContactForm from '../components/ContactForm';
import { UpcomingEventsSection } from '../components/UpcomingEventsSection';
import { TESTIMONIALS } from '../data';
import { Award, Globe, Users, Calendar, Sparkles, Radio, ArrowRight, Building2, MapPin } from 'lucide-react';
import { AnimatedCounter } from '../components/AnimatedCounter';

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden bg-black text-white selection:bg-yellow-400 selection:text-black">
      <Hero />
      
      {/* Credibility Strip */}
      <section className="bg-yellow-400 py-8 sm:py-10 text-black border-y border-yellow-500 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-5 items-start">
          <div className="flex flex-col justify-start text-black">
            <span className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-black tracking-tight whitespace-nowrap">
              <AnimatedCounter end={8} suffix="+" /> <span className="text-sm sm:text-base font-bold">Years</span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-black/80 leading-tight mt-1">
              Media Exp. Since 2018
            </span>
          </div>

          <div className="flex flex-col justify-start text-black">
            <span className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-black tracking-tight whitespace-nowrap">
              <AnimatedCounter end={200} suffix="K+" />
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-black/80 leading-tight mt-1">
              Followers Across Platforms
            </span>
          </div>

          <div className="flex flex-col justify-start text-black col-span-2 md:col-span-1">
            <span className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-black tracking-tight whitespace-nowrap inline-block">
              <AnimatedCounter end={1000} prefix="Over " />
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-black/80 leading-snug mt-1">
              Event covered across America, United Kingdom & Nigeria
            </span>
          </div>

          <div className="flex flex-col justify-start text-black">
            <span className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-black tracking-tight whitespace-nowrap">
              <AnimatedCounter end={100} suffix="+" />
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-black/80 leading-tight mt-1">
              Celebrities & VIPs Interviewed
            </span>
          </div>

          <div className="flex flex-col justify-start text-black">
            <span className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-black tracking-tight whitespace-nowrap">
              Best TV '20
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-black/80 leading-tight mt-1">
              Cultural Channel Award
            </span>
          </div>
        </div>
      </section>

      {/* About GistCity Quick Teaser */}
      <section className="py-20 bg-neutral-950 border-b border-yellow-400/15">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-black uppercase tracking-widest">
                <span>Who We Are</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
                A Dynamic Digital Media & Communications Platform
              </h2>
              <p className="text-neutral-300 text-lg leading-relaxed font-medium">
                GistCity is dedicated to amplifying stories, brands, businesses, individuals, and events across America, Nigeria & United Kingdom. Through strategic media coverage, digital storytelling, branded content, social media promotion, and online publicity, we help brands and organizations increase visibility, connect with diverse audiences, and strengthen their public presence.
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-black text-sm uppercase tracking-widest group"
                >
                  <span>Explore Our Full Track Record & Story</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 bg-black/80 border border-yellow-400/20 rounded-3xl p-8 space-y-4 shadow-2xl">
              <div className="flex items-center">
                <img
                  src="https://res.cloudinary.com/progresshenry/image/upload/v1788683391/gistcity_nn_fgnqpu.png"
                  alt="GistCity"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Award-winning media platform recognized as the Best Nigerian Cultural TV Channel of the Year (2020), actively advocating for the global appreciation of African culture and heritage.
              </p>
              <div className="flex items-center gap-2 text-xs text-yellow-400 font-black pt-2 border-t border-yellow-400/15">
                <Award size={16} />
                <span>Best Cultural TV Channel (2020)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Media (Reduced on landing page, pointing to /work) */}
      <WorkGrid isLanding={true} limit={6} />

      {/* Classic Editorial Blog / Upcoming Events Section */}
      <UpcomingEventsSection isLanding={true} limit={4} />

      <Strategy />
      <Services />

      {/* Media & Distribution Network */}
      <section className="py-20 bg-neutral-950 mx-4 rounded-[3rem] border border-yellow-400/20 my-12 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-400/10 text-yellow-400 text-xs font-black uppercase tracking-widest mb-4">
            <Radio size={14} />
            <span>Global Reach & Channels</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black tracking-tight text-white mb-10 max-w-2xl mx-auto uppercase">
            Strategic Distribution Across Nigeria, America & United Kingdom
          </h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              '200K+ Social Community', 
              'Nigeria Media Hubs', 
              'US Blog Syndication', 
              'UK Cultural Network', 
              'Cultural TV Channel', 
              'Video & Podcast Feeds'
            ].map(channel => (
              <div key={channel} className="px-6 py-4 rounded-2xl bg-black/60 border border-yellow-400/20 text-base md:text-lg font-bold text-neutral-200 hover:text-yellow-400 hover:border-yellow-400/60 transition-colors">
                {channel}
              </div>
            ))}
          </div>
        </div>
      </section>

      <BeforeAfter />

      {/* Testimonials - No Avatars, Nigerian Names Only */}
      <section className="py-24 bg-black border-t border-yellow-400/15">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-yellow-400">Voices of Impact</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase">WHAT PARTNERS SAY</h2>
            <p className="text-neutral-400 max-w-lg mx-auto font-medium">Hear from corporate directors, concert organizers, and cultural leaders across Nigeria.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.slice(0, 4).map((t, idx) => (
              <div key={idx} className="bg-neutral-950 p-10 md:p-12 rounded-[2.5rem] border border-yellow-400/15 space-y-8 hover:border-yellow-400/50 transition-all shadow-xl">
                <p className="text-xl md:text-2xl font-medium leading-relaxed italic text-neutral-200">"{t.quote}"</p>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between border-t border-yellow-400/15 pt-6 gap-4">
                  {/* Clean Nigerian Name Presentation without Avatars */}
                  <div className="space-y-1">
                    <h4 className="font-black text-white text-lg tracking-tight hover:text-yellow-400 transition-colors">
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
                    <p className="text-[10px] font-black text-yellow-400 uppercase tracking-widest mb-0.5">Impact</p>
                    <p className="font-black text-sm text-white">{t.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-yellow-400 hover:text-yellow-300 border-b border-yellow-400 pb-1"
            >
              <span>View All Partner Endorsements</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Media Coverage / Promotion Packages */}
      <section className="py-24 bg-yellow-400 text-black rounded-[3rem] mx-4 my-12 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-yellow-400 text-xs font-black uppercase tracking-widest">
              Partnership Tiers
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase">PUBLICITY PACKAGES</h2>
            <p className="text-black/80 max-w-xl mx-auto font-bold">Tailored coverage and promotion solutions for events, businesses, brands, and public figures.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Event & Press Spotlight', 
                price: 'Starter', 
                desc: 'Ideal for local event publicity or single announcement launch.',
                items: ['Dedicated Press Release', 'Social Promotion (200K+ reach)', 'On-site or Virtual Coverage', 'Photo & Video Feature', 'Distribution Report'] 
              },
              { 
                name: 'Brand Amplification System', 
                price: 'Featured', 
                desc: 'Our most popular package for high-growth businesses and concerts.',
                items: ['Executive Video Interview', 'Red Carpet Media Crew', 'Multi-Platform Video Reels', 'US & Nigeria Partner Syndication', 'Priority Editorial Feature'], 
                highlight: true 
              },
              { 
                name: 'Global PR & TV Partnership', 
                price: 'Enterprise', 
                desc: 'For multi-city campaigns across Nigeria, UK, and the USA.',
                items: ['Full Documentary Storytelling', 'Cultural TV Special Broadcast', 'Cross-Continental Syndication', 'Ongoing Brand Guardianship', 'VIP Celebrity Media Facilitation'] 
              }
            ].map((p, i) => (
              <div key={i} className={`p-10 rounded-[2.5rem] border flex flex-col justify-between ${p.highlight ? 'bg-black text-white border-black ring-4 ring-black/20 shadow-2xl' : 'bg-yellow-300 border-black/15 text-black'}`}>
                <div className="space-y-4">
                  <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${p.highlight ? 'bg-yellow-400 text-black' : 'bg-black text-yellow-400'}`}>
                    {p.price}
                  </span>
                  <h3 className="text-2xl font-black">{p.name}</h3>
                  <p className={`text-xs font-medium ${p.highlight ? 'text-neutral-400' : 'text-black/75'}`}>{p.desc}</p>
                  
                  <ul className="space-y-3 pt-6 border-t border-black/10">
                    {p.items.map(item => (
                      <li key={item} className="text-sm font-bold flex items-center gap-3">
                        <span className={`w-2 h-2 rounded-full shrink-0 ${p.highlight ? 'bg-yellow-400' : 'bg-black'}`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <Link
                    to="/contact"
                    className={`block w-full text-center py-4 rounded-full font-black tracking-widest text-xs uppercase transition-transform hover:scale-[1.02] ${
                      p.highlight ? 'bg-yellow-400 hover:bg-yellow-300 text-black' : 'bg-black hover:bg-neutral-900 text-yellow-400'
                    }`}
                  >
                    Request Coverage
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />

      {/* Final CTA - Yellow and Black theme */}
      <section className="py-28 text-center relative overflow-hidden bg-black border-t border-yellow-400/20">
        <div className="relative z-10 px-6 max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-black uppercase tracking-widest">
            <span>Global Media & Communications</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-tight uppercase">
            READY TO AMPLIFY YOUR STORY <span className="text-yellow-400">GLOBALLY?</span>
          </h2>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto font-medium">
            Connect with our editorial and media team to launch your campaign across Nigeria, America & the United Kingdom.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-yellow-400 text-black px-10 py-5 rounded-full text-base font-black hover:bg-yellow-300 hover:scale-105 transition-all shadow-2xl shadow-yellow-400/20 uppercase tracking-wider"
            >
              Partner With GistCity Today
            </Link>
          </div>
        </div>
        {/* Background watermark text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none whitespace-nowrap">
          <span className="text-[20vw] font-black tracking-tighter text-yellow-400 leading-none uppercase">GISTCITY</span>
        </div>
      </section>
    </div>
  );
};

export default Home;
