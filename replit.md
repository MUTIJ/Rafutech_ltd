# Rafutech Ltd - Corporate Website

## Overview

Rafutech Ltd is a corporate website showcasing technology consulting services in AI solutions, web development, fintech, and custom software development. The application is built as a modern single-page application with a React frontend and Express backend, featuring a contact form system for lead generation.

The project follows a reference-based design approach inspired by companies like Linear, Stripe, and Vercel, emphasizing clean professionalism and technical expertise.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**: React with Vite for fast development and optimized production builds. TypeScript is used throughout for type safety.

**UI Component System**: shadcn/ui components built on Radix UI primitives, providing accessible, customizable components following the "New York" style variant. Components are aliased under `@/components` for clean imports.

**Styling Approach**: Tailwind CSS with a custom design system featuring:
- HSL-based color tokens for light/dark mode support
- Custom spacing primitives (4, 6, 8, 12, 16, 20, 24)
- Typography system using Inter for UI/body text and Space Grotesk for headlines
- Glassmorphic effects and elevation shadows for modern aesthetics

**State Management**: React Query (@tanstack/react-query) for server state management with custom API request utilities. Form state is managed via React Hook Form with Zod validation.

**Routing**: Wouter for lightweight client-side routing (currently single-page with home and 404 routes).

### Backend Architecture

**Server Framework**: Express.js with TypeScript, serving both API endpoints and static frontend assets.

**Development Setup**: Vite middleware integration in development mode for HMR (Hot Module Replacement), with production builds serving static files from `dist/public`.

**API Design**: RESTful endpoints under `/api` namespace:
- `POST /api/contact` - Submit contact inquiries
- `GET /api/contact/inquiries` - Retrieve all inquiries (admin)

**Request Logging**: Custom middleware captures request/response timing and JSON payloads for API routes, with intelligent truncation.

### Data Storage

**Database ORM**: Drizzle ORM with PostgreSQL dialect, configured for schema-first development with migrations output to `./migrations`.

**Schema Design**: 
- `users` table with username/password (authentication foundation)
- `contact_inquiries` table capturing name, email, service interest, message, and submission timestamp

**Validation**: Drizzle-Zod integration generates type-safe schemas from database definitions, with custom Zod extensions for email validation and minimum length requirements.

**Storage Abstraction**: Interface-based storage layer (`IStorage`) with in-memory implementation (`MemStorage`) for development/testing, designed to swap with database implementation via Drizzle.

**Database Provider**: Neon Database (@neondatabase/serverless) for serverless PostgreSQL, configured via `DATABASE_URL` environment variable.

### Design System

**Component Library**: Comprehensive shadcn/ui implementation including:
- Form controls (Input, Textarea, Select, Checkbox, Radio)
- Feedback components (Toast, Alert, Dialog)
- Navigation (Tabs, Accordion, Dropdown Menu)
- Data display (Card, Table, Badge, Avatar)
- Layout utilities (Separator, ScrollArea)

**Design Tokens**: CSS variables defined in `index.css` for colors, elevations, and shadows, enabling consistent theming across light/dark modes.

**Responsive Design**: Mobile-first approach with custom `useIsMobile` hook for conditional rendering based on 768px breakpoint.

### External Dependencies

**UI Framework Components**:
- Radix UI primitives for accessible component foundations
- Embla Carousel for image/content carousels
- Lucide React for iconography
- React Icons (Simple Icons) for brand logos

**Form Management**:
- React Hook Form for performant form handling
- @hookform/resolvers for Zod schema integration

**Development Tools**:
- Replit-specific plugins (cartographer, dev-banner, runtime-error-modal) for enhanced development experience
- esbuild for production server bundling

**Database & ORM**:
- Drizzle ORM for type-safe database operations
- Drizzle Kit for migrations
- @neondatabase/serverless for PostgreSQL connection

**Session Management**: 
- connect-pg-simple for PostgreSQL-backed sessions (infrastructure present, not yet actively used)

**Utilities**:
- clsx and tailwind-merge (via cn utility) for conditional className composition
- date-fns for date formatting
- class-variance-authority for component variant management

### Build & Deployment

**Development**: `npm run dev` runs tsx watch mode for hot-reloading Express server with Vite middleware.

**Production Build**: Two-step process:
1. Vite builds frontend to `dist/public`
2. esbuild bundles server code to `dist/index.js` as ESM module

**Type Checking**: `npm run check` for TypeScript validation without emission.

**Database Migrations**: `npm run db:push` applies schema changes to database.

### Path Aliases

Configured in both tsconfig and Vite for clean imports:
- `@/*` → `client/src/*` (frontend code)
- `@shared/*` → `shared/*` (shared types/schemas)
- `@assets/*` → `attached_assets/*` (images)