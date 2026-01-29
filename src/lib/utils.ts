import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getBaseUrl = () => {
  // Server-side
  if (typeof window === "undefined") {
    // Vercel provides VERCEL_URL automatically
    if (process.env.VERCEL_URL) {
      return `https://${process.env.VERCEL_URL}`;
    }
    // Fallback for local development
    return process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
  }

  // Client-side - use relative URLs
  return "";
};
