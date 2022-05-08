<script>
	import Icon from '$components/site/Icon.svelte';
	import MenuList from '$components/site/MenuList.svelte';
	let menuOpen = false;
	function handleMenuClick() {
		menuOpen = !menuOpen;
	}
</script>

<div class="flex font-head relative z-10 py-4 items-center">
	<div class=" text-left grow text-xl font-bold">Visual Storytelling with Svelte</div>
	<div
		on:click={handleMenuClick}
		class="items-center px-2 cursor-pointer border mr-4 w-7 h-7 flex justify-center rounded bg-white"
	>
		<Icon stroke="black" stroke-width="0.5px" name="menu" height="20px" width="20px" />
	</div>
	{#if menuOpen}
		<div
			on:click={handleMenuClick}
			class="shadow-xl overflow-hidden top-14 absolute right-4 max-w-[500px] ml-4 border-2 rounded-xl bg-white text-sm "
		>
			<MenuList />
		</div>
	{/if}
</div>
