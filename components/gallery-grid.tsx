'use client'

import { useEffect, useState } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

interface GalleryItem {
  src: string
  title: string
  category: string
  span?: boolean
}

const items: GalleryItem[] = [
  { src: '/images/project-vessel.png', title: 'Maritime Security Operations', category: 'Operations', span: true },
  { src: '/images/project-shields.png', title: 'Vessel Armor Engineering', category: 'Engineering' },
  { src: '/images/project-shields.png', title: 'Anti-ballistic Gun Shields', category: 'Defence' },
  { src: '/images/offshorewaste.png', title: 'Offshore Infrastructure', category: 'Maritime', span: true },
  { src: '/images/securityprinting.png', title: 'Secure Credentials', category: 'Documents' },
  { src: '/images/elganadvisory.jpeg', title: 'Environmental Survey', category: 'Consultancy' },
  { src: '/images/project-vessel.png', title: 'Patrol Vessel Protection', category: 'Defence' },
]

export function GalleryGrid() {
  const [active, setActive] = useState<number | null>(null)

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') setActive((p) => (p === null ? p : (p + 1) % items.length))
      if (e.key === 'ArrowLeft')
        setActive((p) => (p === null ? p : (p - 1 + items.length) % items.length))
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <>
      <div className="grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item, i) => (
          <Reveal
            key={item.src}
            delay={(i % 4) * 70}
            className={cn(item.span && 'sm:col-span-2', 'h-full')}
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group relative h-full w-full overflow-hidden rounded-lg text-left"
              aria-label={`View ${item.title}`}
            >
              <img
                src={item.src || '/placeholder.svg'}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/90 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
              <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--gold)] text-[var(--navy)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ZoomIn className="h-4 w-4" />
              </span>
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--gold)]">
                  {item.category}
                </p>
                <p className="mt-1 font-serif text-sm text-white">{item.title}</p>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[var(--navy-deep)]/95 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={items[active].title}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setActive((p) => (p === null ? p : (p - 1 + items.length) % items.length))
            }}
            className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-8"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <figure className="max-h-[85vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={items[active].src || '/placeholder.svg'}
              alt={items[active].title}
              className="max-h-[78vh] w-full rounded-lg object-contain"
            />
            <figcaption className="mt-4 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
                {items[active].category}
              </p>
              <p className="mt-1 font-serif text-lg text-white">{items[active].title}</p>
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setActive((p) => (p === null ? p : (p + 1) % items.length))
            }}
            className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  )
}
