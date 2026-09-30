import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Download } from 'lucide-react'
import useReveal from '../hooks/useReveal'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import PricingCard from '../components/PricingCard'
import ComparePlans from '../components/ComparePlans'
import FaqAccordion from '../components/FaqAccordion'
import CtaBanner from '../components/CtaBanner'
import Icon from '../components/Icon'
import Button from '../components/Button'
import {
  plans, serviceWisePricing, addOns, faqCategories, images,
} from '../data/site'

export default function Pricing() {
  useReveal()
  const [selected, setSelected] = useState('Standard')
  const [mode, setMode] = useState('kg') // kg | monthly (visual toggle)
  const faqs = faqCategories[2].items

  return (
    <>
      <PageHero
        crumb="Pricing"
        title="Simple Prices."
        highlight="Superior Care."
        subtitle="High-quality laundry and dry cleaning services at transparent and affordable prices. No hidden charges, just fresh and clean clothes."
        chips={[
          { icon: 'Wallet', title: 'Transparent Pricing' },
          { icon: 'ShieldCheck', title: 'Premium Fabric Care' },
          { icon: 'Truck', title: 'Free Pickup & Delivery' },
          { icon: 'BadgeCheck', title: 'Satisfaction Guaranteed' },
        ]}
        image={images.towels}
      />

      {/* Plans */}
      <section className="section">
        <div className="container-px">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Plans" title="Our Pricing Plans"
              subtitle="Choose a plan that suits your laundry needs. All plans include free pickup and delivery." />
            <div data-reveal className="inline-flex rounded-full bg-sky p-1 text-sm font-semibold">
              {[['monthly', 'Monthly Plans'], ['kg', 'Per Kg Pricing']].map(([k, label]) => (
                <button key={k} onClick={() => setMode(k)}
                  className={`rounded-full px-4 py-2.5 transition ${mode === k ? 'bg-ink text-white' : 'text-ink/60'}`}>
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-10 grid items-start gap-6 md:grid-cols-3">
            {plans.map((p) => (
              <PricingCard key={p.name} plan={p} selected={selected === p.name} onSelect={() => setSelected(p.name)} />
            ))}
          </div>
        </div>
      </section>

      {/* Service-wise pricing */}
      <section className="section bg-sky-soft pt-0 md:pt-0">
        <div className="container-px pt-16 md:pt-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Per Service" title="Service Wise Pricing"
              subtitle="Flexible pricing for individual laundry services." />
            <button className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline">
              <Download className="h-4 w-4" /> Download Price List (PDF)
            </button>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {serviceWisePricing.map((s) => (
              <div key={s.title} data-reveal className="card p-5 text-center hover:-translate-y-1">
                <h3 className="text-sm font-bold text-ink">{s.title}</h3>
                <p className="mt-3 text-xl font-bold text-brand">{s.price}
                  <span className="text-xs font-normal text-slatey"> {s.unit}</span></p>
                <Link to="/contact" className="mt-3 inline-block text-xs font-semibold text-brand hover:underline">View Details →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section">
        <div className="container-px">
          <SectionHeading eyebrow="Extras" title="Add-On Services"
            subtitle="Additional services to give your clothes extra care." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {addOns.map((a) => (
              <div key={a.title} data-reveal className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-ink/5 transition hover:shadow-card">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-sky text-brand">
                  <Icon name={a.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-ink">{a.title}</h3>
                  <p className="text-sm font-semibold text-brand">{a.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare + offer */}
      <section className="section bg-sky-soft">
        <div className="container-px grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <SectionHeading eyebrow="Comparison" title="Compare Plans" subtitle="See what's included in each plan." />
            <ComparePlans />
          </div>

          <div data-reveal className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-ink/5">
            <img src={images.foldedStack} alt="Folded laundry" className="h-40 w-full object-cover" />
            <div className="p-7">
              <p className="text-sm font-semibold uppercase tracking-wider text-slatey">Special Offer</p>
              <h3 className="mt-1 text-3xl font-bold">Get <span className="text-brand">20% OFF</span></h3>
              <p className="text-ink/70">on Your First Order</p>
              <div className="mt-5"><Button to="/contact">Claim Offer</Button></div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs text-slatey">
                <div><Icon name="FileText" className="mx-auto mb-1 h-4 w-4 text-brand" />Use Code CLEAN20</div>
                <div><Icon name="Users" className="mx-auto mb-1 h-4 w-4 text-brand" />New Customers</div>
                <div><Icon name="Clock" className="mx-auto mb-1 h-4 w-4 text-brand" />Limited Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-px">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="mt-10"><FaqAccordion items={faqs} columns /></div>
        </div>
      </section>

      <div className="pb-20"><CtaBanner variant="dark" title="Ready to Get Started?"
        subtitle="Book your pickup today and experience professional laundry care at the best prices." /></div>
    </>
  )
}
