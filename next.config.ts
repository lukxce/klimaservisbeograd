import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  headers: async () => [
    {
      // Prevent the *.vercel.app preview URL from being indexed by search
      // engines, which would split ranking signal with the canonical domain.
      source: "/:path*",
      has: [{ type: "host", value: "klimaservisbeograd.vercel.app" }],
      headers: [{ key: "X-Robots-Tag", value: "noindex" }],
    },
  ],
};

export default nextConfig;
