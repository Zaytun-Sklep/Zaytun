/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // For GitHub Pages deployments, set basePath and assetPrefix
  basePath: isGithubPages ? '/Zaytun' : '',
  assetPrefix: isGithubPages ? 'https://zaytun-sklep.github.io/Zaytun/' : undefined,
};

module.exports = nextConfig;
