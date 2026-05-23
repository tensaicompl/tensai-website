import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Add external image domains here when needed, e.g.:
      // { protocol: "https", hostname: "cdn.tensai.io" },
    ],
  },

  // MDX support placeholder — install @next/mdx and uncomment when ready:
  // pageExtensions: ["ts", "tsx", "md", "mdx"],
  // ...withMDX(),

  async redirects() {
    return [
      {
        source: "/privacy",
        destination: "/legal/privacy",
        permanent: true,
      },
      {
        source: "/terms",
        destination: "/legal/terms",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
