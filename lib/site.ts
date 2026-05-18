const fallbackSiteUrl = "https://lifefindsaway.com";

export const site = {
  name: "Life Finds A Way",
  positioning: "The operating system for biological survival beyond Earth.",
  tagline: "Intelligence for life in impossible environments.",
  description:
    "Life Finds A Way uses AI to design and optimize the food, water, air, waste, crop, medicine, and biological systems needed to keep humans alive in space and extreme environments on Earth.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl,
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@lifefindsaway.com",
} as const;

export function siteUrl(): URL {
  try {
    return new URL(site.url);
  } catch {
    return new URL(fallbackSiteUrl);
  }
}
