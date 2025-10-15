"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const heroTemplates = [
  {
    name: "Serene Hero",
    description: "Full-screen hero with background image and centered content",
    path: "/templates/hero-serene",
  },
  {
    name: "Serenity Hero",
    description: "Dark theme with purple gradient orbs and glow effects",
    path: "/templates/hero-serenity",
  },
  {
    name: "Warmth Hero",
    description: "Warm-toned hero with floating particle effects",
    path: "/templates/hero-warmth",
  },
  {
    name: "Etherea Hero",
    description: "Mystical forest theme with floating particles and email capture",
    path: "/templates/hero-etherea",
  },
];

export default function Dashboard({
  customerState,
  session,
  hasProSubscription: dbHasProSubscription,
}: {
  customerState: ReturnType<typeof authClient.customer.state>;
  session: typeof authClient.$Infer.Session;
  hasProSubscription: boolean;
}) {
  const hasActiveSubscriptions = customerState?.activeSubscriptions?.length! > 0;
  
  // Check both database flag and Polar subscription state
  const hasProSubscription = dbHasProSubscription || hasActiveSubscriptions;
  
  const hasAnySubscription =
    hasProSubscription ||
    customerState?.inactiveSubscriptions?.length! > 0 ||
    (customerState && Object.keys(customerState).length > 0);

  return (
    <div className="space-y-12">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h2 className="text-3xl font-light tracking-tight">Dashboard</h2>
          <p className="text-base text-muted-foreground">
            Welcome back, {session.user.name}
          </p>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-base text-muted-foreground font-medium">
            Plan: {hasAnySubscription ? "Pro" : "Free"}
          </span>
          {hasAnySubscription ? (
            <Button
              size="sm"
              variant="outline"
              className="elevated-sm transition-all hover:elevated-md h-9 px-4"
              onClick={async () => await authClient.customer.portal()}
            >
              Manage Subscription
            </Button>
          ) : (
            <Button
              size="sm"
              className="elevated-md transition-all hover:elevated-lg h-9 px-5"
              onClick={async () => await authClient.checkout({ slug: "pro" })}
            >
              Upgrade to Pro
            </Button>
          )}
        </div>
      </div>

      {/* Subscription Status Card */}
      <Card className={`p-6 border-0 ${hasProSubscription ? 'elevated-md bg-primary/5' : 'elevated-sm bg-muted/30'}`}>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">
              {hasProSubscription ? '✨ Pro Access Active' : '🔒 Upgrade to Access Templates'}
            </h3>
            {hasProSubscription && (
              <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">Pro</span>
            )}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {hasProSubscription 
              ? 'You have full access to all premium hero section templates with copy-paste code.'
              : 'Upgrade to Pro to unlock all premium hero section templates and get instant code access.'
            }
          </p>
          {!hasProSubscription && (
            <Button
              className="elevated-md transition-all hover:elevated-lg mt-2"
              onClick={async () => await authClient.checkout({ slug: "pro" })}
            >
              Upgrade to Pro
            </Button>
          )}
        </div>
      </Card>

      {/* Hero Templates Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-medium">Hero Section Templates</h3>
          <Button size="sm" variant="outline" className="elevated-sm transition-all hover:elevated-md h-9 px-4" asChild>
            <Link href="/templates">View All</Link>
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {heroTemplates.map((template) => (
            <Card key={template.name} className="p-5 elevated-md border-0 transition-all hover:elevated-lg flex flex-col">
              <div className="flex-1 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="font-medium text-base">{template.name}</div>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-primary font-medium">
                    PRO
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {template.description}
                </p>
              </div>
              <div className="flex gap-2 mt-3">
                <Button size="sm" variant="outline" className="flex-1 elevated-sm transition-all hover:elevated-md h-9" asChild>
                  <Link href={template.path as any}>Preview</Link>
                </Button>
                {hasProSubscription ? (
                  <Button size="sm" className="flex-1 elevated-md transition-all hover:elevated-lg h-9" asChild>
                    <Link href="/templates">Get Code</Link>
                  </Button>
                ) : (
                  <Button 
                    size="sm" 
                    className="flex-1 h-9" 
                    disabled
                  >
                    Locked
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* What's Included Section */}
      <section className="space-y-6">
        <h3 className="text-xl font-medium">What's Included</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="p-5 space-y-2.5 elevated-sm border-0">
            <div className="font-medium text-base">Copy-Paste Ready</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Get complete component code with one click. No configuration needed.
            </p>
          </Card>
          <Card className="p-5 space-y-2.5 elevated-sm border-0">
            <div className="font-medium text-base">Next.js + TypeScript</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Built with modern web standards and best practices.
            </p>
          </Card>
          <Card className="p-5 space-y-2.5 elevated-sm border-0">
            <div className="font-medium text-base">Fully Responsive</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Works perfectly on mobile, tablet, and desktop devices.
            </p>
          </Card>
        </div>
      </section>

      {/* Support Section */}
      {hasProSubscription && (
        <Card className="p-6 elevated-lg border-0">
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Need Help?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              If you have any questions about using the templates or need customization help, feel free to reach out.
            </p>
            <div className="pt-2">
              <Button size="sm" variant="outline" className="elevated-sm transition-all hover:elevated-md h-9 px-4">
                Contact Support
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
