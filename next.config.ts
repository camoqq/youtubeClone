import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
// next.config.js
module.exports = {
  images: {
    domains: ["i.ytimg.com", "yt3.ggpht.com", "yt3.googleusercontent.com"],

    // Add the YouTube image domain
  },
};

export default nextConfig;
