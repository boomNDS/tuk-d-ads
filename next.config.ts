import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	trailingSlash: false,
	images: {
		formats: ["image/avif", "image/webp"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "scdn.line-apps.com",
				port: "",
				pathname: "/**",
				search: "",
			},
		],
	},
};

export default nextConfig;
