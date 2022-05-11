<script>
	import { spring } from 'svelte/motion';

	let coords = spring(
		{ x: 50, y: 50 },
		{
			stiffness: 0.1,
			damping: 0.25
		}
	);
	let offsetHeight, offsetWidth;
	let scrollY;
	let mouseX;
	let mouseY;
	function handleMousemove(e) {
		mouseX = e.offsetX;
		mouseY = e.offsetY;
	}

	let showSlideThing;
</script>

<!-- <div
	bind:offsetHeight
	bind:offsetWidth
	class="bg-pink-600 relative w-full h-96"
	on:mousemove={handleMousemove}
>
	<div
		style="transform: translate({mouseX}px,{mouseY}px);background:radial-gradient(#e66465, #9198e5);"
		class="w-12 -left-6 -top-6 absolute h-12 rounded-full "
	/>
</div> -->
<svelte:window bind:scrollY />
<svg on:mousemove={(e) => coords.set({ x: e.clientX, y: e.clientY })}>
	<circle cx={$coords.x} cy={$coords.y} r={30} />
</svg>

<style>
	svg {
		width: 100%;
		height: 100%;
	}
	circle {
		fill: #ff3e00;
	}
</style>
