import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

// Case studies used to live at /{id}; keep those links working.
const legacyProjectRoutes: Record<string, string> = {
  "1": "/work/bangente",
  "2": "/work/smart-compliance",
  "3": "/work/filtration-advice",
  "4": "/work/wingoo",
  "5": "/work/turpial",
  "6": "/#work",
};

const nextConfig: NextConfig = {
  async redirects() {
    return Object.entries(legacyProjectRoutes).map(([id, destination]) => ({
      source: `/${id}`,
      destination,
      permanent: true,
    }));
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);

initOpenNextCloudflareForDev();
