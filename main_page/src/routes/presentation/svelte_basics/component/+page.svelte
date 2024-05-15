<script lang="ts">
    import Frame from "$lib/components/Frame.svelte";
    import SpookyButton from "./SpookyButton.svelte";

    import Prism from 'svelte-prism';

</script>

<h1 class="title">Component</h1>

<p>
    We've seen various interactive Ui demos in the previous pages, it would be
    nice to make them into a component so that we can reuse them through our
    site.
</p>

<p>
    Each .svelte is a single component, they can be imported into other svelte
    files to be used. Components always starts with a capital letter.
</p>

<p>
    Component can <span class="inline">export</span> their variables so that the owner of it can pass in
    props
</p>

<p>
    Component can 'forward' events, by writting <span class="inline">on:event_name</span>, but without a handler.
    Forwarded events could be handled by owner of the component.
</p>

<p>
    Component can also declare a slot, which lets the parent defind the inner
    content in a more intuitive and expressive way.
</p>

<Prism language="svelte">
{
`<!-- SpookyButton.svelte -->
<script>
    export let ghostName = "";
<\/script>

<!-- forward the on:click event by declare but handling it -->
<button on:click>
    <!-- <slot/> is like a place holder, parent can put anything between tags and replace this <slot/> -->
    {ghostName} says: <slot/>
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
}
</Prism>

<Prism language="svelte">
    {
`<!-- the parent .svelte file -->
<script>
    import SpookyButton from "./SpookyButton.svelte";
<\/script>

<!-- child forwarded the onclick event, and we are handling it in parent -->
<SpookyButton ghostName="blinky" on:click={() => alert("You are being haunted!")}>
    BOO! <!-- stuff between tags replaces <slot/> inside  -->
</SpookyButton>
`
    }
</Prism>

<Frame>
    Spooky button Here!
    <!-- child forwarded the onclick event, and we are handling it in parent -->
    <SpookyButton ghostName="blinky" on:click={() => alert("You are being haunted!")}>
        BOO! <!-- stuff between tags replaces <slot/> inside  -->
    </SpookyButton>
</Frame>
