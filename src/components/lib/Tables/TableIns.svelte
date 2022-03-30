<script>
    import { getInbounds } from "../../../http-methods/inbounds";
    import { onDestroy, onMount } from "svelte";
    import { getProviders } from "../../../http-methods/providers";
    import moment from "moment/min/moment-with-locales";
    moment.locale('es')

    const loadTable = async () => {
        try {

            const req = await getInbounds();
            const provs = await getProviders();
            const resp = req.map(doc => {
                let pro = doc.provider.split('/')[2];
                doc.provider = provs.filter(doc => doc.id === pro);
                let date = doc.date.toDate()
                // @ts-ignore
                doc.date = moment(date).format('dddd MM y');
                doc.materials = doc.inbounds.length;
                return doc;
            })
            console.log(resp);
            return req; 
        } catch (error) {
            return error;;
        }
    }
    
    let promise = loadTable();

    onMount(async () => {
        promise = await loadTable();
    })
    onDestroy(() => promise = null);
</script>
<div class="view">
    {#await promise}
    <h3 class="text-primary">Cargando</h3>
    {:then documents}
    {#if documents.length === 0}
    <h1>Sin elementos registrados</h1>
    {:else}
    <table class="table table-active table-hover">
        <thead>
            <tr>
                <th scope="col">Lote</th>
                <th scope="col">Proveedor</th>
                <th scope="col">Fecha</th>
                <th scope="col">Materiales</th>
            </tr>
        </thead>
        <tbody>
            {#each documents as inbound}
            <tr class:table-success={inbound.payed}
                class:table-danger={!inbound.payed}
            >
                <th scope="row">{inbound.lote}</th>
                <td>{inbound.provider[0].name}</td>
                <td>{inbound.date}</td>
                <td>{inbound.materials}</td>
            </tr>
            {/each}
        </tbody>
    </table>
    {/if}
    {:catch}
    <h3 class="text-danger">Se han encontrado errores</h3>
    {/await}
</div>