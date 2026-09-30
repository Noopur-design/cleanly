import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Icon from './Icon'

// Rich service card with image, icon, title, description and a link.
export default function ServiceCard({ service, showImage = true }) {
  return (
    <article
      data-reveal
      className="group card overflow-hidden hover:-translate-y-1.5 hover:shadow-card-hover"
    >
      {showImage && (
        <div className="relative h-44 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
        </div>
      )}
      <div className="p-6">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-sky text-brand">
          <Icon name={service.icon} className="h-5 w-5" />
        </span>
        <h3 className="mt-4 text-lg font-bold">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slatey">{service.desc}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-semibold text-ink">
            {service.price} <span className="font-normal text-slatey">{service.unit}</span>
          </span>
          <Link
            to="/services"
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand transition group-hover:gap-2"
          >
            Learn More <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  )
}
