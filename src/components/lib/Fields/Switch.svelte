<script>
    export let check = false;
    export let label = '';
    export let onSwitch;
</script>

<fieldset>
    <div class="form-check form-switch">
        <input class="form-check-input" on:change={onSwitch} type="checkbox" id="flexSwitchCheckChecked" bind:checked={check}>
        <label class="form-check-label" for="flexSwitchCheckChecked">{label}</label>
    </div>
</fieldset>