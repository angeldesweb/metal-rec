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

export const ProviderFields = {
    'name':{
        type:'text',
        id:'name',
        label:'Nombre del proveedor',
        placeholder:'Ingrese un nombre',
        ...commonAttributes
    },
    'id':{
        type:'text',
        id:'id',
        label:'Identificación',
        placeholder:'Cédula o rif',
        ...commonAttributes
    },
    'phone':{
        type:'text',
        id:'phone',
        label:'Teléfono',
        placeholder:'Número de teléfono',
        ...commonAttributes
    },
}