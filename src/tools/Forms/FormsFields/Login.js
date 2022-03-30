export const commonAttributes = {
    dirty:false,
    focused:false,
    changed:false,
    feedback:'',
    success:false,
    invalid:false,
    disabled:false,
    value:'',
}

export const LoginFields = {
    'email':{
        type:'email',
        id:'email',
        label:'Correo electrónico',
        placeholder:'example@mail.com',
        ...commonAttributes
    },
    'password':{
        type:'password',
        id:'password',
        label:'Contraseña',
        placeholder:'Ingrese su contraseña',
        ...commonAttributes
    }
}
