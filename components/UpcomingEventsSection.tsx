import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Radio, ArrowUpRight, Clock, Tag } from 'lucide-react';
import { UPCOMING_EVENTS } from '../data';
import { EventPost } from '../types';

interface UpcomingEventsProps {
  isLanding?: boolean;
  limit?: number;
}

export const UpcomingEventsSection: React.FC<UpcomingEventsProps> = ({ isLanding = false, limit }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalEvent, setActiveModalEvent] = useState<EventPost | null>(null);
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);

  const categories = ['All', ...Array.from(new Set(UPCOMING_EVENTS.map(e => e.category)))];

  const filteredEvents = selectedCategory === 'All'
    ? UPCOMING_EVENTS
    : UPCOMING_EVENTS.filter(e => e.category === selectedCategory);

  const displayedEvents = limit ? filteredEvents.slice(0, limit) : filteredEvents;

  return (
    <section id="upcoming-events" className="py-24 bg-black text-white relative border-t border-yellow-400/15">
      {/* Subtle Yellow Ambient Accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-yellow-400/20 pb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-black uppercase tracking-widest mb-4">
              <Radio size={14} className="text-yellow-400 animate-pulse" />
              <span>GistCity Editorial & Events Dispatch</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-none">
              UPCOMING <span className="text-yellow-400">EVENTS.</span>
            </h2>
            <p className="text-neutral-400 text-base md:text-lg max-w-xl mt-4 leading-relaxed font-medium">
              Official press coverage schedule, red carpets, galas, and festivals across America, Nigeria & the United Kingdom.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {isLanding && (
              <Link
                to="/events"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-black uppercase tracking-wider transition-all shadow-xl shadow-yellow-400/20 hover:scale-105"
              >
                <span>Full Events Calendar</span>
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all border ${
                selectedCategory === cat
                  ? 'bg-yellow-400 border-yellow-400 text-black shadow-lg shadow-yellow-400/20'
                  : 'bg-neutral-950 border-white/10 text-neutral-400 hover:border-yellow-400/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Events Grid / Classic Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {displayedEvents.map((evt) => (
            <article
              key={evt.id}
              className="group relative bg-neutral-950 border border-yellow-400/15 rounded-[2.5rem] overflow-hidden hover:border-yellow-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/10 flex flex-col justify-between"
            >
              {/* Event Image Banner with Overlay */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={evt.image}
                  alt={evt.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

                {/* Calendar Date Block */}
                <div className="absolute top-6 left-6 bg-black/90 backdrop-blur-md border border-yellow-400/30 rounded-2xl p-3 text-center min-w-[70px] shadow-2xl">
                  <span className="block text-[10px] font-black uppercase tracking-widest text-yellow-400">
                    {evt.month}
                  </span>
                  <span className="block text-2xl font-black text-white leading-none mt-0.5">
                    {evt.day}
                  </span>
                  <span className="block text-[10px] font-bold text-neutral-400 mt-0.5">
                    {evt.year}
                  </span>
                </div>

                {/* Media Accreditation & Category Badges */}
                <div className="absolute top-6 right-6 flex flex-col items-end gap-2">
                  <span className="px-3.5 py-1.5 rounded-full bg-yellow-400 text-black text-[10px] font-black uppercase tracking-wider shadow-lg">
                    {evt.mediaRole}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-neutral-300 text-[10px] font-bold uppercase tracking-wider">
                    {evt.category}
                  </span>
                </div>
              </div>

              {/* Event Details Content */}
              <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Meta Bar */}
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-neutral-400 border-b border-white/5 pb-4">
                    <div className="flex items-center gap-1.5 text-yellow-400 font-semibold">
                      <MapPin size={14} />
                      <span>{evt.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} className="text-neutral-500" />
                      <span>{evt.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users size={14} className="text-neutral-500" />
                      <span>{evt.expectedAttendees}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white group-hover:text-yellow-400 transition-colors leading-tight">
                    {evt.title}
                  </h3>

                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {evt.summary}
                  </p>

                  <div className="bg-black/60 rounded-2xl p-4 border border-white/5 space-y-2">
                    <div className="text-xs font-bold text-neutral-300">
                      <span className="text-yellow-400 font-black">Venue: </span>
                      {evt.venue}
                    </div>
                    <p className="text-xs text-neutral-400 leading-normal">
                      {evt.description}
                    </p>
                  </div>
                </div>

                {/* Tags & Action CTA */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {evt.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-white/5 text-[10px] font-semibold text-neutral-400 tracking-wider flex items-center gap-1"
                      >
                        <Tag size={10} className="text-yellow-400" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      setActiveModalEvent(evt);
                      setRsvpSubmitted(false);
                    }}
                    className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all transform active:scale-95 shadow-md shadow-yellow-400/20 whitespace-nowrap"
                  >
                    <span>Press & VIP Accreditation</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Bottom Link on Landing */}
        {isLanding && (
          <div className="mt-16 text-center">
            <Link
              to="/events"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-neutral-900 border border-yellow-400/30 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all text-xs font-black uppercase tracking-widest shadow-xl shadow-black/60 hover:scale-105"
            >
              <span>Explore All Upcoming Events & Press Tours ({UPCOMING_EVENTS.length})</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        )}
      </div>

      {/* Press & Accreditation Modal */}
      {activeModalEvent && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-neutral-950 border border-yellow-400/40 rounded-3xl max-w-xl w-full p-8 relative shadow-2xl shadow-yellow-400/20 text-white animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveModalEvent(null)}
              className="absolute top-6 right-6 text-neutral-400 hover:text-yellow-400 text-xl font-bold"
              aria-label="Close modal"
            >
              ✕
            </button>

            {!rsvpSubmitted ? (
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-400 text-xs font-bold uppercase tracking-wider">
                  Accreditation Desk
                </div>

                <div>
                  <h3 className="text-2xl font-black tracking-tight text-white">
                    Request Media Pass / RSVP
                  </h3>
                  <p className="text-xs text-yellow-400 font-bold mt-1">
                    {activeModalEvent.title}
                  </p>
                  <p className="text-xs text-neutral-400 mt-1">
                    {activeModalEvent.venue} • {activeModalEvent.date}
                  </p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setRsvpSubmitted(true);
                  }}
                  className="space-y-4 pt-2"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="Your full name"
                        className="w-full bg-black/70 border border-white/10 rounded-xl p-3 text-sm focus:border-yellow-400 outline-none text-white"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Media / Organization</label>
                      <input
                        required
                        type="text"
                        placeholder="Brand or Outlet"
                        className="w-full bg-black/70 border border-white/10 rounded-xl p-3 text-sm focus:border-yellow-400 outline-none text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Email Address</label>
                      <input
                        required
                        type="email"
                        placeholder="press@company.com"
                        className="w-full bg-black/70 border border-white/10 rounded-xl p-3 text-sm focus:border-yellow-400 outline-none text-white"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Pass Type</label>
                      <select className="w-full bg-black/70 border border-white/10 rounded-xl p-3 text-sm focus:border-yellow-400 outline-none text-white">
                        <option>Press / Media Accreditation</option>
                        <option>VIP Guest RSVP</option>
                        <option>Sponsorship & Brand Partnership</option>
                        <option>Talent / Publicist Representative</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Special Notes or Red Carpet Request</label>
                    <textarea
                      rows={3}
                      placeholder="Specify camera crew size, interview requests with headliners, or credentials required..."
                      className="w-full bg-black/70 border border-white/10 rounded-xl p-3 text-sm focus:border-yellow-400 outline-none text-white resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveModalEvent(null)}
                      className="px-5 py-2.5 rounded-full text-xs font-bold text-neutral-400 hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all shadow-lg shadow-yellow-400/20"
                    >
                      Submit Accreditation Request
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 bg-yellow-400/20 text-yellow-400 rounded-full flex items-center justify-center mx-auto text-2xl font-black">
                  ✓
                </div>
                <h3 className="text-2xl font-black text-white">
                  Accreditation Request Received
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Thank you! Our editorial and media logistics desk has received your application for <strong className="text-yellow-400">{activeModalEvent.title}</strong>. We will confirm credentials via email within 24 hours.
                </p>
                <button
                  onClick={() => setActiveModalEvent(null)}
                  className="mt-4 bg-yellow-400 text-black px-7 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-yellow-300"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
