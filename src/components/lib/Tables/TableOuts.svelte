<script>
    // @ts-nocheck
        import { getOutbounds } from "../../../http-methods/outbounds";
        import { onDestroy, onMount } from "svelte";
        import { getClients } from "../../../http-methods/clients";
        import moment from "moment/min/moment-with-locales";
        moment.locale('es')

        const loadTable = async () => {
            try {
    
                const req = await getOutbounds();
                const provs = await getClients();
                const resp = req.map(doc => {
                    let cli = doc.client.split('/')[2];
                    doc.client = provs.filter(doc => doc.id === cli);
                    let date = doc.date.toDate()
                    // @ts-ignore
                    doc.date = moment(date).format('dddd MM y');
                    doc.materials = doc.outbounds.length;
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
                {#each documents as outbound}
                <tr class:table-success={outbound.attended}
                    class:table-warning={!outbound.attended}
                >
                    <th scope="row">{outbound.lote}</th>
                    <td>{outbound.client[0].name}</td>
                    <td>{outbound.date}</td>
                    <td>{outbound.materials}</td>
                </tr>
                {/each}
            </tbody>
        </table>
        {/if}
        {:catch}
        <h3 class="text-danger">Se han encontrado errores</h3>
        {/await}
    </div>