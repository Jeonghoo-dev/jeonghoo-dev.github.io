const isProd = process.env.NODE_ENV === 'production';
const debug = process.env.NODE_ENV !== 'production';
const repository = 'jeonghoo.github.io';

// export const prefix =
//   process.env.NODE_ENV === 'production'
//     ? 'https://jeonghoo.site'
//     : '';

const nextConfig = {
  output: 'export',
  // assetPrefix: isProd ? 'https://jeonghoo.shop' : '',
  // assetPrefix: !debug ? `/${repository}/` : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/" : "",
  basePath: "",
  reactStrictMode: true,
  trailingSlash: true,
};

module.exports = nextConfig;