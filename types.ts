import { LucideIcon } from 'lucide-react';

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: LucideIcon;
  image: string;
  benefits: string[];
  process: string[];
  pricing: PricingTier[];
  faqs: { question: string; answer: string }[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  results: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}