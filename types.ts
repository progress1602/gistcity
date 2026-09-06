
export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  client: string;
  industry: string;
  problem: string;
  solution: string;
  mainImage: string;
  gallery: string[];
  results: string[];
  tags: string[];
  videoUrl?: string;
  videoPlatform?: 'instagram' | 'youtube' | 'video';
}

export interface Service {
  title: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  organization: string;
  location: string;
  result: string;
}

export interface EventPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  month: string;
  day: string;
  year: string;
  time: string;
  location: string;
  city: string;
  venue: string;
  image: string;
  summary: string;
  description: string;
  expectedAttendees: string;
  mediaRole: string;
  featured?: boolean;
  tags: string[];
}
