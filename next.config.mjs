/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static generation for better SEO
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
