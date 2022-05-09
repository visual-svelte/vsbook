<script> 
import TweenedExample from "$components/vss/06-TweenedExample.svelte"
import TweenButton from "$components/vss/06-TweenButton.svelte"
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

## 6.1 Tweened

The [Svelte tutorial](https://svelte.dev/tutorial/tweened) on `tweened` shows us how to tween a HTML Progress bar. After using `tweened` in a variety of different scenarios, I would also add the following notes that will help you understand and implement `tweened` in your visual stories:

### 1. `tweened` interpolates between your initial and end state

The tweened effect has an initial state of 0% and a goal state of 25%. The `tweened` store interpolates the value 100 times between 0% and 25%, over the given duration. This gives the appearance of movement.

### 2. `tweened` is a store

`tweened` is an example of a [Svelte store](https://svelte.dev/tutorial/writable-stores). This means it can be updated using `$progress = 25` **or** `progress.set(25)`.

The benefit of using the second, more verbose method is that we can update the parameters such as the

### 3. You can tween numbers, arrays, objects

... or in fact anything you can convert to a number, array of numbers or object.

This opens up lots of creative possibilities. Because it means if we can represent something in numbers, we can tween it.

For example, this cool button from [Jimmy Utterström](https://mobile.twitter.com/jimutt/status/1291526378123386880) tweens the value of an SVG path.
<TweenButton/>

_(Note: only works on simple paths, for arcs or anything more complex, you should use [Flubber](https://github.com/veltman/flubber) or [polymorph.js](https://notoriousb1t.github.io/polymorph-docs/))_

Or you can tween colour:
<TweenColor/>

With the caveat that the array and object structures must remain consistent when you call `progress.set(object)`.

<!-- <TweenedExample/> -->

## 6.2 Spring
