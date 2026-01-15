# Psychologist Natasha Pereira Website

Responsive and modern landing page for psychologist Natasha Pereira, specialized in therapy for women.

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](https://github.com/leandrodsg/natasha-pereira-site/blob/main/LICENSE)

**Quick Start** • **Features** • **Performance** • **Testing**

## What is this?

Professional landing page developed with modern web development best practices. Created specifically to present psychologist Natasha Pereira's services, focusing on cognitive-behavioral therapy for women.

Key features:

- Mobile-first responsive design
- Complete WCAG 2.1 AA accessibility
- Optimized performance (Lighthouse ≥ 90)
- SEO optimized for search engines
- Complete automated testing

## Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/leandrodsg/natasha-pereira-site.git
cd natasha-pereira-site/frontend

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Optimized build
npm run build

# Start production server
npm start
```

## Tech Stack

### Frontend

- **Next.js 16** - React framework with App Router
- **React 19** - JavaScript library for interfaces
- **TypeScript** - Typed JavaScript
- **Tailwind CSS** - Utility-first CSS framework

### UI & Design

- **shadcn/ui** - Accessible and customizable components
- **Lucide React** - Modern icons
- **Geist** - Modern typeface

### Quality & Testing

- **Jest** - Testing framework
- **React Testing Library** - Component testing
- **Playwright** - E2E testing
- **ESLint** - Code linting
- **Prettier** - Code formatting

### DevOps

- **Husky** - Git hooks
- **lint-staged** - Automatic linting
- **Next.js Analytics** - Performance monitoring

## Core Features

### 🎨 Complete Design System

- Consistent color system (beige, olive green)
- Hierarchical typography with Geist
- Reusable components (Button, Card, Input)
- Responsive grid layout (24 desktop columns, 8 mobile)
- Mobile-first design

### ♿ WCAG 2.1 AA Accessibility

- Complete keyboard navigation
- Screen reader friendly (NVDA/VoiceOver)
- Adequate color contrast (4.5:1 minimum)
- Correct HTML semantics
- Visible focus indicators

### 📱 Full Responsiveness

- Mobile-first approach
- Optimized breakpoints (768px main)
- Adequate touch targets (44px minimum)
- Responsive images
- Adaptive layout

### 🚀 Optimized Performance

- Optimized Core Web Vitals
- Lighthouse Performance ≥ 90
- Optimized images (WebP + lazy loading)
- Automatic bundle splitting
- Smart caching

### 🧪 Complete Testing

- 100% unit test coverage
- E2E tests with Playwright
- Accessibility tests (axe-core)
- Responsiveness tests
- Strict TDD

## Performance Benchmarks

### Lighthouse Scores

```
Performance:    ≥ 90
Accessibility:  100
Best Practices: ≥ 90
SEO:           ≥ 90
```

### Core Web Vitals

```
LCP (Largest Contentful Paint): < 2.5s
FID (First Input Delay):       < 100ms
CLS (Cumulative Layout Shift): < 0.1
```

### Test Coverage

```
Unit Tests:     86 tests • 100% coverage
E2E Tests:      25 tests • 5 browsers
Accessibility:  0 violations (axe-core)
```

## Project Structure

```
frontend/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page
├── components/            # React components
│   ├── sections/          # Landing page sections
│   │   ├── Hero.tsx
│   │   ├── ProblemStatement.tsx
│   │   ├── SoundFamiliar.tsx
│   │   ├── AboutTherapist.tsx
│   │   ├── Services.tsx
│   │   ├── CTASection.tsx
│   │   └── Footer.tsx
│   └── ui/                # Base components
│       ├── button.tsx
│       ├── card.tsx
│       └── input.tsx
├── lib/                   # Utilities
│   ├── env.ts            # Environment validation
│   └── utils.ts          # Helper functions
├── e2e/                  # E2E tests
│   └── full-page.spec.ts
└── setup/                # Documentation
    ├── ROADMAP_NATASHA.md
    ├── SDD-Landing-Page.md
    └── documentation/
```

## Testing

### Run All Tests

```bash
# Unit tests + coverage
npm run test:coverage

# E2E tests (Playwright)
npm run test:e2e

# E2E tests with UI
npm run test:e2e:ui
```

### Test Results

- **Unit Tests**: 86 tests passing • 100% coverage
- **E2E Tests**: 25 tests passing • 5 browsers
- **Build**: ✅ Successful
- **Lint**: ✅ No errors

## Development

### Available Scripts

```bash
npm run dev           # Development server
npm run build         # Production build
npm run start         # Production server
npm run lint          # ESLint
npm run lint:fix      # ESLint with auto-fix
npm run format        # Prettier
npm run test          # Jest
npm run test:watch    # Jest in watch mode
npm run test:coverage # Jest with coverage
npm run test:e2e      # Playwright E2E
npm run test:e2e:ui   # Playwright with UI
```

### TDD Process

1. **Red**: Write failing test
2. **Green**: Implement minimal code
3. **Refactor**: Improve code keeping tests green
4. **Repeat**: For each feature

## SEO & Analytics

### Optimized Meta Tags

- Dynamic title per page
- Persuasive meta description
- Open Graph for social media
- Twitter Cards
- Canonical URLs

### Integrated Analytics

- Google Analytics 4 ready
- Performance monitoring
- User behavior tracking
- Conversion tracking

### Production Configuration

```bash
# Optimized build
npm run build

# Automatic deploy via Git
git push origin main
```

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Write tests first (TDD)
4. Commit your changes (`git commit -m 'Add new feature'`)
5. Push to the branch (`git push origin feature/new-feature`)
6. Open a Pull Request

### Code Standards

- **TDD**: Tests before implementation
- **TypeScript**: Strict typing
- **ESLint**: Follow configured rules
- **Prettier**: Automatic formatting
- **Conventional Commits**: Commit standard

## Project Stats

### Development Metrics

- **8 PRs** successfully implemented
- **86 unit tests** (100% coverage)
- **25 E2E tests** (5 browsers)
- **Performance**: Lighthouse ≥ 90
- **Accessibility**: WCAG 2.1 AA (100)
- **Bundle Size**: Optimized
- **SEO**: Complete meta tags

### Code Quality

- **TypeScript**: Strict mode enabled
- **ESLint**: Zero warnings/errors
- **Prettier**: Formatted code
- **Husky**: Pre-commit hooks
- **Security**: eslint-plugin-security

## License

MIT License - see [LICENSE](LICENSE) file for details.
