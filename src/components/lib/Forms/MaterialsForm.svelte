<script>
    import { onDestroy, onMount } from 'svelte';
    import { MaterialFields } from '../../../tools/Forms/FormsFields/Materials';
    import { forms } from '../../../store'; 
    import Input from '../Fields/Input.svelte';
    import { handlers } from '../../../tools/Forms/Events';
    import { createMaterial } from '../../../http-methods/materials';
    import { responses } from '../../../tools/Toast';
    import Select from '../Fields/Select.svelte';
    
    onMount(() => forms.initializeForm(MaterialFields));
    onDestroy(() => forms.destroyForm());
    
    $: valids = Object.entries($forms).map(obj => obj[1]).map(obj => obj.success);
    $: body = Object.fromEntries(Object.entries($forms).map(obj => [obj[0],obj[1].value]));
    $: ready = valids[0] && valids[1]
    
    
    const handleFocus = () => console.log('')//(e) => handlers(e.target.id).FocusInput($forms,forms);
    const handleWrite = (e) => forms.write(e.target.id,e.target.value);
    const handleBlur = (e) => console.log('')//handlers(e.target.id).BlurInput($forms,forms,e)
    const handleChange = (e) => forms.changedInput(e.target.id);

    const handleSelectChange = (e) => forms.write(e.target.id,e.target.value);
    const handleSelectBlur = (e) => console.log('Select blurred');
    const handleSelectFocus = (e) => console.log('Select focused');

    const handleSubmit = async () => {
        let body = {};
        const result = Object.entries($forms).map(key => ({[key[0]]:$forms[key[0]].value}))
        result.map(obj => body = {...body,...obj})
        body.account = Number(body.account);
        const response = await createMaterial(body);
        response.success ? 
        responses.RegisterSuccess(response.message)
        : responses.RegisterError(response.message) 
        forms.cleanValues(MaterialFields);
    }

</script>


<form on:submit|preventDefault={handleSubmit}>
    <fieldset>
        <legend>Registro de material</legend>
        <fieldset class="form-group">
            {#each Object.entries($forms).map(obj => obj[1]) as input}
                {#if input.type === 'select'}
                <Select 
                    id={input.id}
                    onBlur={handleSelectBlur}
                    onFocus={handleSelectFocus}
                    onChange={handleSelectChange}
                />
                {:else}
                <Input 
                    id={input.id}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    onChange={handleChange}
                    onWrite={handleWrite}
                />
                {/if}

            {/each}
        </fieldset>
        <fieldset class="form-group">
            <button class="btn btn-primary">Registrar</button>
        </fieldset>
    </fieldset>
</form>

<style>
    form {
        margin:4em 1vw;
        width:min(450px,100%);
    }
    button {
        margin-top:1em;
    }
</style>