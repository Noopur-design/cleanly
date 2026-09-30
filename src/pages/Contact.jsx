import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import useReveal from '../hooks/useReveal'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Icon from '../components/Icon'
import Select from '../components/Select'
import { company, serviceLocations, images } from '../data/site'

const subjects = ['Book a Pickup', 'Pricing Enquiry', 'Bulk / Corporate', 'Feedback', 'Other']
const inputBase = 'w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink placeholder:text-slatey/60 outline-none transition focus:ring-4 focus:ring-brand/15'

const contactChannels = [
  { icon: 'Phone', title: 'Call Us', lines: [company.phone, company.hours], href: company.phoneHref, color: 'bg-sky text-brand' },
  { icon: 'MessageCircle', title: 'WhatsApp', lines: [company.phone, 'Quick response'], href: company.whatsappHref, color: 'bg-green-50 text-green-600' },
  { icon: 'Mail', title: 'Email Us', lines: [company.email, 'We reply within 24 hrs'], href: company.emailHref, color: 'bg-sky text-brand' },
  { icon: 'MapPin', title: 'Visit Us', lines: [company.address], href: '#map', color: 'bg-sky text-brand' },
]

const quickOptions = [
  { icon: 'CalendarClock', title: 'Book a Pickup', desc: 'Schedule a pickup at your convenience.', action: 'Book Now', to: '#form' },
  { icon: 'MessageCircle', title: 'Live Chat', desc: 'Chat with our support team instantly.', action: 'Start Chat', to: company.whatsappHref },
  { icon: 'HelpCircle', title: 'Need Help?', desc: 'Find answers in our FAQs section.', action: 'View FAQs', to: '/pricing' },
  { icon: 'Handshake', title: 'Business Inquiries', desc: 'Looking for corporate or bulk plans?', action: 'Get in Touch', to: '#form' },
]

