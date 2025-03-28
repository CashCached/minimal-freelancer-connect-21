
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Updated custom colors for galaxy gradient theme (more pink-focused but still professional)
				brand: {
					purple: '#b36ef5',  // More pink/purple as primary
					purpleDark: '#9258C7', // Darker purple with pink undertone
					purpleLight: '#D6BCFA', // Light purple
					pink: '#F759AB',     // Vibrant pink (but not too bright)
					pinkLight: '#F5B8FF', // Light pink
					blackAmoled: '#000000', // True AMOLED black
					darkCharcoal: '#221F26',
					silverGray: '#9F9EA1',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				'pulse-soft': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 5px 2px rgba(247, 89, 171, 0.3)' },
					'50%': { boxShadow: '0 0 15px 5px rgba(247, 89, 171, 0.5)' },
				},
				'ripple': {
					'0%': { width: '0px', height: '0px', opacity: '0.5' },
					'100%': { width: '200px', height: '200px', opacity: '0' },
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' },
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				'bounce-subtle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' },
				},
				'ping-subtle': {
					'75%, 100%': { transform: 'scale(1.1)', opacity: '0' },
				},
				'magnetic-pull': {
					'0%': { transform: 'translate(0, 0)' },
					'100%': { transform: 'translate(var(--mx, 0), var(--my, 0))' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out',
				'fade-up': 'fade-up 0.7s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'pulse-soft': 'pulse-soft 3s infinite ease-in-out',
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 3s ease-in-out infinite',
				'ripple': 'ripple 1s ease-out forwards',
				'shimmer': 'shimmer 2s infinite linear',
				'rotate-slow': 'rotate-slow 20s linear infinite',
				'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
				'ping-subtle': 'ping-subtle 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
				'magnetic-pull': 'magnetic-pull 0.2s ease-out forwards',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'amoled-grid': 'linear-gradient(to right, #2226 1px, transparent 1px), linear-gradient(to bottom, #2226 1px, transparent 1px)',
				'galaxy-gradient': 'linear-gradient(225deg, #F759AB 0%, #b36ef5 50%, #9258C7 100%)',
				'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
