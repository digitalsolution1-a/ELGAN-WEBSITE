import { ArrowRight } from 'lucide-react'
import { LinkButton } from '@/components/link-button'
import { Reveal } from '@/components/reveal'

export function CtaSection() {
  return (
    <section className="relative overflow-hidden">
      <img
        src="/images/cta-coast.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[var(--navy-deep)]/85" />
      <div className="relative mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--gold)]">
            <span className="h-px w-8 bg-[var(--gold)]" />
            Partner With ELGAN
            <span className="h-px w-8 bg-[var(--gold)]" />
          </span>
          <h2 className="mx-auto mt-6 max-w-3xl text-balance font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            Ready to secure your mission-critical operations?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty leading-relaxed text-white/70">
            Speak with our specialists about maritime security engineering, defence supply, and
            strategic advisory tailored to your requirements.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <LinkButton href="/contact" variant="gold">
              Request a Consultation
              <ArrowRight />
            </LinkButton>
            <LinkButton href="/services" variant="outline-light">
              Explore Our Services
            </LinkButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
