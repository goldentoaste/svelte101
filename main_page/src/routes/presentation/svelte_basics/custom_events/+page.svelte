<script lang="ts">
    import Frame from "$lib/components/Frame.svelte";
    import Prism from "svelte-prism";
    import DelayedButton from "./DelayedButton.svelte";
</script>

<h1 class="title">Emitting Custom Events</h1>

<p>
    Custom events are created using the <span class="inline">createEventDispatcher()</span> function,
    which returns a function we can call whenever the event should be emitted.
</p>

<Prism language="svelte">
    {`<!-- DelayedButton.svelte -->
<script>
    import { createEventDispatcher } from "svelte";
    export let timeout = 2000;

    const dispatch = createEventDispatcher();

    function delayedClick(){
        setTimeout(() => {
            dispatch("delayedClick", {timePassed: timeout})
        }, timeout);
    }
<\/script>

<button on:click={delayedClick}><slot/></button>
`}
</Prism>


<Prism language="svelte" >
    {
`<!-- main page -->
<DelayedButton
    on:delayedClick={(e) => {
        alert(\`This button was clicked \${e.timePassed}ms ago.\`);
    }}>
    Click me! (get back to you later.)
</DelayedButton>`
    }
</Prism>

<Frame>
    <DelayedButton
        on:delayedClick={(e) => {
            alert(`This button was clicked ${e.detail.timePassed}ms ago.`);
        }}>
        Click me! (get back to you later.)
    </DelayedButton>
</Frame>
