/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: "/mauroisak-portfolio",
  assetPrefix: "/mauroisak-portfolio/",

  images: {
    unoptimized: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  devIndicators: false,
};

export default nextConfig;
