import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Marcellus } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const marcellus = Marcellus({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'ELGAN Integrated Services Limited | Security, Defence & Maritime Engineering',
    template: '%s | ELGAN Integrated Services Limited',
  },
  description:
    'ELGAN Integrated Services Limited delivers government-grade maritime security engineering, defence equipment supply, secure document production, environmental consultancy, and strategic advisory services.',
  keywords: [
    'maritime security',
    'defence equipment',
    'security document production',
    'environmental consultancy',
    'strategic advisory',
    'NIMASA',
    'anti-ballistic shields',
  ],
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#062b52',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${marcellus.variable} bg-background`}>
      <body className="font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
