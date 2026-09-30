import { useEffect, useMemo, useRef, useState } from 'react'
import { ChevronDown, Check } from 'lucide-react'

// Accessible custom dropdown — replaces the native <select> so the open
// options panel can be fully themed (rounded, padded, brand hover/selected).
// Options can be strings or { value, label } objects.
export default function Select({
  value,
  onChange,
  options = [],
  placeholder = 'Select an option',
  error = false,
  className = '',
  id,
}) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(-1)
  const rootRef = useRef(null)
  const listRef = useRef(null)

  const items = useMemo(
    () => options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o)),
    [options]
  )
  const selected = items.find((o) => o.value === value)

  // Close on outside click
  useEffect(() => {
    const onDoc = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [])

  // When opening, highlight the current selection
  useEffect(() => {
    if (open) setActive(items.findIndex((o) => o.value === value))
  }, [open, items, value])

  const choose = (val) => {
    onChange?.({ target: { value: val } })
    setOpen(false)
  }

  const onKeyDown = (e) => {
    if (!open && (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault()
      setOpen(true)
      return
    }
    if (!open) return
    if (e.key === 'Escape') { setOpen(false); return }
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive((i) => Math.min(i + 1, items.length - 1)) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive((i) => Math.max(i - 1, 0)) }
    else if (e.key === 'Enter') { e.preventDefault(); if (items[active]) choose(items[active].value) }
  }

  // Keep the active option scrolled into view
  useEffect(() => {
    if (open && listRef.current && active >= 0) {
      const el = listRef.current.children[active]
      el?.scrollIntoView({ block: 'nearest' })
    }
  }, [active, open])

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        type="button"
        id={id}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={onKeyDown}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex w-full items-center justify-between gap-3 rounded-xl border bg-white px-4 py-3 text-left text-sm outline-none transition focus:ring-4 focus:ring-brand/15 ${
          error ? 'border-red-400' : open ? 'border-brand' : 'border-ink/10'
        } ${selected ? 'text-ink' : 'text-slatey/70'}`}
      >
        <span className="truncate">{selected ? selected.label : placeholder}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 text-brand transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <ul
          ref={listRef}
          role="listbox"
          className="absolute z-30 mt-2 max-h-60 w-full overflow-auto rounded-xl border border-ink/10 bg-white p-1.5 shadow-card ring-1 ring-ink/5"
        >
          {items.map((o, i) => {
            const isSel = o.value === value
            const isActive = i === active
            return (
              <li
                key={o.value}
                role="option"
                aria-selected={isSel}
                onMouseEnter={() => setActive(i)}
                onClick={() => choose(o.value)}
                className={`flex cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-sm transition ${
                  isSel
                    ? 'bg-brand font-semibold text-white'
                    : isActive
                    ? 'bg-sky text-ink'
                    : 'text-ink/80'
                }`}
              >
                <span className="truncate">{o.label}</span>
                {isSel && <Check className="h-4 w-4 shrink-0" strokeWidth={3} />}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
