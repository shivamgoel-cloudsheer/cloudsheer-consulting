import CloudPage from '../../components/CloudPage'
import { BarChart2, TrendingUp, Zap, Eye, Database, RefreshCw, PieChart, Target } from 'lucide-react'

const data = {
  tag: 'Analytics & Tableau',
  TagIcon: BarChart2,
  title: 'Turn Data into Decisions with',
  titleHighlight: 'CRM Analytics & Tableau',
  subtitle:
    'Salesforce CRM Analytics and Tableau give you real-time visibility into every corner of your business — from pipeline health to customer churn signals. Cloudsheer builds dashboards and analytics architectures that power smarter, faster decisions.',
  accentColor: '#E6205A',
  accentBg: 'rgba(230,32,90,0.07)',
  accentBorder: 'rgba(230,32,90,0.18)',
  stats: [
    { value: '65%',  label: 'Faster reporting cycles' },
    { value: '3×',   label: 'More decisions from data' },
    { value: '40%',  label: 'Reduction in manual reporting' },
    { value: '28%',  label: 'Improvement in forecast accuracy' },
  ],
  overviewTitle: 'What is CRM Analytics & Tableau?',
  overviewBody:
    "CRM Analytics (formerly Einstein Analytics) is Salesforce's native analytics platform with AI-powered insights built directly into your CRM. Tableau is Salesforce's best-in-class data visualisation tool for deeper, cross-system analytics. Together, they give your teams the intelligence to act — not just observe. Cloudsheer designs and builds analytics solutions that surface the right insight to the right person at the right time.",
  features: [
    { Icon: PieChart,    title: 'CRM Analytics Dashboards', desc: 'Pre-built and custom dashboards embedded directly inside Salesforce records and apps.' },
    { Icon: TrendingUp,  title: 'Einstein Predictions',     desc: 'Machine-learning models that score leads, predict churn, and flag pipeline risk.' },
    { Icon: Eye,         title: 'Tableau Workbooks',        desc: 'Visual analytics across any data source — Salesforce, cloud databases, or files.' },
    { Icon: Database,    title: 'Data Cloud Integration',   desc: 'Unified analytics across all your Salesforce and external data with Data Cloud.' },
    { Icon: RefreshCw,   title: 'Real-Time Data Sync',      desc: 'Live data streams so dashboards always reflect current pipeline and customer data.' },
    { Icon: Target,      title: 'KPI & Goal Tracking',      desc: 'Exec scorecards, quota attainment tracking, and departmental goal dashboards.' },
  ],
  approach: {
    title: 'How We Build Your Analytics Solution',
    subtitle: 'We build analytics that get used — starting from the decisions your team actually needs to make, not from the data you happen to have.',
    steps: [
      { title: 'Analytics Discovery',  desc: 'Interview stakeholders to understand the top 10 decisions that need better data — and what data gaps are blocking them today.' },
      { title: 'Data Architecture',    desc: 'Design the dataset structure, refresh schedule, data lineage, and role-based visibility model for your analytics layer.' },
      { title: 'Dashboard Build',      desc: 'Build CRM Analytics or Tableau dashboards with charts, filters, drill-downs, and embedded actions that trigger Salesforce workflows.' },
      { title: 'Adoption & Training',  desc: 'Roll out with user training, embed dashboards in existing Salesforce views, and set up alerts for key metric thresholds.' },
    ],
  },
  useCases: [
    { title: 'Sales Pipeline Dashboard',    desc: 'Built an executive pipeline dashboard with stage velocity, rep performance, deal risk signals, and forecast accuracy tracking.', tags: ['Sales', 'Forecasting', 'Pipeline'] },
    { title: 'Service Operations Centre',   desc: 'Created a real-time service ops dashboard with queue health, SLA status, CSAT trends, and agent utilisation metrics.', tags: ['Service', 'Real-time', 'SLA'] },
    { title: 'Einstein Churn Predictor',    desc: 'Deployed an Einstein churn-prediction model for a SaaS company — flagging at-risk accounts 45 days before renewal.', tags: ['Einstein', 'Churn', 'SaaS'] },
    { title: 'Tableau Executive Scorecard', desc: 'Built a Tableau workbook pulling from Salesforce, NetSuite, and Snowflake — giving the exec team a single source of truth.', tags: ['Tableau', 'Multi-source', 'Exec'] },
    { title: 'Marketing Attribution Report',desc: 'Designed a multi-touch attribution dashboard connecting Marketing Cloud campaign data to closed-won opportunities in Sales Cloud.', tags: ['Marketing', 'Attribution', 'Revenue'] },
    { title: 'Revenue Operations Pack',     desc: 'Delivered a full RevOps analytics pack — pipeline generation, conversion rates, quota attainment, and cohort analysis.', tags: ['RevOps', 'Cohort', 'Conversion'] },
  ],
  deliverables: {
    intro: 'An analytics engagement delivers dashboards, models, and data architecture that give your team a real competitive intelligence advantage.',
    items: [
      'Analytics requirements & KPI mapping',
      'Dataset architecture & data prep',
      'CRM Analytics or Tableau dashboard build',
      'Einstein prediction model setup',
      'Role-based access configuration',
      'Salesforce embedding & integration',
      'Alert & notification configuration',
      'End-user training & documentation',
    ],
  },
  cta: {
    title: 'Ready to Make Your Data Work Harder?',
    body: "Book a free 30-minute analytics scoping call. We'll map your top 5 insight gaps and design a dashboard blueprint to close them.",
  },
}

export default function AnalyticsPage() {
  return <CloudPage cloud={data} />
}
