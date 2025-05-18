<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex flex-col items-center justify-center min-h-screen text-center">
	<h1 class="text-5xl font-bold text-primary-600 mb-4">{$page.status}</h1>
	<p class="text-2xl mb-8">{$page.error?.message || "Sayfa bulunamadı"}</p>
	
	{#if $page.status === 404 && $page.url.pathname.includes('/.well-known/appspecific')}
		<!-- DevTools hataları için sessizce göster -->
		<small class="text-gray-400">Bu bir Chrome DevTools isteği</small>
	{:else}
		<a href="/" class="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors">
			Ana Sayfaya Dön
		</a>
	{/if}
</div>

<style>
	:global(body) {
		background-color: #f9fafb;
		color: #374151;
	}
</style>