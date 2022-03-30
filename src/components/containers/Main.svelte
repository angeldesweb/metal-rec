<script>
    import { router } from "../../store";
    import MainHeader from "../lib/Headers.js/MainHeader.svelte";
    import Home from "../Screens/Home.svelte";
    import RegisterMaterial from "../Screens/RegisterMaterial.svelte";
    import RegisterProvider from "../Screens/RegisterProvider.svelte";
    import RegisterClient from "../Screens/RegisterClient.svelte";
    import ExecInbound from "../Screens/ExecInbound.svelte";
    import ExecuteOutbound from "../Screens/ExecuteOutbound.svelte.svelte";
    import ExecuteSell from "../Screens/ExecuteSell.svelte";
    import TableStore from "../Screens/TableStore.svelte";
    import TableInbounds from "../Screens/TableInbounds.svelte";
    import TableOutbounds from "../Screens/TableOutbounds.svelte";
    import TableSell from "../Screens/TableSell.svelte";
    import Session from "../Screens/Session.svelte";


    const comps = [
        Home,
        RegisterMaterial,
        RegisterProvider,
        RegisterClient,
        ExecInbound,
        ExecuteOutbound,
        ExecuteSell,
        TableStore,
        TableInbounds,
        TableOutbounds,
        TableSell,
        Session
    ]
</script>

<div class="main">
    <div class="header">
        <MainHeader/>
    </div>
    <div class="content">
        <svelte:component this={comps[$router]} />
    </div>
</div>

<style>
    .main {
        width:100vw;
        height:100vh;
    }
    .header {
        height:20%;
    }
    .content {
        display:flex;
        justify-content:center;
        align-items: center;
        height: 70%;;
    }
</style>

