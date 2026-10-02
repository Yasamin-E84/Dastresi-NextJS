const nextConfig = {
  output: "export",
  basePath: "/Dastresi-NextJS",
  assetPrefix: "/Dastresi-NextJS/",
  trailingSlash: true,

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
