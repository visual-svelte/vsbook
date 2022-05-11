<script>
import ChartTransitions from "$components/vss/07-ChartTransitions.svelte"
import ScrollInView from "$components/vss/07-ScrollInView.svelte"
</script>

# 7 Transitions

Next, we turn to the `svelte/transition` direction.

The `transition` directive is not too complex to understand and it is well documented in the official series of [Svelte tutorials](https://svelte.dev/tutorial/transition).

Therefore, I walk through a hands-on example of how to use `svelte/transitions` for a more complex data visualization. Then I discuss some 'field notes'; things I have noticed whilst using `svelte transition` that might help you too.

## 7.1 Data viz example of Svelte transitions

In this section, I'll be going beyond the basic transition, to try to re-create this animation sequenced animation I came across recently on the BBC's Twitter.

### 7.1.1 The target and the result

Here's a GIF showing the target, i.e. what I was aiming to reproduce with Svelte and `svelte/transition`.

<img width="400px"
      src="/images/migrant.gif"
      alt="bbc newsnight gif showing the data visualisation"
    />

<figcaption class="text-center">
Source: <a
        href="https://twitter.com/BBCNewsnight/status/1514361598156099584"
        >BBC Newsnight Twitter</a
      >
</figcaption>

And this is what I settled on (explained in detail below):
<ChartTransitions/>

_Note: I accept it's not a 1:1 replica, and some of the styling does not match, but I think I got the feel for it at least. Now let's look in detail about how it was done._

### 7.1.2 The Y Axis

For the y-axis, labels enter the scene with a slight delay from top to bottom.

```svelte
<!-- YAXIS TICKS AND LABELS -->
{#each yAxis as line, i}
	<div class="grid-line" style="transform:translateY({150 - (150 * line) / 30000}px) ">
		<p
			in:fly={{
				y: (yAxis.length - 1 - i) * 10,
				delay: (yAxis.length - 1 - i) * 50,
				easing: cubicInOut,
				duration: 1000
			}}
			class="yAxisLabel"
		>
			{line}
		</p>
	</div>
{/each}
```

To implement this effect, I made the delay and y-start-point properties increase as the labels get closer to the x-axis.

`(yAxis-1-i)` effectively reverses the order in which the labels appear. The `i` is the index of the `#each` - meaning that for each iteration (each label), both the -start-point and the delay would increase, by factors of 10(pixels) and 50(milliseconds) respectively.

### 7.1.3 The X Axis Line: custom transition

I created a custom transition to mimic the effect of the x-axis 'drawing itself' - revealing itself from left to right. Here's how:

```svelte
<script>
	function widthLeft2Right(node, { delay = 0, duration = 400, easing = cubicInOut }) {
		return {
			delay,
			duration,
			easing,
			css: (t) => `width: ${t * 100}%`
		};
	}
</script>

<div class="bottom-axis" in:widthLeft2Right={{ duration: 1000, delay: 600, easing: cubicInOut }} />
```

This is the simplest possible custom transition we can create in Svelte.

We define a function that takes as input: 1) the node/ element that is being transitioned, and 2) an options object.

Then we return an object with your properties, and crucially, some function that updates (normally) a CSS property over `t` - the duration of the transition.

Imagine `t` as a decimal number that increasing from 0 (start of transition) to 1 (end of transition). _How_ this number gets from 0 to 1 depends on the easing specified.

In our example:

- at `t=0`, the start of our transition, the CSS width property for the line will be `width: ${0 * 100}%` which equals `0%`.
- at `t=0.5`, the middle of our transition (assuming a linear easing function), the CSS width property for the line will be `width: ${0.5 * 100}%` which equals `50%`.
- at `t=1`, the end of our transition, the CSS width property for the line will be `width: ${1 * 100}%` which equals `100%`.

This is powerful! In just a few simple lines of code, we can update any CSS property as a function of time.

### 7.1.4 The X Axis Labels: staggered Fly transition

The X-axis labels enter the scene with a fly from `y=20`. Again we use the staggered entry effect by adding the `i` index into the delay calculation.

```svelte
<!-- x-axis labels -->
<div class="xLabels">
	{#each xAxis as label, i}
		<div in:fly={{ y: 20, duration: 600, delay: 800 + i * 100 }} class="xAxisLabel">
			{label}
		</div>
	{/each}
</div>
```

### 7.1.5 Bars & Bar Labels

The bars enter one-at-a-time with cubiicInOut easing. They `fly` in from a `y=300`.

```svelte
<!-- BARS -->
<div class="bar-container">
	{#each data as bar, i}
		<div
			class="bar"
			in:fly={{
				y: 300,
				delay: 800 + i * 500,
				duration: 1000,
				easing: cubicInOut
			}}
			style="transform:translate({10 + i * 50}px, 0px ); height:{(150 * bar) / 30000}px;  "
		>
			<!-- BAR LABELS -->
			<p class="barLabel">
				{#each bar.toString() as letter, k}
					<span
						in:fly={{
							y: -100,
							delay: 2000 + i * 500 + k * 200
						}}>{letter}</span
					>
				{/each}
			</p>
		</div>
	{/each}
</div>
```

An interesting trick here is to create a `bar-container` class within which the bars sit. On the `bar-container` we apply the CSS property `overflow:hidden`. The prevents the user from seeing the bar whilst it is transitioning, below the X-axis. This generally makes it cleaner.

For the bar labels, I converted the data value to a string and iterated over each letter using the `{#each bar.toString() as letter, k}` construct. This means we can stagger the entry of each individual number of the label.

## 7.2 Overview

In this section, we took a deep-dive into a recreation of a chart entry to learn more about how the `svelte/transition` directive works in practice.

<!-- ## 7.2 Local transitions

In the final two sections of this chapter, I want to draw your attention you two things: firstly local transitions and then programmable transitions.

In the official Svelte tutorials, you will have come across the concept of [Local Transitions](https://svelte.dev/tutorial/local-transitions). As is explained there, local transitions are useful when you want to differentiate between animating elements when they are shown/hidden and when they are manipulated, for example items added/ removed from an Array. -->

<!-- ## 7.3 Transitions with scroll triggers

Mostly, transitions are triggered by `{#if ...}` or `{#key ... }` blocks.

But in the context of visual storytelling, sometimes we want to trigger transitions on events, like certain scroll positions.

I built a custom Svelte action to achieve this, and it looks like this:
<ScrollInView/> -->
