/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "images.unsplash.com",
      "images.pexels.com",
      "www.w3schools.com",
      "res.cloudinary.com",
      "media.istockphoto.com",
    ],
  },
};

module.exports = nextConfig;
