'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { LinkButton } from '@/components/link-button'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#F9F9FB]/95 backdrop-blur-md shadow-sm border-b border-neutral-200/60'
          : 'bg-[#F9F9FB]/80 backdrop-blur-sm border-b border-neutral-200/40',
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/Elgan Logo 2.jpg"
            alt="ELGAN Logo"
            width={140}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium tracking-wide text-neutral-700 transition-colors hover:text-neutral-950',
                  active && 'text-neutral-950 font-semibold',
                )}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-[var(--gold)] transition-transform duration-300',
                    active && 'scale-x-100',
                  )}
                />
              </Link>
            )
          })}
        </nav>

        <div className="hidden lg:block">
          <LinkButton href="/contact" variant="gold" className="h-11">
            <Phone />
            Request Consultation
          </LinkButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-neutral-800 lg:hidden hover:bg-neutral-200/50"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-neutral-200 bg-[#F9F9FB] lg:hidden shadow-lg">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6" aria-label="Mobile">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'rounded-md px-4 py-3 text-base font-medium text-neutral-700 transition-colors hover:bg-neutral-200/50 hover:text-neutral-950',
                    active && 'bg-neutral-200/60 text-neutral-950 font-semibold',
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
            <LinkButton href="/contact" variant="gold" className="mt-3">
              Request Consultation
            </LinkButton>
          </nav>
        </div>
      )}
    </header>
  )
}
