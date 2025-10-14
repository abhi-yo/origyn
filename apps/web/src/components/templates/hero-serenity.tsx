"use client";
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

  // Close menu when clicking outside
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
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.08) 0%, transparent 50%),
                            radial-gradient(circle at 75% 75%, rgba(255,255,255,0.04) 0%, transparent 40%),
                            radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 60%)`,
          mixBlendMode: "soft-light",
        }}
      />

      {/* Subtle Floating Orbs */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="absolute top-[15%] left-[8%] w-80 h-80 bg-gradient-to-br from-purple-400/15 via-violet-300/8 to-transparent opacity-60 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[10%] right-[8%] w-96 h-96 bg-gradient-to-br from-indigo-400/12 via-purple-300/6 to-transparent opacity-40 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-[35%] right-[25%] w-64 h-64 bg-gradient-to-tr from-violet-300/10 via-purple-200/5 to-transparent opacity-50 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      {/* Header */}
      <header className="relative z-20 w-full">
        <nav className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div
              className={`${geistSans.className} text-xl font-normal text-white tracking-normal`}
            >
              Serenity
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["About", "Gallery", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className={`${geistSans.className} text-sm text-white/80 hover:text-white transition-colors font-normal tracking-wide`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden relative" ref={menuRef}>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
                <span className="sr-only">Toggle menu</span>
              </Button>

              {/* Dropdown Menu */}
              {mobileMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-gray-900/95 backdrop-blur-md border border-white/20 rounded-lg shadow-lg z-50">
                  <nav className="py-2">
                    {["About", "Gallery", "Contact"].map((item) => (
                      <a
                        key={item}
                        href="#"
                        className={`${geistSans.className} block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors font-normal tracking-wide`}
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
            <h1
              className={`${geistSans.className} text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-white leading-tight max-w-4xl mx-auto`}
            >
              <span
                className="tracking-tightest"
                style={{ letterSpacing: "-0.3rem" }}
              >
                Discover the beauty of
              </span>{" "}
              <span
                className={`${instrumentSerif.className} italic font-normal text-purple-200/95`}
              >
                Natural Serenity
              </span>
            </h1>
            <p
              className={`${geistSans.className} text-xl md:text-2xl text-white/75 max-w-3xl mx-auto leading-relaxed font-light tracking-wide`}
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
                onClick={() => {
                  console.log("Learn More clicked");
                }}
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
