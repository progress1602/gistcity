
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Coverage & Work', path: '/work' },
    { name: 'Upcoming Events', path: '/events' },
    { name: 'Services', path: '/services' },
    { name: 'Process', path: '/process' },
    { name: 'About', path: '/about' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      id="main-navbar"
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-xl border-b border-yellow-400/20 py-3 shadow-2xl shadow-black/80'
          : 'bg-black/80 backdrop-blur-md border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
        {/* Logo Left - ONLY image logo, no text writeup */}
        <Link
          id="nav-logo"
          to="/"
          className="flex items-center group transition-transform duration-300 hover:scale-[1.03]"
          aria-label="GistCity Home"
        >
          <img
            src="https://res.cloudinary.com/progresshenry/image/upload/v1788683391/gistcity_nn_fgnqpu.png"
            alt="GistCity"
            className="h-10 md:h-12 w-auto object-contain drop-shadow-[0_2px_12px_rgba(250,204,21,0.35)]"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              id={`nav-link-${link.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              to={link.path}
              className={`text-xs font-bold hover:text-yellow-400 transition-colors tracking-widest uppercase relative py-1 ${
                location.pathname === link.path ? 'text-yellow-400' : 'text-neutral-300'
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

        {/* Mobile Toggle */}
        <button
          id="nav-mobile-toggle"
          className="lg:hidden p-2 text-neutral-300 hover:text-yellow-400"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/98 z-[60] flex flex-col items-center justify-center space-y-5 lg:hidden px-6">
          <div className="flex items-center justify-center mb-6">
            <img
              src="https://res.cloudinary.com/progresshenry/image/upload/v1788683391/gistcity_nn_fgnqpu.png"
              alt="GistCity"
              className="h-14 w-auto object-contain drop-shadow-[0_2px_16px_rgba(250,204,21,0.4)]"
            />
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-black uppercase tracking-wider transition-colors ${
                location.pathname === link.path ? 'text-yellow-400' : 'text-neutral-300 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-3.5 rounded-full text-sm font-black uppercase tracking-widest shadow-xl shadow-yellow-400/25"
          >
            Get Featured & Promoted
          </Link>

          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 p-3 text-neutral-400 hover:text-yellow-400"
            aria-label="Close menu"
          >
            <X size={32} />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
