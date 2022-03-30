<script>
    import { getMaterials } from "../../../http-methods/materials";
    import { onMount } from "svelte";

    const loadTable = async () => {
        try {
            const req = await getMaterials();
            setTimeout(() => true,5000);
            return req; 
        } catch (error) {
            return error;;
        }
    }
    
    let promise = loadTable();

    onMount(async () => {
        promise = await loadTable();
    })
    $: console.log(promise);
</script>
<div class="view">
    {#await promise}
    <h3 class="text-primary">Cargando</h3>
    {:then documents}
    <table class="table table-hover">
        <thead>
            <tr>
                <th scope="col">Material</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio Unitario</th>
                <th scope="col">Tipo</th>
            </tr>
        </thead>
        <tbody>
            {#each documents as material}
            {#if material.tipo === 'Ferroso'}
            <tr class="table-dark">
                <th scope="row">{material.name}</th>
                <td>{material.account} {material.unitsymbol}</td>
                <td>{material.unitprice} $</td>
                <td>{material.tipo}</td>
            </tr>
            {:else}
            <tr class="table-light">
                <th scope="row">{material.name}</th>
                <td>{material.account} {material.unitsymbol}</td>
                <td>{material.unitprice} $</td>
                <td>{material.tipo}</td>
            </tr>
            {/if}
            {/each}
        </tbody>
    </table>
    {:catch}
    <h3 class="text-danger">Se han encontrado errores</h3>
    {/await}
</div>