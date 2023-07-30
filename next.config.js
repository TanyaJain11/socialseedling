/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = nextConfig
// next.config.js
module.exports = {
    async redirects() {
        return [
          {
            source: '/user/:username',
            destination: '/user',
            permanent: true,
          },
        ];
      },
    nextConfig,
    env: {
       API_KEY : 'EgAz68mnXErXB8UQvtRpSIDlO8DLGbxBszUpcFZ0Xpk',
       API_URL :'https://api.unsplash.com',
    },
    images: {
      domains: ['plus.unsplash.com', 'images.unsplash.com'], // Add 'images.unsplash.com' as an allowed image host
    },
  };
  
