
import { CaseStudy, Service, Testimonial } from './types';

// Helper to generate curated GistCity case studies and media spotlights
const generateGistCityStudies = (count: number): CaseStudy[] => {
  const mediaStories = [
    {
      title: 'AfroBeats Global Sound Festival',
      category: 'Events Coverage',
      client: 'Global Beat Entertainment',
      industry: 'Music & Live Events',
      problem: 'Needed 360-degree digital media coverage and live publicity across Nigeria, the UK, and North America.',
      solution: 'GistCity deployed multi-city coverage teams, livestream interviews with headlining acts, and rapid social distribution to 200k+ followers.',
      results: ['Over 1.8M digital impressions', '15 top-tier media syndications', 'Trending #1 across social platforms']
    },
    {
      title: 'Nollywood Stars Red Carpet Gala',
      category: 'Entertainment',
      client: 'FilmOne & Diamond Studios',
      industry: 'Film & Cinema',
      problem: 'Required premium red-carpet spotlight interviews and viral video packages for international film premiere.',
      solution: 'Conducted exclusive red-carpet interviews with over 25 leading actors, producing snappy reels and editorial spotlights.',
      results: ['950K+ combined video views', 'Featured on major US & UK entertainment blogs', 'Sold-out premiere ticket sales']
    },
    {
      title: 'Best Nigerian Cultural TV Special',
      category: 'Culture & Heritage',
      client: 'National Heritage Foundation',
      industry: 'African Heritage & Culture',
      problem: 'Preserving and broadcasting ancestral cultural festivals to the modern diaspora worldwide.',
      solution: 'Produced award-winning documentary storytelling that won Best Nigerian Cultural TV Channel of the Year (2020).',
      results: ['Award Winner: Best Cultural TV 2020', 'Broadcasted across 3 continents', 'Archived for international cultural studies']
    },
    {
      title: 'Fintech Pioneers African Summit',
      category: 'Business & Tech',
      client: 'AfriVentures Capital',
      industry: 'Technology & Venture Capital',
      problem: 'Connecting emerging Nigerian fintech founders with Silicon Valley & London investors.',
      solution: 'Strategic executive profiling, press releases, and fireside video interview coverage.',
      results: ['Covered 40+ startup pitches', 'Direct coverage syndication in US tech blogs', '$12M follow-on funding recorded']
    },
    {
      title: 'UK-Nigeria Diaspora Business Gala',
      category: 'Events Coverage',
      client: 'Commonwealth Business Council',
      industry: 'International Trade & Diplomacy',
      problem: 'Wanted high-visibility publicity for bilateral trade dialogues held in central London.',
      solution: 'Full on-site media deployment, keynote speaker interviews, and high-impact press release dissemination.',
      results: ['Over 500 VIP attendees engaged', 'Extensive British-African press coverage', 'Commended by trade commissioners']
    },
    {
      title: 'Grammy Winner Homecoming Feature',
      category: 'Celebrity Interviews',
      client: 'Sony Music Africa',
      industry: 'Music & Celebrity PR',
      problem: 'Managing high-profile homecoming media reception and exclusive deep-dive video interview.',
      solution: 'Exclusive one-on-one video sitdown discussing African culture, global music dominance, and youth mentorship.',
      results: ['2.2M views on social media channels', 'Syndicated across 18 partner blogs', 'Celebrated for journalistic authenticity']
    },
    {
      title: 'Lagos Creative Fashion Week',
      category: 'Lifestyle',
      client: 'Lagos Style Council',
      industry: 'Fashion & Design',
      problem: 'Translating runway excellence into viral digital reels and high-engagement lifestyle articles.',
      solution: 'Real-time backstage access, designer profiles, and curated street style spotlights.',
      results: ['Over 300+ fashion looks cataloged', 'Reached 450K fashion enthusiasts globally', 'Boosted designer international orders']
    },
    {
      title: 'Pan-African Youth Leadership Dialogue',
      category: 'Social Issues',
      client: 'Future Africa Initiative',
      industry: 'Public Advocacy & Governance',
      problem: 'Amplifying urgent social dialogues on youth employment and digital economy policies.',
      solution: 'Multi-platform social media campaign, community Q&A forums, and post-event recap whitepaper publicity.',
      results: ['Over 100K active livestream viewers', 'Policy recommendations sent to regional bodies', 'Featured in national newspapers']
    },
    {
      title: 'Pan-Atlantic Brand Expansion Campaign',
      category: 'Brand Campaigns',
      client: 'Oasis Beverage Corp',
      industry: 'Consumer Brands',
      problem: 'Launching an authentic African beverage brand into retail outlets across the UK and United States.',
      solution: 'Strategic influencer activations, branded documentary videos, and multi-market consumer storytelling.',
      results: ['300% surge in brand inquiry', 'Secured placement in 200+ supermarkets', 'Exceeded initial sales forecast by 45%']
    },
    {
      title: 'Global African Diaspora Expo New York',
      category: 'Culture & Heritage',
      client: 'AfroHeritage Alliance NY',
      industry: 'Arts & Cultural Heritage',
      problem: 'Attracting second-generation diaspora youth to cultural preservation workshops in Manhattan.',
      solution: 'Targeted digital campaigns, video previews of cultural artifacts, and celebrity endorser coverage.',
      results: ['Record-setting attendance (5,000+ attendees)', 'Extensive NYC local and international coverage', 'Established recurring annual series']
    }
  ];

  const categories = ['Events Coverage', 'Entertainment', 'Culture & Heritage', 'Business & Tech', 'Celebrity Interviews', 'Brand Campaigns', 'Lifestyle', 'Social Issues'];

  return Array.from({ length: count }).map((_, i) => {
    const template = mediaStories[i % mediaStories.length];
    return {
      id: `story-${i + 1}`,
      title: i < mediaStories.length ? template.title : `${template.title} Vol. ${Math.floor(i / mediaStories.length) + 1}`,
      category: template.category,
      client: template.client,
      industry: template.industry,
      problem: template.problem,
      solution: template.solution,
      mainImage: [
        'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1200&auto=format&fit=crop'
      ][i % 8],
      gallery: [
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop'
      ],
      results: template.results,
      tags: [template.category, 'GistCity Media', 'Global Reach']
    };
  });
};

