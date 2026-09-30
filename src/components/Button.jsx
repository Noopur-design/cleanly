import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand/30 disabled:opacity-60'

const sizes = {
  md: 'px-5 py-3 text-sm',
  lg: 'px-7 py-3.5 text-[15px]',
}

const variants = {
  primary: 'bg-brand text-white shadow-soft hover:bg-brand-dark hover:shadow-card-hover hover:-translate-y-0.5',
  dark: 'bg-ink text-white hover:bg-ink-900 hover:-translate-y-0.5 hover:shadow-card-hover',
  outline: 'border border-ink/15 bg-white text-ink hover:border-brand hover:text-brand',
  ghost: 'bg-white/15 text-white backdrop-blur hover:bg-white/25',
  white: 'bg-white text-ink hover:bg-sky hover:-translate-y-0.5 hover:shadow-card-hover',
}

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  arrow = true,
  className = '',
  ...rest
}) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`
  const inner = (
    <>
      {children}
      {arrow && <ArrowRight className="h-4 w-4" />}
    </>
  )

  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{inner}</a>
  return <button className={cls} {...rest}>{inner}</button>
}
