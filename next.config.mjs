const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',  // This enables static export for Next.js 13
    basePath: isProd ? '/techAbel' : '',  // Replace with your repo name
    assetPrefix: isProd ? '/techAbel/' : '',  // Adjust asset paths
  };

export default nextConfig;