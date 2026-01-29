import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getBaseUrl = () => {
  // For static exports or build time
  if (typeof window === "undefined") {
    // During build, use an absolute URL or return data directly
    return process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
  }
  // Client-side, use relative URLs
  return "";
};
