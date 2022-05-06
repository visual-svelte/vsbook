export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\essays\\first-one.md"),
	() => import("..\\..\\src\\routes\\essays\\hell-world.md"),
	() => import("..\\..\\src\\routes\\essays\\index.svelte"),
	() => import("..\\..\\src\\routes\\essays\\norge.md"),
	() => import("..\\..\\src\\routes\\essays\\test2.md"),
	() => import("..\\..\\src\\routes\\index.svelte")
];

export const dictionary = {
	"": [[0, 7], [1]],
	"essays": [[0, 4], [1]],
	"essays/first-one": [[0, 2], [1]],
	"essays/hell-world": [[0, 3], [1]],
	"essays/norge": [[0, 5], [1]],
	"essays/test2": [[0, 6], [1]]
};