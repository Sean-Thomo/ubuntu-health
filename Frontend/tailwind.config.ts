/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					50: "#f0f9ff",
					100: "#e0f2fe",
					500: "#0284c7",
					600: "#0172aa",
				},
				accent: {
					500: "#10b981",
					600: "#059669",
				},
				medical: {
					background: "#f8fafc",
					text: {
						primary: "#1e293b",
						secondary: "#475569",
					},
				},
			},
			boxShadow: {
				light: "0 1px 3px 0 rgba(0, 0, 0, 0.05)",
				medium: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
			},
			fontFamily: {
				sans: ["Inter", "system-ui", "sans-serif"],
			},
			animation: {
				"fade-in": "fadeIn 0.3s ease-out",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
			},
		},
	},
	plugins: [
		// Optional: Add plugins for form styling, typography, etc.
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
	],
};
