import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Send, Upload, CheckCircle2, FileText, ArrowRight, ExternalLink } from 'lucide-react';
import {
  GISTCITY_WHATSAPP_NUMBER,
  GISTCITY_FORMATTED_PHONE,
  formatContactFormWhatsAppMessage,
  sendToWhatsApp,
  createWhatsAppUrl,
  ContactFormData
} from '../utils/whatsapp';

// Clean SVG WhatsApp Icon
export const WhatsAppIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c4.56 0 8.25 3.69 8.25 8.24 0 2.2-.86 4.28-2.42 5.83a8.19 8.19 0 0 1-5.83 2.41c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.38c0-4.55 3.7-8.24 8.25-8.24m4.52 11.66c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.98-.14.17-.29.19-.54.07-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.43s-.56-1.35-.77-1.85c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.55c.12.17 1.73 2.65 4.2 3.71.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.12-.22-.19-.47-.32z" />
  </svg>
);

const SERVICE_OPTIONS = [
  'Event Coverage (Red Carpet & Crew)',
  'Press Release & Story Publishing',
  'Social Media Promotion (200K+ reach)',
  'Celebrity / VIP Interview',
  'Cultural TV & Documentary Feature',
  'Strategic Cross-Border PR Partnership'
];

const REGION_OPTIONS = [
  'Nigeria / West Africa',
  'United States / North America',
  'United Kingdom',
  'Global Diaspora (Multi-region)'
];

