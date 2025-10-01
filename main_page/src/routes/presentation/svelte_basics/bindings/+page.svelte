<script lang="ts">
    import Prism from "svelte-prism";

    import Frame from "$lib/components/Frame.svelte";

    interface CheckListItem {
        name: string;
        checked: boolean;
    }

    let text = $state("");
    let items: CheckListItem[] = $state([]);
</script>

<h1 class="title">Variable Bindings and More on Lists</h1>

<p>
    You can make a "two-binding" between state and most Html element's attributes, using the <a
        href="https://svelte.dev/docs/svelte/bind">bind:</a
    >
    syntax. This ensure the element's value and the state's value is <i>always the same.</i>
</p>

<p>
    The following example we use <b>{"bind:value={text}"}</b> to read the input's <i>value</i> and
    puts it in state <i>text</i>. We can also clear the input field by clearing the variable.
</p>

<p>
    Note the <b>items.push()</b> line, modifying pritive array and objects also triggers re-render.
    Wrappers for
    <a href="https://svelte.dev/docs/svelte/svelte-reactivity">other data structures</a> is also provided.
</p>

<p>
    Also note the line <b>{"bind:checked={item.checked}"}</b>, you can also bind to list item or
    object props.
</p>
<Prism language="svelte">
    {`<script lang="ts">
    interface CheckListItem {
        name: string;
        checked: boolean;
    }

    let text = $state("");
    let items: CheckListItem[] = $state([]);
<\/script>

<form
    onsubmit={() => {
        items.push({
            checked: false,
            name: text,
        }); // pushing on a array within $state() also triggers ui update!
        text = ""; // clear the input field
    }}
>
    <input type="text" bind:value={text} placeholder="type here!" />
    <input type="submit" value="Add" />
</form>

<div class="ver">
    {#each items as item, index}
        <span class:checked={item.checked}>
            <!-- you can also bind to list items! -->
            <input type="checkbox" bind:checked={item.checked} />
            {index + 1}.
            {item.name}</span
        >
    {/each}
</div>
`}
</Prism>

<Frame>
    <form
        onsubmit={() => {
            items.push({
                checked: false,
                name: text,
            }); // pushing on a array within $state() also triggers ui update!
            text = ""; // clear the input field
        }}
    >
        <input type="text" bind:value={text} placeholder="type here!" />
        <input type="submit" value="Add" />
    </form>

    <div class="ver">
        {#each items as item, index}
            <span class:checked={item.checked}>
                <!-- you can also bind to list items! -->
                <input type="checkbox" bind:checked={item.checked} />
                {index + 1}.
                {item.name}</span
            >
        {/each}
    </div>
</Frame>

<style>
    .checked {
        text-decoration: line-through;
    }
</style>
