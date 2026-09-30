import Icon from './Icon'
import { whyChoose } from '../data/site'

// Horizontal strip of "why choose us" badges.
export default function WhyChoose() {
  return (
    <div data-reveal className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {whyChoose.map((w) => (
        <div
          key={w.title}
          className="flex flex-col items-center gap-3 rounded-2xl bg-white p-5 text-center shadow-soft ring-1 ring-ink/5 transition hover:-translate-y-1 hover:shadow-card"
        >
          <span className="grid h-12 w-12 place-items-center rounded-full bg-sky text-brand">
            <Icon name={w.icon} className="h-5 w-5" />
          </span>
          <span className="text-sm font-semibold leading-snug text-ink">{w.title}</span>
        </div>
      ))}
    </div>
  )
}
