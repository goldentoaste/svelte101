

<script>
    import { createEventDispatcher } from "svelte";
    /** @type {{timeout?: number, children?: import('svelte').Snippet}} */
    let { timeout = 2000, children } = $props();

    const dispatch = createEventDispatcher();

    function delayedClick(){
        setTimeout(() => {
            dispatch("delayedClick", {timePassed: timeout})
        }, timeout);
    }
</script>

<button onclick={delayedClick}>{@render children?.()}</button>