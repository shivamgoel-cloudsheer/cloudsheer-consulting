import CloudPage from '../../components/CloudPage'
import { TrendingUp, Target, DollarSign, BarChart2, Zap, RefreshCw, Users, FileText } from 'lucide-react'

const data = {
  tag: 'Sales Cloud',
  TagIcon: TrendingUp,
  title: 'Close More Deals with',
  titleHighlight: 'AI-Powered Sales Cloud',
  subtitle:
    "Salesforce Sales Cloud is the world's #1 CRM. Cloudsheer implements and customises it to fit your exact sales motion — then supercharges it with Agentforce AI to automate qualification, follow-up, and forecasting.",
  accentColor: '#0176D3',
  accentBg: 'rgba(1,118,211,0.07)',
  accentBorder: 'rgba(1,118,211,0.18)',
  stats: [
    { value: '29%',   label: 'More revenue on avg.' },
    { value: '3×',    label: 'Faster lead response' },
    { value: '44%',   label: 'Higher win rate' },
    { value: '34%',   label: 'Improved rep productivity' },
  ],
  overviewTitle: 'What is Sales Cloud?',
  overviewBody:
    'Sales Cloud gives your team a complete view of every customer, opportunity, and pipeline stage — with AI-powered guidance at every step. From lead capture to quote, Cloudsheer configures Sales Cloud around your specific sales process, integrates your existing tools, and deploys Agentforce SDR agents to handle the work reps hate most.',
  features: [
    { Icon: Target,     title: 'Lead & Opportunity Mgmt',  desc: 'Custom stages, fields, and scoring rules built for your pipeline.' },
    { Icon: DollarSign, title: 'CPQ & Quoting',            desc: 'Guided selling, pricing rules, and automated quote generation.' },
    { Icon: BarChart2,  title: 'Revenue Intelligence',     desc: 'Einstein forecasting with real-time pipeline health signals.' },
    { Icon: Zap,        title: 'Agentforce SDR Agent',     desc: 'AI agent that qualifies leads, sends outreach, and books meetings.' },
    { Icon: RefreshCw,  title: 'Workflow Automation',      desc: 'Auto-assign leads, trigger follow-ups, and update records hands-free.' },
    { Icon: Users,      title: 'Account & Contact 360',    desc: 'Full relationship map with activity history, news, and social signals.' },
  ],
  approach: {
    title: 'How We Implement Sales Cloud',
    subtitle: 'From process discovery to a fully live CRM in weeks — not months.',
    steps: [
      { title: 'Sales Process Mapping',  desc: 'We document your full sales cycle, stages, handoff rules, and reporting requirements before touching Salesforce.' },
      { title: 'Org Configuration',      desc: 'Custom objects, fields, validation rules, page layouts, and permission sets — built to match how your team sells.' },
      { title: 'Integrations & Data',    desc: 'Connect your email, calendar, marketing tools, and ERP. Migrate clean, enriched data from your existing CRM.' },
      { title: 'Train & Go Live',        desc: 'Hands-on rep training, adoption tracking, and a hypercare period to ensure your team is confident from day one.' },
    ],
  },
  useCases: [
    { title: 'Startup CRM Rollout',         desc: 'First-time Salesforce implementation for a growing SaaS company — 50 seats, custom pipeline, HubSpot migration.', tags: ['Implementation', 'Migration', 'SaaS'] },
    { title: 'Enterprise Pipeline Cleanup',  desc: 'Rebuilt a legacy org for a 200-person sales team, consolidating 3 business units into one clean Sales Cloud instance.', tags: ['Enterprise', 'Consolidation', 'Governance'] },
    { title: 'AI SDR Deployment',            desc: 'Deployed an Agentforce SDR agent that qualifies 100% of inbound leads within 5 minutes and books 40% more meetings.', tags: ['Agentforce', 'Lead Qual', 'Meetings'] },
    { title: 'CPQ Implementation',           desc: 'Implemented Salesforce CPQ for a manufacturer with 500+ SKUs — reducing quote time from 3 days to 45 minutes.', tags: ['CPQ', 'Manufacturing', 'Quoting'] },
    { title: 'RevOps Dashboard Build',       desc: 'Built a real-time revenue operations dashboard with Einstein forecasting, pipeline velocity, and rep leaderboards.', tags: ['RevOps', 'Analytics', 'Forecasting'] },
    { title: 'Sales & Service Unification',  desc: 'Connected Sales Cloud and Service Cloud so reps see full support history before every call — improving NPS by 18 points.', tags: ['Cross-Cloud', 'Service Cloud', 'NPS'] },
  ],
  deliverables: {
    intro: 'A complete Sales Cloud implementation includes every component your team needs to sell smarter from day one.',
    items: [
      'Sales process & requirements workshop',
      'Custom object, field & layout build',
      'Lead, opportunity & account configuration',
      'Workflow & approval automation',
      'CRM data migration & cleansing',
      'Email & calendar integration',
      'Einstein forecasting setup',
      'Rep & admin training sessions',
    ],
  },
  cta: {
    title: 'Ready to Transform Your Sales Process?',
    body: "Book a free 30-minute Sales Cloud scoping call. We'll review your current setup and build a roadmap to close more deals — faster.",
  },
}

export default function SalesCloudPage() {
  return <CloudPage cloud={data} />
}
