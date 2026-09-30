import { Check, ChevronRight } from 'lucide-react'
import useReveal from '../hooks/useReveal'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Testimonials from '../components/Testimonials'
import CtaBanner from '../components/CtaBanner'
import Icon from '../components/Icon'
import { stats, images } from '../data/site'

const mvv = [
  { icon: 'Target', title: 'Our Mission', text: 'To provide high-quality laundry and dry cleaning services that make everyday life easier, healthier and more convenient.' },
  { icon: 'Eye', title: 'Our Vision', text: 'To be the most trusted and preferred laundry service provider in every home and business across India.' },
  { icon: 'Heart', title: 'Our Values', list: ['Customer First', 'Quality & Care', 'Trust & Transparency', 'Sustainability', 'Continuous Improvement'] },
]

const differences = [
  { icon: 'Sparkles', title: 'Professional Cleaning', text: 'Advanced equipment and expert care.' },
  { icon: 'Truck', title: 'Doorstep Convenience', text: 'Pickup and delivery at your doorstep.' },
  { icon: 'Leaf', title: 'Safe & Eco-Friendly', text: 'Gentle on fabrics, better for the planet.' },
  { icon: 'Wallet', title: 'Affordable Pricing', text: 'Premium service without the premium cost.' },
  { icon: 'Clock', title: 'Quick Turnaround', text: 'Fresh clothes, delivered on time.' },
  { icon: 'ShieldCheck', title: 'Fabric Care Specialists', text: 'Special care for all fabric types.' },
]

const process = [
  { icon: 'ShoppingBag', title: 'Pickup', desc: 'We collect your laundry' },
  { icon: 'WashingMachine', title: 'Cleaning', desc: 'Expert cleaning with care' },
  { icon: 'Flame', title: 'Finishing', desc: 'Perfect ironing and detailing' },
  { icon: 'ShieldCheck', title: 'Quality Check', desc: 'Inspection for best results' },
  { icon: 'Truck', title: 'Delivery', desc: 'Fresh clothes delivered to you' },
]

export default function About() {
  useReveal()
  return (
    <>
      <PageHero
        crumb="About Us"
        title="About"
        highlight="Cleanly"
        subtitle="We're more than just a laundry service — we're your everyday care partner, committed to making life simpler, cleaner and fresher."
        chips={[
          { icon: 'ShieldCheck', title: 'Trusted Local Service' },
          { icon: 'Sparkles', title: 'Professional Care' },
          { icon: 'Leaf', title: 'Eco-Friendly Products' },
          { icon: 'Users', title: 'Customer First' },
        ]}
      />

      {/* Story */}
      <section className="section">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <div data-reveal className="relative">
            <img src={images.staff} alt="Cleanly team at work"
              className="w-full rounded-3xl object-cover shadow-card ring-1 ring-ink/5" />
            <div className="absolute -bottom-5 -right-3 rounded-2xl bg-white px-5 py-3 shadow-card ring-1 ring-ink/5">
              <div className="text-2xl font-bold text-brand">5,000+</div>
              <div className="text-xs text-slatey">Happy Customers</div>
            </div>
          </div>
          <div data-reveal>
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">A Cleaner Tomorrow Starts at Home</h2>
            <p className="mt-4 leading-relaxed text-slatey">
              Cleanly was founded with a simple mission — to make professional laundry and dry cleaning
              accessible, reliable and convenient for everyone. What started as a small local service has now
              grown into a trusted brand, serving thousands of happy customers across the city.
            </p>
            <p className="mt-4 leading-relaxed text-slatey">
              We combine modern technology, expert care, and a customer-first approach to give your clothes
              the attention they deserve, so you can focus on what matters most.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl bg-sky p-4 text-center">
                  <div className="text-xl font-bold text-brand">{s.value}</div>
                  <div className="mt-1 text-xs text-slatey">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section bg-sky-soft">
        <div className="container-px">
          <SectionHeading eyebrow="Our Mission, Vision & Values" title="Built on Care. Driven by Quality." />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {mvv.map((m) => (
              <div key={m.title} data-reveal className="card p-7">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-sky text-brand">
                  <Icon name={m.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{m.title}</h3>
                {m.text && <p className="mt-2 text-sm leading-relaxed text-slatey">{m.text}</p>}
                {m.list && (
                  <ul className="mt-3 space-y-2">
                    {m.list.map((l) => (
                      <li key={l} className="flex items-center gap-2 text-sm text-ink/80">
                        <Check className="h-4 w-4 text-brand" strokeWidth={3} /> {l}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Cleanly Difference */}
      <section className="section">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <div data-reveal>
            <img src={images.worker} alt="Cleanly professionals"
              className="w-full rounded-3xl object-cover shadow-card ring-1 ring-ink/5" />
          </div>
          <div data-reveal>
            <p className="eyebrow">Why Choose Cleanly</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">The Cleanly Difference</h2>
            <p className="mt-4 leading-relaxed text-slatey">
              We go beyond just cleaning clothes. Our focus is on quality, care and convenience, ensuring
              every garment is treated with the right attention and advanced techniques.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {differences.map((d) => (
                <div key={d.title} className="flex gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sky text-brand">
                    <Icon name={d.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-ink">{d.title}</h3>
                    <p className="text-xs leading-relaxed text-slatey">{d.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process strip */}
      <section className="section bg-sky-soft">
        <div className="container-px">
          <div className="rounded-3xl bg-white p-7 shadow-card ring-1 ring-ink/5 md:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_2fr]">
              <div data-reveal>
                <p className="eyebrow">Our Process</p>
                <h2 className="mt-3 text-2xl font-bold md:text-3xl">From Your Doorstep to Fresh Clothes</h2>
              </div>
              <div data-reveal className="grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
                {process.map((p, i) => (
                  <div key={p.title} className="relative text-center">
                    <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-sky text-brand">
                      <Icon name={p.icon} className="h-6 w-6" />
                    </div>
                    <h3 className="mt-3 text-sm font-bold">{p.title}</h3>
                    <p className="mt-1 text-xs text-slatey">{p.desc}</p>
                    {i < process.length - 1 && (
                      <ChevronRight className="absolute -right-2 top-4 hidden h-5 w-5 text-brand/30 lg:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container-px">
          <SectionHeading eyebrow="Testimonials" title="What Our Customers Say" />
          <div className="mt-12"><Testimonials /></div>
        </div>
      </section>

      <div className="pb-20"><CtaBanner variant="dark" title="Join Thousands of Happy Customers"
        subtitle="Book your pickup today and experience the Cleanly difference." /></div>
    </>
  )
}
