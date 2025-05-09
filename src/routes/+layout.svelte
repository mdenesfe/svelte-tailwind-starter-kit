<script lang="ts">
	import '../app.css';
	import ErrorBoundary from '$lib/components/ErrorBoundary.svelte';
	import { page } from '$app/stores';
</script>

{#if $page.error}
	<ErrorBoundary error={$page.error} />
{:else}
	<slot />
{/if}
