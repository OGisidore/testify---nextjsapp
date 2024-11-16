/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {

    remotePatterns: [
      { protocol: 'https', hostname: 'api.espero-soft.com' },
      { protocol: 'https', hostname: 'lablab.ai' },
      { protocol: 'https', hostname: 'app.cfplesavoirfaire.com' },
    ],

  },

};

export default nextConfig;
