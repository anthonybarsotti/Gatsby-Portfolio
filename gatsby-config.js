
require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: "Gatsby Portfolio",
		description: "Minimal portfolio theme with Wordpress source.",
		author: "Tony Barsotti",
	},
	plugins: [
		"gatsby-plugin-react-helmet",
		"gatsby-transformer-sharp",
		"gatsby-plugin-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: "gatsby-plugin-sass",
			options: {
				data: "@import 'variables', 'functions', 'placeholder-selectors';",
				includePaths: [
					"src/styles/util"
				],
				postCssPlugins: [
					require("tailwindcss")
				]
			}
		},
		{
			resolve: "gatsby-source-wordpress",
			options: {
				baseUrl: process.env.WP_URL,
				protocol: process.env.WP_PROTOCOL,
				hostingWPCOM: false,
				useACF: true,
				searchAndReplaceContentUrls: {
					sourceUrl: `${process.env.WP_PROTOCOL}://${process.env.WP_URL}`,
					replacementUrl: process.env.SITE_URL
				}
			}
		},
		{
			resolve: "gatsby-plugin-page-transitions",
			options: {
				transitionTime: 750
			}
		}
	]
};
