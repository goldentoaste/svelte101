<!-- <script> contains JS related things -->
<script> 
    import stuff from '$lib/bleh';  // imports goes here
    import { onMount } from "svelte";

    let show = false; // declare variables this componenet will use
    export let data = []; // or outside data can be passed in via 'export'

    // any other code that should fun, function declarations etc all in the code block.
    onMount(()=>{
        // init on page loads...
    })
</script>

<!-- Anything not in <script> or <style> is considered html. All valid html all also valid here. -->
<h1 on:stuff=()>Hello!</h1>

<!-- Svelte has conditional rendering with new syntax, 'show' is a boolean that decides if the content is visible. -->
{#if show} 
    <div class="big"> </div>
{/if}

<!-- <style> contains css for this component. Advanced styling with sass, postcss, tailwind etc is possible with extra configs -->
<!-- css here is scope to this component only, so reusing class name is fine! -->
<style>
    .big {
        font-size: xx-large;
    }
</style>