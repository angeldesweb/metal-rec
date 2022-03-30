<script>
    import TableMaterials from "../lib/Tables/TableMaterials.svelte";
</script>

<div class="view">
    <div class="legends">
        <span class="badge bg-dark">Ferroso</span>
        <span class="badge bg-light">No Ferroso</span>
    </div>
    <legend>Materiales en stock</legend>
    <TableMaterials/>
</div>

<style>
    .view {
        width:80%;
        display:flex;
        flex-direction:column;
        text-align:center;
    }
    .legends {
        display:flex;
        width:100%;
        padding:1em;
        justify-content: space-around;
        flex-flow:row wrap;
    }
</style>
