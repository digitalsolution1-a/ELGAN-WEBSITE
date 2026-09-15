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
            className="group relative flex flex-col rounded-lg border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold)]/50 hover:shadow-xl hover:shadow-[var(--navy)]/5"
          >
            <span className="absolute left-0 top-8 h-8 w-1 rounded-r bg-[var(--gold)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="flex h-14 w-14 items-center justify-center rounded-md bg-[var(--navy)] text-[var(--gold)] transition-colors duration-300 group-hover:bg-[var(--gold)] group-hover:text-[var(--navy)]">
              <Icon className="h-7 w-7" strokeWidth={1.75} />
            </span>
            <h3 className="mt-6 font-serif text-xl text-[var(--navy)]">{service.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
              {service.summary}
            </p>
            <Link
              href="/services"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--navy)] transition-colors hover:text-[var(--gold)]"
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
