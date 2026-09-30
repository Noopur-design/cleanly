import { ChevronRight } from 'lucide-react'
import Icon from './Icon'
import { steps } from '../data/site'

// The 3-step "Clean Clothes in 3 Easy Steps" block used on Home & How It Works.
export default function HowItWorksSteps() {
  return (
    <div className="grid items-start gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
      {steps.map((s, i) => (
        <div key={s.n} className="contents">
          <div data-reveal className="text-center">
            <div className="relative mx-auto grid h-24 w-24 place-items-center rounded-full bg-sky">
              <Icon name={s.icon} className="h-9 w-9 text-brand" />
              <span className="absolute -right-1 -top-1 grid h-8 w-8 place-items-center rounded-full bg-brand text-sm font-bold text-white ring-4 ring-white">
                {s.n}
              </span>
            </div>
            <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
            <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-slatey">{s.desc}</p>
          </div>
          {i < steps.length - 1 && (
            <div className="hidden items-center justify-center pt-10 md:flex">
              <ChevronRight className="h-7 w-7 text-brand/40" />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
