import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Let .mdx files act as pages and imports alongside the usual extensions.
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  async redirects() {
    return [
      { source: "/for-clinics", destination: "/in-practice", permanent: true },
      { source: "/for-providers", destination: "/in-practice", permanent: true },
      { source: "/for-health-systems", destination: "/in-practice", permanent: true },
      { source: "/platform/for-clinics", destination: "/in-practice", permanent: true },
      { source: "/platform/for-providers", destination: "/in-practice", permanent: true },
      { source: "/platform/for-health-systems", destination: "/in-practice", permanent: true },
      { source: "/trust-security", destination: "/in-practice", permanent: false },
      { source: "/company/advisors", destination: "/company/team#advisors", permanent: true },
    ];
  },
};

const withMDX = createMDX({
  options: {
    // Strings (not imported functions) so plugins work under Turbopack,
    // which can't receive JS function references across the Rust boundary.
    remarkPlugins: ["remark-gfm"],
  },
});

export default withMDX(nextConfig);
