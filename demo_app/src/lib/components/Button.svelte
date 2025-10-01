<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        disabled?: boolean;
        style?: string;
        onclick: () => void;
        children: Snippet;
    }

    let { disabled = false, style = "", onclick, children }: Props = $props();
</script>

<!-- bubbles on click -->
<button class:disabled {disabled} {onclick} {style}>
    {@render children?.()}
</button>

<style>
    button {
        border: var(--focus) 2px solid;
        border-radius: 5px;
        background-color: var(--fg0);
        padding: 0.4rem 0.5rem;
        margin: 0.25rem 0.25rem;

        transition: all ease-out 250ms;
    }

    button:hover {
        transform: scale(1.05);
        box-shadow: 0 0 10px 5px var(--fg0);
    }

    button:active {
        transform: scale(0.96);
        filter: brightness(0.95);
    }

    .disabled {
        filter: brightness(0.6);
        pointer-events: none;
    }
</style>
