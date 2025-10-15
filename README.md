# origyn

Production-ready boilerplates, comprehensive documentation, and UI templates to launch your startup quickly.

## Features

- **TypeScript** - For type safety and improved developer experience
- **Next.js** - Full-stack React framework
- **TailwindCSS** - Utility-first CSS for rapid UI development
- **shadcn/ui** - Reusable UI components
- **Prisma** - TypeScript-first ORM
- **PostgreSQL** - Database engine
- **Authentication** - Better-Auth
- **Turborepo** - Optimized monorepo build system
- **Documentation** - Astro Starlight docs site

## Getting Started

First, install the dependencies:

```bash
pnpm install
```

## Database Setup

This project uses PostgreSQL with Prisma.

1. Make sure you have a PostgreSQL database set up.
2. Update your `apps/web/.env` file with your PostgreSQL connection details.

3. Generate the Prisma client and push the schema:
```bash
pnpm db:push
```

## Development

### Run Web App

```bash
pnpm dev:web
```

Open [http://localhost:3001](http://localhost:3001)

### Run Documentation

```bash
pnpm dev:docs
```

Open [http://localhost:4321](http://localhost:4321)

### Run All

```bash
pnpm dev
```

## Project Structure

```
origyn/
├── apps/
│   ├── web/         # Fullstack Next.js application
│   └── docs/        # Astro documentation site
├── packages/
│   ├── auth/        # Authentication configuration & logic
│   └── db/          # Database schema & queries
```

## Available Scripts

- `pnpm dev`: Start all applications in development mode
- `pnpm dev:web`: Start only the web app
- `pnpm dev:docs`: Start only the docs site
- `pnpm build`: Build all applications
- `pnpm check-types`: Check TypeScript types across all apps
- `pnpm db:push`: Push schema changes to database
- `pnpm db:studio`: Open database studio UI

## Documentation

Full documentation is available at the docs site. Run `pnpm dev:docs` and visit [http://localhost:4321](http://localhost:4321) for:

- Quick start guides
- Tech stack overview
- Authentication setup
- Database configuration
- Deployment guides
- API references

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Database**: PostgreSQL with Prisma
- **Auth**: Better Auth
- **Styling**: Tailwind CSS + shadcn/ui
- **Docs**: Astro with Starlight
- **Monorepo**: Turborepo with pnpm

---

Created with [Better-T-Stack](https://github.com/AmanVarshney01/create-better-t-stack)

```
origyn/
├── apps/
│   └── web/         # Fullstack application (Next.js)
├── packages/
│   ├── api/         # API layer / business logic
│   ├── auth/        # Authentication configuration & logic
│   └── db/          # Database schema & queries
```

## Available Scripts

- `pnpm dev`: Start all applications in development mode
- `pnpm build`: Build all applications
- `pnpm check-types`: Check TypeScript types across all apps
- `pnpm db:push`: Push schema changes to database
- `pnpm db:studio`: Open database studio UI
