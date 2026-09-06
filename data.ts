import { CaseStudy, Service, Testimonial, EventPost } from './types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'ogbakor-ikwerre-dinner-night-houston',
    title: 'Ogbakor Ikwerre USA/Canada Award/Dinner Night in Houston, Texas',
    category: 'Events Coverage',
    client: 'Ogbakor Ikwerre USA/Canada',
    industry: 'African Diaspora & Cultural Heritage',
    problem: 'The Ogbakor Ikwerre USA/Canada is a non profitable organization of the Ikwerre People of Rivers State Nigeria.',
    solution: 'GistCity deployed a Reporter to carry out interview & produce a short reels comprehensive interview of the Gala Night.',
    mainImage: '/coverage/ogbakor-gala.jpg',
    gallery: ['/coverage/ogbakor-gala.jpg', '/coverage/ogbakor-finale-yt.jpg'],
    results: [
      'Deployed on-site reporter in Houston, Texas',
      'Produced high-impact reels of the Gala Night',
      'Amplified Ikwerre culture across US diaspora & Nigeria'
    ],
    tags: ['Ogbakor Ikwerre', 'Houston Texas', 'Award Night', 'Culture'],
    videoUrl: 'https://www.instagram.com/reel/DYwWS3NN7AT/?stkn=bTdqcDJ0YjE1a2Q0',
    videoPlatform: 'instagram'
  },
  {
    id: 'ogbakor-ikwerre-grand-finale-2026',
    title: 'Grand Finale Coverage of 2026 Ogbakor Ikwerre USA/Canada',
    category: 'Events Coverage',
    client: 'Ogbakor Ikwerre USA/Canada',
    industry: 'Cultural Heritage & News Report',
    problem: 'Needed full on-ground broadcast journalism capturing the climactic Grand Finale convention and community gathering.',
    solution: 'Deployed a Reporter to Interview guest at the event, Produced a comprehensive News Report that showcases the Rich Cultural Heritage of the Ikwerre people of Rivers State Nigeria.',
    mainImage: '/coverage/ogbakor-finale-yt.jpg',
    gallery: ['/coverage/ogbakor-finale-yt.jpg', '/coverage/ogbakor-gala.jpg'],
    results: [
      'Comprehensive on-site guest interviews',
      'Rich broadcast report on Ikwerre cultural heritage',
      'Broadcasted to global audience via YouTube'
    ],
    tags: ['Grand Finale', 'News Report', 'Ikwerre Heritage', 'Rivers State'],
    videoUrl: 'https://youtu.be/gyV4iihHT80?si=Xnp6PHJWJbDsXXpL',
    videoPlatform: 'youtube'
  },
  {
    id: 'miss-world-nigeria-media-partner',
    title: 'Official Media Partner for Miss World Nigeria Contest',
    category: 'Entertainment',
    client: 'Miss World Nigeria Pageant',
    industry: 'Pageantry & International Representation',
    problem: 'Amplifying the voices, poise, and global drive of delegates representing Nigeria at the world stage.',
    solution: 'Serving as official Media Partner for the Miss World Nigeria contest, capturing delegate interviews and spotlighting cultural excellence globally.',
    mainImage: '/coverage/miss-world-12.jpg',
    gallery: ['/coverage/miss-world-12.jpg', '/coverage/miss-world-10.jpg'],
    results: [
      'Official Media Partner for Miss World Nigeria contest',
      'Spotlight interview with delegate representing Nigeria globally',
      'Transatlantic reach across America, Nigeria & UK'
    ],
    tags: ['Miss World Nigeria', 'Media Partner', 'Entertainment', 'Pageant'],
    videoUrl: 'https://www.instagram.com/reel/Dc5X_AYN6ix/?stkn=MWw2c3FxaTczanUxMA==',
    videoPlatform: 'instagram'
  },
  {
    id: 'knorr-nigeria-jollof-day-portharcourt',
    title: 'Knorr Nigeria Media Publicity at Nigeria Jollof Day (Port Harcourt)',
    category: 'Brand Campaigns',
    client: 'Knorr Nigeria (Unilever)',
    industry: 'Food & FMCG Brand Campaign',
    problem: 'Generating electric digital buzz and brand visibility during the nationwide Nigeria Jollof Day festivities in Port Harcourt.',
    solution: 'Knorr Nigeria Media Publicity at the Nigeria Jollof Day Celebration held in Port Harcourt Rivers State, featuring interviews with culinary masters like Chef Roux.',
    mainImage: '/coverage/knorr-jollof.jpg',
    gallery: ['/coverage/knorr-jollof.jpg', '/coverage/miss-world-8.jpg'],
    results: [
      'High-energy brand campaign in Port Harcourt',
      'Exclusive interview session with Chef Roux',
      'Spotlighted Knorr seasoning cube culinary excellence'
    ],
    tags: ['Knorr Nigeria', 'Jollof Day', 'Brand Publicity', 'Port Harcourt'],
    videoUrl: 'https://www.instagram.com/reel/Dca9V_CtvC5/?stkn=cjVjZzVobHN6ZmRk',
    videoPlatform: 'instagram'
  },
  {
    id: 'dr-adaeze-oreh-rivers-health-ministry',
    title: 'Special Interview: Dr. Adaeze Oreh on Rivers State Health Issues',
    category: 'Celebrity Interviews',
    client: 'Rivers State Ministry of Health',
    industry: 'Public Health Policy & Leadership',
    problem: 'Addressing crucial healthcare challenges, maternal mortality, and primary health initiatives in Rivers State.',
    solution: 'Special Interview with Former Nigeria Rivers State Governors daughter, Dr. Adaeze Oreh on health issues as it concerned the State Local Health Ministry.',
    mainImage: '/coverage/adaeze-oreh.jpg',
    gallery: ['/coverage/adaeze-oreh.jpg', '/coverage/miss-world-1.jpg'],
    results: [
      'Direct policy dialogue on maternal mortality & healthcare',
      'Timeline insights on free C-section healthcare rollout',
      'Publicized across regional and international networks'
    ],
    tags: ['Dr Adaeze Oreh', 'Health Ministry', 'Rivers State', 'Public Health'],
    videoUrl: 'https://www.instagram.com/reel/DR2r28VDJHv/?stkn=aDg3amI0cW02bHU=',
    videoPlatform: 'instagram'
  },
  {
    id: 'bole-festival-arik-air-activation',
    title: 'Bole Festival Port Harcourt: Arik Air Brand Publicity',
    category: 'Brand Campaigns',
    client: 'Arik Air & Bole Festival',
    industry: 'Aviation & Festival Brand Activation',
    problem: 'Showcasing corporate airline participation and youth culture synergy at Day 1 of Port Harcourt Bole Festival.',
    solution: 'Captured Arik Air brand publicity and traveler interactions at Day 1 of the renowned Bole Festival in Port Harcourt, Rivers State, Nigeria.',
    mainImage: '/coverage/miss-world-11.jpg',
    gallery: ['/coverage/miss-world-11.jpg', '/coverage/miss-world-9.jpg'],
    results: [
      'Featured renowned flight company Arik Air',
      'Vibrant festival ground brand engagement',
      'Amplified Port Harcourt tourism and culture'
    ],
    tags: ['Arik Air', 'Bole Festival', 'Port Harcourt', 'Brand Activation'],
    videoUrl: 'https://www.instagram.com/reel/Dc5oA9cxn8z/?stkn=enhyOHZ2cHNwcHcz',
    videoPlatform: 'instagram'
  },
  {
    id: 'abonnema-foundation-20th-anniversary-houston',
    title: '20th Anniversary Gala: Abonnema Foundation USA in Houston, Texas',
    category: 'Culture & Heritage',
    client: 'Abonnema Foundation USA',
    industry: 'Diaspora Philanthropy & Kalabari Heritage',
    problem: 'Marking two decades of diaspora unity, healthcare benevolence, and cultural legacy in North America.',
    solution: 'Full on-site coverage of the 20th Anniversary of the Abonnema Foundation USA, happening live at the Marriott Hotel in Houston, Texas.',
    mainImage: '/coverage/miss-world-10.jpg',
    gallery: ['/coverage/miss-world-10.jpg', '/coverage/miss-world-3.jpg'],
    results: [
      '20th anniversary milestone documented in Texas',
      'Engaged hundreds of diaspora dignitaries and delegates',
      'Celebrated Abonnema civic contributions and philanthropy'
    ],
    tags: ['Abonnema Foundation', 'Houston Texas', '20th Anniversary', 'Marriott'],
    videoUrl: 'https://www.instagram.com/p/Dc7FBz_jUZp/?img_index=3&stkn=MWVvenJxa3FsaWkxbQ==',
    videoPlatform: 'instagram'
  },
  {
    id: 'bole-festival-day1-power-of-x',
    title: 'Bole Festival Day 1: "The Power of X" Live in Port Harcourt',
    category: 'Events Coverage',
    client: 'Bole Festival Management',
    industry: 'Food Festival & Youth Culture',
    problem: 'Broadcasting the explosive kickoff and culinary excitement of Port Harcourt Bole Festival.',
    solution: 'Live reporting and reel production capturing Day 1 of Bole Festival "The Power of X", interviewing attendees and food vendors.',
    mainImage: '/coverage/miss-world-9.jpg',
    gallery: ['/coverage/miss-world-9.jpg', '/coverage/miss-world-8.jpg'],
    results: [
      'High-octane coverage of Port Harcourt culinary festival',
      'Attendee expectation interviews and live showcases',
      'Thousands of digital reel views across social media'
    ],
    tags: ['Bole Festival', 'The Power of X', 'Port Harcourt', 'Festival'],
    videoUrl: 'https://www.instagram.com/reel/Dc5Q9Q3NCyP/?stkn=MW81NGVmODdmYjEweQ==',
    videoPlatform: 'instagram'
  },
  {
    id: 'bole-festival-live-celebration-coverage',
    title: 'Live at Bole Festival: Celebrating Culture, Food & Music',
    category: 'Lifestyle',
    client: 'Bole Festival',
    industry: 'Gastronomy & Cultural Lifestyle',
    problem: 'Packaging the unique street food heritage of roasted plantain and fish into viral social media reels.',
    solution: 'Live on-the-scene coverage from Bole Festival celebrating the vibrant energy, fashion, and musical performances in Rivers State.',
    mainImage: '/coverage/miss-world-8.jpg',
    gallery: ['/coverage/miss-world-8.jpg', '/coverage/knorr-jollof.jpg'],
    results: [
      'Real-time live reel updates from festival venue',
      'Captured community celebrations and youth energy',
      'Promoted local food tourism in South-South Nigeria'
    ],
    tags: ['Bole Festival', 'Live Coverage', 'Port Harcourt', 'Lifestyle'],
    videoUrl: 'https://www.instagram.com/reel/Dc38cvHt9az/?stkn=djN6NnhvcXhma2xz',
    videoPlatform: 'instagram'
  },
  {
    id: 'alabo-samuel-diminas-tribute-sugar-land',
    title: 'Alabo Samuel Diminas 50th: Heartfelt Tribute by Wife in Texas',
    category: 'Celebrity Interviews',
    client: 'Diminas Family',
    industry: 'VIP Milestone & Diaspora Society',
    problem: 'Capturing intimate marital reflections and heartfelt congratulations for a distinguished executive.',
    solution: 'Documented Alabota Engr. Ngowari Samuel Diminas paying a heartfelt tribute to her husband marking his 50th birthday celebration in Sugar Land, Texas.',
    mainImage: '/coverage/miss-world-7.jpg',
    gallery: ['/coverage/miss-world-7.jpg', '/coverage/miss-world-6.jpg'],
    results: [
      'Touching tribute reel preserved in cinematic quality',
      'Warm social reception across Nigerian-American circles',
      'Dignified anniversary presentation'
    ],
    tags: ['Alabo Samuel Diminas', '50th Birthday', 'Sugar Land Texas', 'Tribute'],
    videoUrl: 'https://www.instagram.com/reel/DZhxUAzjp9y/?stkn=dWJtYXVtdmp2dnMw',
    videoPlatform: 'instagram'
  },
  {
    id: 'alabo-samuel-diminas-westpaq-reflection',
    title: 'Alabo Samuel Diminas at 50: Westpaq Engineering Reflections',
    category: 'Business & Tech',
    client: 'Westpaq Engineering',
    industry: 'Engineering Leadership & Corporate Legacy',
    problem: 'Chronicling executive leadership, engineering perseverance, and corporate milestones.',
    solution: 'At his 50th birthday celebration in Sugar Land, Texas, Alabo Samuel Diminas, President of Westpaq Engineering, reflects on a life defined by vision and dedication.',
    mainImage: '/coverage/miss-world-6.jpg',
    gallery: ['/coverage/miss-world-6.jpg', '/coverage/miss-world-5.jpg'],
    results: [
      'Inspirational executive interview on engineering career',
      'Celebrated entrepreneurship and diaspora achievement',
      'Broadcasted across business and professional networks'
    ],
    tags: ['Westpaq Engineering', 'Alabo Samuel Diminas', 'Leadership', 'Texas'],
    videoUrl: 'https://www.instagram.com/reel/DZhs7CFkfUJ/?stkn=b2U5bnN6N3RmMDht',
    videoPlatform: 'instagram'
  },
  {
    id: 'alabo-samuel-diminas-50th-gala-celebration',
    title: 'Celebrating Alabo Samuel Diminas at 50: Family & Well-Wishers',
    category: 'Lifestyle',
    client: 'Alabo Samuel Diminas Jubilee Committee',
    industry: 'Celebrity Milestone & Society',
    problem: 'Curating a grand photo-journalism and video celebration of friends and dignitaries.',
    solution: 'Family, friends, colleagues, and well-wishers celebrate Alabo Samuel Diminas on the auspicious occasion of his 50th birthday in Texas.',
    mainImage: '/coverage/miss-world-5.jpg',
    gallery: ['/coverage/miss-world-5.jpg', '/coverage/miss-world-4.jpg'],
    results: [
      'Multi-slide photo and video spread of VIP guests',
      'Broad digital distribution across social media',
      'Preserved as historic jubilee chronicle'
    ],
    tags: ['50th Birthday', 'Sugar Land Texas', 'VIP Milestone', 'Lifestyle'],
    videoUrl: 'https://www.instagram.com/p/DZjXQF6DAXD/?img_index=7&stkn=cnJlejJ2bDBuamph',
    videoPlatform: 'instagram'
  },
  {
    id: 'dr-antonia-bayelsa-voices-houston',
    title: 'Niger Delta Diaspora Voices in Houston: Dr. Antonia A. Feature',
    category: 'Culture & Heritage',
    client: 'Bayelsa Indigenes in Diaspora',
    industry: 'Cultural Continuity & Community Fellowship',
    problem: 'Documenting the resilience, unity, and reflections of long-standing Nigerian residents in the USA.',
    solution: 'Guest Dr. Antonia A., a Bayelsa indigene residing in Houston, Texas for over 30 years, joined in celebrating Chief Samuel Diminas 50th birthday and sharing diaspora memories.',
    mainImage: '/coverage/miss-world-4.jpg',
    gallery: ['/coverage/miss-world-4.jpg', '/coverage/miss-world-2.jpg'],
    results: [
      'Spotlighted 30+ years of Bayelsa diaspora presence in Texas',
      'Celebrated community bonding and cultural heritage',
      'High sentiment and engagement from diaspora indigenes'
    ],
    tags: ['Bayelsa Diaspora', 'Houston Texas', 'Heritage', 'Culture'],
    videoUrl: 'https://www.instagram.com/reel/DZiscYWEzbt/?stkn=cG1yN2xlNXptN3lt',
    videoPlatform: 'instagram'
  },
  {
    id: 'royal-fathers-amanyanabo-abonnema-50th',
    title: 'Royal Fathers in Texas: Amanyanabo of Abonnema, HRM King Gbobo Disra',
    category: 'Culture & Heritage',
    client: 'Abonnema Traditional Council',
    industry: 'Traditional Monarchy & Royal Pageantry',
    problem: 'Showcasing the historic presence of ancestral traditional rulers gracing diaspora milestone events in the United States.',
    solution: 'Royal Fathers added prestige and grandeur to the 50th birthday celebration of Alabo Samuel Diminas as the Amanyanabo of Abonnema, HRM King Gbobo Disra graces the event.',
    mainImage: '/coverage/miss-world-3.jpg',
    gallery: ['/coverage/miss-world-3.jpg', '/coverage/ogbakor-gala.jpg'],
    results: [
      'Regal traditional presence preserved in Texas',
      'Honored royal institution of Abonnema Kingdom',
      'Reconnected diaspora with ancestral monarchs'
    ],
    tags: ['Amanyanabo of Abonnema', 'HRM King Gbobo Disra', 'Royal Fathers', 'Texas'],
    videoUrl: 'https://www.instagram.com/p/DZi2B66kRTx/?img_index=8&stkn=MTExMzF2cDRraDczOA==',
    videoPlatform: 'instagram'
  },
  {
    id: 'ijaw-national-congress-usa-andrew-oki',
    title: 'Ijaw National Congress (USA): Induction of Andrew Oki in Texas',
    category: 'Events Coverage',
    client: 'Ijaw National Congress (INC) USA',
    industry: 'Civic Leadership & Community Governance',
    problem: 'Providing media publicity for civic induction and diaspora representation of Niger Delta peoples in North America.',
    solution: 'Newly inducted Publicity Secretary of the Ijaw National Congress (USA), Andrew Oki—an author and business owner from Nigeria—joined family and friends in Texas.',
    mainImage: '/coverage/miss-world-2.jpg',
    gallery: ['/coverage/miss-world-2.jpg', '/coverage/miss-world-1.jpg'],
    results: [
      'High-profile publicity for INC (USA) leadership',
      'Engaged pan-Ijaw diaspora community across North America',
      'Spotlighted Nigerian author and entrepreneurship'
    ],
    tags: ['Ijaw National Congress', 'INC USA', 'Andrew Oki', 'Texas'],
    videoUrl: 'https://www.instagram.com/reel/DZiyscZlDUY/?stkn=NWozZ2M3ajY5bG4w',
    videoPlatform: 'instagram'
  },
  {
    id: 'chief-tammy-danagogo-former-minister-ssg',
    title: 'Chief Tammy Wenike Danagogo: Former Minister & Paramount Ruler Feature',
    category: 'Celebrity Interviews',
    client: 'Da Iju-Jack War Canoe House',
    industry: 'Statesmanship & Traditional Chieftaincy',
    problem: 'Highlighting public service dedication and traditional leadership of distinguished Nigerian statesmen.',
    solution: 'Former Minister of Nigeria, former Secretary to the Rivers State Government, and Paramount Ruler of the Da Iju-Jack War Canoe Houses, Chief Tammy Wenike Danagogo featured.',
    mainImage: '/coverage/miss-world-1.jpg',
    gallery: ['/coverage/miss-world-1.jpg', '/coverage/adaeze-oreh.jpg'],
    results: [
      'Spotlighted veteran political and cultural leadership',
      'Dignified statesman interview with cross-national interest',
      'Honored Da Iju-Jack War Canoe House heritage'
    ],
    tags: ['Chief Tammy Danagogo', 'Former Minister', 'Paramount Ruler', 'Rivers State'],
    videoUrl: 'https://www.instagram.com/reel/DZhvaN8CiOK/?stkn=b2ExMW1qOGt0bTl6',
    videoPlatform: 'instagram'
  }
];

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
    quote: "GistCity gave our international convention unmatched media visibility across Nigeria and North America. Their video reels and on-site reporting were world-class.",
    author: "Engr. Opubo Briggs",
    role: "Director of International Publicity",
    organization: "Ogbakor Ikwerre USA/Canada",
    location: "Houston, Texas",
    result: "Global Diaspora Reach"
  },
  {
    quote: "As our official media partner for the Miss World Nigeria contest, GistCity gave our delegates incredible visibility, representing our nation with dignity.",
    author: "Soye K. George",
    role: "Delegate & Cultural Ambassador",
    organization: "Miss World Nigeria Contest",
    location: "Lagos & Global Stage",
    result: "Official Media Partner"
  },
  {
    quote: "Their publicity for Knorr Nigeria during Nigeria Jollof Day in Port Harcourt brought tremendous engagement and mouth-watering storytelling to our campaign.",
    author: "Chef Roux",
    role: "Lead Culinary Consultant",
    organization: "Knorr Nigeria Campaign",
    location: "Port Harcourt, Rivers State",
    result: "Over 500K Impressions"
  },
  {
    quote: "GistCity conducted our health ministry dialogue with tremendous journalistic professionalism, communicating vital public health priorities to our people.",
    author: "Dr. Adaeze Oreh",
    role: "Hon. Commissioner for Health",
    organization: "Rivers State Ministry of Health",
    location: "Rivers State, Nigeria",
    result: "Vital Healthcare Broadcast"
  },
  {
    quote: "Covering our 20th Anniversary Gala at the Marriott Hotel in Houston was handled with absolute distinction. GistCity is the pulse of our diaspora.",
    author: "Alabo Samuel Diminas",
    role: "President & Community Leader",
    organization: "Westpaq Engineering & Foundation",
    location: "Sugar Land, Texas",
    result: "20-Year Milestone Chronicle"
  },
  {
    quote: "From Bole Festival in Port Harcourt to our gala nights in the USA, GistCity delivers authentic media coverage that connects cultures across continents.",
    author: "Andrew Oki",
    role: "Publicity Secretary & Author",
    organization: "Ijaw National Congress (USA)",
    location: "Texas, USA",
    result: "Transatlantic Syndication"
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
  }
];
