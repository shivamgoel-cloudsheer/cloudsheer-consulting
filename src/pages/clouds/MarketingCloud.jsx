import CloudPage from '../../components/CloudPage'
import { Megaphone, Mail, Users, BarChart2, Zap, RefreshCw, Globe, Target } from 'lucide-react'

const data = {
  tag: 'Marketing Cloud',
  TagIcon: Megaphone,
  title: 'Personalise Every Journey with',
  titleHighlight: 'Marketing Cloud & AI',
  subtitle:
    'Salesforce Marketing Cloud lets you orchestrate personalised customer journeys across email, SMS, push, advertising, and web — powered by real-time data and Einstein AI. Cloudsheer helps you build, connect, and automate the full marketing engine.',
  accentColor: '#F59E0B',
  accentBg: 'rgba(245,158,11,0.07)',
  accentBorder: 'rgba(245,158,11,0.20)',
  stats: [
    { value: '3.8×', label: 'Higher email ROI' },
    { value: '67%',  label: 'Lift in conversion rates' },
    { value: '40%',  label: 'Reduction in churn' },
    { value: '25%',  label: 'Increase in customer LTV' },
  ],
  overviewTitle: 'What is Marketing Cloud?',
  overviewBody:
    "Marketing Cloud is Salesforce's enterprise marketing automation platform — it covers email, mobile, social, advertising, and web personalisation in one place. With Marketing Cloud Account Engagement (Pardot) for B2B and the full MC suite for B2C, Cloudsheer connects your data, segments your audience, and builds the journeys that drive real revenue.",
  features: [
    { Icon: Mail,       title: 'Email Studio',          desc: 'Drag-and-drop email builder with dynamic content and A/B testing.' },
    { Icon: RefreshCw,  title: 'Journey Builder',       desc: 'Multi-step, multi-channel customer journeys triggered by real-time events.' },
    { Icon: Users,      title: 'Audience Segmentation', desc: 'Data-driven segments using CRM data, web behaviour, and purchase history.' },
    { Icon: Target,     title: 'Advertising Studio',    desc: 'Sync CRM audiences to Google, Facebook, LinkedIn, and Twitter ads.' },
    { Icon: Globe,      title: 'Web Personalisation',   desc: 'Real-time personalised content blocks across your website and landing pages.' },
    { Icon: BarChart2,  title: 'Marketing Analytics',   desc: 'Attribution reporting, campaign ROI, and Einstein engagement scoring.' },
  ],
  approach: {
    title: 'How We Implement Marketing Cloud',
    subtitle: 'We set up Marketing Cloud as a revenue engine — connected to your CRM, powered by clean data, and built for scale.',
    steps: [
      { title: 'Marketing Audit',     desc: 'Review existing campaigns, data quality, list structure, and integration points between Marketing Cloud and Sales Cloud.' },
      { title: 'Platform Setup',      desc: 'Configure business units, sender authentication, data extensions, and CRM connector sync for a clean foundation.' },
      { title: 'Journey Architecture',desc: 'Design and build your core journeys — welcome series, nurture tracks, re-engagement, and post-purchase flows.' },
      { title: 'Launch & Optimise',   desc: 'Go live with monitoring, set up engagement dashboards, and run continuous A/B tests to improve performance.' },
    ],
  },
  useCases: [
    { title: 'Welcome & Nurture Series',    desc: 'Built a 12-touch onboarding journey for a SaaS company — 40% increase in trial-to-paid conversion within 90 days.', tags: ['Journey Builder', 'SaaS', 'Nurture'] },
    { title: 'B2B Lead Nurture (Pardot)',   desc: 'Implemented Account Engagement for a professional services firm — 3× increase in MQL-to-SQL conversion rate.', tags: ['Pardot', 'B2B', 'Lead Scoring'] },
    { title: 'Re-Engagement Campaigns',     desc: 'Reactivated 28% of churned subscribers for a retailer using dynamic, personalised win-back journeys over 60 days.', tags: ['Re-engagement', 'B2C', 'Retail'] },
    { title: 'Paid Media Sync',             desc: 'Connected CRM purchase data to Facebook and Google Ads — reduced cost-per-acquisition by 35% through lookalike targeting.', tags: ['Advertising', 'Facebook', 'Google'] },
    { title: 'Transactional Email Rebuild', desc: 'Redesigned all transactional emails (receipts, confirmations, alerts) with dynamic personalisation — CSAT up 12 points.', tags: ['Transactional', 'Dynamic Content', 'CX'] },
    { title: 'Marketing + Service Link',    desc: 'Connected Marketing Cloud with Service Cloud so support history suppresses irrelevant promotional messages.', tags: ['Cross-Cloud', 'Suppression', 'CX'] },
  ],
  deliverables: {
    intro: 'A complete Marketing Cloud engagement delivers a fully connected, data-driven marketing operation ready to scale.',
    items: [
      'Business unit & account configuration',
      'Sender authentication (SAP/DKIM/SPF)',
      'CRM connector & data sync setup',
      'Data extensions & segmentation build',
      'Core journey design & build',
      'Email templates & dynamic content',
      'Einstein engagement scoring',
      'Campaign analytics dashboards',
    ],
  },
  cta: {
    title: 'Ready to Build Smarter Marketing Journeys?',
    body: "Book a free 30-minute Marketing Cloud scoping call. We'll assess your current stack and design a personalisation roadmap for your business.",
  },
}

export default function MarketingCloudPage() {
  return <CloudPage cloud={data} />
}
