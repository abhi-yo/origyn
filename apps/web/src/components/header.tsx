"use client";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import UserMenu from "./user-menu";
// Add shadcn primitives for menu sheet and separator, plus Menu icon
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { authClient } from "@/lib/auth-client";

export default function Header() {
	const { data: session } = authClient.useSession();
	
	// Public routes - always visible
	const publicLinks = [
		{ to: "/" as const, label: "Home" },
		{ to: "/pricing" as const, label: "Pricing" },
	] as const;
	
	// Protected routes - only show when logged in
	const protectedLinks = [
		{ to: "/templates" as const, label: "Templates" },
		{ to: "/dashboard" as const, label: "Dashboard" },
	] as const;
	
	// Combine links based on auth status
	const internalLinks = session?.user 
		? [...publicLinks, ...protectedLinks]
		: publicLinks;

	// External links rendered with <a>
	const externalLinks = [
		{ to: "http://localhost:4321" as const, label: "Docs" },
	] as const;

	return (
		// Make header minimal and let inner nav carry the visual treatment
		<header className="sticky top-0 z-50 w-full bg-transparent backdrop-blur supports-[backdrop-filter]:bg-transparent">
			<div className="container max-w-14xl px-24 mx-auto">
				{/* Spacing above and below to breathe like the reference */}
				<div className="py-2">
					{/* Rounded nav container with our layering styling preserved */}
					<nav className="flex items-center justify-between rounded-lg bg-card/85 backdrop-blur-sm px-3 py-1.5 border border-border/60 elevated-sm">
						<div className="flex items-center gap-6">
							<Link href="/" className="flex items-center gap-2">
								
								<span className="heading font-light text-lg tracking-tight">
									Origyn
								</span>
							</Link>
							<div className="hidden md:flex items-center gap-6 text-sm">
								{internalLinks.map(({ to, label }) => (
									<Link
										key={to}
										href={to as any}
										className="transition-colors hover:text-foreground/80 text-foreground/60"
									>
										{label}
									</Link>
								))}
								{externalLinks.map(({ to, label }) => (
									<a
										key={to}
										href={to}
										target="_blank"
										rel="noopener noreferrer"
										className="transition-colors hover:text-foreground/80 text-foreground/60"
									>
										{label}
									</a>
								))}
							</div>
						</div>

						<div className="flex items-center gap-3">
							{/* Mobile menu */}
							<Sheet>
								<SheetTrigger asChild>
									<Button
										variant="ghost"
										size="icon"
										className="h-7 w-7 md:hidden"
									>
										<Menu className="h-[15px] w-[15px]" />
										<span className="sr-only">Open menu</span>
									</Button>
								</SheetTrigger>
								<SheetContent side="right" className="w-[240px] sm:w-[300px]">
									<nav className="flex flex-col space-y-4">
										{internalLinks.map(({ to, label }) => (
											<Link
												key={to}
												href={to as any}
												className="text-sm text-muted-foreground/60 hover:text-foreground/80 transition-colors"
											>
												{label}
											</Link>
										))}
										{externalLinks.map(({ to, label }) => (
											<a
												key={to}
												href={to}
												target="_blank"
												rel="noopener noreferrer"
												className="text-sm text-muted-foreground/60 hover:text-foreground/80 transition-colors"
											>
												{label}
											</a>
										))}
									</nav>
								</SheetContent>
							</Sheet>

							<ModeToggle />
							<Separator orientation="vertical" className="h-6" />
							<UserMenu />
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
}
