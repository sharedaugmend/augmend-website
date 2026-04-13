import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/for-clinics", destination: "/in-practice", permanent: true },
      { source: "/for-providers", destination: "/in-practice", permanent: true },
      { source: "/for-health-systems", destination: "/in-practice", permanent: true },
      { source: "/platform/for-clinics", destination: "/in-practice", permanent: true },
      { source: "/platform/for-providers", destination: "/in-practice", permanent: true },
      { source: "/platform/for-health-systems", destination: "/in-practice", permanent: true },
      { source: "/trust-security", destination: "/in-practice", permanent: false },
      { source: "/company/advisors", destination: "/company/team#advisory-board", permanent: true },
    ];
  },
};

export default nextConfig;
