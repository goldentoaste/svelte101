<script lang="ts">
    import Frame from "$lib/components/Frame.svelte";
    import { componentScript } from "./shared";
    import SpookyButton from "./SpookyButton.svelte";

    import Prism from "svelte-prism";
</script>

<h1 class="title">Component</h1>

<p>
    Each .svelte is a single component, they can be imported into other svelte files to be re-used
</p>

<p>
    Components can take in props just like a html element can. We read them using
    <a target="_blank" href="https://svelte.dev/docs/svelte/$props">$props() rune. </a>. (Using typescript typing
    for props is strongly recommended!)
</p>

<!-- <p>
    We can <b>bind:</b> props similar to a Html element, using the
    <a href="https://svelte.dev/docs/svelte/$bindable">$bindable()</a> rune.
</p> -->

<p>
    We can also accept <a target="_blank" href="https://svelte.dev/docs/svelte/snippet">"Snippets"</a> as a prop, in
    order to write more generic components. <b>children</b> is a speical prop name, it will be the
    content between this component's tags, when used. The special
    <a target="_blank" href="https://svelte.dev/docs/svelte/@render">{"{@render Snip(a, b)}"}</a> syntax is used to display
    a Snippet.
</p>

<Prism language="svelte">
    {componentScript}
</Prism>

<Prism language="svelte">
    {`<!-- the parent .svelte file -->
<script>
    import SpookyButton from "./SpookyButton.svelte";
<\/script>

<!-- child forwarded the onclick event, and we are handling it in parent -->
<SpookyButton ghostName="blinky" onclick={() => alert("You are being haunted!")}>
    BOO! <!-- stuff between tags replaces <slot/> inside  -->
</SpookyButton>
`}
</Prism>

<Frame>
    Spooky button Here!
    <!-- child accepts the onclick event, and we are handling it in parent -->
    <SpookyButton ghostName="blinky" onclick={() => alert("You are being haunted!")}>
        BOO! <!-- stuff between tags is passed to "children" props to the comp-->
    </SpookyButton>
</Frame>
