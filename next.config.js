const isProd = process.env.NODE_ENV === 'production';
const debug = process.env.NODE_ENV !== 'production';
const repository = 'jeonghoo.github.io';

export const prefix =
  process.env.NODE_ENV === 'production'
    ? 'https://jeonghoo.site'
    : '';

const nextConfig = {
  assetPrefix: isProd ? 'https://jeonghoo.site' : '',
  // assetPrefix: !debug ? `/${repository}/` : "",
  reactStrictMode: true,
  trailingSlash: true,
};

module.exports = nextConfig;