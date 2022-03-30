<script>
    import { getOutbounds, updateOutbound } from '../../../http-methods/outbounds';
    import { createSell } from '../../../http-methods/sells';
    import { responses } from '../../../tools/Toast'
    import { onMount } from 'svelte';
    import moment from 'moment';
    import 'moment/locale/es';
import { Timestamp } from 'firebase/firestore';


    $: outId = '';
    $: ammount = null;
    const fetchOuts = async () =>{
        promise = await getOutbounds();
        let unattendeds = promise.filter(doc => !doc.attended);
        if(unattendeds.length === 0) return []
        return promise;
    }

    let promise = fetchOuts();

    onMount(async () => {
        promise = fetchOuts();
    });

    const sendForm = async () => {
        let body = {
            outId,
            ammount,
            date: Timestamp.now()
        };

        const data = await createSell(body);
        const att = await updateOutbound(outId,{attended:true})
        data.success && att.success ? 
        responses.RegisterSuccess(data.message)
        : responses.RegisterError(data.message) 
    }
</script>

<div class="view">
    <div class="prev">
        <fieldset>
            <legend>Registrar venta</legend>
            {#await promise}
            <h1>Cargando</h1>
            {:then docs}
            {#if docs.length === 0}
            <h1>No se encontraron salidas desatendidas</h1>
            {:else}
            <div class="form-group">
                <label for="outs">Salidas Pendientes</label>
                <div class="pad" style:padding="iem">
                    <hr>
                </div>
                <select class="form-select" id="outs" bind:value={outId}>
                    <option disabled value="" selected hidden>Seleccione un número de lote</option>
                {#each docs as item}
                {#if !item.attended}
                    <option>{item.lote}</option>
                {/if}
                {/each}
                </select>
            </div>
            <div style:margin-top="1em" class="form-group">
                <label for="outs">Monto de venta</label>
                <div class="pad" style:padding="iem">
                    <hr>
                </div>
                <input type="number" class="form-control" placeholder="Monto de la venta" bind:value={ammount}>
            </div>
            <div class="button">
                <button class="btn btn-primary" on:click={sendForm}>Registrar</button>
            </div>
            {/if}
            {:catch}
            <h1>Error</h1>
            {/await}
        </fieldset>
    </div>
</div>

<style>
    .view {
        display:flex;
        flex-direction:column;
        justify-content: center;
        height:100%;
        width:60%;
    }
    .prev {
        height:100%;
        padding:1em 0;
        text-align:center;
    }
    .button {
        padding:1em;
    }
</style>