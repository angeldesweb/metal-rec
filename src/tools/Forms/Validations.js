export const isValidEmail = (exp) => {
    if(!exp) return {status:false,message:'No se admiten espacios en blanco'};
    const validate = String(exp)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if(!validate) return {status:false,message:'No es una dirección de correo válida'};
    return {status:true};
};

const isValidPassword = (exp) => {
    if(!exp) return {status:false,message:'No se admiten espacios en blanco'};
    if(exp.length <= 4) return {status:false,message:'Mínimo 6 carácteres'};
    return {status:true};
}

export const validations = {
    email:(exp) => isValidEmail(exp),
    password:(exp) => isValidPassword(exp)
}


