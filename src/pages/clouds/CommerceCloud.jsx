import {
  ArrowRight, CheckCircle2, ShoppingCart, TrendingUp, Clock, DollarSign,
  Globe, Users, BarChart2, Star, ChevronRight, Package, CreditCard,
  RefreshCw, Zap, Search,
} from 'lucide-react'

const CAL_LINK = 'https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true'

const painPoints = [
  { pain: "Your online store conversion rate is stuck below industry average", fix: "Commerce Cloud's AI-powered personalisation lifts conversion rates by up to 26%" },
  { pain: "Managing B2B and B2C on separate platforms doubles your cost and complexity", fix: "One unified commerce platform handles both B2B and B2C from a single codebase" },
  { pain: "Cart abandonment is bleeding revenue every single day", fix: "Optimised checkout, saved carts, and Einstein recommendations recover lost sales automatically" },
  { pain: "Your storefront cannot scale for peak traffic or international expansion", fix: "Cloud-native architecture scales elastically — handle flash sales and global rollouts with ease" },
  { pain: "Disconnected systems mean orders, inventory, and customer data never match", fix: "Commerce Cloud connects natively to your CRM, ERP, and fulfilment — one source of truth" },
]

const outcomes = [
  { icon: TrendingUp,  value: '26%',     label: 'higher conversion rates with AI-powered personalisation', color: '#0176D3' },
  { icon: DollarSign,  value: '21%',     label: 'increase in average order value across Commerce Cloud customers', color: '#10B981' },
  { icon: ShoppingCart, value: '35%',     label: 'reduction in cart abandonment with optimised checkout flows', color: '#F59E0B' },
  { icon: Clock,       value: '2x',      label: 'faster time-to-launch vs legacy commerce platforms', color: '#6366F1' },
  { icon: Globe,       value: '30+',     label: 'languages and multi-currency support out of the box', color: '#06B6D4' },
  { icon: Users,       value: '10,000+', label: 'brands running on Salesforce Commerce Cloud worldwide', color: '#0176D3' },
]

const useCases = [
  {
    dept: 'B2C Storefronts',
    icon: ShoppingCart,
    color: '#0176D3',
    headline: 'Beautiful storefronts that convert',
    points: [
      'Headless or reference architecture storefronts tailored to your brand',
      'Einstein AI product recommendations personalised to every shopper',
      'Mobile-first responsive design with sub-second page loads',
      'Built-in A/B testing and conversion optimisation tools',
      'SEO-ready pages with structured data and dynamic meta tags',
    ],
  },
  {
    dept: 'B2B Commerce',
    icon: Package,
    color: '#10B981',
    headline: 'Self-service ordering that scales',
    points: [
      'Custom price books, contract pricing, and volume discounts per account',
      'Bulk ordering, reorder lists, and quick-order CSV uploads',
      'Account hierarchies with role-based access and approval workflows',
      'Real-time inventory visibility and delivery date estimation',
      'Seamless integration with ERP, WMS, and procurement systems',
    ],
  },
  {
    dept: 'Order Management',
    icon: RefreshCw,
    color: '#F59E0B',
    headline: 'Fulfil smarter, not harder',
    points: [
      'Unified order lifecycle from checkout to delivery to returns',
      'Distributed order management across warehouses and stores',
      'Automated routing to the optimal fulfilment location',
      'Real-time order tracking and proactive customer notifications',
      'Returns, exchanges, and refund automation built in',
    ],
  },
  {
    dept: 'AI & Personalisation',
    icon: Zap,
    color: '#6366F1',
    headline: 'Let AI drive your revenue',
    points: [
      'Einstein product recommendations on every page and in every email',
      'Predictive sort — show each shopper the products most likely to convert',
      'AI-powered search with natural language understanding',
      'Automated merchandising rules based on margin, inventory, and trends',
      'Commerce Insights dashboards with revenue attribution and funnel analysis',
    ],
  },
]

const whyUs = [
  { title: 'Commerce Cloud Specialists',  desc: "We build and optimise Salesforce Commerce Cloud every day. That focus means deeper expertise, fewer mistakes, and faster launches than any generalist partner." },
  { title: "Proven Delivery Track Record", desc: "Our team has delivered B2B portals, D2C storefronts, headless builds, and multi-site international rollouts. We know what works at scale." },
  { title: 'Fast Time to Revenue',         desc: "Most Commerce Cloud MVPs are live within 8-12 weeks. We move fast, validate early, and get you generating revenue — not stuck in discovery." },
  { title: 'No Commitment to Start',       desc: "Book a free 30-minute commerce scoping call. We will assess your current setup, identify quick wins, and give you a clear roadmap — completely free." },
]

export default function CommerceCloudPage() {
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
              <ShoppingCart className="w-3.5 h-3.5" /> Salesforce Commerce Cloud
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 animate-fade-up">
              Turn Every Digital Interaction Into{' '}
              <span className="gradient-text-gold">Revenue That Scales</span>
            </h1>
            <p className="text-xl leading-relaxed mb-10 animate-fade-up-1"
              style={{ color: 'rgba(148,196,255,0.90)' }}>
              Salesforce Commerce Cloud powers seamless B2B and B2C buying experiences — with AI personalisation, unified order management, and native CRM integration. Cloudsheer builds commerce experiences that convert from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-2">
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
                className="btn-gold text-base px-8 py-4">
                Get a Free Commerce Strategy Session <ArrowRight className="w-5 h-5" />
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
              The Problems <span className="gradient-text">Commerce Cloud Solves</span>
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
              Talk To Us About Your Commerce Challenges <ArrowRight className="w-4 h-4" />
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
            <div className="tag-white mx-auto mb-5">Proven Results</div>
            <h2 className="section-title-white mb-4">
              Commerce Cloud Delivers Real Revenue Impact
            </h2>
            <p className="section-sub-white">
              These are real outcomes from businesses running Salesforce Commerce Cloud — not projections.
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
              Get Results Like These For Your Store <ArrowRight className="w-5 h-5" />
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
              Commerce Capabilities That <span className="gradient-text">Drive Growth</span>
            </h2>
            <p className="section-sub">
              From storefront launch to international rollout — we build commerce experiences that convert, scale, and integrate with your entire Salesforce ecosystem.
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
                  Discuss this for your business <ChevronRight className="w-4 h-4" />
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
              Why Work With Us <span className="gradient-text">For Commerce Cloud?</span>
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
            <ShoppingCart className="w-3.5 h-3.5" /> Free Commerce Scoping Call
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Ready to Launch or Scale Your<br />
            <span className="gradient-text-gold">Commerce Experience?</span>
          </h2>
          <p className="text-lg mb-4" style={{ color: 'rgba(148,196,255,0.85)' }}>
            In 30 minutes we will review your current commerce setup, identify the biggest revenue opportunities, and give you a clear roadmap to launch or optimise — at no cost, no commitment.
          </p>
          <ul className="flex flex-col sm:flex-row gap-3 justify-center mb-10 text-sm"
            style={{ color: 'rgba(148,196,255,0.80)' }}>
            {['We come with a commerce plan', 'No sales pitch — just strategy', 'You leave with a clear roadmap'].map(i => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" style={{ color: '#38BDF8' }} /> {i}
              </li>
            ))}
          </ul>
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
            className="btn-gold text-lg px-10 py-5 animate-bounce-x">
            Book My Free Commerce Strategy Call <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  )
}
