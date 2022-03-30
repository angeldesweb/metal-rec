import { writable } from 'svelte/store';

export const ThemeStore = () => {
    const { subscribe , update } = writable(true);

    return {
        subscribe,
        toggle:() => update(v => !v)
    }
}