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
      'Design, fabrication and installation of ballistic protection systems on naval and law-enforcement patrol vessels operating across Nigerian waterways.',
    description:
      'Design, fabrication and installation of ballistic protection systems on naval and law-enforcement patrol vessels operating across Nigerian waterways.',
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
      'Conceptualisation, design and high-security printing of tamper-resistant official documents for government agencies.',
    description:
      'Conceptualisation, design and high-security printing of tamper-resistant official documents for government agencies.',
    image: '/images/securityprinting.png',
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
      'Procurement and supply of personal protective equipment, tactical field gear and specialist defence hardware to military and security establishments.',
    description:
      'Procurement and supply of personal protective equipment, tactical field gear and specialist defence hardware to military and security establishments.',
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
    title: 'Environmental & Marine Consultancy',
    icon: Leaf,
    summary:
      'Business-case development, feasibility studies, and independent technical assessment for offshore waste reception and environmental compliance infrastructure.',
    description:
      'Business-case development, feasibility studies, and independent technical assessment for offshore waste reception and environmental compliance infrastructure.',
    image: '/images/offshorewaste.png',
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
      'Policy advisory, regulatory analysis and operational planning for maritime infrastructure, security frameworks and governmental initiatives.',
    description:
      'Policy advisory, regulatory analysis and operational planning for maritime infrastructure, security frameworks and governmental initiatives.',
    image: '/images/elganadvisory.jpeg',
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
    slug: 'Anti-ballistic-gun-shields',
    title: 'Design & Construction of 12.7 mm Antiballistic Gun Shields',
    client: 'NIMASA',
    category: 'Maritime Security / Defence Engineering',
    image: '/images/project-shields.png',
    summary:
      'Elgan engineered and fabricated antiballistic gun shields rated to withstand 12.7 mm-calibre projectiles, then installed them on NIMASA enforcement patrol boats. The project significantly enhanced crew survivability and combat readiness, enabling NIMASA officers to conduct maritime law-enforcement operations with greater confidence across Nigerian territorial waters.',
  },
  {
    slug: 'Security Document Production',
    title: 'Design & Printing of Security Documents',
    client: 'NIMASA',
    category: 'Security Document Production',
    image: '/images/securityprinting.png',
    summary:
      'Elgan designed and produced a range of high-security official documents for NIMASA, incorporating advanced anti-counterfeiting features such as security inks, micro-printing, and serialised numbering. The documents underpin the agency’s regulatory, certification and identity-verification functions across Nigeria’s maritime sector.',
  },
  {
    slug: '12.7 mm Antiballistic Gun Shields',
    title: 'Design & Construction of 12.7 mm Antiballistic Gun Shields',
    client: 'Nigerian Military',
    category: 'Defence Engineering / Military',
    image: '/images/balistic.png',
    summary:
      'Drawing on its NIMASA experience, Elgan executed a parallel antiballistic gun-shield programme for Nigerian military patrol vessels. Shields were engineered to exacting military specifications, improving the operational survivability of naval personnel engaged in riverine and coastal defence, counter-piracy, and maritime interdiction missions.',
  },
  {
    slug: 'offshore-waste-reception-facility',
    title: 'Offshore Waste Reception Facility',
    client: 'NIMASA',
    category: 'Environmental Engineering',
    image: '/images/offshorewaste.png',
    summary:
      'Elgan developed a comprehensive business case for the establishment of an offshore waste reception facility under the NIMASA regulatory framework. The scope covered market analysis, financial modelling, environmental impact assessment, regulatory alignment with MARPOL conventions, and a detailed operational plan designed to support Nigeria’s compliance with international maritime environmental standards.',
  },
  {
    slug: 'offshore-waste-reception-facility',
    title: 'Supply of Security & Defence Personal Protective Gear',
    client: 'Government Security Agencies and Military Establishments',
    category: 'Defence Equipment Supply',
    image: '/images/project-waste.png',
    summary:
      'Elgan procured and delivered a comprehensive range of personal protective and tactical equipment — including body armour, ballistic helmets, load-bearing vests and specialist field gear — to security and military clients. All items met applicable national and international defence and safety standards, ensuring operational readiness in the field.',
  },
  {
    slug: 'Independent Technical Assessor ',
    title: 'Offshore Waste Reception Facility',
    client: 'NIMASA',
    category: 'Independent Technical Assessor',
    image: '/images/offshorewaste.png',
    summary:
      'Following the business-case engagement, Elgan was retained as an independent technical assessor for the offshore waste reception facility project. In this capacity, Elgan provided an objective evaluation of design proposals, operational frameworks and regulatory-compliance mechanisms, ensuring the facility concept fully met NIMASA’s strategic objectives and international environmental requirements.',
  },
]

export const stats = [
  { value: '15+', label: 'Years of Service' },
  { value: '120+', label: 'Projects Delivered' },
  { value: '40+', label: 'Government & Enterprise Clients' },
  { value: '100%', label: 'Compliance Record' },
]
