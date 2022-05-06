import adapter from '@sveltejs/adapter-auto';
import path from 'path';
import { mdsvex } from 'mdsvex';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					$components: path.resolve('./src/components'),
					$stores: path.resolve('./src/stores')
				}
			}
		}
	},
	extensions: ['.svelte', '.md'],

	preprocess: [
		sveltePreprocess(),
		mdsvex({
			extensions: ['.md'],
			layout: {
				essays: 'src/routes/essays/_style.svelte',
				notes: 'src/routes/essays/_style.svelte'
			}
		})
	]
};

export default config;
