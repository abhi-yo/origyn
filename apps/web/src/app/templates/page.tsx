"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CodeViewerDialog } from "@/components/code-viewer-dialog";
import Link from "next/link";

const heroTemplates = [
  {
    name: "Serene Hero",
    description: "Full-screen hero with background image and centered content",
    category: "Landing Page",
    path: "/templates/hero-serene",
    isPro: true,
    code: `"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>X</title>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

export function HeroSerene() {
  return (
    <section
      aria-label="Mindfulness app hero"
      className="relative isolate flex min-h-[100svh] flex-col"
    >
      <div className="absolute inset-0 -z-10 blur-[2.5px]">
        <Image
          src="https://i.postimg.cc/prgCDF8Z/hero.jpg"
          alt="Green rolling hills landscape"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 pt-4 md:pt-6">
        <nav
          className="sticky top-0 z-30 flex items-center justify-between rounded-xl border border-black/10 bg-white px-4 sm:px-6 py-3 shadow-md"
          aria-label="Primary"
        >
          <div className="flex items-center">
            <a
              href="#"
              className="flex items-center gap-2 text-[15px] sm:text-base font-medium text-black transition-colors hover:text-black/80"
            >
              Serene AI
            </a>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-3">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-md border border-black/15 bg-white shadow-sm hover:bg-black/[0.03]"
            >
              <XIcon className="h-3 w-3 sm:h-4 sm:w-4 fill-black" />
            </a>
            <Button
              aria-label="Login"
              className="h-7 sm:h-9 rounded-full border border-black/10 px-2.5 sm:px-4 text-xs sm:text-sm font-medium bg-neutral-900 text-white shadow-sm ring-0 hover:bg-neutral-800 focus-visible:ring-2 focus-visible:ring-black/10"
            >
              Login
            </Button>
          </div>
        </nav>
      </div>

      <div className="mx-auto -mt-16 flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-4 sm:px-6 pb-20 pt-16 text-center">
        <a
          href="#"
          className="mb-5 inline-flex w-fit items-center justify-center gap-0.5 sm:gap-1 rounded-full border border-black/10 bg-emerald-600/95 py-0.5 sm:py-1 pl-1 sm:pl-1.5 pr-3 sm:pr-4 text-[10px] sm:text-xs text-white shadow-sm ring-1 ring-black/5"
        >
          <div className="rounded-full bg-white px-1.5 sm:px-2.5 py-1 sm:py-1.5 text-[10px] sm:text-xs text-black">
            Update
          </div>
          <p className="inline-block text-[10px] sm:text-xs">
            ✨ Introducing user interfaces
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
            className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 text-white"
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </a>

        <h1 className="font-serif text-balance text-4xl sm:text-5xl font-normal leading-[1.1] tracking-tight text-black md:text-7xl lg:text-8xl">
          Stay Snappy for <span className="italic">Seamless</span> UI
          Experiences
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-black/60 md:text-lg lg:text-xl">
          Build faster with production‑ready sections, elegant UI patterns, and
          smart tools—so your team ships with confidence.
        </p>

        <div className="mt-8 sm:mt-9 flex flex-col items-center justify-center gap-2.5 sm:gap-4 w-full max-w-xs sm:max-w-none sm:flex-row">
          <Button
            size="lg"
            aria-label="Book a demo"
            className="h-10 sm:h-12 w-full sm:w-auto rounded-full bg-gradient-to-b from-emerald-600 to-emerald-700 px-6 sm:px-8 text-sm sm:text-base font-semibold text-white shadow-lg ring-1 ring-black/5 hover:from-emerald-600/90 hover:to-emerald-700/90 focus-visible:ring-2 focus-visible:ring-emerald-600/30 md:text-lg"
          >
            Book a demo
          </Button>
          <Button
            variant="outline"
            size="lg"
            aria-label="Learn more"
            className="group h-10 sm:h-12 w-full sm:w-auto rounded-full border border-black/20 bg-white px-5 sm:px-6 text-sm sm:text-base font-medium text-black shadow-sm hover:border-black/30 focus-visible:ring-2 focus-visible:ring-black/10 md:text-lg"
          >
            Learn more
            <svg
              className="ml-1.5 sm:ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}`,
  },
  {
    name: "Serenity Hero",
    description: "Dark hero with gradient orbs and glow effects",
    category: "Landing Page",
    path: "/templates/hero-serenity",
    isPro: true,
    code: `"use client";
import { Geist } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import GlowButton from "./glow-button";

const geistSans = Geist({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  style: ["italic"],
  weight: "400",
  display: "swap",
});

export function HeroSerenity() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [mobileMenuOpen]);

  return (
    <section className="relative min-h-screen w-full flex flex-col overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://i.postimg.cc/Zq76BTnk/bg.png')",
          backgroundSize: "cover",
          filter: "brightness(0.6) contrast(1.2) saturate(1.1)",
        }}
      />

      {/* Texture Overlay */}
      <div
        className="absolute inset-0 z-15 opacity-10 pointer-events-none"
        style={{
          backgroundImage: \`radial-gradient(circle at 25% 25%, rgba(255,255,255,0.08) 0%, transparent 50%),
                            radial-gradient(circle at 75% 75%, rgba(255,255,255,0.04) 0%, transparent 40%),
                            radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 60%)\`,
          mixBlendMode: "soft-light",
        }}
      />

      {/* Floating Orbs */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="absolute top-[15%] left-[8%] w-80 h-80 bg-gradient-to-br from-purple-400/15 via-violet-300/8 to-transparent opacity-60 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[10%] right-[8%] w-96 h-96 bg-gradient-to-br from-indigo-400/12 via-purple-300/6 to-transparent opacity-40 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-[35%] right-[25%] w-64 h-64 bg-gradient-to-tr from-violet-300/10 via-purple-200/5 to-transparent opacity-50 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      {/* Header */}
      <header className="relative z-20 w-full">
        <nav className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className={\`\${geistSans.className} text-xl font-normal text-white tracking-normal\`}>
              Serenity
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {["About", "Gallery", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className={\`\${geistSans.className} text-sm text-white/80 hover:text-white transition-colors font-normal tracking-wide\`}
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="md:hidden relative" ref={menuRef}>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>

              {mobileMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-gray-900/95 backdrop-blur-md border border-white/20 rounded-lg shadow-lg z-50">
                  <nav className="py-2">
                    {["About", "Gallery", "Contact"].map((item) => (
                      <a
                        key={item}
                        href="#"
                        className={\`\${geistSans.className} block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors\`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item}
                      </a>
                    ))}
                  </nav>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center relative z-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center space-y-8 py-16">
            <h1 className={\`\${geistSans.className} text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-white leading-tight max-w-4xl mx-auto\`}>
              <span className="tracking-tightest" style={{ letterSpacing: "-0.3rem" }}>
                Discover the beauty of
              </span>{" "}
              <span className={\`\${instrumentSerif.className} italic font-normal text-purple-200/95\`}>
                Natural Serenity
              </span>
            </h1>
            <p
              className={\`\${geistSans.className} text-xl md:text-2xl text-white/75 max-w-3xl mx-auto leading-relaxed font-light tracking-wide\`}
              style={{ letterSpacing: "-0.04rem" }}
            >
              Immerse yourself in tranquil landscapes that inspire peace and
              creativity. Connect with nature's gentle embrace through moments
              of pure tranquility.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-6">
              <GlowButton className="w-full sm:w-auto px-12 py-3 text-base">
                Explore Now
              </GlowButton>
              <Button
                variant="outline"
                className="w-full sm:w-auto hover:opacity-80 rounded-2xl border font-normal relative overflow-hidden border-white/25 text-white/90 bg-black/20 backdrop-blur-md px-12 py-6 text-base transition-all duration-500 hover:bg-white/5 hover:border-white/40 tracking-wide shadow-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// GlowButton Component
import { cn } from "@/lib/utils";

const GlowButton = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        "hover:opacity-85 rounded-2xl border font-normal relative overflow-hidden tracking-wide",
        "after:absolute after:content-[''] after:inset-0 after:[box-shadow:0_0_12px_-2px_rgba(255,255,255,0.6)_inset] after:rounded-2xl",
        "before:absolute before:content-[''] before:inset-0 before:rounded-2xl before:z-20 after:z-10",
        "[box-shadow:0_0_60px_-8px_rgba(139,92,246,0.6)] before:[box-shadow:0_0_5px_-1px_rgba(233,213,255,0.4)_inset]",
        "bg-violet-500/90 border-violet-300/50 text-white px-8 text-base",
        "transition-all duration-500 hover:shadow-[0_0_80px_-5px_rgba(139,92,246,0.8)]",
        className
      )}
      {...props}
    >
      <span className="relative z-30">{children}</span>
    </button>
  );
};`,
  },
  {
    name: "Warmth Hero",
    description: "Warm-toned hero with floating particle effects",
    category: "Landing Page",
    path: "/templates/hero-warmth",
    isPro: true,
    code: `"use client";

import { Geist } from "next/font/google";
import { Instrument_Serif as InstrumentSerif } from "next/font/google";
import { Button } from "@/components/ui/button";
import { FloatingParticles } from "./floating-particles";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = InstrumentSerif({
  subsets: ["latin"],
  style: ["italic"],
  weight: "400",
  display: "swap",
});

export function HeroWarmth() {
  return (
    <section className="relative min-h-screen w-full flex flex-col overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0 scale-100"
        style={{
          backgroundImage: "url('https://i.postimg.cc/Zq76BTnk/bg.png')",
          backgroundSize: "cover",
          filter: "brightness(0.7) contrast(1.4) saturate(1.2) blur(0.6px)",
        }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-amber-100/20 via-orange-50/10 to-lime-100/10 mix-blend-soft-light" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-orange-200/20 via-transparent to-transparent mix-blend-soft-light" />

      {/* Texture Overlay */}
      <div
        className="absolute inset-0 z-10 opacity-15 pointer-events-none"
        style={{
          backgroundImage: \`radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 60%),
                            radial-gradient(circle at 70% 70%, rgba(255,255,255,0.05) 0%, transparent 50%)\`,
          mixBlendMode: "overlay",
        }}
      />

      <FloatingParticles />

      {/* Header */}
      <header className="relative z-20 w-full">
        <nav className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className={\`\${geist.className} text-lg font-medium text-orange-900/80\`}>
              Serenity
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {["About", "Gallery", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className={\`\${geist.className} text-sm text-orange-800/70 hover:text-orange-900 transition-colors\`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center relative z-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 py-12">
            <h1
              className={\`\${geist.className} text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-orange-900/90 leading-tight\`}
            >
              Discover the beauty of Natural Serenity
            </h1>
            <p
              className={\`\${geist.className} text-lg md:text-xl text-orange-800/70 max-w-2xl mx-auto leading-relaxed\`}
            >
              Immerse yourself in tranquil landscapes that inspire peace and creativity.
              Connect with nature's gentle embrace.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
              <Button className="bg-orange-800/80 hover:bg-orange-900/90 text-white border-0 rounded-full px-8 py-3 font-light backdrop-blur-sm">
                Explore Now
              </Button>
              <Button
                variant="outline"
                className="border-orange-700/50 text-orange-800/80 hover:bg-orange-50/50 bg-white/20 backdrop-blur-sm rounded-full px-8 py-3 font-light"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// FloatingParticles Component
import { useEffect, useRef } from "react";

export function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = 50;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      baseOpacity: number;
      canvasWidth: number;
      canvasHeight: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.x = Math.random() * this.canvasWidth;
        this.y = Math.random() * this.canvasHeight;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.4 - 0.2;
        const hue = Math.random() * 35 + 15;
        const saturation = Math.random() * 20 + 80;
        const lightness = Math.random() * 20 + 50;
        this.color = \`hsla(\${hue}, \${saturation}%, \${lightness}%, \`;
        this.baseOpacity = Math.random() * 0.5 + 0.3;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > this.canvasWidth + this.size) this.x = -this.size;
        else if (this.x < -this.size) this.x = this.canvasWidth + this.size;

        if (this.y > this.canvasHeight + this.size) this.y = -this.size;
        else if (this.y < -this.size) this.y = this.canvasHeight + this.size;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const flickerOpacity = this.baseOpacity * (0.8 + Math.random() * 0.4);
        ctx.fillStyle = \`\${this.color}\${flickerOpacity})\`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      if (!canvas) return;
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    let animationFrameId: number;
    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw(ctx);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener("resize", handleResize);
    init();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 -z-5 opacity-70" />;
}`,
  },
  {
    name: "Etherea Hero",
    description: "Mystical forest with floating particles and email capture",
    category: "Landing Page",
    path: "/templates/hero-etherea",
    isPro: true,
    code: `"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import localFont from "next/font/local";

const nocturneSerif = localFont({
  src: [
    {
      path: "../../../public/nocturne-serif-font-family-1760502816-0/NocturneSerifTest-Regular-uploaded-63b633de2e1c7.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-nocturne-serif",
  display: "swap",
});

function BackgroundImage() {
  return (
    <div className="absolute inset-0 -z-10">
      <Image
        src="https://i.postimg.cc/VvFTZtS7/background.jpg"
        alt="Mystical forest background"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  );
}

function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (typeof window === 'undefined' || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = \`rgba(255, 255, 255, \${p.opacity})\`;
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[5] opacity-50" />;
}

export function HeroEtherea() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white"
          style={{ colorScheme: 'dark' }}>
      <div className="absolute inset-0 z-0 opacity-75">
        <BackgroundImage />
      </div>

      <FloatingParticles />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-4">
        <header className="flex items-center justify-between py-5 px-2 sm:px-0">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-neutral-300">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5Z" clipRule="evenodd" />
            </svg>
            <span className="text-xl font-semibold tracking-tight text-neutral-100">Etherea</span>
          </div>

          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li><Link href="#" className="text-base font-normal tracking-wide text-neutral-200 opacity-75 hover:opacity-100">How It Works</Link></li>
              <li><Link href="#" className="text-base font-normal tracking-wide text-neutral-200 opacity-75 hover:opacity-100">Pricing</Link></li>
              <li><Link href="#" className="text-base font-normal tracking-wide text-neutral-200 opacity-75 hover:opacity-100">FAQ</Link></li>
            </ul>
          </nav>
          
          <Link href="#" className="hidden md:flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm hover:bg-white/20">
            Log In
          </Link>

          <button 
            className="md:hidden rounded-md p-1 text-neutral-300 hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </header>

        <div className="flex flex-1 flex-col items-center justify-center py-12 text-center">
          <h1 className={\`\${nocturneSerif.className} max-w-4xl text-4xl font-normal leading-tight text-neutral-200 sm:text-5xl md:text-6xl lg:text-7xl\`}>
            <span className="block mb-2">Shape Atmosphere.</span>
            <span className="block">Infinite Soundscapes.</span>
          </h1>
          
          <p className="mt-6 mb-8 text-base font-normal max-w-xl text-white/85">
            Craft unique soundscapes with AI. Find focus, achieve calm, or escape in infinitely evolving ambient audio.
          </p>

          <div className="w-full max-w-md">
            <form className="flex flex-col space-y-4 sm:flex-row sm:space-x-1.5 sm:space-y-0">
              <Input
                type="email"
                placeholder="Enter your email..."
                className="h-12 flex-1 rounded-full border border-white/15 bg-white/15 pl-6 text-white placeholder:text-white/50"
              />
              <Button className="h-12 rounded-full bg-zinc-900 px-5 text-white hover:bg-zinc-800">
                Join Waitlist
              </Button>
            </form>
          </div>
        </div>

        <footer className="pt-16 pb-10 text-center">
          <p className="mx-auto max-w-2xl text-xs font-normal leading-relaxed opacity-90">
            Etherea uses generative AI to create unique ambient soundscapes tailored to your mood or activity.
          </p>
        </footer>
      </div>
    </main>
  );
}`,
  },
];

export default function TemplatesPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      <div className="space-y-12">
        <div>
          <h1 className="text-3xl font-light tracking-tight mb-2">Hero Section Templates</h1>
          <p className="text-muted-foreground">Premium hero sections for your landing pages</p>
        </div>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-medium">Hero Sections</h2>
            <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">Pro</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {heroTemplates.map((template) => (
              <Card key={template.name} className="p-4 elevated-sm border-0 flex flex-col">
                <div className="flex-1 space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-medium">{template.name}</div>
                      {template.isPro && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-primary font-medium">
                          PRO
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {template.description}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <Button size="sm" variant="outline" className="flex-1 elevated-sm hover:elevated-md" asChild>
                    <Link href={template.path as any}>Preview</Link>
                  </Button>
                  <CodeViewerDialog
                    code={template.code}
                    title={template.name}
                    description="Copy the code below to use this template in your project"
                    trigger={
                      <Button size="sm" className="flex-1 elevated-md hover:elevated-lg">
                        Get Code
                      </Button>
                    }
                  />
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
