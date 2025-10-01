<script lang="ts">
    import Prism from "svelte-prism";
    import { fly, blur, fade } from "svelte/transition";
    import Frame from "$lib/components/Frame.svelte";

    let showFade = $state(false);
    let showFly = $state(false);
    let showBlur = $state(false);
</script>

<h1 class="title">Transition:</h1>

<p>
    Svelte provides multiple <a target="_blank" href="https://svelte.dev/docs/svelte/transition"
        >transition effects</a
    >
    out of the box. They will play whenever an element with transitions is created/destroyed. You
    can also write
    <a target="_blank" href="https://svelte.dev/docs/svelte/transition#Custom-transition-functions">your own.</a>
</p>

<p>
    Transitions are applied with <span class="inline"
        >{"transition:trans_func={{trans_params}}"}</span
    >. You can also use <b>in:</b> and <b>out:</b> to only play the animation when the element is created or
    detroyed.
</p>

<Prism language="svelte">
    {`<script>
    import { fly, blur, fade } from "svelte/transition";

    let showFade = $state(false);
    let showFly = $state(false);
    let showBlur = $state(false);
<\/script>

<button onclick={() => (showFade = !showFade)}>Toggle Fade</button>
<button onclick={() => (showFly = !showFly)}>Toggle Fly</button>

<button onclick={() => (showBlur = !showBlur)}>Toggle Blur</button>

{#if showFade}
    <div class="block" transition:fade>Fade</div>
{/if}

{#if showFly}
    <!-- transition functions can takes params, for example fly has x/y for where its flying in from -->
    <div class="block" transition:fly={{ duration: 300, x: -50, y: -100 }}>Fly</div>
{/if}

{#if showBlur}
    <div class="block" transition:blur>Blur</div>
{/if}
`}
</Prism>

<Frame>
    <button onclick={() => (showFade = !showFade)}>Toggle Fade</button>
    <button onclick={() => (showFly = !showFly)}>Toggle Fly</button>

    <button onclick={() => (showBlur = !showBlur)}>Toggle Blur</button>

    <div class="hor">
        {#if showFade}
            <div class="block" transition:fade>Fade</div>
        {/if}

        {#if showFly}
            <!-- transition functions takes params, for example fly has x/y for where its flying in from -->
            <div class="block" transition:fly={{ duration: 300, x: -50, y: -100 }}>Fly</div>
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
