

<script>
    import { createEventDispatcher } from "svelte";
    export let timeout = 2000;

    const dispatch = createEventDispatcher();

    function delayedClick(){
        setTimeout(() => {
            dispatch("delayedClick", {timePassed: timeout})
        }, timeout);
    }
</script>

<button on:click={delayedClick}><slot/></button>