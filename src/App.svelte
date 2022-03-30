<script>
    import Themes from "./components/lib/Themes.svelte";
    import Login from "./components/containers/Login.svelte";
    import Main from "./components/containers/Main.svelte";
    import { user } from "./store";
    
    const components = [Login,Main]
</script>

<Themes/>
<svelte:component this={$user.isAuth ? components[1] : components[0]}/>