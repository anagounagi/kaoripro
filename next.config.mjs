/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['kyara.aof-aroma.com', 'images.unsplash.com'],
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
}

export default nextConfig;