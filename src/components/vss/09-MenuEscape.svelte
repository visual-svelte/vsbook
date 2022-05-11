<script>
	function handleKeypress(event) {
		if (event.keyCode == 27) {
			showMenu = false;
		}
	}

	let showMenu = false;
</script>

<svelte:window on:keypress={handleKeypress} />
<div>
	<button on:click={() => (showMenu = !showMenu)}>Menu</button>

	{#if showMenu}
		<div class="flex w-24 h-48 flex-col">
			{#each ['Home', 'About', 'Articles', 'Privacy'] as link}
				<div class="h-12 w-24">{link}</div>
			{/each}
		</div>
	{/if}
</div>
