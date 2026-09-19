import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { services } from '@/lib/content'
import { Reveal } from '@/components/reveal'

export function ServicesGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, i) => {
        const Icon = service.icon
        return (
          <Reveal
            key={service.slug}
            as="article"
            delay={i * 80}
            className="group relative flex flex-col rounded-lg border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-teal)]/50 hover:shadow-xl hover:shadow-[var(--brand-teal)]/5"
          >
            {/* Left accent bar on hover changed to brand-teal */}
            <span className="absolute left-0 top-8 h-8 w-1 rounded-r bg-[var(--brand-teal)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            
            {/* Icon box default changed to brand-teal, hover inverted */}
            <span className="flex h-14 w-14 items-center justify-center rounded-md bg-[var(--brand-teal)] text-white transition-colors duration-300 group-hover:bg-[var(--navy)] group-hover:text-[var(--brand-teal)]">
              <Icon className="h-7 w-7" strokeWidth={1.75} />
            </span>

            {/* Service title changed to brand-teal */}
            <h3 className="mt-6 font-serif text-xl text-[var(--brand-teal)]">{service.title}</h3>
            
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
              {service.summary}
            </p>

            {/* Learn more link changed to brand-teal */}
            <Link
              href="/services"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-teal)] transition-colors hover:text-[var(--navy)]"
            >
              Learn more
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        )
      })}
    </div>
  )
}
