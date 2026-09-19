'use client'

import { useState, type FormEvent } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import { services } from '@/lib/content'

const inputClass =
  'w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/30'
const labelClass = 'mb-1.5 block text-sm font-medium text-[var(--navy)]'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-card px-8 py-16 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--gold)]/15 text-[var(--gold)]">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="mt-6 font-serif text-2xl text-[var(--navy)]">Message received</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Thank you for reaching out to ELGAN Integrated Services. A member of our team will respond
          to your enquiry shortly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 inline-flex h-11 items-center justify-center rounded-md border border-[var(--navy)]/20 px-6 text-sm font-semibold text-[var(--navy)] transition-colors hover:bg-[var(--navy)] hover:text-white"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-border bg-card p-6 sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name
          </label>
          <input id="name" name="name" type="text" required className={inputClass} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="organization" className={labelClass}>
            Organization
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            className={inputClass}
            placeholder="Agency or company"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={inputClass}
            placeholder="+234 ..."
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="service" className={labelClass}>
          Service of Interest
        </label>
        <select id="service" name="service" className={inputClass} defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
          <option value="other">Other / General Enquiry</option>
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your requirements"
        />
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[var(--gold)] px-6 text-sm font-semibold text-[var(--navy)] transition-colors hover:bg-[var(--brand-teal)]/90 sm:w-auto"
      >
        <Send className="h-4 w-4" />
        Send Message
      </button>
    </form>
  )
}
