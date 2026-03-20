# Wanda McCrae: Freelance Web Developer

Mobile-first responsive design. Live on [freelance.wandamccrae.com](https://freelance.wandamccrae.com).

Date: 2025 July

CI/CD: deployed from GitHub Repository to Netlify.
[![Netlify Status](https://api.netlify.com/api/v1/badges/0e1b9ad1-9c93-459f-9951-51fb8fed5061/deploy-status)](https://app.netlify.com/projects/wm-freelance/deploys)

## Tech Stack
- React 19
- React Router v7
- CSS
- Google Fonts (Overlock, Roboto, Lexend)

## Features
- Mobile-first responsive design
- Dyslexia-friendly mode — toggleable from the header; applies the Lexend font, increased letter/word spacing, taller line height, and a warm background colour; preference is saved to `localStorage`
- Screen reader accessibility — skip navigation link, ARIA landmarks and labels, `aria-current` on active nav links, table column scopes, single `h1` per page

## Pages
- **Home** — Overview of services offered
- **Sample Sites** — Links to completed client and personal projects
- **Pricing** — Flat-rate pricing tables for web development, business name registration, and domain hosting setup
- **Contact** — Contact form powered by [FormSubmit](https://formsubmit.co)

## Getting Started

```bash
npm install
npm start   # development server at http://localhost:3000
npm run build   # production build
```

## Revision History
- 2025 July 17: Updated pricing and header.
- 2026 March: Added dyslexia-friendly mode and screen reader accessibility improvements.
