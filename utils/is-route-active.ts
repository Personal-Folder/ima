"use client"; // Crucial: makes this a client-side module

import { usePathname } from "next/navigation";

// The function is a Client Component/Hook because it uses usePathname()
export const isActive: (href: string) => boolean = (href: string) => {
  const pathname = usePathname();
  // Standard exact path match
  return pathname === href;
};
