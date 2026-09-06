
import React from 'react';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 bg-black text-white min-h-screen selection:bg-yellow-400 selection:text-black">
      <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[
              { 
                label: 'Editorial & Inquiries', 
                val: 'amasapokima@gmail.com', 
                href: 'mailto:amasapokima@gmail.com',
                actionText: 'Send an email',
                icon: <Mail className="text-yellow-400" /> 
              },
              { 
                label: 'WhatsApp and Call Line', 
                val: '+234 814 157 7473', 
                href: 'https://wa.me/2348141577473',
                callHref: 'tel:+2348141577473',
                actionText: 'Chat on WhatsApp',
                icon: <Phone className="text-yellow-400" /> 
              },
              { 
                label: 'Global Bureaus', 
                val: 'America • Nigeria • UK', 
                href: null,
                actionText: 'Editorial Bureaus',
                icon: <MapPin className="text-yellow-400" /> 
              }
            ].map((c, i) => (
              <div key={i} className="bg-neutral-950 p-10 rounded-[2.5rem] border border-yellow-400/15 hover:border-yellow-400/40 transition-all space-y-4 shadow-xl flex flex-col justify-between">
                 <div className="space-y-4">
                   <div className="p-3.5 bg-yellow-400/10 border border-yellow-400/30 rounded-2xl inline-block">{c.icon}</div>
                   <p className="text-xs font-black uppercase tracking-widest text-yellow-400">{c.label}</p>
                   {c.href ? (
                     <a 
                       href={c.href} 
                       target={c.href.startsWith('http') ? '_blank' : undefined} 
                       rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                       className="text-xl font-black text-white hover:text-yellow-400 transition-colors block break-all"
                     >
                       {c.val}
                     </a>
                   ) : (
                     <p className="text-xl font-black text-white">{c.val}</p>
                   )}
                 </div>

                 {c.href && (
                   <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                     <a
                       href={c.href}
                       target={c.href.startsWith('http') ? '_blank' : undefined} 
                       rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                       className="text-xs font-black uppercase tracking-wider text-yellow-400 hover:text-yellow-300 transition-colors"
                     >
                       {c.actionText} →
                     </a>
                     {c.callHref && (
                       <a
                         href={c.callHref}
                         className="text-xs font-bold text-neutral-400 hover:text-white transition-colors ml-auto"
                       >
                         Call Line
                       </a>
                     )}
                   </div>
                 )}
              </div>
            ))}
          </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
