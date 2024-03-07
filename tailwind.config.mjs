/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'sidebar-desktop': "url('/bg-sidebar-desktop.svg')",
				'sidebar-mobile': "url('/bg-sidebar-mobile.svg')",
			},
			colors: {
				'CoolGray': '#E7E8F1',
				'LightGray': '#D3D4EC',
				'Magnolia': '#FFD7BE',
				'Alabaster': '#FFFAF0',
				'White': '#FFFFFF',
				'MarineBlue': '#0099CC',
				'PurplishBlue': '#6A0DAD',
				'PastelBlue': '#80CBC4',
				'LightBlue': '#ADD8E6',
				'StrawberryRed': '#FFC080',
			}
		},
	},
	plugins: [],
}
