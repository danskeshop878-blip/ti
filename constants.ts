import { 
  PenTool, 
  Video, 
  Users, 
  Cpu, 
  Camera, 
  Megaphone,
  BarChart3,
  Zap,
  Layers
} from 'lucide-react';
import { Service, PortfolioItem, TeamMember } from './types';

export const SERVICES: Service[] = [
  {
    id: 'logo-branding',
    title: 'Logo Design & Branding',
    shortDescription: 'Forging iconic visual identities that resonate with your audience.',
    fullDescription: 'We blend artistic intuition with market psychology to create logos and brand identities that are not just visually stunning, but strategically sound. Our process ensures your brand stands out in a crowded digital landscape.',
    icon: PenTool,
    image: 'https://picsum.photos/800/600?random=1',
    benefits: ['Memorable Visual Identity', 'Consistent Brand Language', 'Scalable Vector Assets'],
    process: ['Discovery Workshop', 'Concept Sketches', 'Digital Rendering', 'Refinement', 'Brand Guidelines Delivery'],
    pricing: [
      { name: 'Startup', price: '$499', features: ['3 Logo Concepts', 'Vector Files', 'Color Palette'] },
      { name: 'Professional', price: '$999', features: ['5 Concepts', 'Brand Book', 'Social Media Kit', 'Stationery Design'] },
      { name: 'Enterprise', price: 'Custom', features: ['Full Identity System', 'Trademark Support', 'Unlimited Revisions'] },
    ],
    faqs: [
      { question: 'How long does the process take?', answer: 'Typically 2-3 weeks for a complete brand identity.' },
      { question: 'Do I own the copyright?', answer: 'Yes, full transfer of rights upon final payment.' }
    ]
  },
  {
    id: 'promo-video',
    title: 'Promotional Video Production',
    shortDescription: 'Cinematic storytelling to elevate your product or service.',
    fullDescription: 'From script to screen, we produce high-octane promotional videos. We utilize cutting-edge editing, motion graphics, and sound design to capture attention within the first 3 seconds.',
    icon: Video,
    image: 'https://picsum.photos/800/600?random=2',
    benefits: ['Higher Conversion Rates', 'Increased Engagement', 'Professional Brand Polish'],
    process: ['Scriptwriting', 'Storyboarding', 'Filming/Animation', 'Post-Production', 'Delivery'],
    pricing: [
      { name: 'Teaser', price: '$1,200', features: ['15-30s Video', 'Stock Footage', 'Music License'] },
      { name: 'Feature', price: '$3,500', features: ['60-90s Video', 'Professional Voiceover', 'Custom Animation'] },
      { name: 'Campaign', price: 'Custom', features: ['Series of Videos', 'Multiple Formats', 'On-location Shoot'] },
    ],
    faqs: [
      { question: 'Can you use our existing footage?', answer: 'Absolutely, we can edit and enhance your existing assets.' }
    ]
  },
  {
    id: 'ugc-content',
    title: 'UGC Video & Photo Ads',
    shortDescription: 'Authentic user-generated content that builds trust and drives sales.',
    fullDescription: 'Leverage the power of authenticity. We coordinate with a network of creators to produce content that feels organic, relatable, and trustworthy—perfect for TikTok and Instagram Reels.',
    icon: Users,
    image: 'https://picsum.photos/800/600?random=3',
    benefits: ['Authentic Audience Connection', 'Lower Ad Fatigue', 'Viral Potential'],
    process: ['Creator Matching', 'Brief Creation', 'Content Production', 'Quality Control'],
    pricing: [
      { name: 'Starter', price: '$800', features: ['3 UGC Videos', 'Rights Usage', 'Basic Editing'] },
      { name: 'Growth', price: '$2,000', features: ['10 UGC Videos', 'Multiple Creators', 'Hook Variations'] },
      { name: 'Scale', price: 'Custom', features: ['Monthly Retainer', 'Top-tier Creators', 'Strategy Management'] },
    ],
    faqs: [
      { question: 'Do we choose the creators?', answer: 'We recommend creators based on your niche, but you have final approval.' }
    ]
  },
  {
    id: 'ai-models',
    title: 'AI Product Advertising Models',
    shortDescription: 'Next-gen virtual models tailored perfectly to your brand aesthetic.',
    fullDescription: 'Skip the expensive photoshoots. We generate hyper-realistic AI models wearing or interacting with your products in any environment imaginable.',
    icon: Cpu,
    image: 'https://picsum.photos/800/600?random=4',
    benefits: ['Infinite Diversity', 'Cost Efficient', 'Global Settings without Travel'],
    process: ['Product Digitization', 'Model Generation', 'Scene Composition', 'Rendering'],
    pricing: [
      { name: 'Single Look', price: '$300', features: ['5 Images', '1 AI Model', 'Standard Background'] },
      { name: 'Collection', price: '$1,500', features: ['30 Images', '3 AI Models', 'Custom Environments'] },
      { name: 'Studio', price: 'Custom', features: ['Virtual Runway Video', 'Dynamic Lighting', 'Full Catalog'] },
    ],
    faqs: [
      { question: 'Does it look real?', answer: 'Our latest generation models are indistinguishable from reality for most web applications.' }
    ]
  },
  {
    id: 'social-media',
    title: 'Social Media Creation',
    shortDescription: 'A consistent stream of high-quality photos and videos.',
    fullDescription: 'We manage your visual feed. From daily stories to high-fidelity posts, ensuring your social presence is active, beautiful, and on-brand.',
    icon: Camera,
    image: 'https://picsum.photos/800/600?random=5',
    benefits: ['Consistent Presence', 'Algorithm Optimization', 'Community Growth'],
    process: ['Monthly Calendar', 'Content Creation', 'Scheduling', 'Analytics'],
    pricing: [
      { name: 'Basic', price: '$1,000/mo', features: ['12 Posts', '4 Stories', 'Captioning'] },
      { name: 'Pro', price: '$2,500/mo', features: ['20 Posts', '10 Reels', 'Community Management'] },
      { name: 'Elite', price: 'Custom', features: ['Daily Content', 'Dedicated Manager', 'Trend Analysis'] },
    ],
    faqs: [
      { question: 'Do you handle posting?', answer: 'Yes, we can handle the scheduling and posting process.' }
    ]
  },
  {
    id: 'brand-ads',
    title: 'Brand Ad Campaigns',
    shortDescription: 'Comprehensive, multi-channel advertising campaigns.',
    fullDescription: 'We design the entire funnel. From the hook to the click, our ad creatives are data-driven and designed to convert cold traffic into loyal customers.',
    icon: Megaphone,
    image: 'https://picsum.photos/800/600?random=6',
    benefits: ['Data-Driven Design', 'A/B Testing Ready', 'Cross-Platform Formats'],
    process: ['Strategy Session', 'Creative Development', 'Format Adaptation', 'Launch Support'],
    pricing: [
      { name: 'Launch', price: '$1,500', features: ['Ad Sets for FB/IG', 'Copywriting', '2 Revisions'] },
      { name: 'Expansion', price: '$4,000', features: ['Multi-platform (FB, YT, TikTok)', 'Motion Graphics', 'A/B Variants'] },
      { name: 'Dominance', price: 'Custom', features: ['Full Funnel Creative', 'Landing Page Design', 'Performance Audit'] },
    ],
    faqs: [
      { question: 'Do you run the ads?', answer: 'Our primary focus is creative, but we partner with media buyers for execution.' }
    ]
  },
];

