const nextConfig = {
  output: "export",
  basePath: "/Dastresi-NextJS",
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
