<script>
	import { scale, fly, slide, fade } from 'svelte/transition';
	import { cubicInOut, cubicOut } from 'svelte/easing';
	import WidgetContainer from '$components/site/WidgetContainer.svelte';

	let yAxis = [0, 5000, 10000, 15000, 20000, 25000, 30000];
	let xAxis = [2018, 2019, 2020, 2021];
	let data = [299, 1843, 8466, 28524];
	let vis = false;
	let firstRun = true;
	const timer = (ms) => new Promise((res) => setTimeout(res, ms));

	async function toggleVis() {
		if (firstRun) {
			vis = !vis;
			firstRun = false;
		} else {
			vis = false;
			await timer(500);

			vis = true;
		}
	}

	//   custom transition to reveal the XAxis line from left to right.
	function widthLeft2Right(node, { delay = 0, duration = 400, easing = cubicInOut }) {
		return {
			delay,
			duration,
			easing,
			css: (t) => `width: ${t * 100}%`
		};
	}
</script>

<WidgetContainer url="http://github.com">
	<div class="container" in:scale>
		<button class="toggle-button" on:click={toggleVis}>Play </button>
		{#if vis}
			<!-- TITLE BLOCK -->
			<div class="title">
				<h4 in:fade>DETECTED ARRIVALS BY SMALL BOAT IN THE UK</h4>
				<p in:fade>Source: Home Office</p>
			</div>
			<div class="chart-area ">
				<!-- WHITE X AXIS LINE -->
				<div
					class="bottom-axis"
					in:widthLeft2Right={{ duration: 1000, delay: 600, easing: cubicInOut }}
				/>

				<!-- YAXIS TICKS AND LABELS -->
				{#each yAxis as line, i}
					<div class="grid-line" style="transform:translateY({150 - (150 * line) / 30000}px) ">
						<p
							in:fly={{
								y: (yAxis.length - 1 - i) * 10,
								delay: (yAxis.length - 1 - i) * 50,
								easing: cubicInOut,
								duration: 1000
							}}
							class="yAxisLabel"
						>
							{line}
						</p>
					</div>
				{/each}

				<!-- BARS -->
				<div class="bar-container">
					{#each data as bar, i}
						<div
							class="bar"
							in:fly={{
								y: 300,
								delay: 800 + i * 500,
								duration: 1000,
								easing: cubicInOut
							}}
							style="transform:translate({10 + i * 50}px, 0px ); height:{(150 * bar) / 30000}px;  "
						>
							<!-- BAR LABELS -->
							<p class="barLabel">
								{#each bar.toString() as letter, k}
									<span
										in:fly={{
											y: -100,
											delay: 2000 + i * 500 + k * 200
										}}>{letter}</span
									>
								{/each}
							</p>
						</div>
					{/each}
				</div>

				<!-- X AXIS LABELS -->
				<div class="xLabels">
					{#each xAxis as label, i}
						<div in:fly={{ y: 20, duration: 600, delay: 800 + i * 100 }} class="xAxisLabel">
							{label}
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</WidgetContainer>

<style>
	.container {
		border-radius: 10px;
		height: 300px;

		width: 100%;
		min-width: 320px;
		max-width: 400px;

		position: relative;
		background-image: url('/images/migrants.jpg');
		background-size: cover;
		background-blend-mode: saturation;
	}
	.container .title {
		padding-top: 7px;
		min-height: 50px;
		max-width: 300px;
		margin: 0px;
		text-align: center;
		color: white;
		margin-left: min(6vw, 50px);
	}
	.container .title p {
		font-size: 0.7rem;
		line-height: 1.2rem;
		padding: 0px 5px;
		margin: 0;
		display: inline-block;
		background-color: rgba(103, 19, 115);
	}
	.container .title h4 {
		font-size: 0.7rem;
		line-height: 1.2rem;
		padding: 0px 5px;
		margin: 0;
		display: inline-block;
		background-color: rgba(103, 19, 115);
	}

	.chart-area {
		background-color: rgba(255, 255, 255, 0.05);
		height: 150px;
		width: 200px;
		margin-left: min(23vw, 110px);
		margin-top: 10px;
		position: relative;
	}

	.bottom-axis {
		border-bottom: 1px solid white;
		height: 150px;
		width: 100%;
		position: absolute;
	}

	.bar-container {
		height: 160px;
		width: 200px;
		top: -10px;
		position: absolute;
		overflow-y: hidden;
	}
	.bar-container .bar {
		background-color: rgba(19, 229, 248, 1);
		opacity: 0.8;
		width: 30px;
		bottom: 0px;
		position: absolute;
	}
	.bar-container .bar .barLabel {
		position: absolute;
		top: -30px;
		width: 30px;
		text-align: center;
		font-size: 0.6rem;
		color: white;
	}
	.grid-line .yAxisLabel {
		position: absolute;
		color: white;
		font-size: 0.6rem;
		width: 30px;
		left: -35px;
		top: -22px;
		text-align: end;
	}

	.xLabels {
		position: absolute;
		color: white;
		top: 150px;
		display: flex;
		font-size: 0.6rem;
	}

	.xLabels .xAxisLabel {
		padding: 5px 15px 5px 14.5px;
	}
	.toggle-button {
		background-color: rgba(255, 255, 255, 0);
		color: white;
		bottom: 0px;
		width: 70px;
		margin: 10px;
		cursor: pointer;
		border: 1px solid white;
		border-radius: 30px;
		padding: 10px 10px;
		position: absolute;
		transition: background-color 0.4s;
	}
	.toggle-button:hover {
		background-color: rgba(255, 255, 255, 0.2);
	}
</style>
