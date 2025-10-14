"use client";
import { cn } from "@/lib/utils";
import type React from "react";

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
};

export default GlowButton;
