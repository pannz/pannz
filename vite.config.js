import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite'
import presetWind from '@unocss/preset-wind'
import extractorSvelte from '@unocss/extractor-svelte'
import presetIcons from '@unocss/preset-icons'
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

export default defineConfig({
	plugins: [
		UnoCSS({
			extractors: [extractorSvelte],
			presets: [
				presetWind(),
				// presetMini({
				// 	theme: {
				// 		colors: {
				// 			grabGreen: '#00b14f',
				// 		},
				// 	},
				// 	rules: [
				// 		[
				// 			/^text-(.*)$/,
				// 			([, c], { theme }) => {
				// 				if (theme.colors[c]) return { color: theme.colors[c] }
				// 			},
				// 		],
				// 	],
				// }),
				presetIcons(),
			],
		}),
		sveltekit(),
		Icons({
			compiler: 'svelte',
			customCollections: {
				'x-icons': FileSystemIconLoader('./assets/icons', svg => svg.replace(/^<svg /, '<svg fill="currentColor" ')),
			},
		}),
	],
})
