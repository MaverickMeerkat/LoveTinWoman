import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/LoveTinWoman",
  assetPrefix: "/LoveTinWoman/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },

};

export default nextConfig;
