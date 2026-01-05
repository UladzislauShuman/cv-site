import type { NextConfig } from "next";

const githubRepositoryName = "cv-site";

const nextConfig: NextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    basePath: process.env.NODE_ENV === "production" ? `/${githubRepositoryName}` : "",
    assetPrefix: process.env.NODE_ENV === "production" ? `/${githubRepositoryName}/` : "",
};

export default nextConfig;
