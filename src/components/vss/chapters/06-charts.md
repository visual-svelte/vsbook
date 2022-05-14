<script> 
export let chapter;
import LayerCake1 from "$components/vss/11-LayerCake1.svelte"
</script>

# {chapter} Layer Cake

## What is Layer Cake and why do we need it

Layer Cake takes care of the most complex parts of building and maintaining interactive data visualizations in Svelte: scales & responsiveness.

With these two things taken care of, it leaves us free to be creative!

Crucially, Layer Cake, as the name suggests, works by stacking different graphics layers ([Grammar of Graphics](https://cfss.uchicago.edu/notes/grammar-of-graphics/)-style). The coordinate system is shared between each layer and defined using the height and width of an outer container.

What's really awesome is that, within this container, we can add SVG, HTML, WebGL and Canvas elements, all of which will respect the shared coordinate system.

This is great, because it means we can mix and match layers of SVG, Canvas, HTML, using each for what they are best at. We might render our GeoPaths on with Canvas (for speed), our labels in HTML

Those familiar with the layered approach of the [Grammar of Graphics]

Before we dive into Layer Cake, I think it's worth reviewing our goal.

<LayerCake1/>
