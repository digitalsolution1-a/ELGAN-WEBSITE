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

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Projects"
        title="Delivering mission-critical outcomes"
        description="The following engagements reflect Elgan’s executed work across the security, defence, maritime, and environmental sectors. Each project demonstrates our commitment to technical rigour, client partnership, and on-time delivery."
      />

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
