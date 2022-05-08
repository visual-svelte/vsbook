<script>
	import MenuList from '$components/site/MenuList.svelte';
</script>

<div class="flex px-4 pt-4 pb-10  min-h-full flex-col gap-2 w-full">
	<img src="/svg/logo.svg" alt="" />
	<a
		href="/"
		rel="internal"
		class="hover:underline cursor-pointer font-head font-bold text-lg pt-4 mt-4 "
	>
		Visual Storytelling with Svelte
	</a>
	<div class="searchbox sticky top-0 py-4 bg-white border-b">
		<div class="search border rounded-xl pl-2 py-3">Search</div>
	</div>
	<MenuList />
</div>
