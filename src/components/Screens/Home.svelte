<script>
    import { getMaterials } from "../../http-methods/materials";
    import { onDestroy, onMount } from "svelte";
    import KgCharts from "../lib/Charts/KgCharts.svelte";
    let promise;
    $: ferMats = [];
    $: noFerMats = []
    $: ferAccs = [];
    $: noFerAccs = []

    const showCharts = async () => setTimeout(()=> true,3000);
    onMount(async() => {
        const req = await getMaterials();
        const ferrosos = req.filter(obj => obj.tipo === 'Ferroso' && obj.unitsymbol === 'Kg');
        const noFerrosos = req.filter(obj => obj.tipo === 'No Ferroso' && obj.unitsymbol === 'Kg');
        ferMats = ferrosos.map(obj => obj.name);
        noFerMats = noFerrosos.map(obj => obj.name);
        ferAccs =  ferrosos.map(obj => obj.account);
        noFerAccs = noFerrosos.map(obj => obj.account);
        promise = showCharts();
    })
</script>

<div class="charts">
    {#await promise}
    <h3 class="text-primary">Cargando</h3>
    {:then}
    <KgCharts labels={ferMats} accounts={ferAccs} title={'Ferrosos'} />
    <KgCharts labels={noFerMats} accounts={noFerAccs} title={'No Ferrosos'} />
    {:catch}
    <h3>Algo salió mal... Reintentar</h3>
    {/await}
</div>

<style>
    .charts {
        display:flex;
        justify-content: space-around;
        align-items:center;
        flex-wrap:wrap;
        padding:2em;
        width:100%;
    }
</style>