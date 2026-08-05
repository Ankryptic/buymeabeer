/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images:{
    remotePatterns: [
      (new URL("https://avatars.githubusercontent.com/u/176009947?v=4"))
    ]
  }
};

export default nextConfig;
