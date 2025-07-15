# ZparX Marketing - Social Media Marketing Website

## Overview

This is a full-stack web application for ZparX Marketing, a social media marketing agency. The application features a modern, responsive landing page with contact form functionality, built using React with TypeScript for the frontend and Express with PostgreSQL for the backend.

## Recent Changes

- **July 15, 2025**: Implemented email tracking for offer page interactions (page visits, plan selections, Calendly opens)
- **July 15, 2025**: Added ZparX logo and clickable navigation back to main site on both offer pages
- **July 15, 2025**: Created social media management offer page at `/social-media` with three pricing tiers (Starter $497, Growth $797, Premium $1,197)
- **July 15, 2025**: Implemented tiered pricing structure for social media services with detailed feature comparisons
- **July 15, 2025**: Created lead generation marketing funnel at `/lead-gen-offer` with Calendly integration for 10-leads guarantee service
- **July 15, 2025**: Integrated Calendly scheduling (https://calendly.com/zparx/30min) for direct consultation bookings
- **July 15, 2025**: Added "Lead Generation" navigation button to drive traffic to offer page
- **July 14, 2025**: Updated Twitter bird icon to modern X logo in hero section while preserving bounce animation
- **July 14, 2025**: Changed presentation route from `/presentation` to `/presentation_A` per user request
- **July 14, 2025**: Configured ZparX logo favicon for entire website (all pages)
- **July 14, 2025**: Implemented interactive PDF slideshow presentation optimized for iPad viewing
- **July 14, 2025**: Set up Nodemailer email system for contact form submissions to Zparxmarketing@gmail.com

## User Preferences

Preferred communication style: Simple, everyday language.
No fake testimonials or false claims about past success/metrics - honest marketing approach only.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Email Service**: Nodemailer with Gmail SMTP
- **Session Management**: connect-pg-simple for PostgreSQL session store
- **Development**: Hot module replacement with Vite integration

## Key Components

### Frontend Components
- **Landing Page**: Single-page application with multiple sections
  - Hero section with call-to-action
  - Services overview with detailed offerings
  - Benefits section highlighting value propositions
  - About section with company information
  - Process workflow visualization
  - Client testimonials
  - Contact form with validation
  - Footer with navigation and social links

- **Contact Form**: Fully validated form using React Hook Form and Zod
  - Fields: First name, last name, email, phone, company, service interest, message
  - Real-time validation and error handling
  - Success/error toast notifications
  - Email notifications sent to business owner

### Backend Components
- **API Routes**: RESTful endpoints for contact form submission
- **Database Schema**: PostgreSQL tables for users and contact submissions
- **Storage Layer**: Abstracted storage interface with memory fallback
- **Email Integration**: Automated email notifications for new contacts

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on frontend
   - Form data validated with Zod schema
   - POST request sent to `/api/contact` endpoint
   - Backend validates data and stores in database
   - Email notification sent to business owner via Nodemailer
   - Success response returned to frontend
   - Toast notification shown to user

2. **Database Operations**:
   - Contact submissions stored in PostgreSQL
   - Drizzle ORM handles database queries and migrations
   - Schema validation ensures data integrity

## External Dependencies

### Frontend Dependencies
- **@radix-ui/react-***: Accessible UI component primitives
- **@tanstack/react-query**: Server state management and caching
- **@hookform/resolvers**: Form validation integration
- **tailwindcss**: Utility-first CSS framework
- **wouter**: Lightweight routing library
- **zod**: Runtime type validation
- **date-fns**: Date manipulation utilities

### Backend Dependencies
- **drizzle-orm**: Type-safe ORM for PostgreSQL
- **@neondatabase/serverless**: Serverless PostgreSQL client
- **nodemailer**: Email sending functionality
- **express**: Web application framework
- **zod**: Schema validation
- **connect-pg-simple**: PostgreSQL session store

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: ESBuild bundles Node.js server to `dist/index.js`
- **Database**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **Development**: Local development with Vite dev server and Express
- **Production**: Compiled assets served by Express with static file serving
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable
- **Email**: Gmail SMTP configuration via environment variables

### Key Scripts
- `dev`: Development server with hot reloading
- `build`: Production build for both frontend and backend
- `start`: Production server startup
- `db:push`: Apply database schema changes

### File Structure
```
├── client/          # React frontend
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── pages/       # Page components
│   │   ├── lib/         # Utilities and query client
│   │   └── hooks/       # Custom React hooks
├── server/          # Express backend
│   ├── index.ts     # Server entry point
│   ├── routes.ts    # API route definitions
│   ├── storage.ts   # Database abstraction layer
│   └── vite.ts      # Vite integration for development
├── shared/          # Shared TypeScript types and schemas
└── dist/           # Build output directory
```

This architecture provides a scalable foundation for a marketing agency website with modern development practices, type safety, and efficient data handling.