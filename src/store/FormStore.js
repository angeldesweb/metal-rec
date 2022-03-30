import { writable } from 'svelte/store';

let values = {}

export const FormStore = () => {
    const { subscribe , update , set } = writable(values);

    return {
        subscribe,
        initializeForm:(args) => update(store => (store = {...store,...args})),
        write:(id,value) =>  update(store => (store = {...store,[id]:{...store[id],value}})),
        
        focusedInput:(id) => update(store => (store = {...store,[id]:{...store[id],focused:true,changed:false}})),
        blurredInput:(id) => update(store => (store = {...store,[id]:{...store[id],focused:false}})),
        changedInput:(id) => update(store => (store = {...store,[id]:{...store[id],changed:true}})),

        unChangeInput:(id) => update(store => (store = {...store,[id]:{...store[id],changed:false}})),

        invalidInput:(id,feedback) => update(store => (store = {...store,[id]:{...store[id],invalid:true,feedback}})),
        validInput:(id,feedback) => update(store => (store = {...store,[id]:{...store[id],success:true,feedback}})),

        cleanStatus:(id) => update(store => (store = {...store,[id]:{...store[id],success:false,invalid:false,feedback:''}})),
        cleanValues:(args) =>update(store => (store = args)),
        destroyForm:() => set({})
    }
}
