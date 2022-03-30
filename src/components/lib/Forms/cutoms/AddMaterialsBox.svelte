<script>
    export let name;
    export let account;
    export let materials;
    export let store;
    export let addFlag;
    export let removeFlag;
    export let onSelect;
    export let onInput;
    $: console.log('INTERNO: ',name)
</script>

<div class="add-box">
    {#if materials.length > 0}
    <ul class="list-group">
        {#each materials as material , i}
        <div class="alert alert-dismissible alert-primary">
            <button
                on:click={removeFlag}
                id={material.name} 
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"></button>
            <strong>{material.name}</strong> Cantidad: {material.account} {material.unitType}
          </div>
        {/each}
    </ul>
    {:else}
        <span 
            style:font-size='2vw'
            class="text-muted"
        >No se han añadido elementos</span>
    {/if}
    <div class="inpts input-group">
        <select 
            on:change={onSelect}
            bind:value={name}
            class="form-select"
        >
        {#each store as option }
            <option value={option.name} >{option.name}</option>
        {/each}
        </select>
        <input class="form-control" type="number" on:input={onInput} bind:value={account}  >
        <button
            disabled={name === '' || account === 0 } 
            class="btn btn-primary"
            on:click={addFlag}>
            Añadir
        </button>
    </div>
</div>

<style>
    .add-box {
        display:flex;
        flex-direction: column;
        align-content: flex-start;
        padding:1em;
        height:90%;
    }
    
    .inpts {
        padding: 1em;;
    }
</style>