import { redirect } from "next/navigation";
import Dashboard from "./dashboard";
import { headers } from "next/headers";
import { auth } from "@origyn/auth";
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

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <Dashboard 
        session={session}
        hasProSubscription={dbUser?.hasProSubscription || false}
      />
    </div>
  );
}
