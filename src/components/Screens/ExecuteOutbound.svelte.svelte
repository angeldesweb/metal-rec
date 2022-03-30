<script>
    import { onDestroy } from "svelte";
    
    import { minbounds, step } from "../../store";
    import AddMaterial from "../lib/Forms/cutoms/AddMaterial.svelte";
    import OutBoundsForm from "../lib/Forms/OutBoundsForm.svelte";
    
    const views = [AddMaterial,OutBoundsForm]
    $: current = $step;
    
    onDestroy(() => minbounds.del());
</script>
    
<svelte:component this={views[current]}  />