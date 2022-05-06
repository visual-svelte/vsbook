<script>
	import { fade, fly } from 'svelte/transition';
	import { customFlip, customFlyIn, customFlyOut } from '../utils/better-animation';
	import Dots from '$components/Dots.svelte';
	import { quintOut, cubicInOut } from 'svelte/easing';
	import { state } from '../stores/state';
	import { crossfade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { onDestroy } from 'svelte';
	const [send, receive] = crossfade({});
	import { accordion } from '../utils/accordion';

	let selected = false;
	let title;
	let sections = [
		{ selected: false, title: 'default section' },
		{ selected: true, title: 'Essays' },
		{ selected: true, title: 'Notes' },
		{ selected: true, title: 'Work' },
		{ selected: true, title: 'Biography' }
	];

	function remove(sect) {
		sections = sections.filter((t) => t !== sect);
	}
	let horizontal = false;
	let options = { duration: 200, easing: quintOut };

	function reset() {
		horizontal = false;
		$state = null;
	}

	function changeState(i) {
		horizontal = true;
		$state = i + 1;
	}

	// let isOpen;
	$: isOpen = $state == null ? true : false;

	onDestroy(() => {
		$state = null;
	});
</script>

<div
	class="font-serif shadow-xl border-2 border-yellow-600 overflow-y-auto w-[90vw] h-[80vh] sm:w-[80vw] sm:h-[70vh] lg:w-[65vw] mx-auto   text-center bg-white rounded-lg shadow-md sm:px-8 dark:bg-gray-800 "
>
	{#if $state !== null}
		<button
			transition:fly={{ x: -20 }}
			class="absolute select-none text-gray-500 pointer-events-auto z-10 text-xs  left-0 px-4 py-2 "
			on:click={reset}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				style="float:left"
				viewBox="0 0 24 24"
				fill="gray"
				stroke="currentColor"
				stroke-width="1"
				class="feather feather-chevrons-left"
				><polyline points="11 17 6 12 11 7" /><polyline points="18 17 13 12 18 7" /></svg
			>
			<p class="">Back</p>
		</button>
	{/if}

	<div
		use:accordion={isOpen}
		class="flex flex-row grid-rows-2 px-4 max-w-[500px] mx-auto items-center  {isOpen
			? 'py-8'
			: ''}"
	>
		<img
			class="rounded-full transition-all duration-300 "
			src="/will-needham-mugshot.png"
			alt=""
			height={!state ? '100px' : '50px'}
			width={!state ? '100px' : '50px'}
		/>

		<p
			class=" text-justify ml-5 font-other  mt-3 italic text-sm md:text-md  text-gray-500 sm:text-md dark:text-gray-100"
		>
			“Hi, thanks for visiting, I’m Will - an independent data journalist from the South East corner
			of the UK. I use this site to learn about the complexities of the world." - Will Needham
		</p>
	</div>

	<Dots />
</div>
