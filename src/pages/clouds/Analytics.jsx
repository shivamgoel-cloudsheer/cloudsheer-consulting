import {
  ArrowRight, CheckCircle2, Zap, TrendingUp, Clock, DollarSign,
  BarChart2, PieChart, Eye, Database, Target, Star, ChevronRight,
  LineChart, Layers, RefreshCw,
} from 'lucide-react'

const CAL_LINK = 'https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true'

const painPoints = [
  { pain: "Your team spends hours building reports in spreadsheets every week", fix: "Automated dashboards refresh in real time — no manual work, no stale data" },
  { pain: "Executives make gut decisions because they cannot access insights fast enough", fix: "AI-powered analytics surface the right insight at the right time, inside Salesforce" },
  { pain: "Your data lives in silos across CRM, ERP, and cloud databases", fix: "Tableau and Data Cloud unify every source into a single pane of glass" },
  { pain: "Forecast accuracy is low and pipeline risk is invisible until it is too late", fix: "Einstein predictions flag at-risk deals and score leads before your team even asks" },
  { pain: "You bought analytics tools but adoption is below 20%", fix: "We embed dashboards where your team already works — inside Salesforce records and apps" },
]

const outcomes = [
  { icon: BarChart2,   value: '65%',     label: 'faster reporting cycles with CRM Analytics automation', color: '#0176D3' },
  { icon: TrendingUp,  value: '28%',     label: 'improvement in forecast accuracy with Einstein predictions', color: '#10B981' },
  { icon: Clock,       value: '40%',     label: 'reduction in time spent on manual reporting and data prep', color: '#F59E0B' },
  { icon: DollarSign,  value: '3x',      label: 'more data-driven decisions per quarter across business units', color: '#6366F1' },
  { icon: Eye,         value: '10.5M+',  label: 'Tableau users worldwide trust it for visual analytics', color: '#06B6D4' },
  { icon: Database,    value: '26%',     label: 'average revenue increase reported by analytics-driven organisations', color: '#0176D3' },
]

const useCases = [
  {
    dept: 'Sales & Revenue Operations',
    icon: TrendingUp,
    color: '#0176D3',
    headline: 'See your pipeline like never before',
    points: [
      'Executive pipeline dashboards with stage velocity and conversion rates',
      'Einstein lead scoring and opportunity win-probability predictions',
      'Rep performance scorecards with quota attainment tracking',
      'Deal risk signals that flag stalling opportunities before they slip',
      'Multi-touch attribution connecting marketing spend to closed-won revenue',
    ],
  },
  {
    dept: 'Service & Customer Success',
    icon: Layers,
    color: '#10B981',
    headline: 'Resolve faster. Retain more.',
    points: [
      'Real-time service ops dashboards with queue health and SLA status',
      'CSAT and NPS trend analysis with drill-down by agent, region, or product',
      'Einstein churn prediction models that flag at-risk accounts 45 days out',
      'Agent utilisation and case resolution time benchmarking',
      'Customer health scores combining support, usage, and billing data',
    ],
  },
  {
    dept: 'Executive & Finance',
    icon: PieChart,
    color: '#F59E0B',
    headline: 'One source of truth for the C-suite',
    points: [
      'Tableau workbooks pulling from Salesforce, NetSuite, Snowflake, and more',
      'Exec scorecards with KPIs, trends, and variance analysis in one view',
      'Cohort analysis and revenue retention tracking across business lines',
      'Automated board-ready reports delivered on schedule — no analyst needed',
      'Role-based access so every leader sees exactly what they need',
    ],
  },
  {
    dept: 'Marketing & Growth',
    icon: Target,
    color: '#6366F1',
    headline: 'Prove ROI on every campaign dollar',
    points: [
      'Multi-touch attribution dashboards connecting campaigns to pipeline',
      'Marketing Cloud engagement analytics with conversion funnel visibility',
      'Audience segmentation insights powered by Data Cloud unification',
      'Campaign performance comparison with cost-per-lead and cost-per-opportunity',
      'Predictive analytics for next-best-action and content recommendations',
    ],
  },
]

const whyUs = [
  { title: 'Analytics-First Expertise',     desc: "We specialise in Salesforce CRM Analytics and Tableau. That means deeper knowledge, faster builds, and dashboards that actually get used — not shelfware." },
  { title: "Decision-Driven Design",        desc: "We start from the decisions your team needs to make, not from the data you happen to have. Every dashboard is built to drive action, not just display charts." },
  { title: 'Fast Time to Insight',          desc: "Most analytics engagements go live within 4-6 weeks. We move fast from discovery to production — no months of data modelling before you see value." },
  { title: 'Free Discovery Call',           desc: "Book a 30-minute scoping call. We will map your top 5 insight gaps and design a dashboard blueprint to close them — completely free, no commitment." },
]

export default function AnalyticsPage() {
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
              <BarChart2 className="w-3.5 h-3.5" /> CRM Analytics & Tableau
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 animate-fade-up">
              Stop Guessing.{' '}
              <span className="gradient-text-gold">Start Seeing What Your Data Already Knows.</span>
            </h1>
            <p className="text-xl leading-relaxed mb-10 animate-fade-up-1"
              style={{ color: 'rgba(148,196,255,0.90)' }}>
              Salesforce CRM Analytics and Tableau turn your raw data into real-time dashboards, AI predictions, and executive insights — so every decision is backed by evidence, not instinct.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-2">
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
                className="btn-gold text-base px-8 py-4">
                Get a Free Analytics Blueprint <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm mt-5 animate-fade-up-3"
              style={{ color: 'rgba(148,196,255,0.60)' }}>
              Free 30-min scoping call · No commitment · We map your top insight gaps
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
              The Problems <span className="gradient-text">Analytics Solves</span>
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
              Let Us Map Your Insight Gaps <ArrowRight className="w-4 h-4" />
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
              Analytics That Move the Needle
            </h2>
            <p className="section-sub-white">
              These are the results organisations achieve when they move from spreadsheets to Salesforce Analytics and Tableau.
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
              Get These Results For Your Business <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Use Cases / Capabilities ─────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="tag mx-auto mb-5">What We Build</div>
            <h2 className="section-title mb-4">
              Analytics For Every <span className="gradient-text">Part of Your Business</span>
            </h2>
            <p className="section-sub">
              From pipeline dashboards to executive scorecards — we build analytics that drive decisions across sales, service, finance, and marketing.
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
                  Explore this for your team <ChevronRight className="w-4 h-4" />
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
              Why Work With Us <span className="gradient-text">For Analytics?</span>
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
            <Zap className="w-3.5 h-3.5" /> Free Analytics Scoping Call
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Ready to Make Your Data<br />
            <span className="gradient-text-gold">Your Competitive Advantage?</span>
          </h2>
          <p className="text-lg mb-4" style={{ color: 'rgba(148,196,255,0.85)' }}>
            In 30 minutes we will map your top insight gaps, identify the highest-impact dashboards, and give you a clear analytics blueprint — at no cost, no commitment.
          </p>
          <ul className="flex flex-col sm:flex-row gap-3 justify-center mb-10 text-sm"
            style={{ color: 'rgba(148,196,255,0.80)' }}>
            {['We map your top 5 insight gaps', 'You get a dashboard blueprint', 'No sales pitch — just value'].map(i => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" style={{ color: '#38BDF8' }} /> {i}
              </li>
            ))}
          </ul>
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
            className="btn-gold text-lg px-10 py-5 animate-bounce-x">
            Book My Free Analytics Call <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  )
}
