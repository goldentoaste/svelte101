

<script>
    import { createBubbler } from 'svelte/legacy';

    const bubble = createBubbler();
    /** @type {{ghostName?: string, children?: import('svelte').Snippet}} */
    let { ghostName = "", children } = $props();
</script>

<!-- forward the on:click event by declare but handling it -->
<button onclick={bubble('click')}>
    {ghostName} says: {@render children?.()}
</button>

<style>
    button {
        background-color: var(--bg4);
        color: var(--bg4);
        border: 2px solid var(--bg5);
        padding: 1rem;
        margin: 1rem;
        transition: all 0.3s ease-out;
    }
    button:hover { /* button appears on hover */
        background-color: var(--fg1);
        color:var(--bg2);
    }
</style>