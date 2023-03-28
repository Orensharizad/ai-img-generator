/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['links.papareact.com', 'aidalleimageapp0630a6.blob.core.windows.net']
  }
}

module.exports = nextConfig
