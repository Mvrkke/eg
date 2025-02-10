/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn1.epicgames.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
