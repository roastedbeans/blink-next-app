/** @type {import('tailwindcss').Config} */
/* eslint-disable max-len */
const colors = require('tailwindcss/colors');

const svgToDataUri = require('mini-svg-data-uri');
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');

module.exports = {
	darkMode: 'selector',
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./node_modules/@tremor/**/*.{js,ts,jsx,tsx}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},

		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: colors.white,
			black: colors.black,
			'cod-gray': {
				'50': '#f6f6f6',
				'100': '#e7e7e7',
				'200': '#d1d1d1',
				'300': '#b0b0b0',
				'400': '#888888',
				'500': '#6d6d6d',
				'600': '#5d5d5d',
				'700': '#4f4f4f',
				'800': '#454545',
				'900': '#3d3d3d',
				'950': '#121212',
			},
			confetti: {
				'50': '#fcfbee',
				'100': '#f6f3cf',
				'200': '#ede79a',
				'300': '#e4d86c',
				'400': '#dcc643',
				'500': '#d3ab2d',
				'600': '#bb8924',
				'700': '#9b6622',
				'800': '#7f5221',
				'900': '#69431e',
				'950': '#3c230c',
			},
		},
		extend: {
			fontFamily: {
				inter: ['inter', 'sans-serif'],
			},
			colors: {
				'cod-gray': {
					'50': '#f6f6f6',
					'100': '#e7e7e7',
					'200': '#d1d1d1',
					'300': '#b0b0b0',
					'400': '#888888',
					'500': '#6d6d6d',
					'600': '#5d5d5d',
					'700': '#4f4f4f',
					'800': '#454545',
					'900': '#3d3d3d',
					'950': '#121212',
				},
				confetti: {
					'50': '#fcfbee',
					'100': '#f6f3cf',
					'200': '#ede79a',
					'300': '#e4d86c',
					'400': '#dcc643',
					'500': '#d3ab2d',
					'600': '#bb8924',
					'700': '#9b6622',
					'800': '#7f5221',
					'900': '#69431e',
					'950': '#3c230c',
				},
				background: {
					DEFAULT: '#f6f6f6', // Light gray from 'cod-gray'
					secondary: '#e7e7e7', // Slightly darker light gray from 'cod-gray'
				},
				foreground: '#121212', // Darkest gray from 'cod-gray'
				primary: {
					DEFAULT: '#bb8924', // Base color from 'confetti' for better contrast
					foreground: '#ffffff', // White for contrast
				},
				secondary: {
					DEFAULT: '#121212', // Slightly lighter from 'confetti' for a bit more contrast
					foreground: '#ffffff', // White for contrast
				},
				textColor: {
					DEFAULT: '#121212', // Darkest gray from 'cod-gray'
					placeholder: '#888888', // Subtle gray from 'cod-gray'
					subtle: '#888888', // Subtle gray from 'cod-gray'
					emphasis: '#4f4f4f', // Emphasis gray from 'cod-gray'
					strong: '#3d3d3d', // Strong gray from 'cod-gray'
					inverted: '#ffffff', // White for contrast
				},
				muted: {
					DEFAULT: '#f6f6f6', // Matching with background for a softer look
					foreground: '#3d3d3d', // Darker gray from 'cod-gray' for contrast
				},
				accent: {
					DEFAULT: '#f6f6f6', // Matching with muted for consistency
					foreground: '#121212', // Darkest gray from 'cod-gray' for contrast
				},
				destructive: {
					DEFAULT: '#d9534f', // Slightly darker red for better visibility
					foreground: '#f3f8fa', // Very light gray for contrast
				},
				success: {
					DEFAULT: '#31a85b', // Base green from previous 'success' definition
					foreground: '#ffffff', // White for contrast
				},
				warning: {
					DEFAULT: '#ffc107', // Base yellow from previous 'warning' definition
					foreground: '#121212', // Dark gray for contrast
				},
				info: {
					DEFAULT: '#2196f3', // Base blue from previous 'info' definition
					foreground: '#ffffff', // White for contrast
				},
				border: {
					DEFAULT: '#d1d1d1', // Light gray for borders
				},
				ring: {
					DEFAULT: '#d1d1d1', // Light gray for rings
				},
				outline: {
					DEFAULT: '#d1d1d1', // Light gray for rings
				},
				dark: {
					background: {
						DEFAULT: '#121212', // Darkest gray from 'cod-gray'
						secondary: '#1d1d1d', // Slightly lighter dark gray for secondary background
					},
					foreground: '#f6f6f6', // Light gray from 'cod-gray' for text
					primary: {
						DEFAULT: '#bb8924', // Base color from 'confetti'
						foreground: '#121212', // Dark for contrast
					},
					secondary: {
						DEFAULT: '#f6f6f6', // Slightly lighter from 'confetti'
						foreground: '#121212', // Dark for contrast
					},
					textColor: {
						DEFAULT: '#f6f6f6', // Light gray from 'cod-gray' for text on dark background
						placeholder: '#b0b0b0', // Light gray for placeholder text on dark background
						subtle: '#b0b0b0', // Light gray from 'cod-gray' for subtle text on dark background
						emphasis: '#e4e4e4', // Lighter gray for emphasized text on dark background
						strong: '#ffffff', // White for strong text on dark background
						inverted: '#121212', // Darkest gray from 'cod-gray' for text on dark background
					},
					muted: {
						DEFAULT: '#2c2c2c', // Darker muted background for subtle elements
						foreground: '#b0b0b0', // Light gray for contrast
					},
					accent: {
						DEFAULT: '#2c2c2c', // Matching with muted for consistency
						foreground: '#f6f6f6', // Light gray for contrast
					},
					destructive: {
						DEFAULT: '#d9534f', // Slightly darker red
						foreground: '#f6f6f6', // Light gray for contrast
					},
					success: {
						DEFAULT: '#31a85b', // Base green from 'success'
						foreground: '#121212', // Dark for contrast
					},
					warning: {
						DEFAULT: '#ffc107', // Base yellow from 'warning'
						foreground: '#121212', // Dark for contrast
					},
					info: {
						DEFAULT: '#2196f3', // Base blue from 'info'
						foreground: '#121212', // Dark for contrast
					},
					border: {
						DEFAULT: '#3d3d3d', // Dark gray for borders
					},
					ring: {
						DEFAULT: '#3d3d3d', // Dark gray for rings
					},
					outline: {
						DEFAULT: '#3d3d3d', // Dark gray for rings
					},
				},
				// light mode
				tremor: {
					brand: {
						faint: '#fcfbee', // Light yellow from 'confetti'
						muted: '#f6f3cf', // Muted yellow from 'confetti'
						subtle: '#dcc643', // Subtle yellow from 'confetti'
						DEFAULT: '#d3ab2d', // Default yellow from 'confetti'
						emphasis: '#bb8924', // Emphasis orange from 'confetti'
						inverted: '#ffffff', // White for contrast
					},
					background: {
						muted: '#f6f6f6', // Light gray from 'cod-gray'
						subtle: '#e7e7e7', // Slightly darker light gray
						DEFAULT: '#ffffff', // White
						emphasis: '#4f4f4f', // Dark gray for emphasis
					},
					border: {
						DEFAULT: '#d1d1d1', // Light gray for borders
					},
					ring: {
						DEFAULT: '#d1d1d1', // Light gray for rings
					},
					content: {
						subtle: '#888888', // Subtle gray
						DEFAULT: '#6d6d6d', // Default gray
						emphasis: '#4f4f4f', // Emphasis gray
						strong: '#3d3d3d', // Strong gray
						inverted: '#ffffff', // White for contrast
					},
				},
				// dark mode
				'dark-tremor': {
					brand: {
						faint: '#3c230c', // Dark brown from 'confetti'
						muted: '#69431e', // Muted dark brown from 'confetti'
						subtle: '#9b6622', // Subtle brown from 'confetti'
						DEFAULT: '#d3ab2d', // Default yellow from 'confetti'
						emphasis: '#dcc643', // Emphasis yellow from 'confetti'
						inverted: '#3c230c', // Dark brown for contrast
					},
					background: {
						muted: '#1d1d1d', // Very dark gray from 'cod-gray'
						subtle: '#121212', // Darkest gray
						DEFAULT: '#1d1d1d', // Slightly lighter dark gray
						emphasis: '#e7e7e7', // Light gray for emphasis
					},
					border: {
						DEFAULT: '#3d3d3d', // Dark gray for borders
					},
					ring: {
						DEFAULT: '#3d3d3d', // Dark gray for rings
					},
					content: {
						subtle: '#b0b0b0', // Subtle light gray
						DEFAULT: '#d1d1d1', // Default light gray
						emphasis: '#e7e7e7', // Emphasis light gray
						strong: '#f6f6f6', // Strong light gray
						inverted: '#121212', // Darkest gray for contrast
					},
				},
			},
			boxShadow: {
				// light
				'tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
				'tremor-card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
				'tremor-dropdown': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
				// dark
				'dark-tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
				'dark-tremor-card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
				'dark-tremor-dropdown': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',

				// Light mode shadows
				sm: '0 1px 2px 0 rgba(61, 61, 61, 0.05)', // cod-gray 900 with 5% opacity
				md: '0 4px 6px -1px rgba(61, 61, 61, 0.1), 0 2px 4px -1px rgba(61, 61, 61, 0.06)', // cod-gray 900
				lg: '0 10px 15px -3px rgba(61, 61, 61, 0.1), 0 4px 6px -2px rgba(61, 61, 61, 0.05)', // cod-gray 900
				xl: '0 20px 25px -5px rgba(61, 61, 61, 0.1), 0 10px 10px -5px rgba(61, 61, 61, 0.04)', // cod-gray 900
				'2xl': '0 25px 50px -12px rgba(61, 61, 61, 0.25)', // cod-gray 900 with 25% opacity
				inner: 'inset 0 2px 4px 0 rgba(61, 61, 61, 0.06)', // cod-gray 900 with 6% opacity

				// Dark mode shadows
				'dark-sm': '0 1px 2px 0 rgba(246, 246, 246, 0.05)', // cod-gray 50 with 5% opacity
				'dark-md': '0 4px 6px -1px rgba(246, 246, 246, 0.1), 0 2px 4px -1px rgba(246, 246, 246, 0.06)', // cod-gray 50
				'dark-lg': '0 10px 15px -3px rgba(246, 246, 246, 0.1), 0 4px 6px -2px rgba(246, 246, 246, 0.05)', // cod-gray 50
				'dark-xl': '0 20px 25px -5px rgba(246, 246, 246, 0.1), 0 10px 10px -5px rgba(246, 246, 246, 0.04)', // cod-gray 50
				'dark-2xl': '0 25px 50px -12px rgba(246, 246, 246, 0.25)', // cod-gray 50 with 25% opacity
				'dark-inner': 'inset 0 2px 4px 0 rgba(246, 246, 246, 0.06)', // cod-gray 50 with 6% opacity

				// Dark mode shadows with confetti colors
				'dark-primary-sm': '0 1px 2px 0 rgba(60, 35, 12, 0.05)', // Dark brown from 'confetti' 50 with 5% opacity
				'dark-primary-md': '0 4px 6px -1px rgba(105, 67, 30, 0.1), 0 2px 4px -1px rgba(105, 67, 30, 0.06)', // Muted dark brown from 'confetti' 100
				'dark-primary-lg': '0 10px 15px -3px rgba(155, 99, 34, 0.1), 0 4px 6px -2px rgba(155, 99, 34, 0.05)', // Subtle brown from 'confetti' 200
				'dark-primary-xl': '0 20px 25px -5px rgba(211, 171, 45, 0.1), 0 10px 10px -5px rgba(211, 171, 45, 0.04)', // Default yellow from 'confetti' 300
				'dark-primary-2xl': '0 25px 50px -12px rgba(211, 171, 45, 0.25)', // Default yellow from 'confetti' 300 with 25% opacity
				'dark-primary-inner': 'inset 0 2px 4px 0 rgba(176, 176, 176, 0.06)', // Light gray from 'confetti' 100 with 6% opacity
			},
			borderRadius: {
				'3xl': '1.5rem',
				'2xl': '1rem',
				xl: '0.75rem',
				lg: '0.5rem',
				md: 'calc(0.5rem - 2px)',
				sm: 'calc(0.5rem - 4px)',
				full: '9999px',
				'tremor-small': '0.375rem',
				'tremor-default': '0.5rem',
				'tremor-full': '9999px',
			},
			fontSize: {
				'tremor-label': ['0.75rem', { lineHeight: '1rem' }],
				'tremor-default': ['0.875rem', { lineHeight: '1.25rem' }],
				'tremor-title': ['1.125rem', { lineHeight: '1.75rem' }],
				'tremor-metric': ['1.875rem', { lineHeight: '2.25rem' }],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				spin: {
					from: {
						transform: 'rotate(0deg)',
					},
					to: {
						transform: 'rotate(360deg)',
					},
				},
				shimmer: {
					from: {
						backgroundPosition: '0 0',
					},
					to: {
						backgroundPosition: '-200% 0',
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				spin: 'spin 1s linear infinite',
				shimmer: 'shimmer 2s linear infinite',
			},
		},
	},
	safelist: [
		{
			pattern:
				/^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|cod-gray|confetti)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
			variants: ['hover', 'ui-selected'],
		},
		{
			pattern:
				/^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|cod-gray|confetti)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
			variants: ['hover', 'ui-selected'],
		},
		{
			pattern:
				/^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|cod-gray|confetti)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
			variants: ['hover', 'ui-selected'],
		},
		{
			pattern:
				/^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|cod-gray|confetti)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
		},
		{
			pattern:
				/^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|cod-gray|confetti)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
		},
		{
			pattern:
				/^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|cod-gray|confetti)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
		},
	],
	plugins: [
		require('tailwindcss-animate'),
		require('@headlessui/tailwindcss'),
		require('@tailwindcss/forms'),
		function ({ matchUtilities, theme }: any) {
			matchUtilities(
				{
					'bg-grid': (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
						)}")`,
					}),
					'bg-grid-small': (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
						)}")`,
					}),
					'bg-dot': (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
						)}")`,
					}),
				},
				{ values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
			);
		},
	],
};
