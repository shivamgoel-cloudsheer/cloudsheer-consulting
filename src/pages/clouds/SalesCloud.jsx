import { Link } from 'react-router-dom'
import {
  ArrowRight, CheckCircle2, TrendingUp, Clock, DollarSign, Zap,
  Target, Users, BarChart2, Star, ChevronRight, Phone, Mail, Calendar,
} from 'lucide-react'

const CAL_LINK = 'https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true'

const painPoints = [
  { pain: 'Reps spend more time on admin than actually selling', fix: 'Einstein AI logs calls, emails, and meetings automatically — reps just sell' },
  { pain: 'You have no idea which deals will actually close this quarter', fix: 'AI forecasting tells you exactly which deals are at risk and which will land' },
  { pain: 'Leads fall through the cracks because no one follows up in time', fix: 'Automated sequences ensure every lead gets followed up — every single time' },
  { pain: 'Your pipeline is a mess of stale deals and wrong close dates', fix: 'Real-time pipeline health signals flag problem deals before it is too late' },
  { pain: 'New reps take months to ramp up and start closing', fix: 'AI-guided selling and playbooks get new reps closing in weeks, not months' },
  { pain: 'Quoting takes days and deals stall waiting for pricing', fix: 'CPQ generates accurate, professional quotes in minutes — not days' },
]

const outcomes = [
  { icon: TrendingUp,  value: '29%',    label: 'more revenue on average with Salesforce Sales Cloud', color: '#0176D3' },
  { icon: Clock,       value: '3×',     label: 'faster lead response time with AI-powered automation', color: '#10B981' },
  { icon: Target,      value: '44%',    label: 'higher win rate with AI-guided opportunity management', color: '#F59E0B' },
  { icon: Users,       value: '34%',    label: 'increase in sales rep productivity', color: '#6366F1' },
  { icon: DollarSign,  value: '32%',    label: 'faster deal cycles with automated follow-up sequences', color: '#06B6D4' },
  { icon: BarChart2,   value: '28%',    label: 'improvement in forecast accuracy with Einstein AI', color: '#0176D3' },
]

const capabilities = [
  {
    area: 'Pipeline & Opportunity Management',
    icon: Target,
    color: '#0176D3',
    headline: 'See every deal clearly — and close more of them',
    points: [
      'Custom pipeline stages built around how your team actually sells',
      'AI opportunity scoring so reps know exactly where to focus',
      'Deal health signals that flag at-risk opportunities before they go cold',
      'Complete activity history on every account and contact',
      'Automated reminders and task creation so nothing gets missed',
    ],
  },
  {
    area: 'Sales Automation & AI',
    icon: Zap,
    color: '#10B981',
    headline: 'Let AI handle the admin — reps do the selling',
    points: [
      'Einstein Activity Capture auto-logs every email, call, and meeting',
      'AI-powered lead scoring identifies which leads are ready to buy',
      'Automated outreach sequences that run on their own',
      'Agentforce SDR agent qualifies leads and books meetings 24/7',
      'AI-generated call summaries and next-step recommendations',
    ],
  },
  {
    area: 'Forecasting & Analytics',
    icon: BarChart2,
    color: '#F59E0B',
    headline: 'Know your number before the quarter ends',
    points: [
      'Einstein AI forecasting with deal-by-deal confidence scoring',
      'Real-time pipeline velocity and conversion rate dashboards',
      'Rep performance tracking and quota attainment visibility',
      'Revenue Intelligence that spots risk and opportunity across the team',
      'Custom reports built around the metrics your leadership actually needs',
    ],
  },
  {
    area: 'CPQ & Quoting',
    icon: DollarSign,
    color: '#6366F1',
    headline: 'Stop losing deals to slow quotes',
    points: [
      'Generate accurate, branded quotes in minutes — not days',
      'Guided selling ensures reps always propose the right products',
      'Automated pricing rules, discounting controls, and approval flows',
      'One-click quote-to-contract with e-signature built in',
      'Works with complex product catalogues, bundles, and subscriptions',
    ],
  },
]

const process = [
  { num: '01', title: 'Sales Process Discovery', desc: 'We document how your team actually sells — stages, handoff rules, qualification criteria, and reporting needs — before touching a single Salesforce setting.' },
  { num: '02', title: 'CRM Build & Configuration', desc: 'Custom objects, fields, layouts, validation rules, and permission sets configured to match your exact sales motion — not a generic template.' },
  { num: '03', title: 'Data Migration & Integrations', desc: 'We migrate your existing CRM data cleanly, connect your email, calendar, marketing tools, and ERP, and verify everything is syncing correctly.' },
  { num: '04', title: 'Train, Adopt & Go Live', desc: 'Hands-on training for reps and managers, adoption tracking, and a hypercare period to make sure your team is confident and productive from day one.' },
]

