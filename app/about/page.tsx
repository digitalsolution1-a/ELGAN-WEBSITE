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
    text: 'To deliver dependable, government-grade security and engineering solutions that protect people, assets, and national interests.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'To be the most trusted integrated security, defence, and maritime engineering partner across the region.',
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
        description="ELGAN Integrated Services Limited is a multidisciplinary firm delivering security, defence, maritime engineering, and strategic consultancy to the institutions that safeguard nations."
      />

      {/* Story */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="overflow-hidden rounded-lg">
              <img
                src="/images/about-team.png"
                alt="ELGAN specialists reviewing maritime security plans in a control room"
                className="h-full w-full object-cover"
              />
            </Reveal>
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="Built on trust, engineered for resilience"
                description="For over fifteen years, ELGAN has partnered with government agencies, the military, maritime authorities, and energy operators to deliver mission-critical security and engineering programmes."
              />
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  From anti-ballistic vessel protection to secure document production, our work sits
                  at the intersection of advanced engineering and operational security. We combine
                  technical depth with a rigorous commitment to compliance and confidentiality.
                </p>
                <p>
                  Our teams bring together engineers, security professionals, and strategic
                  advisors who understand the high-stakes environments our clients operate in and
                  the standards their missions demand.
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
