const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  assetPrefix: isProd ? 'https://vvenommm.github.io/jeonghoo.github.io/' : '',
  reactStrictMode: true,
};

module.exports = nextConfig;