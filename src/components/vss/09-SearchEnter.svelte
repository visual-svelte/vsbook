<script>
	import { slide } from 'svelte/transition';
	let showResults = false;
	function handleKeypress(event) {
		console.log(event);
		if (event.key == 'Enter') {
			showResults = true;
		} else {
			showResults = false;
		}
	}
</script>

<!-- keypress -->
<div class="p-10">
	<div class="text-sm italic py-2">Type your query and hit Enter:</div>
	<input class="outline p-2" type="text" on:keypress={handleKeypress} placeholder="Search..." />

	{#if showResults}
		<div in:slide class="results">44 results found!</div>
	{/if}
</div>
