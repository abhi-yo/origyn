"use client";

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
          backgroundImage: "url('https://i.postimg.cc/Lsk1mZQq/bg.png')",
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
          backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 60%),
                            radial-gradient(circle at 70% 70%, rgba(255,255,255,0.05) 0%, transparent 50%)`,
          mixBlendMode: "overlay",
        }}
      />

      <FloatingParticles />

      {/* Header */}
      <header className="relative z-20 w-full">
        <nav className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className={`${geist.className} text-lg font-medium text-orange-900/80`}>
              Serenity
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {["About", "Gallery", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className={`${geist.className} text-sm text-orange-800/70 hover:text-orange-900 transition-colors`}
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
              className={`${geist.className} text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-orange-900/90 leading-tight`}
            >
              Discover the beauty of Natural Serenity
            </h1>
            <p
              className={`${geist.className} text-lg md:text-xl text-orange-800/70 max-w-2xl mx-auto leading-relaxed`}
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
