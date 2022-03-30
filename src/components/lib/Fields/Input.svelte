<script>
    import { forms } from '../../../store';

    export let id;
    $: value = $forms[id].value;
    export let onBlur;
    export let onFocus;
    export let onChange;
    export let onWrite;

    const setType = (node) => node.type = $forms[id].type;
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
    <input
        on:input={onWrite}
        on:focus={onFocus}
        on:blur={onBlur} 
        
        on:change={onChange}
        

        disabled={$forms[id].disabled}
        class:is-valid={$forms[id].success}
        class:is-invalid={$forms[id].invalid}
        class="form-control form-control-sm"
        {id}
        bind:value
        use:setType
        placeholder={$forms[id].placeholder}
    >
    <div 
        class:valid-feedback={$forms[id].success}
        class:invalid-feedback={$forms[id].invalid}
    >{$forms[id].feedback}</div>
</div>