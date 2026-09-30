import { useState } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../data/site'

function Stars({ n }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < n ? 'fill-amber-400 text-amber-400' : 'text-ink/15'}`}
        />
      ))}
    </div>
  )
}

export function TestimonialCard({ t }) {
  return (
    <article data-reveal className="relative card p-6">
      <Quote className="absolute right-5 top-5 h-8 w-8 text-sky" />
      <div className="flex items-center gap-3">
        <img src={t.avatar} alt={t.name} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
        <div>
          <h4 className="font-semibold text-ink">{t.name}</h4>
          <p className="text-xs text-slatey">{t.city}</p>
        </div>
      </div>
      <div className="mt-3"><Stars n={t.rating} /></div>
      <p className="mt-3 text-sm leading-relaxed text-slatey">“{t.text}”</p>
    </article>
  )
}

// Carousel that shows 3 (desktop) / 1 (mobile) testimonials with paging.
export default function Testimonials({ compact = false }) {
  const perView = 3
  const pages = Math.ceil(testimonials.length / perView)
  const [page, setPage] = useState(0)
  const go = (d) => setPage((p) => (p + d + pages) % pages)
  const visible = testimonials.slice(page * perView, page * perView + perView)

  if (compact) {
    return (
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.slice(0, 3).map((t) => (
          <TestimonialCard key={t.name} t={t} />
        ))}
      </div>
    )
  }

  return (
    <div>
      <div className="grid gap-6 md:grid-cols-3">
        {visible.map((t) => (
          <TestimonialCard key={t.name} t={t} />
        ))}
      </div>
      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          onClick={() => go(-1)}
          aria-label="Previous testimonials"
          className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 text-ink transition hover:border-brand hover:text-brand"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Go to page ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${i === page ? 'w-6 bg-brand' : 'w-2.5 bg-ink/15'}`}
            />
          ))}
        </div>
        <button
          onClick={() => go(1)}
          aria-label="Next testimonials"
          className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 text-ink transition hover:border-brand hover:text-brand"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
