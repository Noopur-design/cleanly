import { WashingMachine } from 'lucide-react'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <section className="grid min-h-[60vh] place-items-center bg-sky-soft px-4">
      <div className="text-center">
        <span className="mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-white text-brand shadow-card">
          <WashingMachine className="h-10 w-10" />
        </span>
        <h1 className="mt-6 text-6xl font-bold text-ink">404</h1>
        <p className="mt-3 text-lg font-semibold text-ink">This page came out in the wash.</p>
        <p className="mt-2 text-slatey">The page you’re looking for doesn’t exist or has moved.</p>
        <div className="mt-7 flex justify-center gap-3">
          <Button to="/">Back to Home</Button>
          <Button to="/contact" variant="outline">Contact Us</Button>
        </div>
      </div>
    </section>
  )
}
