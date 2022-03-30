import { writable } from 'svelte/store';

let initialValues = {
    email:'',
    role:'',
    lastLogin:''
}

export const UserStore = () => {
    const { subscribe , update , set } = writable(initialValues);
    return {
        subscribe,
        setUser: (user) => update(store => (store = user)),
        clearUser: () => set(initialValues)
    }
}