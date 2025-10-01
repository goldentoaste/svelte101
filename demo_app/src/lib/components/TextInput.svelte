<script lang="ts">
    interface Props {
        value?: string;
        placeholder?: string;
        label?: string;
        style?: string;
    }

    let {
        value = $bindable("Default name"),
        placeholder = "type here...",
        label = "",
        style = ""
    }: Props = $props();
</script>

<div id="inputHolder" {style}>
    {#if label.length > 0}
        <label for="textinput">{label}</label>
    {/if}
    <input id="textinput" type="text" bind:value {placeholder}/>
</div>

<style>
    input {
        border: var(--focus) 2px solid;
        border-radius: 5px;
        background-color: var(--fg0);
        padding: 0.5rem;
        margin: 0.25rem;

        outline: 0;

        flex:1;
    }

    #inputHolder {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
</style>
