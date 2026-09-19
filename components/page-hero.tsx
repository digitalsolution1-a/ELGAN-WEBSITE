interface PageHeroProps {
  eyebrow: string
  title: string
  description: string
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--navy)] pt-36 pb-20 text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--brand-teal) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[var(--brand-teal)]/10 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-teal)]">
            <span className="h-px w-8 bg-[var(--brand-teal)]" />
            {eyebrow}
          </span>
          <h1 className="mt-6 text-balance font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/70">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
