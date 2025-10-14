"use client";

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
          className="sticky top-0 z-30 flex items-center justify-between rounded-xl border border-foreground/10 bg-white px-4 sm:px-6 py-3 shadow-md"
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
              className="h-7 sm:h-9 rounded-full border border-foreground/10 px-2.5 sm:px-4 text-xs sm:text-sm font-medium bg-neutral-900 text-white shadow-sm ring-0 hover:bg-neutral-800 focus-visible:ring-2 focus-visible:ring-black/10"
            >
              Login
            </Button>
          </div>
        </nav>
      </div>

      <div className="mx-auto -mt-16 flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-4 sm:px-6 pb-20 pt-16 text-center">
        <a
          href="#"
          className="mb-5 inline-flex w-fit items-center justify-center gap-0.5 sm:gap-1 rounded-full border border-foreground/10 bg-emerald-600/95 py-0.5 sm:py-1 pl-1 sm:pl-1.5 pr-3 sm:pr-4 text-[10px] sm:text-xs text-white shadow-sm ring-1 ring-black/5"
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
}
