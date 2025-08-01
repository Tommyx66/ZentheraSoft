/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "blob.v0.dev", // Para las imágenes de placeholder de v0
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com", // Para las imágenes de placeholder genéricas
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true, // Esto puede ayudar a evitar problemas de optimización si la red es lenta
  },
};

module.exports = nextConfig;
