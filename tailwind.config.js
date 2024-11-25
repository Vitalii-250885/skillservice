import { transform } from 'typescript'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			fontFamily: {
				koulen: 'Koulen-Regular, sans-serif',
				lexend: 'Lexend-VariableFont_wght, sans-serif',
				sourGummy: 'SourGummy, sans-serif',
			},
			fontSize: {
				100: '6.8vw',
				110: '8.7vh',
				120: '6.1vw',
				140: '7.07vw',
				150: '9.4rem',
				200: '12.5rem',
			},
			width: {
				588: '36.75rem',
			},
			keyframes: {
				ticker: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' },
				},
				displayFirst: {
					'0%': { opacity: 1 },
					'40%': { opacity: 1 },
					'45%': { opacity: 0 },
					'95%': { opacity: 0 },
					'100%': { opacity: 1 },
				},
				displaySecond: {
					'0%': { opacity: 0 },
					'45%': { opacity: 0 },
					'50%': { opacity: 1 },
					'90%': { opacity: 1 },
					'95%': { opacity: 0 },
					'100%': { opacity: 0 },
				},
				display: {
					'0%': {opacity: 0, scale: '70%'},
					'100%': {opacity: 1, scale: '100%'},
				}
			},

			animation: {
				ticker: 'ticker 20s linear infinite',
				displayFirst: 'displayFirst 20s linear infinite',
				displaySecond: 'displaySecond 20s linear infinite',
				display: 'display 0.2s ease-out',
			},
		},
		colors: {
			white: '#ffffff',
			gradient: {
				start: '#EEFFFA',
				end: '#619C8A',
			},
			primary: {
				50: '#F0FAFB',
				100: '#fdb500',
				200: '#f5bf36',
				300: '#FCCA47',
				400: '#498373',
				500: '#30554B',
				600: '#619C8A',
			},
		},
	},
	plugins: [],
}
