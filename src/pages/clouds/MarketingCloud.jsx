import {
  ArrowRight, CheckCircle2, Zap, TrendingUp, Clock, DollarSign,
  Mail, Users, BarChart2, Target, Star, ChevronRight, Megaphone,
  RefreshCw, Globe, MousePointerClick,
} from 'lucide-react'

const CAL_LINK = 'https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true'

const painPoints = [
  { pain: "Your campaigns are batch-and-blast with no personalisation", fix: "Every message is dynamically tailored to each customer using real-time CRM data and AI" },
  { pain: "Marketing and Sales are working from different data", fix: "One connected platform syncs every touchpoint so both teams see the full picture" },
  { pain: "You have no idea which campaigns actually drive revenue", fix: "Full attribution reporting ties every email, ad, and journey to pipeline and closed deals" },
  { pain: "Leads go cold because nurture sequences are manual or broken", fix: "Automated multi-channel journeys engage prospects at exactly the right moment" },
  { pain: "Your email deliverability and engagement rates are declining", fix: "Einstein AI optimises send times, subject lines, and content for maximum engagement" },
]

const outcomes = [
  { icon: TrendingUp,        value: '28%',   label: 'increase in marketing ROI reported by Marketing Cloud customers', color: '#0176D3' },
  { icon: MousePointerClick, value: '27%',   label: 'higher email click-through rates with Einstein Send Time Optimisation', color: '#10B981' },
  { icon: Mail,              value: '3.8×',  label: 'higher ROI from email marketing vs. any other digital channel', color: '#F59E0B' },
  { icon: DollarSign,        value: '25%',   label: 'increase in customer lifetime value through personalised journeys', color: '#6366F1' },
  { icon: Clock,             value: '40%',   label: 'reduction in customer churn with automated re-engagement campaigns', color: '#06B6D4' },
  { icon: Users,             value: '67%',   label: 'lift in conversion rates with data-driven audience segmentation', color: '#0176D3' },
]

const useCases = [
  {
    dept: 'Email & Journey Automation',
    icon: RefreshCw,
    color: '#0176D3',
    headline: 'Journeys that convert on autopilot',
    points: [
      'Multi-step, multi-channel journeys triggered by real-time customer behaviour',
      'Welcome series, nurture tracks, win-back, and post-purchase flows — all automated',
      'Dynamic content blocks that personalise every email based on CRM data',
      'A/B testing on subject lines, content, and send times at scale',
      'Einstein engagement scoring to prioritise your highest-value contacts',
    ],
  },
  {
    dept: 'Audience & Data',
    icon: Target,
    color: '#10B981',
    headline: 'Right message. Right person. Right time.',
    points: [
      'Unified customer profiles built from CRM, web, mobile, and purchase data',
      'Drag-and-drop segmentation using behavioural, demographic, and transactional filters',
      'Real-time audience activation across email, SMS, ads, and web',
      'Sync CRM segments directly to Google, Facebook, and LinkedIn ad platforms',
      'Data Cloud integration for a true single source of truth',
    ],
  },
  {
    dept: 'Analytics & Attribution',
    icon: BarChart2,
    color: '#F59E0B',
    headline: 'Prove exactly what marketing is worth',
    points: [
      'Multi-touch attribution connects campaigns to pipeline and revenue',
      'Real-time dashboards for email performance, journey health, and ROI',
      'Einstein AI predicts which contacts are most likely to engage or churn',
      'Campaign comparison reporting to double down on what works',
      'Connects marketing spend to Sales Cloud opportunities end-to-end',
    ],
  },
  {
    dept: 'B2B Marketing (Account Engagement)',
    icon: Users,
    color: '#6366F1',
    headline: 'Turn leads into pipeline — systematically',
    points: [
      'Lead scoring and grading that surfaces sales-ready prospects automatically',
      'Automated nurture programs that move MQLs to SQLs without manual effort',
      'Full CRM sync so sales sees every email open, click, and page visit',
      'Landing pages, forms, and gated content — built and tracked in one place',
      'Engagement history feeds directly into Salesforce reports and dashboards',
    ],
  },
]

const whyUs = [
  { title: 'Marketing Cloud Specialists',   desc: "We focus on Marketing Cloud and Account Engagement. That means deeper expertise, faster delivery, and better results than any generalist SI." },
  { title: "We Have Done This Before",      desc: "Our team has deployed Marketing Cloud for B2B lead nurture, B2C lifecycle journeys, re-engagement campaigns, and paid media sync — across multiple industries." },
  { title: 'Fast Time to Value',            desc: "Most Marketing Cloud implementations are live within 6-8 weeks. We move fast, build iteratively, and get you sending smarter campaigns quickly." },
  { title: 'No Commitment to Start',        desc: "Book a free 30-minute scoping call. We will assess your current marketing stack and give you a personalisation roadmap — completely free." },
]

export default function MarketingCloudPage() {
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
              <Megaphone className="w-3.5 h-3.5" /> Salesforce Marketing Cloud
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 animate-fade-up">
              Stop Guessing. Start Sending Campaigns That{' '}
              <span className="gradient-text-gold">Actually Convert.</span>
            </h1>
            <p className="text-xl leading-relaxed mb-10 animate-fade-up-1"
              style={{ color: 'rgba(148,196,255,0.90)' }}>
              Marketing Cloud lets you personalise every email, journey, and ad using real CRM data and Einstein AI — so every message drives revenue, not noise. Cloudsheer builds the engine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-2">
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
                className="btn-gold text-base px-8 py-4">
                Get a Free Marketing Cloud Roadmap <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm mt-5 animate-fade-up-3"
              style={{ color: 'rgba(148,196,255,0.60)' }}>
              Free 30-min scoping call · No commitment · Personalisation roadmap included
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
              The Problems <span className="gradient-text">Marketing Cloud Solves</span>
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
              Tell Us About Your Marketing Challenges <ArrowRight className="w-4 h-4" />
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
              Marketing Cloud Delivers Real ROI
            </h2>
            <p className="section-sub-white">
              These are results from businesses running Salesforce Marketing Cloud — not projections.
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
            <div className="tag mx-auto mb-5">What It Does For You</div>
            <h2 className="section-title mb-4">
              Everything You Need to <span className="gradient-text">Market Smarter</span>
            </h2>
            <p className="section-sub">
              Marketing Cloud connects your data, automates your journeys, and proves what works — across every channel your customers use.
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
              Why Work With Us <span className="gradient-text">For Marketing Cloud?</span>
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
            <Zap className="w-3.5 h-3.5" /> Free Scoping Call
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Ready to Build Marketing That<br />
            <span className="gradient-text-gold">Actually Drives Revenue?</span>
          </h2>
          <p className="text-lg mb-4" style={{ color: 'rgba(148,196,255,0.85)' }}>
            In 30 minutes we will review your current marketing stack, identify your biggest personalisation opportunities, and map out a Marketing Cloud roadmap — at no cost, no commitment.
          </p>
          <ul className="flex flex-col sm:flex-row gap-3 justify-center mb-10 text-sm"
            style={{ color: 'rgba(148,196,255,0.80)' }}>
            {['Personalisation roadmap included', 'No sales pitch — just value', 'You leave with a clear plan'].map(i => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" style={{ color: '#38BDF8' }} /> {i}
              </li>
            ))}
          </ul>
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
            className="btn-gold text-lg px-10 py-5 animate-bounce-x">
            Book My Free Marketing Cloud Call <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  )
}
