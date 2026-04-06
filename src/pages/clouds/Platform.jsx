import {
  ArrowRight, CheckCircle2, Zap, TrendingUp, Clock, DollarSign,
  Code, Layers, Package, Globe, Shield, Star, ChevronRight, Workflow,
} from 'lucide-react'

const CAL_LINK = 'https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true'

const painPoints = [
  { pain: "Building business apps takes months and costs a fortune with traditional development", fix: "Salesforce Platform lets you ship custom apps in weeks with low-code tools and reusable components" },
  { pain: "Your team relies on spreadsheets and disconnected tools to run critical processes", fix: "Build purpose-built apps inside Salesforce — connected to your CRM, automated, and mobile-ready" },
  { pain: "Integrating Salesforce with your ERP, finance, or legacy systems is a nightmare", fix: "Platform APIs, MuleSoft connectors, and Platform Events make real-time integration straightforward" },
  { pain: "You have manual workflows that eat up hours every week across departments", fix: "Flow Builder automates complex processes with clicks, not code — cutting manual work by up to 90%" },
  { pain: "Evaluating and implementing AppExchange apps wastes time and creates technical debt", fix: "We evaluate, implement, and govern AppExchange solutions so they work cleanly inside your org" },
]

const outcomes = [
  { icon: Clock,      value: '60%',      label: 'faster app delivery with low-code development on Salesforce Platform', color: '#0176D3' },
  { icon: Code,       value: '90%',      label: 'less custom code needed when using Flow Builder over traditional Apex triggers', color: '#10B981' },
  { icon: Package,    value: '7,000+',   label: 'apps and components available on AppExchange to extend your Salesforce org', color: '#F59E0B' },
  { icon: TrendingUp, value: '26%',      label: 'average increase in employee productivity reported by Platform customers', color: '#6366F1' },
  { icon: DollarSign, value: '3.8x',     label: 'average ROI over three years for Salesforce Platform investments (Forrester TEI)', color: '#06B6D4' },
  { icon: Globe,      value: '150K+',    label: 'companies worldwide building custom apps and automations on Salesforce Platform', color: '#0176D3' },
]

const useCases = [
  {
    dept: 'Custom App Development',
    icon: Code,
    color: '#0176D3',
    headline: 'Build exactly what your business needs',
    points: [
      'Create custom objects, fields, and page layouts without writing code',
      'Build Lightning Web Components for rich, interactive user experiences',
      'Write Apex for complex server-side logic, triggers, and batch processing',
      'Deploy mobile-ready apps instantly with Salesforce Mobile',
      'Version control and CI/CD with Salesforce DX and scratch orgs',
    ],
  },
  {
    dept: 'Automation & Flow',
    icon: Workflow,
    color: '#10B981',
    headline: 'Automate any process — no code required',
    points: [
      'Replace manual workflows with Flow Builder automations',
      'Trigger flows from record changes, schedules, or platform events',
      'Automate approvals, notifications, escalations, and data updates',
      'Orchestrate multi-step processes across objects and departments',
      'Reduce tech debt by replacing legacy Apex triggers with Flows',
    ],
  },
  {
    dept: 'Integration & APIs',
    icon: Globe,
    color: '#F59E0B',
    headline: 'Connect Salesforce to everything',
    points: [
      'REST and SOAP APIs for any external system integration',
      'Platform Events and Change Data Capture for real-time data sync',
      'MuleSoft connectors for ERP, finance, and legacy systems',
      'Outbound messages, webhooks, and callouts for event-driven architecture',
      'Heroku and AWS integrations for compute-heavy or external workloads',
    ],
  },
  {
    dept: 'AppExchange & Ecosystem',
    icon: Package,
    color: '#6366F1',
    headline: 'Extend your org with proven solutions',
    points: [
      'Access 7,000+ pre-built apps, components, and Lightning Bolts',
      'Document generation, e-signatures, CPQ add-ons, and more',
      'Security-reviewed apps that install directly into your Salesforce org',
      'Reduce build time by leveraging existing AppExchange solutions',
      'Expert evaluation to find the right tool — not just the popular one',
    ],
  },
]

