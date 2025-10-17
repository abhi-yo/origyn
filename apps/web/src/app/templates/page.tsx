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
		templateId: "hero-serene",
	},
	{
		name: "Serenity Hero",
		description: "Dark hero with gradient orbs and glow effects",
		category: "Landing Page",
		path: "/templates/hero-serenity",
		isPro: true,
		templateId: "hero-serenity",
	},
	{
		name: "Warmth Hero",
		description: "Warm-toned hero with floating particle effects",
		category: "Landing Page",
		path: "/templates/hero-warmth",
		isPro: true,
		templateId: "hero-warmth",
	},
	{
		name: "Etherea Hero",
		description: "Mystical forest with floating particles and email capture",
		category: "Landing Page",
		path: "/templates/hero-etherea",
		isPro: true,
		templateId: "hero-etherea",
	},
];

export default function TemplatesPage() {
	return (
		<main className="container mx-auto max-w-7xl px-6 md:px-10 py-12 md:py-16">
			<div className="mb-8">
				<h1 className="text-2xl md:text-3xl font-medium tracking-tight">
					All Hero Templates
				</h1>
				<p className="text-sm text-muted-foreground mt-2">
					Access to full code is Pro‑only. No free downloads.
				</p>
			</div>

			<div className="space-y-12">
				<div>
					<h1 className="text-3xl font-light tracking-tight mb-2">
						Hero Section Templates
					</h1>
					<p className="text-muted-foreground">
						Premium hero sections for your landing pages
					</p>
				</div>

				<section className="space-y-4">
					<div className="flex items-center justify-between">
						<h2 className="text-xl font-medium">Hero Sections</h2>
						<span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
							Pro
						</span>
					</div>
					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{heroTemplates.map((template) => (
							<Card
								key={template.name}
								className="p-4 elevated-sm border-0 flex flex-col"
							>
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
									<Button
										size="sm"
										variant="outline"
										className="flex-1 elevated-sm hover:elevated-md"
										asChild
									>
										<Link href={template.path as any}>Preview</Link>
									</Button>
									<CodeViewerDialog
										templateId={template.templateId as any}
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
		</main>
	);
}
