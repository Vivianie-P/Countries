/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			NunitoSans: ["Nunito Sans", "sans-serif"],
		},
		extend: {
			colors: {
				"dark-blue": "#2b3945",
				"very-dark-blue": "#202c37",
				"very-dark-blueT": "#111517",
				"dark-gray": "#858585",
				"light-gray": "#fafafa",
				white: "#ffffff",
			},
		},
	},
	plugins: [],
};
