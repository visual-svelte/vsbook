<script>
	import MenuList from '$components/site/MenuList.svelte';
	import LogoAnimated from '$components/site/LogoAnimated.svelte';
</script>

<div class="relative flex px-4 pt-4 overflow-x-hidden pb-10 min-h-full flex-col gap-2 w-full">
	<div class=" overscroll-contain overflow-x-hidden">
		<LogoAnimated />
	</div>
	<a
		href="/"
		rel="internal"
		class="hover:underline cursor-pointer font-head w-56  overflow-x-hidden font-bold text-lg pt-4 mt-4 "
	>
		Visual Storytelling with Svelte
	</a>
	<div class="searchbox bg-gray-100 sticky top-0 py-4 overflow-x-hidden border-b">
		<div class="bg-white search border rounded-xl pl-2 py-3">Search</div>
	</div>
	<MenuList />
</div>
