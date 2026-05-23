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
};

export default nextConfig;
