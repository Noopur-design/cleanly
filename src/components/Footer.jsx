import { Link } from 'react-router-dom'
import { Mail, MapPin, Clock } from 'lucide-react'
import Logo from './Logo'
import Icon from './Icon'
import { company, footerQuickLinks, footerServices } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-ink text-white">
      <div className="container-px py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Logo light />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Professional laundry and dry cleaning services at your doorstep. Clean clothes. Happier days.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {company.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition hover:bg-brand hover:-translate-y-0.5"
                >
                  <Icon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {footerQuickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/60 transition hover:text-white hover:pl-1">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Our Services</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {footerServices.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-white/60 transition hover:text-white hover:pl-1">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact Info</h3>
            <ul className="mt-5 space-y-4 text-sm text-white/70">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand-light" />
                <a href={company.emailHref} className="hover:text-white">{company.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" />
                <span>{company.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-brand-light" />
                <span>{company.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-5 text-sm text-white/50 sm:flex-row">
          <p>© {year} {company.name}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <span className="text-white/20">|</span>
            <Link to="/terms" className="hover:text-white">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
