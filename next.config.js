/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withVideos = require("next-videos");

module.exports = withVideos();

module.exports = nextConfig;

module.exports = {
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.api-sports.io",
        port: "",
        pathname: "/football/players/**",
      },
      {
        protocol: "https",
        hostname: "media-3.api-sports.io",
        port: "",
        pathname: "/football/players/**",
      },
    ],
  },
};
