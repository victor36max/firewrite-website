import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Platform } from "./types";

export const cn = (...classes: ClassValue[]): string => {
  return twMerge(clsx(classes));
};

export const getOS = () => {
  if (typeof window === "undefined") return null;
  if (window.navigator.userAgent.includes("Mac")) return "macos";
  if (window.navigator.userAgent.includes("Windows")) return "windows";
  if (window.navigator.userAgent.includes("Linux")) return "linux";
  return null;
};

export const getArchitecture = () => {
  if (typeof window === "undefined") return null;
  if (window.navigator.userAgent.includes("x86_64")) return "x64";
  if (window.navigator.userAgent.includes("arm64")) return "arm64";
  return null;
};

export const getPlatformDisplayName = (platform: Platform) => {
  switch (platform) {
    case "macos":
      return "macOS";
    case "windows":
      return "Windows";
    case "linux":
      return "Linux";
  }
};
