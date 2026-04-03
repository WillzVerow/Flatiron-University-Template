import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  transpilePackages: [],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "randomuser.me" },
      { protocol: "https", hostname: "cdn.prod.website-files.com" },
    ],
  },
}

export default nextConfig
