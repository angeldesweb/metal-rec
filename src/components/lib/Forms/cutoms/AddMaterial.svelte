<script>
    import { getMaterials } from '../../../../http-methods/materials';
    import { onMount } from 'svelte';
    import { BottomRight } from '../../../../tools/Toast';
    import AddMaterialsBox from './AddMaterialsBox.svelte';
    import { minbounds, step } from '../../../../store';

    $: store = [];
    $: name = '';
    $: account = 0;
    $: unitType = '';
    $: materials = []

    const fetchMaterials = async () => store = await getMaterials();
    
    onMount(fetchMaterials);

    const onSelect = (e) => name = e.target.value;
    const onInput = (e) => account = e.target.value;
    const addFlag = (e) =>  {
        let symbIndex = store.findIndex(obj => obj.name === name);
        unitType = store[symbIndex].unitsymbol;
        let current = {name,account,unitType};
        let nameIndex = materials.findIndex(obj => obj.name === name);
        nameIndex === -1 ? materials = [...materials,current] : BottomRight.open({dismissible:true,background:'blue',message:'Ya existe el elemento'})
        name = ''; 
        account = 0;

    };
    const removeFlag = (e) => {
        materials = materials.filter(item => item.name !== e.target.id);
    }
    const nextOperation = () => {
        minbounds.add(materials);
        step.next();
    }
</script>

<div class="add-material">
    <AddMaterialsBox {name} {account} {materials} {store} {addFlag} {removeFlag} {onSelect} {onInput} />  
    <div class="next">
        <button 
            disabled={materials.length === 0}
            class="btn btn-primary"
            on:click={nextOperation} >Siguiente</button>
    </div>
</div>

<style>
    .add-material {
        height:100%;
    }
    .next {
        height:10%;
    }
</style>