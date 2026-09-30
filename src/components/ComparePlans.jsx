import { Check, Minus } from 'lucide-react'
import { plans, compareRows } from '../data/site'

// Renders a value cell: check / dash / text.
function Value({ v, center = true }) {
  if (v === true) return <Check className={`h-5 w-5 text-brand ${center ? 'mx-auto' : ''}`} strokeWidth={3} />
  if (v === false) return <Minus className={`h-5 w-5 text-ink/25 ${center ? 'mx-auto' : ''}`} />
  return <span className="text-sm text-ink/80">{v}</span>
}

// Plan comparison. A real table on md+, and stacked per-plan cards on mobile
// so it is fully readable without any horizontal scrolling.
export default function ComparePlans() {
  return (
    <div data-reveal className="mt-8">
      {/* Desktop / tablet: table */}
      <div className="hidden overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-ink/5 md:block">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[520px] text-left">
            <thead>
              <tr className="border-b border-ink/10 bg-ivory">
                <th className="p-4 text-sm font-semibold text-ink">Features</th>
                {plans.map((p) => (
                  <th key={p.name} className={`p-4 text-center text-sm font-semibold ${p.popular ? 'bg-sky text-brand' : 'text-ink'}`}>
                    {p.name}
                    <span className="block text-xs font-normal text-slatey">{p.price} {p.unit}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compareRows.map((r, i) => (
                <tr key={r.feature} className={i % 2 ? 'bg-ivory/50' : ''}>
                  <td className="p-4 text-sm font-medium text-ink/80">{r.feature}</td>
                  <td className="p-4 text-center"><Value v={r.basic} /></td>
                  <td className="bg-sky/40 p-4 text-center"><Value v={r.standard} /></td>
                  <td className="p-4 text-center"><Value v={r.premium} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile: one card per plan, each feature listed vertically */}
      <div className="flex flex-col gap-5 md:hidden">
        {plans.map((p) => {
          const key = p.name.toLowerCase()
          return (
            <div
              key={p.name}
              className={`overflow-hidden rounded-2xl bg-white shadow-card ring-1 ${
                p.popular ? 'ring-brand' : 'ring-ink/5'
              }`}
            >
              <div className={`flex items-center justify-between px-5 py-4 ${p.popular ? 'bg-sky' : 'bg-ivory'}`}>
                <h3 className={`text-base font-bold ${p.popular ? 'text-brand' : 'text-ink'}`}>{p.name}</h3>
                <span className="text-sm font-semibold text-ink">
                  {p.price} <span className="font-normal text-slatey">{p.unit}</span>
                </span>
              </div>
              <ul className="divide-y divide-ink/5">
                {compareRows.map((r) => (
                  <li key={r.feature} className="flex items-center justify-between gap-4 px-5 py-3">
                    <span className="text-sm font-medium text-ink/80">{r.feature}</span>
                    <span className="shrink-0 text-right">
                      <Value v={r[key]} center={false} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}
