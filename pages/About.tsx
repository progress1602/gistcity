
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Users, 
  Calendar, 
  Mic, 
  Globe2, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  HeartHandshake, 
  Compass, 
  ArrowRight 
} from 'lucide-react';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { NigeriaFlag, UnitedStatesFlag, UnitedKingdomFlag } from '../components/CountryFlags';

const About: React.FC = () => {
  const trackRecordItems: {
    text: string;
    highlight: React.ReactNode;
    label: string;
    icon: React.ReactNode;
  }[] = [
    {
      text: 'Over 8 years of operation and media experience since 2018.',
      highlight: (
        <span className="whitespace-nowrap">
          <AnimatedCounter end={8} suffix="+" /> Years
        </span>
      ),
      label: 'Since 2018',
      icon: <Calendar className="text-yellow-400" size={24} />
    },
    {
      text: 'A growing community of over 200,000 followers across multiple social media platforms.',
      highlight: (
        <span className="whitespace-nowrap">
          <AnimatedCounter end={200000} suffix="+" />
        </span>
      ),
      label: 'Community Followers',
      icon: <Users className="text-yellow-400" size={24} />
    },
    {
      text: 'Successfully worked with and promoted major brands across different industries.',
      highlight: 'Major Brands',
      label: 'Multi-Industry Promotion',
      icon: <TrendingUp className="text-yellow-400" size={24} />
    },
    {
      text: 'Over 1,000 event covered across America, United Kingdom & Nigeria, delivering extensive media visibility and digital publicity.',
      highlight: (
        <span className="whitespace-nowrap">
          <AnimatedCounter end={1000} prefix="Over " />
        </span>
      ),
      label: 'Event covered across America, United Kingdom & Nigeria',
      icon: <Sparkles className="text-yellow-400" size={24} />
    },
    {
      text: 'Conducted interviews and featured over 100 celebrities, public figures, entrepreneurs, and notable personalities.',
      highlight: (
        <span className="whitespace-nowrap">
          <AnimatedCounter end={100} suffix="+" />
        </span>
      ),
      label: 'Celebrity & VIP Features',
      icon: <Mic className="text-yellow-400" size={24} />
    },
    {
      text: 'Established strategic media partnerships with leading Nigeria and America social media platforms and blogs, expanding the reach and dissemination of our stories.',
      highlight: 'Strategic Partnerships',
      label: 'Nigeria & US Syndication',
      icon: <HeartHandshake className="text-yellow-400" size={24} />
    },
    {
      text: 'Reaches audiences across Nigeria, the United States, and the United Kingdom, connecting African stories with a global audience.',
      highlight: 'Global Reach',
      label: 'Nigeria • USA • UK',
      icon: <Globe2 className="text-yellow-400" size={24} />
    },
    {
      text: 'Award-winning media platform, recognized as the Best Nigerian Cultural TV Channel of the Year (2020).',
      highlight: 'Award-Winning',
      label: 'Cultural TV Channel 2020',
      icon: <Award className="text-yellow-400" size={24} />
    },
    {
      text: 'Actively advocates for the promotion, preservation, and global appreciation of African culture and heritage through storytelling and media.',
      highlight: 'Culture & Heritage',
      label: 'Global Advocacy',
      icon: <Compass className="text-yellow-400" size={24} />
    }
  ];

  const coveragePillars = [
    'News',
    'Entertainment',
    'Lifestyle',
    'Culture',
    'Business',
    'Events',
    'Personalities',
    'Social Issues'
  ];

  return (
    <div className="pt-28 pb-24 bg-black text-white min-h-screen selection:bg-yellow-400 selection:text-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Hero Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-black uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              <span>About GistCity</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] uppercase">
              AMPLIFYING STORIES. <br />
              <span className="text-yellow-400">
                CONNECTING CULTURES.
              </span>
            </h1>

            <div className="space-y-6 text-lg text-neutral-300 leading-relaxed font-normal">
              <p className="text-xl md:text-2xl text-white font-semibold leading-snug">
                GistCity is a dynamic digital media and communications platform dedicated to amplifying stories, brands, businesses, individuals, and events across America, Nigeria & United Kingdom.
              </p>
              
              <p className="text-neutral-400">
                Through strategic media coverage, digital storytelling, branded content, social media promotion, and online publicity, we help brands and organizations increase visibility, connect with diverse audiences, and strengthen their public presence.
              </p>

              <p className="text-neutral-400">
                Our coverage spans news, entertainment, lifestyle, culture, business, events, personalities, and social issues, connecting impactful stories with audiences locally and internationally.
              </p>
            </div>

            {/* Coverage Pillars */}
            <div className="pt-2 space-y-3">
              <p className="text-xs font-black uppercase tracking-widest text-neutral-400">Our Coverage Spans</p>
              <div className="flex flex-wrap gap-2.5">
                {coveragePillars.map((pillar) => (
                  <span
                    key={pillar}
                    className="px-4 py-2 rounded-full bg-neutral-900 border border-yellow-400/20 text-xs font-black uppercase tracking-wider text-yellow-400 hover:border-yellow-400 transition-colors"
                  >
                    {pillar}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-yellow-400/20 flex items-center gap-2"
              >
                <span>Partner With Us</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/work"
                className="bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all"
              >
                View Media Coverage
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[2.5rem] overflow-hidden border border-yellow-400/20 bg-neutral-950 p-8 flex flex-col items-center justify-center text-center space-y-6 shadow-2xl">
              {/* Only image logo used, no extra text write-up */}
              <div className="p-8 bg-black rounded-3xl border border-yellow-400/20 w-full flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/progresshenry/image/upload/v1788683391/gistcity_nn_fgnqpu.png"
                  alt="GistCity Logo"
                  className="max-h-32 w-auto object-contain drop-shadow-[0_4px_20px_rgba(250,204,21,0.3)]"
                />
              </div>

              {/* Award Callout Box */}
              <div className="w-full bg-yellow-400/10 border border-yellow-400/30 rounded-2xl p-5 text-left flex items-start gap-4">
                <div className="p-2.5 bg-yellow-400/20 rounded-xl text-yellow-400 shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-yellow-400">Award-Winning Platform</p>
                  <p className="text-sm font-bold text-white leading-snug mt-0.5">
                    Best Nigerian Cultural TV Channel of the Year (2020)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Track Record Section */}
        <div className="mt-20 pt-16 border-t border-yellow-400/15">
          <div className="mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-[11px] font-black uppercase tracking-widest">
              Impact & History
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase">
              OUR TRACK RECORD
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed font-medium">
              Proven credibility, audience trust, and extensive reach built over 8 years of dedicated digital journalism and brand amplification.
            </p>
          </div>

          {/* Grid of Track Record points */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trackRecordItems.map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-[2rem] bg-neutral-950 border border-yellow-400/15 hover:border-yellow-400/50 transition-all space-y-4 flex flex-col justify-between group shadow-lg"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-neutral-900 border border-white/5 rounded-2xl group-hover:bg-yellow-400/20 transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-yellow-400 bg-yellow-400/10 border border-yellow-400/30 px-3 py-1 rounded-full">
                      {item.label}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white group-hover:text-yellow-400 transition-colors">
                    {item.highlight}
                  </h3>

                  <p className="text-neutral-300 text-sm leading-relaxed font-normal">
                    {item.text}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-bold text-neutral-400">
                  <CheckCircle2 size={14} className="text-yellow-400 shrink-0" />
                  <span>Verified GistCity Milestone</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Hubs Strip */}
        <div className="mt-20 p-10 md:p-14 rounded-[2.5rem] bg-neutral-950 border border-yellow-400/20 shadow-2xl">
          <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-yellow-400/15">
            <div className="space-y-3 pb-6 md:pb-0 flex flex-col items-center">
              <div className="transition-transform duration-200 hover:scale-110">
                <NigeriaFlag className="w-12 h-8" />
              </div>
              <h4 className="text-xl font-black text-yellow-400">Nigeria</h4>
              <p className="text-sm text-neutral-400 max-w-xs mx-auto">
                Lagos & Abuja bureaus covering the pulse of African music, business, culture, and social developments.
              </p>
            </div>
            <div className="space-y-3 pt-6 md:pt-0 pb-6 md:pb-0 md:px-6 flex flex-col items-center">
              <div className="transition-transform duration-200 hover:scale-110">
                <UnitedStatesFlag className="w-12 h-8" />
              </div>
              <h4 className="text-xl font-black text-yellow-400">United States</h4>
              <p className="text-sm text-neutral-400 max-w-xs mx-auto">
                Connecting diaspora communities, entertainment events, and cross-continental brand partnerships.
              </p>
            </div>
            <div className="space-y-3 pt-6 md:pt-0 md:pl-6 flex flex-col items-center">
              <div className="transition-transform duration-200 hover:scale-110">
                <UnitedKingdomFlag className="w-12 h-8" />
              </div>
              <h4 className="text-xl font-black text-yellow-400">United Kingdom</h4>
              <p className="text-sm text-neutral-400 max-w-xs mx-auto">
                London-based coverage amplifying lifestyle, cultural showcases, and international spotlight features.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
