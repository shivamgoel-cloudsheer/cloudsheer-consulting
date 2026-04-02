import CloudPage from '../../components/CloudPage'
import { Zap, Bot, Shield, GitBranch, Layers, MessageSquare, RefreshCw, BarChart2 } from 'lucide-react'

const data = {
  tag: 'Agentforce',
  TagIcon: Zap,
  title: 'Deploy Autonomous AI Agents',
  titleHighlight: 'on Salesforce Agentforce',
  subtitle:
    'Cloudsheer is the only consulting partner structured entirely around Agentforce. We design, build, and deploy autonomous AI agents that handle real work — 24/7, at scale, inside your Salesforce org.',
  accentColor: '#0176D3',
  accentBg: 'rgba(1,118,211,0.07)',
  accentBorder: 'rgba(1,118,211,0.18)',
  stats: [
    { value: '78%',   label: 'Case deflection avg.' },
    { value: '3×',    label: 'Faster lead response' },
    { value: '24/7',  label: 'Always-on agents' },
    { value: '12 hrs',label: 'Saved per rep weekly' },
  ],
  overviewTitle: 'What is Agentforce?',
  overviewBody:
    "Agentforce is Salesforce's autonomous AI platform that lets you deploy intelligent agents across sales, service, marketing, and operations. Unlike traditional chatbots, Agentforce agents reason over your live Salesforce data, take real actions, and hand off to humans with full context — all governed by the Einstein Trust Layer.",
  features: [
    { Icon: Bot,          title: 'Autonomous Reasoning',     desc: 'Agents understand goals, plan steps, and act — not just respond.' },
    { Icon: Shield,       title: 'Einstein Trust Layer',     desc: 'Every action is auditable, governed, and grounded in your data.' },
    { Icon: GitBranch,    title: 'Topic & Action Design',    desc: 'We map your workflows into agent topics, actions, and guardrails.' },
    { Icon: Layers,       title: 'Multi-Cloud Integration',  desc: 'Agents work across Sales, Service, Marketing & Data Cloud.' },
    { Icon: MessageSquare,title: 'Omni-Channel Deployment',  desc: 'Deploy via chat, email, Slack, voice, and customer portals.' },
    { Icon: RefreshCw,    title: 'Continuous Improvement',   desc: 'We tune agents post-launch using conversation analytics.' },
  ],
  approach: {
    title: 'Our Agentforce Methodology',
    subtitle: 'A proven four-phase process from discovery to live production agents — designed to deliver fast time-to-value.',
    steps: [
      { title: 'Discovery',       desc: 'Map the workflows where agents will have the biggest impact — case deflection, lead qualification, or ops automation.' },
      { title: 'Agent Design',    desc: 'Define topics, actions, guardrails, and escalation paths. Build the trust layer configuration and data access rules.' },
      { title: 'Build & Test',    desc: 'Configure agents in your Salesforce sandbox, run simulated conversations, and iterate until performance targets are met.' },
      { title: 'Deploy & Tune',   desc: 'Go live in production, monitor agent performance in real time, and continuously improve based on outcome data.' },
    ],
  },
  useCases: [
    { title: 'AI Service Agent',          desc: 'Resolves Tier-1 and Tier-2 customer cases autonomously — searches knowledge, updates records, and escalates with context.', tags: ['Case Deflection', 'Service Cloud', 'Omni-Channel'] },
    { title: 'AI Sales Development Rep',  desc: 'Qualifies inbound leads 24/7, sends personalised outreach, books discovery calls, and updates opportunity records.', tags: ['Lead Qualification', 'Sales Cloud', 'Sequences'] },
    { title: 'Operations Agent',          desc: 'Automates routine data hygiene, report distribution, approval routing, and SLA monitoring — saving 12+ hrs per rep per week.', tags: ['Automation', 'Flows', 'Reporting'] },
    { title: 'HR Onboarding Agent',       desc: 'Guides new hires through onboarding steps, answers policy questions, assigns tasks, and syncs status with HR systems.', tags: ['HR', 'Custom Build', 'Platform'] },
    { title: 'Finance Approvals Agent',   desc: 'Routes purchase requests, validates against policy rules, notifies approvers, and logs decisions in the audit trail.', tags: ['Finance', 'Approvals', 'Compliance'] },
    { title: 'Partner Enablement Agent',  desc: 'Supports channel partners via Experience Cloud — answers product questions, surfaces deal support, and logs partner activities.', tags: ['Experience Cloud', 'Partners', 'Self-Service'] },
  ],
  deliverables: {
    intro: 'Every Agentforce engagement includes everything you need to go from zero to a production AI agent — no hidden extras.',
    items: [
      'Agent blueprint & workflow mapping',
      'Topic and action configuration',
      'Einstein Trust Layer setup',
      'Sandbox build & UAT support',
      'Production deployment',
      'Agent performance dashboard',
      'Admin training & documentation',
      '30-day post-launch hypercare',
    ],
  },
  cta: {
    title: 'Ready to Deploy Your First AI Agent?',
    body: "Book a free 30-minute Agentforce discovery call. We'll map the highest-impact use case for your business and build a deployment plan — no commitment required.",
  },
}

export default function AgentforcePage() {
  return <CloudPage cloud={data} />
}
