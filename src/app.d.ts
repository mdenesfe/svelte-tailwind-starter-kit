// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Error {
			message: string;
			code?: string;
			id?: string;
		}
		interface Locals {}
		interface PageData {}
		interface Platform {}
	}
}

declare module '$app/stores' {
	import { Readable } from 'svelte/store';
	import { Page } from '@sveltejs/kit';

	export const page: Readable<Page>;
}

export {}; 