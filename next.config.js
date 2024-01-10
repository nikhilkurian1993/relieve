// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
// @ts-check
/**
 * @type {import('next').NextConfig}
 */

const moduleExports = {
  webpack(config) {
    config.experiments = {
      topLevelAwait: true,

      layers: true,
    };
    return config;
  },
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'source.unsplash.com', 'images.prismic.io'],
  },
  compiler: {
    styledComponents: true,
    removeConsole:
      process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = moduleExports;
