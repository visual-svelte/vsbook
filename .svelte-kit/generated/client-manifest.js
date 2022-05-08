export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\c1\\data-handling.md"),
	() => import("..\\..\\src\\routes\\c1\\introduction.md"),
	() => import("..\\..\\src\\routes\\c1\\story-design.md"),
	() => import("..\\..\\src\\routes\\c1\\storytelling.md"),
	() => import("..\\..\\src\\routes\\c2\\core-concepts-svelte.md"),
	() => import("..\\..\\src\\routes\\c2\\intro-to-svelte.md"),
	() => import("..\\..\\src\\routes\\c2\\the-svelte-toolbox.md"),
	() => import("..\\..\\src\\routes\\hello.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte")
];

export const dictionary = {
	"": [[0, 10], [1]],
	"hello": [[0, 9], [1]],
	"c1/data-handling": [[0, 2], [1]],
	"c1/introduction": [[0, 3], [1]],
	"c1/story-design": [[0, 4], [1]],
	"c1/storytelling": [[0, 5], [1]],
	"c2/core-concepts-svelte": [[0, 6], [1]],
	"c2/intro-to-svelte": [[0, 7], [1]],
	"c2/the-svelte-toolbox": [[0, 8], [1]]
};