<script>
	import '../styles/prism-theme.css';
	export let title;
	export let date;
	// export let headings;
	// import EmailSignup from '$components/EmailSignup.svelte';

	// import { ago } from '../../utils/ago';
</script>

<div class="wrap z-10">
	<!-- {headings} -->
	<slot />
	<div class="buttons flex flex-row flex-wrap pt-16  pb-32">
		<button class="w-64 border p-4">Previous</button>
		<div class="grow" />
		<button class="w-64 border p-4">Next</button>
	</div>
</div>

<style>
	.wrap :global(*) {
		--svelte: #f73c00;
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
		margin-top: 2rem;
		font-size: 2rem;
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
		font-size: 1.5rem;
	}
	.wrap :global(h3) {
		position: relative;
		font-weight: 600;
		margin-top: 3rem;
		font-family: 'Libre Baskerville', sans;

		font-size: 1.2rem;
	}

	.wrap :global(p) {
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
