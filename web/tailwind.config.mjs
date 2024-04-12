/*
 * @Author: hibana2077 hibana2077@gmail.com
 * @Date: 2024-04-12 18:36:15
 * @LastEditors: hibana2077 hibana2077@gmail.com
 * @LastEditTime: 2024-04-12 19:42:15
 * @FilePath: \TSC2024_web\web\tailwind.config.mjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const {
	default: flattenColorPalette,
  } = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'arapawa': {
					'50': '#f3f5ff',
					'100': '#e9ecfe',
					'200': '#d6dcfe',
					'300': '#b5bdfd',
					'400': '#8c93f9',
					'500': '#5d5ff5',
					'600': '#443bec',
					'700': '#3629d8',
					'800': '#2c22b5',
					'900': '#271e94',
					'950': '#131062',
				},
			},
		},
	},
	darkMode: "class",
	plugins: [addVariablesForColors],
}

function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
   
	addBase({
	  ":root": newVars,
	});
}