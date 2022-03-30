<script>
    import { router } from "../../../../store";

    $: isVisible = false;
    const showBuscar = () => isVisible = true;
    const closeBuscar = () => isVisible = false;
    const navigateTo = (e) => router.navigate(e.target.id)
</script>

<li on:mouseleave={closeBuscar} class="nav-item dropdown">
    <a id="" 
        class:show={isVisible}
        class="nav-link dropdown-toggle"
        data-bs-toggle="dropdown" href="#/#"
        role="button"
        on:click|preventDefault={showBuscar}
        aria-haspopup="true" 
        aria-expanded={isVisible}
        >Ver</a>
    <div 
        class:show={isVisible}
        class="dropdown-menu"
        data-bs-popper:none={isVisible}
    >
        <a id="7" on:click|preventDefault={navigateTo} class="dropdown-item" href="#/#">Almacén</a>
        <a id="8" on:click|preventDefault={navigateTo} class="dropdown-item" href="#/#">Entradas</a>
        <a id="9" on:click|preventDefault={navigateTo} class="dropdown-item" href="#/#">Salidas</a>
        <a id="10" on:click|preventDefault={navigateTo} class="dropdown-item" href="#/#">Ventas</a>
</li>