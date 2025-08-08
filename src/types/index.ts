export interface ImpactStats {
  livesImpacted: number;
  volunteersActive: number;
  projectsCompleted: number;
  fundsRaised: number;
}

export interface ImpactStory {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  imageAlt: string;
  date: string;
  author: string;
  category: 'education' | 'healthcare' | 'environment' | 'community';
  readTime: number;
}

export interface VolunteerProfile {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  imageAlt: string;
  joinDate: string;
  hoursVolunteered: number;
  skills: string[];
  testimonial: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  imageAlt: string;
  publishedAt: string;
  author: string;
  category: string;
  tags: string[];
  readTime: number;
  featured: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface FormData {
  [key: string]: string | string[] | boolean;
}

export interface ContactFormData extends FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  subscribe: boolean;
}

export interface VolunteerFormData extends FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interests: string[];
  availability: string;
  experience: string;
  motivation: string;
}

export interface NewsletterFormData {
  email: string;
  firstName?: string;
  interests?: string[];
}

export interface DonationData {
  amount: number;
  frequency: 'one-time' | 'monthly' | 'quarterly' | 'annually';
  donorInfo: {
    name: string;
    email: string;
    address?: string;
  };
}

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
}

export interface NavigationItem {
  name: string;
  href: string;
  external?: boolean;
  children?: NavigationItem[];
}