/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "thumbs.dreamstime.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.no1roofing.com.au",
        port: "",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "pictures-nigeria.jijistatic.net",
        port: "",
      },
    ],
  },
};

export default nextConfig;
