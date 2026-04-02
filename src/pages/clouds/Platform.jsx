import CloudPage from '../../components/CloudPage'
import { Package, Code, Zap, RefreshCw, Shield, BarChart2, Layers, Globe } from 'lucide-react'

const data = {
  tag: 'Platform & AppExchange',
  TagIcon: Package,
  title: 'Build Anything on the',
  titleHighlight: 'Salesforce Platform',
  subtitle:
    'The Salesforce Platform gives you the building blocks to extend CRM into any business process — custom apps, automations, integrations, and third-party AppExchange solutions. Cloudsheer designs and builds custom Salesforce solutions that go beyond out-of-the-box.',
  accentColor: '#7C3AED',
  accentBg: 'rgba(124,58,237,0.07)',
  accentBorder: 'rgba(124,58,237,0.18)',
  stats: [
    { value: '4,000+', label: 'AppExchange apps' },
    { value: '60%',    label: 'Faster custom app delivery' },
    { value: '90%',    label: 'Less custom code with Flow' },
    { value: '#1',     label: 'Enterprise app platform' },
  ],
  overviewTitle: 'What is the Salesforce Platform?',
  overviewBody:
    "The Salesforce Platform (formerly Force.com) is the underlying infrastructure that powers all Salesforce clouds — and it's available to you to build entirely custom applications. Using Apex, Lightning Web Components, Flows, and the extensive AppExchange ecosystem, Cloudsheer builds tailored business solutions that live inside your Salesforce org and integrate with any external system.",
  features: [
    { Icon: Code,       title: 'Apex Development',         desc: 'Custom server-side logic, triggers, batch jobs, and REST API integrations.' },
    { Icon: Zap,        title: 'Flow Automation',          desc: 'No-code and low-code automation across any Salesforce object or process.' },
    { Icon: Layers,     title: 'Lightning Web Components', desc: 'Modern, high-performance UI components embedded in any Salesforce page.' },
    { Icon: Globe,      title: 'API & Integrations',       desc: 'REST, SOAP, Platform Events, and Change Data Capture for any integration.' },
    { Icon: Package,    title: 'AppExchange Solutions',    desc: 'Evaluate, implement, and configure third-party AppExchange apps for your org.' },
    { Icon: Shield,     title: 'Security & Governance',    desc: 'Permission sets, profiles, field-level security, and audit trail configuration.' },
  ],
  approach: {
    title: 'How We Build on the Salesforce Platform',
    subtitle: 'From small customisations to full custom app builds — we follow a structured approach that keeps every build clean, tested, and maintainable.',
    steps: [
      { title: 'Requirements Discovery', desc: 'Map the exact business problem to be solved, the data model needed, the user journey, and the integration touchpoints.' },
      { title: 'Solution Design',        desc: 'Choose the right tools — Flow over Apex where possible, native objects before custom, and AppExchange before custom code.' },
      { title: 'Build & Test',           desc: 'Build in sandbox, write test classes (≥75% coverage), peer-review all code, and run full UAT with business stakeholders.' },
      { title: 'Deploy & Support',       desc: 'Deploy to production via change sets or CI/CD pipeline. Provide admin documentation and post-go-live support.' },
    ],
  },
  useCases: [
    { title: 'Custom Project Tracker',       desc: 'Built a custom project and resource management app inside Salesforce for a consultancy — replacing Asana and reducing tool sprawl.', tags: ['Custom App', 'Project Mgmt', 'LWC'] },
    { title: 'ERP Integration',              desc: 'Built a real-time bidirectional integration between Salesforce and SAP S/4HANA using REST APIs and Platform Events.', tags: ['Integration', 'SAP', 'Platform Events'] },
    { title: 'Complex Flow Automation',      desc: 'Replaced 12 legacy Apex triggers with clean, maintainable Flows — reducing tech debt and cutting deployment risk.', tags: ['Flow', 'Tech Debt', 'Refactor'] },
    { title: 'AppExchange Evaluation',       desc: 'Evaluated 6 document-generation tools and implemented Conga Composer — cutting proposal creation time by 70%.', tags: ['AppExchange', 'Conga', 'Documents'] },
    { title: 'Custom Field Service App',     desc: 'Built a custom mobile field service app on Salesforce Mobile with offline capability, GPS check-in, and photo capture.', tags: ['Mobile', 'LWC', 'Field Service'] },
    { title: 'Multi-Org Data Harmonisation', desc: 'Architected a data harmonisation layer across 3 Salesforce orgs post-merger — unifying customers, contacts, and activity history.', tags: ['Multi-Org', 'Migration', 'Architecture'] },
  ],
  deliverables: {
    intro: 'Platform engagements are scoped per project — but every build includes the foundations for a clean, well-governed Salesforce org.',
    items: [
      'Technical requirements & solution design',
      'Data model & object architecture',
      'Apex / LWC development',
      'Flow & automation build',
      'API / integration development',
      'Test class coverage (≥75%)',
      'Deployment & change management',
      'Technical documentation & handover',
    ],
  },
  cta: {
    title: 'Have a Custom Salesforce Challenge?',
    body: "Book a free technical discovery call. We'll review your requirements and design a build plan — whether it's one Flow or a full custom application.",
  },
}

export default function PlatformPage() {
  return <CloudPage cloud={data} />
}
