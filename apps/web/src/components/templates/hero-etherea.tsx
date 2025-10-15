"use client";

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

// Background Image Component
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

// Floating Particles Component
function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (typeof window === 'undefined' || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: any[] = [];
    const particleCount = 80;

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
        this.color = `hsla(${hue}, ${saturation}%, ${lightness}%, `;
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
        ctx.fillStyle = `${this.color}${flickerOpacity})`;
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

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[5] opacity-50" />;
}

export function HeroEtherea() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white"
          style={{ colorScheme: 'dark' }}>
      {/* Background Container */}
      <div className="absolute inset-0 z-0 opacity-75">
        <BackgroundImage />
      </div>

      <FloatingParticles />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-4">
        {/* Navigation */}
        <header className="flex items-center justify-between py-5 px-2 sm:px-0">
          {/* Logo Area */}
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-neutral-300">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5Z" clipRule="evenodd" />
            </svg>
            <span className="text-xl font-semibold tracking-tight text-neutral-100">Etherea</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <Link href="#" className="text-base font-normal tracking-wide text-neutral-200 opacity-75 transition-opacity hover:opacity-100">How It Works</Link>
              </li>
              <li>
                <Link href="#" className="text-base font-normal tracking-wide text-neutral-200 opacity-75 transition-opacity hover:opacity-100">Pricing</Link>
              </li>
              <li>
                <Link href="#" className="text-base font-normal tracking-wide text-neutral-200 opacity-75 transition-opacity hover:opacity-100">FAQ</Link>
              </li>
            </ul>
          </nav>
          
          {/* Desktop Log In Button */}
          <Link
            href="#"
            className="hidden md:flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            Log In
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden rounded-md p-1 text-neutral-300 hover:bg-white/10 focus:outline-none focus:ring-1 focus:ring-white/30"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </header>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-[65px] left-0 right-0 z-10 bg-black/80 backdrop-blur-md border-white/10 rounded-lg shadow-md mx-2">
            <nav className="flex flex-col items-start py-3 px-2">
              <Link href="#" className="w-full px-3 py-2 text-sm font-medium text-neutral-200 rounded-md hover:bg-white/10" onClick={() => setIsMobileMenuOpen(false)}>How It Works</Link>
              <Link href="#" className="w-full px-3 py-2 text-sm font-medium text-neutral-200 rounded-md hover:bg-white/10" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
              <Link href="#" className="w-full px-3 py-2 text-sm font-medium text-neutral-200 rounded-md hover:bg-white/10" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
              <div className="w-full px-3 pt-2 pb-1">
                <Link href="#" className="block w-full py-2 text-center text-sm font-medium text-neutral-100 rounded-full border border-white/20 bg-white/10 hover:bg-white/15" onClick={() => setIsMobileMenuOpen(false)}>Log In</Link>
              </div>
            </nav>
          </div>
        )}

        {/* Main Content */}
        <div className="flex flex-1 flex-col items-center justify-center py-12 text-center">
          <div className="flex flex-col items-center">
            <h1 className={`${nocturneSerif.className} max-w-4xl text-4xl font-normal leading-tight tracking-normal text-neutral-200 drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl`}>
              <span className="block mb-2">
                Shape Atmosphere.
              </span>
              <span className="block">
                Infinite Soundscapes.
              </span>
            </h1>
            
            <p className="mt-6 mb-8 text-base font-normal max-w-xl text-white/85">
              Craft unique, personalized soundscapes with Etherea's advanced AI. Find focus, achieve calm, or escape in infinitely evolving ambient audio.
            </p>
          </div>

          <div className="w-full max-w-md">
            <form className="flex flex-col space-y-4 sm:flex-row sm:space-x-1.5 sm:space-y-0">
              <Input
                type="email"
                placeholder="Enter your email..."
                className="h-12 flex-1 rounded-full border border-white/15 bg-white/15 pl-6 text-white shadow-inner shadow-black/20 placeholder:italic placeholder:text-white/50 focus:border-white/30 focus:bg-white/20 focus-visible:ring-1 focus-visible:ring-white/40 focus-visible:ring-offset-0"
              />
              <Button className="h-12 rounded-full border border-white/15 bg-zinc-900 px-5 text-sm font-medium tracking-wide text-white transition-all duration-150 hover:bg-zinc-800 active:scale-[0.98] active:bg-zinc-700">
                Join Waitlist
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer className="pt-16 pb-10 text-center">
          <p className="mx-auto max-w-2xl text-xs font-normal leading-relaxed opacity-90">
            Etherea uses generative AI to create unique ambient soundscapes tailored to your mood or activity. Explore endless sonic textures for relaxation, focus, or sleep.
          </p>
        </footer>
      </div>
    </main>
  );
}
