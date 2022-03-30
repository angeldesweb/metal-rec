<script>
    import LoginHeader from '../lib/Headers.js/LoginHeader.svelte';
    import LoginForm from '../lib/Forms/LoginForm.svelte';
</script>

<div class="app">
    <LoginHeader/>
    <div class="form-box">
        <LoginForm/>
    </div>
</div>

<style>
    .app {
        min-width:100vw;
        min-height:100vh;
    }
    .form-box {
        display:flex;
        justify-content:center;
        align-items: center;
        height:100%;
    }
</style>