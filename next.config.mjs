/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/mauroisak-portfolio",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
