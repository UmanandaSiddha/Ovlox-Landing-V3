import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Canonical host: redirect bare ovlox.dev → www.ovlox.dev (308 permanent).
      {
        source: "/:path*",
        has: [{ type: "host", value: "ovlox.dev" }],
        destination: "https://www.ovlox.dev/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
