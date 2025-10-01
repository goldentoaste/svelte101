<script lang="ts">
    import Frame from "$lib/components/Frame.svelte";
    import Prism from "svelte-prism";
    import UpperCaseInput from "./UpperCaseInput.svelte";
    import { mainUpper, upperCase } from "./shared";

    let text = $state("stuff");
</script>

<h1 class="title">Component props $bindable</h1>

<p>
    Just like a Html element, components can have <a target="_blank" href="https://svelte.dev/docs/svelte/$bindable"
        >$bindable</a
    >
    props too, by declaring them to be bindable when accepting $props:
    <b>{"const {stuff = $bindable('default'),...} = $props(); "}</b>. This ensures the binded
    variable is always the same between parent and child component.
</p>
<Prism language="svelte">
    {upperCase}
</Prism>

<Prism language="svelte">
    {mainUpper}
</Prism>

<Frame>
    <UpperCaseInput bind:text />
</Frame>
