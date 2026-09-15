import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
      )}
    >
      <span
        className={cn(
          'inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--gold)]',
          align === 'center' && 'justify-center',
        )}
      >
        <span className="h-px w-8 bg-[var(--gold)]" />
        {eyebrow}
      </span>
      <h2
        className={cn(
          'mt-5 text-balance font-serif text-3xl leading-tight sm:text-4xl',
          tone === 'dark' ? 'text-[var(--navy)]' : 'text-white',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-pretty leading-relaxed',
            tone === 'dark' ? 'text-muted-foreground' : 'text-white/70',
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}
