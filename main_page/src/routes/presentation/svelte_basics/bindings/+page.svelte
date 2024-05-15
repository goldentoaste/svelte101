<script lang="ts">
    import Prism from "svelte-prism";

    import Frame from "$lib/components/Frame.svelte";

    let text = "";

    let items: string[] = [];
</script>

<h1 class="title">Variable Bindings and More on Lists</h1>

<p>
    Properties of DOM elements and components can be retrieved using <span class="inline">{"bind:<prop_name>=<var_name>"}</span>.
    Usually throguh attributes, data flow from parent to child. "bind:" provides
    a easy way to propagate data from child to parent.
</p>

<p>
    In prev slide, #each is used render a static list. #each is also reactive,
    similar to #if, however its not enough to modify the list, you will need to
    re-assign the list back to variable. Reactvity in Svelte is based on
    variable assignment. (This is being improved in Svelte5)
</p>

<p>The below example shows bind: and #each working together.</p>

<Prism language="svelte">
    {`<script>
    let text = "";
    let items = [];    
<\/script>

<form on:submit={() => {
        items = [...items, text];
        text = "";
    }}>
    <input type="text" bind:value={text} placeholder="type here!" />
    <input type="submit" value="Add"/> 
</form>


<div class="ver">
    {#each items as item, index}
        <span> {index + 1}. {item}</span>
    {/each}
</div>
`}
</Prism>

<Frame>
  
    <form on:submit={() => {
            items = [...items, text];
            text = "";
        }}>
        <input type="text" bind:value={text} placeholder="type here!" />
        <input type="submit" value="Add"/> 
    </form>
    

    <div class="ver">
        {#each items as item, index}
            <span> {index + 1}. {item}</span>
        {/each}
    </div>
</Frame>
