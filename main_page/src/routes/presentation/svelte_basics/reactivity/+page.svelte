<script lang="ts">
    import Prism from "svelte-prism";
    import Frame from "$lib/components/Frame.svelte";

    let counter = $state(0);
    let double = $derived(counter * 2); // double will be updated whenever 'counter' changes.

    $effect(() => {
        if (double > 20) {
            alert(`Your number is over 20 now: ${double}`);
        }
    });

    $inspect("Counter is: ", counter, "Doubled is: ", double, "Is double over 20?: ", double > 20);
</script>

<h1 class="title">$Derived states and Reactive $Effects</h1>

<p>
    Derived states can be declared with <b>$derived(...)</b>, or by using
    <a target="_blank" href="https://svelte.dev/docs/svelte/$derived#$derived.by">$derived.by(()=>...)</a>. Contents
    of the derived state is updated automatically whenever its dependencies are changed. (This is
    very similar to useMemo in React)
</p>

<p>
    When we want to <i>do things</i> whenever a state is changed, we can use a
    <a target="_blank" href="https://svelte.dev/docs/svelte/$effect">$effect(()=>...)</a>, the callback in $effect
    will run whenever states within changes.(This is similar to useEffect in React)
</p>

<p>
    Note: use <a target="_blank" href="https://svelte.dev/docs/svelte/$inspect">$inspect(var1, var2...)</a> instead of
    a effect to log a state whenever it changes! ($inspects are automatically removed when deployed to
    prod.)
</p>

<Prism language="svelte">
    {`<script>
    let counter = $state(0);
    let double = $derived(counter * 2); // double will be updated whenever 'counter' changes.

    $effect(() => {
        if (double > 20){
            alert(\`Your number is over 20 now: \${double}\`)
        }
    });

    $inspect("Counter is: ", counter, "Doubled is: ", double, "Is double over 20?: ", double > 20);
<\/script>

<p style="margin: 0.5rem;">
    Counter is current: {counter}, doubled is {double}
</p>

<!-- note the state, counter, is updated as if its a regular variable, instead of having to do useState/setState -->
<button onclick={(e) => (counter += 1)}>Plus</button>
<button onclick={(e) => (counter -= 1)}>Minus</button>
`}
</Prism>

<Frame>
    <p style="margin: 0.5rem;">
        Counter is current: {counter}, doubled is {double}
    </p>
    <!-- note the state, counter, is updated as if its a regular variable, instead of having to do useState/setState -->
    <button onclick={(e) => (counter += 1)}>Plus</button>
    <button onclick={(e) => (counter -= 1)}>Minus</button>
</Frame>
