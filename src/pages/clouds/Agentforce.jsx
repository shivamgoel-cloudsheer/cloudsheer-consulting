import { Link } from 'react-router-dom'
import {
  ArrowRight, CheckCircle2, Zap, TrendingUp, Clock, DollarSign,
  Headphones, Users, BarChart2, Shield, MessageSquare, Star, ChevronRight,
} from 'lucide-react'

const CAL_LINK = 'https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true'

const painPoints = [
  { pain: 'Your support team is drowning in repetitive tickets', fix: 'An AI agent resolves them instantly — 24/7, no queue, no wait' },
  { pain: 'Leads go cold because reps take hours to respond', fix: 'Agents respond in seconds, qualify, and book the meeting automatically' },
  { pain: 'Your team wastes hours on manual data entry and admin', fix: 'Agents update records, route approvals, and generate reports hands-free' },
  { pain: 'Customers get stuck outside business hours', fix: 'Agents handle queries at 2am as well as 2pm — same quality, every time' },
  { pain: "You're paying for headcount to do work AI can handle", fix: 'Redeploy your team to high-value work — agents handle the rest' },
]

const outcomes = [
  { icon: Headphones, value: '84%',    label: 'of support cases resolved without a human agent', color: '#0176D3' },
  { icon: Clock,      value: '8.9→1.4 min', label: 'case resolution time (Reddit real deployment)', color: '#10B981' },
  { icon: TrendingUp, value: '34%',    label: 'increase in team productivity from AI agents', color: '#F59E0B' },
  { icon: DollarSign, value: '$100M+', label: 'in annualised cost savings reported by Agentforce customers', color: '#6366F1' },
  { icon: MessageSquare, value: '60%', label: 'more WhatsApp inquiries resolved without human help', color: '#06B6D4' },
  { icon: Users,      value: '18,000+',label: 'businesses already running Agentforce globally', color: '#0176D3' },
]

const useCases = [
  {
    dept: 'Customer Support',
    icon: Headphones,
    color: '#0176D3',
    headline: 'Never let a customer wait again',
    points: [
      'Instantly resolves FAQs, order issues, and account queries',
      'Searches your knowledge base and case history in real time',
      'Processes refunds, updates records, closes tickets — end to end',
      'Hands off to a human with full context when needed',
      'Works across chat, email, WhatsApp, and web portals',
    ],
  },
  {
    dept: 'Sales',
    icon: TrendingUp,
    color: '#10B981',
    headline: 'Your best SDR — that never sleeps',
    points: [
      'Responds to every inbound lead within seconds, around the clock',
      'Qualifies prospects with smart, conversational questions',
      'Books discovery calls directly into your rep\'s calendar',
      'Personalises outreach sequences based on CRM data',
      'Updates leads, contacts, and opportunities automatically',
    ],
  },
  {
    dept: 'Operations',
    icon: BarChart2,
    color: '#F59E0B',
    headline: 'Cut admin. Multiply output.',
    points: [
      'Automates approval routing, notifications, and escalations',
      'Generates and distributes reports on a schedule',
      'Keeps your CRM data clean — no manual hygiene required',
      'Monitors SLAs and alerts the right people before breaches',
      'Syncs data across Salesforce and your connected systems',
    ],
  },
  {
    dept: 'HR & Internal',
    icon: Users,
    color: '#6366F1',
    headline: 'Give your people better support',
    points: [
      'Answers HR policy, benefits, and IT questions instantly',
      'Guides new hires through onboarding step by step',
      'Routes internal requests to the right team automatically',
      'Reduces HR and IT helpdesk ticket volume by 50%+',
      'Works inside Slack, Teams, or your intranet portal',
    ],
  },
]

const whyUs = [
  { title: 'Agentforce-Only Focus',    desc: "We don't do everything. We do Agentforce. That means deeper expertise, faster deployment, and better outcomes than any generalist partner." },
  { title: 'We\'ve Done This Before',  desc: 'Our team has deployed Agentforce across sales, service, ops, and HR — across multiple industries. We know what works and what to avoid.' },
  { title: 'Fast Time to Value',       desc: 'Most Agentforce pilots are live within 4–6 weeks. We move fast, test in sandbox, and get you to production without months of meetings.' },
  { title: 'No Commitment to Start',   desc: 'Book a free 30-minute discovery call. We\'ll map your use case, estimate ROI, and give you a deployment plan — completely free.' },
]

