# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Fritz & Chester Xmas Landing is a Christmas-themed marketing landing page for the Fritz & Chester chess learning game. It's a single-page application showcasing the game's features, benefits, and gift-giving options.

## Tech Stack

- **Vite** - Build tool and dev server
- **React 18** - UI framework
- **TypeScript** - Type-safe JavaScript
- **shadcn/ui** - Component library built on Radix UI primitives
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **TanStack Query** - Data fetching and state management
- **jsPDF** - Certificate generation

## Development Commands

```sh
# Install dependencies
npm install

# Start development server (runs on http://[::]:8080)
npm run dev

# Build for production
npm run build

# Build for development mode
npm run build:dev

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── landing/         # Main landing page sections
│   │   ├── HeroSection.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── StorySection.tsx
│   │   ├── GiftKitSection.tsx
│   │   ├── MethodSection.tsx
│   │   ├── TechSpecsSection.tsx
│   │   ├── TestimonialSection.tsx
│   │   ├── FooterCTA.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── SnowEffect.tsx        # Visual effects
│   │   ├── StarField.tsx         # Visual effects
│   │   ├── CertificateGenerator.tsx
│   │   ├── CookieConsent.tsx
│   │   └── index.ts              # Re-exports all components
│   └── ui/              # shadcn/ui components
├── data/
│   └── landingData.ts   # Content data (benefits, specs, pricing)
├── pages/
│   ├── Index.tsx        # Main landing page
│   ├── Impressum.tsx
│   ├── PrivacyPolicy.tsx
│   └── NotFound.tsx
├── hooks/               # React hooks
├── lib/
│   └── utils.ts         # Utility functions (cn helper)
└── App.tsx              # Root component with routing
```

## Architecture

### Component Organization

The app uses a **section-based architecture** where the main landing page (`pages/Index.tsx`) composes multiple section components from `components/landing/`. Each section is self-contained and handles its own layout and styling.

All landing components are re-exported through `components/landing/index.ts` for clean imports.

### Data Management

Static content (benefits, gift steps, method items, tech specs, pricing) is centralized in `src/data/landingData.ts`. This includes:
- Benefit items with icons and descriptions
- Gift purchase flow steps
- Teaching method descriptions
- Technical specifications
- Price and currency formatting

### Routing

React Router is configured in `App.tsx` with the following routes:
- `/` - Main landing page
- `/impressum` - Legal imprint
- `/privacy-policy` - Privacy policy
- `*` - 404 catch-all (must be last)

**Important:** Add custom routes ABOVE the catch-all `*` route in `App.tsx`.

### Styling

Uses **Tailwind CSS** with custom theme extensions in `tailwind.config.ts`:
- Custom colors: Christmas theme (gold, green, dark), game colors (sky, grass, castle, parchment, royal)
- Custom fonts: Lobster (display), Fredoka (sans-serif)
- Custom animations: float, bounce-gentle, wiggle, wiggle-bounce

CSS variables are defined in `src/index.css` and referenced via `hsl(var(--variable-name))` pattern.

### shadcn/ui Configuration

Components are configured via `components.json`:
- Style: default
- Base color: slate
- CSS variables: enabled
- Path aliases: `@/components`, `@/lib/utils`, etc.

## Path Aliases

TypeScript path aliases are configured in `tsconfig.json` and `vite.config.ts`:
- `@/*` maps to `./src/*`

Always use the `@/` alias for imports within the project:
```typescript
import { Button } from "@/components/ui/button";
import { benefits } from "@/data/landingData";
```

## TypeScript Configuration

The project has relaxed TypeScript settings for rapid development:
- `noImplicitAny: false`
- `noUnusedParameters: false`
- `noUnusedLocals: false`
- `strictNullChecks: false`
- `allowJs: true`

## Development Server

Vite dev server is configured to:
- Listen on all interfaces (`host: "::"`)
- Run on port 8080
- Use React SWC plugin for fast refresh

## Adding New Landing Sections

1. Create component in `src/components/landing/YourSection.tsx`
2. Export from `src/components/landing/index.ts`
3. Import and add to `src/pages/Index.tsx`
4. If needed, add data to `src/data/landingData.ts`

## Adding shadcn/ui Components

Use the shadcn CLI (components are already configured):
```sh
npx shadcn@latest add [component-name]
```

Components are added to `src/components/ui/` and can be imported via the `@/components/ui` alias.
