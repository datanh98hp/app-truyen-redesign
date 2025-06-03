import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      new URL(
        "https://st.truyenqqgo.com/template/frontend/images/logo-icon.png"
      ),
    ],
  },
};

export default nextConfig;
