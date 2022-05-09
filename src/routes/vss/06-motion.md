<script> 
import TweenedExample from "$components/vss/06-TweenedExample.svelte"
import TweenButton from "$components/vss/06-TweenButton.svelte"
import TweenBars from "$components/vss/06-TweenBars.svelte"
import TweenColor from "$components/vss/06-TweenColor.svelte"

</script>

# 6 Motion

The default behaviour of computers is quite binary; we tell something to appear - it appears instantly, we tell something to move - it moves there instantly.

Real life is different. People _gradually_ enter our line-of- and then walk off into the distance. An object appears _gradually_ larger as you bring it closer to your face.

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

Let's talk through a few of these examples, then at the end of the section, I'll list some 'implementation notes'; things I've learnt using `tweened`.

### 6.1.1 Tweening bars

In this example, we have a 100% stacked bar chart to represent (fictional) election data.
<TweenBars/>

The full code for this component can be found on [GitHub](https://github.com), but let's go through the important steps below:

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

**Data** - our data for this example is split in two: data for the primary election and data for the main election. Yes, we can feed arrays of numbers into our `tweened` function too!

**Tween** - we initialise our `tween` with the name `values`. The first prop is the starting state (in our case the Primary data), then we add a second prop `{ duration: 800, easing: elasticOut }` to specify the duration and easing that our tween will use.

**Update function** - we create an update function that is used in the `on:click` handler of the two buttons. In the function, we simply check the current state, and update the tween to the other data set.

### 6.1.2 Tweening paths

You can tween numbers, arrays, objects... or in fact anything you can convert to a number, array of numbers or object.

This opens up lots of creative possibilities. Because it means if we can represent something in numbers, we can tween it.

For example, this cool button from [Jimmy Utterström](https://mobile.twitter.com/jimutt/status/1291526378123386880) tweens the value of an SVG path.
<TweenButton/>

_(Note: only works on simple paths, for arcs or anything more complex, you should use [Flubber](https://github.com/veltman/flubber) or [polymorph.js](https://notoriousb1t.github.io/polymorph-docs/))_

In this example, an SVG path string is converted to an array of numbers, tweened, and then converted back to a path.

### 6.1.3 Tweening between colors

In this example, we show how a custom interpolator (`interpolateLab`) from [D3](https://github.com/d3/d3-interpolate) can be used with a `tween` :

<TweenColor/>

Here's the core of how one is implemented:

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

### 6.1.4 Field notes for `tweened`

- **`tweened` is a store** - yes, `tweened` is an example of a [Svelte store](https://svelte.dev/tutorial/writable-stores). This means it can be updated using `$progress = 25` **or** `progress.set(25)`. Only with the second method will you be able to pass in new properties to the tween, such as ` progress.set(25, {duration:1500})` - this will override the properties you initialised the tween with.
- **element-level delay is difficult** - a common pattern in data visualization is to add an incremental delay to a visualization so that each element `i` (for example bar on a bar chart) begins its animation slightly after the last - ` i * 50ms` for example. This is currently difficult to achieve in Svelte, but it is possible with the help of Amelia Wattenberger's code available [here](https://svelte.recipes/components/tweened-staggered/).

## 6.2 Spring

`spring` is the companion to `tweened`, they accomplish similar goals.

From the [Svelte docs]() we can read that the intential is for `spring` to be used more for values that are constantly being updated (like on `mousemove` events), but in reality, both can be useful for visual stories.

### 6.2.1 Comparing `spring` and `tweened`

I created this visualization to help you understand the difference between the two:

<SpringTweenComp/>
