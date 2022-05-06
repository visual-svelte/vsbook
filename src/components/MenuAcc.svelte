<script>
	import { dark } from '../stores/state';

	function updateDarkMode(e) {
		console.log(e);
	}
</script>

<div
	class="font-serif flex-col shadow-xl border-2 border-yellow-600 overflow-hidden w-[90vw] h-[80vh] sm:w-[80vw] sm:h-[70vh] lg:w-[65vw] mx-auto   text-center bg-white rounded-lg shadow-md sm:px-8 dark:bg-gray-800 "
>
	<!--  -->
	<div class="text-xl py-6 dark:text-gray-100">Options</div>
	<ul
		class="text-left max-w-md mx-auto  font-medium text-gray-900 bg-white  border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
	>
		<li
			class="w-full  flex flex-row px-4 py-4 border-b border-gray-200 rounded-t-lg dark:border-gray-600"
		>
			<div class="grow ">Dark Mode</div>
			<div class="  ">
				<label for="yellow-toggle" class="relative inline-flex items-center mr-5 cursor-pointer">
					<input
						type="checkbox"
						bind:checked={$dark}
						value="dark"
						id="yellow-toggle"
						class="sr-only peer"
					/>
					<div
						class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-0 peer-focus:ring-white  peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-yellow-400"
					/>
					<!-- <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Yellow</span> -->
				</label>
			</div>
		</li>
	</ul>
</div>
