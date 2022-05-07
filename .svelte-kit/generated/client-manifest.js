export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\c1\\Overview.md"),
	() => import("..\\..\\src\\routes\\hello.svelte"),
	() => import("..\\..\\src\\routes\\index.md")
];

export const dictionary = {
	"": [[0, 4], [1]],
	"hello": [[0, 3], [1]],
	"c1/Overview": [[0, 2], [1]]
};