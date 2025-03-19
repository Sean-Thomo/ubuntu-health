import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: {
			display: ["Inter", "system-ui", "sans-serif"],
			body: ["Inter", "system-ui", "sans-serif"],
		},
	},
	plugins: [],
};
export default config;
