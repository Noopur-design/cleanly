import { useState } from 'react'
import { Check } from 'lucide-react'
import useReveal from '../hooks/useReveal'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import HowItWorksSteps from '../components/HowItWorksSteps'
import WhyChoose from '../components/WhyChoose'
import PricingCard from '../components/PricingCard'
import OfferBanner from '../components/OfferBanner'
import FaqAccordion from '../components/FaqAccordion'
import CtaBanner from '../components/CtaBanner'
import Icon from '../components/Icon'
import Button from '../components/Button'
import { services, plans, faqCategories } from '../data/site'

const filters = [
  { key: 'all', label: 'All Services' },
  { key: 'clothes', label: 'Clothing', slugs: ['washing-folding', 'dry-cleaning', 'ironing', 'saree-ethnic', 'express-laundry'] },
  { key: 'home', label: 'Home & Bedding', slugs: ['bedding-curtains', 'towel-linen'] },
  { key: 'special', label: 'Specialty', slugs: ['shoe-cleaning', 'saree-ethnic'] },
]

export default function Services() {
  useReveal()
  const [active, setActive] = useState('all')
  const current = filters.find((f) => f.key === active)
  const shown = active === 'all' ? services : services.filter((s) => current.slugs.includes(s.slug))
  const faqs = faqCategories[1].items

  return (
    <>
      <PageHero
        crumb="Services"
        title="Our"
        highlight="Services"
        subtitle="Professional laundry and dry cleaning services designed to keep your clothes fresh, clean and perfectly cared for."
        chips={[
          { icon: 'ShieldCheck', title: 'Premium Fabric Care' },
          { icon: 'Leaf', title: 'Hygienic Cleaning' },
          { icon: 'Truck', title: 'Doorstep Pickup' },
          { icon: 'Clock', title: 'Quick Turnaround' },
        ]}
      />

      {/* Filters + grid */}
      <section className="section">
        <div className="container-px">
          <SectionHeading eyebrow="Our Services" title="Complete Laundry Care for Every Need"
            subtitle="From everyday essentials to special-care garments, we offer a wide range of laundry services with professional care and advanced cleaning technology." />

          <div data-reveal className="mt-8 flex flex-wrap gap-2.5">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  active === f.key ? 'bg-brand text-white shadow-soft' : 'bg-sky text-ink/70 hover:bg-brand/10 hover:text-brand'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {shown.map((s) => (
              <article key={s.slug} data-reveal className="group card overflow-hidden hover:-translate-y-1.5 hover:shadow-card-hover">
                <div className="relative h-48 overflow-hidden">
                  <img src={s.image} alt={s.title} loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-brand shadow-soft">
                    {s.price} {s.unit}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-sky text-brand">
                      <Icon name={s.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-bold">{s.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slatey">{s.desc}</p>
                  <ul className="mt-4 grid grid-cols-2 gap-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-1.5 text-xs text-ink/70">
                        <Check className="h-3.5 w-3.5 shrink-0 text-brand" strokeWidth={3} /> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5">
                    <Button to={`/?service=${encodeURIComponent(s.title)}#book`} variant="outline" className="w-full">Book This Service</Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-sky-soft">
        <div className="container-px">
          <SectionHeading center eyebrow="How It Works" title="Simple Steps, Cleaner Clothes"
            subtitle="Get your laundry done in just a few easy steps." />
          <div className="mt-14"><HowItWorksSteps /></div>
        </div>
      </section>

      {/* Why choose */}
      <section className="section">
        <div className="container-px">
          <SectionHeading eyebrow="Why Choose Us" title="More Than Just a Laundry Service" />
          <div className="mt-10"><WhyChoose /></div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section bg-sky-soft">
        <div className="container-px">
          <SectionHeading center eyebrow="Pricing" title="Transparent Pricing for Every Need" />
          <div className="mt-10 grid items-start gap-6 md:grid-cols-3">
            {plans.map((p) => <PricingCard key={p.name} plan={p} />)}
          </div>
        </div>
      </section>

      <div className="py-16"><OfferBanner /></div>

      {/* FAQ */}
      <section className="section pt-0">
        <div className="container-px">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="mt-10"><FaqAccordion items={faqs} columns /></div>
        </div>
      </section>

      <div className="pb-20"><CtaBanner /></div>
    </>
  )
}
