<script>
	import '../app.css';
	import SidebarNav from '$components/site/SidebarNav.svelte';
	import OnThisPage from '$components/site/OnThisPage.svelte';
	import Footer from '$components/site/Footer.svelte';
	import MobileNav from '$components/site/MobileNav.svelte';
	import { dark } from '../stores/state';
	let innerWidth;
</script>

<svelte:window bind:innerWidth />

	<div class="flex flex-row">
		<aside class="h-screen max-w-[250px] sticky text-sm  overflow-x-hidden overflow-y-auto  top-0">
			<SidebarNav />
		</aside>

		<main class="grow mx-auto max-w-[600px]">
			<MobileNav class="lg:hidden" />
			<slot />
			<Footer />
		</main>
		<aside class="h-screen w-[250px] text-sm sticky top-0 right-0"><OnThisPage /></aside>
	</div>
	<div class="container">
		
