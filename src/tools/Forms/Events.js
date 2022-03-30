import { validations } from "./Validations";

export const handlers = (id)=> {
    return {
        FocusInput:(states,store) => {
            store.focusedInput(id);
            if(states[id].changed) store.unChangeInput(id);
            if(states[id].invalid) store.cleanStatus(id)
            return states;
        },
        BlurInput:(states,store,e) => {
            let validate;
            store.blurredInput(id);
            if(states[id].changed) validate = validations[e.target.type](e.target.value); 
            if(validate && validate.status === false) store.invalidInput(id,validate.message)
            if(validate && validate.status === true) store.validInput(id,'Correcto')
        }
    }
}