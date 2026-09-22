import { ArrowRight, ShieldCheck } from 'lucide-react'
import { LinkButton } from '@/components/link-button'

export function HomeHero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      <img
        src="/images/hero-maritime.png"
        alt="Military patrol vessel at sea during blue hour"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-deep)] via-[var(--navy-deep)]/85 to-[var(--navy)]/40" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-28 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
        <span className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-[var(--brand-teal)]/40 bg-[var(--brand-teal)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-teal)]">
  <ShieldCheck className="h-4 w-4" />
  Government-Grade Solutions
</span>
          <h1
            className="mt-6 animate-fade-up text-balance font-serif text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl"
            style={{ animationDelay: '80ms' }}
          >
            Securing Nations, Waters &amp; Critical Assets
          </h1>
          <p
            className="mt-6 max-w-xl animate-fade-up text-pretty text-lg leading-relaxed text-white/75"
            style={{ animationDelay: '160ms' }}
          >
            Elgan Integrated Services Limited is a Nigerian company specialising in security and defence engineering, maritime protection, and strategic consultancy. Headquartered in Apapa, Lagos,Nigeria’s principal maritime hub. We deliver high-quality, technically rigorous solutions that protect personnel, vessels, and critical national infrastructure
          </p>
          <div
            className="mt-9 flex animate-fade-up flex-col gap-4 sm:flex-row"
            style={{ animationDelay: '240ms' }}
          >
            <LinkButton href="/services" className="bg-[var(--brand-teal)] text-white hover:opacity-90">
              Explore Services
              <ArrowRight />
            </LinkButton>
            <LinkButton href="/projects" variant="outline-light">
              View Our Projects
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  )
}
