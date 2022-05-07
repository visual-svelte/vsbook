<script>
	export let title;
	export let date;
	// import EmailSignup from '$components/EmailSignup.svelte';

	// import { ago } from '../../utils/ago';
</script>

<div class="wrap">
	<slot />
</div>

<style>
	.wrap :global(*) {
		font-family: 'Source Serif Pro';
		max-width: 576px;
		margin: 0 auto;
	}
	.wrap :global(ul) {
		list-style-type: disc;
	}
	.wrap :global(li) {
		margin-left: 3rem;
		line-height: 2rem;
	}
	.wrap :global(h1) {
		font-family: 'Libre Baskerville', sans-serif;
		font-size: 2rem;
		font-weight: 600;
	}
	.wrap :global(h2) {
		font-weight: 600;
		margin-top: 3rem;
		font-size: 1.5rem;
	}
	.wrap :global(h3) {
		font-weight: 600;
		margin-top: 3rem;

		font-size: 1.2rem;
	}

	.wrap :global(p) {
		line-height: 2rem;
		/* margin: 1rem 0px; */
	}
</style>
