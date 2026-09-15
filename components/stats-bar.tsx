import { stats } from '@/lib/content'
import { Reveal } from '@/components/reveal'

export function StatsBar() {
  return (
    <section className="bg-[var(--navy)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 divide-y divide-white/10 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 80}
              className="flex flex-col items-center px-6 py-10 text-center"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-serif text-4xl text-[var(--gold)] lg:text-5xl">{stat.value}</dd>
              <p className="mt-2 text-sm uppercase tracking-wide text-white/70">{stat.label}</p>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
