<script>
    import { theme } from "../../store";
</script>

<svelte:head>
    {#if !$theme}
    <link rel="stylesheet" href="/styles/darkly.min.css">
    {:else}
    <link rel="stylesheet" href="/styles/flatly.min.css">
    {/if}
</svelte:head>