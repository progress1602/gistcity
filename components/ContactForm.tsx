
import React from 'react';
import { Send, Upload } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black text-white relative overflow-hidden border-t border-yellow-400/15">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-yellow-400/5 blur-[150px] rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-amber-400/5 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-black uppercase tracking-widest">
              Media & Press Intake
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight leading-none uppercase">
              GET FEATURED <br />
              <span className="text-yellow-400">& PARTNER.</span>
            </h2>
            <p className="text-lg text-neutral-300 max-w-md leading-relaxed font-medium">
              Submit your event, press release, brand story, or media inquiry. Our international editorial desk will review and respond within 24 hours.
            </p>

            <div className="space-y-6 pt-6">
               <div className="p-5 rounded-2xl bg-neutral-950 border border-yellow-400/15">
                  <p className="text-xs font-black text-yellow-400 uppercase tracking-widest mb-1">Editorial & Media Desk</p>
                  <a href="mailto:amasapokima@gmail.com" className="text-xl font-bold text-white hover:text-yellow-400 transition-colors break-all block">
                    amasapokima@gmail.com
                  </a>
               </div>
               <div className="p-5 rounded-2xl bg-neutral-950 border border-yellow-400/15">
                  <p className="text-xs font-black text-yellow-400 uppercase tracking-widest mb-1">WhatsApp and Call Line</p>
                  <div className="flex flex-wrap items-center gap-3">
                    <a href="tel:+2348141577473" className="text-xl font-bold text-white hover:text-yellow-400 transition-colors">
                      +234 814 157 7473
                    </a>
                    <a 
                      href="https://wa.me/2348141577473" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-black uppercase tracking-wider hover:bg-emerald-500/30 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Chat on WhatsApp
                    </a>
                  </div>
               </div>
               <div className="p-5 rounded-2xl bg-neutral-950 border border-yellow-400/15">
                  <p className="text-xs font-black text-yellow-400 uppercase tracking-widest mb-1">Coverage Hubs</p>
                  <p className="text-xl font-bold text-white">America • Nigeria • United Kingdom</p>
               </div>
            </div>
          </div>

          <form className="bg-neutral-950 p-8 md:p-12 rounded-[3rem] border border-yellow-400/20 space-y-6 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-neutral-300">Full Name / Contact</label>
                <input type="text" placeholder="Your name or publicist" className="w-full bg-black border border-white/15 rounded-2xl p-4 focus:border-yellow-400 transition-colors outline-none text-white text-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-neutral-300">Brand, Organization or Entity</label>
                <input type="text" placeholder="Organization name" className="w-full bg-black border border-white/15 rounded-2xl p-4 focus:border-yellow-400 transition-colors outline-none text-white text-sm" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-neutral-300">Media Service Needed</label>
                <select className="w-full bg-black border border-white/15 rounded-2xl p-4 focus:border-yellow-400 transition-colors outline-none text-white text-sm appearance-none">
                  <option>Event Coverage (Red Carpet & Crew)</option>
                  <option>Press Release & Story Publishing</option>
                  <option>Social Media Promotion (200K+ reach)</option>
                  <option>Celebrity / VIP Interview</option>
                  <option>Cultural TV & Documentary Feature</option>
                  <option>Strategic Cross-Border PR Partnership</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-neutral-300">Primary Region</label>
                <select className="w-full bg-black border border-white/15 rounded-2xl p-4 focus:border-yellow-400 transition-colors outline-none text-white text-sm appearance-none">
                  <option>Nigeria / West Africa</option>
                  <option>United Kingdom</option>
                  <option>United States / North America</option>
                  <option>Global Diaspora (Multi-region)</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-300">Story, Event or Campaign Details</label>
              <textarea placeholder="Tell us about the event date, key dignitaries, press goals, or release copy..." rows={4} className="w-full bg-black border border-white/15 rounded-2xl p-4 focus:border-yellow-400 transition-colors outline-none resize-none text-white text-sm"></textarea>
            </div>

            <div className="flex items-center justify-between p-4 border-2 border-dashed border-white/15 rounded-2xl hover:border-yellow-400/50 transition-colors group cursor-pointer bg-black/40">
               <div className="flex items-center gap-4">
                 <Upload className="text-neutral-400 group-hover:text-yellow-400 transition-colors" />
                 <span className="text-sm text-neutral-300">Upload Project Brief / Media Kit (optional)</span>
               </div>
               <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">PDF, JPG, PNG</span>
            </div>

            <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-black py-5 rounded-full flex items-center justify-center gap-3 transition-all transform hover:scale-[1.01] active:scale-[0.99] shadow-xl shadow-yellow-400/20 text-xs uppercase tracking-widest cursor-pointer">
               <span>SEND INQUIRY</span>
               <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
