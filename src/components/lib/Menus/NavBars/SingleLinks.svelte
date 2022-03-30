<script>
    import { router } from "../../../../store";

    const navigateTo = (e) => router.navigate(e.target.id)
</script>


<li class="nav-item">
    <a id="11" on:click|preventDefault={navigateTo} class="nav-link" href="#/#">Perfil
        <span class="visually-hidden">(current)</span>
    </a>
</li>