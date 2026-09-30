import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scrolls to the top on route change — or to the hash target when a URL
// like "/#book" is opened (used by "Book This Service" deep links).
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      // Re-scroll a few times: late-loading images can shift the layout,
      // so one scroll isn't always enough on a fresh page load.
      const id = hash.replace('#', '')
      const timers = [80, 300, 700, 1200].map((ms) =>
        setTimeout(() => {
          const el = document.getElementById(id)
          if (el) el.scrollIntoView({ behavior: ms < 300 ? 'auto' : 'smooth', block: 'start' })
        }, ms)
      )
      return () => timers.forEach(clearTimeout)
    }
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname, hash])
  return null
}
