<script>
    import { router } from "../../../../store"; 
    $: isVisible = false;
    const showRegister = () => isVisible = true;
    const closeRegister = () => isVisible = false;
    const navigateTo = (e) => router.navigate(e.target.id)
</script>

<li 
    on:mouseleave={closeRegister}
    class="nav-item dropdown">
    <a id="" 
        class:show={isVisible}
        class="nav-link dropdown-toggle"
        data-bs-toggle="dropdown" href="#/#"
        role="button"
        on:click|preventDefault={showRegister}
        aria-haspopup="true" 
        aria-expanded={isVisible}
        >Ejecutar</a>
    <div 
        class:show={isVisible}
        class="dropdown-menu"
        data-bs-popper:none={isVisible}
    >
        <a on:click|preventDefault={navigateTo} id="4" class="dropdown-item" href="#/#">Ingreso</a>
        <a on:click|preventDefault={navigateTo} id="5" class="dropdown-item" href="#/#">Salida</a>
        <a on:click|preventDefault={navigateTo} id="6" class="dropdown-item" href="#/#">Venta</a>
</li>