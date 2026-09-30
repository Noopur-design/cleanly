import { Link } from 'react-router-dom'
import { Sparkles } from 'lucide-react'
import { company } from '../data/site'

export default function Logo({ light = false, className = '' }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <span
        className={`grid h-9 w-9 place-items-center rounded-xl ${
          light ? 'bg-white/15' : 'bg-brand/10'
        } transition group-hover:scale-105`}
      >
        <Sparkles className={`h-5 w-5 ${light ? 'text-white' : 'text-brand'}`} />
      </span>
      <span className="leading-none">
        <span className={`block font-heading text-xl font-bold ${light ? 'text-white' : 'text-ink'}`}>
          {company.name}
        </span>
        <span className={`block text-[10px] font-medium tracking-wide ${light ? 'text-white/60' : 'text-slatey'}`}>
          {company.tagline}
        </span>
      </span>
    </Link>
  )
}
