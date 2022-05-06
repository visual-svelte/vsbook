<script>
	export let title;
	export let date;
	import EmailSignup from '$components/EmailSignup.svelte';

	import { ago } from '../../utils/ago';
</script>

<div class="wrap max-w-[600px] mx-auto pt-10">
	<h1 class="text-xl text-center mb-2">{title}</h1>

	<p class="text-sm text-center">Published: {ago(new Date(date))} ago</p>
	<div class="border-b-2 mt-3 mb-10" />

	<slot />
	<!-- <EmailSignup /> -->
</div>

<style>
	.wrap :global(*) {
		font-family: 'Source Serif Pro';
	}
	.wrap :global(ul) {
		list-style-type: disc;
	}
	.wrap :global(li) {
		margin-left: 3rem;
		line-height: 2rem;
	}
	.wrap :global(h1) {
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
		margin: 1rem 0px;
	}
</style>
