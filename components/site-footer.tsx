import Link from 'next/link'
import { Shield, MapPin, Mail, Phone } from 'lucide-react'

const columns = [
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About Us' },
      { href: '/services', label: 'Services' },
      { href: '/projects', label: 'Projects' },
      { href: '/gallery', label: 'Gallery' },
    ],
  },
  {
    title: 'Services',
    links: [
      { href: '/services', label: 'Maritime Security Engineering' },
      { href: '/services', label: 'Defence Equipment Supply' },
      { href: '/services', label: 'Security Document Production' },
      { href: '/services', label: 'Strategic Advisory' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-[var(--navy-deep)] text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--gold)] text-[var(--navy)]">
                <Shield className="h-5 w-5" strokeWidth={2.4} />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-serif text-lg tracking-wide">ELGAN</span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/60">
                  Integrated Services
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Government-grade security, defence, and maritime engineering solutions built on
              precision, integrity, and trust.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-serif text-sm uppercase tracking-[0.2em] text-[var(--gold)]">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-serif text-sm uppercase tracking-[0.2em] text-[var(--gold)]">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
                <span className="text-white/70">
                  Victoria Island, Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[var(--gold)]" />
                <a href="tel:+2340000000000" className="text-white/70 hover:text-white">
                  +234 (0) 000 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-[var(--gold)]" />
                <a href="mailto:info@elgan.com" className="text-white/70 hover:text-white">
                  info@elgan.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} ELGAN Integrated Services Limited. All rights
            reserved.
          </p>
          <p className="uppercase tracking-[0.2em]">Security &middot; Defence &middot; Maritime</p>
        </div>
      </div>
    </footer>
  )
}
