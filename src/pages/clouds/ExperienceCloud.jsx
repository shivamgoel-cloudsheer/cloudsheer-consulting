import {
  ArrowRight, CheckCircle2, Globe, Users, Shield, Zap,
  MessageSquare, BarChart2, Layout, Star, ChevronRight,
  Headphones, Clock, TrendingUp, DollarSign,
} from 'lucide-react'

const CAL_LINK = 'https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true'

const painPoints = [
  { pain: "Customers call or email for things they could do themselves", fix: "A branded self-service portal lets them manage accounts, raise cases, and find answers — 24/7" },
  { pain: "Partners have no visibility into deals, leads, or resources", fix: "A partner community with deal registration, lead distribution, and co-selling tools — all in one place" },
  { pain: "Your support team is buried in low-value, repetitive tickets", fix: "Knowledge base + AI agent deflects 50%+ of tickets before they reach a human" },
  { pain: "You maintain a separate website or intranet disconnected from Salesforce", fix: "Experience Cloud sites are natively connected to your CRM — real-time data, zero sync headaches" },
  { pain: "Customers and partners feel disconnected from your brand", fix: "Fully branded, mobile-responsive portals that feel like your product — not a generic form" },
]

const outcomes = [
  { icon: Headphones, value: '50%+',     label: 'reduction in support ticket volume with self-service portals', color: '#0176D3' },
  { icon: TrendingUp, value: '3x',       label: 'increase in partner portal adoption with Experience Cloud', color: '#10B981' },
  { icon: Clock,      value: '48%',      label: 'faster case resolution with knowledge base and AI agents', color: '#F59E0B' },
  { icon: DollarSign, value: '30%',      label: 'lower onboarding cost for customers and partners', color: '#6366F1' },
  { icon: Users,      value: '10M+',     label: 'external users served on Experience Cloud globally', color: '#06B6D4' },
  { icon: BarChart2,  value: '35%',      label: 'higher customer satisfaction scores with branded portals', color: '#0176D3' },
]

const useCases = [
  {
    dept: 'Customer Self-Service',
    icon: Globe,
    color: '#0176D3',
    headline: "Let customers help themselves — and love it",
    points: [
      'Branded portals where customers view accounts, update details, and track orders',
      'Case creation and tracking without calling or emailing your team',
      'Knowledge base with AI-powered search for instant answers',
      'Embedded Agentforce AI chat for real-time, automated support',
      'Works across desktop, tablet, and mobile — fully responsive',
    ],
  },
  {
    dept: 'Partner Communities',
    icon: Users,
    color: '#10B981',
    headline: "Give partners everything they need to sell",
    points: [
      'Deal registration, lead distribution, and pipeline visibility',
      'MDF claims, co-marketing assets, and campaign collaboration',
      'Partner onboarding with guided learning paths and certifications',
      'Tiered access so each partner level sees the right content and data',
      'Leaderboards, scorecards, and performance dashboards',
    ],
  },
  {
    dept: 'Employee Experience',
    icon: Shield,
    color: '#F59E0B',
    headline: "Replace your legacy intranet — for good",
    points: [
      'Internal hub for HR policies, IT requests, and company resources',
      'Guided onboarding flows for new hires — step by step',
      'Social feeds, discussion forums, and team collaboration',
      'Single sign-on with your identity provider for seamless access',
      'Embedded AI agents for instant answers to common HR and IT questions',
    ],
  },
  {
    dept: 'B2B Client Portals',
    icon: Layout,
    color: '#6366F1',
    headline: "Give every client a white-glove digital experience",
    points: [
      'Project status, deliverables, and milestone tracking in one place',
      'Invoice viewing, payment history, and document sharing',
      'Direct messaging with your team — no more lost email threads',
      'Role-based access so each client only sees their own data',
      'Fully branded to your business — your domain, your look, your feel',
    ],
  },
]

const whyUs = [
  { title: 'Portal Specialists',           desc: "We have built Experience Cloud portals across industries — customer support, partner channels, employee hubs, and B2B client portals. We know what works." },
  { title: 'CRM-Connected by Default',     desc: "Every portal we build is deeply integrated with your Salesforce data — cases, accounts, opportunities, knowledge — no middleware, no sync delays." },
  { title: 'Fast Time to Value',           desc: "Most Experience Cloud portals are live within 6-8 weeks. We design, build, and launch — without months of requirements gathering." },
  { title: 'No Commitment to Start',       desc: "Book a free 30-minute scoping call. We will map your portal requirements, sketch the architecture, and give you a clear plan — completely free." },
]

export default function ExperienceCloudPage() {
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
              <Globe className="w-3.5 h-3.5" /> Experience Cloud
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 animate-fade-up">
              Stop Losing Customers to{' '}
              <span className="gradient-text-gold">Bad Digital Experiences</span>
            </h1>
            <p className="text-xl leading-relaxed mb-10 animate-fade-up-1"
              style={{ color: 'rgba(148,196,255,0.90)' }}>
              Salesforce Experience Cloud lets you build branded self-service portals, partner communities, and client hubs — all connected directly to your CRM. Cloudsheer designs and delivers portals that reduce support load and deepen relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-2">
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
                className="btn-gold text-base px-8 py-4">
                Get a Free Portal Strategy Call <ArrowRight className="w-5 h-5" />
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
              The Problems <span className="gradient-text">Experience Cloud Solves</span>
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
              Tell Us About Your Portal Needs <ArrowRight className="w-4 h-4" />
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
              Portals That Deliver Measurable ROI
            </h2>
            <p className="section-sub-white">
              These are the outcomes businesses achieve when they replace disconnected tools with a properly built Experience Cloud portal.
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
              Get Results Like These For Your Business <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Use Cases / Capabilities ─────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="tag mx-auto mb-5">What You Can Build</div>
            <h2 className="section-title mb-4">
              Portals For Every <span className="gradient-text">Audience and Use Case</span>
            </h2>
            <p className="section-sub">
              Experience Cloud is not a one-size-fits-all tool. Cloudsheer configures it to match exactly what your customers, partners, or employees need.
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
              Why Build Your Portal <span className="gradient-text">With Us?</span>
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
            <Globe className="w-3.5 h-3.5" /> Free Scoping Call
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Ready to Launch Your<br />
            <span className="gradient-text-gold">Customer or Partner Portal?</span>
          </h2>
          <p className="text-lg mb-4" style={{ color: 'rgba(148,196,255,0.85)' }}>
            In 30 minutes we will walk through your requirements, sketch the portal architecture, and give you a clear deployment plan — at no cost, no commitment.
          </p>
          <ul className="flex flex-col sm:flex-row gap-3 justify-center mb-10 text-sm"
            style={{ color: 'rgba(148,196,255,0.80)' }}>
            {["We design a portal your users will actually use", "No sales pitch — just a clear plan", "You leave with architecture and timeline"].map(i => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" style={{ color: '#38BDF8' }} /> {i}
              </li>
            ))}
          </ul>
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
            className="btn-gold text-lg px-10 py-5 animate-bounce-x">
            Book My Free Portal Strategy Call <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  )
}
