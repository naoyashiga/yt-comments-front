/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["placeimg.com", "yt3.ggpht.com"],
  },
};

module.exports = nextConfig;
