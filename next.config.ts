import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Higgsfield CDN, where the generated project images are hosted
    remotePatterns: [{ protocol: "https", hostname: "d8j0ntlcm91z4.cloudfront.net" }],
  },
  async headers() {
    return [
      {
        source: "/video/:file*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
