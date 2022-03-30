<script>
    import { getClients } from '../../../http-methods/clients';
    import { onMount } from 'svelte';
    import { minbounds, step } from '../../../store';
    import { createOutbound } from '../../../http-methods/outbounds';
    import { substractAccount } from '../../../http-methods/materials';
    import { responses } from '../../../tools/Toast';
    import moment from 'moment';
    import 'moment/locale/es';
    import { Timestamp } from 'firebase/firestore';


    $: clients = [];
    $: materials = [];
    $: list = []
    $: id = '';
    onMount(async () => {
        clients = await getClients();
        materials = $minbounds.map(mat => ({account:mat.account,material:`/material/${mat.name}`}));
        list = clients.map(pro => ({name:pro.name,id:pro.id}));
    });

    const onChange = (e) => {
        id = e.target.value.split(' ')[0];
    }

    const sendBody = async () => {
        const lote = moment().format('y-M-D-hhmm');
        const body = {
            lote,
            client:`/clients/${id}`,
            outbounds:materials,
            date: Timestamp.now()
        };
        const response = await createOutbound(body);
        materials.map(async doc => {
            let id =  doc.material.split('/')[2]
            await substractAccount(id,Number(doc.account))   
        });
        response.success ? 
        responses.RegisterSuccess(response.message)
        : responses.RegisterError(response.message);

        minbounds.del();
        step.back();
    }
    
</script>

<div class="view">
    <div class="prev">
        <fieldset>
            <legend>Registrar salida de material</legend>
            <span style:margin='1em 0' class="badge bg-success">Materiales</span>
            <div class="form-group">
                <label for="pro">Cliente:</label>
                <input id="pro" class="form-control" list="clients" on:change={onChange}>
                <datalist id="clients">
                    {#each list as pro}
                    <option>{pro.id} {pro.name}</option>
                    {/each}
                </datalist>
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
