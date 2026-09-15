import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { GalleryGrid } from '@/components/gallery-grid'
import { CtaSection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'A visual showcase of ELGAN Integrated Services projects across maritime security engineering, defence, logistics, and environmental consultancy.',
}

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A visual record of our work"
        description="Explore imagery from our engineering, security, and consultancy engagements across maritime and defence sectors."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>

      <CtaSection />
    </>
  )
}
