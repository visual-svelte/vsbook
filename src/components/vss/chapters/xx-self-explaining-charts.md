<script>
  export let chapter
  import ChartExplainers from "$components/vss/ChartExplainers.svelte";
</script>

# {chapter} Self-explaining charts

A successful data visualisation, in my view, will:

- minimise the amount of thinking the user has to do to understand what is being presented,
- minimise the amount of time it takes for the user to draw accurate conclusions from the visualisation.

In this article, I look at one way way to achieve that; by slowly revealing more information about the chart before they see the data.

## {chapter}.1 Psychology and understanding

If we want to minimise thinking and minimise time-to-draw-valid-conclusions, we need to understand what goes wrong in traditional data visualizations.

I haven't looked at relevant academic literature on this topic, but I
believe the natural human instinct, upon being confronted by a graph is to
look first at the colour, the bars/ dots example, then they will look for
the key for the colours, if they cannot still find the meaning of the chart,
only then will they look at the Chart Title/ subtitle and finally they will
look at the axes.

If you are a producer of .png static data visualisations, it's very
difficult to control this human instinct through your design decisions.

As interactive designers, we have the ability to control when users see the
Axes, the Title and the Chart Shapes (bars, points etc). So let's take
advantage of that.

In an ideal world, in my opinion, we would want the user to understand what
the chart is showing them, before you even show them a single data point.
Then when you finally reveal the data to them, they are in a state whereby
they can quickly understand what is going on.

Now, let's see what this might look like in practice, with a few examples
(with code).

<ChartExplainers/>
