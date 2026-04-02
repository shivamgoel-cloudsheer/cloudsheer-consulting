import CloudPage from '../../components/CloudPage'
import { Headphones, MessageSquare, BookOpen, Phone, Zap, BarChart2, Users, Shield } from 'lucide-react'

const data = {
  tag: 'Service Cloud',
  TagIcon: Headphones,
  title: 'Deliver World-Class Support with',
  titleHighlight: 'AI-Powered Service Cloud',
  subtitle:
    'Salesforce Service Cloud unifies every support channel into one agent workspace — then Agentforce handles Tier-1 and Tier-2 cases autonomously so your human agents focus on complex, high-value interactions.',
  accentColor: '#0099E6',
  accentBg: 'rgba(0,153,230,0.07)',
  accentBorder: 'rgba(0,153,230,0.18)',
  stats: [
    { value: '78%',  label: 'Case deflection avg.' },
    { value: '35%',  label: 'Faster resolution time' },
    { value: '40%',  label: 'Lower cost-per-case' },
    { value: '4.8★', label: 'Avg. CSAT score' },
  ],
  overviewTitle: 'What is Service Cloud?',
  overviewBody:
    'Service Cloud is the #1 customer service platform — it consolidates email, chat, phone, social, and messaging into a single agent console. Cloudsheer implements Service Cloud to match your exact support tiers, SLAs, and escalation rules, then deploys Agentforce service agents to resolve cases without human intervention.',
  features: [
    { Icon: MessageSquare, title: 'Omni-Channel Routing',     desc: 'Intelligent routing across chat, email, phone, WhatsApp & social.' },
    { Icon: BookOpen,      title: 'Knowledge Base',           desc: 'AI-powered article suggestions surfaced in the agent console.' },
    { Icon: Zap,           title: 'Agentforce Service Agent', desc: 'Autonomous AI that resolves cases, updates records & escalates.' },
    { Icon: Phone,         title: 'Field Service Mgmt',       desc: 'Schedule, dispatch, and manage field technicians in real time.' },
    { Icon: BarChart2,     title: 'Service Analytics',        desc: 'Real-time SLA tracking, CSAT dashboards, and agent performance.' },
    { Icon: Shield,        title: 'Case Management',          desc: 'Custom queues, SLA rules, escalation paths, and entitlements.' },
  ],
  approach: {
    title: 'How We Implement Service Cloud',
    subtitle: 'We configure your support operation from the ground up — built around your SLAs, team structure, and customer journey.',
    steps: [
      { title: 'Support Audit',         desc: 'We analyse your current ticket volumes, channels, resolution times, and escalation patterns to find the biggest wins.' },
      { title: 'Console & Queue Setup', desc: 'Build the agent console, case queues, routing logic, entitlements, SLA milestones, and escalation rules.' },
      { title: 'Channel Integration',   desc: 'Connect email, live chat, telephony (CTI), WhatsApp, and social media into the unified omni-channel workspace.' },
      { title: 'AI Agent Deployment',   desc: 'Deploy and tune the Agentforce Service Agent for your top case types, knowledge base, and handoff procedures.' },
    ],
  },
  useCases: [
    { title: 'AI Case Deflection',       desc: 'Deployed an Agentforce agent for a B2C retailer — 78% of inbound chats resolved without human agents, CSAT maintained at 4.7.', tags: ['Agentforce', 'Chat', 'B2C'] },
    { title: 'Omni-Channel Migration',   desc: 'Moved a telco from 4 disconnected tools to a unified Service Cloud console — resolution time dropped 35%.', tags: ['Migration', 'Omni-Channel', 'Telco'] },
    { title: 'Field Service Rollout',    desc: 'Implemented Field Service Lightning for a utilities company — 200 mobile technicians, real-time dispatch, and GPS tracking.', tags: ['Field Service', 'Mobile', 'Utilities'] },
    { title: 'Knowledge Base Build',     desc: 'Built and structured a 500-article knowledge base with Einstein article recommendations — reducing avg. handle time by 22%.', tags: ['Knowledge', 'Einstein', 'AHT'] },
    { title: 'SLA & Entitlement Config', desc: 'Configured complex multi-tier SLA rules and entitlement processes for a SaaS company with 4 support tiers.', tags: ['SLAs', 'Entitlements', 'SaaS'] },
    { title: 'Contact Centre Analytics', desc: 'Built a real-time contact centre dashboard with queue health, agent utilisation, CSAT trends, and SLA breach alerts.', tags: ['Analytics', 'Reporting', 'Real-time'] },
  ],
  deliverables: {
    intro: 'Every Service Cloud engagement includes a fully configured support operation ready to handle real customer cases from day one.',
    items: [
      'Case management & queue configuration',
      'Omni-channel routing rules',
      'Entitlements & SLA milestones',
      'Knowledge base structure & articles',
      'Agentforce Service Agent setup',
      'CTI / telephony integration',
      'Service analytics dashboards',
      'Agent & supervisor training',
    ],
  },
  cta: {
    title: 'Ready to Modernise Your Support Operation?',
    body: "Book a free 30-minute Service Cloud scoping call. We'll review your current setup and design an AI-powered support architecture for your team.",
  },
}

export default function ServiceCloudPage() {
  return <CloudPage cloud={data} />
}
