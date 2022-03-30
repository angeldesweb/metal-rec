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

export const MaterialFields = {
    'name':{
        type:'text',
        id:'name',
        label:'Nombre del material',
        placeholder:'Ej: Hierro Corto, Latón...',
        ...commonAttributes
    },
    'tipo':{
        type:'select',
        id:'tipo',
        label:'Tipo de Material',
        placeholder:'Seleccione --',
        options:[
            'Ferroso',
            'No Ferroso'
        ],
        ...commonAttributes
    },
    'account':{
        type:'number',
        id:'account',
        label:'Cantidad inicial',
        placeholder:'Cantidad actual de material',
        ...commonAttributes
    },
    'unitprice':{
        type:'number',
        id:'unitprice',
        label:'Precio unitario',
        placeholder:'Precio por unidad',
        ...commonAttributes
    },
    'unitsymbol':{
        type:'text',
        id:'unitsymbol',
        label:'Símbolo',
        placeholder:'Ej: Kg, Unidades',
        ...commonAttributes
    },
}