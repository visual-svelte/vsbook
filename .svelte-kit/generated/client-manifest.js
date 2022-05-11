export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\vss\\01-introduction.md"),
	() => import("..\\..\\src\\routes\\vss\\02-storytelling.md"),
	() => import("..\\..\\src\\routes\\vss\\03-story-design.md"),
	() => import("..\\..\\src\\routes\\vss\\04-data-handling.md"),
	() => import("..\\..\\src\\routes\\vss\\05-svelte-intro.md"),
	() => import("..\\..\\src\\routes\\vss\\06-motion.md"),
	() => import("..\\..\\src\\routes\\vss\\06-svelte-toolkit.md"),
	() => import("..\\..\\src\\routes\\vss\\07-charts-intro.md"),
	() => import("..\\..\\src\\routes\\vss\\07-svelte-toolkit.md"),
	() => import("..\\..\\src\\routes\\vss\\07-transition.md"),
	() => import("..\\..\\src\\routes\\vss\\08-animate.md"),
	() => import("..\\..\\src\\routes\\vss\\08-svg-and-canvas.md"),
	() => import("..\\..\\src\\routes\\vss\\09-layercake.md"),
	() => import("..\\..\\src\\routes\\vss\\10-d3.md"),
	() => import("..\\..\\src\\routes\\vss\\11-maps-intro.md"),
	() => import("..\\..\\src\\routes\\vss\\12-d3-geo.md"),
	() => import("..\\..\\src\\routes\\vss\\13-leaflet.md")
];

export const dictionary = {
	"": [[0, 2], [1]],
	"vss/01-introduction": [[0, 3], [1]],
	"vss/02-storytelling": [[0, 4], [1]],
	"vss/03-story-design": [[0, 5], [1]],
	"vss/04-data-handling": [[0, 6], [1]],
	"vss/05-svelte-intro": [[0, 7], [1]],
	"vss/06-motion": [[0, 8], [1]],
	"vss/06-svelte-toolkit": [[0, 9], [1]],
	"vss/07-charts-intro": [[0, 10], [1]],
	"vss/07-svelte-toolkit": [[0, 11], [1]],
	"vss/07-transition": [[0, 12], [1]],
	"vss/08-animate": [[0, 13], [1]],
	"vss/08-svg-and-canvas": [[0, 14], [1]],
	"vss/09-layercake": [[0, 15], [1]],
	"vss/10-d3": [[0, 16], [1]],
	"vss/11-maps-intro": [[0, 17], [1]],
	"vss/12-d3-geo": [[0, 18], [1]],
	"vss/13-leaflet": [[0, 19], [1]]
};