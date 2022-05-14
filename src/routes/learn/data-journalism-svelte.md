<script> 
import ChartTransitions from "$components/vss/07-ChartTransitions.svelte"
import Introduction from "$components/vss/chapters/01-introduction.md"

import Interaction from "$components/vss/chapters/02-interaction.md"
import Motion from "$components/vss/chapters/03-motion.md"
import Transition from "$components/vss/chapters/04-transition.md"
import Animate from "$components/vss/chapters/05-animate.md"

import Charts from "$components/vss/chapters/06-charts.md"
import Maps from "$components/vss/chapters/07-maps.md"

import Scrollytelling from "$components/vss/chapters/08-scrollytelling.md"
import Mobile from "$components/vss/chapters/09-mobile.md"
import Accessibility from "$components/vss/chapters/10-accessibility.md"
import Testing from "$components/vss/chapters/11-testing.md"

import Overview from "$components/vss/chapters/12-overview.md"

// import SelfExplainingCharts from "$components/vss/chapters/18-self-explaining-charts.md"
// import Morphing from "$components/vss/chapters/19-morphing.md"
</script>

<Introduction id="1" chapter=1/>

<!-- SVELTE SECTION -->

# Svelte for Storytelling

In this section, we will explore the functionality that Svelte gives us 'out-the-box', and how to use this functionality to build beautiful, interactive stories.

But before we get to the 'fun stuff', there is some background knowledge about how Svelte actually works, which I think is important to learn, at least at a basic level, if we want to build with Svelte. This is especially true if you come from a non-computer science background (like I did!).

So, let's dive in...

<Interaction chapter=2/>
<Motion chapter=3/>
<Transition chapter=4/>
<Animate chapter=5/>

<!-- Graphics SECTION -->
<!-- <ChartsIntro chapter=7/> -->
<Charts chapter=6/>
<Maps chapter=7 />

<!-- CORE SECTION -->
<Scrollytelling chapter=8 />
<Mobile chapter=9 />
<Accessibility chapter=10 />
<Testing chapter=11 />

<Overview chapter=12 />

<!-- BONUS MATERIAL -->
<!-- <SelfExplainingCharts chapter=11 /> -->
<!-- <Morphing chapter=12 /> -->
<!-- <SvelteBonus/> -->
