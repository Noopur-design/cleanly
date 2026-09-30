import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import Icon from './Icon'
import { images } from '../data/site'

// Interior page hero with breadcrumb, heading, and feature chips.
export default function PageHero({ crumb, title, highlight, subtitle, chips = [], image = images.heroBasket }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky to-white">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
      <div className="container-px relative grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2">
        <div data-reveal>
          <nav className="flex items-center gap-1.5 text-sm text-slatey">
            <Link to="/" className="hover:text-brand">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="font-medium text-ink">{crumb}</span>
          </nav>
          <h1 className="mt-4 text-4xl font-bold leading-[1.1] md:text-5xl lg:text-[56px]">
            {title} {highlight && <span className="text-brand">{highlight}</span>}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-slatey md:text-lg">{subtitle}</p>
          {chips.length > 0 && (
            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
              {chips.map((c) => (
                <li key={c.title} className="flex items-center gap-2 text-sm font-medium text-ink">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-brand shadow-soft">
                    <Icon name={c.icon} className="h-4 w-4" />
                  </span>
                  {c.title}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div data-reveal className="relative">
          <div className="absolute -left-4 top-6 hidden rotate-[-8deg] font-heading text-brand/70 lg:block">
            <span className="text-lg italic">Fresh Clothes, Happier Days</span>
          </div>
          <img
            src={image}
            alt="Freshly cleaned and folded laundry"
            loading="eager"
            className="ml-auto w-full max-w-md rounded-3xl object-cover shadow-card ring-1 ring-ink/5 lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  )
}
