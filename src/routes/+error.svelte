<script lang="ts">
	import { page } from '$app/stores';
	import ErrorBoundary from '$lib/components/ErrorBoundary.svelte';
</script>

<ErrorBoundary error={$page.error} />