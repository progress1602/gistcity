
import React from 'react';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 bg-black text-white min-h-screen selection:bg-yellow-400 selection:text-black">
      <div className="max-w-7xl mx-auto px-6 py-20">
         <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[
              { label: 'Editorial Desk', val: 'editorial@gistcity.com', icon: <Mail className="text-yellow-400" /> },
              { label: 'Partnerships & Ads', val: 'partnerships@gistcity.com', icon: <Phone className="text-yellow-400" /> },
              { label: 'Global Bureaus', val: 'America • Nigeria • UK', icon: <MapPin className="text-yellow-400" /> }
            ].map((c, i) => (
              <div key={i} className="bg-neutral-950 p-10 rounded-[2.5rem] border border-yellow-400/15 hover:border-yellow-400/40 transition-all space-y-4 shadow-xl">
                 <div className="p-3.5 bg-yellow-400/10 border border-yellow-400/30 rounded-2xl inline-block">{c.icon}</div>
                 <p className="text-xs font-black uppercase tracking-widest text-yellow-400">{c.label}</p>
                 <p className="text-xl font-black text-white">{c.val}</p>
              </div>
            ))}
         </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