export default function Contact() {
  useReveal()
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }))
    setErrors((er) => ({ ...er, [k]: undefined }))
  }
  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    else if (!/^[+]?[\d\s-]{10,15}$/.test(form.phone.trim())) e.phone = 'Enter a valid phone number'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = 'Enter a valid email'
    if (!form.subject) e.subject = 'Please select a subject'
    if (!form.message.trim()) e.message = 'Please type a message'
    else if (form.message.trim().length < 10) e.message = 'Message is a little short'
    return e
  }
  const onSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length) return
    setStatus('loading')
    setTimeout(() => setStatus('success'), 1000)
  }

  return (
    <>
      <PageHero
        crumb="Contact"
        title="We're Always"
        highlight="Here to Help."
        subtitle="Have a question, need a pickup, or want a custom plan? Our team is just a message away."
        chips={[
          { icon: 'Phone', title: 'Quick Support' },
          { icon: 'MessageCircle', title: 'Live Chat' },
          { icon: 'Mail', title: 'Email Us' },
        ]}
      />

      {/* Form + info */}
      <section id="form" className="section">
        <div className="container-px grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          {/* Form */}
          <div data-reveal className="card p-6 md:p-8">
            <h2 className="text-2xl font-bold">Send Us a Message</h2>
            <p className="mt-1 text-sm text-slatey">Fill out the form and our team will get back to you shortly.</p>

            {status === 'success' ? (
              <div className="mt-8 flex flex-col items-center rounded-2xl bg-sky p-8 text-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-brand text-white">
                  <CheckCircle2 className="h-7 w-7" />
                </span>
                <h3 className="mt-4 text-xl font-bold">Message Sent!</h3>
                <p className="mt-2 text-sm text-slatey">Thanks, {form.name.split(' ')[0]}. We’ll reply to {form.email} within 24 hours.</p>
                <button onClick={() => { setForm({ name: '', phone: '', email: '', subject: '', message: '' }); setStatus('idle') }}
                  className="mt-5 text-sm font-semibold text-brand hover:underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium">Your Name *</span>
                  <input className={`${inputBase} ${errors.name ? 'border-red-400' : 'border-ink/10'}`} placeholder="Enter your name" value={form.name} onChange={set('name')} />
                  {errors.name && <Err msg={errors.name} />}
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium">Phone Number *</span>
                  <input className={`${inputBase} ${errors.phone ? 'border-red-400' : 'border-ink/10'}`} placeholder="+91 98765 43210" value={form.phone} onChange={set('phone')} />
                  {errors.phone && <Err msg={errors.phone} />}
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-sm font-medium">Email Address *</span>
                  <input className={`${inputBase} ${errors.email ? 'border-red-400' : 'border-ink/10'}`} placeholder="yourname@example.com" value={form.email} onChange={set('email')} />
                  {errors.email && <Err msg={errors.email} />}
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-sm font-medium">Subject *</span>
                  <Select
                    placeholder="Select a subject"
                    value={form.subject}
                    onChange={set('subject')}
                    error={!!errors.subject}
                    options={subjects}
                  />
                  {errors.subject && <Err msg={errors.subject} />}
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-sm font-medium">Message *</span>
                  <textarea rows={5} className={`${inputBase} resize-none ${errors.message ? 'border-red-400' : 'border-ink/10'}`} placeholder="Type your message here…" value={form.message} onChange={set('message')} />
                  {errors.message && <Err msg={errors.message} />}
                </label>
                <div className="sm:col-span-2">
                  <button type="submit" disabled={status === 'loading'}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-ink px-7 py-3.5 text-[15px] font-semibold text-white transition hover:bg-brand disabled:opacity-70">
                    {status === 'loading' ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</> : <>Send Message <Send className="h-4 w-4" /></>}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            <div data-reveal className="card p-6">
              <h3 className="text-lg font-bold">Contact Information</h3>
              <p className="mt-1 text-sm text-slatey">Reach out to us through any of the channels below.</p>
              <div className="mt-5 grid grid-cols-2 gap-4">
                {contactChannels.map((c) => (
                  <a key={c.title} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                    className="rounded-2xl bg-ivory p-4 transition hover:bg-sky">
                    <span className={`grid h-11 w-11 place-items-center rounded-full ${c.color}`}>
                      <Icon name={c.icon} className="h-5 w-5" />
                    </span>
                    <h4 className="mt-3 text-sm font-bold">{c.title}</h4>
                    {c.lines.map((l) => <p key={l} className="text-xs text-slatey">{l}</p>)}
                  </a>
                ))}
              </div>
            </div>
            <div id="map" data-reveal className="card overflow-hidden">
              <div className="p-6 pb-4">
                <h3 className="text-lg font-bold">Find Us Here</h3>
                <p className="mt-1 text-sm text-slatey">Visit our office or service center. We’d love to meet you!</p>
              </div>
              <iframe title="Cleanly location map"
                src="https://www.google.com/maps?q=Sector%2045%20Gurgaon%20Haryana&output=embed"
                className="h-64 w-full border-0" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick options */}
      <section className="section bg-sky-soft pt-0 md:pt-0">
        <div className="container-px pt-16 md:pt-24">
          <SectionHeading eyebrow="Quick Options" title="Quick Contact Options"
            subtitle="Choose the fastest way to get the help you need." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {quickOptions.map((q) => {
              const external = q.to.startsWith('http')
              const internalAnchor = q.to.startsWith('#')
              const Wrapper = external || internalAnchor ? 'a' : Link
              const props = external || internalAnchor ? { href: q.to, target: external ? '_blank' : undefined, rel: 'noreferrer' } : { to: q.to }
              return (
                <Wrapper key={q.title} {...props} data-reveal className="card p-6 transition hover:-translate-y-1.5 hover:shadow-card-hover">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-sky text-brand">
                    <Icon name={q.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-bold">{q.title}</h3>
                  <p className="mt-1 text-sm text-slatey">{q.desc}</p>
                  <span className="mt-3 inline-block text-sm font-semibold text-brand">{q.action} →</span>
                </Wrapper>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service locations */}
      <section className="section">
        <div className="container-px">
          <div className="grid items-center gap-8 rounded-3xl bg-sky p-7 md:grid-cols-[1fr_1.2fr] md:p-10">
            <div data-reveal>
              <h2 className="text-2xl font-bold md:text-3xl">Our Service Locations</h2>
              <p className="mt-3 text-slatey">We currently serve multiple areas across Gurgaon and nearby regions.</p>
              <img src={images.van} alt="Cleanly delivery van"
                className="mt-6 hidden w-full rounded-2xl object-cover shadow-soft md:block" />
            </div>
            <div data-reveal className="grid gap-3 sm:grid-cols-2">
              {serviceLocations.map((l) => (
                <div key={l.area} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-soft">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-sky text-brand">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-ink">{l.area}</h3>
                    <p className="text-xs text-slatey">{l.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function Err({ msg }) {
  return <span className="mt-1 flex items-center gap-1 text-xs font-medium text-red-600"><AlertCircle className="h-3.5 w-3.5" /> {msg}</span>
}
