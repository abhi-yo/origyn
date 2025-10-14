import { auth } from "@origyn/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import prisma from "@origyn/db";

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ checkout_id: string }>;
}) {
  const params = await searchParams;
  const checkout_id = params.checkout_id;

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/login");
  }

  if (checkout_id) {
    try {
      await prisma.user.update({
        where: { id: session.user.id },
        data: { hasProSubscription: true },
      });
      console.log(
        "Updated user subscription status to Pro for:",
        session.user.email
      );
      
      // Revalidate the dashboard to show updated subscription
      revalidatePath("/dashboard");
    } catch (error) {
      console.error("Failed to update subscription status:", error);
    }
  }

  return (
    <div className="container mx-auto max-w-2xl px-4 py-20">
      <div className="space-y-6 text-center">
        <div className="text-5xl mb-4">✨</div>
        <h1 className="text-3xl font-light">Welcome to Pro!</h1>
        {checkout_id && (
          <p className="text-sm text-muted-foreground">
            Checkout ID: {checkout_id}
          </p>
        )}
        <p className="text-lg text-muted-foreground">
          Your subscription has been activated. You now have full access to all premium hero section templates!
        </p>
        <div className="pt-4">
          <a 
            href="/dashboard" 
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all"
          >
            View Your Templates
          </a>
        </div>
      </div>
    </div>
  );
}