const whyUs = [
  { title: 'We Build Around Your Sales Process', desc: 'We do not drop a standard Sales Cloud template on you. We spend time understanding how your team sells — then build Salesforce around that.' },
  { title: 'Agentforce-Native from Day One',      desc: 'Every Sales Cloud we implement is AI-ready. We wire in Agentforce so your reps get AI assistance from the moment they go live.' },
  { title: 'Clean Data from the Start',           desc: 'Bad data kills CRM adoption. We migrate your existing data carefully, deduplicate, and enrich it so your team trusts what they see.' },
  { title: 'We Stay Until You Are Winning',       desc: 'We do not disappear after go-live. Our hypercare period and managed support options mean we are there until adoption is strong and deals are moving.' },
]

export default function SalesCloudPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#032D60 0%,#0A3F80 55%,#0176D3 100%)' }}>
        <div className="absolute inset-0 bg-grid-dark opacity-40" />
        <div className="glow-dot w-[500px] h-[500px] top-[-150px] right-[-80px]"
          style={{ backgroundColor: '#38BDF8', opacity: 0.14 }} />

        <div className="section-wrap relative z-10 max-w-3xl mx-auto text-center">
          <div className="tag-white mx-auto mb-6 inline-flex">
            <TrendingUp className="w-3.5 h-3.5" /> Sales Cloud by Salesforce
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 animate-fade-up">
            Close More Deals.<br />
            <span className="gradient-text-gold">Grow Revenue Faster.</span>
          </h1>
          <p className="text-xl leading-relaxed mb-10 animate-fade-up-1"
            style={{ color: 'rgba(148,196,255,0.90)' }}>
            Salesforce Sales Cloud gives your team a complete, AI-powered view of every lead, deal, and customer — so they spend less time on admin and more time closing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-2">
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
              className="btn-gold text-base px-8 py-4">
              See How Sales Cloud Can Transform Your Pipeline <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm mt-5 animate-fade-up-3"
            style={{ color: 'rgba(148,196,255,0.60)' }}>
            Free 30-min scoping call · No commitment · We come with a plan
          </p>
        </div>
      </section>

      {/* ── Pain Points ──────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="tag mx-auto mb-5">Does This Sound Like Your Team?</div>
            <h2 className="section-title mb-4">
              The Sales Problems <span className="gradient-text">We Fix</span>
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
              Let's Fix These For Your Team <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Proof ────────────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#032D60,#0A3F80)' }}>
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        <div className="section-wrap relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="tag-white mx-auto mb-5">Proven Results</div>
            <h2 className="section-title-white mb-4">What Sales Cloud Delivers</h2>
            <p className="section-sub-white">
              Average results from Salesforce Sales Cloud customers worldwide.
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
              Get These Results For Your Sales Team <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Capabilities ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="tag mx-auto mb-5">What You Get</div>
            <h2 className="section-title mb-4">
              Everything Your Sales Team <span className="gradient-text">Needs to Win</span>
            </h2>
            <p className="section-sub">
              Sales Cloud is not just a CRM — it is a complete revenue platform. Here is what it does for your team.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map(({ area, icon: Icon, color, headline, points }) => (
              <div key={area} className="glass-card p-7 group hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${color}15`, color }}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color }}>{area}</p>
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

      {/* ── How We Implement ─────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: '#EFF6FF' }}>
        <div className="section-wrap">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="tag mx-auto mb-5">Our Process</div>
            <h2 className="section-title mb-4">
              Live in Weeks, <span className="gradient-text">Not Months</span>
            </h2>
            <p className="section-sub">
              A structured, four-step delivery that gets your team selling on Salesforce fast — without the chaos of a typical CRM project.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map(({ num, title, desc }, i) => (
              <div key={num} className="glass-card p-6 relative">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black text-white mb-4"
                  style={{ backgroundColor: '#0176D3' }}>
                  {num}
                </div>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-11 right-0 w-5 h-0.5"
                    style={{ backgroundColor: 'rgba(1,118,211,0.20)' }} />
                )}
                <h4 className="font-bold mb-2" style={{ color: '#032D60' }}>{title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Cloudsheer ───────────────────────────────────── */}
      <section className="py-24 bg-white">
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
            <TrendingUp className="w-3.5 h-3.5" /> Free Sales Cloud Scoping Call
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Ready to Build a Sales Machine<br />
            <span className="gradient-text-gold">That Runs on Autopilot?</span>
          </h2>
          <p className="text-lg mb-4" style={{ color: 'rgba(148,196,255,0.85)' }}>
            In 30 minutes we will review your current sales process, show you exactly how Sales Cloud and Agentforce AI can transform your pipeline, and give you a clear implementation roadmap — at no cost.
          </p>
          <ul className="flex flex-col sm:flex-row gap-3 justify-center mb-10 text-sm"
            style={{ color: 'rgba(148,196,255,0.80)' }}>
            {['We review your current setup', 'You get a tailored roadmap', 'No obligation whatsoever'].map(i => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" style={{ color: '#38BDF8' }} /> {i}
              </li>
            ))}
          </ul>
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
            className="btn-gold text-lg px-10 py-5 animate-bounce-x">
            Book My Free Sales Cloud Call <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  )
}
