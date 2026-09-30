# Cleanly — Laundry & Dry Cleaning Website

A complete, modern, fully responsive marketing website for **Cleanly**, a laundry and
dry cleaning service. Built to match the supplied UI designs with a premium, professional,
service-focused look.

## Tech Stack

- **React 18** + **Vite** — fast SPA tooling
- **React Router 6** — client-side routing across 10 pages
- **Tailwind CSS 3** — utility-first styling with a custom navy / blue / ivory theme
- **GSAP + ScrollTrigger** — subtle scroll reveal animations
- **lucide-react** — clean, consistent icons

## Getting Started

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

> Requires Node.js 18+.

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/services` | Services |
| `/pricing` | Pricing |
| `/how-it-works` | How It Works |
| `/about` | About Us |
| `/special-offers` | Special Offers |
| `/testimonials` | Testimonials & FAQs |
| `/contact` | Contact |
| `/terms` | Terms & Conditions |
| `/privacy-policy` | Privacy Policy |

## Features

- Sticky, responsive navbar with a working mobile menu
- Interactive pricing plan selection + service filters
- Expandable / collapsible FAQ accordions (categorized)
- Booking form and contact form with validation + success / error states
- Working phone, email and WhatsApp links + floating WhatsApp button
- Smooth scrolling, hover effects and GSAP scroll animations
- Fully responsive across mobile, tablet and desktop

## Project Structure

```
src/
  components/   Reusable UI (Navbar, Footer, Button, ServiceCard, PricingCard,
                FaqAccordion, BookingForm, Testimonials, LegalPage, …)
  pages/        One component per route
  data/site.js  All site content (services, pricing, FAQs, testimonials, offers)
  hooks/        useReveal — GSAP scroll animations
```

## Notes

- Imagery uses optimized Unsplash photos as realistic placeholders.
- The booking and contact forms are **front-end only** — no backend is connected,
  so no bookings are actually confirmed. Wire them to an API/service to go live.
- Business details (address, phone, map location) are placeholder content.
