/** @type {import('next').NextConfig} */
const nextConfig = {}
const API_URL = process.env.API_URL

module.exports = {
    images: {
      domains: ['cdn2.thecatapi.com'], // Buraya kullanacağınız domain(ler)i ekleyin
    },
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: `${API_URL}/:path*`, // API'nin gerçek URL'si
        },
      ];
    },
  }
