import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { ProjectsGrid } from '@/components/projects-grid'
import { CtaSection } from '@/components/cta-section'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'The following engagements reflect Elgan’s executed work across the security, defence, maritime, and environmental sectors. Each project demonstrates our commitment to technical rigour, client partnership, and on-time delivery.',
}

const highlights = [
  { value: 'Design & Construction of 12.7 mm Antiballistic Gun Shields', label: 'Nigerian Maritime Administration and Safety Agency (NIMASA)' },
  { value: 'Design & Printing of Security Documents', label: 'Nigerian Maritime Administration and Safety Agency (NIMASA)' },
  { value: 'Design & Construction of 12.7 mm Antiballistic Gun Shields', label: 'Nigerian Military' },
  { value: 'Development of Business Case — Offshore Waste Reception Facility', label: 'Nigerian Maritime Administration and Safety Agency (NIMASA)' },
  { value: 'Supply of Security & Defence Personal Protective Gear', label: 'Government Security Agencies and Military Establishments' },
  { value: 'Independent Technical Assessor — Offshore Waste Reception Facility', label: 'Nigerian Maritime Administration and Safety Agency (NIMASA)' },
]

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Projects"
        title="Delivering mission-critical outcomes"
        description="The following engagements reflect Elgan’s executed work across the security, defence, maritime, and environmental sectors. Each project demonstrates our commitment to technical rigour, client partnership, and on-time delivery."
      />

      <section className="border-b border-border bg-muted">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {highlights.map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 80}
              className="px-6 py-8 text-center"
            >
              <p className="font-serif text-2xl text-[var(--navy)]">{item.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {item.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Case Portfolio"
            title="Engineering that protects what matters"
            description="Each engagement reflects our commitment to precision, compliance, and operational reliability in demanding environments."
          />
          <div className="mt-14">
            <ProjectsGrid />
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
