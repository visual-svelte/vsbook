<script>
	let data = [
		{
			q: 'why write this book?',
			a: [
				'I believe the world needs more visual storytelling',
				'The bar to creating these experiences has been historically very high. I want to lower it'
			]
		},
		{
			q: 'how much does this book cost?',
			a: ["pay what you can afford/ what you think it's worth model", "in other words, it's free"]
		},
		{
			q: 'why svelte?',
			a: [
				'created by a visual storyteller, specifically for this task',
				'simple to learn',
				"it's used by all the top shops"
			]
		},
		{
			q: 'who is this book for?',
			a: [
				'people who want to create visual stories like the new york times or the pudding',
				"it is also written specifically for people who don't have a software engineering background (i.e. most people in the visual storytelling/ data journalism space)",
				'people what want to learn svelte, but in an applied manner.'
			]
		},
		{
			q: 'any pre-requisites?',
			a: [
				'an understanding of html and css',
				'a basic understanding of javascript (esp data types)',
				'you have been through the svelte tutorial'
			]
		},
		{
			q: 'what will I learn?',
			a: [
				'a broad overview of svelte and how it can be used to create engaging visual stories.',
				'then we look at implementing common third-party libraries to create visual stories in Svelte. THis includes D3.js and layercake for charts and D3 and leaflet for maps',
				'then we explore how implment common visual storytelling techniques in Svelte. Scrollytelling, other stuff',
				'then, we look at creating visual stories that run seamlessly on mobile, cater for users with accessibility requirements'
			]
		},
		{
			q: 'how will I learn?',
			a: [
				'I recognise that different people learn in different ways, so I have presented each topic in at least two of the following ways: written theory, interactive explainer visuals, hands-on code examples and video explanations throughout the course. Audio-visual bombardment is my style of teaching.',
				"visual storytelling is awesome in that it touches on very left-brain and very right-brain skills. This can make it challenging, but also highly rewarding. I will focus on the hands-on, getting our hands dirty writing code side of visual storytelling, although I dedicate the first chapter to 'all the other important stuff' like actual storytelling, design, and data handling",
				" the code does not write itself and the stories don't write themselves,"
			]
		},
		{
			q: 'why make it open source?',
			a: [
				'to get as many people to read it as possible',
				'to get other contributors to share their experiences (correct my mistakes)',
				' to give back to the community which helped me learn.'
			]
		},
		{ q: 'who is the author', a: [] },
		{ q: 'can I contribute?', a: [] }
	];
</script>

<div class="flex max-w-[1200px] flow-col flex-wrap">
	{#each data as q}
		<div class="w-64 border p-4">
			<div class=" question flex flex-col ">
				<div class=" ">Question:</div>
				<div class="  text-xl font-bold pb-4">{q.q}</div>
			</div>
			<div class="answer">{q.a}</div>
		</div>
	{/each}
</div>
