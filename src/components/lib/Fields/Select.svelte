<script>
    import { forms } from '../../../store';
    export let id;
    $: value = $forms[id].value;
    export let onBlur;
    export let onFocus;
    export let onChange;
</script>

<div 
    class:has-success={$forms[id].success}
    class:has-danger={$forms[id].invalid}
    class="form-group"
>
    <label 
        class="form-label mt-4" 
        for={id}
    >{$forms[id].label}</label>

    <select
        on:focus={onFocus}
        on:blur={onBlur} 
        on:change={onChange}
        {id}
        bind:value
        placeholder={$forms[id].placeholder}
        disabled={$forms[id].disabled}
        class:is-valid={$forms[id].success}
        class:is-invalid={$forms[id].invalid}
        class="form-select">
        <option value="" disabled selected hidden>Seleccione una opción</option>
        {#each $forms[id].options as option}
            <option value={option}>{option}</option>
        {/each}
    </select>
    <div 
        class:valid-feedback={$forms[id].success}
        class:invalid-feedback={$forms[id].invalid}
    >{$forms[id].feedback}</div>
</div>