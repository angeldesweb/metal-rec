<script>
    import TableOuts from "../lib/Tables/TableOuts.svelte";
</script>

<div class="view">
    <div class="legends">
        <span class="badge bg-success">Atendidas</span>
        <span class="badge bg-warning">Pendientes</span>
    </div>
    <legend>Ingresos de material</legend>
    <TableOuts/>
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