export default function AgentforcePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#032D60 0%,#0A3F80 55%,#0176D3 100%)' }}>
        <div className="absolute inset-0 bg-grid-dark opacity-40" />
        <div className="glow-dot w-[500px] h-[500px] top-[-150px] right-[-80px]"
          style={{ backgroundColor: '#38BDF8', opacity: 0.15 }} />

        <div className="section-wrap relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="tag-white mx-auto mb-6 inline-flex">
              <Zap className="w-3.5 h-3.5" /> Agentforce by Salesforce
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 animate-fade-up">
              What if your business ran{' '}
              <span className="gradient-text-gold">24/7 without adding headcount?</span>
            </h1>
            <p className="text-xl leading-relaxed mb-10 animate-fade-up-1"
              style={{ color: 'rgba(148,196,255,0.90)' }}>
              Agentforce deploys AI agents that handle your support, sales, and operations work autonomously — so your team focuses on growth, not admin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-2">
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
                className="btn-gold text-base px-8 py-4">
                See What Agentforce Can Do For You <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm mt-5 animate-fade-up-3"
              style={{ color: 'rgba(148,196,255,0.60)' }}>
              Free 30-min discovery call · No commitment · We come with a plan
            </p>
          </div>
        </div>
      </section>

      {/* ── Pain Points ──────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="tag mx-auto mb-5">Sound Familiar?</div>
            <h2 className="section-title mb-4">
              The Problems <span className="gradient-text">Agentforce Fixes</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {painPoints.map(({ pain, fix }) => (
              <div key={pain} className="glass-card p-5 grid sm:grid-cols-2 gap-4 items-center group hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: 'rgba(239,68,68,0.10)', color: '#EF4444' }}>
                    <span className="text-xs font-bold">✕</span>
                  </div>
                  <p className="text-sm font-medium" style={{ color: '#475569' }}>{pain}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#0176D3' }} />
                  <p className="text-sm font-semibold" style={{ color: '#032D60' }}>{fix}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
              className="btn-primary inline-flex">
              Let's Talk About Your Specific Problem <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Proof / Results ──────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#032D60,#0A3F80)' }}>
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        <div className="section-wrap relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="tag-white mx-auto mb-5">Real Results</div>
            <h2 className="section-title-white mb-4">
              The Numbers Don't Lie
            </h2>
            <p className="section-sub-white">
              These are not projections. These are results from businesses already running Agentforce today.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {outcomes.map(({ icon: Icon, value, label, color }) => (
              <div key={label} className="dark-card p-6 text-center group hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${color}20`, color }}>
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-3xl font-black mb-2" style={{ color }}>{value}</p>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(148,196,255,0.80)' }}>{label}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
              className="btn-gold text-base px-8 py-4">
              Get Results Like These in Your Business <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Use Cases by Department ──────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="tag mx-auto mb-5">What It Does For You</div>
            <h2 className="section-title mb-4">
              AI Agents For Every <span className="gradient-text">Part of Your Business</span>
            </h2>
            <p className="section-sub">
              Agentforce does not replace your team — it removes the repetitive work so they can focus on the things that actually grow your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map(({ dept, icon: Icon, color, headline, points }) => (
              <div key={dept} className="glass-card p-7 group hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${color}15`, color }}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-0.5"
                      style={{ color }}>
                      {dept}
                    </p>
                    <h3 className="font-black text-lg leading-tight" style={{ color: '#032D60' }}>{headline}</h3>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {points.map(p => (
                    <li key={p} className="flex items-start gap-2.5 text-sm" style={{ color: '#475569' }}>
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color }} />
                      {p}
                    </li>
                  ))}
                </ul>
                <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold mt-5 transition-all"
                  style={{ color }}
                  onMouseEnter={e => e.currentTarget.style.gap = '10px'}
                  onMouseLeave={e => e.currentTarget.style.gap = '6px'}>
                  See how this works for you <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Cloudsheer ───────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: '#EFF6FF' }}>
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="tag mx-auto mb-5">
              <Star className="w-3.5 h-3.5" /> Why Cloudsheer
            </div>
            <h2 className="section-title mb-4">
              Why Work With Us <span className="gradient-text">Over Anyone Else?</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {whyUs.map(({ title, desc }) => (
              <div key={title} className="glass-card p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#0176D3' }} />
                  <div>
                    <h4 className="font-bold mb-1.5" style={{ color: '#032D60' }}>{title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#032D60 0%,#0A3F80 100%)' }}>
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        <div className="glow-dot w-[500px] h-[500px] top-[-100px] left-[50%] -translate-x-1/2"
          style={{ backgroundColor: '#0176D3', opacity: 0.25 }} />
        <div className="section-wrap relative z-10 text-center max-w-2xl mx-auto">
          <div className="tag-white mx-auto mb-6 inline-flex">
            <Zap className="w-3.5 h-3.5" /> Free Discovery Call
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Find Out Exactly What<br />
            <span className="gradient-text-gold">Agentforce Can Do For You</span>
          </h2>
          <p className="text-lg mb-4" style={{ color: 'rgba(148,196,255,0.85)' }}>
            In 30 minutes we will walk through your business, identify the highest-impact use case, and give you a clear picture of what an AI agent could deliver — at no cost, no commitment.
          </p>
          <ul className="flex flex-col sm:flex-row gap-3 justify-center mb-10 text-sm"
            style={{ color: 'rgba(148,196,255,0.80)' }}>
            {['We come prepared with a plan', 'No sales pitch — just value', 'You leave with actionable insights'].map(i => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" style={{ color: '#38BDF8' }} /> {i}
              </li>
            ))}
          </ul>
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
            className="btn-gold text-lg px-10 py-5 animate-bounce-x">
            Book My Free Discovery Call <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  )
}
