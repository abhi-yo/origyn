"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto max-w-7xl px-6 md:px-24 py-24 md:py-28">
      {/* Hero */}
      <section className="space-y-5 md:space-y-6">
        <div className="max-w-3xl">
          <h1 className="heading text-5xl md:text-6xl font-medium tracking-tight leading-[1.08] -mt-12">
            Origyn
          </h1>
          <p className="mt-4 text-base md:text-lg text-muted-foreground/90 leading-relaxed">
            Start building faster
          </p>
          <p className="mt-3 text-sm md:text-base text-muted-foreground/80 leading-7 md:leading-8 max-w-prose [text-wrap:balance]">
            Production-ready boilerplates, comprehensive documentation, and UI
            templates to launch your startup quickly.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button className="elevated-md transition-all hover:elevated-lg h-10 md:h-11 px-6 md:px-7" asChild>
              <Link href="/dashboard">Get Started</Link>
            </Button>
            <Button variant="outline" className="elevated-sm transition-all hover:elevated-md h-10 md:h-11 px-6 md:px-7" asChild>
              <a href="http://localhost:4321" target="_blank" rel="noopener noreferrer">
                View Docs
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Simple info grid */}
      <section className="mt-16 md:mt-20">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-1.5">
            <div className="text-sm font-medium">Boilerplates</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Next.js, Prisma, Better Auth — wired and ready.
            </p>
          </div>
          <div className="space-y-1.5">
            <div className="text-sm font-medium">Documentation</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Concise guides from setup to deployment.
            </p>
          </div>
          <div className="space-y-1.5">
            <div className="text-sm font-medium">Templates</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Prebuilt UI patterns to ship quickly.
            </p>
          </div>
        </div>
      </section>

      {/* Quick start + Stack */}
      <section className="mt-16 md:mt-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-2">
            <div className="text-sm font-medium">Quick start</div>
            <ol className="text-sm text-muted-foreground leading-relaxed list-decimal list-inside space-y-1.5">
              <li>Clone a boilerplate</li>
              <li>Set env and database</li>
              <li>pnpm dev to run locally</li>
            </ol>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium">Stack</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Next.js • Prisma • Tailwind • shadcn/ui • Better Auth • Polar payments
            </p>
            <div className="pt-1">
              <Link href="/templates" className="text-sm text-foreground/80 hover:underline">
                Browse templates
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
