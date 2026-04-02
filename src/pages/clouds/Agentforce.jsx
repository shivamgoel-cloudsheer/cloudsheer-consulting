import CloudPage from '../../components/CloudPage'
import { Zap, Bot, Shield, Brain, Layers, MessageSquare, RefreshCw, Database } from 'lucide-react'

const data = {
  tag: 'Agentforce by Salesforce',
  TagIcon: Zap,
  title: 'Your Business, Powered by',
  titleHighlight: 'Autonomous AI Agents',
  subtitle:
    "Agentforce is Salesforce's fastest-growing product ever — and Cloudsheer is the only consulting partner built entirely around it. We deploy AI agents that handle real work across sales, service, and operations so your team can focus on what humans do best.",
  accentColor: '#0176D3',
  accentBg: 'rgba(1,118,211,0.07)',
  accentBorder: 'rgba(1,118,211,0.18)',
  stats: [
    { value: '84%',   label: 'Cases resolved without a human' },
    { value: '330%',  label: 'Agentforce ARR growth YoY' },
    { value: '18K+',  label: 'Customers running Agentforce' },
    { value: '50%',   label: 'Lower agent response latency' },
  ],
  overviewTitle: 'What is Agentforce — and why does it matter now?',
  overviewBody:
    "Agentforce is not a chatbot. It is a fully autonomous AI platform built into Salesforce that can reason, plan, and take action across your entire business — resolving support cases, qualifying leads, processing approvals, and more. Powered by the Atlas Reasoning Engine, agents think through multi-step problems, access your live Salesforce and Data Cloud data in real time, and execute tasks end-to-end. Reddit used it to cut case resolution time from 8.9 minutes to 1.4 minutes. The IRS reduced a 10-day process to 30 minutes. This is not future technology — it is running in production today.",
  features: [
    { Icon: Brain,        title: 'Atlas Reasoning Engine',    desc: 'The AI brain behind every agent — breaks down complex goals into steps, evaluates options, and adapts in real time.' },
    { Icon: Database,     title: 'Real-Time Data Access',     desc: 'Agents pull live data from Data Cloud, Salesforce records, and external systems — no stale snapshots.' },
    { Icon: MessageSquare,title: 'Every Channel, One Agent',  desc: 'Deploy across web chat, email, SMS, WhatsApp, Slack, voice, and Experience Cloud portals.' },
    { Icon: Shield,       title: 'Einstein Trust Layer',      desc: 'Zero data leakage to LLMs. Every action is auditable, governed, and grounded in your permissions model.' },
    { Icon: Layers,       title: 'Multi-Agent Orchestration', desc: 'Agents hand off to specialist agents for complex tasks — like a team of AI workers collaborating.' },
    { Icon: RefreshCw,    title: 'Human-in-the-Loop',         desc: 'Agents escalate to humans with full context whenever needed — customers never hit a dead end.' },
  ],
  approach: {
    title: 'How Agentforce Actually Works',
    subtitle: 'Three components work together to give agents the ability to understand, decide, and act — all within your Salesforce environment.',
    steps: [
      { title: '1. Data',      desc: 'Agents connect to your live Salesforce data, Data Cloud, and any external source via API — giving them the full context needed to act correctly.' },
      { title: '2. Reasoning', desc: 'The Atlas Reasoning Engine breaks down the goal into a step-by-step plan, evaluates each decision point, and checks guardrails before acting.' },
      { title: '3. Actions',   desc: 'Agents execute tasks through Flows, Apex, APIs, and Salesforce automations — updating records, sending messages, and closing loops end-to-end.' },
      { title: '4. Handoff',   desc: 'When a situation needs a human, the agent escalates with complete context — the customer never has to repeat themselves.' },
    ],
  },
  useCases: [
    {
      title: 'Service Agent — 84% Resolution Rate',
      desc: "Resolves Tier-1 and Tier-2 support cases autonomously. Searches your knowledge base, updates case records, processes returns, and escalates to a human with full context when needed. Reddit's Agentforce deployment cut resolution time from 8.9 to 1.4 minutes.",
      tags: ['Service Cloud', 'Case Deflection', 'Omni-Channel'],
    },
    {
      title: 'Sales Development Agent — 24/7 Lead Qualification',
      desc: 'Responds to inbound leads in seconds at any hour, asks qualifying questions, scores opportunities, books discovery calls into rep calendars, and updates Salesforce — so your reps wake up to booked meetings, not cold leads.',
      tags: ['Sales Cloud', 'Lead Qualification', 'Pipeline'],
    },
    {
      title: 'Operations Agent — 34% Productivity Lift',
      desc: 'Automates routine ops work: data hygiene, report generation, approval routing, SLA monitoring, and cross-system sync. Proven to deliver a 34% increase in team productivity by eliminating repetitive manual tasks.',
      tags: ['Automation', 'Flows', 'Reporting'],
    },
    {
      title: 'WhatsApp & Messaging Agent — 60% Resolution Lift',
      desc: 'Handles customer queries over WhatsApp, SMS, and messaging channels autonomously. Real deployments show a 60% increase in WhatsApp inquiry resolution without human agents.',
      tags: ['WhatsApp', 'Messaging', 'Service Cloud'],
    },
    {
      title: 'HR & Onboarding Agent',
      desc: 'Guides employees through onboarding, answers policy questions, assigns tasks, and syncs completion status — reducing HR admin overhead and giving new starters a seamless first day.',
      tags: ['HR', 'Platform', 'Custom Build'],
    },
    {
      title: 'Finance & Approvals Agent',
      desc: "Routes purchase requests and expense approvals through your policy rules automatically. The IRS reduced a process that took 10 days to just 30 minutes using Agentforce automation.",
      tags: ['Finance', 'Approvals', 'Compliance'],
    },
  ],
  deliverables: {
    intro: 'Every Agentforce engagement with Cloudsheer includes everything you need to go from zero to a live, production-ready AI agent — no hidden extras, no surprises.',
    items: [
      'Agentforce readiness assessment',
      'High-impact use case identification',
      'Agent blueprint & workflow mapping',
      'Atlas Reasoning Engine configuration',
      'Topic, action & guardrail build',
      'Einstein Trust Layer setup',
      'Omni-channel deployment',
      'Agent performance dashboard',
      'UAT support & sandbox testing',
      'Production go-live & hypercare',
      'Admin & team training',
      '30-day post-launch optimisation',
    ],
  },
  cta: {
    title: 'Ready to Deploy Your First AI Agent?',
    body: "Join 18,000+ businesses already running Agentforce. Book a free 30-minute discovery call — we'll identify your highest-impact use case and build a deployment plan at no cost.",
  },
}

export default function AgentforcePage() {
  return <CloudPage cloud={data} />
}
