import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react'

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const WEEK = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

const pad = (n) => String(n).padStart(2, '0')
const toISO = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
const parseISO = (s) => {
  const [y, m, d] = s.split('-').map(Number)
  return new Date(y, m - 1, d)
}

// Themed date picker — replaces the native <input type="date"> popup so the
// calendar matches the site. Emits YYYY-MM-DD via onChange({target:{value}}).
export default function DateField({ value, onChange, error = false, placeholder = 'Select a date', minToday = true }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const selected = value ? parseISO(value) : null
  const [view, setView] = useState(selected || today)

  useEffect(() => {
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [])

  useEffect(() => { if (open && selected) setView(selected) }, [open]) // eslint-disable-line

  const y = view.getFullYear()
  const m = view.getMonth()
  const firstWeekday = new Date(y, m, 1).getDay()
  const daysInMonth = new Date(y, m + 1, 0).getDate()

  const isDisabled = (day) => minToday && new Date(y, m, day) < today
  const isSelected = (day) => selected && selected.getFullYear() === y && selected.getMonth() === m && selected.getDate() === day
  const isToday = (day) => today.getFullYear() === y && today.getMonth() === m && today.getDate() === day

  const pick = (day) => {
    if (isDisabled(day)) return
    onChange?.({ target: { value: toISO(new Date(y, m, day)) } })
    setOpen(false)
  }

  const label = selected
    ? `${selected.getDate()} ${MONTHS[selected.getMonth()].slice(0, 3)} ${selected.getFullYear()}`
    : placeholder

  const cells = [...Array(firstWeekday).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)]

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className={`flex w-full items-center justify-between gap-3 rounded-xl border bg-white px-4 py-3 text-left text-sm outline-none transition focus:ring-4 focus:ring-brand/15 ${
          error ? 'border-red-400' : open ? 'border-brand' : 'border-ink/10'
        } ${selected ? 'text-ink' : 'text-slatey/70'}`}
      >
        <span className="truncate">{label}</span>
        <Calendar className="h-4 w-4 shrink-0 text-brand" />
      </button>

      {open && (
        <div className="absolute z-30 mt-2 w-full min-w-[17rem] max-w-[20rem] rounded-2xl border border-ink/10 bg-white p-3 shadow-card ring-1 ring-ink/5">
          {/* Header */}
          <div className="mb-2 flex items-center justify-between">
            <button type="button" onClick={() => setView(new Date(y, m - 1, 1))} aria-label="Previous month"
              className="grid h-8 w-8 place-items-center rounded-lg text-ink/70 transition hover:bg-sky hover:text-brand">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="text-sm font-semibold text-ink">{MONTHS[m]} {y}</span>
            <button type="button" onClick={() => setView(new Date(y, m + 1, 1))} aria-label="Next month"
              className="grid h-8 w-8 place-items-center rounded-lg text-ink/70 transition hover:bg-sky hover:text-brand">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Weekdays */}
          <div className="grid grid-cols-7 gap-1 text-center">
            {WEEK.map((w) => (
              <span key={w} className="py-1 text-[11px] font-semibold uppercase tracking-wide text-slatey">{w}</span>
            ))}
          </div>

          {/* Days */}
          <div className="mt-1 grid grid-cols-7 gap-1">
            {cells.map((day, i) => {
              if (day === null) return <span key={`e${i}`} />
              const disabled = isDisabled(day)
              const sel = isSelected(day)
              return (
                <button
                  key={day}
                  type="button"
                  disabled={disabled}
                  onClick={() => pick(day)}
                  className={`grid h-9 place-items-center rounded-lg text-sm transition ${
                    sel
                      ? 'bg-brand font-semibold text-white'
                      : disabled
                      ? 'cursor-not-allowed text-ink/25'
                      : isToday(day)
                      ? 'font-semibold text-brand ring-1 ring-brand/40 hover:bg-sky'
                      : 'text-ink/80 hover:bg-sky'
                  }`}
                >
                  {day}
                </button>
              )
            })}
          </div>

          {/* Footer */}
          <div className="mt-3 flex items-center justify-between border-t border-ink/10 pt-3 text-sm">
            <button type="button" onClick={() => { onChange?.({ target: { value: '' } }); setOpen(false) }}
              className="font-semibold text-slatey hover:text-ink">Clear</button>
            <button type="button"
              onClick={() => { onChange?.({ target: { value: toISO(today) } }); setView(today); setOpen(false) }}
              className="font-semibold text-brand hover:underline">Today</button>
          </div>
        </div>
      )}
    </div>
  )
}
