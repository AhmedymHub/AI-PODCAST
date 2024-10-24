import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
      ignoreBuildErrors: true
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname:'lovely-flamingo-139.convex.cloud'
        },
        {
          protocol: 'https',
          hostname:'tapesearch.com' 
          },
          {
            protocol: 'https',
            hostname:'is1-ssl.mzstatic.com' 
            },
      ]
    }
  };
  
  export default nextConfig;