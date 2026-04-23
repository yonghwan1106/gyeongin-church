import type { MetadataRoute } from "next";
import { siteIdentity } from "@/lib/navigation";

const BASE_URL = siteIdentity.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "",
    "/about",
    "/education",
    "/ministry",
    "/ministry/foodbank",
    "/community",
    "/community/notices",
    "/community/gallery",
    "/location",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
