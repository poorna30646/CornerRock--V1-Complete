# Corner Rock

Official production website for **Corner Rock** — "Building Software That Grows Businesses."

Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, MongoDB Atlas, and Nodemailer.

## Getting Started

```bash
npm install
cp .env.example .env.local   # then fill in your real values
npm run dev
```

## Project Structure

```
src/
  app/                # App Router routes (pages + API routes)
    about/
    services/
    portfolio/
    contact/
    privacy-policy/
    terms/
    api/
      contact/         # Route handler for the contact form (Phase 8+)
  components/
    layout/            # Navbar, Footer, page shell (Phase 2)
    home/               # Home page sections: Hero, Services Grid, etc. (Phase 3)
    ui/                 # Reusable primitives: Button, Card, Input, Badge...
    shared/             # Cross-page composites (SectionHeading, CTASection...)
  lib/                  # Utilities, MongoDB client, email sender, validation helpers
  models/               # Mongoose models (Contact, etc.) — Phase 9
  hooks/                # Custom React hooks
  types/                # Shared TypeScript types
  constants/            # Site config, nav links, service list
  data/                 # Static/placeholder JSON data (portfolio items, testimonials, FAQ)
```

## Build Plan

This project is being built in phases:

1. Project initialization & folder structure ← **you are here**
2. Layout, Navbar, Footer, Theme, Fonts
3. Home Page
4. About Page
5. Services
6. Portfolio
7. Contact Page
8. Backend API
9. MongoDB Integration
10. Email Integration
11. SEO
12. Performance Optimization
13. Testing
14. Deployment
