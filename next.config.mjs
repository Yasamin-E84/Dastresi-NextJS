const nextConfig = {
  output: "export",

  assetPrefix: "/Dastresi-NextJS/",

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.dastresi.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;