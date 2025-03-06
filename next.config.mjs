/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000", // Include the port if applicable
        pathname: "/api/obituaryUploads/**", // Match the path for your images
      },
    ],
  },
};

export default nextConfig;
