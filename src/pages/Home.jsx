import { Link } from 'react-router-dom'
import {
  ArrowRight, Bot, Zap, ShieldCheck, BarChart3,
  CheckCircle2, ChevronRight, Star, Users, TrendingUp,
  Sparkles, Clock, RefreshCw, Settings,
} from 'lucide-react'

/* ─── Hero ─────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #032D60 0%, #0A3F80 50%, #0176D3 100%)' }}>
      <div className="absolute inset-0 bg-grid-dark" />

      {/* Glow orbs */}
      <div className="glow-dot w-[700px] h-[700px] top-[-200px] left-[-100px]"
        style={{ backgroundColor: 'rgba(0,169,255,0.18)' }} />
      <div className="glow-dot w-[500px] h-[500px] bottom-[-150px] right-[-50px]"
        style={{ backgroundColor: 'rgba(99,102,241,0.15)' }} />
      <div className="glow-dot w-[300px] h-[300px] top-[40%] right-[25%]"
        style={{ backgroundColor: 'rgba(245,158,11,0.08)' }} />

      {/* Decorative spinning ring */}
      <div className="absolute top-20 right-[8%] w-72 h-72 rounded-full border border-white/5 animate-spin-slow" />
      <div className="absolute top-32 right-[10%] w-48 h-48 rounded-full border border-white/8 animate-spin-slow"
        style={{ animationDirection: 'reverse', animationDuration: '8s' }} />

      <div className="section-wrap relative z-10 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="tag-white inline-flex mb-8 animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full animate-pulse-slow" style={{ backgroundColor: '#F59E0B' }} />
              World's First Agentforce-Centric Consultancy
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] mb-6 tracking-tight animate-fade-up-1">
              <span className="text-white">The Future of</span><br />
              <span className="shimmer-text">Salesforce is</span><br />
              <span className="shimmer-text">Autonomous.</span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-lg animate-fade-up-2"
              style={{ color: 'rgba(186,220,255,0.85)' }}>
              Cut support costs by 40%. Respond to leads in under 2 seconds.
              Automate the work that slows your team down — with AI agents
              that run 24/7 inside your Salesforce org.
            </p>

            <div className="flex flex-wrap gap-4 mb-12 animate-fade-up-3">
              <a href="https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="btn-gold text-base px-7 py-3.5">
                Build Your First Agent <ArrowRight className="w-5 h-5 animate-bounce-x" />
              </a>
              <Link to="/solutions"
                className="inline-flex items-center gap-2 font-medium px-7 py-3.5 rounded-xl transition-all duration-200"
                style={{ border: '1.5px solid rgba(255,255,255,0.25)', color: 'white' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.10)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>
                See How It Works
              </Link>
            </div>

            <div className="flex flex-wrap gap-8 animate-fade-up-4">
              {[
                { val: '40%', label: 'Lower Support Costs' },
                { val: '3×',  label: 'Faster Lead Response' },
                { val: '24/7', label: 'Always-On Agents' },
              ].map(({ val, label }) => (
                <div key={label} className="text-center">
                  <p className="text-3xl font-black text-white">{val}</p>
                  <p className="text-sm" style={{ color: 'rgba(186,220,255,0.70)' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative flex justify-center animate-fade-in">
            <AgentVisual />
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 inset-x-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}

/* ─── Agent visual ──────────────────────────────────────────── */
function AgentVisual() {
  const agents = [
    { icon: <Bot className="w-5 h-5" />,        label: 'Service Agent',  status: 'Resolving case #4821', dot: '#22C55E', bg: 'rgba(1,118,211,0.12)'  },
    { icon: <TrendingUp className="w-5 h-5" />, label: 'Sales Agent',    status: 'Qualifying 3 leads',   dot: '#38BDF8', bg: 'rgba(56,189,248,0.10)' },
    { icon: <RefreshCw className="w-5 h-5" />,  label: 'Ops Agent',      status: 'Updating 12 records',  dot: '#A78BFA', bg: 'rgba(167,139,250,0.10)' },
  ]

  return (
    <div className="relative w-full max-w-md animate-float">
      <div className="rounded-2xl p-6"
        style={{ backgroundColor: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.18)', backdropFilter: 'blur(20px)', boxShadow: '0 20px 60px rgba(0,0,0,0.25)' }}>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg,#0176D3,#38BDF8)' }}>
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Agentforce Hub</p>
              <p className="text-xs" style={{ color: 'rgba(186,220,255,0.65)' }}>3 agents active</p>
            </div>
          </div>
          <span className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{ color: '#4ADE80', backgroundColor: 'rgba(74,222,128,0.12)', border: '1px solid rgba(74,222,128,0.25)' }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#4ADE80' }} />
            Live
          </span>
        </div>

        {/* Agents list */}
        <div className="space-y-3">
          {agents.map(({ icon, label, status, dot, bg }) => (
            <div key={label} className="flex items-center gap-3 rounded-xl p-3 transition-all duration-200"
              style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: bg, color: 'white' }}>
                {icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-xs font-semibold">{label}</p>
                <p className="text-xs truncate" style={{ color: 'rgba(186,220,255,0.60)' }}>{status}</p>
              </div>
              <div className="w-2 h-2 rounded-full animate-pulse shrink-0" style={{ backgroundColor: dot }} />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mt-5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          {[{ val: '78%', label: 'Auto-resolved' }, { val: '<2s', label: 'Response' }, { val: '∞', label: 'Scale' }].map(({ val, label }) => (
            <div key={label} className="text-center">
              <p className="text-white font-bold text-sm">{val}</p>
              <p className="text-[10px]" style={{ color: 'rgba(186,220,255,0.55)' }}>{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating chips */}
      <div className="absolute -top-5 -right-5 rounded-xl px-3 py-2 flex items-center gap-2 animate-float-delay"
        style={{ backgroundColor: 'white', boxShadow: '0 4px 20px rgba(1,118,211,0.15)', border: '1px solid rgba(1,118,211,0.12)' }}>
        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
        <span className="text-xs font-semibold" style={{ color: '#032D60' }}>Case resolved</span>
      </div>
      <div className="absolute -bottom-5 -left-5 rounded-xl px-3 py-2 flex items-center gap-2 animate-float"
        style={{ backgroundColor: 'white', boxShadow: '0 4px 20px rgba(1,118,211,0.15)', border: '1px solid rgba(1,118,211,0.12)', animationDelay: '1s' }}>
        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
        <span className="text-xs font-semibold" style={{ color: '#032D60' }}>CSAT 5/5</span>
      </div>
    </div>
  )
}

/* ─── Trusted by ────────────────────────────────────────────── */
function TrustedBy() {
  const logos = ['TechNova', 'GlobalRetail', 'FinanceFlow', 'MedCore', 'BuildPro', 'RetailX']
  return (
    <section style={{ borderBottom: '1px solid rgba(1,118,211,0.08)', backgroundColor: '#F0F7FF' }}>
      <div className="section-wrap py-8">
        <div className="flex flex-col sm:flex-row items-center gap-8">
          <p className="text-xs uppercase tracking-widest shrink-0 font-semibold" style={{ color: '#64748B' }}>Trusted by</p>
          <div className="flex flex-wrap justify-center gap-10">
            {logos.map((l, i) => (
              <span key={l} className="font-bold text-sm tracking-wide transition-colors duration-300 cursor-default animate-fade-up"
                style={{ color: 'rgba(3,45,96,0.22)', animationDelay: `${i * 80}ms` }}
                onMouseEnter={e => e.currentTarget.style.color = '#0176D3'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(3,45,96,0.22)'}>
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Why Agentforce-first ──────────────────────────────────── */
function WhyAgentforce() {
  const points = [
    { icon: <Clock className="w-5 h-5" />,      title: 'Never Miss a Lead Again',     desc: 'AI agents respond to every inbound lead in under 2 seconds — qualifying, nurturing, and booking meetings while your reps sleep.' },
    { icon: <Zap className="w-5 h-5" />,         title: 'Cut Support Costs by 40%',    desc: 'Resolve 78% of Tier-1 and Tier-2 cases without human involvement. Your customers get instant answers, your team handles what matters.' },
    { icon: <ShieldCheck className="w-5 h-5" />, title: 'Trusted by Your Compliance Team', desc: "Every agent action is logged, auditable, and governed by Salesforce's Einstein Trust Layer. No rogue AI — just transparent automation." },
    { icon: <BarChart3 className="w-5 h-5" />,   title: 'See ROI in 90 Days',          desc: 'Go live in 4–6 weeks and start measuring impact immediately — more deals closed, faster resolution times, lower operational costs.' },
    { icon: <Users className="w-5 h-5" />,        title: 'Free Your Team for Growth',   desc: 'Stop wasting your best people on data entry, ticket routing, and follow-up emails. Let agents handle the repetitive so your team drives revenue.' },
    { icon: <Settings className="w-5 h-5" />,    title: 'Built for Your Business',     desc: 'Every agent is designed around your exact processes, data, and Salesforce org. Not a generic template — a custom-built solution that fits.' },
  ]

  return (
    <section className="py-28 relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="glow-dot w-[500px] h-[500px] top-0 left-[-100px]"
        style={{ backgroundColor: 'rgba(1,118,211,0.06)' }} />
      <div className="section-wrap relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="tag mb-5 animate-fade-up"><Sparkles className="w-3.5 h-3.5" /> Business Impact</div>
          <h2 className="section-title mb-5 animate-fade-up-1">
            What Changes When You<br />
            <span className="gradient-text">Add AI Agents</span>
          </h2>
          <p className="section-sub animate-fade-up-2">
            Your competitors are already automating support, sales, and operations
            with Agentforce. Here is what it means for your bottom line.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {points.map(({ icon, title, desc }, i) => (
            <div key={title} className="glass-card p-6 group animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: 'rgba(1,118,211,0.08)', border: '1px solid rgba(1,118,211,0.15)', color: '#0176D3' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor='#0176D3'; e.currentTarget.style.color='white'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor='rgba(1,118,211,0.08)'; e.currentTarget.style.color='#0176D3'; }}>
                {icon}
              </div>
              <h3 className="font-semibold mb-2" style={{ color: '#032D60' }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Agentforce showcase ───────────────────────────────────── */
function AgentforceShowcase() {
  const agents = [
    { name: 'Service Agent',           metric: '40% lower costs', desc: 'Your customers get instant answers at 2am or 2pm. Cases are resolved, records updated, and SLAs met — without adding headcount to your support team.', iconBg: 'rgba(1,118,211,0.10)',   iconColor: '#0176D3' },
    { name: 'Sales Development Agent', metric: '3× more meetings',  desc: 'Every inbound lead gets a response in seconds. Qualified prospects are booked into your calendar automatically — so your pipeline never goes cold.',                iconBg: 'rgba(245,158,11,0.10)',  iconColor: '#D97706' },
    { name: 'Operations Agent',        metric: '12 hrs/week back',   desc: 'Stop losing your best people to data entry, report generation, and record updates. Automate the admin so your team can focus on revenue.',                     iconBg: 'rgba(99,102,241,0.10)', iconColor: '#6366F1' },
  ]

  return (
    <section className="py-28 relative" style={{ backgroundColor: '#EFF6FF' }}>
      <div className="section-wrap">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="tag mx-auto mb-5 animate-fade-up"><Bot className="w-3.5 h-3.5" /> What You Get</div>
          <h2 className="section-title mb-4 animate-fade-up-1">AI Agents That Deliver<br /><span className="gradient-text">Measurable Results</span></h2>
          <p className="section-sub animate-fade-up-2">Every agent directly impacts your revenue, costs, or customer satisfaction — here is how.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {agents.map(({ name, metric, desc, iconBg, iconColor  }, i) => (
            <div key={name} className="glass-card p-7 flex flex-col animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}>
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{ backgroundColor: iconBg, color: iconColor }}>
                  <Bot className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ color: '#059669', backgroundColor: 'rgba(5,150,105,0.08)', border: '1px solid rgba(5,150,105,0.20)' }}>
                  {metric}
                </span>
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#032D60' }}>{name}</h3>
              <p className="text-sm leading-relaxed flex-grow mb-5" style={{ color: '#64748B' }}>{desc}</p>
              <Link to="/solutions" className="flex items-center gap-1 text-sm font-semibold transition-all duration-200 group"
                style={{ color: '#0176D3' }}>
                Learn more <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center animate-fade-up-3">
          <Link to="/solutions" className="btn-primary">
            Explore All Agentforce Solutions <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Stats ─────────────────────────────────────────────────── */
function Stats() {
  const items = [
    { val: '78%',  label: 'Cases Auto-Resolved', sub: 'without human involvement' },
    { val: '29%',  label: 'More Revenue',         sub: 'with Sales Cloud + AI' },
    { val: '<2s',  label: 'Lead Response Time',   sub: 'vs. hours without agents' },
    { val: '40%',  label: 'Lower Support Costs',  sub: 'after agent deployment' },
    { val: '34%',  label: 'Productivity Gain',    sub: 'across sales & service' },
  ]

  return (
    <section className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0176D3 0%, #032D60 100%)' }}>
      <div className="absolute inset-0 bg-grid-dark" />
      <div className="glow-dot w-[600px] h-[400px] top-[-100px] left-[50%] -translate-x-1/2"
        style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />
      <div className="section-wrap relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {items.map(({ val, label, sub }, i) => (
            <div key={label} className="animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
              <p className="text-4xl font-black text-white mb-1">{val}</p>
              <p className="text-sm font-semibold mb-0.5" style={{ color: 'rgba(186,220,255,0.9)' }}>{label}</p>
              <p className="text-xs" style={{ color: 'rgba(186,220,255,0.55)' }}>{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Process ───────────────────────────────────────────────── */
function Process() {
  const steps = [
    { n: '01', title: 'Identify the Opportunity', desc: 'We pinpoint where AI agents will have the biggest impact on your revenue, costs, and customer experience — based on your actual data.' },
    { n: '02', title: 'Design Your Agent',         desc: 'Custom-built agents designed around your workflows, business rules, and Salesforce org — not a generic template.' },
    { n: '03', title: 'Build & Validate',          desc: 'Rigorous sandbox testing ensures your agent works perfectly before it touches production or talks to a single customer.' },
    { n: '04', title: 'Go Live & Measure',         desc: 'Launch with confidence. Track case deflection, lead response time, and cost savings from day one — with continuous optimisation.' },
  ]

  return (
    <section className="py-28 relative" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="section-wrap">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="tag mx-auto mb-5 animate-fade-up">How It Works</div>
          <h2 className="section-title mb-4 animate-fade-up-1">From Problem to <span className="gradient-text">Results in 4 Weeks</span></h2>
          <p className="section-sub animate-fade-up-2">A clear, proven path from identifying your biggest cost or revenue gap to a working AI agent that closes it.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 z-0"
            style={{ background: 'linear-gradient(90deg, #0176D3, #6366F1)' }} />
          {steps.map(({ n, title, desc }, i) => (
            <div key={n} className="glass-card p-6 text-center relative z-10 animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}>
              <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white font-black text-lg"
                style={{ background: 'linear-gradient(135deg,#0176D3,#6366F1)', boxShadow: '0 6px 20px rgba(1,118,211,0.30)' }}>
                {n}
              </div>
              <h3 className="font-bold mb-2" style={{ color: '#032D60' }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Testimonials ──────────────────────────────────────────── */
function Testimonials() {
  const items = [
    { quote: "Our support costs dropped 40% in the first quarter. The AI agent resolves 80% of Tier-1 cases before they ever reach a human — and customers rate it 4.8/5.", author: 'Sarah Mitchell', role: 'VP Customer Success, TechNova',  initials: 'SM', color: 'linear-gradient(135deg,#0176D3,#00A9FF)' },
    { quote: "We went from losing leads to booking 3× more discovery calls. The agent responds in seconds, qualifies accurately, and our pipeline has never been healthier.",  author: 'James Okafor',   role: 'CTO, GlobalRetail',               initials: 'JO', color: 'linear-gradient(135deg,#6366F1,#818CF8)' },
    { quote: "Our ops team got 12 hours a week back. No more manual data entry, no more chasing approvals. The ROI paid for the entire project in 60 days.",    author: 'Priya Sharma',   role: 'Head of Revenue, FinanceFlow',    initials: 'PS', color: 'linear-gradient(135deg,#059669,#34D399)' },
  ]

  return (
    <section className="py-28" style={{ backgroundColor: '#EFF6FF' }}>
      <div className="section-wrap">
        <div className="text-center mb-16">
          <div className="tag mx-auto mb-5 animate-fade-up">Outcomes That Matter</div>
          <h2 className="section-title animate-fade-up-1">The Results <span className="gradient-text">Speak for Themselves</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(({ quote, author, role, initials, color }, i) => (
            <div key={author} className="glass-card p-8 flex flex-col animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}>
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4" style={{ fill: '#F59E0B', color: '#F59E0B' }} />
                ))}
              </div>
              <p className="text-sm leading-relaxed flex-grow mb-6" style={{ color: '#475569' }}>"{quote}"</p>
              <div className="flex items-center gap-3 pt-5" style={{ borderTop: '1px solid rgba(1,118,211,0.08)' }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                  style={{ background: color }}>
                  {initials}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: '#032D60' }}>{author}</p>
                  <p className="text-xs" style={{ color: '#64748B' }}>{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ───────────────────────────────────────────────────── */
function CTA() {
  return (
    <section className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #032D60 0%, #0A3F80 60%, #0176D3 100%)' }}>
      <div className="absolute inset-0 bg-grid-dark" />
      <div className="glow-dot w-[700px] h-[600px] top-[-200px] left-[50%] -translate-x-1/2"
        style={{ backgroundColor: 'rgba(0,169,255,0.15)' }} />
      <div className="glow-dot w-[300px] h-[300px] bottom-[-100px] right-[10%]"
        style={{ backgroundColor: 'rgba(245,158,11,0.10)' }} />

      <div className="section-wrap relative z-10 text-center max-w-3xl mx-auto">
        <div className="tag-white inline-flex mb-6 animate-fade-up">
          <span className="w-1.5 h-1.5 rounded-full animate-pulse-slow" style={{ backgroundColor: '#F59E0B' }} />
          Get Started Today
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight animate-fade-up-1">
          Find Out What AI Agents<br />
          <span className="gradient-text-gold">Can Do for Your Business</span>
        </h2>
        <p className="text-lg mb-10 max-w-xl mx-auto animate-fade-up-2"
          style={{ color: 'rgba(186,220,255,0.80)' }}>
          In 30 minutes, we will identify your highest-impact use case and show you
          exactly how much you can save — with a clear plan to get there.
        </p>
        <div className="flex flex-wrap gap-4 justify-center animate-fade-up-3">
          <a href="https://cal.com/cloudsheer-consulting/30min?overlayCalendar=true" target="_blank" rel="noopener noreferrer" className="btn-gold text-base px-8 py-4">
            Book Free Discovery Call <ArrowRight className="w-5 h-5 animate-bounce-x" />
          </a>
          <Link to="/solutions"
            className="inline-flex items-center gap-2 font-medium text-base px-8 py-4 rounded-xl transition-all duration-200"
            style={{ border: '1.5px solid rgba(255,255,255,0.25)', color: 'white' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.10)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>
            Explore Agentforce
          </Link>
        </div>
        <p className="text-sm mt-6 animate-fade-in" style={{ color: 'rgba(186,220,255,0.55)' }}>
          No commitment. No sales pitch. Just clarity on how Agentforce fits your business.
        </p>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <WhyAgentforce />
      <AgentforceShowcase />
      <Stats />
      <Process />
      <Testimonials />
      <CTA />
    </>
  )
}
