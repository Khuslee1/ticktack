import type {NextConfig} from "next"
const nextConfig: NextConfig = {
  env: {
    TMDB_TOKEN_KEY: process.env.TMDB_TOKEN_KEY,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_SMALL_IMAGE_URL: process.env.NEXT_PUBLIC_SMALL_IMAGE_URL,
    NEXT_PUBLIC_BIG_IMAGE_URL: process.env.NEXT_PUBLIC_BIG_IMAGE_URL,
    NEXT_PUBLIC_YOUTUBE_URL: process.env.NEXT_PUBLIC_YOUTUBE_URL,
  }
};

export default nextConfig;
