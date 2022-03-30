<script>
    import { user , authUser } from "../../../../store";

    const closeSession = () => {
        user.logout();
        authUser.clearUser();
    }
</script>

<div class="d-flex">
    <button
        on:click={closeSession} 
        class="btn btn-primary my-2 my-sm-0" 
    >Cerrar Sesión</button>
</div>