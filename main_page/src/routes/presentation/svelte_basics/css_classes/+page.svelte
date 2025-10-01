<script>
    import Frame from "$lib/components/Frame.svelte";
    import Prism from 'svelte-prism'
    let color = $state("red");
    let isBig = $state(false);
</script>

<h1 class="title">Conditional Css class</h1>

<p>
    A common way to style elements is by adding and removing classes. Svelte
    uses <a href="https://svelte.dev/docs/svelte/class">{"class:name={condition}"}</a> to easily do so. The condition may be anything
    that evals to a boolean, or if there is a variable with same name as the class,
    the condition may be missing.
</p>


<Prism language='svelte'>
    {
`<script>
    let color = $state("red");
    let isBig = $state(false);
<\/script>

<div
    class:isBig
    class:red={color === "red"}
    class:green={color === "green"}

    onclick={e=>isBig = !isBig}
    onmouseenter={e=>color='green'}
    onmouseleave={e=>color='red'}
>
    BOX
</div>

<style>
    div {
        width: fit-content;
        cursor: pointer;
        padding: 1rem;
        border: 2px solid var(--bg5);
        font-size: x-large;
        transition:
            transform 0.2s ease-out,
            background-color 0.2s ease-out;
    }
    .red {
        background-color: var(--red);
    }
    .green {
        background-color: var(--green);
    }
    .isBig{
        transform: scale(1.5);
    }
</style>

`
    }
</Prism>

<Frame>
    <div
        class:isBig
        class:red={color === "red"}
        class:green={color === "green"}

        onclick={e=>isBig = !isBig}
        onmouseenter={e=>color='green'}
        onmouseleave={e=>color='red'}
    >
        BOX
    </div>
</Frame>

<style>
    div {
        width: fit-content;
        cursor: pointer;
        padding: 1rem;
        border: 2px solid var(--bg5);
        font-size: x-large;
        transition:
            transform 0.2s ease-out,
            background-color 0.2s ease-out;
    }
    .red {
        background-color: var(--red);
    }
    .green {
        background-color: var(--green);
    }
    .isBig{
        transform: scale(1.5);
    }
</style>
