import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-ink/5 transition hover:ring-brand/30">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-[15px] font-semibold text-ink">{q}</span>
        <span
          className={`grid h-7 w-7 shrink-0 place-items-center rounded-full transition ${
            open ? 'bg-brand text-white rotate-180' : 'bg-sky text-brand'
          }`}
        >
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-relaxed text-slatey">{a}</p>
        </div>
      </div>
    </div>
  )
}

// Renders a list of {q,a} items. `columns` splits them into two columns.
export default function FaqAccordion({ items, columns = false }) {
  if (columns) {
    const mid = Math.ceil(items.length / 2)
    const cols = [items.slice(0, mid), items.slice(mid)]
    return (
      <div className="grid gap-4 md:grid-cols-2">
        {cols.map((col, i) => (
          <div key={i} className="flex flex-col gap-4">
            {col.map((it) => (
              <FaqItem key={it.q} {...it} />
            ))}
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className="flex flex-col gap-4">
      {items.map((it) => (
        <FaqItem key={it.q} {...it} />
      ))}
    </div>
  )
}
