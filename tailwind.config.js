import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				main: {
					ink: {
						0: '#191D21',
						1: '#656F77',
						2: '#ACB8C2',
						3: '#CDD9E3',
						4: '#E8EEF3',
						5: '#FFFFFF',
					},
				},
			},
		},
	},
	darkMode: 'class',
	plugins: [
		nextui({
			prefix: 'nextui', // prefix for themes variables
			addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
			defaultTheme: 'light', // default theme from the themes object
			defaultExtendTheme: 'light', // default theme to extend on custom themes
			layout: {}, // common layout tokens (applied to all themes)
			themes: {
				light: {
					layout: {}, // light theme layout tokens
					colors: {
						background: '#F5F5F5',
						primary: '#CDE41E',
					}, // light theme colors
				},
				dark: {
					layout: {}, // dark theme layout tokens
					colors: {
						background: '#050607',
						primary: '#CDE41E',
					}, // dark theme colors
				},
				// ... custom themes
			},
		}),
	],
};
