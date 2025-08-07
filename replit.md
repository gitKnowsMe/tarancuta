# Țărăncuța - Traditional Romanian Business Website

## Overview

This is a React-based website for "Țărăncuța", a traditional Romanian small business from the village of Cojușna, Moldova. The business sells homemade pastries (plăcinte, bread, cookies) and fresh seasonal fruits and vegetables. The website features a warm, authentic design that reflects rural Romanian culture while maintaining modern usability and mobile responsiveness.

The application is built as a full-stack web application with a React frontend using TypeScript, Tailwind CSS with shadcn/ui components, and an Express.js backend. The design emphasizes traditional feminine aesthetics with warm colors (orange, cream, brown) and handwritten-style fonts to convey the authentic, homemade nature of the products.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component patterns
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with extensive customization for brand-specific colors and typography
- **Component Library**: shadcn/ui components built on Radix UI primitives for accessibility
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe forms
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript running on Node.js
- **Database ORM**: Drizzle ORM configured for PostgreSQL with type-safe queries
- **Database**: PostgreSQL (configured but currently using in-memory storage)
- **Session Management**: express-session with connect-pg-simple for PostgreSQL session store
- **Development**: Hot module replacement with Vite integration for seamless full-stack development

### Design System
- **Typography**: Google Fonts integration (Caveat for handwritten style, Inter for body text)
- **Color Palette**: Custom warm color scheme with CSS variables
  - Primary: Warm orange (#D97706 equivalent)
  - Secondary: Deep brown for contrast
  - Accent: Fresh green for seasonal elements
  - Background: Cream (#FEF7ED equivalent)
- **Component Architecture**: Modular React components for hero, navigation, product categories, testimonials, etc.

### Data Layer
- **Database Schema**: Drizzle schema defined with user table structure
- **Type Safety**: End-to-end TypeScript with shared types between frontend and backend
- **Storage Interface**: Abstracted storage layer with in-memory implementation (ready for PostgreSQL)

### Content Structure
The website follows a single-page application structure with smooth scrolling navigation:
1. Hero section with call-to-action
2. Product categories (bakery items and garden produce)
3. About section with business story
4. Weekly baskets/subscriptions
5. Customer testimonials
6. Contact information and footer

### Development Environment
- **Package Manager**: npm with lock file for dependency consistency
- **Development Server**: Vite dev server with Express API integration
- **Error Handling**: Runtime error overlay for development debugging
- **Build Process**: Separate client and server builds with ESBuild for server bundling

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Router alternative (Wouter)
- **TypeScript**: Full TypeScript support across frontend and backend
- **Build Tools**: Vite for frontend bundling, ESBuild for server bundling

### Database and Storage
- **Drizzle ORM**: Type-safe ORM with PostgreSQL dialect configuration
- **Neon Database**: Serverless PostgreSQL driver (@neondatabase/serverless)
- **Session Storage**: connect-pg-simple for PostgreSQL-backed sessions

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Radix UI**: Comprehensive set of accessible component primitives
- **shadcn/ui**: Pre-built component library based on Radix UI
- **Lucide React**: Modern icon library for UI icons

### Form and Data Management
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: Runtime type validation and schema definition
- **Class Variance Authority**: Type-safe component variant management

### Development and Build Tools
- **TSX**: TypeScript execution for development server
- **Autoprefixer**: CSS vendor prefix automation
- **Date-fns**: Modern date manipulation library
- **Nanoid**: URL-safe unique ID generation

### External Services Ready
The application is structured to integrate with:
- Email services for contact forms and order notifications
- Payment processing for online orders
- Social media APIs (Facebook, Instagram, WhatsApp integration prepared)
- Analytics and tracking services
- Image optimization and CDN services for product photos