const whyUs = [
  { title: 'Deep Platform Expertise', desc: "Apex, LWC, Flow, APIs, AppExchange — we build on every layer of the Salesforce Platform. No generalist guesswork, just proven technical depth." },
  { title: "We've Built This Before", desc: "Custom apps, ERP integrations, complex Flow automations, multi-org architectures — we have done it across industries and know what works." },
  { title: 'Clean, Maintainable Builds', desc: "Every build follows Salesforce best practices: proper test coverage, documentation, governor limit compliance, and a clean deployment pipeline." },
  { title: 'Free Discovery Call', desc: "Book a 30-minute call. We will review your requirements, recommend the right approach, and give you a build plan — no cost, no commitment." },
]

export default function PlatformPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#032D60 0%,#0A3F80 55%,#0176D3 100%)' }}>
        <div className="absolute inset-0 bg-grid-dark opacity-40" />
        <div className="glow-dot w-[500px] h-[500px] top-[-150px] right-[-80px]"
          style={{ backgroundColor: '#A78BFA', opacity: 0.15 }} />

        <div className="section-wrap relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="tag-white mx-auto mb-6 inline-flex">
              <Layers className="w-3.5 h-3.5" /> Salesforce Platform & AppExchange
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 animate-fade-up">
              Build Custom Apps, Automate Anything, and{' '}
              <span className="gradient-text-gold">Scale Without Limits</span>
            </h1>
            <p className="text-xl leading-relaxed mb-10 animate-fade-up-1"
              style={{ color: 'rgba(148,196,255,0.90)' }}>
              The Salesforce Platform gives you low-code tools, custom development, 7,000+ AppExchange apps, and enterprise-grade APIs — all inside your CRM. Cloudsheer builds and extends it so you get exactly what your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-2">
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
                className="btn-gold text-base px-8 py-4">
                Discuss Your Platform Project <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm mt-5 animate-fade-up-3"
              style={{ color: 'rgba(148,196,255,0.60)' }}>
              Free 30-min technical discovery call · No commitment · We come with a plan
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
              The Problems <span className="gradient-text">the Platform Solves</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {painPoints.map(({ pain, fix }) => (
              <div key={pain} className="glass-card p-5 grid sm:grid-cols-2 gap-4 items-center group hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: 'rgba(239,68,68,0.10)', color: '#EF4444' }}>
                    <span className="text-xs font-bold">&#x2715;</span>
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
              Tell Us About Your Challenge <ArrowRight className="w-4 h-4" />
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
              Why Companies Build on Salesforce Platform
            </h2>
            <p className="section-sub-white">
              The numbers behind the world's #1 enterprise app platform — powering custom apps, automations, and integrations at scale.
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
              See What We Can Build For You <ArrowRight className="w-5 h-5" />
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
              Platform Capabilities That{' '}
              <span className="gradient-text">Transform Your Business</span>
            </h2>
            <p className="section-sub">
              From custom apps to enterprise integrations — we build on every layer of the Salesforce Platform to solve your specific challenges.
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
                  Discuss this with us <ChevronRight className="w-4 h-4" />
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
              Why Build With Us <span className="gradient-text">Over Anyone Else?</span>
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
            <Zap className="w-3.5 h-3.5" /> Free Technical Discovery Call
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Have a Custom Salesforce<br />
            <span className="gradient-text-gold">Challenge? Let Us Solve It.</span>
          </h2>
          <p className="text-lg mb-4" style={{ color: 'rgba(148,196,255,0.85)' }}>
            In 30 minutes we will review your requirements, recommend the right approach — Flow vs Apex, native vs AppExchange, build vs buy — and give you a clear build plan. No cost, no commitment.
          </p>
          <ul className="flex flex-col sm:flex-row gap-3 justify-center mb-10 text-sm"
            style={{ color: 'rgba(148,196,255,0.80)' }}>
            {['We come with a technical plan', 'No sales pitch — just solutions', 'You leave with a clear next step'].map(i => (
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
