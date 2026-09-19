import type { Metadata } from 'next'
import { CheckCircle2 } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaSection } from '@/components/cta-section'
import { Reveal } from '@/components/reveal'
import { services } from '@/lib/content'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore ELGAN\'s services: maritime security engineering, security document production, defence equipment supply, environmental consultancy, and strategic advisory.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Integrated capabilities for complex missions"
        description="Five specialist practices working in concert to protect maritime assets, secure critical documents, supply defence equipment, and advise on strategy."
      />

      <section className="py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-20 px-4 sm:px-6 lg:px-8 lg:gap-28">
          {services.map((service, i) => {
            const Icon = service.icon
            const reversed = i % 2 === 1
            return (
              <Reveal
                key={service.slug}
                as="article"
                id={service.slug}
                className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div className={cn('overflow-hidden rounded-lg', reversed && 'lg:order-2')}>
                  <img
                    src={service.image || '/placeholder.svg'}
                    alt={service.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className={cn(reversed && 'lg:order-1')}>
                  <span className="flex h-14 w-14 items-center justify-center rounded-md bg-[var(--brand-teal))] text-[var(--brand-teal)]">
                    <Icon className="h-7 w-7" strokeWidth={1.75} />
                  </span>
                  <h2 className="mt-6 font-serif text-3xl text-[var(--navy)]">{service.title}</h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {service.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-teal)]" />
                        <span className="text-sm text-foreground">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      <CtaSection />
    </>
  )
}
