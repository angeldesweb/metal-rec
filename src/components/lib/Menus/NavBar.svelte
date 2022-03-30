<script>
    import RegisterSelect from './NavBars/RegisterSelect.svelte';
    import CloseSessionBtn from './NavBars/CloseSessionBtn.svelte';
    import SingleLinks from './NavBars/SingleLinks.svelte';
    import MobileButton from './NavBars/MobileButton.svelte';
    import { router } from '../../../store';
    import ExecuteSelect from './NavBars/ExecuteSelect.svelte';
    import ViewSelect from './NavBars/ViewSelect.svelte';
    
    $: collapse = true;
    $: collapsing = false;
    $: show = false;
    const showNav = () => {
        if(!show){
            collapse = false;
            collapsing = true;
            show = true;
            collapsing  = false;
            collapse = true
        }else {
            collapse = false;
            collapsing = true;
            show = false;
            collapsing = false;
            collapse = true
        }
    }
    const navigateTo = (e) => {
        router.navigate(Number(e.target.id));
    }
</script>
<nav class="navbar navbar-expand-md navbar-dark bg-primary">
    <div class="container-fluid">
        <a  id="0" on:click|preventDefault={navigateTo} class="navbar-brand" href="#/#">
            <h1>MetalRecuperadora</h1>
        </a>
        <MobileButton collapsed={show} onClick={showNav} />
        <div
            class:collapse
            class:show
            class:collapsing
            class="navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav me-auto">
                <RegisterSelect/>
                <ExecuteSelect/>
                <ViewSelect/>
                <SingleLinks/>
            </ul>
            <CloseSessionBtn/>
        </div>
    </div>
</nav>

<style>
    @media screen and (orientation:portrait){
        h1 {
            font-size:3vh;
            padding:0;
            margin:0;
        }
    }
    @media screen and (orientation:landscape){
        h1 {
            font-size:3vw;
            padding:0;
            margin:0;
        }
    }
</style>
