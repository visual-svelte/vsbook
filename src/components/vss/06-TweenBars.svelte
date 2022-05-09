<script>
	import WidgetContainer from '$components/site/WidgetContainer.svelte';
	import { elasticOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	let primary = true;
	let data = {
		primary: [
			[0, 23, 35],
			[0, 30, 50],
			[0, 75, 90],
			[0, 45, 90]
		],
		main: [
			[0, 45, 78],
			[0, 10, 90],
			[0, 50, 70],
			[0, 90, 95]
		]
	};

	const values = tweened(data.primary, {
		duration: 800,
		easing: elasticOut
	});
	function updateData(cat) {
		if (cat == 'main') {
			values.set(data.main);
			primary = false;
		} else {
			values.set(data.primary);
			primary = true;
		}
	}

	let xStretch = 3;
	function getWidth(i, group) {
		if (i == 2) {
			return (100 - group[i]) * xStretch;
		} else {
			return (group[i + 1] - group[i]) * xStretch;
		}
	}

	function getXOffset(i, group) {
		return group[i] * xStretch;
	}
	function getYOffset(group_index) {
		return 30 + group_index * 50;
	}

	let colors = ['#3873EA', '#423e42', '#BF1818'];
</script>

<WidgetContainer url="http://github.com">
	<div class="container">
		<h4 class="font-bold  py-2 text-center font-head mt-0">
			Breakdown of how voters in different age groups voted at a Primary and Main Election
		</h4>
		<div class="buttons pt-4 flex flex-row flex-wrap">
			<button
				class=" shadow-xl bg-white bg-opacity-50 border-white border w-24 p-2 my-2"
				class:selected={primary}
				on:click={() => updateData('primary')}
			>
				Primary election
			</button>
			<button
				class="  shadow-xl bg-white bg-opacity-50 border-white border  w-24 p-2 my-2"
				class:selected={!primary}
				on:click={() => updateData('main')}
			>
				Main election
			</button>
		</div>

		<div class="chart-wrapper">
			{#each $values as group, j}
				<div class="labels">
					<div class="cat-label" style="transform:translate(0vw,{getYOffset(j) + 7}px)">
						{['18-30', '30-50', '50-65', '65+'][j]}
					</div>
				</div>
				{#each group as bar, i}
					<div
						class="bar"
						style="height:{30}px; width:{getWidth(i, group)}px; clear:both;background-color:{colors[
							i
						]};transform:translate({getXOffset(i, group)}px,{getYOffset(j)}px);"
					/>
				{/each}
			{/each}
		</div>
		<div class="key">
			Key : <span style="color:{colors[0]}"> Blue Party</span> |
			<span style="color:{colors[1]}"> Centrists </span>
			| <span style="color:{colors[2]}"> Red Party</span>
		</div>
	</div>
</WidgetContainer>

<style>
	h3 {
		margin-top: 0;
	}
	.buttons {
		width: 255px;
		margin: 0 auto;
	}

	.buttons .selected {
		border: black 3px solid;
	}
	.container {
		height: 450px;
	}
	.container h3 {
		text-align: center;
	}
	.container .bar {
		position: absolute;
		display: flex;
		z-index: 1;
	}
	.container .key {
		font-size: 0.7rem;
		text-align: center;
	}

	.container .chart-wrapper {
		margin: 0 auto;
		overflow: hidden;
		position: relative;
		width: 300px;
		height: 230px;
	}
	.container .labels {
		position: absolute;
		z-index: 30;
	}

	.container .labels .cat-label {
		transform: translateX(100px);
		font-size: 0.8rem;
		text-align: right;
		background-color: rgba(255, 255, 255, 1);
		line-height: 1rem;
	}
</style>
