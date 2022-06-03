/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    json_server:
      'https://my-json-server.typicode.com/bpetermann/shopping-cart-jsonserver/storeItems',
  },
};

module.exports = nextConfig;
