const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.worldofgust.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;