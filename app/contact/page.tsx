import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ContactForm } from '@/components/contact-form'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact ELGAN Integrated Services Limited to discuss maritime security engineering, defence supply, secure document production, and strategic advisory requirements.',
}

const details = [
  {
    icon: MapPin,
    title: 'Head Office',
    lines: ['10,Pelewura Crescent, Apapa, Lagos, Nigeria'],
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+234 706 1536 920'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['info@elganintegrated.com'],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: ['Mon – Fri: 8:00 – 18:00', 'Sat: 9:00 – 14:00'],
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's discuss your requirements"
        description="Whether you represent a government agency, the military, a maritime organization, or an energy operator, our specialists are ready to help."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <Reveal>
                <h2 className="font-serif text-2xl text-[var(--brand-teal)">Get in touch</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Reach out through any of the channels below or complete the form and our team will
                  respond promptly and in confidence.
                </p>
              </Reveal>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {details.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <Reveal
                      key={item.title}
                      delay={i * 80}
                      className="rounded-lg border border-border bg-card p-6"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-md bg-[var(--brand-teal)] text-white">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <h3 className="mt-4 font-serif text-base text-white">
                        {item.title}
                      </h3>
                      <div className="mt-1 space-y-0.5">
                        {item.lines.map((line) => (
                          <p key={line} className="text-sm text-muted-foreground">
                            {line}
                          </p>
                        ))}
                      </div>
                    </Reveal>
                  )
                })}
              </div>
            </div>

            <div className="lg:col-span-3">
              <Reveal>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
