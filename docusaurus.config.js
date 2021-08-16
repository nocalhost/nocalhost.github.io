const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	title: 'Nocalhost',
	tagline: 'Nocalhost is an open-source toolsets help to build cloud-native applications easier and faster',
	url: 'https://nocalhost.dev/',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'nocalhost', // Usually your GitHub org/user name.
	projectName: 'nocalhost.github.io', // Usually your repo name.
	// i18n Configurations
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'zh-CN'],
		localeConfigs: {
			en: {
				label: 'English',
			},
			'zh-CN': {
				label: '中文（中国）'
			}
		},
	},
	// Stylesheets
	stylesheets: [
		'https://fonts.googleapis.com/icon?family=Material+Icons',
	],
	// Plugins
	plugins: [
		[
			// PWA
			'@docusaurus/plugin-pwa',
			{
				debug: true,
				offlineModeActivationStrategies: [
					'appInstalled',
					'standalone',
					'queryString',
				],
				pwaHead: [
					{
						tagName: 'link',
						rel: 'icon',
						href: '/img/logo.png',
					},
					{
						tagName: 'link',
						rel: 'manifest',
						href: '/manifest.json', // PWA manifest
					},
					{
						tagName: 'meta',
						name: 'theme-color',
						content: 'rgb(37, 194, 160)',
					},
				],
			},
		],
		// Custom Redirect
		
		// Image Zoom
		'plugin-image-zoom',
	],
	themeConfig: {
		// Search
		algolia: {
			apiKey: 'a20f9e4540c8e520a806eae92c33cdd5',
			indexName: 'nocalhost',
		},
		// Navbar
		navbar: {
			title: 'Nocalhost',
			logo: {
				alt: 'Most productive cloud-native development toolsets',
				src: 'img/logo.png',
			},
			items: [
				// Documentations
				{
					type: 'doc',
					docId: 'introduction',
					position: 'left',
					label: 'Docs',
				},
				// Video
				{to: '/videos', label: 'Videos', position: 'left'},
				// Blog
				{to: '/blog', label: 'Blog', position: 'left'},
				// Version
				// {
				// 	type: 'docsVersionDropdown',
				// 	position: 'right',
				// 	dropdownItemsAfter: [{to: '/versions', label: 'All Versions'}],
				// },
				// Language
				{
					type: 'localeDropdown',
					position: 'right'
				},
				// Github Icon
				{
					href: 'https://github.com/nocalhost/nocalhost',
					// label: 'GitHub',
					position: 'right',
					className: 'header-github-link',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Docs',
					items: [
						{
							label: 'Quickstart',
							to: '/docs/quick-start',
						},
						{
							label: 'GitHub Repository',
							to: 'https://github.com/nocalhost/nocalhost'
						},
						{
							label: 'Documentation',
							to: '/docs/introduction',
						},
					],
				},
				{
					title: 'Community',
					items: [
						{
							label: 'Slack',
							href: 'https://nocalhost.slack.com/',
						},
						{
							label: 'Twitter',
							href: 'https://twitter.com/nocalhost',
						},
						{
							label: 'Linkedin',
							href: 'https://www.linkedin.com/in/nocalhost/',
						},
					],
				},
				{
					title: 'More',
					items: [
						{
							label: 'Blog',
							to: '/blog',
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Nocalhost | Initiated by <a href="https://coding.net/" target="_blank">Coding.net</a>`,
		},
		prism: {
			theme: lightCodeTheme,
			darkTheme: darkCodeTheme,
		},
		// Announcement
		announcementBar: {
			id: 'announcementBar-1', // Increment on change
			content:
			  '⭐️ If you like Nocalhost, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/nocalhost/nocalhost">GitHub</a>! ⭐',
		},
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				// Docs
				docs: {
					path: 'docs',
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: 'https://github.com/nocalhost/nocalhost.github.io/tree/main',
					showLastUpdateAuthor: true,
					showLastUpdateTime: true,
				},
				// Blog
				blog: {
					blogTitle: 'Nocalhost Blog',
					blogDescription: 'Most productive way to build cloud-native application',
					showReadingTime: true,
					blogSidebarCount: 'ALL',
					blogSidebarTitle: 'All our posts',
				},
				// Theme
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			},
		],
	],
}
