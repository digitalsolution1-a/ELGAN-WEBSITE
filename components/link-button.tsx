import Link from 'next/link'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'gold' | 'navy' | 'outline-light' | 'outline-dark'

const variants: Record<Variant, string> = {
  gold: 'bg-[var(--brand-teal)] text-white hover:bg-[var(--brand-teal)]/90',
  navy: 'bg-[var(--brand-red)] text-white hover:bg-[var(--brand-red)]/90',
  'outline-light':
    'border border-white/30 text-white hover:bg-white/10',
  'outline-dark':
    'border border-[var(--brand-teal)]/20 text-[var(--brand-teal)] hover:bg-[var(--brand-teal)] hover:text-white',
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
        'inline-flex h-12 items-center justify-center gap-2 rounded-md px-7 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-teal)] focus-visible:ring-offset-2 [&_svg]:h-4 [&_svg]:w-4',
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  )
}
