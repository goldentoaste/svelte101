
export const componentScript = `<!-- SpookyButton.svelte -->
<script lang="ts">
    import type { Snippet } from "svelte";
    interface Props {
        ghostName: string;
        onclick: () => void;
        children: Snippet;
    }

    let { ghostName = "", onclick, children }: Props = $props();
</script>

<!-- forward the onclick event by declare but handling it -->
<button {onclick}>
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
`