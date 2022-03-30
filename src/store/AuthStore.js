import { writable } from 'svelte/store';

let user = {
    id:'',
    role:'User',
    isAuth:false
}

export const AuthStore = () => {
    const { subscribe , update } = writable(user);

    return {
        subscribe,
        signin:(authUser) => update(store => (store = authUser)),
        logout:() => update(store => (store = user))
    }
}