<script>
	import '../../app.css';
	import '../../styles/prism-theme.css';
	import { fade } from 'svelte/transition';
	import SidebarNav from '$components/site/SidebarNav.svelte';
	import OnThisPage from '$components/site/OnThisPage.svelte';
	import Footer from '$components/site/Footer.svelte';
	import MobileNav from '$components/site/MobileNav.svelte';
	import Icon from '$components/site/Icon.svelte';
	import { dark } from '../../stores/state';
	let menuOpen = true;
</script>

<div class="flex flex-row relative">
	<aside
		class="{menuOpen
			? 'w-64'
			: 'w-0'} overflow-x-hidden duration-300 bg-gray-100 hidden lg:block h-screen max-w-[250px] sticky text-sm   overflow-y-auto  top-0"
	>
		<SidebarNav />
	</aside>

	<button
		class="hidden lg:block fixed z-50 {menuOpen
			? 'left-64'
			: 'left-0'} duration-300 cursor-pointer  top-0"
		on:click={() => (menuOpen = !menuOpen)}
	>
		<span class="text-sm py-3 text-gray-500 flex items-center flex-row">
			<Icon
				class="duration-300"
				name="chevrons-right"
				direction={menuOpen ? 's' : 'n'}
				stroke="black"
				height="20px"
				width="20px"
			/>
			{#if !menuOpen}
				<span in:fade={{ delay: 300 }}>Menu </span>
			{/if}
		</span>
	</button>

	<main class="grow lg:mx-auto mx-2 ">
		<div class="lg:hidden">
			<MobileNav class=" border-b-2 lg:hidden z-10" />
		</div>
		<div class="flex flex-row relative">
			<div class="wrap flex flex-col w-full">
				<slot />
			</div>
			<!-- <aside class="hidden sm:flex h-screen   justify-end z-20  lg:w-[250px] text-sm sticky top-0">
				<OnThisPage />
			</aside> -->
		</div>
	</main>
</div>
<footer class=" ">
	<Footer />
</footer>

<style>
	/* For the "inset" look only */

	/* Let's get this party started */
	::-webkit-scrollbar {
		width: 8px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		-webkit-border-radius: 10px;
		border-radius: 10px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		-webkit-border-radius: 10px;
		border-radius: 10px;
		background: rgba(247, 60, 0, 0.5);
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
	}

	::-webkit-scrollbar-thumb:hover {
		background: rgba(247, 60, 0, 1);
	}

	::-webkit-scrollbar-thumb:window-inactive {
		background: rgba(255, 0, 0, 0.4);
	}
	code {
		background-color: pink;
	}

	.wrap :global(*) {
		--svelte: #f73c00;
		/* max-width: 576px; */
		margin: 0 auto;
		font-family: 'Roboto', sans-serif;
	}
	.wrap :global(ul) {
		list-style-type: disc;
		max-width: 500px;
	}
	.wrap :global(li) {
		margin-left: 1rem;
		line-height: 2rem;
	}
	.wrap :global(h1) {
		@apply h-64 items-center flex justify-center;
		background-color: aquamarine;
		height: 300px;
		width: 100%;
		border-top: 3px solid gold;
		font-family: 'Libre Baskerville', sans;
		margin-top: 2rem;
		font-size: 2rem;
		vertical-align: middle;

		font-weight: 600;
		position: relative;
	}

	.wrap :global(h1)::before {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0px;
		height: 1px;
		width: 20px;
		border-bottom: 2px solid var(--svelte);
	}
	.wrap :global(h2)::before {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0px;
		height: 1px;
		width: 16px;
		border-bottom: 2px solid var(--svelte);
	}

	.wrap :global(h2) {
		font-family: 'Libre Baskerville', sans;
		position: relative;
		font-weight: 600;
		margin-top: 2rem;
		max-width: 600px;

		font-size: 1.5rem;
	}
	.wrap :global(h3) {
		position: relative;
		font-weight: 600;
		margin-top: 3rem;
		max-width: 600px;

		font-family: 'Libre Baskerville', sans;

		font-size: 1.2rem;
	}

	.wrap :global(p) {
		max-width: 500px;
		line-height: 2rem;
		padding: 0.4rem 0;
		/* margin: 1rem 0px; */
	}
	.wrap :global(a) {
		text-decoration: underline;
		font-style: italic;
		line-height: 2rem;
		padding: 0.4rem 0;
		/* margin: 1rem 0px; */
	}
	.wrap :global(pre) {
		max-width: 90vw;
		margin: 0 auto;
		width: 600px;
		font-size: 0.9rem;

		padding: 10px;
	}
	.wrap :global(code) {
		background-color: #282c3415;
		padding: 2px 4px;
		border-radius: 5px;
	}

	.wrap :global(.full-width) {
		width: 90vw;
		position: relative;
		left: 65%;
		right: 50%;
		margin-left: -50vw;
		margin-right: -50vw;
	}
</style>
