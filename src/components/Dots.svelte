<script>
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';
	import AnimateSharedLayout from 'svelte-motion/src/components/AnimateSharedLayout/AnimateSharedLayout.svelte';
	import { flip } from 'svelte/animate';
	import { fade, fly } from 'svelte/transition';
	import { state } from '../stores/state';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import EmailSignup from '$components/EmailSignup.svelte';
	import LinksList from '../components/LinksList.svelte';
	import AboutMe from '$components/AboutMe.svelte';
	import 'swiper/css';
	import { onMount } from 'svelte';
	let swipez;
	let horizontal = false;
	const data = [
		{ title: 'Notes', color: '#0099ff' },
		{ title: 'Essays', color: '#ff0055' },
		{ title: 'About Will', color: '#22cc88' }
	];

	$: if ($state == null) reset();

	function reset() {
		selected = null;
		horizontal = false;
	}
	let selected = null;
	const spring = {
		type: 'spring',
		stiffness: 500,
		damping: 30
	};
	let tracker = 0;
	function changeState(i, color) {
		selected = color;
		horizontal = true;
		$state = i;
		gotSwiper.slideTo(i, 500, false);

		tracker += 1;
	}

	let activeIndex;
	const onProgress = (e) => {
		let ind = e.detail[0][0].activeIndex;
		if (ind != null && ind != undefined) {
			$state = ind;
			selected = data[ind].color;
		}
	};

	const onSwiper = (e) => {
		const [swiper] = e.detail;
	};
	let gotSwiper;

	$: if (swipez) {
		gotSwiper = swipez.swiper();
	}
</script>

<div class="background  border-t-2 px-8  {$state == null ? 'py-6' : ''}">
	<AnimateSharedLayout>
		<ul class="mx-auto">
			{#each data as x, i (i)}
				<div
					on:click={() => {
						changeState(i, x.color);
					}}
					animate:flip={{ duration: 500 }}
					class="dark:text-gray-100  {$state !== null
						? 'py-2 '
						: ' py-2  pb-6 text-xl'}  hover:font-bold transition-all select-none duration-300 {selected ===
					x.color
						? 'font-bold'
						: ''} item font-serif {horizontal ? 'inline-block' : ''} w-[100px]"
				>
					{x.title}
					{#if selected === x.color}
						<Motion
							let:motion
							layoutId="outline"
							initial={false}
							animate={{ borderColor: x.color }}
							transition={spring}
						>
							<div class="outline font-serif" use:motion />
						</Motion>
					{/if}
				</div>
			{/each}
		</ul>
	</AnimateSharedLayout>
</div>
{#if $state !== null}
	<div class=" " in:fly={{ y: 50, delay: 500 }}>
		<Swiper
			id="swipez"
			bind:this={swipez}
			on:swiper={onSwiper}
			on:slideChange={() => console.log('slide change')}
			on:activeIndexChange={onProgress}
			initialSlide={$state}
			spaceBetween={100}
			slidesPerView={1}
		>
			<SwiperSlide class="overflow-y-auto">
				<LinksList genre="notes" />
			</SwiperSlide>
			<SwiperSlide>
				<LinksList genre="essays" />
			</SwiperSlide>
			<SwiperSlide class="overflow-y-auto">
				<AboutMe />
			</SwiperSlide>
			<!-- <SwiperSlide>
				<div class="bg-orange-100 h-96 md:w-[50vw] mx-auto w-[80vw] " />
			</SwiperSlide> -->
			<!-- <SwiperSlide><EmailSignup /></SwiperSlide> -->
		</Swiper>
	</div>
{/if}

<style>
	:global(*) {
		box-sizing: border-box;
	}
	.background {
		display: flex;
		/* height: 100%; */
		justify-content: center;
		align-items: center;
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		width: 480px;
		/* height: 140px; */
	}

	.item {
		-webkit-tap-highlight-color: transparent;
		max-width: 100px;
		text-align: center;
		margin: 5px auto;
		position: relative;
		cursor: pointer;
		/* flex-shrink: 0; */
	}

	.outline {
		position: absolute;
		outline-style: none;
		top: -5px;
		left: 0px;
		right: 0px;
		bottom: -5px;
		border-bottom: 3px solid white;
		/* border-radius: 50%; */
	}
</style>
