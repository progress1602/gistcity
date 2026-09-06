
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Youtube, Award, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-neutral-950 border-t border-white/10 pt-20 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Info - ONLY image logo, no other text writeup next to it */}
          <div className="md:col-span-5 space-y-6">
            <Link to="/" className="inline-block group" aria-label="GistCity Home">
              <img
                src="https://res.cloudinary.com/progresshenry/image/upload/v1788683391/gistcity_nn_fgnqpu.png"
                alt="GistCity"
                className="h-12 w-auto object-contain drop-shadow-[0_2px_12px_rgba(250,204,21,0.3)]"
              />
            </Link>
            
            <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
              A dynamic digital media and communications platform dedicated to amplifying stories, brands, businesses, individuals, and events across America, Nigeria & United Kingdom.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/25 text-yellow-400 text-xs font-semibold">
              <Award size={14} className="shrink-0 text-yellow-400" />
              <span>Best Nigerian Cultural TV Channel of the Year (2020)</span>
            </div>

            <div className="flex gap-3 pt-2">
              <a href="#" aria-label="Instagram" className="p-2.5 rounded-full bg-white/5 hover:bg-yellow-400 hover:text-black transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Twitter / X" className="p-2.5 rounded-full bg-white/5 hover:bg-yellow-400 hover:text-black transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" aria-label="YouTube" className="p-2.5 rounded-full bg-white/5 hover:bg-yellow-400 hover:text-black transition-all">
                <Youtube size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="p-2.5 rounded-full bg-white/5 hover:bg-yellow-400 hover:text-black transition-all">
                <Linkedin size={18} />
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
            <h4 className="text-xs font-bold uppercase tracking-widest text-yellow-400">Global Presence</h4>
            <div className="space-y-3 text-sm text-neutral-400">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-yellow-400 mt-1 shrink-0" />
                <span>America • Nigeria • United Kingdom</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail size={16} className="text-yellow-400 mt-1 shrink-0" />
                <span>editorial@gistcity.com</span>
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
            <span className="text-purple-400">200K+ Global Community</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
