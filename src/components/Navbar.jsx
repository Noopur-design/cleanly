import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import Button from './Button'
import { navLinks } from '../data/site'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [open])

  const linkClass = ({ isActive }) =>
    `relative py-1 text-sm font-medium transition-colors ${
      isActive ? 'text-brand' : 'text-ink/70 hover:text-brand'
    } after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-brand after:transition-all after:duration-300 ${
      isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
    }`

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-soft backdrop-blur-md' : 'bg-white'
      }`}
    >
      <nav className="container-px flex h-[68px] items-center justify-between gap-4">
        <Logo />

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 xl:flex">
          {navLinks.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className={linkClass} end={l.to === '/'}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <Button to="/contact" size="md">Book a Pickup</Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-ink/10 text-ink xl:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`xl:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        {/* backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0 top-[68px] z-40 bg-ink/40 transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          className={`fixed inset-x-0 top-[68px] z-50 origin-top overflow-y-auto bg-white shadow-card transition-all duration-300 ${
            open ? 'max-h-[calc(100vh-68px)] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="container-px flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-[15px] font-medium transition ${
                      isActive ? 'bg-sky text-brand' : 'text-ink/80 hover:bg-ivory'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="mt-3 flex flex-col gap-3 border-t border-ink/10 pt-4">
              <Button to="/contact" size="lg" className="w-full">Book a Pickup</Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
