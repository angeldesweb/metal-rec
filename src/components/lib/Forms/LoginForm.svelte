<script>
    import { onDestroy, onMount } from 'svelte';
    import { LoginFields } from '../../../tools/Forms/FormsFields/Login';
    import { authUser, forms, user } from '../../../store'; 
    import Input from '../Fields/Input.svelte';
    import { handlers } from '../../../tools/Forms/Events';
    import { getUser, signin } from '../../../http-methods/session';
    import { responses } from '../../../tools/Toast';
    import moment from 'moment';
    import 'moment/locale/es-mx';
    moment.locale('es-mx');
    
    onMount(() => forms.initializeForm(LoginFields));
    onDestroy(() => forms.destroyForm());

    $: valids = Object.entries($forms).map(obj => obj[1]).map(obj => obj.success);
    $: body = Object.fromEntries(Object.entries($forms).map(obj => [obj[0],obj[1].value]));
    $: ready = valids[0] && valids[1]
    $: validUser = $authUser;
    
    const handleFocus = (e) => handlers(e.target.id).FocusInput($forms,forms);
    const handleWrite = (e) => forms.write(e.target.id,e.target.value);
    const handleBlur = (e) => handlers(e.target.id).BlurInput($forms,forms,e)
    const handleChange = (e) => forms.changedInput(e.target.id);

    const handleSubmit = async () => {
        const resp = await signin(body);
        if(resp.success){ 
            validUser = await getUser(resp.user.email);
            console.log(validUser.lastLogin)
            let authUser = {
                email:resp.user.email,
                role:validUser.role,
                // @ts-ignore
                lastLogin: moment(validUser.lastLogin.toDate()).format('dd MM y')
            }
            console.log(authUser);
        }
        
        resp.success ? 
        responses.loginSuccess(resp.message)
        : responses.loginError(resp.message) 
        forms.cleanValues(LoginFields);
        if(resp.success) user.signin({id:resp.user.uid,role:'Dev',isAuth:true});
    }

</script>


<form on:submit|preventDefault={handleSubmit}>
    <fieldset>
        <legend>Iniciar sesión</legend>
        <fieldset class="form-group">
            {#each Object.entries($forms).map(obj => obj[1]) as input}
                <Input 
                    id={input.id}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    onChange={handleChange}
                    onWrite={handleWrite}
                />
            {/each}
        </fieldset>
        <fieldset class="form-group">
            <button disabled={!ready} class="btn btn-primary">Inciar sesión</button>
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
