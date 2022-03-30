import { writable } from 'svelte/store';

export const RouterStore = () => {
    const { subscribe , set } = writable(0)

    return {
        subscribe,
        navigate: v => set(v)
    }
};

