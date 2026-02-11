/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/myself",
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
