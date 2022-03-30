import { Notyf } from 'notyf'
import 'notyf/notyf.min.css';

export const UpperRight = new Notyf({
    duration:20000,
    position:{
        x:'right',
        y:'top'
    }
});

export const BottomRight = new Notyf({
    duration:20000,
    position:{
        x:'right',
        y:'bottom'
    }
});

export const TopCenter = new Notyf({
    duration:20000,
    position:{
        x:'center',
        y:'top'
    }
});

export const responses = {
    loginSuccess:(message) => UpperRight.success({message,dismissible:true}),
    loginError:(message) => UpperRight.error({message,dismissible:true}),
    RegisterSuccess:(message) => TopCenter.success({message,dismissible:true}),
    RegisterError:(message) => TopCenter.error({message,dismissible:true})
}