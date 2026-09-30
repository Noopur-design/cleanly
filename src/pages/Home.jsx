import { Link } from 'react-router-dom'
import { Leaf } from 'lucide-react'
import useReveal from '../hooks/useReveal'
import Button from '../components/Button'
import Icon from '../components/Icon'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import HowItWorksSteps from '../components/HowItWorksSteps'
import WhyChoose from '../components/WhyChoose'
import PricingCard from '../components/PricingCard'
import OfferBanner from '../components/OfferBanner'
import Testimonials from '../components/Testimonials'
import FaqAccordion from '../components/FaqAccordion'
import BookingForm from '../components/BookingForm'
import {
  company, images, highlights, services, plans, stats, faqCategories,
} from '../data/site'

export default function Home() {
  useReveal()
  const homeFaqs = faqCategories.flatMap((c) => c.items).slice(0, 6)

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky to-white">
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-brand/10 blur-3xl" />
        <div className="container-px relative grid items-center gap-12 py-14 md:py-20 lg:grid-cols-2">
          <div data-reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-brand shadow-soft">
              <Leaf className="h-3.5 w-3.5" /> Pickup &amp; Delivery at Your Doorstep
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.08] md:text-5xl lg:text-6xl">
              Laundry Made Simple.
              <span className="block text-brand">Life Made Easier.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-slatey md:text-lg">
              Professional laundry and dry cleaning services with convenient pickup and delivery.
              Fresh, clean and perfectly cared for.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/contact" size="lg">Book a Pickup</Button>
              <Button to="/services" variant="outline" size="lg">Explore Services</Button>
            </div>
            <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-3">
              {highlights.map((h) => (
                <li key={h.title} className="flex items-center gap-2 text-sm font-medium text-ink">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-brand shadow-soft">
                    <Icon name={h.icon} className="h-4 w-4" />
                  </span>
                  {h.title}
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal className="relative">
            <div className="absolute -left-2 top-4 z-10 hidden rotate-[-8deg] lg:block">
              <span className="font-heading text-lg italic text-brand/70">Fresh Clothes, Happier Days</span>
            </div>
            <img
              src={images.heroBasket}
              alt="Basket of freshly folded laundry"
              className="ml-auto w-full max-w-md rounded-3xl object-cover shadow-card ring-1 ring-ink/5 lg:max-w-xl"
            />
            <div className="absolute -bottom-5 left-2 flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-card ring-1 ring-ink/5">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-sky text-brand">
                <Leaf className="h-5 w-5" />
              </span>
              <span className="leading-tight">
                <span className="block text-lg font-bold text-ink">100%</span>
                <span className="block text-xs text-slatey">Hygienic &amp; Stain-Free</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container-px">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Our Services" title="Complete Laundry Care for Every Need" />
            <Link to="/services" className="text-sm font-semibold text-brand hover:underline">View All Services →</Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 8).map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section bg-sky-soft">
        <div className="container-px">
          <SectionHeading center eyebrow="How It Works" title="Clean Clothes in 3 Easy Steps"
            subtitle="From pickup to delivery, we make laundry care effortless for you." />
          <div className="mt-14">
            <HowItWorksSteps />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section">
        <div className="container-px">
          <SectionHeading eyebrow="Why Choose Us" title="More Than Just a Laundry Service" />
          <div className="mt-10">
            <WhyChoose />
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="section bg-sky-soft">
        <div className="container-px">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Pricing" title="Simple & Transparent Pricing" />
            <Link to="/pricing" className="text-sm font-semibold text-brand hover:underline">View Detailed Pricing →</Link>
          </div>
          <div className="mt-10 grid items-start gap-6 md:grid-cols-3">
            {plans.map((p) => (
              <PricingCard key={p.name} plan={p} />
            ))}
          </div>
        </div>
      </section>

      {/* OFFER */}
      <div className="py-16 md:py-20">
        <OfferBanner />
      </div>

      {/* ABOUT SNAPSHOT */}
      <section className="section pt-0">
        <div className="container-px grid items-center gap-10 lg:grid-cols-2">
          <div data-reveal className="relative">
            <img src={images.staff} alt="Cleanly professional at work"
              className="w-full rounded-3xl object-cover shadow-card ring-1 ring-ink/5" />
          </div>
          <div data-reveal>
            <p className="eyebrow">About Us</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Your Trusted Laundry Partner</h2>
            <p className="mt-4 leading-relaxed text-slatey">
              At Cleanly, we believe clean clothes make a happier, healthier you. With professional care,
              modern technology, and a customer-first approach, we provide reliable laundry and dry cleaning
              services right at your doorstep.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.slice(0, 3).map((s) => (
                <div key={s.label} className="rounded-2xl bg-sky p-4 text-center">
                  <div className="text-2xl font-bold text-brand">{s.value}</div>
                  <div className="mt-1 text-xs text-slatey">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button to="/about" variant="dark">Learn More About Us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section bg-sky-soft">
        <div className="container-px">
          <SectionHeading center eyebrow="Testimonials" title="What Our Customers Say" />
          <div className="mt-12">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-px">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="mt-10">
            <FaqAccordion items={homeFaqs} columns />
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="book" className="section scroll-mt-24 bg-sky-soft">
        <div className="container-px">
          <SectionHeading eyebrow="Book a Service" title="Schedule Your Pickup"
            subtitle="Fill in your details and our team will confirm your pickup shortly." />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div data-reveal className="card relative z-20 p-6 md:p-8">
              <BookingForm />
            </div>
            <div data-reveal className="relative z-10 flex flex-col gap-6">
              <div className="overflow-hidden rounded-3xl shadow-card ring-1 ring-ink/5">
                <iframe
                  title="Cleanly location"
                  src="https://www.google.com/maps?q=Sector%2045%20Gurgaon&output=embed"
                  className="h-64 w-full border-0"
                  loading="lazy"
                />
              </div>
              <div className="rounded-3xl bg-ink p-6 text-white">
                <h3 className="text-lg font-bold">Get in Touch</h3>
                <ul className="mt-4 space-y-3 text-sm text-white/80">
                  <li><a href={company.phoneHref} className="hover:text-white">{company.phone}</a></li>
                  <li><a href={company.emailHref} className="hover:text-white">{company.email}</a></li>
                  <li>{company.hours}</li>
                </ul>
                <div className="mt-5">
                  <Button href={company.whatsappHref} variant="ghost" target="_blank" rel="noreferrer">
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
