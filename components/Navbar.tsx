import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Sparkles, 
  Video, 
  Calendar, 
  Layers, 
  Workflow, 
  Info, 
  Quote, 
  Mail, 
  ChevronRight,
  Phone,
  ArrowRight
} from 'lucide-react';
import { GISTCITY_WHATSAPP_NUMBER, GISTCITY_FORMATTED_PHONE } from '../utils/whatsapp';
import { WhatsAppIcon } from './ContactForm';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close menu on route change or ESC key
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { 
      name: 'Coverage & Work', 
      path: '/work', 
      icon: Video, 
      desc: 'Media Archive & Videos' 
    },
    { 
      name: 'Upcoming Events', 
      path: '/events', 
      icon: Calendar, 
      badge: '2026', 
      desc: 'Galas & Conventions' 
    },
    { 
      name: 'Services', 
      path: '/services', 
      icon: Layers, 
      desc: 'PR, Video & TV' 
    },
    { 
      name: 'Process', 
      path: '/process', 
      icon: Workflow, 
      desc: 'How We Amplify Brands' 
    },
    { 
      name: 'About', 
      path: '/about', 
      icon: Info, 
      desc: 'History & Achievements' 
    },
    { 
      name: 'Testimonials', 
      path: '/testimonials', 
      icon: Quote, 
      desc: 'Partner Reviews' 
    },
    { 
      name: 'Contact', 
      path: '/contact', 
      icon: Mail, 
      desc: 'Press & Media Inquiries' 
    },
  ];

  return (
    <>
      <nav
        id="main-navbar"
        className={`sticky top-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-black/95 backdrop-blur-xl border-b border-yellow-400/20 py-2.5 sm:py-3 shadow-2xl shadow-black/80'
            : 'bg-black/85 backdrop-blur-md border-b border-white/10 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo Left - ONLY image logo, no text writeup */}
          <Link
            id="nav-logo"
            to="/"
            className="flex items-center group transition-transform duration-300 hover:scale-[1.03] shrink-0"
            aria-label="GistCity Home"
          >
            <img
              src="https://res.cloudinary.com/progresshenry/image/upload/v1788683391/gistcity_nn_fgnqpu.png"
              alt="GistCity"
              className="h-9 sm:h-11 md:h-12 w-auto object-contain drop-shadow-[0_2px_12px_rgba(250,204,21,0.35)]"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                id={`nav-link-${link.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                to={link.path}
                className={`text-xs font-bold hover:text-yellow-400 transition-colors tracking-widest uppercase relative py-1 ${
                  location.pathname === link.path ? 'text-yellow-400 font-black' : 'text-neutral-300'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400 rounded-full" />
                )}
              </Link>
            ))}
            <Link
              id="nav-cta-btn"
              to="/contact"
              className="bg-yellow-400 text-black px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-yellow-300 hover:shadow-yellow-400/30 transition-all transform hover:scale-105 active:scale-95 shadow-xl flex items-center gap-2"
            >
              <Sparkles size={14} className="text-black fill-black" />
              <span>Get Featured</span>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle Button - Tactile 44px+ Touch Target */}
          <button
            id="nav-mobile-toggle"
            type="button"
            className="lg:hidden h-11 px-3.5 rounded-xl bg-neutral-900 border border-yellow-400/40 text-yellow-400 hover:bg-neutral-800 hover:border-yellow-400 active:scale-90 transition-all flex items-center gap-2 shadow-lg"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <>
                <X size={22} className="text-yellow-400" />
                <span className="text-xs font-black uppercase tracking-wider text-yellow-400">Close</span>
              </>
            ) : (
              <>
                <Menu size={22} className="text-yellow-400" />
                <span className="text-xs font-black uppercase tracking-wider text-yellow-400">Menu</span>
              </>
            )}
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Drawer Portal - Rendered directly onto document.body to bypass any backdrop-filter or container clipping */}
      {isOpen && typeof document !== 'undefined' && createPortal(
        <div 
          id="mobile-nav-portal"
          className="fixed inset-0 z-[99999] lg:hidden flex flex-col bg-black text-white w-full h-[100dvh] overflow-hidden"
          role="dialog"
          aria-modal="true"
        >
          {/* Top Header inside Drawer */}
          <div className="h-16 sm:h-20 px-4 sm:px-6 border-b border-yellow-400/25 flex items-center justify-between shrink-0 bg-neutral-950">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center"
              aria-label="GistCity Home"
            >
              <img
                src="https://res.cloudinary.com/progresshenry/image/upload/v1788683391/gistcity_nn_fgnqpu.png"
                alt="GistCity"
                className="h-9 sm:h-10 w-auto object-contain drop-shadow-[0_2px_12px_rgba(250,204,21,0.35)]"
              />
            </Link>

            {/* High-Contrast Tactile Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="h-11 px-3.5 rounded-xl bg-neutral-900 border border-yellow-400/50 text-yellow-400 hover:bg-yellow-400 hover:text-black active:scale-90 transition-all flex items-center gap-1.5 shadow-lg"
              aria-label="Close navigation menu"
            >
              <X size={20} />
              <span className="text-xs font-black uppercase tracking-wider">Close</span>
            </button>
          </div>

          {/* Scrollable Navigation Body */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-5 space-y-4 overscroll-contain">
            
            {/* Quick Status Bar */}
            <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-yellow-400/20 text-yellow-400 text-xs font-bold">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                <span className="text-neutral-300 font-medium">Bureaus:</span>
                <span className="text-yellow-400 font-bold">USA • NG • UK</span>
              </span>
              <span className="text-[10px] uppercase font-black tracking-wider bg-yellow-400 text-black px-2 py-0.5 rounded-full">
                Est. 2018
              </span>
            </div>

            {/* Navlinks Section */}
            <div className="space-y-2 pt-1">
              <p className="text-[11px] font-black uppercase tracking-widest text-neutral-400 px-1">
                Navigation Links
              </p>

              {navLinks.map((link) => {
                const IconComponent = link.icon;
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`w-full p-3.5 rounded-2xl border transition-all flex items-center justify-between group active:scale-[0.98] ${
                      isActive
                        ? 'bg-neutral-900 border-yellow-400 text-white shadow-lg shadow-yellow-400/10'
                        : 'bg-neutral-950 border-white/10 text-neutral-200 hover:border-yellow-400/50 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div 
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isActive 
                            ? 'bg-yellow-400 text-black' 
                            : 'bg-neutral-900 text-yellow-400 border border-yellow-400/20 group-hover:border-yellow-400'
                        }`}
                      >
                        <IconComponent size={18} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-black uppercase tracking-wider ${isActive ? 'text-yellow-400' : 'text-white'}`}>
                            {link.name}
                          </span>
                          {link.badge && (
                            <span className="px-2 py-0.5 rounded-full bg-yellow-400/20 border border-yellow-400/40 text-yellow-400 text-[10px] font-black uppercase">
                              {link.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-neutral-400 font-medium">
                          {link.desc}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-neutral-500 group-hover:text-yellow-400 transition-colors">
                      {isActive && (
                        <span className="text-[10px] font-black uppercase text-yellow-400 mr-1">
                          Current
                        </span>
                      )}
                      <ChevronRight size={18} className={isActive ? 'text-yellow-400' : ''} />
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Quick Action & Contact Strip */}
            <div className="pt-4 space-y-3 border-t border-white/10">
              {/* Primary Intake Button */}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full bg-yellow-400 hover:bg-yellow-300 text-black py-4 rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl shadow-yellow-400/20 flex items-center justify-center gap-2 active:scale-95 transition-all"
              >
                <Sparkles size={16} className="text-black fill-black" />
                <span>Get Featured & Promoted</span>
                <ArrowRight size={16} />
              </Link>

              {/* Direct WhatsApp Desk Button */}
              <a
                href={`https://wa.me/${GISTCITY_WHATSAPP_NUMBER}?text=Hello%20GistCity,%20I'm%20reaching%20out%20via%20the%20website%20for%20media%20coverage%20and%20publicity.`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-black py-3.5 rounded-2xl text-xs font-black uppercase tracking-widest shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 active:scale-95 transition-all"
              >
                <WhatsAppIcon size={18} />
                <span>WhatsApp Live Desk ({GISTCITY_FORMATTED_PHONE})</span>
              </a>

              {/* Direct Call Button */}
              <a
                href="tel:+2348141577473"
                className="w-full bg-neutral-900 border border-white/15 hover:border-yellow-400/40 text-neutral-300 hover:text-white py-3 rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <Phone size={14} className="text-yellow-400" />
                <span>Direct Line: {GISTCITY_FORMATTED_PHONE}</span>
              </a>
            </div>

            {/* Official Bureaus Footer in Drawer */}
            <div className="pt-4 pb-6 text-center space-y-1">
              <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                Awarded Best Cultural TV Channel of the Year (2020)
              </p>
              <p className="text-[10px] text-neutral-500">
                Houston • Lagos • London • Atlanta
              </p>
            </div>

          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Navbar;
