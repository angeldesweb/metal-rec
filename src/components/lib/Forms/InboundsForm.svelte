<script>
    import { getProviders } from '../../../http-methods/providers';
    import { onDestroy, onMount } from 'svelte';
    import { minbounds, step } from '../../../store';
    import { createInbound } from '../../../http-methods/inbounds';
    import { addAccount } from '../../../http-methods/materials';
    import { responses } from '../../../tools/Toast';
    import { Timestamp } from 'firebase/firestore';
    import moment from 'moment';
    import 'moment/locale/es';

    import { getMaterial } from '../../../http-methods/materials';
import Switch from '../Fields/Switch.svelte';

    $: providers = [];
    $: materials = [];
    $: list = [];
    $: cancel = false;
    $: id = '';
    onMount(async () => {
        let responses = await getMaterial('Batería');
        providers = await getProviders();
        materials = $minbounds.map(mat => ({account:mat.account,material:`/material/${mat.name}`}));
        list = providers.map(pro => ({name:pro.name,id:pro.id}));
    });

    const onChange = (e) => {
        id = e.target.value.split(' ')[0];
    }
    const onSwitch = (e) => {
        cancel = e.target.checked;
    }

    const sendBody = async () => {
        const lote = moment().format('y-M-D-hhmm');
        const payed = cancel;
        const body = {
            lote,
            provider:`/providers/${id}`,
            inbounds:materials,
            date: Timestamp.now(),
            payed
        };
        const response = await createInbound(body);
        materials.map(async doc => {
            let id =  doc.material.split('/')[2]
            await addAccount(id,Number(doc.account))   
        });
        response.success ? 
        responses.RegisterSuccess(response.message)
        : responses.RegisterError(response.message);

        minbounds.del();
        step.back();
    }
    onDestroy(() => minbounds.del())
</script>

<div class="view">
    <div class="prev">
        <fieldset>
            <legend>Registrar ingreso de material</legend>
            <span style:margin='1em 0' class="badge bg-success">Materiales</span>
            <div class="form-group">
                <label for="pro">Proveedor:</label>
                <input id="pro" class="form-control" list="providers" on:change={onChange}>
                <datalist id="providers">
                    {#each list as pro}
                    <option>{pro.id} {pro.name}</option>
                    {/each}
                </datalist>
                <Switch label="Cancelado" check={cancel} {onSwitch} />               
                <div class="btn-box">
                    <button 
                    class="btn btn-primary"
                    on:click={sendBody}    
                    >Registrar</button>
                </div>
            </div>
        </fieldset>
    </div>  
    <div class="back">
        <button 
            class="btn btn-primary"
            on:click={step.back}    
        >Regresar</button>
    </div>
</div>

<style>
    .view {
        display:flex;
        flex-direction:column;
        height:100%;
    }
    .prev {
        height:100%;
        padding:1em 0;
    }
    .back {
        height:10%;
    }
    .badge:hover {
        cursor:pointer;
    }
    .btn-box {
        padding:1em 0;
    }
</style>

