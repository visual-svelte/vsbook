import adapter from '@sveltejs/adapter-auto';
import path from 'path';
import { mdsvex } from 'mdsvex';
import sveltePreprocess from 'svelte-preprocess';
import toc from '@jsdevtools/rehype-toc';
import rehypeSlug from 'rehype-slug';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					$components: path.resolve('./src/components'),
					$stores: path.resolve('./src/stores'),
					$utils: path.resolve('./src/utils')
				}
			}
		}
	},
	extensions: ['.svelte', '.md'],

	preprocess: [
		mdsvex({
			extensions: ['.svelte.md', '.md', '.svx'],
			rehypePlugins: [rehypeSlug],
			layout: {
				learn: 'src/routes/learn/_style.svelte'
			}
		}),

		sveltePreprocess()
	]
};

export default config;
