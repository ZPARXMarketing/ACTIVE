# ZparX Marketing - Social Media Marketing Website

## Overview

This is a full-stack web application for ZparX Marketing, a Huntsville, Alabama-based lead generation agency. The application features a clean, focused landing page specializing in generating quote-ready leads for local businesses through strategic social media advertising.

## Recent Changes

- **July 15, 2025**: Completely redesigned website to focus on lead generation for local businesses
- **July 15, 2025**: Simplified site structure: Hero → About (Who Are We) → Contact form
- **July 15, 2025**: Updated hero section with "We Generate Quote-Ready Leads for Your Local Business" 
- **July 15, 2025**: Created "Who Are We" section highlighting Huntsville, Alabama location and 3-step process
- **July 15, 2025**: Redesigned contact form to match RenoReach style with simplified fields (Full Name, Website, Email, Phone)
- **July 15, 2025**: Restored original color scheme (purple, gold, red) after removing orange branding and "Get 10 New Quote-Ready Leads Within 30 Days, or You Don't Pay" guarantee
- **July 15, 2025**: Removed unnecessary sections (Services, Benefits, Process, Testimonials) for cleaner focus
- **July 15, 2025**: Removed "Lead Generation" navigation button to make it a private funnel accessible only via direct URL
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