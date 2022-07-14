/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
  },


}

module.exports = nextConfig
