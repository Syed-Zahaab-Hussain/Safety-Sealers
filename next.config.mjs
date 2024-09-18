/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // remotePatterns: [
    // {
    //   protocol: "https",
    //   hostname: "images.unsplash.com",
    //   port: "",
    // },
    // {
    //   protocol: "https",
    //   hostname: "thumbs.dreamstime.com",
    //   port: "",
    // },

    // ],
    domains: [
      "images.unsplash.com",
      "thumbs.dreamstime.com",
      "www.no1roofing.com.au",
      "encrypted-tbn0.gstatic.com",
    ],
  },
};

export default nextConfig;
