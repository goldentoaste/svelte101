<script lang="ts">
    import Prism from "svelte-prism";
</script>

<h1 class="title">Svelte File Structure</h1>

<p>
    Svelte files always contains 3 sections. <b>Script</b>, <b>HTML</b>, and <b>Style</b>. Each
    looking similar to their vanilla counter part. <br /> <br />Svelte is designed to be
    <a target="_blank" href="https://github.com/sveltejs/svelte/issues/11052">almost</a> a superset
    of html, because turns out html is quite a natural way to write web pages, and so its nice to
    have Js in html, instead of html mixed in js functions like with JSX.

    <br /> <br />
    Svelte 5 introduced <a href="https://svelte.dev/docs/svelte/what-are-runes">"runes"</a> for state
    managing states, which is similar to their React counter part, but much more powerful.
</p>

<Prism language="svelte" source="">
    {`<!-- <script> contains JS related things -->
<script lang="ts"> 
    import stuff from '$lib/bleh';  // imports goes here
    import { onMount } from "svelte";

    interface Props { // any TS/JS feature works in this script block
        name: string;
        age: number;
    }

    let { name, age } : Props = $props() // or data can be passed in via props
    let show = $state(false); // declare states using $state rune
    let complexState = $state({
        abc: "???",
        xyz: [1, 2, 3]
    });
    // $derived() rune to get derived states, dependencies in inferred!
    let xyzItems = $derived(complexState.xyz.length); 
    
    $effect(()=>{
        // use reactive states to do things outside of the state mangement model
        alert(\`xyz now has \${xyzItems} items!\`)
    });

    onMount(()=>{
        // init on page loads...
    })
<\/script>

<!-- Anything not in <script> or <style> is considered html. All valid html all also valid here. -->
<h1 onclick={()=>{
    console.log("??")
}}>
    Hello!
<\/h1>

<!-- Svelte has conditional rendering with new syntax, 'show' is a boolean that decides if the content is visible. -->
{#if show} 
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
