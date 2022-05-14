export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\runtime\\components\\layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\__layout-root.svelte"),
	() => import("..\\..\\src\\routes\\index@root.svelte"),
	() => import("..\\..\\src\\routes\\learn\\data-journalism-svelte.md")
];

export const dictionary = {
	"@root": [[2, 3], [1]],
	"learn/data-journalism-svelte": [[0, 4], [1]]
};