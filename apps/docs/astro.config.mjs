// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Hero Templates',
			description: 'Beautiful hero sections for your website',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com' },
			],
			sidebar: [
				{
					label: 'Hero Templates',
					items: [
						{ label: 'Start Here', slug: 'quick-start-hero' },
						{ label: 'The 3 Templates', slug: 'hero-templates' },
					],
				},
			],
			customCss: [
				'./src/styles/custom.css',
			],
		}),
	],
});
