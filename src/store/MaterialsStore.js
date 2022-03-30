import { writable } from 'svelte/store';

export const MaterialStore = () => {
    const { subscribe , set } = writable(0);

    return {
        subscribe,
        next : () => set(1),
        back : () => set(0)
    }
}

export const Inbounds = () => {
    const { subscribe , set , update } = writable([]);
    return {
        subscribe,
        add : (args) => set(args),
        del : () => set([])
    }
}