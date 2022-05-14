<script>
export let chapter;
import Scrollytelling from "$components/vss/Scrollytelling.svelte"
</script>

# {chapter} Scrollytelling

Scrollytelling is a go-to technique for visual journalists and so let's
learn to implement it properly, using Svelte!

## The good news

Good news, part 1: Implementing Scrollytelling in Svelte is a piece of cake
(or Pudding?), thanks to the team at [Pudding.cool](https://pudding.cool). They open-sourced [this Scrolly](https://github.com/the-pudding/svelte-starter/blob/main/src/components/helpers/Scrolly.svelte) component.

Also, Connor Rothschild has already posted [this great post](https://www.connorrothschild.com/post/svelte-scrollytelling) detailing how to implement the Pudding Scrolly component.

If you haven't already, now is probably a good time to read those two resources to get a good understanding of how it works. In this article, I will instead be providing many creative examples of how to extend the basic usage of the Scrolly component. Let's dive into it!

<Scrollytelling/>