export const CASE_STUDIES: CaseStudy[] = generateGistCityStudies(24);

export const SERVICES: Service[] = [
  {
    title: 'Strategic Media Coverage',
    description: 'Comprehensive press and digital media coverage for festivals, corporate launches, conferences, and high-profile ceremonies.',
    deliverables: ['On-site Media Crew & Red Carpet', 'Press Release Creation & Distribution', 'Live Multi-Platform Updates', 'Post-Event Highlight Video Packages', 'Executive Interviews'],
    icon: 'Sparkles'
  },
  {
    title: 'Digital Storytelling & Branded Content',
    description: 'Authentic narrative-driven content that humanizes brands, showcases heritage, and captivates global audiences.',
    deliverables: ['Founder & Leadership Spotlights', 'Mini-Documentary Video Features', 'Culture & Heritage Showcases', 'Sponsored In-Depth Editorial Articles', 'Multi-Platform Video Reels'],
    icon: 'Layers'
  },
  {
    title: 'Social Media Promotion & Online Publicity',
    description: 'Amplify your message directly to over 200,000 engaged followers and across premier partner networks.',
    deliverables: ['200K+ Follower Social Broadcast', 'Targeted Cross-Platform Campaigns', 'Viral Micro-Content Clips', 'Engagement & Impression Analytics', 'Interactive Q&A & Polls'],
    icon: 'Share2'
  },
  {
    title: 'Celebrity & VIP Executive Interviews',
    description: 'High-visibility interviews featuring celebrities, cultural icons, entrepreneurs, and notable international figures.',
    deliverables: ['Studio & On-Location Video Production', 'Tailored Editorial Framing', 'Snippet Distribution Across Channels', 'Syndication to Major Blog Partners', 'Official Media Kit Quotes'],
    icon: 'Mic'
  },
  {
    title: 'International Media Partnerships',
    description: 'Strategic media partnerships connecting leading Nigerian and American digital platforms, blogs, and channels.',
    deliverables: ['Cross-Border Story Syndication', 'Joint Press Releases (Nigeria • USA • UK)', 'Brand Ambassador Placements', 'Media Sponsorship Deals', 'Diaspora Community Outreach'],
    icon: 'Globe'
  },
  {
    title: 'African Culture & Heritage Advocacy',
    description: 'Award-winning cultural broadcast programs dedicated to the preservation, promotion, and global celebration of African culture.',
    deliverables: ['Cultural TV Channel Programming', 'Heritage Documentaries', 'Festival Media Partnerships', 'Community Advocacy Features', 'Educational Youth Cultural Content'],
    icon: 'Award'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "GistCity gave our international festival unmatched media visibility across Nigeria, the UK, and the US. Their storytelling is authentic and electric.",
    author: "Babajide Adeleke",
    role: "Director of Global Partnerships",
    organization: "Global Beat Afro Festival",
    location: "Lagos & London",
    result: "1.8M+ Total Views"
  },
  {
    quote: "Their community of 200k+ followers and strategic PR syndication launched our brand into the diaspora market with incredible momentum and prestige.",
    author: "Chioma Okonkwo-Eze",
    role: "Head of Brand Communications",
    organization: "Oasis Heritage Conglomerate",
    location: "Abuja & New York",
    result: "Over 1,000 Inquiries"
  },
  {
    quote: "Being featured on GistCity connected our innovation story to thousands of tech leaders worldwide while authentically honoring our African roots.",
    author: "Dr. Chukwuma Obi",
    role: "Founder & Chief Executive Officer",
    organization: "TechFin Africa Ventures",
    location: "Lagos, Nigeria",
    result: "$12M Follow-on Round"
  },
  {
    quote: "GistCity is the benchmark for digital media. With over 8 years of proven consistency, their red-carpet coverage of our annual summit was world-class.",
    author: "Olumide Adelegan",
    role: "Executive Secretary",
    organization: "Pan-Atlantic Diaspora Council",
    location: "London, United Kingdom",
    result: "Award-Winning Coverage"
  },
  {
    quote: "Their multi-city broadcast crew handled our movie premiere red carpet with remarkable flair. The video reels trended across all social platforms.",
    author: "Funmilayo Akindele",
    role: "Lead Creative Producer",
    organization: "Emerald Star Productions",
    location: "Lagos & Atlanta",
    result: "950K+ Video Reach"
  },
  {
    quote: "From press releases to direct community engagement, GistCity gave our youth governance dialogue true national and transatlantic prominence.",
    author: "Emeka Nnamdi",
    role: "Director of Public Affairs",
    organization: "NextGen Leaders Initiative",
    location: "Abuja, Nigeria",
    result: "100K+ Live Attendees"
  }
];

