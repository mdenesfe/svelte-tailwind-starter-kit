<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>SvelteKit + Tailwind Starter</title>
</svelte:head>

<main class="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100">
	<div class="container mx-auto px-4 py-16">
		<div class="max-w-3xl mx-auto text-center">
			<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
				SvelteKit + Tailwind Starter
			</h1>
			<p class="mt-6 text-lg leading-8 text-gray-600">
				A modern, production-ready starter template with TypeScript, ESLint, Prettier, and more.
			</p>
			<div class="mt-10 flex items-center justify-center gap-x-6">
				<a
					href="https://kit.svelte.dev"
					target="_blank"
					rel="noopener noreferrer"
					class="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
				>
					Learn SvelteKit
				</a>
				<a
					href="https://tailwindcss.com"
					target="_blank"
					rel="noopener noreferrer"
					class="text-sm font-semibold leading-6 text-gray-900"
				>
					Learn Tailwind <span aria-hidden="true">→</span>
				</a>
			</div>
		</div>

		{#if mounted}
			<div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
				<div class="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
					<h3 class="text-lg font-semibold leading-8 text-gray-900">TypeScript</h3>
					<p class="mt-4 text-base leading-7 text-gray-600">
						Full TypeScript support with strict type checking and modern features.
					</p>
				</div>
				<div class="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
					<h3 class="text-lg font-semibold leading-8 text-gray-900">Tailwind CSS</h3>
					<p class="mt-4 text-base leading-7 text-gray-600">
						Utility-first CSS framework for rapid UI development with modern design.
					</p>
				</div>
				<div class="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
					<h3 class="text-lg font-semibold leading-8 text-gray-900">Code Quality</h3>
					<p class="mt-4 text-base leading-7 text-gray-600">
						ESLint and Prettier configured for consistent code style and quality.
					</p>
				</div>
			</div>
		{/if}
	</div>
</main>