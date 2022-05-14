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

<div class="root">
	what about now????????

	<slot />
</div>

<style>
</style>
