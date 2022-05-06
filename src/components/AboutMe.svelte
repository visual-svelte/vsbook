<script>
	import { fly } from 'svelte/transition';
	let statements = [
		'What drives me everyday is the climate crisis; the most important issue of our time. The science is very clear, but nefarious forces have created powerful systems of inaction.',
		"To better understand these systems, here at <a class='dark:text-yellow-100 underline text-yellow-700' href='/'>WillNeedham.com</a>, I research and write about topics like politics, technology, psychology, power dynamics, misinformation, systems of change.",
		"At <a class='dark:text-yellow-100 underline text-yellow-700' rel='external' href='https://informed.cc'>Informed</a>, I try to understand and explain these systems through interactive, fact-led storytelling.",
		"At <a class='dark:text-yellow-100 underline text-yellow-700' rel='external' href='https://VisualSvelte.com'>Visual Svelte</a>, I hone my technical skills in the craft of visual storytelling - Svelte, D3, & much more, as well as giving back to the open-source community."
	];
</script>

<div class="p-4 max-w-[600px] mx-auto ">
	{#each statements as line, i}
		<p class="pb-6 text-md " in:fly={{ y: 40 }}>
			{@html line}
		</p>
	{/each}
</div>
