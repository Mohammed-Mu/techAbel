const isProd = process.env.NODE_ENV === 'production';

export default {
  output: "export",
  basePath: isProd ? "/techAbel" : "",  // Replace "TechABLE" with your GitHub repo name
  assetPrefix: isProd ? "/techAbel/" : "",
  images: {
    unoptimized: true, // Required for images to work on GitHub Pages
  },
};
