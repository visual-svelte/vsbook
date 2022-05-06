<script>
	import '../app.css';
	import NavBar from '$components/NavBar.svelte';
	import { dark } from '../stores/state';
</script>

<div class:dark={$dark}>
	<main class="text-gray-800 dark:text-gray-100 dark:bg-gray-800">
		<NavBar />
		<div class="mx-2 dark:bg-gray-800">
			<slot />
		</div>
	</main>
</div>
