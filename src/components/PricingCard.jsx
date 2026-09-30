import { Check } from 'lucide-react'
import Button from './Button'

// Pricing plan card. Supports "popular" highlight and selectable state.
export default function PricingCard({ plan, selected, onSelect }) {
  const isPopular = plan.popular
  return (
    <article
      data-reveal
      onClick={onSelect}
      className={`relative flex cursor-pointer flex-col rounded-3xl p-7 transition duration-300 ${
        isPopular
          ? 'bg-white shadow-card-hover ring-2 ring-brand'
          : 'bg-white shadow-card ring-1 ring-ink/5 hover:-translate-y-1.5 hover:shadow-card-hover'
      } ${selected ? 'ring-2 ring-brand' : ''}`}
    >
      {isPopular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-ink px-4 py-1 text-xs font-semibold text-white">
          Most Popular
        </span>
      )}

      <div>
        <h3 className="text-xl font-bold">{plan.name}</h3>
        <p className="mt-1 text-sm text-slatey">{plan.subtitle}</p>
      </div>

      <div className="mt-5 flex items-end gap-1">
        <span className="text-4xl font-bold text-ink">{plan.price}</span>
        <span className="mb-1 text-sm text-slatey">{plan.unit}</span>
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-ink/80">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sky text-brand">
              <Check className="h-3.5 w-3.5" strokeWidth={3} />
            </span>
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-7">
        <Button
          to="/contact"
          variant={isPopular || selected ? 'primary' : 'outline'}
          className="w-full"
        >
          {selected ? 'Selected — Book Now' : 'Choose Plan'}
        </Button>
      </div>
    </article>
  )
}
