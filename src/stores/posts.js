import { writable } from 'svelte/store';

export const postLibrary = writable({ essays: [], notes: [] });
