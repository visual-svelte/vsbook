<script>
	import WidgetContainer from '$components/site/WidgetContainer.svelte';
	let scrollX, scrollY, innerHeight, innerWidth;
</script>

<WidgetContainer>
	<div>
		So currently, whilst reading this chapter: you have a scrollX value of {scrollY}
	</div>
</WidgetContainer>

<svelte:window bind:scrollX={scrollY} bind:scrollY bind:innerHeight bind:innerWidth />
