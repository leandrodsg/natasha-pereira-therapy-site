# Natasha Pereira - Psychologist

> Professional landing page for a psychologist specialized in Cognitive-Behavioral Therapy for women. Built with Next.js 16, React 19, and TypeScript, focused on performance, accessibility, and user experience.

🌐 **Live Site:** [natasha-pereira-therapy-site.vercel.app](https://natasha-pereira-therapy-site.vercel.app/)

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC)](https://tailwindcss.com/)
[![Jest](https://img.shields.io/badge/Jest-29-C21325)](https://jestjs.io/)
[![Playwright](https://img.shields.io/badge/Playwright-1.49-2EAD33)](https://playwright.dev/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

```bash
npm install && npm run dev
```

---

## About the Project

Modern landing page built with focus on three fundamental pillars: **accessibility**, **performance**, and **code quality**. The project showcases the psychology services of Dr. Natasha Pereira, CRP 01/22302, with emphasis on online therapy for women.

### Technical Highlights

**Architecture**

- Next.js 16 with App Router and Server Components
- React 19 with concurrent features support
- TypeScript in strict mode for type safety
- Tailwind CSS 4 for modular styling

**Quality**

- 512 unit tests with 100% coverage
- 340 E2E tests across 5 different browsers
- Rigorous TDD throughout development
- Zero accessibility violations (axe-core)

**Performance**

- Lighthouse Performance: 95+
- Optimized Core Web Vitals
- Optimized images with Next.js Image
- Automatic bundle splitting

---

## Quick Start

### Prerequisites

```bash
Node.js 18+
npm or yarn
```

### Installation and Setup

```bash
# Clone the repository
git clone https://github.com/leandrodsg/natasha-pereira-site.git
cd natasha-pereira-site/frontend

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env.local
# Edit .env.local with your settings

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build    # Generate optimized build
npm start        # Start production server
```

---

## Tech Stack

### Core

| Technology   | Version | Purpose                         |
| ------------ | ------- | ------------------------------- |
| Next.js      | 16.1    | React framework with App Router |
| React        | 19.0    | UI library                      |
| TypeScript   | 5.7     | Typed JavaScript                |
| Tailwind CSS | 4.0     | Utility-first CSS               |

### UI & Design

| Tool             | Usage                                  |
| ---------------- | -------------------------------------- |
| shadcn/ui        | Accessible and customizable components |
| Lucide React     | Modern icon system                     |
| Sorts Mill Goudy | Display typography                     |
| Lora             | Body typography                        |

### Quality & Testing

| Tool | Function |
| ---- | -------- |

| Jest | Unit testing framework |
| React Testing Library | Component testing |
| Playwright | E2E testing across multiple browsers |
| axe-core | Accessibility auditing |
| ESLint | Code linting |
| Prettier | Code formatting |

---

## Features

### Complete Design System

Consistent and scalable design system based on:

- Professional color palette (beige #f4eee5, marsala #662B2D)
- Hierarchical typography with Google Fonts (Sorts Mill Goudy, Lora, Inter)
- Reusable components (Button, Card, Input, etc.)
- Responsive grid (mobile-first)
- Design tokens for maintainability

### WCAG 2.1 AA Accessibility

Complete implementation of accessibility standards:

- Full keyboard navigation (Tab, Enter, Escape)
- Screen reader support (NVDA, VoiceOver)
- Adequate color contrast (minimum 4.5:1)
- Correct semantic HTML
- Skip links for quick navigation
- Visual focus indicators
- Appropriate ARIA labels and roles

### Optimized Performance

Metrics and optimizations applied:

**Lighthouse Scores**

```
Performance:    95+
Accessibility:  100
Best Practices: 95+
SEO:           95+
```

**Core Web Vitals**

```
LCP (Largest Contentful Paint):  < 2.5s
INP (Interaction to Next Paint):  < 200ms
CLS (Cumulative Layout Shift):    < 0.1
```

**Optimizations**

- Next.js Image for automatic optimization
- Image lazy loading
- Automatic bundle splitting
- Server Components when possible
- Strategic caching

### Test Coverage

Quality assurance through comprehensive testing:

```
Unit Tests:       512 tests • 100% coverage
E2E Tests:        340 tests • 5 browsers
Accessibility:    0 violations (axe-core)
```

**Browsers Tested**

- Chromium (Desktop)
- Firefox (Desktop)
- WebKit (Desktop)
- Mobile Chrome (Android)
- Mobile Safari (iOS)

---

## Project Structure

```
frontend/
├── app/
│   ├── globals.css              # Global styles and Tailwind
│   ├── layout.tsx               # Root layout with fonts
│   └── page.tsx                 # Main page
│
├── components/
│   ├── Header.tsx               # Main navigation
│   ├── SkipLink.tsx            # Accessibility skip link
│   ├── layout-wrapper.tsx       # Main container
│   │
│   ├── sections/               # Landing page sections
│   │   ├── Hero.tsx           # Hero section with CTA
│   │   ├── SoundFamiliar.tsx  # Problem list
│   │   ├── AboutTherapist.tsx # About the psychologist
│   │   ├── Credentials.tsx    # Credentials and education
│   │   ├── Services.tsx       # Services offered
│   │   ├── HowItWorks.tsx     # How it works
│   │   ├── FAQSection.tsx     # Frequently asked questions
│   │   ├── CTASection.tsx     # Call-to-action
│   │   └── Footer.tsx         # Footer
│   │
│   └── ui/                    # Base components (shadcn/ui)
│       ├── button.tsx
│       ├── card.tsx
│       └── input.tsx
│
├── lib/
│   ├── env.ts                 # Environment variable validation
│   ├── utils.ts               # Utility functions
│   ├── security.ts            # Security helpers
│   ├── whatsapp.ts            # WhatsApp link generation
│   ├── *-data.ts             # Section data
│   └── *-schema.ts           # JSON-LD schemas for SEO
│
├── e2e/                       # E2E tests (Playwright)
│   ├── accessibility.spec.ts
│   ├── full-page.spec.ts
│   ├── navigation.spec.ts
│   ├── responsive.spec.ts
│   └── ...
│
├── public/
│   └── images/               # Static images
```

---

## Testing

### Running Tests

```bash
# Unit tests
npm test

# Unit tests with coverage
npm run test -- --coverage

# Unit tests in watch mode
npm run test -- --watch

# E2E tests
npm run test:e2e

# E2E tests with UI
npm run test:e2e -- --ui

# E2E tests in debug mode
npm run test:e2e -- --debug
```

### Current Coverage

```
----------------------------|---------|----------|---------|---------|
File                        | % Stmts | % Branch | % Funcs | % Lines |
----------------------------|---------|----------|---------|---------|
All files                   |     100 |      100 |     100 |     100 |
 components                 |     100 |      100 |     100 |     100 |
 components/sections        |     100 |      100 |     100 |     100 |
 components/ui              |     100 |      100 |     100 |     100 |
 lib                        |     100 |      100 |     100 |     100 |
----------------------------|---------|----------|---------|---------|
```

### E2E Results

- 340 tests passing
- 5 browsers tested (Chromium, Firefox, WebKit, Mobile Chrome, Mobile Safari)
- 0 accessibility violations
- Average time: ~3 minutes

---

## Development

### Available Scripts

```bash
# Development
npm run dev              # Development server (localhost:3000)
npm run build            # Production build
npm start                # Production server

# Code quality
npm run lint             # Check issues with ESLint
npm run lint:fix         # Fix issues automatically
npm run format           # Format code with Prettier

# Testing
npm test                 # Jest (unit tests)
npm run test -- --watch  # Jest in watch mode
npm run test:e2e         # Playwright (E2E tests)
```

### Development Workflow (TDD)

This project strictly follows the TDD (Test-Driven Development) cycle:

1. **Red** - Write a failing test
2. **Green** - Implement minimal code to pass
3. **Refactor** - Improve code while keeping tests green
4. **Repeat** - For each new feature

### Code Standards

**TypeScript**

- Strict mode enabled
- Explicit types (no `any`)
- Interfaces for component props
- Enums for fixed values

**React**

- Functional components
- Hooks for state and effects
- Props destructuring
- Server Components when possible

**CSS/Tailwind**

- Utility classes
- Design tokens via CSS variables
- Mobile-first breakpoints
- Isolated components (no unnecessary global styles)

**Commits**

- Conventional Commits
- Descriptive messages
- One commit per feature/fix

---

## SEO & Meta Tags

### Implemented Optimizations

**Basic Meta Tags**

- Dynamic and descriptive title
- Optimized meta description
- Canonical URLs
- Responsive viewport

**Open Graph (Social Media)**

- og:title, og:description
- og:image with optimized preview
- og:type, og:url, og:locale

**Schema.org (JSON-LD)**

- FAQPage schema for frequently asked questions
- LocalBusiness schema for psychologist information
- Organization schema

**SEO Performance**

- Automatically generated sitemap.xml
- Configured robots.txt
- SEO-friendly URLs
- Semantic heading structure (H1 → H6)

---

## Project Metrics

### Code

```
Lines of Code:     ~8,000
React Components:  35+
Unit Tests:        512 (100% coverage)
E2E Tests:         340 (5 browsers)
```

### Quality

```
TypeScript:       Strict mode
ESLint:           0 warnings, 0 errors
Prettier:         100% formatted
Commits:          Conventional Commits
```

### Performance

```
Lighthouse Desktop:  95+
Lighthouse Mobile:   90+
Bundle Size:         Optimized
First Load JS:       ~150 KB
```

---

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository
2. Create a branch for your feature (`git checkout -b feature/new-feature`)
3. Write tests first (TDD)
4. Implement the functionality
5. Ensure 100% test coverage
6. Commit your changes (`git commit -m 'Add new feature'`)
7. Push to the branch (`git push origin feature/new-feature`)
8. Open a Pull Request

---

## License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.

---

Built with Next.js 16, React 19, and TypeScript
