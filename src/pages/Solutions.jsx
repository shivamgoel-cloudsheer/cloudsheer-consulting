import { Link } from 'react-router-dom'
import {
  ArrowRight, Bot, CheckCircle2, Sparkles, ChevronRight,
  ShoppingCart, Headphones, Mail, Database, BarChart3, Zap,
} from 'lucide-react'

function PageHero() {
  return (
    <section className="relative pt-36 pb-20 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="glow-dot w-[600px] h-[600px] bg-cs-blue/10 top-[-200px] left-[50%] -translate-x-1/2" />
      <div className="section-wrap relative z-10 text-center max-w-3xl mx-auto">
        <div className="tag mx-auto mb-6"><Bot className="w-3.5 h-3.5" /> Agentforce & Solutions</div>
        <h1 className="section-title mb-5">
          Autonomous AI Agents Built on{' '}
          <span className="gradient-text">Salesforce Agentforce</span>
        </h1>
        <p className="section-sub">
          Cloudsheer is the first consulting partner structured entirely around
          Agentforce — so you get deeper expertise and faster outcomes than any
          generalist Salesforce partner.
        </p>
      </div>
    </section>
  )
}

function AgentforceHero() {
  const agents = [
    {
      name: 'Service Agent',
      icon: <Headphones className="w-5 h-5" />,
      metric: '78% deflection',
      metricColor: 'text-cs-blue bg-cs-blue/8 border-cs-blue/20',
      border: 'border-cs-blue/20 hover:border-cs-blue/40',
      features: [
        'Resolves Tier-1 & Tier-2 cases autonomously',
        'Searches knowledge base in real time',
        'Updates case fields, status & resolution',
        'Seamless human escalation with full context',
        'Handles email, chat & messaging channels',
        'Learns from every resolved interaction',
      ],
    },
    {
      name: 'Sales Development Agent',
      icon: <ShoppingCart className="w-5 h-5" />,
      metric: '3× faster response',
      metricColor: 'text-cs-gold bg-cs-gold/10 border-cs-gold/25',
      border: 'border-cs-electric/20 hover:border-cs-electric/40',
      features: [
        'Qualifies inbound leads instantly, 24/7',
        'Sends personalised outreach sequences',
        'Books discovery calls into rep calendars',
        'Updates lead & opportunity records',
        'Enriches contact data via connected sources',
        'Hands off hot leads to reps with context',
      ],
    },
    {
      name: 'Operations Agent',
      icon: <Zap className="w-5 h-5" />,
      metric: '12 hrs/week saved',
      metricColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      border: 'border-cs-purple/20 hover:border-cs-purple/40',
      features: [
        'Automates routine record updates & hygiene',
        'Generates and distributes scheduled reports',
        'Triggers cross-system data sync workflows',
        'Monitors pipeline health & alerts on risk',
        'Manages approval routing & notifications',
        'Tracks SLAs and escalates automatically',
      ],
    },
  ]

  return (
    <section className="py-24 bg-cs-bgsub">
      <div className="section-wrap">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="tag mx-auto mb-5"><Bot className="w-3.5 h-3.5" /> Agentforce Agents</div>
          <h2 className="section-title mb-4">
            Deploy Agents Built for <span className="gradient-text">Your Workflows</span>
          </h2>
          <p className="section-sub">Every agent is custom-designed around your Salesforce org, business rules, and team. No generic templates.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {agents.map(({ name, icon, metric, metricColor, border, features }) => (
            <div key={name} className={`glass-card border ${border} p-7 flex flex-col hover:-translate-y-1 transition-all duration-300`}>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-cs-blue/8 border border-cs-blue/15 flex items-center justify-center text-cs-blue">
                  {icon}
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${metricColor}`}>{metric} avg.</span>
              </div>
              <h3 className="text-cs-navy font-bold text-lg mb-5">{name}</h3>
              <ul className="space-y-2.5 flex-grow mb-6">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-cs-muted">
                    <CheckCircle2 className="w-4 h-4 text-cs-blue shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="flex items-center gap-1.5 text-cs-blue text-sm font-semibold hover:gap-2.5 transition-all">
                Build this agent <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TrustLayer() {
  const pillars = [
    { title: 'Grounded in Your Data',    desc: 'Agents only use your Salesforce data — no hallucinations, no guessing.' },
    { title: 'Full Audit Trail',          desc: 'Every agent action is logged. Full visibility into what was done and why.' },
    { title: 'Governed by Your Rules',   desc: 'Agents operate within the permission model and guardrails you define.' },
    { title: 'Human Override Always',    desc: 'Any agent action can be escalated to a human with one click and full context.' },
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="glow-dot w-[400px] h-[400px] bg-cs-blue/8 top-[-100px] right-[-100px]" />
      <div className="section-wrap relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="tag mb-5"><Sparkles className="w-3.5 h-3.5" /> Einstein Trust Layer</div>
            <h2 className="section-title mb-5">
              AI You Can Trust.<br /><span className="gradient-text">Enterprise-Grade Safety.</span>
            </h2>
            <p className="section-sub mb-8">
              Agentforce runs on Salesforce's Einstein Trust Layer — the industry's
              only enterprise AI safety framework built directly into the CRM.
              Every agent action is transparent, auditable, and governed.
            </p>
            <Link to="/contact" className="btn-primary">
              Talk to our team <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {pillars.map(({ title, desc }) => (
              <div key={title} className="glass-card p-5">
                <div className="w-8 h-8 rounded-lg bg-cs-blue/8 border border-cs-blue/15 flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-4 h-4 text-cs-blue" />
                </div>
                <h4 className="text-cs-navy font-semibold text-sm mb-1.5">{title}</h4>
                <p className="text-cs-muted text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const clouds = [
  { icon: <ShoppingCart className="w-6 h-6" />, title: 'Sales Cloud + Agentforce',       desc: 'Supercharge your pipeline with AI-powered lead qualification, forecasting, and automated follow-up sequences.', tags: ['Lead Scoring', 'CPQ', 'Revenue Intelligence'] },
  { icon: <Headphones className="w-6 h-6" />,   title: 'Service Cloud + Agentforce',     desc: 'Resolve cases faster with autonomous agents, omni-channel routing, and AI-powered knowledge search.',             tags: ['Case Deflection', 'Knowledge AI', 'Omni-Channel'] },
  { icon: <Mail className="w-6 h-6" />,         title: 'Marketing Cloud',                desc: 'Design intelligent customer journeys across email, SMS, and advertising — personalised at scale.',                  tags: ['Journey Builder', 'Einstein', 'Segmentation'] },
  { icon: <Database className="w-6 h-6" />,     title: 'Data Cloud',                     desc: 'Unify all your customer data in real time to power smarter agents, better segmentation, and deeper insights.',       tags: ['Real-time Unification', 'Identity Resolution', 'Activation'] },
  { icon: <BarChart3 className="w-6 h-6" />,    title: 'CRM Analytics',                  desc: 'Turn Salesforce data into decisions with custom dashboards, Einstein predictions, and mobile-first reporting.',      tags: ['Dashboards', 'Forecasting', 'Einstein Predictions'] },
  { icon: <Bot className="w-6 h-6" />,          title: 'Custom Agentforce Builds',       desc: 'Need something bespoke? We design fully custom agents for HR, Finance, Operations, and any other function.',         tags: ['Custom Flows', 'API Actions', 'Apex Integrations'] },
]

function SalesforceClouds() {
  return (
    <section className="py-24 bg-cs-bgsub">
      <div className="section-wrap">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="tag mx-auto mb-5">Full Salesforce Suite</div>
          <h2 className="section-title mb-4">Every Cloud. <span className="gradient-text">Powered by AI.</span></h2>
          <p className="section-sub">Agentforce works across the entire Salesforce platform. We connect the dots between clouds to give you a unified, intelligent experience.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {clouds.map(({ icon, title, desc, tags }) => (
            <div key={title} className="glass-card p-6 group hover:-translate-y-1 transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-cs-blue/8 border border-cs-blue/15 flex items-center justify-center text-cs-blue mb-4 group-hover:bg-cs-blue group-hover:text-white transition-all">
                {icon}
              </div>
              <h3 className="text-cs-navy font-bold mb-2">{title}</h3>
              <p className="text-cs-muted text-sm leading-relaxed mb-4">{desc}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="text-[11px] text-cs-muted bg-cs-bgsub border border-cs-blue/10 px-2.5 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="py-24 bg-cs-navy relative overflow-hidden">
      <div className="glow-dot w-[600px] h-[600px] bg-cs-blue/30 top-[-200px] left-[50%] -translate-x-1/2" />
      <div className="section-wrap relative z-10 text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-black text-white mb-5">
          Ready to Deploy Your<br /><span className="gradient-text-gold">First AI Agent?</span>
        </h2>
        <p className="text-blue-200 mb-8">
          Book a free discovery call and we'll design an Agentforce blueprint for your business — no commitment required.
        </p>
        <a href="https://cal.com/cloudsheer-consulting/30min" target="_blank" rel="noopener noreferrer" className="btn-gold text-base px-8 py-4">
          Book Free Discovery Call <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  )
}

export default function Solutions() {
  return (
    <>
      <PageHero />
      <AgentforceHero />
      <TrustLayer />
      <SalesforceClouds />
      <CTA />
    </>
  )
}
