<script>
	let showTooltip = false;
	import { slide } from 'svelte/transition';
</script>

<div class="relative h-24 w-28">
	<div
		class="p-5 border-2 w-28 text-center bg-gray-100"
		on:mouseenter={() => (showTooltip = true)}
		on:mouseleave={() => {
			showTooltip = false;
		}}
	>
		Hover me
	</div>

	{#if showTooltip}
		<div transition:slide class="tooltip -right-20 top-6 absolute">Hovered!</div>
	{/if}
</div>
