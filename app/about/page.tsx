import type { Metadata } from 'next'
import { Target, Eye, Gem, ShieldCheck, Handshake, Lightbulb } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { StatsBar } from '@/components/stats-bar'
import { CtaSection } from '@/components/cta-section'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'ELGAN Integrated Services Limited is a trusted provider of security, defence, and maritime engineering solutions for government, military, and energy clients.',
}

const pillars = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To deliver innovative, reliable, and cost-effective security and maritime services by combining technical expertise with deep knowledge of the Nigerian operating environment — creating lasting value for clients and stakeholders',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'To be West Africa’s foremost provider of integrated security, defence engineering, and maritime consultancy — delivering excellence that safeguards lives, assets, and national sovereignty.',
  },
  {
    icon: Gem,
    title: 'Our Values',
    text: 'Integrity, precision, and accountability guide every project we undertake, from concept to delivery.',
  },
]

const principles = [
  {
    icon: ShieldCheck,
    title: 'Uncompromising Standards',
    text: 'We build to the strictest naval, defence, and international compliance benchmarks.',
  },
  {
    icon: Handshake,
    title: 'Client Partnership',
    text: 'We work as an extension of your team, aligning delivery with your operational mandate.',
  },
  {
    icon: Lightbulb,
    title: 'Engineering Ingenuity',
    text: 'We solve complex security challenges with practical, resilient engineering.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About ELGAN"
        title="Precision engineering for a more secure world"
        description="Elgan Integrated Services Limited is a Nigerian company specialising in security and defence engineering, maritime protection, and strategic consultancy. Headquartered in Apapa, Lagos — Nigeria’s principal maritime hub — we deliver high-quality, technically rigorous solutions that protect personnel, vessels, and critical national infrastructure."
      />

      {/* Story */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="overflow-hidden rounded-lg">
              <img
                src="/images/elganengineers2.jpeg"
                alt="ELGAN specialists reviewing maritime security plans in a control room"
                className="h-full w-full object-cover"
              />
            </Reveal>
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="Built on trust, engineered for resilience"
                description="Our multidisciplinary team combines seasoned engineers, security professionals, and policy consultants who understand the unique operational challenges of the Nigerian and West African maritime environment. We collaborate closely with federal agencies, military establishments, and private-sector clients to develop bespoke solutions that meet the highest national and international standards"
              />
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Since our founding, Elgan Integrated Services has earned a strong reputation for technical excellence, delivery reliability, and professional integrity. We are committed to supporting Nigeria’s maritime security architecture and contributing to the nation’s economic and infrastructural development through innovative, value-driven service delivery.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon
              return (
                <Reveal
                  key={pillar.title}
                  delay={i * 100}
                  className="rounded-lg border border-border bg-card p-8"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-md bg-[var(--navy)] text-[var(--brand-teal)]">
                    <Icon className="h-7 w-7" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-6 font-serif text-xl text-[var(--navy)]">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {pillar.text}
                  </p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <StatsBar />

      {/* Principles */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How We Work"
            title="Principles that define every engagement"
            align="center"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {principles.map((item, i) => {
              const Icon = item.icon
              return (
                <Reveal
                  key={item.title}
                  delay={i * 100}
                  className="flex flex-col items-center text-center"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[var(--brand-teal)] text-[var(--brand-teal)]">
                    <Icon className="h-7 w-7" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 font-serif text-lg text-[var(--brand-teal)]">{item.title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
