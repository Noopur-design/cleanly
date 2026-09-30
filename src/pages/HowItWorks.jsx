import { useState } from 'react'
import { ChevronRight, MapPin, Search } from 'lucide-react'
import useReveal from '../hooks/useReveal'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import WhyChoose from '../components/WhyChoose'
import FaqAccordion from '../components/FaqAccordion'
import CtaBanner from '../components/CtaBanner'
import Icon from '../components/Icon'
import Button from '../components/Button'
import { processSteps, faqCategories, images } from '../data/site'

const bigSteps = [
  { n: 1, img: images.heroBasket, title: 'Schedule a Pickup', desc: 'Book online or call us to schedule a convenient pickup time at your doorstep.' },
  { n: 2, img: images.staff, title: 'We Clean Your Clothes', desc: 'Our experts carefully clean, wash, dry and iron your clothes using premium products and advanced methods.' },
  { n: 3, img: images.foldedStack, title: 'Get Fresh Clothes Delivered', desc: 'Sit back and relax while we deliver your fresh, clean and perfectly cared for clothes to your doorstep.' },
]

const processHighlights = [
  { icon: 'Users', title: 'Safe & Hygienic Cleaning' },
  { icon: 'ShieldCheck', title: 'Care for All Fabric Types' },
  { icon: 'Sparkles', title: 'Professional Handling' },
  { icon: 'Leaf', title: 'Eco-Friendly Products' },
  { icon: 'Clock', title: 'Quick Turnaround' },
  { icon: 'BadgeCheck', title: '100% Customer Satisfaction' },
]

export default function HowItWorks() {
  useReveal()
  const [location, setLocation] = useState('')
  const [checked, setChecked] = useState(false)
  const faqs = faqCategories.flatMap((c) => c.items).slice(0, 8)

  return (
    <>
      <PageHero
        crumb="How It Works"
        title="How It"
        highlight="Works"
        subtitle="Getting your laundry done is simple, quick and hassle-free. Just schedule, relax, and let us take care of the rest."
        chips={[
          { icon: 'CalendarClock', title: 'Easy Booking' },
          { icon: 'ShieldCheck', title: 'Safe Handling' },
          { icon: 'Sparkles', title: 'Professional Cleaning' },
          { icon: 'Truck', title: 'On-Time Delivery' },
        ]}
      />

      {/* Big 3 steps */}
      <section className="section">
        <div className="container-px">
          <SectionHeading center eyebrow="The Process" title="Three Simple Steps to Fresh Laundry"
            subtitle="From pickup to delivery, we make laundry care effortless for you." />
          <div className="mt-14 grid items-start gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {bigSteps.map((s, i) => (
              <div key={s.n} className="contents">
                <div data-reveal>
                  <div className="relative overflow-hidden rounded-3xl shadow-card ring-1 ring-ink/5">
                    <img src={s.img} alt={s.title} className="h-52 w-full object-cover" loading="lazy" />
                    <span className="absolute left-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-brand text-sm font-bold text-white ring-4 ring-white">{s.n}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slatey">{s.desc}</p>
                </div>
                {i < bigSteps.length - 1 && (
                  <div className="hidden items-center justify-center pt-20 md:flex">
                    <ChevronRight className="h-7 w-7 text-brand/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed 6-step process */}
      <section className="section bg-sky-soft">
        <div className="container-px">
          <SectionHeading center eyebrow="Behind the Scenes" title="A Closer Look at Our Process"
            subtitle="We follow a professional and hygienic process to ensure the best care for your clothes." />
          <div className="mt-14 grid gap-y-10 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr]">
            {processSteps.map((s, i) => (
              <div key={s.n} className="contents">
                <div data-reveal className="text-center">
                  <div className="relative mx-auto grid h-16 w-16 place-items-center rounded-full bg-white text-brand shadow-soft">
                    <Icon name={s.icon} className="h-7 w-7" />
                    <span className="absolute -left-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-brand text-xs font-bold text-white ring-2 ring-white">{s.n}</span>
                  </div>
                  <h3 className="mt-4 text-sm font-bold">{s.title}</h3>
                  <p className="mx-auto mt-1 max-w-[160px] text-xs leading-relaxed text-slatey">{s.desc}</p>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="hidden items-center justify-center pb-8 md:flex">
                    <ChevronRight className="h-5 w-5 text-brand/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why our process works */}
      <section className="section">
        <div className="container-px grid items-center gap-10 lg:grid-cols-2">
          <div data-reveal>
            <img src={images.towels} alt="Neatly folded laundry"
              className="w-full rounded-3xl object-cover shadow-card ring-1 ring-ink/5" />
          </div>
          <div data-reveal>
            <p className="eyebrow">Why It Works</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Why Our Process Works</h2>
            <p className="mt-4 leading-relaxed text-slatey">
              We combine convenience, technology and expert care to give you the best laundry experience.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {processHighlights.map((h) => (
                <div key={h.title} className="flex items-center gap-3 rounded-2xl bg-sky px-4 py-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-brand">
                    <Icon name={h.icon} className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-ink">{h.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service area checker */}
      <section className="section bg-sky-soft">
        <div className="container-px">
          <div className="grid items-center gap-8 rounded-3xl bg-white p-7 shadow-card ring-1 ring-ink/5 md:grid-cols-[1.2fr_1fr] md:p-10">
            <div data-reveal>
              <p className="eyebrow">Service Areas</p>
              <h2 className="mt-3 text-2xl font-bold md:text-3xl">We Pickup &amp; Deliver Across Your City</h2>
              <p className="mt-3 text-slatey">Enjoy hassle-free laundry service at your doorstep. Check if we service your area.</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <div className="flex flex-1 items-center gap-2 rounded-xl border border-ink/10 px-4">
                  <MapPin className="h-4 w-4 text-brand" />
                  <input value={location} onChange={(e) => { setLocation(e.target.value); setChecked(false) }}
                    placeholder="Enter your location"
                    className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-slatey/60" />
                </div>
                <button onClick={() => setChecked(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand">
                  <Search className="h-4 w-4" /> Check Availability
                </button>
              </div>
              {checked && (
                <p className="mt-3 text-sm font-medium text-brand">
                  {location.trim()
                    ? `Great news — we service “${location.trim()}”! Book a pickup to get started.`
                    : 'Please enter a location to check availability.'}
                </p>
              )}
            </div>
            <div data-reveal className="grid gap-3">
              {['Wide Service Network', 'On-Time Pickup & Delivery', 'Real-Time Updates', 'Trusted & Secure Service'].map((t) => (
                <div key={t} className="flex items-center gap-3 rounded-xl bg-sky px-4 py-3 text-sm font-medium text-ink">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-brand">
                    <Icon name="ShieldCheck" className="h-4 w-4" />
                  </span>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="section">
        <div className="container-px">
          <SectionHeading eyebrow="Why Choose Us" title="More Than Just a Laundry Service" />
          <div className="mt-10"><WhyChoose /></div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-sky-soft">
        <div className="container-px">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions"
            subtitle="Find quick answers to common questions about our process." />
          <div className="mt-10"><FaqAccordion items={faqs} columns /></div>
        </div>
      </section>

      <div className="py-20"><CtaBanner variant="dark" title="Ready to Experience Hassle-Free Laundry?"
        subtitle="Schedule your pickup today and enjoy fresh, clean clothes without leaving your home." /></div>
    </>
  )
}
