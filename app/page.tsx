import { ArrowRight, CheckCircle2, Award, Users, Globe2 } from 'lucide-react'
import { LinkButton } from '@/components/link-button'
import { HomeHero } from '@/components/home-hero'
import { StatsBar } from '@/components/stats-bar'
import { SectionHeading } from '@/components/section-heading'
import { ServicesGrid } from '@/components/services-grid'
import { ProjectsGrid } from '@/components/projects-grid'
import { CtaSection } from '@/components/cta-section'
import { Reveal } from '@/components/reveal'

const values = [
  {
    icon: Award,
    title: 'Proven Government Track Record',
    text: 'Repeated engagements with NIMASA and the Nigerian Military demonstrate our ability to meet the demanding standards of federal agencies and armed forces.',
  },
  {
    icon: Users,
    title: 'End-to-End Capability',
    text: 'From ballistic engineering and secure document production to environmental consultancy and independent assessment — complete solutions under one roof.',
  },
  {
    icon: Globe2,
    title: 'Technical Precision',
    text: 'Our antiballistic and security solutions are engineered to exact calibre, threat-level and regulatory specifications, ensuring maximum performance in the field.',
  },
  {
    icon: Globe2,
    title: 'Deep Local Expertise',
    text: 'We combine international best practices with intimate knowledge of the Nigerian regulatory environment, maritime landscape and security dynamics.',
  },
]

const aboutPoints = [
  'Anti-ballistic and vessel hardening engineering',
  'Secure, tamper-evident document production',
  'Certified defence equipment supply chains',
  'Environmental compliance and advisory',
]

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <StatsBar />

      {/* About intro */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="relative">
              <div className="overflow-hidden rounded-lg">
                <img
                  src="/images/about-team.png"
                  alt="ELGAN engineers and security consultants reviewing maritime plans"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Badge background updated to brand-teal */}
              <div className="absolute -bottom-6 -right-6 hidden rounded-lg bg-[var(--brand-teal)] px-8 py-6 text-white shadow-xl sm:block">
                <p className="font-serif text-3xl">15+</p>
                <p className="text-xs font-semibold uppercase tracking-wide">Years of Service</p>
              </div>
            </Reveal>

            <div>
              <SectionHeading
                eyebrow="Who We Are"
                title="A trusted partner in security, defence, and maritime engineering"
                description="ELGAN Integrated Services Limited combines deep engineering capability with operational security expertise to protect the assets, waters, and institutions that nations depend on."
              />
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {aboutPoints.map((point, i) => (
                  <Reveal
                    key={point}
                    as="li"
                    delay={i * 80}
                    className="flex items-start gap-3"
                  >
                    {/* Checkmark color updated to brand-teal */}
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-teal)]" />
                    <span className="text-sm leading-relaxed text-foreground">{point}</span>
                  </Reveal>
                ))}
              </ul>
              {/* Button background updated to brand-teal */}
              <LinkButton 
                href="/about" 
                className="mt-9 bg-[var(--brand-teal)] text-white hover:bg-[var(--brand-teal)]/90"
              >
                More About Us
                <ArrowRight />
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Do"
            title="Integrated capabilities across the security spectrum"
            titleClassName="text-[var(--brand-teal)]"
            description="From protective engineering to strategic advisory, our services are designed to meet the demands of complex, high-stakes environments."
            align="center"
          />
          <div className="mt-14">
            <ServicesGrid />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <Reveal
                  key={value.title}
                  delay={i * 100}
                  className="flex flex-col items-start rounded-lg border border-border bg-card p-8"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-[var(--brand-teal)] text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 font-serif text-lg text-[var(--brand-teal)]">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.text}
                  </p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Selected Work"
              title="Projects that protect what matters"
            />
            <LinkButton href="/projects" variant="outline-dark">
              All Projects
              <ArrowRight />
            </LinkButton>
          </div>
          <div className="mt-12">
            <ProjectsGrid limit={4} />
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
