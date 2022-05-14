<script>
	let textData = [
		"VISUALIZING DATA CHANGES: we start with a simple bar chart (minimal styling on this one to focus on the functionality!). We're visualizing the data for Jan-2020 currently, but what if we next wanted to show the data for Feb-2020? ",
		"The animation is triggered by the Scrolly 'value'. On the data change, a simple Svelte tween tweens between the old and the new values (for each bar).",
		"To bring a closer connection between the bars and the textual descriptions scrolling past, you can add some custom styling to the categories. For example, we can see the <span style='background-color:#5d3754;padding:2px 5px;border-radius:5px; color: white'>Donut</span> sales here far outweighed those of the humble <span style='background-color:#dc582a;padding:2px 5px;border-radius:5px; color: white' class='cat cherry'>cherry</span>.",
		'We can also go one step further to really focus on just one of the bars and explain in in the must greater depth. ',
		'This is achieved through use of the ternary operator on the Rect styling. '
	];

	let snap = false;
	let fixPosition = 'right';
	import Scrolly from '../site/Scrolly.svelte';
	let innerHeight, scrollY, outerHeight, clientHeight, offsetHeight;

	let value = 0;
	$: props = { value: value };

	import { select, axisBottom, scaleBand, scaleLinear } from 'd3';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { colorCategorical4 } from '$utils/brand';
	let pinXAxis; // declare pins
	let margin = 30; // declare initial values for margin and svg_height/width
	let svg_height = 300;
	let svg_width = 300;
	$: height = svg_height - margin * 2;
	$: width = svg_width - margin * 2;

	let data = [
		{ 0: [700, 39, 340, 600] },
		{ 1: [200, 400, 600, 800] },
		{ 2: [300, 200, 900, 20] },
		{ 3: [300, 200, 900, 20] },
		{ 4: [300, 200, 900, 20] },
		{ 5: [300, 200, 900, 20] },
		{ 6: [300, 200, 900, 20] }
	];
	let cats = ['Apple', 'Banana', 'Cherry', 'Donut'];
	let colors = colorCategorical4;

	const progress = tweened(data.find((d) => d[value])[value], {
		duration: 400,
		easing: cubicOut
	});

	const angleProgress = tweened(0, { duration: 400, easing: cubicOut });

	$: progress.set(data.find((d) => d[value])[value]);
	$: angleProgress.set(value > 2 ? 90 : 0);
	$: x = scaleBand().domain(cats).range([0, height]).padding([0.1]);
	$: y = scaleLinear().domain([0, 1000]).range([height, 0]);
	$: if (pinXAxis) {
		select(pinXAxis).call(axisBottom(x).ticks(width / 60));
	}
</script>

{#if snap}
	<h2>You can navigate this next section with your keyboard.</h2>
{/if}

<div class="full-width chart-wrap">
	<div
		class="chart"
		class:left={fixPosition === 'left'}
		class:center={fixPosition === 'center'}
		class:right={fixPosition === 'right'}
	>
		<div>
			<p>
				Monthly sales of Fruit in <span>
					{value == 0 ? 'Jan-2020' : value === 1 ? 'Feb-2020' : 'Mar-2020'}
				</span>
			</p>

			<svg width={svg_width} height={svg_height}>
				<g
					class="xAxis"
					class:titled={value > 2}
					bind:this={pinXAxis}
					transform="translate({x.bandwidth()},{height})"
				/>
				{#each $progress as bar, i}
					<rect
						x={x.bandwidth() + x(cats[i])}
						y={height - y(bar)}
						height={y(bar)}
						width={x.bandwidth()}
						class="bar"
						fill={colors[i]}
						fill-opacity={value > 2 ? (i + 3 == value ? 1 : 0.2) : 1}
						stroke-width="2"
						stroke={value > 2 ? (i + 3 == value ? 'yellow' : 'transparent') : 'transparent'}
					/>
				{/each}
			</svg>
		</div>
		<!-- <svelte:component this={fixedComp} {...props} /> -->
	</div>
	<div
		class="text-wrapper"
		bind:clientHeight
		bind:offsetHeight
		class:left={fixPosition === 'right'}
		class:center={fixPosition === 'center'}
		class:right={fixPosition === 'left'}
	>
		<Scrolly bind:value>
			{#each textData as d, i}
				<div class="text step" class:active={value === i}>
					{@html d}
				</div>
			{/each}
		</Scrolly>
	</div>
</div>

<style>
	.chart-wrap {
		margin-bottom: 100px;
		padding-right: 10px;
	}
	.full-width {
		width: 80vw;
		left: 65%;
		right: 50%;
		margin-left: -50vw;
		margin-right: -50vw;
		position: relative;
	}
	.chart {
		position: sticky;
		position: -webkit-sticky;
		position: -moz-sticky;
		position: -ms-sticky;
		position: -o-sticky;

		padding: 10px;
		background-color: white !important;
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
		top: 10vh;
		height: 400px;
	}

	.text-wrapper {
		margin-right: 0;
		padding-right: 0;
		min-width: 300px !important;
		position: relative;
		z-index: 2;
		padding-bottom: 100px;
	}
	.text-wrapper .text {
		margin: 60vh 0 !important;
		padding: 20px;
		border: none;
		background-color: rgba(255, 255, 255, 0.95);
	}

	@media all and (min-width: 800px) {
		.chart {
			min-height: 80vh;
			top: 20px;
			width: 600px;
		}

		.chart.left {
			left: 10%;
		}

		.chart.center {
			margin: 0 auto !important;
			left: 25%;
		}
		.chart.right {
			left: 90%;
		}

		.text-wrapper.left {
			margin: 0;
		}
		.text-wrapper.center {
			margin: 0 auto !important;
		}
		.text-wrapper.right {
			left: 55%;
			margin: 0;
		}

		.text-wrapper {
			margin: 0 auto;
			width: 35vw;
		}

		.text {
			background-color: rgba(255, 255, 255, 1);
			border: 1px gray solid;
		}
	}
</style>
