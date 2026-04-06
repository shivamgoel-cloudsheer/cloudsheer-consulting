import {
  ArrowRight, CheckCircle2, Headphones, MessageSquare, BookOpen, Phone,
  Zap, BarChart2, Users, Shield, Clock, DollarSign, TrendingUp, Star,
  ChevronRight, Globe,
} from 'lucide-react'

const CAL_LINK = 'https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true'

const painPoints = [
  { pain: "Your agents are juggling 5 different tools to handle one customer issue", fix: "One unified console with every channel, record, and AI suggestion in a single pane" },
  { pain: "Customers wait hours for a response — then get bounced between departments", fix: "Omni-channel routing sends every case to the right agent instantly, with full context" },
  { pain: "Repetitive Tier-1 tickets eat up your most expensive support resources", fix: "AI-powered agents deflect up to 78% of routine cases — 24/7, no queue, no wait" },
  { pain: "You have no visibility into SLA breaches until a customer escalates", fix: "Real-time dashboards track every milestone, flag risks, and trigger escalations automatically" },
  { pain: "Your knowledge base exists but nobody can find the right article", fix: "Einstein surfaces the best article to agents and customers in real time — cutting handle time by 30%" },
]

const outcomes = [
  { icon: Headphones, value: '78%',       label: 'average case deflection with AI-powered self-service', color: '#0176D3' },
  { icon: Clock,      value: '35%',       label: 'faster case resolution with unified agent workspace', color: '#10B981' },
  { icon: DollarSign, value: '40%',       label: 'reduction in cost-per-case after Service Cloud deployment', color: '#F59E0B' },
  { icon: TrendingUp, value: '4.8 / 5',   label: 'average CSAT score maintained with AI + human handoff', color: '#6366F1' },
  { icon: Users,      value: '150K+',     label: 'companies run their support operations on Service Cloud', color: '#06B6D4' },
  { icon: Globe,      value: '#1',        label: 'customer service platform worldwide for 10 consecutive years', color: '#0176D3' },
]

const useCases = [
  {
    dept: 'Omni-Channel Support',
    icon: MessageSquare,
    color: '#0176D3',
    headline: 'Every channel. One workspace. Zero context lost.',
    points: [
      'Unify email, chat, phone, WhatsApp, social, and SMS in a single console',
      'Intelligent routing matches cases to the best-skilled available agent',
      'Full customer history, past cases, and sentiment visible before the agent responds',
      'Seamless handoff between AI agent and human — with complete conversation context',
      'Real-time supervisor monitoring with queue health and agent availability',
    ],
  },
  {
    dept: 'AI-Powered Self-Service',
    icon: Zap,
    color: '#10B981',
    headline: 'Resolve cases before they reach your team.',
    points: [
      'Agentforce Service Agent handles Tier-1 and Tier-2 queries autonomously',
      'AI chatbots search your knowledge base and case history in real time',
      'Self-service portals let customers track orders, update accounts, and find answers',
      'Smart article recommendations reduce average handle time by 30%',
      'Automatic escalation to a human agent when AI confidence drops',
    ],
  },
  {
    dept: 'Field Service Management',
    icon: Phone,
    color: '#F59E0B',
    headline: 'Dispatch the right technician. First time. Every time.',
    points: [
      'Schedule and dispatch mobile workers with AI-optimised routing',
      'Real-time GPS tracking and job status updates for customers',
      'Mobile app gives technicians access to case data, parts inventory, and knowledge',
      'Automated work order creation from cases with pre-populated details',
      'First-time fix rates improve by up to 25% with AI-assisted diagnostics',
    ],
  },
  {
    dept: 'Service Analytics & SLAs',
    icon: BarChart2,
    color: '#6366F1',
    headline: 'See everything. Fix problems before customers notice.',
    points: [
      'Real-time dashboards for CSAT, SLA compliance, queue health, and agent performance',
      'Entitlement and milestone tracking with automatic breach alerts',
      'Einstein AI flags at-risk cases and recommends next-best actions',
      'Custom reports for cost-per-case, first-contact resolution, and channel efficiency',
      'Supervisor console with live monitoring, whisper coaching, and barge-in',
    ],
  },
]

const whyUs = [
  { title: 'Service Cloud Specialists',     desc: "We have deep expertise in Service Cloud implementations — from simple case management to complex omni-channel operations with AI agents. We know this product inside out." },
  { title: "We Build for Your SLAs",        desc: "Every implementation is designed around your specific support tiers, escalation rules, and SLA requirements. No generic templates — just a system that matches how your team actually works." },
  { title: 'Fast Time to Value',            desc: 'Most Service Cloud deployments are live within 6-8 weeks. We move fast, configure in sandbox, test with real scenarios, and get you to production without months of workshops.' },
  { title: 'No Commitment to Start',        desc: "Book a free 30-minute scoping call. We will review your current support setup, identify the biggest quick wins, and give you a deployment plan — completely free." },
]

export default function ServiceCloudPage() {
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
              <Headphones className="w-3.5 h-3.5" /> Salesforce Service Cloud
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 animate-fade-up">
              Stop Losing Customers to{' '}
              <span className="gradient-text-gold">Slow, Broken Support</span>
            </h1>
            <p className="text-xl leading-relaxed mb-10 animate-fade-up-1"
              style={{ color: 'rgba(148,196,255,0.90)' }}>
              Service Cloud unifies every support channel into one AI-powered workspace — so your team resolves cases faster, deflects routine tickets automatically, and delivers the experience your customers actually expect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-2">
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
                className="btn-gold text-base px-8 py-4">
                Get a Free Service Cloud Assessment <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm mt-5 animate-fade-up-3"
              style={{ color: 'rgba(148,196,255,0.60)' }}>
              Free 30-min scoping call · No commitment · We come with a plan
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
              The Support Problems <span className="gradient-text">Service Cloud Fixes</span>
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
              Tell Us About Your Support Challenges <ArrowRight className="w-4 h-4" />
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
              Why the Best Support Teams Run on Service Cloud
            </h2>
            <p className="section-sub-white">
              These are real metrics from businesses that replaced fragmented support tools with a unified Service Cloud operation.
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
              Get Results Like These For Your Team <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Use Cases / Capabilities ─────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="tag mx-auto mb-5">What You Get</div>
            <h2 className="section-title mb-4">
              A Complete Support Operation —{' '}
              <span className="gradient-text">Built For Your Business</span>
            </h2>
            <p className="section-sub">
              Service Cloud is not just a ticketing system. It is the platform that powers world-class customer support — from first contact to resolution.
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
              Why Work With Us <span className="gradient-text">For Service Cloud?</span>
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
            <Headphones className="w-3.5 h-3.5" /> Free Scoping Call
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Ready to Transform Your<br />
            <span className="gradient-text-gold">Customer Support Operation?</span>
          </h2>
          <p className="text-lg mb-4" style={{ color: 'rgba(148,196,255,0.85)' }}>
            In 30 minutes we will review your current support setup, identify the highest-impact quick wins, and give you a clear deployment plan for Service Cloud — at no cost, no commitment.
          </p>
          <ul className="flex flex-col sm:flex-row gap-3 justify-center mb-10 text-sm"
            style={{ color: 'rgba(148,196,255,0.80)' }}>
            {['We audit your current setup first', 'No sales pitch — just a plan', 'You leave with clear next steps'].map(i => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" style={{ color: '#38BDF8' }} /> {i}
              </li>
            ))}
          </ul>
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
            className="btn-gold text-lg px-10 py-5 animate-bounce-x">
            Book My Free Service Cloud Assessment <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  )
}
