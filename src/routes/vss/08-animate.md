<script>
import FlipEntryBars from "$components/vss/08-FlipEntryBars.svelte"
import FlipGrid from "$components/vss/08-FlipGrid.svelte"
import FlipSortAxes from "$components/vss/08-FlipSortAxes.svelte"
</script>

# 08 Animate / FLIP

The `svelte/animate` directive currently only consists of one function: `FLIP`.

So in this chapter we build on the FLIP material in the official [tutorial](https://svelte.dev/tutorial/animate), taking a deeper look at FLIP and looking specifically at how we can use it in a visual storytelling context.

## 8.1 What is FLIP?

`FLIP` is an animation technique which allows us to smoothly animate between the X and Y positions of DOM elements as their position changes (normally as a result of filtering or sorting operations).

It's an anagram; and if we remember the anagram it helps us understand how it works:

- **F**irst: the initial state of an element,
- **L**ast: the final state of an element (after some UI change),
- **I**nvert: calculates the transformation required to get from initial to final state,
- **P**lay: run the transformation animation(s).

As with anything, I'm sure it will all begin to come clear with a few useful examples. Let's dive in!

## 8.2 Grid manipulation with FLIP

<FlipGrid/>

This is the classic use case for `FLIP`. In the visual journalism space, sometimes we want to give the user the option to search through individual data points. With `FLIP` we can add a little-bit-of-cool to that process.

We add the `animate:flip` directive to child element of a keyed `{#each...}` block.

```svelte
{#each images as post, i (post.id)}
	<div animate:flip={{ duration: 500 }}>
		<div class="card " style="background-color: {color(post.id)}">
			{post.id}
		</div>
	</div>
{/each}
```

Then, when we add functions to `sort()` and `shuffle()` the underlying array.

```svelte
<script>
<!-- ^^ -->
	function shuffle() {
		let currentIndex = images.length,
			randomIndex;

		while (currentIndex != 0) {
			randomIndex = Math.floor(Math.random() * currentIndex); // Pick a remaining element.
			currentIndex--;

			[images[currentIndex], images[randomIndex]] = [images[randomIndex], images[currentIndex]];
		}
	}

	let asc = true;
	function sort() {
		if (asc) {
			images = images.sort((a, b) => (a.id < b.id ? 1 : b.id < a.id ? -1 : 0));
			asc = !asc;
		} else {
			images = images.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));
			asc = !asc;
		}
	}

<!-- vv -->

</script>
```

Fairly simple! Now let's dig into something a bit more involved.

## 8.3 Blocks to Bars

Now things are getting interesting! In this example, I wanted to show how you could lead the user through a series of 'reveal' points.

Click on the buttons below from left to right to watch the animation unfold. In a real implementation, it might be that you trigger these events from scrolling.

<FlipEntryBars/>

Now, let's look at the key elements making this work. I have TWO arrays, constructed as follows:

```svelte
<script>
	let data = {
		blocks: [
			{ id: 0, cat: 'apple' },
			{ id: 3, cat: 'apple' },
			{ id: 13, cat: 'cherry' },
			{ id: 4, cat: 'apple' },
			{ id: 5, cat: 'banana' },
			{ id: 6, cat: 'pear' },
			{ id: 12, cat: 'cherry' },
			{ id: 7, cat: 'pear' },
			{ id: 2, cat: 'apple' },
			{ id: 9, cat: 'cherry' },
			{ id: 10, cat: 'cherry' },
			{ id: 11, cat: 'banana' },
			{ id: 1, cat: 'apple' },
			{ id: 8, cat: 'pear' }
		],
		bars: []
	};
</script>
```

I won't go through the sorting as it's similar to the previous example, but the movement of blocks is the key feature here. At the start, `data.blocks` contains all the data. As the user interacts with the visualization, data is passed from `data.blocks` to `data.bars`. The secret sauce is in these two functions:

```svelte
<script>
	function move(from, to) {
		let item = from[0];
		colors[item.cat][2] += 1;
		to.push(item);

		return [from.filter((i) => i !== item), to];
	}

	async function moveDown() {
		stage = 3;
		const timer = (ms) => new Promise((res) => setTimeout(res, ms));
		for (let i = 0; i < 16; i++) {
			[data.blocks, data.bars] = move(data.blocks, data.bars);
			await timer(150); //acts as a delay
		}
	}
</script>
```

Crucially, these arrays are visualized in different ways: the `data.blocks` array is displayed as simple horizontal blocks, and the `data.bars` array is formatted to appear like a bar chart. This is how it looks in the code:

```svelte
<div class="initial-grid top ">
	{#each data.blocks as bar (bar.id)}
		<div
			class="block"
			animate:flip
			in:receive={{ key: bar.id }}
			out:send={{ key: bar.id }}
			style="background-color:{stage === 0 ? 'gray' : colors[bar.cat][0]}"
		/>
	{/each}
</div>

<div class="initial-grid lower ">
	{#each ['apple', 'banana', 'cherry', 'pear'] as category, j}
		{#each data.bars.filter((d) => d.cat == category) as bar, i (bar.id)}
			<div
				class="block lower"
				animate:flip
				in:receive={{ key: bar.id }}
				out:send={{ key: bar.id }}
			/>
		{/each}
	{/each}
</div>
```

Note: things like axes/ labels/ keys have been removed to focus just on the FLIP animations.

## 8.4 Sorting Axes of a Chart

In this final example, we animate the re-ordering of axes, and new data entry. This makes it easier for them to follow bars between frames.

<FlipSortAxes/>

The principles are the same, but let's look at how that code works.

_Note: I have removed the unnecessary things like the axes and other small details from this code snippet below to focus on the `animate:flip` section. As with all my visualizations, you can find the full code on GitHib._

```svelte
<svg width={svg_width} height={svg_height}>
	{#each data as bar, i (bar)}
		<rect
			animate:flip={{ duration: 300 }}
			in:fly={{ y: 200, duration: 300, delay: 200 }}
			out:fly={{ y: 200, duration: 300 }}
			x={margin + x(bar.cat)}
			y={height + margin - bar.value}
			height={bar.value}
			width={x.bandwidth()}
			fill={bar.color}
			opacity="0.5"
		/>
	{/each}
</svg>
```

_Note: a key design consideration here is whether you want the X-axis ticks to move with the bar, I chose not to in this instance as it could look a bit messy. To have the ticks and axis labels move with the bar you would need to re-draw the axis with HTML elements (rather than D3/ SVG). This would make it easier to animate (and style)._

## 8.5 Overview

In this chapter, we explored some of the possibilities of the `svelte/animate` directive and its `FLIP` functionality.

We also combined `FLIP` with `crossfade`, going beyond the classic to-do list manipulation.

Have you found any other cool ways to use `FLIP`? Ping me a message on [Twitter](http://twitter.com/visualsvelte), I'd love to hear about it!
