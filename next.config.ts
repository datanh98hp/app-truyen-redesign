import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://st.truyenqqgo.com/template/frontend/images/logo-icon.png')],
  },
};

export default nextConfig;
