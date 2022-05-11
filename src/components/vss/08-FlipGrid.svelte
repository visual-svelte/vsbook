<script>
	import WidgetContainer from '$components/site/WidgetContainer.svelte';

	import { flip } from 'svelte/animate';
	import { colorScaleLinear } from '$utils/brand';
	let images = [
		{ id: 0 },
		{ id: 1 },
		{ id: 2 },
		{ id: 3 },
		{ id: 4 },
		{ id: 5 },
		{ id: 6 },
		{ id: 7 },
		{ id: 8 },
		{ id: 9 }
	];
	let color = colorScaleLinear('dragon', 10);
	function shuffle() {
		let currentIndex = images.length,
			randomIndex;

		while (currentIndex != 0) {
			randomIndex = Math.floor(Math.random() * currentIndex); // Pick a remaining element.
			currentIndex--;

			[images[currentIndex], images[randomIndex]] = [images[randomIndex], images[currentIndex]];
		}
	}

	let asc = true;
	function sort() {
		if (asc) {
			images = images.sort((a, b) => (a.id < b.id ? 1 : b.id < a.id ? -1 : 0));
			asc = !asc;
		} else {
			images = images.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));
			asc = !asc;
		}
	}
</script>

<WidgetContainer url="http://github.com">
	<button on:click={sort}> Sort {asc ? '9->0' : '0->9'} </button>
	<button on:click={shuffle}> Shuffle </button>

	{#if images}
		<div class="grid">
			<!-- each block must be keyed, for example with (post.id) in brackets -->
			{#each images as post, i (post.id)}
				<div animate:flip={{ duration: 500 }}>
					<div class="card " style="background-color: {color(post.id)}">
						{post.id}
					</div>
				</div>
			{/each}
		</div>
	{/if}
</WidgetContainer>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(50px, 60px));
	}
	.grid .card {
		border: 1px solid black;
		height: 50px;
		width: 50px;
		margin: 10px;
		padding-left: 5px;
		padding-top: 5px;
	}
	button {
		@apply text-sm;
		padding: 5px 10px;
		font-weight: 600;
		background-color: white;
		border: gray 2px solid;
	}
</style>
