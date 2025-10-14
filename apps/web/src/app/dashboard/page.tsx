import { redirect } from "next/navigation";
import Dashboard from "./dashboard";
import { headers } from "next/headers";
import { auth } from "@origyn/auth";
import { authClient } from "@/lib/auth-client";
import prisma from "@origyn/db";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/login");
  }

  // Get user from database to check subscription status
  const dbUser = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { hasProSubscription: true },
  });

  const { data: customerState, error: customerError } =
    await authClient.customer.state({
      fetchOptions: {
        headers: await headers(),
      },
    });

  console.log("Customer state response:", { customerState, customerError });
  console.log("DB User subscription status:", dbUser?.hasProSubscription);

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <Dashboard 
        session={session} 
        customerState={customerState}
        hasProSubscription={dbUser?.hasProSubscription || false}
      />
    </div>
  );
}
