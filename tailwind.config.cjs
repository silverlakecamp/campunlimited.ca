const { tailwindExtractor } = require("tailwindcss/lib/lib/purgeUnusedStyles");

const config = {
	mode: "aot",
	darkMode: 'class',
	purge: {
		content: [
			"./src/**/*.{html,js,svelte,ts}",
		],
		options: {
			defaultExtractor: (content) => [
				// If this stops working, please open an issue at https://github.com/svelte-add/tailwindcss/issues rather than bothering Tailwind Labs about it
				...tailwindExtractor(content),
				// Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
				...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
			],
		},
		safelist: [/^svelte-[\d\w]+$/],
	},
	theme: {
		extend: {
			backgroundImage: theme => ({
				'slwc-logo': "url('/src/img/slwc_alt_icon_color.png')"
			}),
			colors: {
				slwcgreen: '#b0c954'
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio')
	],
};

module.exports = config;
