import { projects as allProjects } from '@/lib/content'
import { Reveal } from '@/components/reveal'

export function ProjectsGrid({ limit }: { limit?: number }) {
  const items = limit ? allProjects.slice(0, limit) : allProjects
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((project, i) => (
        <Reveal
          key={project.slug}
          as="article"
          delay={i * 80}
          className="group relative overflow-hidden rounded-lg border border-border bg-card"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={project.image || '/placeholder.svg'}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/90 via-[var(--navy-deep)]/20 to-transparent" />
            <span className="absolute left-5 top-5 rounded-full bg-[var(--gold)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--navy)]">
              {project.category}
            </span>
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
                {project.client}
              </p>
              <h3 className="mt-1 font-serif text-xl text-white">{project.title}</h3>
            </div>
          </div>
          <p className="p-6 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
        </Reveal>
      ))}
    </div>
  )
}
