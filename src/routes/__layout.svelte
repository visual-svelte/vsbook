<script>
	import '../app.css';
	import { fade } from 'svelte/transition';
	import SidebarNav from '$components/site/SidebarNav.svelte';
	import OnThisPage from '$components/site/OnThisPage.svelte';
	import Footer from '$components/site/Footer.svelte';
	import MobileNav from '$components/site/MobileNav.svelte';
	import Icon from '$components/site/Icon.svelte';
	import { dark } from '../stores/state';
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
			<div class="flex flex-col w-full">
				<slot />
			</div>
			<aside class="hidden sm:flex h-screen   justify-end z-20  lg:w-[250px] text-sm sticky top-0">
				<OnThisPage />
			</aside>
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
</style>
