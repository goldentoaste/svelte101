<script>
    import Frame from "$lib/components/Frame.svelte";
    import Prism from "svelte-prism";
    let showItem = false;
    let foodType = "pizza";
</script>

<h1 class="title">Conditional Rendering (If block)</h1>

<p>
    Svelte uses the <span class="inline">{"{#if} and {#else:}"}</span> (an "if block") syntax to do conditional rendering. It
    is similar to if else statements in most languages and can be nested. This avoids
    need for nested ternery like in JSX.
</p>

<Prism language="svelte">
    {`<script>
    let showItem = false;
    let foodType = "pizza";    
<\/script>

<button on:click={(e) => (showItem = !showItem)}>Toggle label</button>
<button
    on:click={(e) => (foodType = foodType === "pizza" ? "burger" : "pizza")}
>
    Toggle food
</button>

{#if showItem}
    <h2>Hello!</h2>
{/if}

{#if foodType === "pizza"}
    <p>I want pizza! 🍕</p>
{:else}
    <p>I actually want burger! 🍔</p>
{/if}
`}
</Prism>

<Frame>
    <button on:click={(e) => (showItem = !showItem)}>Toggle label</button>
    <button
        on:click={(e) => (foodType = foodType === "pizza" ? "burger" : "pizza")}
    >
        Toggle food
    </button>

    {#if showItem}
        <h2>Hello!</h2>
    {/if}

    {#if foodType === "pizza"}
        <p>I want pizza! 🍕</p>
    {:else}
        <p>I actually want burger! 🍔</p>
    {/if}
</Frame>
