import type { MetadataRoute } from "next";

const base = "https://www.djshipping.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/network", "/contact"];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
