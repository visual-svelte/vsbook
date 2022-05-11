<script>
	import WidgetContainer from '$components/site/WidgetContainer.svelte';

	import {
		create_bidirectional_transition,
		create_in_transition,
		create_out_transition
	} from 'svelte/internal';
	console.log('cot', create_out_transition);
	import { fly } from 'svelte/transition';
	function inView(node) {
		const intersectionObserver = new IntersectionObserver(
			(entries) => {
				console.log('entries', entries);
				entries.forEach((entry) => {
					let animateIn = create_bidirectional_transition(
						entry.target,
						fly,
						{
							x: 100,
							delay: 300
						},
						true
					);
					let animateOut = create_bidirectional_transition(
						entry.target,
						fly,
						{
							x: 100,
							delay: 300
						},
						false
					);

					entry.isIntersecting ? animateIn.start() : animateOut.start();
				});
			}
			// { threshold: 0.5 }
		);
		intersectionObserver.observe(node);

		return {
			destroy() {
				intersectionObserver.unobserve(node);
			}
		};
	}
</script>

<WidgetContainer>
	<div class="wrapper">
		{#each ['first', 'second', 'third', 'fourth'] as step}
			<div class="step" use:inView>
				{step} one
			</div>
		{/each}
	</div>
</WidgetContainer>

<style>
	.step {
		background-color: white;
		text-align: center;
		margin: 60vh auto;
		width: 200px;
		height: 50px;
	}
</style>
