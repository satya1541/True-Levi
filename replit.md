# True Levy Financial Consultant

## Overview

True Levy is a professional financial and business consulting service website offering company registration, GST filing, income tax filing, ROC compliance, and project finance assistance. Built with React and Express, this single-page application aims to provide a modern, premium online presence, emphasizing trust, professionalism, and accessibility under the tagline "Because Every Rupee Counts." The project's ambition is to establish True Levy as a leading financial consultant in India.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend

The frontend is a React 18 SPA with TypeScript, utilizing Vite for fast development. UI is built with `shadcn/ui` (New York style) on `Radix UI` primitives, styled using Tailwind CSS and custom design tokens. `Framer Motion` handles animations. State management uses `TanStack React Query` for server state and `React Hook Form` with Zod for forms. It features a custom HSL-based color scheme, responsive grid layouts, and a premium minimalist aesthetic. UI/UX enhancements include dark mode support, a tax savings calculator, trust signals, case studies, team credentials, FAQ section, scroll-reveal animations, animated statistics, and mobile optimizations like click-to-call integration.

### Backend

The backend uses Express.js with TypeScript, featuring a RESTful API (prefixed with `/api`), custom middleware for logging, and seamless integration with Vite for development.

### Data Storage

PostgreSQL is the primary database, utilizing Neon serverless PostgreSQL for cloud hosting. `Drizzle ORM` manages type-safe queries and schema, with migrations stored in the `/migrations` directory. An `IStorage` interface allows for easy swapping between in-memory and database-backed storage.

### Authentication and Authorization

The system includes a basic user schema, and `connect-pg-simple` is configured for PostgreSQL-backed session management, supporting future implementation of password hashing and cookie-based sessions.

### SEO Implementation

Comprehensive SEO includes primary meta tags, Open Graph and Twitter Card tags, canonical URLs, `Schema.org` structured data (ProfessionalService, LocalBusiness), `sitemap.xml`, `robots.txt`, and content optimization with LSI keywords and proper heading structure.

## External Dependencies

### UI Libraries & Styling

- **Radix UI**: Accessible, unstyled UI primitives.
- **shadcn/ui**: Component library built on Radix UI and Tailwind CSS.
- **Lucide React**: Icon library.
- **Embla Carousel**: Touch-enabled carousel.
- **Tailwind CSS**: Utility-first CSS framework.
- **Framer Motion**: Animation library.
- **class-variance-authority**: For variant-based component APIs.
- **clsx**: For conditional classNames.

### Database & ORM

- **Neon Serverless PostgreSQL** (`@neondatabase/serverless`).
- **Drizzle ORM** (`drizzle-orm`): Type-safe ORM for PostgreSQL.
- **Drizzle Kit** (`drizzle-kit`): Schema migration and management.
- **Drizzle Zod** (`drizzle-zod`): Integration with Zod validation.

### Form Handling & Validation

- **React Hook Form**: Performant form state management.
- **Zod**: TypeScript-first schema validation.
- **@hookform/resolvers**: Integration for React Hook Form.

### Data Fetching & Utilities

- **TanStack React Query**: Data synchronization and caching.
- **date-fns**: Date manipulation and formatting.

### Session Management

- **connect-pg-simple**: PostgreSQL session store for Express.
- **Express**: Core web framework.

### Build & Development Tools

- **Vite**: Frontend build tool.
- **TypeScript**: Type-safe development.
- **esbuild**: Fast JavaScript bundler.
- **PostCSS**: CSS transformation.
- **tsx**: TypeScript execution for dev server.

### Replit-Specific Integrations

- **@replit/vite-plugin-runtime-error-modal**
- **@replit/vite-plugin-cartographer**
- **@replit/vite-plugin-dev-banner**

### Asset Management

- Images: `/attached_assets` directory.