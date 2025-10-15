# Origyn - Features Overview

## What's Been Built

### 1. Landing Page (`/`)
- Minimalistic design
- Clear value proposition
- Call-to-action buttons linking to Dashboard and Docs

### 2. Documentation (`/docs`)
A comprehensive docs page including:
- Quick start guide
- Tech stack overview
- Project structure
- Available commands
- Authentication setup
- Database configuration
- Environment variables

### 3. Templates Page (`/templates`)
Showcases all available:
- Page templates (Landing, Auth, Dashboard, Docs)
- UI components (Button, Card, Input, etc.)
- Ready-to-use with descriptions

### 4. Enhanced Dashboard (`/dashboard`)
User dashboard with:
- Welcome section with user name
- Subscription status and management
- Quick commands reference
- Templates showcase with live links
- Boilerplates overview
- Link to documentation

## Navigation

The header includes links to:
- Home
- Templates
- Docs
- Dashboard

## User Flow

1. **New User**: Lands on home page → Views docs/templates → Signs up → Dashboard
2. **Returning User**: Login → Dashboard with all tools and resources
3. **Developer**: Quick access to templates, commands, and documentation

## Key Features

### For Users
- Clean, minimalistic UI
- Easy navigation
- Quick access to all resources
- Subscription management

### For Developers
- Production-ready boilerplate
- Complete authentication flow
- Database setup with Prisma
- TypeScript throughout
- Component library with shadcn/ui
- Dark/light mode

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Database**: PostgreSQL with Prisma
- **Auth**: Better Auth
- **Monorepo**: Turborepo with pnpm

## Quick Commands

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm db:push      # Sync database schema
pnpm db:studio    # Open database studio
```

## What Makes This Useful

1. **Boilerplates**: Complete setup for common startup needs
2. **Documentation**: Clear guides for getting started
3. **Templates**: Ready-to-use UI components and pages
4. **Dashboard**: Centralized hub for users with all tools
5. **Minimalistic**: Clean, focused design without clutter
