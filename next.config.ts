const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // This allows any hostname with HTTPS.
      },
      {
        protocol: 'http',
        hostname: '**', // This allows any hostname with HTTP.
      },
    ],
  },
};

export default nextConfig;
