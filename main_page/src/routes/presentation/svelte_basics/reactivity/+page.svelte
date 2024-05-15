<script lang="ts">
    import Prism from "svelte-prism";
    import Frame from "$lib/components/Frame.svelte";

    let counter = 0;
    $: double = counter * 2; // double will be updated whenever 'counter' changes.

    $: {
        // this block only runs when 'counter' changes, since 'double' is a derived state.
        console.log(`The counter is reading: ${counter}, double is ${double}.`);
        // do other stuff here.
    }
</script>

<h1 class="title">Reactivity and Events</h1>

<p>
    Declared variables are all "Reactive by default", the compile checks if any
    DOM elements depends on it, and updates the element when the variables
    changes.
</p>

<p>
    Variables can also depend on each other using the <span class="inline">$:</span> syntax (like
    useMemo). You can run a block of code when variables inside changes(kinda
    like useEffect).
</p>

<p>
    To interact with the variables, we can listen to mouse click event to change
    the counter. Event handlers uses the <span class="inline">on:event_name</span> syntax
</p>


<Prism language="svelte">
    {
`<script>
    let counter = 0;
    $: double = counter * 2; // double will be updated whenever 'counter' changes.

    $: {
        // this block only runs when 'counter' changes, since 'double' is a derived state.
        console.log(\`The counter is reading: \${counter}, double is \${double}.\`);
        // do other stuff here.
    }  
<\/script>

<p style="margin: 0.5rem;">
    Counter is current: {counter}, doubled is {double}
</p>
<button on:click={(e) => (counter += 1)}>Plus</button>
<button on:click={(e) => (counter -= 1)}>Minus</button>
`
    }
</Prism>

<Frame>
    <p style="margin: 0.5rem;">
        Counter is current: {counter}, doubled is {double}
    </p>
    <button on:click={(e) => (counter += 1)}>Plus</button>
    <button on:click={(e) => (counter -= 1)}>Minus</button>
</Frame>
