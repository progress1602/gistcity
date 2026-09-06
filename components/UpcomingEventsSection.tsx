import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Radio, ArrowUpRight, Clock, Tag, CheckCircle2, ExternalLink, FileText } from 'lucide-react';
import { UPCOMING_EVENTS } from '../data';
import { EventPost } from '../types';
import {
  GISTCITY_WHATSAPP_NUMBER,
  GISTCITY_FORMATTED_PHONE,
  formatEventRsvpWhatsAppMessage,
  sendToWhatsApp,
  createWhatsAppUrl
} from '../utils/whatsapp';
import { WhatsAppIcon } from './ContactForm';

interface UpcomingEventsProps {
  isLanding?: boolean;
  limit?: number;
}

export const UpcomingEventsSection: React.FC<UpcomingEventsProps> = ({ isLanding = false, limit }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalEvent, setActiveModalEvent] = useState<EventPost | null>(null);
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
  const [rsvpWhatsAppUrl, setRsvpWhatsAppUrl] = useState('');
  const [rsvpMessageText, setRsvpMessageText] = useState('');
  const [showRsvpPreview, setShowRsvpPreview] = useState(false);

  const [rsvpData, setRsvpData] = useState({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    passType: 'Press / Media Accreditation',
    specialNotes: ''
  });

  const handleOpenModal = (event: EventPost) => {
    setActiveModalEvent(event);
    setRsvpSubmitted(false);
    setRsvpWhatsAppUrl('');
    setRsvpMessageText('');
    setShowRsvpPreview(false);
    setRsvpData({
      fullName: '',
      organization: '',
      email: '',
      phone: '',
      passType: 'Press / Media Accreditation',
      specialNotes: ''
    });
  };

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
                    onClick={() => handleOpenModal(evt)}
                    className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all transform active:scale-95 shadow-md shadow-yellow-400/20 whitespace-nowrap cursor-pointer"
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
        <div className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-neutral-950 border border-yellow-400/40 rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl shadow-yellow-400/20 text-white animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalEvent(null)}
              className="absolute top-6 right-6 text-neutral-400 hover:text-yellow-400 text-xl font-bold cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>

            {!rsvpSubmitted ? (
              <div className="space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-yellow-400">
                      Form Identifier:
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-yellow-400/15 border border-yellow-400/40 text-yellow-400 text-[10px] font-black uppercase tracking-wider">
                      Event RSVP & Media Accreditation
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    <WhatsAppIcon size={12} />
                    <span>WhatsApp Routed</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-black tracking-tight text-white uppercase">
                    Request Media Pass / RSVP
                  </h3>
                  <p className="text-xs text-yellow-400 font-bold mt-1">
                    {activeModalEvent.title}
                  </p>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    {activeModalEvent.venue} • {activeModalEvent.month} {activeModalEvent.day}, {activeModalEvent.year}
                  </p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const message = formatEventRsvpWhatsAppMessage({
                      eventTitle: activeModalEvent.title,
                      eventVenue: activeModalEvent.venue,
                      eventDate: `${activeModalEvent.month} ${activeModalEvent.day}, ${activeModalEvent.year} (${activeModalEvent.time})`,
                      fullName: rsvpData.fullName,
                      organization: rsvpData.organization,
                      email: rsvpData.email,
                      phone: rsvpData.phone,
                      passType: rsvpData.passType,
                      specialNotes: rsvpData.specialNotes,
                    });

                    const targetUrl = createWhatsAppUrl(message, GISTCITY_WHATSAPP_NUMBER);
                    setRsvpMessageText(message);
                    setRsvpWhatsAppUrl(targetUrl);
                    setRsvpSubmitted(true);
                    sendToWhatsApp(message, GISTCITY_WHATSAPP_NUMBER);
                  }}
                  className="space-y-4 pt-1"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-300">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        value={rsvpData.fullName}
                        onChange={(e) => setRsvpData(prev => ({ ...prev, fullName: e.target.value }))}
                        placeholder="Your full name"
                        className="w-full bg-black/70 border border-white/10 rounded-xl p-3 text-sm focus:border-yellow-400 outline-none text-white"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-300">
                        Media / Organization *
                      </label>
                      <input
                        required
                        type="text"
                        value={rsvpData.organization}
                        onChange={(e) => setRsvpData(prev => ({ ...prev, organization: e.target.value }))}
                        placeholder="Brand or Outlet name"
                        className="w-full bg-black/70 border border-white/10 rounded-xl p-3 text-sm focus:border-yellow-400 outline-none text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-300">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        value={rsvpData.email}
                        onChange={(e) => setRsvpData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="press@company.com"
                        className="w-full bg-black/70 border border-white/10 rounded-xl p-3 text-sm focus:border-yellow-400 outline-none text-white"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-300">
                        WhatsApp / Phone *
                      </label>
                      <input
                        required
                        type="tel"
                        value={rsvpData.phone}
                        onChange={(e) => setRsvpData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="+1 713... or +234..."
                        className="w-full bg-black/70 border border-white/10 rounded-xl p-3 text-sm focus:border-yellow-400 outline-none text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-300">
                      Pass Type Requested
                    </label>
                    <select
                      value={rsvpData.passType}
                      onChange={(e) => setRsvpData(prev => ({ ...prev, passType: e.target.value }))}
                      className="w-full bg-black/70 border border-white/10 rounded-xl p-3 text-sm focus:border-yellow-400 outline-none text-white appearance-none cursor-pointer"
                    >
                      <option value="Press / Media Accreditation">Press / Media Accreditation</option>
                      <option value="VIP Guest RSVP">VIP Guest RSVP</option>
                      <option value="Sponsorship & Brand Partnership">Sponsorship & Brand Partnership</option>
                      <option value="Talent / Publicist Representative">Talent / Publicist Representative</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-300">
                      Special Notes or Red Carpet Request
                    </label>
                    <textarea
                      rows={3}
                      value={rsvpData.specialNotes}
                      onChange={(e) => setRsvpData(prev => ({ ...prev, specialNotes: e.target.value }))}
                      placeholder="Specify camera crew size, interview requests with headliners, or credentials required..."
                      className="w-full bg-black/70 border border-white/10 rounded-xl p-3 text-sm focus:border-yellow-400 outline-none text-white resize-none"
                    />
                  </div>

                  <div className="pt-2 space-y-3">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:to-green-500 text-black py-3.5 px-6 rounded-full text-xs font-black uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <WhatsAppIcon size={18} className="text-black fill-black" />
                      <span>Send Request to WhatsApp ({GISTCITY_FORMATTED_PHONE})</span>
                    </button>
                    <p className="text-[10px] text-center text-neutral-400">
                      Arranges your accreditation pass application and delivers it directly to GistCity's WhatsApp Desk.
                    </p>
                  </div>
                </form>
              </div>
            ) : (
              /* Success & Dispatch State */
              <div className="py-6 text-center space-y-5 animate-in fade-in duration-200">
                <div className="w-14 h-14 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-2xl font-black shadow-xl shadow-emerald-500/20">
                  <CheckCircle2 size={28} />
                </div>

                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-yellow-400/15 border border-yellow-400/40 text-yellow-400 text-[11px] font-black uppercase tracking-wider">
                    Form Tagged: Event RSVP & Media Accreditation
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase">
                    Accreditation Request Sent to WhatsApp!
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Your pass request for <strong className="text-yellow-400">{activeModalEvent.title}</strong> has been arranged and delivered to GistCity's WhatsApp line: <strong className="text-emerald-400 font-bold">{GISTCITY_FORMATTED_PHONE}</strong>.
                  </p>
                </div>

                <div className="space-y-3 max-w-sm mx-auto">
                  <a
                    href={rsvpWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-black py-3 px-6 rounded-full text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-xl shadow-emerald-500/30"
                  >
                    <WhatsAppIcon size={18} />
                    <span>Open in WhatsApp Now</span>
                    <ExternalLink size={14} />
                  </a>
                  <p className="text-[11px] text-neutral-400">
                    Tap to open chat directly if WhatsApp did not open automatically.
                  </p>
                </div>

                {/* Message preview toggle */}
                <div className="text-left bg-black/80 rounded-xl border border-white/10 p-3 max-w-sm mx-auto space-y-2">
                  <button
                    type="button"
                    onClick={() => setShowRsvpPreview(!showRsvpPreview)}
                    className="w-full flex items-center justify-between text-xs font-bold text-yellow-400 hover:text-yellow-300"
                  >
                    <span className="flex items-center gap-1.5">
                      <FileText size={13} />
                      <span>{showRsvpPreview ? 'Hide Arranged Text' : 'View Arranged WhatsApp Text'}</span>
                    </span>
                    <span>{showRsvpPreview ? '▲' : '▼'}</span>
                  </button>

                  {showRsvpPreview && (
                    <pre className="text-[10px] font-mono text-neutral-300 whitespace-pre-wrap leading-relaxed pt-2 border-t border-white/10 max-h-48 overflow-y-auto">
                      {rsvpMessageText}
                    </pre>
                  )}
                </div>

                <button
                  onClick={() => setActiveModalEvent(null)}
                  className="mt-2 text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-white cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
