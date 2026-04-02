import CloudPage from '../../components/CloudPage'
import { Users, Globe, Shield, Zap, MessageSquare, BarChart2, Layout, RefreshCw } from 'lucide-react'

const data = {
  tag: 'Experience Cloud',
  TagIcon: Users,
  title: 'Build Connected Portals &',
  titleHighlight: 'Digital Experiences',
  subtitle:
    'Salesforce Experience Cloud lets you build branded self-service portals, partner communities, and customer-facing digital experiences — all connected directly to your Salesforce data. Cloudsheer designs and builds experiences that reduce support load and deepen relationships.',
  accentColor: '#06B6D4',
  accentBg: 'rgba(6,182,212,0.07)',
  accentBorder: 'rgba(6,182,212,0.18)',
  stats: [
    { value: '50%',  label: 'Reduction in support tickets' },
    { value: '3×',   label: 'Partner portal adoption' },
    { value: '48%',  label: 'Increase in self-service' },
    { value: '30%',  label: 'Lower onboarding cost' },
  ],
  overviewTitle: 'What is Experience Cloud?',
  overviewBody:
    "Experience Cloud (formerly Community Cloud) is Salesforce's platform for building branded digital destinations for your customers, partners, and employees. From self-service support portals to partner deal-registration hubs, Cloudsheer configures and customises Experience Cloud sites that are fast, secure, and deeply integrated with your CRM data.",
  features: [
    { Icon: Globe,        title: 'Customer Self-Service',  desc: 'Branded portals where customers manage accounts, raise cases, and find answers.' },
    { Icon: Users,        title: 'Partner Communities',    desc: 'Deal registration, co-marketing, lead distribution, and MDF management for partners.' },
    { Icon: Shield,       title: 'Secure Data Sharing',    desc: "Role-based visibility so each user only sees the records they're entitled to." },
    { Icon: Zap,          title: 'Agentforce Integration', desc: 'Embed AI chat agents directly into your Experience Cloud portal.' },
    { Icon: MessageSquare, title: 'Discussion Forums',    desc: 'Peer-to-peer community forums with moderation, reputation, and notifications.' },
    { Icon: Layout,       title: 'LWR & Aura Templates',  desc: 'Modern, fast LWR-based sites or classic Aura templates — fully branded.' },
  ],
  approach: {
    title: 'How We Build Experience Cloud Sites',
    subtitle: 'We design and build digital experiences that your customers and partners actually use — clean, fast, and connected.',
    steps: [
      { title: 'Experience Design',    desc: 'Define the audience, use cases, data access requirements, and branding guidelines for each Experience Cloud site.' },
      { title: 'Architecture & Auth',  desc: 'Set up sharing rules, profile permissions, login options (SSO, social, guest), and object visibility across the org.' },
      { title: 'Build & Brand',        desc: 'Configure site template, navigation, pages, Lightning components, and brand theme — desktop and mobile responsive.' },
      { title: 'Launch & Iterate',     desc: 'Soft launch with a pilot group, gather adoption data, and iterate based on real usage before full rollout.' },
    ],
  },
  useCases: [
    { title: 'Customer Support Portal',    desc: 'Built a self-service portal for a telco — customers manage accounts, view bills, raise cases, and track resolutions without calling.', tags: ['Self-Service', 'Telco', 'Case Deflection'] },
    { title: 'Partner Deal Registration',  desc: 'Deployed a partner community for a software vendor with deal reg, MDF claims, co-selling tools, and partner leaderboards.', tags: ['Partner', 'Channel', 'Deal Reg'] },
    { title: 'Employee Hub',               desc: 'Internal employee experience site with HR forms, IT ticketing, policy library, and social feeds — replacing a legacy intranet.', tags: ['Employee', 'Internal', 'HR'] },
    { title: 'B2B Client Portal',          desc: 'Created a client portal for a professional services firm — project status, invoices, document sharing, and direct messaging.', tags: ['B2B', 'Client Portal', 'Professional Services'] },
    { title: 'AI-Powered Help Centre',     desc: 'Combined Experience Cloud portal with an Agentforce AI agent — 60% of visitor queries resolved without human involvement.', tags: ['Agentforce', 'Knowledge', 'AI'] },
    { title: 'Franchise Management Hub',   desc: 'Built a franchise community for a retail chain — franchisees access ops manuals, submit reports, and request support in one place.', tags: ['Franchise', 'Retail', 'Community'] },
  ],
  deliverables: {
    intro: 'Every Experience Cloud engagement delivers a production-ready portal that is branded, secured, and connected to your Salesforce org.',
    items: [
      'Experience site architecture & design',
      'Template, branding & theme setup',
      'Page & component build',
      'Sharing rules & permission configuration',
      'SSO / login integration',
      'Knowledge base & search setup',
      'Agentforce chat agent (optional)',
      'Mobile responsiveness & launch testing',
    ],
  },
  cta: {
    title: 'Ready to Launch Your Customer or Partner Portal?',
    body: "Book a free 30-minute Experience Cloud scoping call. We'll design a portal your customers and partners will actually want to use.",
  },
}

export default function ExperienceCloudPage() {
  return <CloudPage cloud={data} />
}
