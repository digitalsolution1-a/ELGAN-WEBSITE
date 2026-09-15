import Link from 'next/link'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'gold' | 'navy' | 'outline-light' | 'outline-dark'

const variants: Record<Variant, string> = {
  gold: 'bg-[var(--gold)] text-[var(--navy)] hover:bg-[var(--gold)]/90',
  navy: 'bg-[var(--navy)] text-white hover:bg-[var(--navy)]/90',
  'outline-light':
    'border border-white/30 text-white hover:bg-white/10',
  'outline-dark':
    'border border-[var(--navy)]/20 text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white',
}

interface LinkButtonProps {
  href: string
  children: ReactNode
  variant?: Variant
  className?: string
}

export function LinkButton({ href, children, variant = 'gold', className }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex h-12 items-center justify-center gap-2 rounded-md px-7 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 [&_svg]:h-4 [&_svg]:w-4',
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  )
}
