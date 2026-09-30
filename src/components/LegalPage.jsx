import { useEffect, useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import Icon from './Icon'
import Button from './Button'
import { company, images } from '../data/site'

// Reusable legal page: sticky sidebar nav + numbered sections.
export default function LegalPage({ crumb, title, highlight, intro, sections, aside }) {
  useReveal()
  const [active, setActive] = useState(sections[0].id)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [sections])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.offsetTop - 90, behavior: 'smooth' })
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky to-white">
        <div className="container-px grid items-center gap-8 py-14 md:py-16 lg:grid-cols-2">
          <div data-reveal>
            <nav className="flex items-center gap-1.5 text-sm text-slatey">
              <Link to="/" className="hover:text-brand">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="font-medium text-ink">{crumb}</span>
            </nav>
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              {title} {highlight && <span className="text-brand">{highlight}</span>}
            </h1>
            <p className="mt-4 max-w-lg leading-relaxed text-slatey">{intro}</p>
          </div>
          <div data-reveal className="hidden lg:block">
            <img src={images.towels} alt="Folded laundry" className="ml-auto w-full max-w-md rounded-3xl object-cover shadow-card ring-1 ring-ink/5" />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section pt-12">
        <div className="container-px grid gap-10 lg:grid-cols-[260px_1fr]">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:h-max">
            <div className="rounded-3xl bg-ivory p-5 ring-1 ring-ink/5">
              <p className="px-2 text-sm font-bold text-ink">On This Page</p>
              <ul className="mt-3 space-y-1">
                {sections.map((s) => (
                  <li key={s.id}>
                    <button onClick={() => scrollTo(s.id)}
                      className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-sm transition ${
                        active === s.id ? 'bg-white font-semibold text-brand shadow-soft' : 'text-ink/70 hover:bg-white/60'
                      }`}>
                      <Icon name={s.icon} className="h-4 w-4 shrink-0" />
                      {s.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            {aside && (
              <div className="mt-6 rounded-3xl bg-sky p-6 text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white text-brand">
                  <Icon name={aside.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-bold">{aside.title}</h3>
                <p className="mt-2 text-sm text-slatey">{aside.text}</p>
              </div>
            )}
          </aside>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((s, i) => (
              <article key={s.id} id={s.id} data-reveal className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-sky text-sm font-bold text-brand">{i + 1}</span>
                  <div>
                    <h2 className="text-xl font-bold text-ink">{s.title}</h2>
                    <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-slatey">{s.body}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="container-px pb-20">
        <div data-reveal className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-gradient-to-r from-ink to-brand-dark px-6 py-10 text-white md:flex-row md:px-12">
          <div>
            <h2 className="text-2xl font-bold">Still have questions?</h2>
            <p className="mt-1 text-white/70">Our team is here to help. Get in touch anytime.</p>
          </div>
          <Button to="/contact" variant="white" size="lg">Contact Support</Button>
        </div>
        <p className="mt-6 text-center text-xs text-slatey">
          Questions? Email <a href={company.emailHref} className="font-semibold text-brand">{company.email}</a> or call <a href={company.phoneHref} className="font-semibold text-brand">{company.phone}</a>.
        </p>
      </section>
    </>
  )
}
