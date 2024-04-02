/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.apple.com', 'firebasestorage.googleapis.com'],
  },
};

export default nextConfig;
