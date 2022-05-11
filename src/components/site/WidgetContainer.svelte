<script>
	export let url;
	import Icon from '$components/site/Icon.svelte';
</script>

<div class="py-6 container ">
	<div class="bg-[#FF3E00] shadow-lg no-underline bg-opacity-5 p-2 rounded-xl relative">
		<div
			class="select-none cursor-pointer px-3  bg-[#565656] font-main absolute text-sm rounded-t-lg text-white right-2 -top-8"
		>
			<a rel="external" target="blank" class="items-center flex flex-row" href={url}>
				<span class="pr-2">Code</span><Icon name="github" fill="white" width="18px" height="18px" />
			</a>
		</div>
		<slot />
	</div>
</div>

<style>
	.container {
		margin: 0 auto;
		width: 600px;
		max-width: 90vw;
	}
	a {
		text-decoration: none !important;
		padding: 0px 10px;
	}
</style>