const ContactForm: React.FC = () => {
  const location = useLocation();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    serviceNeeded: SERVICE_OPTIONS[0],
    primaryRegion: REGION_OPTIONS[0],
    eventDate: '',
    details: '',
    fileName: ''
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState<string>('');
  const [submittedMessageText, setSubmittedMessageText] = useState<string>('');
  const [showPreviewText, setShowPreviewText] = useState<boolean>(false);

  // Prepopulate if query params provided (e.g. from Services or Press Release CTA)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceParam = params.get('service');
    if (serviceParam) {
      if (serviceParam.toLowerCase().includes('press')) {
        setFormData(prev => ({ ...prev, serviceNeeded: 'Press Release & Story Publishing' }));
      } else {
        const found = SERVICE_OPTIONS.find(s => s.toLowerCase().includes(serviceParam.toLowerCase()));
        if (found) {
          setFormData(prev => ({ ...prev, serviceNeeded: found }));
        }
      }
    }
  }, [location.search]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setFormData(prev => ({ ...prev, fileName: `${file.name} (${(file.size / 1024).toFixed(1)} KB)` }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Generate formatted WhatsApp message with explicit form indication header
    const message = formatContactFormWhatsAppMessage(formData);
    const targetUrl = createWhatsAppUrl(message, GISTCITY_WHATSAPP_NUMBER);

    setSubmittedMessageText(message);
    setSubmittedWhatsAppUrl(targetUrl);
    setIsSubmitted(true);

    // Automatically attempt to open WhatsApp
    sendToWhatsApp(message, GISTCITY_WHATSAPP_NUMBER);
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      organization: '',
      email: '',
      phone: '',
      serviceNeeded: SERVICE_OPTIONS[0],
      primaryRegion: REGION_OPTIONS[0],
      eventDate: '',
      details: '',
      fileName: ''
    });
    setSelectedFile(null);
    setIsSubmitted(false);
    setSubmittedWhatsAppUrl('');
    setSubmittedMessageText('');
    setShowPreviewText(false);
  };

  return (
    <section id="contact" className="py-24 bg-black text-white relative overflow-hidden border-t border-yellow-400/15">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-yellow-400/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-amber-400/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          
          {/* Left Column: Context & Direct Contact Details */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-black uppercase tracking-widest">
              <span>Media & Press Intake Portal</span>
            </div>
            
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none uppercase">
              GET FEATURED <br />
              <span className="text-yellow-400">& PARTNER.</span>
            </h2>
            
            <p className="text-base sm:text-lg text-neutral-300 max-w-md leading-relaxed font-medium">
              Submit your event, press release, brand story, or media inquiry. All submissions are arranged with form indicators and sent straight to our WhatsApp editorial desk.
            </p>

            <div className="space-y-4 pt-2">
              {/* WhatsApp Live Desk Card */}
              <div className="p-6 rounded-3xl bg-neutral-950 border border-emerald-500/30 hover:border-emerald-400/60 transition-all shadow-xl space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                      <WhatsAppIcon size={20} />
                    </span>
                    <p className="text-xs font-black text-emerald-400 uppercase tracking-widest">
                      Live WhatsApp & Call Desk
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online 24/7
                  </span>
                </div>
                
                <p className="text-2xl font-black text-white tracking-tight">
                  {GISTCITY_FORMATTED_PHONE}
                </p>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Direct line for press coordinators, PR agencies, event conveners, and diaspora leaders.
                </p>
                
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={`https://wa.me/${GISTCITY_WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-black uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-lg shadow-emerald-500/20"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Open WhatsApp Chat</span>
                  </a>
                  <a
                    href="tel:+2348141577473"
                    className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Direct Call
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-5 rounded-2xl bg-neutral-950 border border-yellow-400/15 space-y-1">
                <p className="text-[10px] font-black text-yellow-400 uppercase tracking-widest">Official Email Desk</p>
                <a href="mailto:amasapokima@gmail.com" className="text-lg font-bold text-white hover:text-yellow-400 transition-colors break-all block">
                  amasapokima@gmail.com
                </a>
              </div>

              {/* Global Bureaus Card */}
              <div className="p-5 rounded-2xl bg-neutral-950 border border-yellow-400/15 space-y-1">
                <p className="text-[10px] font-black text-yellow-400 uppercase tracking-widest">Active Editorial Hubs</p>
                <p className="text-base font-bold text-white">America (Houston & Atlanta) • Nigeria (Port Harcourt & Lagos) • United Kingdom (London)</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form or Success State */}
          <div className="bg-neutral-950 p-8 sm:p-10 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border border-yellow-400/25 shadow-2xl relative">
            
            {/* Form Banner Header */}
            <div className="pb-6 mb-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black uppercase tracking-wider text-yellow-400">
                    Form Identifier:
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-yellow-400/15 border border-yellow-400/40 text-yellow-400 text-[11px] font-black uppercase tracking-wider">
                    Media & Press Intake
                  </span>
                </div>
                <p className="text-xs text-neutral-400 mt-1">
                  Destination: <strong className="text-emerald-400">WhatsApp Desk ({GISTCITY_FORMATTED_PHONE})</strong>
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30 font-bold">
                <WhatsAppIcon size={14} />
                <span>Auto-Formatted</span>
              </div>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name & Organization */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 flex items-center justify-between">
                      <span>Full Name / Contact Person *</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Chief O. Johnson or Jane Smith"
                      className="w-full bg-black/80 border border-white/15 rounded-2xl p-3.5 focus:border-yellow-400 transition-colors outline-none text-white text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                      Brand / Organization / Entity *
                    </label>
                    <input
                      required
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="e.g. Abonnema Foundation or Brand X"
                      className="w-full bg-black/80 border border-white/15 rounded-2xl p-3.5 focus:border-yellow-400 transition-colors outline-none text-white text-sm"
                    />
                  </div>
                </div>

                {/* Email Address & WhatsApp Phone Number */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="contact@organization.com"
                      className="w-full bg-black/80 border border-white/15 rounded-2xl p-3.5 focus:border-yellow-400 transition-colors outline-none text-white text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 flex items-center justify-between">
                      <span>WhatsApp / Phone Number *</span>
                      <span className="text-[10px] text-emerald-400 font-bold">For Reply</span>
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +1 713-555-0199 or +234..."
                      className="w-full bg-black/80 border border-white/15 rounded-2xl p-3.5 focus:border-yellow-400 transition-colors outline-none text-white text-sm"
                    />
                  </div>
                </div>

                {/* Media Service Needed & Primary Region */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                      Media Service Needed
                    </label>
                    <select
                      name="serviceNeeded"
                      value={formData.serviceNeeded}
                      onChange={handleInputChange}
                      className="w-full bg-black/80 border border-white/15 rounded-2xl p-3.5 focus:border-yellow-400 transition-colors outline-none text-white text-sm appearance-none cursor-pointer"
                    >
                      {SERVICE_OPTIONS.map((svc, i) => (
                        <option key={i} value={svc}>{svc}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                      Primary Region
                    </label>
                    <select
                      name="primaryRegion"
                      value={formData.primaryRegion}
                      onChange={handleInputChange}
                      className="w-full bg-black/80 border border-white/15 rounded-2xl p-3.5 focus:border-yellow-400 transition-colors outline-none text-white text-sm appearance-none cursor-pointer"
                    >
                      {REGION_OPTIONS.map((reg, i) => (
                        <option key={i} value={reg}>{reg}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Target Date / Timeline */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 flex items-center justify-between">
                    <span>Target Event Date or Campaign Timeline (Optional)</span>
                    <span className="text-[10px] text-neutral-400">e.g. Oct 24, 2026 or Immediate</span>
                  </label>
                  <input
                    type="text"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    placeholder="e.g. October 2026, Houston TX / Next Week"
                    className="w-full bg-black/80 border border-white/15 rounded-2xl p-3.5 focus:border-yellow-400 transition-colors outline-none text-white text-sm"
                  />
                </div>

                {/* Story, Event or Campaign Details */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 flex items-center justify-between">
                    <span>Story, Event or Campaign Details *</span>
                    <span className="text-[10px] text-neutral-400">Arranged into WhatsApp</span>
                  </label>
                  <textarea
                    required
                    name="details"
                    value={formData.details}
                    onChange={handleInputChange}
                    placeholder="Tell us about the event date, key dignitaries, press goals, release copy, or coverage requirements..."
                    rows={4}
                    className="w-full bg-black/80 border border-white/15 rounded-2xl p-3.5 focus:border-yellow-400 transition-colors outline-none resize-none text-white text-sm"
                  />
                </div>

                {/* File Attachment (Optional) */}
                <div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".pdf,.jpg,.jpeg,.png,.docx,.doc"
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full flex items-center justify-between p-4 border-2 border-dashed border-white/15 rounded-2xl hover:border-yellow-400/60 transition-colors group cursor-pointer bg-black/40 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <Upload className="text-neutral-400 group-hover:text-yellow-400 transition-colors shrink-0" size={20} />
                      <div>
                        <p className="text-xs font-bold text-neutral-200">
                          {selectedFile ? selectedFile.name : 'Upload Project Brief / Media Kit (optional)'}
                        </p>
                        <p className="text-[11px] text-neutral-400">
                          {selectedFile ? `${(selectedFile.size / 1024).toFixed(1)} KB selected` : 'Will be referenced in your WhatsApp submission'}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-400/90 px-2 py-1 rounded bg-yellow-400/10 shrink-0">
                      {selectedFile ? 'Change File' : 'PDF, JPG, PNG'}
                    </span>
                  </button>
                </div>

                {/* Submit to WhatsApp Button */}
                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:to-green-500 text-black font-black py-4 sm:py-5 rounded-full flex items-center justify-center gap-3 transition-all transform hover:scale-[1.01] active:scale-[0.99] shadow-xl shadow-emerald-500/25 text-xs sm:text-sm uppercase tracking-widest cursor-pointer"
                  >
                    <WhatsAppIcon size={20} className="text-black fill-black" />
                    <span>Send Details to WhatsApp ({GISTCITY_FORMATTED_PHONE})</span>
                    <Send size={16} />
                  </button>

                  <p className="text-center text-[11px] text-neutral-400">
                    🔒 Clicking will arrange your submission into a formatted WhatsApp message to GistCity's official line at <span className="text-emerald-400 font-bold">{GISTCITY_FORMATTED_PHONE}</span>.
                  </p>
                </div>
              </form>
            ) : (
              /* Success & WhatsApp Dispatch State */
              <div className="py-6 space-y-6 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/20">
                  <CheckCircle2 size={32} />
                </div>

                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-yellow-400/15 border border-yellow-400/40 text-yellow-400 text-xs font-black uppercase tracking-wider">
                    Form Tagged: Media & Press Intake
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                    Details Arranged & Sent to WhatsApp!
                  </h3>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Your inquiry has been structured and dispatched directly to GistCity's WhatsApp line: <strong className="text-emerald-400 font-bold">{GISTCITY_FORMATTED_PHONE}</strong>.
                  </p>
                </div>

                {/* Prominent Action Button: Open in WhatsApp */}
                <div className="space-y-3 max-w-md mx-auto">
                  <a
                    href={submittedWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-black py-4 px-6 rounded-full text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-xl shadow-emerald-500/30 hover:scale-[1.02]"
                  >
                    <WhatsAppIcon size={20} />
                    <span>Open WhatsApp Now & Send</span>
                    <ExternalLink size={16} />
                  </a>

                  <p className="text-xs text-neutral-400">
                    If WhatsApp did not launch automatically, tap the green button above to deliver your message.
                  </p>
                </div>

                {/* Message Preview Accordion */}
                <div className="text-left bg-black/80 rounded-2xl border border-white/15 p-4 max-w-md mx-auto space-y-2">
                  <button
                    type="button"
                    onClick={() => setShowPreviewText(!showPreviewText)}
                    className="w-full flex items-center justify-between text-xs font-bold text-yellow-400 hover:text-yellow-300"
                  >
                    <span className="flex items-center gap-2">
                      <FileText size={14} />
                      <span>{showPreviewText ? 'Hide Formatted WhatsApp Text' : 'View Formatted WhatsApp Message'}</span>
                    </span>
                    <span>{showPreviewText ? '▲' : '▼'}</span>
                  </button>

                  {showPreviewText && (
                    <pre className="text-[11px] font-mono text-neutral-300 whitespace-pre-wrap leading-relaxed pt-2 border-t border-white/10 max-h-60 overflow-y-auto">
                      {submittedMessageText}
                    </pre>
                  )}
                </div>

                {/* Reset button */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
                  >
                    ← Submit Another Media Inquiry
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
