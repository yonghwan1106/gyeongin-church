import type { MetadataRoute } from "next";
import { siteIdentity } from "@/lib/navigation";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: `${siteIdentity.url}/sitemap.xml`,
  };
}