export const PORTFOLIO: PortfolioItem[] = [
  { id: '1', title: 'CyberPunk Energy Drink', category: 'Brand Ads', image: 'https://picsum.photos/600/400?random=10', description: 'High energy campaign.', results: '200% ROAS' },
  { id: '2', title: 'Neo-Tokyo Fashion', category: 'AI Models', image: 'https://picsum.photos/600/400?random=11', description: 'Virtual runway show.', results: '50k Views' },
  { id: '3', title: 'TechStart Logo', category: 'Logos', image: 'https://picsum.photos/600/400?random=12', description: 'Modern minimalistic branding.', results: 'Brand Launched' },
  { id: '4', title: 'EcoLife UGC', category: 'UGC', image: 'https://picsum.photos/600/400?random=13', description: 'Sustainability influencers.', results: '10k Leads' },
  { id: '5', title: 'Crypto Wallet Promo', category: 'Videos', image: 'https://picsum.photos/600/400?random=14', description: 'Explainer video.', results: '1M Downloads' },
  { id: '6', title: 'Future Gym', category: 'Social Media', image: 'https://picsum.photos/600/400?random=15', description: 'Instagram overhaul.', results: '+5k Followers' },
];

export const TEAM: TeamMember[] = [
  { name: 'Alex Chen', role: 'Creative Director', image: 'https://picsum.photos/200/200?random=20' },
  { name: 'Sarah Jenkins', role: 'Lead AI Specialist', image: 'https://picsum.photos/200/200?random=21' },
  { name: 'Marcus Vane', role: 'Senior Animator', image: 'https://picsum.photos/200/200?random=22' },
];