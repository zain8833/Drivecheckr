/* eslint-disable @next/next/no-img-element */
const nextConfig = {
    output:"export",
    images: {
    unoptimized: true, // IMPORTANT for static export
  },
};

export default nextConfig;
