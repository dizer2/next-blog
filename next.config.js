// next.config.js
const nextConfig = {
images: {
	remotePatterns: [
	{
		protocol: "https",
		hostname: "**",
		},
	],
	},
};

module.exports = nextConfig;
