import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Static export mode for Cloudflare Pages deployment
  output: "export",
  // Output directory changed from .next to dist for production deployment
  distDir: "dist",
  // Preserve trailing slashes (recommended for Cloudflare Pages static hosting)
  trailingSlash: true,
  // Disable image optimization for static export (no server to optimize images)
  images: {
    unoptimized: true,
  },
  // Transpile the shared UI package
  transpilePackages: ["@workspace/ui"],
  // Load environment variables from .env.local
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
}

export default nextConfig
