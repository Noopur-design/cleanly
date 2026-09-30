import Button from './Button'
import { images } from '../data/site'

// Full-width call-to-action band used near the bottom of most pages.
export default function CtaBanner({
  title = 'Ready for Fresh, Clean Clothes?',
  subtitle = 'Book your pickup today and experience hassle-free laundry service.',
  cta = 'Book a Pickup',
  to = '/contact',
  variant = 'light',
}) {
  if (variant === 'dark') {
    return (
      <section data-reveal className="container-px">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-ink to-brand-dark px-6 py-10 text-white md:px-12">
          <img
            src={images.foldedStack}
            alt=""
            className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/3 object-cover opacity-20 md:block"
          />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
              <p className="mt-2 max-w-xl text-white/70">{subtitle}</p>
            </div>
            <Button to={to} variant="white" size="lg">{cta}</Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section data-reveal className="container-px">
      <div className="relative overflow-hidden rounded-3xl bg-sky px-6 py-12 text-center md:px-12">
        <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-brand/10 blur-2xl" />
        <div className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-brand/10 blur-2xl" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold md:text-[32px]">{title}</h2>
          <p className="mt-3 text-slatey">{subtitle}</p>
          <div className="mt-6 flex justify-center">
            <Button to={to} size="lg">{cta}</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
