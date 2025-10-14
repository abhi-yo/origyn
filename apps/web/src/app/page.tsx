"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto max-w-7xl px-6 md:px-24 py-24 md:py-28">
      {/* Hero */}
      <section className="space-y-5 md:space-y-6">
        <div className="max-w-3xl">
          <h1 className="heading text-5xl md:text-6xl font-medium tracking-tight leading-[1.08] -mt-12">
            Premium Hero Section Templates
          </h1>
          <p className="mt-4 text-base md:text-lg text-muted-foreground/90 leading-relaxed">
            Beautiful, production-ready hero sections
          </p>
          <p className="mt-3 text-sm md:text-base text-muted-foreground/80 leading-7 md:leading-8 max-w-prose [text-wrap:balance]">
            Copy-paste ready hero section templates for your landing pages. Built with Next.js, Tailwind CSS, and modern web standards.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button className="elevated-md transition-all hover:elevated-lg h-10 md:h-11 px-6 md:px-7" asChild>
              <Link href="/templates">Browse Templates</Link>
            </Button>
            <Button variant="outline" className="elevated-sm transition-all hover:elevated-md h-10 md:h-11 px-6 md:px-7" asChild>
              <Link href="/dashboard">Get Access</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Template Previews */}
      <section className="mt-16 md:mt-20">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-medium">Featured Templates</h2>
            <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">Pro</span>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="p-0 elevated-sm border-0 overflow-hidden group">
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground">
                  Serene Hero
                </div>
              </div>
              <div className="p-4 space-y-3">
                <div>
                  <div className="font-medium">Serene Hero</div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Full-screen hero with background image
                  </p>
                </div>
                <Button size="sm" variant="outline" className="w-full elevated-sm hover:elevated-md" asChild>
                  <Link href="/templates/hero-serene">Preview</Link>
                </Button>
              </div>
            </Card>

            <Card className="p-0 elevated-sm border-0 overflow-hidden group">
              <div className="aspect-video bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground">
                  Serenity Hero
                </div>
              </div>
              <div className="p-4 space-y-3">
                <div>
                  <div className="font-medium">Serenity Hero</div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Dark theme with gradient orbs
                  </p>
                </div>
                <Button size="sm" variant="outline" className="w-full elevated-sm hover:elevated-md" asChild>
                  <Link href="/templates/hero-serenity">Preview</Link>
                </Button>
              </div>
            </Card>

            <Card className="p-0 elevated-sm border-0 overflow-hidden group">
              <div className="aspect-video bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground">
                  Warmth Hero
                </div>
              </div>
              <div className="p-4 space-y-3">
                <div>
                  <div className="font-medium">Warmth Hero</div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Warm tones with floating particles
                  </p>
                </div>
                <Button size="sm" variant="outline" className="w-full elevated-sm hover:elevated-md" asChild>
                  <Link href="/templates/hero-warmth">Preview</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mt-16 md:mt-20">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-1.5">
            <div className="text-sm font-medium">Copy & Paste Ready</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Get the full component code with one click. No setup required.
            </p>
          </div>
          <div className="space-y-1.5">
            <div className="text-sm font-medium">Production Quality</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Built with Next.js, TypeScript, and Tailwind CSS best practices.
            </p>
          </div>
          <div className="space-y-1.5">
            <div className="text-sm font-medium">Fully Responsive</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every template works perfectly on mobile, tablet, and desktop.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 md:mt-20">
        <Card className="p-8 md:p-12 elevated-md border-0 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
              Ready to ship faster?
            </h2>
            <p className="text-muted-foreground">
              Get instant access to all premium hero section templates
            </p>
            <div className="pt-4">
              <Button className="elevated-md hover:elevated-lg" size="lg" asChild>
                <Link href="/dashboard">Get Pro Access</Link>
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}
