"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";

// Add a cute, neutral 8-bit graphic with a subtle wireframe mesh background.
// It uses currentColor so it adapts to light/dark themes automatically.
function PixelArtPanel() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };
  // Pixel heart coordinates on an 11x9 grid (x, y)
  const rows: Array<number[]> = [
    [2, 3, 7, 8],
    [1, 2, 3, 4, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 3, 4, 5, 6, 7, 8],
    [3, 4, 5, 6, 7],
    [4, 5, 6],
    [5],
  ];
  const pixels: Array<[number, number]> = rows.flatMap((cols, y) =>
    cols.map((x) => [x, y] as [number, number])
  );

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative hidden md:block group cursor-pointer"
    >
      {/* Soft neutral glow that works in both themes */}
      <div className="absolute -inset-8 md:-inset-10 rounded-3xl bg-gradient-to-tr from-foreground/5 to-transparent blur-2xl" />

      <div className="relative mx-auto w-full h-[260px] md:h-[320px] lg:h-[380px]">
        {/* Wireframe mesh backdrop */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full transition-all duration-300" aria-hidden>
          <defs>
            <radialGradient id="hoverGlow" cx={mousePos.x + "%"} cy={mousePos.y + "%"} r="30%">
              <stop offset="0%" stopColor="rgba(147, 51, 234, 0.6)" className="group-hover:stop-opacity-100 stop-opacity-0 transition-all duration-300" />
              <stop offset="30%" stopColor="rgba(59, 130, 246, 0.4)" className="group-hover:stop-opacity-100 stop-opacity-0 transition-all duration-300" />
              <stop offset="60%" stopColor="rgba(16, 185, 129, 0.2)" className="group-hover:stop-opacity-100 stop-opacity-0 transition-all duration-300" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          
          {/* Base circles */}
          <g stroke="currentColor" fill="none" className="text-foreground/20">
            {Array.from({ length: 5 }).map((_, i) => (
              <circle key={`c-${i}`} cx="50" cy="50" r={20 + i * 10} strokeWidth="0.5" />
            ))}
            {Array.from({ length: 8 }).map((_, i) => (
              <g key={`lat-${i}`} transform={`rotate(${i * 22.5} 50 50)`}>
                <line x1="10" y1="50" x2="90" y2="50" strokeWidth="0.5" />
              </g>
            ))}
          </g>
          
          {/* Glowing overlay circles (appear on hover) */}
          <g stroke="url(#hoverGlow)" fill="none" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <circle key={`glow-c-${i}`} cx="50" cy="50" r={20 + i * 10} strokeWidth="1.5" />
            ))}
            {Array.from({ length: 8 }).map((_, i) => (
              <g key={`glow-lat-${i}`} transform={`rotate(${i * 22.5} 50 50)`}>
                <line x1="10" y1="50" x2="90" y2="50" strokeWidth="1.5" />
              </g>
            ))}
          </g>
        </svg>

        {/* Pixel heart (interactive) */}
        <svg
          viewBox="0 0 11 9"
          className="relative mx-auto h-[150px] md:h-[200px] lg:h-[240px] drop-shadow-[0_8px_32px_rgba(0,0,0,0.18)] transition-all duration-500 group-hover:drop-shadow-[0_12px_48px_rgba(147,51,234,0.25)]"
        >
          <defs>
            <radialGradient id="pixelGlow" cx={(mousePos.x / 100 * 11).toFixed(1)} cy={(mousePos.y / 100 * 9).toFixed(1)} r="3" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="rgba(147, 51, 234, 0.8)" />
              <stop offset="40%" stopColor="rgba(59, 130, 246, 0.5)" />
              <stop offset="70%" stopColor="rgba(16, 185, 129, 0.3)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>

          {/* Filled pixels */}
          <g fill="currentColor" className="text-foreground/70">
            {pixels.map(([x, y], idx) => (
              <rect key={`fill-${idx}`} x={x} y={y} width="1" height="1" rx="0.15" />
            ))}
          </g>

          {/* Subtle glow outlines (appear on hover) */}
          <g fill="none" stroke="url(#pixelGlow)" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {pixels.map(([x, y], idx) => (
              <rect
                key={`stroke-${idx}`}
                x={x + 0.025}
                y={y + 0.025}
                width={0.95}
                height={0.95}
                rx={0.18}
                strokeWidth={0.12}
              />
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="container mx-auto max-w-7xl px-6 md:px-24 py-24 md:py-28">
      {/* Hero */}
      {/* Switch to 2-column layout on md+ to place the 8-bit graphic on the right */}
      <section className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        <div className="max-w-3xl">
          <h1 className="heading text-4xl md:text-5xl font-medium tracking-tight leading-[1.08] -mt-12">
            Premium Hero Sections
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
        <div className="md:pl-6 lg:pl-10">
          <PixelArtPanel />
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
              <div className="aspect-video relative overflow-hidden bg-muted">
                <Image
                  src="/serenehero.png"
                  alt="Serene Hero Template Preview"
                  fill
                  className="object-cover"
                />
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
              <div className="aspect-video relative overflow-hidden bg-muted">
                <Image
                  src="/serenityhero.png"
                  alt="Serenity Hero Template Preview"
                  fill
                  className="object-cover"
                />
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
              <div className="aspect-video relative overflow-hidden bg-muted">
                <Image
                  src="/warmthhero.png"
                  alt="Warmth Hero Template Preview"
                  fill
                  className="object-cover"
                />
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
