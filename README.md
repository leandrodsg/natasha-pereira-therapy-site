# Natasha Pereira - Psychologist

> Professional landing page for a psychologist specialized in Cognitive-Behavioral Therapy for women. Built with Next.js 16, React 19, and TypeScript, focused on performance, accessibility, and user experience.

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC)](https://tailwindcss.com/)
[![Jest](https://img.shields.io/badge/Jest-29-C21325)](https://jestjs.io/)
[![Playwright](https://img.shields.io/badge/Playwright-1.49-2EAD33)](https://playwright.dev/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## About the Project

Modern landing page built with focus on three fundamental pillars: **accessibility**, **performance**, and **code quality**. The project showcases the psychology services of Dr. Natasha Pereira, CRP 01/22302, with emphasis on online therapy for women.

**[View Live Site](https://natasha-pereira-therapy-site.vercel.app/)**

### Technical Highlights

**Architecture**

- Next.js 16 with App Router and Server Components
- React 19 with concurrent features support
- TypeScript in strict mode for type safety
- Tailwind CSS 4 for modular styling

**Quality & Testing**

- **561 unit tests** (56 test suites) with 100% code coverage
- **340 E2E tests** (5 skipped) across 5 browsers (Chromium, Firefox, WebKit, Mobile Chrome/Safari)
- **100+ accessibility tests** - zero violations (axe-core)
- **Security tests** - headers and vulnerability scanning
- **Responsive tests** - all viewports from mobile to 4K
- **Performance tests** - Core Web Vitals monitoring
- **Visual regression tests** - screenshot comparisons
- **Integration tests** - API and data flow validation
- Rigorous TDD throughout development

**Performance**

- **Lighthouse 100/100** in all categories (Production)
  - Performance: 100
  - Accessibility: 100
  - Best Practices: 100
  - SEO: 100
- Optimized Core Web Vitals
- Next.js Image for automatic optimization
- Automatic code splitting and tree shaking

---

## Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

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

| Tool                  | Function                             |
| --------------------- | ------------------------------------ |
| Jest                  | Unit testing framework               |
| React Testing Library | Component testing                    |
| Playwright            | E2E testing across multiple browsers |
| axe-core              | Accessibility auditing               |
| ESLint                | Code linting                         |
| Prettier              | Code formatting                      |

---

## Features

### Complete Design System

Consistent and scalable design system based on:

- Professional color palette (beige #f4eee5, marsala #662B2D, olive #4F5543)
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

**Lighthouse Scores (Production)**

```
Performance:    100
Accessibility:  100
Best Practices: 100
SEO:            100
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
- Strategic caching with proper Cache-Control headers
- Security headers (HSTS, X-Frame-Options, X-Content-Type-Options, etc.)

### Comprehensive Test Coverage

This project implements a **multi-layered testing strategy** covering all critical aspects:

#### Test Pyramid

```
📊 Total: 950+ tests
├─ 561 Unit Tests (100% coverage)
├─ 340 E2E Tests (5 browsers)
├─ 100+ Accessibility Tests
├─ 50+ Security Tests
├─ 40+ Performance Tests
└─ 30+ Visual Regression Tests
```

#### Test Categories

**Unit & Integration Tests** (561 tests)

- Component rendering and behavior
- User interactions (clicks, forms, keyboard)
- State management and hooks
- Utility functions and data transformations
- Error handling and edge cases
- 100% code coverage (statements, branches, functions, lines)

**End-to-End Tests** (340 tests, 5 skipped)

- Full user journeys across 5 browsers
- Navigation and routing
- Form submissions and validations
- Dynamic content loading
- Cross-browser compatibility
- Mobile and desktop viewports

**Accessibility Tests** (100+ tests)

- WCAG 2.1 AA compliance
- Keyboard navigation (Tab, Enter, Escape, Arrow keys)
- Screen reader support (NVDA, VoiceOver, JAWS)
- Color contrast verification (minimum 4.5:1)
- ARIA attributes and roles
- Focus management and visual indicators
- Skip links and landmark regions
- Zero violations reported by axe-core

**Security Tests** (50+ tests)

- Security headers validation (HSTS, X-Frame-Options, X-XSS-Protection)
- XSS and injection attack prevention
- HTTPS enforcement
- Secure cookie configuration
- Content Security Policy compliance
- Clickjacking protection

**Performance Tests** (40+ tests)

- Core Web Vitals monitoring (LCP, INP, CLS)
- Bundle size limits
- Image optimization verification
- Font loading strategies
- Network payload analysis
- JavaScript execution time

**Visual Regression Tests** (30+ tests)

- Screenshot comparisons across components
- Responsive layout validation (mobile to 4K)
- Font rendering consistency
- Color palette accuracy
- Layout shifts detection

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
│   └── page.tsx                 # Main page with lazy loading
│
├── components/
│   ├── Header.tsx               # Main navigation with scroll behavior
│   ├── SkipLink.tsx             # Accessibility skip link
│   ├── WhatsAppButton.tsx       # Floating WhatsApp CTA
│   │
│   ├── sections/                # Landing page sections
│   │   ├── Hero.tsx             # Hero section with CTA
│   │   ├── SoundFamiliar.tsx    # Problem identification
│   │   ├── AboutTherapist.tsx   # About the psychologist
│   │   ├── Credentials.tsx      # Credentials and education
│   │   ├── Services.tsx         # Services offered
│   │   ├── HowItWorks.tsx       # How therapy works
│   │   ├── FAQSection.tsx       # Frequently asked questions
│   │   ├── Reviews.tsx          # Doctoralia reviews carousel
│   │   ├── InstagramFeed.tsx    # Instagram feed widget
│   │   └── Footer.tsx           # Footer with links
│   │
│   ├── icons/                   # SVG icon components
│   │   └── SocialIcons.tsx      # WhatsApp, Instagram icons
│   │
│   └── ui/                      # Base components (shadcn/ui)
│       ├── button.tsx
│       ├── card.tsx
│       └── input.tsx
│
├── lib/
│   ├── env.ts                   # Environment variable validation (Zod)
│   ├── utils.ts                 # Utility functions
│   ├── whatsapp.ts              # WhatsApp link generation
│   ├── reviews-data.ts          # Doctoralia reviews data
│   ├── *-data.ts                # Section content data
│   └── *-schema.ts              # JSON-LD schemas for SEO
│
├── e2e/                         # E2E tests (Playwright)
│   ├── accessibility-navigation.spec.ts
│   ├── navigation.spec.ts
│   ├── faq.spec.ts
│   ├── footer.spec.ts
│   ├── fonts.spec.ts
│   ├── credentials.spec.ts
│   └── security-headers.spec.ts
│
├── public/
│   └── images/                  # Static images
│       ├── instagram/           # Instagram feed images
│       └── ...
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

- 340 tests (5 skipped, 335 passed)
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

### Technical Documentation

**Software Design Document (SDD)**

- **1200+ lines** of comprehensive technical documentation
- Complete architecture and design system specifications
- Grid system, colors, typography, and spacing standards
- Component specifications and implementation guidelines
- Performance, accessibility, and SEO guidelines

### Development Workflow (TDD)

This project strictly follows the **TDD (Test-Driven Development)** cycle:

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
