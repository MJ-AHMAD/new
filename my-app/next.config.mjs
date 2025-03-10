const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.nusuk.sa'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.nusuk.sa',
        pathname: '/**',
      }
    ]
  }
};

export default nextConfig;

