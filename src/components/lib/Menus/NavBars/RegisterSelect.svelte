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
        >Registrar</a>
    <div 
        class:show={isVisible}
        class="dropdown-menu"
        data-bs-popper:none={isVisible}
    >
        <a on:click|preventDefault={navigateTo} id="1" class="dropdown-item" href="#/#">Material</a>
        <a on:click|preventDefault={navigateTo} id="2" class="dropdown-item" href="#/#">Proveedor</a>
        <a on:click|preventDefault={navigateTo} id="3" class="dropdown-item" href="#/#">Cliente</a>
</li>