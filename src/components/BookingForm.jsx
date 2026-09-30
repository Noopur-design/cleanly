import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import Button from './Button'
import Select from './Select'
import DateField from './DateField'
import { services } from '../data/site'

const timeSlots = ['8:00 – 10:00 AM', '10:00 – 12:00 PM', '12:00 – 3:00 PM', '3:00 – 6:00 PM', '6:00 – 8:00 PM']

const empty = { name: '', phone: '', address: '', service: '', date: '', time: '' }

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">{label}</span>
      {children}
      {error && (
        <span className="mt-1 flex items-center gap-1 text-xs font-medium text-red-600">
          <AlertCircle className="h-3.5 w-3.5" /> {error}
        </span>
      )}
    </label>
  )
}

const inputBase =
  'w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink placeholder:text-slatey/60 outline-none transition focus:ring-4 focus:ring-brand/15'

// Booking form with client-side validation and success/error messaging.
// No backend is connected — submission is simulated locally.
export default function BookingForm({ defaultService = '' }) {
  const [searchParams] = useSearchParams()
  // A ?service= query (e.g. from a "Book This Service" button) pre-selects it.
  const preselected = searchParams.get('service') || defaultService
  const [form, setForm] = useState({ ...empty, service: preselected })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success

  // Keep the service field in sync when the URL query changes.
  useEffect(() => {
    const s = searchParams.get('service')
    if (s) setForm((f) => ({ ...f, service: s }))
  }, [searchParams])

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }))
    setErrors((er) => ({ ...er, [k]: undefined }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name'
    else if (form.name.trim().length < 2) e.name = 'Name looks too short'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    else if (!/^[+]?[\d\s-]{10,15}$/.test(form.phone.trim())) e.phone = 'Enter a valid phone number'
    if (!form.address.trim()) e.address = 'Pickup address is required'
    if (!form.service) e.service = 'Select a service'
    if (!form.date) e.date = 'Choose a pickup date'
    else if (new Date(form.date) < new Date(new Date().toDateString())) e.date = 'Date cannot be in the past'
    if (!form.time) e.time = 'Choose a time slot'
    return e
  }

  const onSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length) {
      const first = document.querySelector('[data-invalid="true"]')
      first?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    setStatus('loading')
    // Simulate a request. No booking is actually confirmed (no backend).
    setTimeout(() => setStatus('success'), 1100)
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center rounded-3xl bg-sky p-10 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-brand text-white">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="mt-5 text-2xl font-bold">Pickup Request Received!</h3>
        <p className="mt-2 max-w-md text-slatey">
          Thanks, {form.name.split(' ')[0]}! We’ve noted your request for{' '}
          <strong className="text-ink">{form.service}</strong> on{' '}
          <strong className="text-ink">{form.date}</strong> ({form.time}). Our team will call{' '}
          <strong className="text-ink">{form.phone}</strong> shortly to confirm.
        </p>
        <p className="mt-3 text-xs text-slatey">
          Note: this is a demo form — no live booking is created until a backend is connected.
        </p>
        <button
          onClick={() => {
            setForm({ ...empty, service: defaultService })
            setStatus('idle')
          }}
          className="mt-6 text-sm font-semibold text-brand hover:underline"
        >
          Book another pickup
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <div data-invalid={!!errors.name}>
        <Field label="Full Name *" error={errors.name}>
          <input className={`${inputBase} ${errors.name ? 'border-red-400' : 'border-ink/10'}`} placeholder="Enter your name" value={form.name} onChange={set('name')} />
        </Field>
      </div>
      <div data-invalid={!!errors.phone}>
        <Field label="Phone Number *" error={errors.phone}>
          <input className={`${inputBase} ${errors.phone ? 'border-red-400' : 'border-ink/10'}`} placeholder="+91 98765 43210" value={form.phone} onChange={set('phone')} />
        </Field>
      </div>
      <div className="sm:col-span-2" data-invalid={!!errors.address}>
        <Field label="Pickup Address *" error={errors.address}>
          <input className={`${inputBase} ${errors.address ? 'border-red-400' : 'border-ink/10'}`} placeholder="Enter your complete address" value={form.address} onChange={set('address')} />
        </Field>
      </div>
      <div data-invalid={!!errors.service}>
        <Field label="Select Service *" error={errors.service}>
          <Select
            placeholder="Choose a service"
            value={form.service}
            onChange={set('service')}
            error={!!errors.service}
            options={services.map((s) => s.title)}
          />
        </Field>
      </div>
      <div data-invalid={!!errors.date}>
        <Field label="Preferred Date *" error={errors.date}>
          <DateField
            placeholder="Choose a date"
            value={form.date}
            onChange={set('date')}
            error={!!errors.date}
          />
        </Field>
      </div>
      <div className="sm:col-span-2" data-invalid={!!errors.time}>
        <Field label="Preferred Time *" error={errors.time}>
          <Select
            placeholder="Select time slot"
            value={form.time}
            onChange={set('time')}
            error={!!errors.time}
            options={timeSlots}
          />
        </Field>
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-7 py-3.5 text-[15px] font-semibold text-white shadow-soft transition hover:bg-brand-dark hover:shadow-card-hover disabled:opacity-70"
        >
          {status === 'loading' ? (
            <><Loader2 className="h-4 w-4 animate-spin" /> Submitting…</>
          ) : (
            <>Book a Pickup</>
          )}
        </button>
      </div>
    </form>
  )
}
