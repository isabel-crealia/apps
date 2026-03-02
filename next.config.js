'use strict';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['example.com'], // Add your image domains here
  },
  experimental: {
    // Enable new features before they are ready
    appDir: true,
  },
};

module.exports = nextConfig;
