# True Levy Financial Consultant

## Overview

True Levy is a professional financial and business consulting service website that provides comprehensive services including company registration, GST filing, income tax filing, ROC compliance, and project finance assistance. The application is a modern, single-page web application built with React and Express, featuring a premium design aesthetic inspired by leading financial services platforms. The site emphasizes trust, professionalism, and accessibility with the tagline "Because Every Rupee Counts."

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Single-page application (SPA) using Wouter for lightweight client-side routing

**UI Component System**
- shadcn/ui component library (New York style variant) for consistent, accessible UI components
- Radix UI primitives providing accessible, unstyled component foundations
- Tailwind CSS for utility-first styling with custom design tokens
- Framer Motion for smooth animations and transitions throughout the interface

**Design System**
- Custom color scheme based on HSL values with CSS variables for theme consistency
- Typography system using Inter, Manrope, DM Sans, and Space Grotesk fonts
- Responsive grid layouts with mobile-first approach
- Premium minimalist aesthetic with purposeful whitespace and visual polish

**State Management**
- TanStack React Query (v5) for server state management and data fetching
- React Hook Form with Zod resolvers for form handling and validation
- Local component state using React hooks

### Backend Architecture

**Server Framework**
- Express.js as the Node.js web application framework
- TypeScript for type safety on the backend
- Custom middleware for request logging and JSON parsing with raw body access

**Development Setup**
- Vite middleware integration in development for seamless frontend-backend development
- Hot module replacement (HMR) support through Vite's development server
- Custom error handling and logging utilities

**API Structure**
- RESTful API design with all routes prefixed with `/api`
- Routes registered through a centralized `registerRoutes` function
- Request/response logging with performance metrics

### Data Storage Solutions

**Database Technology**
- PostgreSQL as the primary relational database
- Neon serverless PostgreSQL for cloud-based database hosting
- Drizzle ORM for type-safe database queries and schema management

**Schema Design**
- User table with UUID primary keys (auto-generated via `gen_random_uuid()`)
- Zod schema validation integrated with Drizzle for runtime type checking
- Migration-based schema management stored in `/migrations` directory

**Storage Abstraction**
- `IStorage` interface defines CRUD operation contracts
- `MemStorage` class provides in-memory implementation for development/testing
- Designed for easy swapping between in-memory and database-backed storage

### Authentication and Authorization

**Current Implementation**
- Basic user schema with username and password fields
- Session management prepared with `connect-pg-simple` for PostgreSQL-backed sessions
- Authentication endpoints ready to be implemented in routes

**Design Considerations**
- Password hashing not yet implemented but schema supports it
- Session storage configured for PostgreSQL backend
- Cookie-based session management approach

## External Dependencies

### Third-Party UI Libraries
- **Radix UI**: Complete suite of accessible, unstyled UI primitives including dialogs, dropdowns, popovers, tooltips, accordions, and form controls
- **shadcn/ui**: Pre-built component library built on Radix UI with Tailwind styling
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Touch-enabled carousel component

### Database & ORM
- **Neon Serverless PostgreSQL** (`@neondatabase/serverless`): Cloud PostgreSQL database service
- **Drizzle ORM** (`drizzle-orm`): Type-safe ORM with PostgreSQL dialect
- **Drizzle Kit** (`drizzle-kit`): Schema migration and management tool
- **Drizzle Zod** (`drizzle-zod`): Integration between Drizzle schemas and Zod validation

### Form Handling & Validation
- **React Hook Form**: Performant form state management
- **Zod**: TypeScript-first schema validation
- **@hookform/resolvers**: Integration between React Hook Form and validation libraries

### Data Fetching
- **TanStack React Query**: Powerful data synchronization and caching
- **date-fns**: Date manipulation and formatting utility

### Styling & Animation
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Utility for creating variant-based component APIs
- **clsx**: Utility for conditionally joining classNames
- **Framer Motion**: Production-ready animation library

### Session Management
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **Express**: Core web framework with JSON body parsing

### Build & Development Tools
- **Vite**: Next-generation frontend build tool
- **TypeScript**: Type-safe JavaScript development
- **esbuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS transformation with Autoprefixer
- **tsx**: TypeScript execution for development server

### Replit-Specific Integrations
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Code mapping for debugging
- **@replit/vite-plugin-dev-banner**: Development environment indicator

### Asset Management
- Images stored in `/attached_assets` directory including logos, partner logos, and AI-generated service visuals
- Static assets served through Vite in development and Express in production
- Path aliasing configured for `@assets` to simplify imports