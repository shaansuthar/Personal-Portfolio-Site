/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'standalone',
  
    images: {
      deviceSizes: [320, 420, 768, 1024, 1200],
      imageSizes: [16, 32, 48, 64, 96],
      formats: ['image/avif', 'image/webp'],
      minimumCacheTTL: 60,
    },
  
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
      ];
    },
  
    i18n: {
      locales: ['en'],
      defaultLocale: 'en',
    },
  
    compress: true,
    poweredByHeader: false,
    generateEtags: true,
  
    webpack: (config, { dev, isServer }) => {
      // Optimize CSS
      if (!dev && !isServer) {
        config.optimization.splitChunks.cacheGroups.styles = {
          name: 'styles',
          test: /\.(css|scss)$/,
          chunks: 'all',
          enforce: true,
        };
      }
  
      return config;
    },
  };
  
  export default nextConfig;