export const UPCOMING_EVENTS: EventPost[] = [
  {
    id: 'event-1',
    title: 'Afrobeats & African Culture Global Festival 2026',
    slug: 'afrobeats-african-culture-global-fest-2026',
    category: 'Concert & Festival',
    date: 'OCT 24, 2026',
    month: 'OCT',
    day: '24',
    year: '2026',
    time: '4:00 PM GMT+1',
    location: 'Lagos, Nigeria',
    city: 'Lagos',
    venue: 'Eko Atlantic Concert Arena, Victoria Island',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop',
    summary: 'The flagship celebration of contemporary African music, fashion, cuisine, and diaspora cultural excellence.',
    description: 'Bringing together over 25,000 fans, international Afrobeats superstars, cultural troupes, and media executives from across the globe. GistCity will be on the ground providing live multi-camera broadcast streaming, red-carpet spotlights, and VIP artist interviews.',
    expectedAttendees: '25,000+ Attendees',
    mediaRole: 'Official Headline Broadcast Partner',
    featured: true,
    tags: ['Live Music', 'Red Carpet', 'Culture', 'Lagos']
  },
  {
    id: 'event-2',
    title: 'Pan-Atlantic African Diaspora Business & Tech Summit',
    slug: 'pan-atlantic-diaspora-business-tech-summit',
    category: 'Business & Tech',
    date: 'NOV 12, 2026',
    month: 'NOV',
    day: '12',
    year: '2026',
    time: '9:00 AM EST',
    location: 'New York, USA',
    city: 'New York',
    venue: 'Cipriani Wall Street, Manhattan, NY',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
    summary: 'Bridging venture capital, tech innovators, and trade leaders between Nigeria, the UK, and North America.',
    description: 'A prestigious high-level summit gathering African tech founders, Wall Street institutional investors, and diaspora policy makers. Features curated keynote panels, startup pitch spotlights, and executive networking sessions.',
    expectedAttendees: '1,200+ Executives & Founders',
    mediaRole: 'Accredited Media & Executive Interview Hub',
    featured: true,
    tags: ['Tech Summit', 'Investment', 'New York', 'Fintech']
  },
  {
    id: 'event-3',
    title: 'Royal Heritage & Nollywood Honours Gala Night',
    slug: 'royal-heritage-nollywood-honours-gala',
    category: 'Awards & Gala',
    date: 'DEC 05, 2026',
    month: 'DEC',
    day: '05',
    year: '2026',
    time: '6:30 PM GMT',
    location: 'London, United Kingdom',
    city: 'London',
    venue: 'The Dorchester Hotel, Mayfair, London',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop',
    summary: 'An opulent black-tie awards gala celebrating African cinematic legends, cultural royalty, and innovators.',
    description: 'Celebrating two decades of Nollywood excellence and pan-African cultural diplomacy in central London. Featuring a grand red carpet, high-couture runway exhibition, and ceremonial award presentations to distinguished industry pioneers.',
    expectedAttendees: '800 VIP Guests & Celebrities',
    mediaRole: 'Exclusive Red Carpet Media Host',
    featured: true,
    tags: ['Gala Awards', 'Nollywood', 'London', 'Celebrity']
  },
  {
    id: 'event-4',
    title: 'Abuja International Cultural Carnival & Heritage Expo',
    slug: 'abuja-cultural-carnival-heritage-expo',
    category: 'Culture & Heritage',
    date: 'DEC 18, 2026',
    month: 'DEC',
    day: '18',
    year: '2026',
    time: '10:00 AM WAT',
    location: 'Abuja, Nigeria',
    city: 'Abuja',
    venue: 'Eagle Square & Millennium Park, Abuja',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop',
    summary: 'A 3-day spectacle of traditional masquerades, folklore, regional crafts, and traditional cuisine.',
    description: 'Honoring GistCity’s 2020 Award as the Best Nigerian Cultural TV Channel of the Year. We partner with national arts councils to document ancestral dances, textile exhibitions, and royal historical tributes for worldwide broadcast.',
    expectedAttendees: '40,000+ Visitors & Tourists',
    mediaRole: 'Host Cultural TV Broadcast Partner',
    featured: false,
    tags: ['Carnival', 'Heritage', 'Abuja', 'Tradition']
  },
  {
    id: 'event-5',
    title: 'Lagos Creative & Contemporary Fashion Week',
    slug: 'lagos-creative-fashion-week-2026',
    category: 'Lifestyle & Fashion',
    date: 'JAN 16, 2027',
    month: 'JAN',
    day: '16',
    year: '2027',
    time: '5:00 PM WAT',
    location: 'Lagos, Nigeria',
    city: 'Lagos',
    venue: 'Federal Palace Hotel, Victoria Island, Lagos',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop',
    summary: 'Runway showcases from over 40 leading African avant-garde designers and global fashion buyers.',
    description: 'Translating rich African fabrics, bespoke tailoring, and contemporary street aesthetic into viral global fashion reels. Includes backstage designer interviews, street style captures, and buyer salons.',
    expectedAttendees: '5,000+ Fashion Enthusiasts',
    mediaRole: 'Digital Lifestyle & Runway Press',
    featured: false,
    tags: ['Fashion Week', 'Designers', 'Lagos', 'Style']
  },
  {
    id: 'event-6',
    title: 'Global African Youth Leadership & Media Forum',
    slug: 'global-african-youth-leadership-media-forum',
    category: 'Community & Dialogue',
    date: 'FEB 20, 2027',
    month: 'FEB',
    day: '20',
    year: '2027',
    time: '11:00 AM EST',
    location: 'Atlanta, Georgia, USA',
    city: 'Atlanta',
    venue: 'Center for Civil & Human Rights, Atlanta, GA',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop',
    summary: 'Empowering the next generation of storytellers, digital creators, and civic changemakers across the globe.',
    description: 'An interactive convention featuring media masterclasses, digital journalism bootcamps, and policy hackathons led by prominent African and African-American media executives.',
    expectedAttendees: '2,500+ Registered Delegates',
    mediaRole: 'Media Mentorship Host & Press Syndicator',
    featured: false,
    tags: ['Youth Summit', 'Media Lab', 'Atlanta', 'Leadership']
  }
];

