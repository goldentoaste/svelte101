<script lang="ts">
    import Prism from "svelte-prism";
</script>

<h1 class="title">Svelte File Structure</h1>

<p>
    Svelte files always contains 3 sections. Script, html, and style. Each
    looking similar to their vanilla counter part. <br /> <br />Svelte is
    designed to be
    <a target="_blank" href="https://github.com/sveltejs/svelte/issues/11052">almost</a> a superset
    of html, because turns out html is quite a natural way to write web pages, and
    so its nice to have Js in html, instead of html mixed in js functions like with JSX.
</p>

<Prism language="svelte" source="">
    {`<!-- <script> contains JS related things -->
<script> 
    import stuff from '$lib/bleh';  // imports goes here
    import { onMount } from "svelte";

    let show = false; // declare variables this componenet will use
    export let data = []; // or outside data can be passed in via 'export'

    // any other code that should run, function declarations etc all in the code block.
    onMount(()=>{
        // init on page loads...
    })
<\/script>

<!-- Anything not in <script> or <style> is considered html. All valid html all also valid here. -->
<h1 on:click={()=>{"as"}}>Hello!<\/h1>

<!-- Svelte has conditional rendering with new syntax, 'show' is a boolean that decides if the content is visible. -->
{#each show} 
    <div class="big"><!-- ... --><\/div>
{/if}

<!-- <style> contains css for this component. Advanced styling with sass, postcss, tailwind etc is possible with extra configs -->
<!-- css here is scope to this component only, so reusing class name is fine! -->
<style>
    .big {
        font-size: xx-large;
    }
<\/style>
`}
</Prism>
