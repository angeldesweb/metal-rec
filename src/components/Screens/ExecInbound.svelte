<script>
import { onDestroy } from "svelte";

    import { minbounds, step } from "../../store";
    import AddMaterial from "../lib/Forms/cutoms/AddMaterial.svelte";
    import InboundsForm from "../lib/Forms/InboundsForm.svelte";

    const views = [AddMaterial,InboundsForm]
    $: current = $step;

    onDestroy(() => minbounds.del());
</script>

<svelte:component this={views[current]}  />

