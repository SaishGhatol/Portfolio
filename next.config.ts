import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['three'],
};
module.exports = {
  images: {
    domains: ['google.com', 'example.com', 'images.pexels.com',"github.com", "linkedin.com","twitter.com"]
  },
}



export default nextConfig;
