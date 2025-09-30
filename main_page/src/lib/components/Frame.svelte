<script>
    /** @type {{children?: import('svelte').Snippet}} */
    let { children } = $props();
</script>

<div class="frame">
    {@render children?.()}
</div>

<style>
    .frame {
        background-color: var(--bg1);
        padding: 1rem;
        border: 2px solid var(--bg5);
      
    }
</style>
