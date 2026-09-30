import { FileText, UserPlus, Clock } from 'lucide-react'
import Button from './Button'
import { images } from '../data/site'

// The "Get 20% OFF on Your First Order" promo band.
export default function OfferBanner() {
  return (
    <section data-reveal className="container-px">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-ink to-brand-dark px-6 py-10 text-white md:px-12 md:py-12">
        <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
        <div className="relative grid items-center gap-6 md:gap-8 lg:grid-cols-[auto_1fr_auto]">
          <img
            src={images.foldedStack}
            alt="Folded laundry"
            loading="lazy"
            className="hidden h-24 w-32 rounded-2xl object-cover ring-2 ring-white/20 sm:block"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/70 sm:text-sm">Special Offer</p>
            <h3 className="mt-1.5 text-[26px] font-bold leading-tight text-white sm:text-3xl md:text-4xl">
              Get <span className="text-brand-light">20% OFF</span> on Your First Order
            </h3>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white sm:flex-row sm:flex-wrap sm:gap-x-8">
              <span className="flex items-center gap-2"><FileText className="h-4 w-4 shrink-0 text-brand-light" /> Use Code CLEAN20</span>
              <span className="flex items-center gap-2"><UserPlus className="h-4 w-4 shrink-0 text-brand-light" /> Valid for New Customers</span>
              <span className="flex items-center gap-2"><Clock className="h-4 w-4 shrink-0 text-brand-light" /> Limited Time Offer</span>
            </div>
          </div>
          <Button to="/contact" variant="white" size="lg" className="w-full justify-center lg:w-auto">Claim Offer</Button>
        </div>
      </div>
    </section>
  )
}
