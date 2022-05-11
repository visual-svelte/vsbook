<script>
	import WidgetContainer from '$components/site/WidgetContainer.svelte';
	let scrollX,
		scrollY,
		innerHeight,
		innerWidth,
		clientHeight,
		clientWidth,
		offsetHeight,
		offsetWidth,
		el;

	$: console.log(el);
</script>

hello
<svelte:window bind:innerWidth bind:scrollY bind:scrollX />
<WidgetContainer>
	<div bind:offsetWidth bind:offsetHeight class="flex flex-row h-[1200px] items-center">
		<div
			class="w-64 mx-auto relative h-64 bg-white border-4 border-orange-600"
			bind:clientHeight
			bind:clientWidth
			bind:this={el}
		>
			<p>
				{clientHeight},
			</p>
			<p />
			{clientWidth},{offsetHeight},{offsetWidth}
			<p>
				{el?.clientTop}
			</p>
			<p>
				left: {el?.clientLeft}
			</p>
			<p>Lovely box</p>
		</div>
	</div>
</WidgetContainer>

CURRENT X POSITION: {scrollY}
