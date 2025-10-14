"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/header";

export default function HeaderGate() {
  const pathname = usePathname();
  const hideHeader = pathname?.startsWith("/templates/") ?? false;

  if (hideHeader) return null;
  return <Header />;
}
