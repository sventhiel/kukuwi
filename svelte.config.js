import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: false
		}),
		prerender: {
			handleHttpError: ({ status, path, referrer, referenceType }) => {
				if (
					path.startsWith('/audios/')
				) {
					//do nothing as it links to backend
				} else {
					throw new Error(
						path +
							' Missing link.' +
							`${status} ${path}${referrer ? ` (${referenceType} from ${referrer})` : ''}`
					);
				}
				console.warn(`${status} ${path}${referrer ? ` (${referenceType} from ${referrer})` : ''}`);
			}
		}
	}
};

export default config;
