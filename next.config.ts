import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // 'unsafe-inline' required for Next.js hydration scripts and JSON-LD dangerouslySetInnerHTML blocks
      "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
      // 'unsafe-inline' required for Framer Motion inline styles and Tailwind
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https:",
      "font-src 'self'",
      "media-src 'self'",
      "frame-src https://www.google.com",
      "connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },
  async redirects() {
    return [
      {
        source: "/locations/deerfield-beach",
        destination: "/locations/pompano-beach",
        permanent: true,
      },
      {
        source: "/locations/lighthouse-point",
        destination: "/locations/pompano-beach",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
