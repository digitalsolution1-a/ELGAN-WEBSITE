import {
  Anchor,
  FileLock2,
  ShieldCheck,
  Leaf,
  Compass,
  type LucideIcon,
} from 'lucide-react'

export interface Service {
  slug: string
  title: string
  icon: LucideIcon
  summary: string
  description: string
  image: string
  capabilities: string[]
}

export const services: Service[] = [
  {
    slug: 'maritime-security-engineering',
    title: 'Maritime Security Engineering',
    icon: Anchor,
    summary:
      'Protective engineering for vessels and offshore assets, from armored plating to integrated defence systems.',
    description:
      'We design and fabricate advanced protective systems for maritime platforms, including anti-ballistic shielding, vessel hardening, and integrated surveillance. Every solution is engineered to naval and international maritime standards.',
    image: '/images/project-vessel.png',
    capabilities: [
      'Anti-ballistic gun shields',
      'Vessel armor & hardening',
      'Onboard surveillance integration',
      'Offshore asset protection',
    ],
  },
  {
    slug: 'security-document-production',
    title: 'Security Document Production',
    icon: FileLock2,
    summary:
      'Tamper-evident credentials and official documents with layered anti-counterfeit security features.',
    description:
      'Our secure production facilities deliver high-integrity credentials, certificates, and official documents with holographic, microprint, and forensic security features that meet government verification requirements.',
    image: '/images/project-documents.png',
    capabilities: [
      'Holographic & microprint security',
      'Tamper-evident credentials',
      'Serialized official documents',
      'Chain-of-custody controls',
    ],
  },
  {
    slug: 'defence-equipment-supply',
    title: 'Defence Equipment Supply',
    icon: ShieldCheck,
    summary:
      'Reliable procurement and logistics of certified defence and tactical security equipment.',
    description:
      'We source, certify, and deliver defence and tactical equipment through vetted supply chains, ensuring full compliance, traceability, and operational readiness for government and security clients.',
    image: '/images/service-defence.png',
    capabilities: [
      'Vetted procurement channels',
      'Tactical & protective gear',
      'Logistics & warehousing',
      'Compliance & certification',
    ],
  },
  {
    slug: 'environmental-consultancy',
    title: 'Environmental Consultancy',
    icon: Leaf,
    summary:
      'Environmental impact assessment and waste management for maritime and energy operations.',
    description:
      'Our specialists deliver environmental impact assessments, offshore waste management, and regulatory compliance programmes that protect ecosystems while keeping operations running responsibly.',
    image: '/images/service-environmental.png',
    capabilities: [
      'Environmental impact assessment',
      'Offshore waste reception',
      'Regulatory compliance',
      'Ecosystem monitoring',
    ],
  },
  {
    slug: 'strategic-advisory-services',
    title: 'Strategic Advisory Services',
    icon: Compass,
    summary:
      'High-level advisory on security strategy, risk, and operational planning for complex environments.',
    description:
      'We advise government agencies, military, and enterprise clients on security strategy, threat assessment, and operational planning, translating intelligence into decisive, actionable programmes.',
    image: '/images/service-advisory.png',
    capabilities: [
      'Security strategy & doctrine',
      'Threat & risk assessment',
      'Operational planning',
      'Capacity building',
    ],
  },
]

export interface Project {
  slug: string
  title: string
  client: string
  category: string
  image: string
  summary: string
}

export const projects: Project[] = [
  {
    slug: 'nimasa-anti-ballistic-gun-shields',
    title: 'Design & Construction of 12.7 mm Antiballistic Gun Shields',
    client: 'NIMASA',
    category: 'Maritime Security / Defence Engineering',
    image: '/images/project-shields.png',
    summary:
      'Elgan engineered and fabricated antiballistic gun shields rated to withstand 12.7 mm-calibre projectiles, then installed them on NIMASA enforcement patrol boats. The project significantly enhanced crew survivability and combat readiness, enabling NIMASA officers to conduct maritime law-enforcement operations with greater confidence across Nigerian territorial waters.',
  },
  {
    slug: 'military-patrol-vessel-protection',
    title: 'Military Patrol Vessel Protection',
    client: 'Defence Forces',
    category: 'Maritime Security Engineering',
    image: '/images/project-vessel.png',
    summary:
      'End-to-end hardening and protective plating for military patrol vessels operating in high-risk coastal waters.',
  },
  {
    slug: 'security-document-production',
    title: 'Security Document Production',
    client: 'Government Agency',
    category: 'Secure Production',
    image: '/images/project-documents.png',
    summary:
      'Production of tamper-evident official documents with layered anti-counterfeit security features and full chain-of-custody controls.',
  },
  {
    slug: 'offshore-waste-reception-facility',
    title: 'Offshore Waste Reception Facility',
    client: 'Oil & Gas Operator',
    category: 'Environmental Engineering',
    image: '/images/project-waste.png',
    summary:
      'Development of an offshore waste reception facility enabling compliant handling and treatment of operational waste streams.',
  },
]

export const stats = [
  { value: '15+', label: 'Years of Service' },
  { value: '120+', label: 'Projects Delivered' },
  { value: '40+', label: 'Government & Enterprise Clients' },
  { value: '100%', label: 'Compliance Record' },
]
