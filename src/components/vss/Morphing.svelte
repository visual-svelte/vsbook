<script>
	import { scrollyData } from '$utils/animatedTransitions.js';
	import Chart2 from '$components/vss/ChartMorph.svelte';
	import Icon from '$components/site/Icon.svelte';
	import ScrollyWrapper from '$components/site/ScrollyWrapper.svelte';
</script>

<div class="box bounce-5">
	<Icon name="chevrons-down" fill="gray" width="20px" height="20px" />
	<span>Scroll </span>
</div>

<ScrollyWrapper data={scrollyData} fixedComp={Chart2} fixPosition="right" />
