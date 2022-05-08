<script>
	import '../app.css';
	import SidebarNav from '$components/site/SidebarNav.svelte';
	import OnThisPage from '$components/site/OnThisPage.svelte';
	import Footer from '$components/site/Footer.svelte';
	import MobileNav from '$components/site/MobileNav.svelte';
	import { dark } from '../stores/state';
</script>

<div class="flex flex-row">
	<aside
		class=" hidden lg:block h-screen max-w-[250px] sticky text-sm  overflow-x-hidden overflow-y-auto  top-0"
	>
		<SidebarNav />
	</aside>

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
<footer class="bottom-0 sticky flex ">
	<Footer />
</footer>
