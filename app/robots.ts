import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [], // Rien à cacher pour un site vitrine
      },
    ],
    sitemap: "https://twelvelin.fr/sitemap.xml",
    host: "https://twelvelin.fr",
  };
}