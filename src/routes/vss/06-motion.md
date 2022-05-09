<script> 
import TweenedExample from "$components/vss/06-TweenedExample.svelte"
import SpringTweenComp from "$components/vss/06-SpringTweenComp.svelte"
import TweenButton from "$components/vss/06-TweenButton.svelte"
import TweenBars from "$components/vss/06-TweenBars.svelte"
import TweenColor from "$components/vss/06-TweenColor.svelte"

</script>

# 6 Motion

The default behaviour of computers is quite binary; we tell something to appear - it appears instantly, we tell something to move - it moves there instantly.

Real life is different. People _gradually_ enter our line-of-sight and then walk off into the distance. An object appears _gradually_ larger as you bring it closer to your face.

The `svelte/motion` package allows us to emulate this in two different ways: `tweened` and `spring`.

```svelte
<script>
	import { tweened, spring } from 'svelte/motion';
</script>
```

They're both quite similar, but to define them:

- `spring`: animates between states in a spring-like fashion. Controllable by stiffness and damping parameters.
- `tweened`: animates between states over a given duration, with a specific easing function.

## 6.1 `tweened`

The [Svelte tutorial](https://svelte.dev/tutorial/tweened) provides an overview of the basic implementation of `tweened`, so I won't repeat what is described there.

For data journalists, `tweened` can be useful in a number of different scenarios:

- tweening the height of a bar upon entry (or on update)
- tweening number labels as data changes,

Let's talk through a few of these examples, then at the end of the section, I'll list some _field notes_ - things I've learnt using `tweened`.

### 6.1.1 Tweening bars

In this example, we have a 100% stacked bar chart to represent (fictional) election data.

Click on the two buttons for Primary and Main elections and observe how the bars update.

<TweenBars/>

So I'm sure you can already begin to think about how this was implemented, but let's walk through the important steps below:

```svelte
<script>
	import { elasticOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	let primary = true;
	let data = {
		primary: [
			[0, 23, 35],
			[0, 30, 50],
			[0, 75, 90],
			[0, 45, 90]
		],
		main: [
			[0, 45, 78],
			[0, 10, 90],
			[0, 50, 70],
			[0, 90, 95]
		]
	};

	const values = tweened(data.primary, {
		duration: 800,
		easing: elasticOut
	});

	function updateData(cat) {
		if (cat == 'main') {
			values.set(data.main);
			primary = false;
		} else {
			values.set(data.primary);
			primary = true;
		}
	}
</script>
```

**Data** - our data for this example is split in two: data for the Primary election (`data.primary`) and data for the Main election (`data.main`). Yes, we can feed arrays of numbers into our `tweened` function too!

**Tween** - we initialise our `tween` with the name `values`. The first prop is the starting state (in our case the Primary data, `data.primary`), then we add a second (`{ duration: 800, easing: elasticOut }`) to specify the duration and easing function that our tween will use.

**Update function** - we create an update function that is used in the `on:click` handler of the two buttons. In the function, we simply check the current state, and update the tween by setting the data.

### 6.1.2 Tweening paths

You can tween numbers, dates, arrays, objects... or in fact anything you can convert to a number, array of numbers or object.

This opens up lots of creative possibilities. Because it means if we can represent something in numbers, we can tween it.

For example, this cool button from [Jimmy Utterström](https://mobile.twitter.com/jimutt/status/1291526378123386880) tweens the value of an SVG path.
<TweenButton/>

_(Note: only works on simple paths, for arcs or anything more complex, you should use [Flubber](https://github.com/veltman/flubber) or [polymorph.js](https://notoriousb1t.github.io/polymorph-docs/))_

In this example, an SVG path string is converted to an array of numbers, tweened, and then converted back to a path.

### 6.1.3 Tweening between colors

In this example, we show how a custom interpolator (`interpolateLab`) from [D3](https://github.com/d3/d3-interpolate) can be used with `tweened` :

<TweenColor/>

Here's the core of this one is implemented:

```svelte
<script>
	import { interpolateLab } from 'd3-interpolate';
	import { tweened } from 'svelte/motion';
	import svelteLogo from '/static/svg/svelte.svg';
	const colors = [
		{ text: 'red', c: 'rgb(255, 62, 0)' },
		{ text: 'blue', c: 'rgb(64, 179, 255)' },
		{ text: 'gray', c: 'rgb(103, 103, 120)' }
	];

	const color = tweened(colors[0].c, {
		duration: 800,
		interpolate: interpolateLab
	});
</script>
```

This gives you a taste of how to implement a tween with your own interpolator function. Again this opens up a lot of creative avenues! Especially with third-party interpolator libraries from D3 and polymorph.js (see [here](https://gist.github.com/Cleecanth/342eaa59c7738fc687043eb224814c02) for an example of this, courtesy of Chris Lee).

Or you can create your own; any function of the form `(from, to) => t => value` is valid.

### 6.1.4 Field notes for `tweened`

- **`tweened` is a store** - yes, `tweened` is an example of a [Svelte store](https://svelte.dev/tutorial/writable-stores). This means it can be updated using `$progress = 25` **or** `progress.set(25)`. Only with the second method will you be able to pass in new properties to the tween, such as ` progress.set(25, {duration:1500})` - this will override the properties you initialised the tween with.
- **element-level delay is difficult** - a common pattern in data visualization is to add an incremental delay to a visualization so that each element `i` (for example bar on a bar chart) begins its animation slightly after the last - ` i * 50ms` for example. This is currently difficult to achieve in Svelte, but it is possible with the help of Amelia Wattenberger's code available [here](https://svelte.recipes/components/tweened-staggered/).
- **easing functions** - all the Easing functions available in Svelte can be visualised in this nice [REPL](https://svelte.dev/repl/6904f0306d6f4985b55f5f9673f762ef?version=3.4.1), or you can keep on reading below to see how `tweened` compares with `spring` animations.

## 6.2 Spring

`spring` is the companion to `tweened`, they accomplish similar goals.

From the [Svelte docs]() we can read that the intention is for `spring` to be used more for values that are constantly being updated (like on `mousemove` events), but in reality, both can be useful for visual stories.

### 6.2.1 Comparing `spring` and `tweened`

Below, I created a visualization to help you understand the difference between the two.

Play around with the input parameters, then click on the white 'Animate' button and observe the results!

<SpringTweenComp/>

You can see that they are similar.

With `spring`, however, you are much more limited:

- you cannot specify the duration of the animation.
- you only have one `easing` style - the spring.

With these limitations, I find myself more often using `tweened` but I'm sure `spring` has some use cases.

## 6.3 Overview

In this section, we looked at the `svelte/motion` package in detail and how it can be applied to add life to our visual stories.

We explored `tweened` and applied it to bars in a chart, colors, and SVG paths.

Then, we looked at `spring` and looked at how it compared with `tweened`.
