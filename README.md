# Wanda McCrae: Freelance Web Developer

Portfolio and services website for Wanda McCrae, a solution architect offering affordable flat-rate web development and domain hosting setup.

Live site: [freelance.wandamccrae.com](https://freelance.wandamccrae.com)

CI/CD: deployed from GitHub to Netlify.
[![Netlify Status](https://api.netlify.com/api/v1/badges/0e1b9ad1-9c93-459f-9951-51fb8fed5061/deploy-status)](https://app.netlify.com/projects/wm-freelance/deploys)

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Pages](#pages)
- [Features](#features)
  - [Dyslexia-Friendly Mode](#dyslexia-friendly-mode)
  - [Accessibility](#accessibility)
  - [Pricing Tables (Services page)](#pricing-tables-services-page)
  - [Contact Form](#contact-form)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Revision History](#revision-history)

---

## Tech Stack

[Back to Top](#wanda-mccrae-freelance-web-developer)

- **React 19** with Vite
- **React Router v7** — client-side routing (SPA)
- **CSS** — plain CSS, component-scoped stylesheets, mobile-first
- **Google Fonts** — Overlock (branding), Roboto (body), Lexend (dyslexia mode)
- **FormSubmit** — contact form backend (no server required)
- **Netlify** — hosting and CI/CD

---

## Pages

[Back to Top](#wanda-mccrae-freelance-web-developer)

| Route | Component | Description |
|---|---|---|
| `/` | `MainPage` | Landing page with value proposition |
| `/services` | `Services` | Flat-rate pricing tables |
| `/samples` | `Samples` | Portfolio of completed projects |
| `/contact` | `Contact` | Inquiry form |
| `/thanks` | `Thanks` | Confirmation after form submission |
| `/specialoffer` | `SpecialOffer` | Promotional pricing offer |

---

## Features

[Back to Top](#wanda-mccrae-freelance-web-developer)

### Dyslexia-Friendly Mode
Toggleable from the header (below the nav on mobile, far right on larger screens). When enabled, applies:
- **Lexend** typeface (designed for reading ease)
- Increased letter-spacing (0.05em) and word-spacing (0.1em)
- Taller line height (1.8)
- Warm beige background (`#fdf0d5`)
- Slightly larger base font size

Preference is saved to `localStorage` so it persists across sessions.

### Accessibility
- Skip navigation link to bypass repeated header content
- ARIA landmarks (`main`, `nav`, `footer`) and descriptive labels
- `aria-current="page"` on active nav links
- `scope` attributes on all table headers
- Single `h1` per page
- Decorative images marked `aria-hidden`

### Pricing Tables (Services page)
Three flat-rate service categories:
- **Web Development & Maintenance** — 8 tiers from $298–$399/year
- **Business Name Registration** — search ($99) or register ($199)
- **Domain Hosting Setup** — domain registration + Bluehost hosting configuration

### Contact Form
Powered by [FormSubmit](https://formsubmit.co) — submissions are emailed directly with no backend required. Redirects to `/thanks` on success.

---

## Project Structure

[Back to Top](#wanda-mccrae-freelance-web-developer)

```
wm-freelance/
├── public/
│   ├── wm-logo.ico
│   └── projects/              # Static HTML sample sites
│       ├── tea-shoppe/
│       └── ronni-davis/
├── src/
│   ├── App.jsx                # Root: routing + dyslexia state
│   ├── index.jsx              # Entry point
│   ├── components/
│   │   ├── Header.jsx         # Nav + dyslexia toggle
│   │   ├── Footer.jsx
│   │   ├── MainPage.jsx
│   │   ├── Services.jsx       # Pricing tables
│   │   ├── Samples.jsx        # Portfolio gallery
│   │   ├── Contact.jsx        # FormSubmit contact form
│   │   ├── Thanks.jsx
│   │   └── SpecialOffer.jsx
│   ├── styles/                # Component-scoped CSS files
│   │   ├── global.css         # Global styles, dyslexia mode overrides
│   │   └── *.css
│   └── assets/                # Images and screenshots
├── index.html                 # Vite entry HTML (root level)
├── vite.config.js
├── netlify.toml               # Build config + SPA redirect rules
└── package.json
```

---

## Getting Started

[Back to Top](#wanda-mccrae-freelance-web-developer)

```bash
npm install
npm run start    # Vite development server at http://localhost:3000
npm run build    # production build → /build
npm run preview  # preview the production build
```

**Deployment:** Netlify automatically runs `npm run build` on push to the main branch and serves the `/build` directory. All routes redirect to `index.html` for SPA routing (configured in `netlify.toml`).

---

## Revision History

[Back to Top](#wanda-mccrae-freelance-web-developer)

- **2026 November 5** - Updated README to include a Table of Contents. Added a Back to Top link to every section.

- **2026 April 9** - Migrated from Create React App to Vite to modernize development and build processes.
- **2026 March 31** — Cleaned up styling for Samples page and updated documentation.
- **2026 March** — Added dyslexia-friendly mode and screen reader accessibility improvements.
- **2025 July 17** — Updated pricing and header.
