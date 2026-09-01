import type { MetadataRoute } from "next";

const siteUrl = "https://lovetinwoman.co.il";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/characters/`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/sample/`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/soundtrack/`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/buy/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/contact/`, changeFrequency: "yearly", priority: 0.5 },
  ];
}
