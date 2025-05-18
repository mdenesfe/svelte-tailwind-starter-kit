import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$lib: 'src/lib',
			$app: 'src/app',
			$components: 'src/components',
			$utils: 'src/lib/utils'
		},
		inlineStyleThreshold: 5000, // 5KB'den küçük stiller için inline CSS
		csrf: {
			checkOrigin: true // Güvenlik için CSRF koruması
		},
		csp: {
			mode: 'auto' // Otomatik içerik güvenliği politikası
		}
	},
	preprocess: vitePreprocess({
		postcss: true, // PostCSS işleme
		sourceMap: false, // Üretim için source map oluşturma (geliştirme için true yapılabilir)
	}),
	compilerOptions: {
		dev: process.env.NODE_ENV !== 'production',
		immutable: true, // İmmutable geçişler kullanarak performansı artır
		hydratable: true, // SSR için hidrasyon
		discloseVersion: false, // Sürüm bilgisini HTML'de gösterme
		css: 'external', // HMR ile uyumlu olması için CSS'i harici dosyaya çıkar
		accessors: false // Gereksiz aksesör fonksiyonları oluşturma
	}
};

export default config;
