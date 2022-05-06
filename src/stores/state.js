import { writable } from 'svelte/store';

export const state = writable(null);
export const dark = writable(false);
export const showSignup = writable(false);
export const showLogin = writable(false);
