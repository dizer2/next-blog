// next.config.js
const nextConfig = {
	images: {
	  remotePatterns: [
		{
		  protocol: 'https',
		  hostname: 'media.wired.com',
		  port: '',
		  pathname: '/**',
		},
		{
		  protocol: 'https',
		  hostname: 'readwrite.com',
		  port: '',
		  pathname: '/wp-content/uploads/**',
		},
		{
		  protocol: 'https',
		  hostname: 'm.files.bbci.co.uk',
		  port: '',
		  pathname: '/modules/bbc-morph-sport-seo-meta/**',
		},
		{
			protocol: 'https',
			hostname: 'cdn.vox-cdn.com', 
			port: '',
			pathname: '/**',
		},
		{
			protocol: 'https',
			hostname: 'cdn.arstechnica.net',
			port: '',
			pathname: '/**',
		},
	  ],
	},
  };
  
  module.exports = nextConfig;
  