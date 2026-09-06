
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Youtube, Facebook, Award, Mail, MapPin, Phone } from 'lucide-react';

const TikTokIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-neutral-950 border-t border-white/10 pt-14 sm:pt-20 pb-10 sm:pb-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-20">
          
          {/* Brand Info - ONLY image logo, no other text writeup next to it */}
          <div className="sm:col-span-2 md:col-span-5 space-y-5 sm:space-y-6">
            <Link to="/" className="inline-block group" aria-label="GistCity Home">
              <img
                src="https://res.cloudinary.com/progresshenry/image/upload/v1788683391/gistcity_nn_fgnqpu.png"
                alt="GistCity"
                className="h-12 w-auto object-contain drop-shadow-[0_2px_12px_rgba(250,204,21,0.3)]"
              />
            </Link>
            
            <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
              America Leading Online Social Media Blog dedicated to covering stories, brands, businesses, individuals, and events across America, Nigeria & United Kingdom.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/25 text-yellow-400 text-xs font-semibold">
              <Award size={14} className="shrink-0 text-yellow-400" />
              <span>Best Nigerian Cultural TV Channel of the Year (2020)</span>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://www.facebook.com/share/1EKDAfSpFH/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2.5 rounded-full bg-white/5 hover:bg-yellow-400 hover:text-black transition-all"
                title="Follow GistCity on Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@gistcitynews?_r=1&_t=ZS-99VbhR10nQK"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="p-2.5 rounded-full bg-white/5 hover:bg-yellow-400 hover:text-black transition-all flex items-center justify-center"
                title="Follow GistCity on TikTok"
              >
                <TikTokIcon size={18} />
              </a>
              <a
                href="https://youtube.com/@gistcitynews?si=p_R-fAAZOQFGK4wX"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-2.5 rounded-full bg-white/5 hover:bg-yellow-400 hover:text-black transition-all"
                title="Subscribe to GistCity on YouTube"
              >
                <Youtube size={18} />
              </a>
              <a
                href="https://www.instagram.com/gistcitynews?stkn=MWJheHMxdzNkaXppNQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-full bg-white/5 hover:bg-yellow-400 hover:text-black transition-all"
                title="Follow GistCity on Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://x.com/gistcitynews?s=21"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="p-2.5 rounded-full bg-white/5 hover:bg-yellow-400 hover:text-black transition-all"
                title="Follow GistCity on X"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-yellow-400">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/work" className="text-neutral-400 hover:text-yellow-400 transition-colors">Media Coverage</Link></li>
              <li><Link to="/events" className="text-neutral-400 hover:text-yellow-400 transition-colors">Upcoming Events</Link></li>
              <li><Link to="/services" className="text-neutral-400 hover:text-yellow-400 transition-colors">Media & PR Services</Link></li>
              <li><Link to="/about" className="text-neutral-400 hover:text-yellow-400 transition-colors">About GistCity</Link></li>
              <li><Link to="/process" className="text-neutral-400 hover:text-yellow-400 transition-colors">Coverage Process</Link></li>
              <li><Link to="/testimonials" className="text-neutral-400 hover:text-yellow-400 transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="text-neutral-400 hover:text-yellow-400 transition-colors">Get Featured</Link></li>
            </ul>
          </div>

          {/* Coverage Pillars */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-yellow-400">Coverage Hubs</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>News & Politics</li>
              <li>Entertainment & Music</li>
              <li>Culture & Heritage</li>
              <li>Business & Startups</li>
              <li>Event Publicity</li>
              <li>Celebrity Spotlights</li>
            </ul>
          </div>

          {/* Global Presence & Contact */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-yellow-400">Global Presence & Contact</h4>
            <div className="space-y-3 text-sm text-neutral-400">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-yellow-400 mt-1 shrink-0" />
                <span>America • Nigeria • United Kingdom</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail size={16} className="text-yellow-400 mt-1 shrink-0" />
                <a href="mailto:amasapokima@gmail.com" className="hover:text-yellow-400 transition-colors break-all">
                  amasapokima@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone size={16} className="text-yellow-400 mt-1 shrink-0" />
                <div>
                  <p className="text-[10px] uppercase font-black tracking-wider text-yellow-400">WhatsApp & Call Line</p>
                  <a href="https://wa.me/2348141577473" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors font-bold text-white block">
                    +234 814 157 7473
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-block bg-yellow-400 text-black px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider hover:bg-yellow-300 transition-colors shadow-lg shadow-yellow-400/20"
              >
                Submit A Press Release
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4 text-neutral-500 text-xs font-medium">
          <p>© {new Date().getFullYear()} GISTCITY MEDIA PLATFORM. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <span className="text-neutral-400">8+ Years of Media Experience (Est. 2018)</span>
            <span className="text-yellow-400">200K+ Global Community</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
