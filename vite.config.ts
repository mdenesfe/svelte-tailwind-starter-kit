import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import compression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ mode }) => {
	const isProduction = mode === 'production';
	
	return {
		plugins: [
			sveltekit(),
			// Compression plugin: Create gzip and Brotli files
			isProduction && compression({
				algorithm: 'gzip',
				ext: '.gz',
				threshold: 1024, // Compress files larger than 1KB
			}),
			isProduction && compression({
				algorithm: 'brotliCompress',
				ext: '.br',
				threshold: 1024,
			}),
			// Bundle analysis (only creates stats.html in production build)
			isProduction && visualizer({
				open: false,
				gzipSize: true,
				brotliSize: true,
				filename: 'stats.html'
			}),
		].filter(Boolean),
		
		server: {
			port: 5173,
			strictPort: false,
			hmr: {
				overlay: false // Disable error overlays to reduce RAM usage
			}
		},
		
		preview: {
			port: 5173,
			strictPort: false
		},
		
		build: {
			target: 'esnext', // Optimize for modern browsers
			minify: 'terser', // Use terser for better minification
			cssMinify: true, // Minify CSS
			reportCompressedSize: false, // Speed up build time
			rollupOptions: {
				output: {
					manualChunks: (id: string) => {
						// Separate Svelte and SvelteKit modules into separate chunks
						if (id.indexOf('node_modules/svelte/') !== -1) {
							return 'svelte';
						}
						if (id.indexOf('node_modules/@sveltejs/kit/') !== -1) {
							return 'svelte-kit';
						}
						// Separate Tailwind CSS into a separate chunk
						if (id.indexOf('node_modules/tailwindcss/') !== -1 || 
							id.indexOf('node_modules/postcss/') !== -1 ||
							id.indexOf('node_modules/autoprefixer/') !== -1) {
							return 'styles';
						}
						return null;
					}
				}
			},
			// Remove dead code to reduce bundle size
			chunkSizeWarningLimit: 1000
		},
		
		optimizeDeps: {
			include: ['svelte', '@sveltejs/kit']
		},
		
		ssr: {
			noExternal: ['svelte-*'] // Import all svelte dependencies for SSR
		}
	};
});