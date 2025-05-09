<script lang="ts">
	import { onMount } from 'svelte';

	export let error: { message?: string } | null = null;
	let errorMessage: string = 'An unexpected error occurred';

	onMount(() => {
		if (error?.message) {
			errorMessage = error.message;
		}
	});
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
	<div class="max-w-md w-full space-y-8">
		<div>
			<h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
				Something went wrong
			</h2>
			<p class="mt-2 text-center text-sm text-gray-600">
				{errorMessage}
			</p>
		</div>
		<div class="mt-8 space-y-6">
			<button
				on:click={() => window.location.reload()}
				class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
			>
				Try again
			</button>
		</div>
	</div>
</div> 