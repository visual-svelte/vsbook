<script>
    export let chapter
    import Morphing from  "$components/vss/Morphing.svelte";
  import Scrolly from "$components/site/Scrolly.svelte";
  import { scrollyData } from "$utils/animatedTransitions.js";
  import Chart2 from "$components/vss/ChartMorph.svelte";
  import Icon from "$components/site/Icon.svelte";
  import YouTube from "$components/site/YouTube.svelte";
  import ScrollyWrapper from "$components/site/ScrollyWrapper.svelte";
</script>

# {chapter} Chart Morphing

In this article, I try to re-create some of the animated transitions between
different types of charts originally found in the following YouTube video.

<YouTube video_id="vLk7mlAtEXI" />

This presented the following challenges to be overcome:

- How to tween smoothly between different SVG elements (i.e. from Rect to Circle)?
- How to coordinate this across multiple bars/ circles?
- Obviously the tools I will be using will be Svelte and D3 (and I also used a third-party library called Flubber for SVG path manipulation.

I chose Flubber after a number of unsuccessful attempts (for this specific use case) with: polymorph-js, d3 string interpolator and a custom Svelte interpolator/tween; more on these failed attempts towards the end of this article.

## Demo

Before we get to the code and implementation tips, let's check out the demo:

<Morphing/>

## Data

As is often the case with D3/ Animation code, how we format our data ready
for visualization is all-important. In the piece, it was actually the SVG morphing library, [Flubber](https://github.com/veltman/flubber), that dictated the shape of the input data.

I wanted to use the interpolateAll() function which takes as input two lists of paths (for
example, a list of paths for bars and a list of paths for pies), and creates interpolators for each transformation. This meant writing functions for the creation of SVG paths that look like Rects and Circles (the Pies are already SVG Paths from D3)

## >Tried and failed/ gotchas

I initially used polymorph-js, and created a custom interpolator, similarly to how it is described in [this code](https://gist.github.com/Cleecanth/342eaa59c7738fc687043eb224814c02).

Whilst this worked well for one SVG element, I found it difficult to efficiently apply it across multiple SVG elements (e.g. 100 bars in a bar chart)

I also tried the [d3.interpolateString](https://observablehq.com/@d3/d3-interpolatestring) method, but this fails when you go beyond anything but the simplest of SVG paths.\

Finally, I tried something similar to [this example](https://svelte.dev/repl/a6268cfc4685416998c6e64516546acd?version=3). It basically converts paths to points, tweens the raw values with Svelte tweening, then converts the points back to paths. This works well for simple icons, but when you have Arcs and other SVG path descriptors, things get messy, fast.

## Svelte code

<style>
  .wrapper {
    max-width: 600px;
    margin: 0 auto;
  }

  .code-box {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  ul li {
      margin: 10px;
    
  }

  .full-width {
    width: 90vw;
    position: relative;
    left: 65%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
  }
  .box {
    align-self: flex-end;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    margin: 0 auto;
    transform-origin: bottom;
  }
  .bounce-5 {
    animation-name: bounce-5;
    animation-timing-function: ease;
  }
  @keyframes bounce-5 {
    0% {
      transform: scale(1, 1) translateY(0);
    }
    10% {
      transform: scale(1, 1) translateY(0);
    }
    30% {
      transform: scale(1, 1) translateY(-10px);
    }
    50% {
      transform: scale(1, 1) translateY(0);
    }
    57% {
      transform: scale(1, 1) translateY(-7px);
    }
    64% {
      transform: scale(1, 1) translateY(0);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }
  }
</style>
