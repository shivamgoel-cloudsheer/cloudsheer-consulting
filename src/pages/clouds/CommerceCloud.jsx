import CloudPage from '../../components/CloudPage'
import { ShoppingCart, Package, CreditCard, RefreshCw, Globe, BarChart2, Users, Zap } from 'lucide-react'

const data = {
  tag: 'Commerce Cloud',
  TagIcon: ShoppingCart,
  title: 'Unified Commerce Experiences',
  titleHighlight: 'for B2B and B2C',
  subtitle:
    'Salesforce Commerce Cloud powers seamless buying experiences across digital storefronts, mobile apps, and self-service portals — connected to your CRM, inventory, and fulfilment systems. Cloudsheer builds and optimises commerce deployments that convert.',
  accentColor: '#6366F1',
  accentBg: 'rgba(99,102,241,0.07)',
  accentBorder: 'rgba(99,102,241,0.18)',
  stats: [
    { value: '26%',  label: 'Higher conversion rate' },
    { value: '21%',  label: 'Increase in AOV' },
    { value: '35%',  label: 'Reduction in cart abandonment' },
    { value: '2×',   label: 'Faster time-to-launch' },
  ],
  overviewTitle: 'What is Commerce Cloud?',
  overviewBody:
    'Salesforce Commerce Cloud covers both B2C storefronts (SFCC) and B2B digital commerce — with unified order management, AI-powered product recommendations, and seamless integration with Sales Cloud, Service Cloud, and Marketing Cloud. Cloudsheer designs, builds, and optimises commerce experiences that drive revenue from day one.',
  features: [
    { Icon: Globe,       title: 'B2B & B2C Storefronts',   desc: 'Headless or reference storefront builds tailored to your brand and buyer journey.' },
    { Icon: Package,     title: 'Order Management',         desc: 'Unified inventory, fulfilment, returns, and order tracking across channels.' },
    { Icon: CreditCard,  title: 'Checkout Optimisation',    desc: 'Streamlined, conversion-optimised checkout with multiple payment options.' },
    { Icon: RefreshCw,   title: 'Subscription Commerce',    desc: 'Recurring billing, subscription management, and renewal automation.' },
    { Icon: Zap,         title: 'AI Recommendations',       desc: 'Einstein product recommendations personalised to each shopper in real time.' },
    { Icon: BarChart2,   title: 'Commerce Analytics',       desc: 'Revenue dashboards, product performance, and customer lifetime value tracking.' },
  ],
  approach: {
    title: 'How We Implement Commerce Cloud',
    subtitle: 'We design commerce architectures that are built to scale — from MVP storefront to enterprise multi-site deployment.',
    steps: [
      { title: 'Commerce Discovery',  desc: 'Map your product catalogue, buyer journey, fulfilment flows, and integration requirements before any build begins.' },
      { title: 'Storefront Build',    desc: 'Configure or customise your storefront — product pages, search, cart, checkout, account, and order history.' },
      { title: 'System Integration',  desc: 'Connect ERP, WMS, PIM, payment gateway, tax engine, and your Salesforce CRM for a unified data flow.' },
      { title: 'Launch & Optimise',   desc: 'Performance testing, SEO setup, analytics instrumentation, and ongoing A/B testing to improve conversion.' },
    ],
  },
  useCases: [
    { title: 'B2B Commerce Portal',       desc: 'Built a self-service ordering portal for a manufacturer — 60% of orders now placed online without sales rep involvement.', tags: ['B2B', 'Self-Service', 'Manufacturing'] },
    { title: 'D2C Storefront Launch',      desc: 'Launched a direct-to-consumer SFCC storefront for a lifestyle brand — 26% higher conversion vs previous platform.', tags: ['B2C', 'SFCC', 'D2C'] },
    { title: 'Subscription Commerce Build',desc: 'Implemented subscription and recurring billing for a SaaS-adjacent product company — 35% lift in monthly recurring revenue.', tags: ['Subscriptions', 'Billing', 'SaaS'] },
    { title: 'Commerce + Service Link',    desc: 'Connected Commerce Cloud to Service Cloud so customers can raise order issues directly in the checkout experience.', tags: ['Cross-Cloud', 'CX', 'Returns'] },
    { title: 'Multi-Site Rollout',         desc: 'Deployed Commerce Cloud across 8 international storefronts with localised pricing, currency, and tax handling.', tags: ['International', 'Multi-site', 'Localisation'] },
    { title: 'Headless Commerce Build',    desc: 'Built a headless commerce frontend on a custom React stack with Salesforce Commerce Cloud APIs driving the backend.', tags: ['Headless', 'React', 'API'] },
  ],
  deliverables: {
    intro: 'A Commerce Cloud engagement delivers a fully functional, integrated storefront ready to start generating revenue.',
    items: [
      'Commerce architecture & discovery',
      'Storefront configuration & theming',
      'Product catalogue & pricing setup',
      'Checkout & payment integration',
      'Order management configuration',
      'ERP / WMS / PIM integration',
      'Einstein recommendations setup',
      'Commerce analytics & dashboards',
    ],
  },
  cta: {
    title: 'Ready to Launch or Optimise Your Commerce Experience?',
    body: "Book a free 30-minute Commerce Cloud scoping call. We'll review your current setup and design a roadmap to drive more revenue online.",
  },
}

export default function CommerceCloudPage() {
  return <CloudPage cloud={data} />
}
