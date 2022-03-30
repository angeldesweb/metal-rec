<script>
    export let collapsed = false;
    export let onClick;
</script>


<button
    on:click={onClick}
    class:collapsed
    class="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse"
    data-bs-target="#navbarColor01"
    aria-controls="navbarColor01"
    aria-expanded={collapsed}
    aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>