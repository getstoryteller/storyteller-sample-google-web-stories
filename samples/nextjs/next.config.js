/** @type {import('next').NextConfig} */

const TENANT_ID = "97a35a21-0713-3b21-1264-39fb70ea7550";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/stories/:urlName",
        destination: `https://stories.usestoryteller.com/webstories/${TENANT_ID}/:urlName/amp.html`,
      },
    ];
  },
};

module.exports = nextConfig;
