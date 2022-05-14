<script> 
export let chapter; 
import OnClick from "$components/vss/09-OnClick.svelte"
import ShowTooltip from "$components/vss/09-ShowTooltip.svelte"
import SearchEnter from "$components/vss/09-SearchEnter.svelte"
import MenuEscape from "$components/vss/09-MenuEscape.svelte"
import MouseMoveHeader from "$components/vss/09-MouseMoveHeader.svelte"

</script>

# {chapter} Interaction

One of the great things about Svelte is the ease with which we can handle user interaction.

This chapter combines and consolidates knowledge from the Svelte tutorials on [Bindings](https://svelte.dev/tutorial/svelte-window-bindings) and [DOM Events](https://svelte.dev/tutorial/dom-events), so it's worth reading and understanding those first.

Specifically, we will be looking at how we can _apply_ these capabilities to create interactive visual stories. Let's begin...

## {chapter}.1 Events

In Svelte, when we declare HTML elements we can add event listeners using the generic syntax `on:event={handleEvent}`. These are tightly aligned to the [HTML Web API](https://developer.mozilla.org/en-US/docs/Web/API/Element).

Many common event handlers are included already with Svelte, but you can also attach all others with a combination of `bind:this` and the conventional `el.addEventListener()` syntax.

In this section we'll be going over the use cases for the following events:

```svelte
<!-- Window-level events (typically) -->
<svelte:window
	on:resize={handleResize}
	on:mousemove={handleMouseMove}
	on:keypress={handleKeypress}
/>

<!-- Element-level events (typically) -->
<div
	on:click={handleClick}
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
	on:keypress={handleKeypress}
/>
```

Some at attached at the Window-level, and some are attached to individual elements, but this is not a hard/fast rule. Just where I have found them to be most useful.

### {chapter}.1.1 `on:click`

`on:click` is fairly self-explanatory. Attach it to HTML elements that you want to make clickable.

<OnClick/>

And here's how that is done:

```svelte
<script>
	let showSlideThing = false;
	import { fly } from 'svelte/transition';
</script>

<div class="relative py-10 w-32" on:click={() => (showSlideThing = !showSlideThing)}>
	<span class="p-5 cursor-pointer z-50 select-none bg-white border-2 ">Click me</span>

	{#if showSlideThing}
		<p transition:fly={{ x: -100 }} class="absolute mt-0 -z-10 top-6 -right-24 ">Hidden thing!</p>
	{/if}
</div>
```

This handler can also be a useful substitute for an `<a href="...">` tag. If you want to do things before/ after your route update, in your event handler you can use `goto()` from `$app/navigation` to perform the navigation.

### {chapter}.1.2 `on:mouseenter` and `on:mouseleave`

These can be used in combination to manage hover-style interactions.

For example, if we want to show a tooltip when the user hovers over an element, we might do something like this:

<ShowTooltip/>

This can be achieved fairly simply, like so:

```svelte
<script>
	let showTooltip = false;
	import { slide } from 'svelte/transition';
</script>

<div class="relative h-24 w-28">
	<div
		class="p-5 border-2 w-28 text-center bg-gray-100"
		on:mouseenter={() => (showTooltip = true)}
		on:mouseleave={() => {
			showTooltip = false;
		}}
	>
		Hover me
	</div>

	{#if showTooltip}
		<div transition:slide class="tooltip -right-20 top-6 absolute">Hovered!</div>
	{/if}
</div>
```

### {chapter}.1.3 `on:keypress`

The examples above are _normally_ applied at the element level. The `on:keypress` handler is an example that is frequently attached at both an element level and at the `<svelte:window>` level, depending on your goal.

For example, if we are building a searchbox, we might attach an `on:keypress` handler to the `<input>` to listen for the `Enter` key:

<SearchEnter/>

```svelte
<script>
	import { slide } from 'svelte/transition';
	let showResults = false;
	function handleKeypress(event) {
		console.log(event);
		if (event.key == 'Enter') {
			showResults = true;
		} else {
			showResults = false;
		}
	}
</script>

<div class="p-10">
	<div class="text-sm italic py-2">Type your query and hit Enter:</div>
	<input class="outline p-2" type="text" on:keypress={handleKeypress} placeholder="Search..." />

	{#if showResults}
		<div in:slide class="results">44 results found!</div>
	{/if}
</div>
```

### {chapter}.1.4 `on:mousemove`

Another event that is sometimes listened to at the element level and sometimes at the Window level is `on:mousemove`. This [Svelte tutorials](https://svelte.dev/tutorial/spring) does a good job of explaining how this works.

There are lots of potential use case for this, two common ones that you see a lot are for tooltis, and also for creative post headers, like this one from [Google Jigsaw](https://jigsaw.google.com/issues/).

### {chapter}.1.5 `on:resize`

`on:resize` can be useful for creating reactive components, charts and layouts. This gets calls every time the Window or Element (depending on where you attach it) width changes.

## {chapter}.2 Binding

Binding allows you to access useful properties of the Window or any Element.

Here's a list of the common ones I use for creating visual stories:

- `scrollY` - useful for creating interactions that respond to the user's current Y scroll position.
- `innerwidth` - the `innerWidth` properties is another useful one, and is normally used to create reactive layouts. For example

## {chapter}.3 Overview

In this chapter, we discussed to numerous ways we can listen for and respond to user interaction in our Svelte stories.

We looked at clicks, scrolls, hovers, mouse events, key presses and bindings!

That's a lot to take in! Hopefully it has been useful to see more examples of how these techniques can be implemented.

Svelte gives us the power to handle many different interactions, the only limit is our creativity! Found a cool way to implement these event listeners/ bindings - let me know on [Twitter](http://twitter.com/visualsvelte) - I'm always keen to hear about new ways of doing things!
