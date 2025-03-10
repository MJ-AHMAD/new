const nextConfig = {
  images: {
    domains: ["mj-ahmad.github.io", "www.nusuk.sa"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mj-ahmad.github.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.nusuk.sa",
        pathname: "/**",
      },
    ],
  },
}

module.exports = nextConfig

