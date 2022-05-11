<script>
	let showSlideThing = false;
	import { fly } from 'svelte/transition';
</script>

<div class="relative py-10 w-32" on:click={() => (showSlideThing = !showSlideThing)}>
	<span class="p-5 cursor-pointer z-50 select-none bg-white border-2 ">Click me</span>

	{#if showSlideThing}
		<p transition:fly={{ x: -100 }} class="absolute mt-0 -z-10 top-6 -right-24 ">Hidden thing!</p>
	{/if}
</div>
