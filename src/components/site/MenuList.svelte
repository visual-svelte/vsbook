<script>
	import { page } from '$app/stores';
	console.log($page.url.pathname);
	import contents from '$utils/contents.js';
	console.log(contents);
	let ticker = 0;

	let lengths = contents.map((sec) => {
		return sec.pages.length;
	});
	console.log('len', lengths);

	function calc(sec) {
		let result = 0;
		lengths.slice(0, sec).forEach((element) => {
			result += element;
		});

		return result;
	}
</script>

<div class="  ">
	<div class="mx-4 lg:hidden searchbox sticky top-0 my-4 max-w-[300px] py-4 ">
		<div class="search border rounded-xl pl-2 py-3">Search</div>
	</div>
	<div
		class="flex flex-col basis-[45%] flex-wrap lg:flex-nowrap h-[600px] lg:h-full max-w-[500px]  gap-y-2  gap-x-2 lg:gap-y-3 lg:gap-x-0 w-[95vw] p-4 lg:p-0 "
	>
		{#each contents as section, i}
			<div class="font-main flex min-w-44 flex-col   ">
				<div class="font-semibold text-gray-500">{section.title}</div>
				{#each section.pages as pageX, j}
					<a
						href={pageX.href}
						class="text-gray-700 {pageX.href == $page.url.pathname
							? 'font-bold text-black'
							: ''} hover:font-bold duration-200 ml-2">{calc(i) + j} {pageX.name}</a
					>
				{/each}
			</div>
		{/each}
	</div>
</div>
