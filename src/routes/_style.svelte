<script>
	export let title;
	export let date;
	// export let headings;
	// import EmailSignup from '$components/EmailSignup.svelte';

	// import { ago } from '../../utils/ago';
</script>

<div class="wrap">
	<!-- {headings} -->
	<slot />
</div>

<style>
	.wrap :global(*) {
		max-width: 576px;
		margin: 0 auto;
		font-family: 'Roboto', sans-serif;
	}
	.wrap :global(ul) {
		list-style-type: disc;
	}
	.wrap :global(li) {
		margin-left: 3rem;
		line-height: 2rem;
	}
	.wrap :global(h1) {
		font-family: 'Libre Baskerville', sans;
		font-size: 2rem;
		font-weight: 600;
	}
	.wrap :global(h2) {
		font-family: 'Libre Baskerville', sans;

		font-weight: 600;
		margin-top: 3rem;
		font-size: 1.5rem;
	}
	.wrap :global(h3) {
		font-weight: 600;
		margin-top: 3rem;
		font-family: 'Libre Baskerville', sans;

		font-size: 1.2rem;
	}

	.wrap :global(p) {
		line-height: 2rem;
		/* margin: 1rem 0px; */
	}
</style>
