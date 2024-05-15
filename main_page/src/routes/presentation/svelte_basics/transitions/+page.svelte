<script lang="ts">
    import Prism from "svelte-prism";
    import { fly, blur, fade } from "svelte/transition";
    import Frame from "$lib/components/Frame.svelte";

    let showFade = false;
    let showFly = false;
    let showBlur = false;
</script>

<h1 class="title">Transitions</h1>

<p>
    Svelte provides multiple transitions for DOM elements out of the box (you
    write your own too!). Transitions plays whenever the element is created for
    removed (with conditional rendering usually).
</p>

<p>
    Transitions are applied with <span class="inline">{"transition:trans_func={{trans_params}}"}</span>. You can also use "in:" and "out:" to only play the animation
    when the element is created or detroyed.
</p>

<Prism language='svelte'>
    {`<script>  
    import { fly, blur, fade } from "svelte/transition";
    let showFade = false;
    let showFly = false;
    let showBlur = false;
<\/script>

<button on:click={(e) => (showFade = !showFade)}>Toggle Fade</button>
<button on:click={(e) => (showFly = !showFly)}>Toggle Fly</button>
<button on:click={(e) => (showBlur = !showBlur)}>Toggle Blur</button>

{#if showFade}
    <div transition:fade>Fade</div>
{/if}

{#if showFly}
<!-- transition functions takes params, for example fly has x/y for where its flying in from -->
    <div transition:fly={{duration:300, x:-50, y:-100}}>Fly</div>
{/if}

{#if showBlur}
    <div transition:blur>Blur</div>
{/if}
`}
</Prism>

<Frame>
    <button on:click={(e) => (showFade = !showFade)}>Toggle Fade</button>
    <button on:click={(e) => (showFly = !showFly)}>Toggle Fly</button>

    <button on:click={(e) => (showBlur = !showBlur)}>Toggle Blur</button>

    <div class="hor">
        {#if showFade}
            <div class="block" transition:fade>Fade</div>
        {/if}

        {#if showFly}
            <!-- transition functions takes params, for example fly has x/y for where its flying in from -->
            <div
                class="block"
                transition:fly={{ duration: 300, x: -50, y: -100 }}
            >
                Fly
            </div>
        {/if}

        {#if showBlur}
            <div class="block" transition:blur>Blur</div>
        {/if}
    </div>
</Frame>

<style>
    .block {
        border: 2px solid var(--bg5);
        background-color: var(--fg1);
        color: var(--bg4);
        width: fit-content;
        padding: 1rem;
        font-size: larger;
    }
</style>
