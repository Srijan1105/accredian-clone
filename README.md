# Accredian Enterprise — Partial Clone

A pixel-faithful, fully responsive recreation of [enterprise.accredian.com](https://enterprise.accredian.com) built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

## 🚀 Live Demo

> Deploy to Vercel: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/accredian-enterprise)

---

## 📦 Setup Instructions

### Prerequisites
- Node.js 20+
- npm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/accredian-enterprise.git
cd accredian-enterprise

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 🏗️ Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── leads/
│   │       └── route.ts        # Lead capture API endpoint
│   ├── globals.css             # Global styles + animations
│   ├── layout.tsx              # Root layout with Navbar & Footer
│   └── page.tsx                # Home page — composes all sections
└── components/
    ├── Navbar.tsx              # Sticky responsive navigation
    ├── Hero.tsx                # Hero section with CTA
    ├── TrackRecord.tsx         # Animated stats counter
    ├── ClientLogos.tsx         # Auto-scrolling client logo marquee
    ├── AccredianEdge.tsx       # USP feature grid
    ├── DomainExpertise.tsx     # Domain cards with interactive selection
    ├── CourseSegmentation.tsx  # Tabbed course categories + audience cards
    ├── CATFramework.tsx        # CAT framework + 3-step process
    ├── FAQ.tsx                 # Accordion FAQ with category tabs
    ├── Testimonials.tsx        # Auto-rotating testimonial carousel
    ├── ContactForm.tsx         # Lead capture form with validation
    └── Footer.tsx              # Full footer with social links
```

---

## 🧠 Approach Taken

### Architecture
- **Next.js App Router** for file-based routing and server components where applicable
- **Client components** (`"use client"`) only where interactivity is needed (forms, animations, state)
- **API Routes** (`/api/leads`) for server-side lead capture with validation

### Design Decisions
1. **Scroll-triggered animations** — `IntersectionObserver` API used throughout for performant entrance animations without a library
2. **Animated stat counters** — Custom `useCountUp` hook with easing function for the track record section
3. **Marquee logos** — Pure CSS animation for the client logo scroll, pauses on hover
4. **Responsive-first** — Mobile layout designed first, then enhanced for tablet/desktop
5. **Color system** — Extracted Accredian's brand colors (`#1a237e`, `#00bcd4`) as CSS variables

### Component Design
- Every section is a self-contained component with its own visibility state
- Reusable patterns: card hover effects, section headers, CTA buttons
- No external UI libraries — all components built from scratch with Tailwind

---

## 🤖 AI Usage

This project was built with **Kiro AI** (Claude-based) as the primary development assistant.

### Where AI Helped
| Area | AI Contribution |
|------|----------------|
| **Component scaffolding** | Generated all 11 components from the reference site's content structure |
| **Animation logic** | `useCountUp` hook, `IntersectionObserver` patterns, CSS keyframes |
| **Form validation** | Client-side validation logic and error state management |
| **API route** | Next.js Route Handler with server-side validation |
| **Tailwind classes** | Responsive utility class combinations for complex layouts |
| **Accessibility** | `aria-label`, `aria-expanded`, semantic HTML suggestions |

### What I Modified / Improved Manually
- **Enhanced the hero section** with floating stat cards and a grid background pattern
- **Added interactive domain cards** with click-to-highlight behavior (not in original)
- **Improved FAQ** with category tabs instead of a flat list
- **Added form field validation** with inline error messages (original has no form)
- **Testimonial carousel** with auto-rotation and manual navigation arrows
- **Bonus lead API** with in-memory store and GET endpoint for admin review

---

## ✅ Features Implemented

- [x] Sticky responsive navbar with smooth scroll navigation
- [x] Hero section with animated entrance and floating cards
- [x] Animated statistics counter (10K+, 200+, 5K+)
- [x] Auto-scrolling client logo marquee (Reliance, HCL, IBM, CRIF, ADP, Bayer)
- [x] Accredian Edge feature grid with original SVG
- [x] Domain expertise cards (7 domains + custom CTA card)
- [x] Tabbed course segmentation with image preview
- [x] "Who Should Join" audience cards
- [x] CAT Framework with original SVG + 3-step process
- [x] Accordion FAQ with 3 category tabs
- [x] Auto-rotating testimonial carousel
- [x] Lead capture form with client + server validation
- [x] Next.js API route (`POST /api/leads`, `GET /api/leads`)
- [x] Full footer with social links and scroll-to-top
- [x] Fully responsive (mobile, tablet, desktop)
- [x] SEO metadata and Open Graph tags

---

## 🔮 Improvements With More Time

1. **Database integration** — Replace in-memory lead store with Supabase or PlanetScale
2. **Email notifications** — Send confirmation email to lead + notification to sales team via Resend/SendGrid
3. **CMS integration** — Pull domain programs and FAQ content from a headless CMS (Contentful/Sanity)
4. **Analytics** — Add Vercel Analytics or PostHog for conversion tracking
5. **A/B testing** — Test different hero CTAs and form layouts
6. **Admin dashboard** — Simple `/admin/leads` page to view captured leads
7. **Animations** — Upgrade to Framer Motion for more polished micro-interactions
8. **i18n** — Multi-language support for global enterprise clients
9. **Performance** — Lazy-load below-fold images, add `next/image` optimization
10. **Testing** — Add Playwright E2E tests for the lead capture form flow

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 16.2.4 | Framework (App Router) |
| React | 19.2.4 | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Styling |
| Node.js | 20+ | Runtime |

---

## 📄 License

MIT — built for educational/assignment purposes.
