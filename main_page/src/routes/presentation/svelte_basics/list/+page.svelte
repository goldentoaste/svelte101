<script>
    import Prism from "svelte-prism";
    import Frame from "$lib/components/Frame.svelte";

    let items = [
        "🟡 Lemon",
        "🟢 Lime",
        "🟣 Grape",
        "🟠 Orange",
        "🔴 Strawberry",
    ];
</script>

<h1 class="title">Lists Iteration</h1>

<p>
    In order to display a list of data, <span class="inline">{"{#each list as item, index (item.id)}"}</span>
    (each block) is used. In JSX usually 'list.map' would be used here, where as
    Svelte's syntax is more like a common for loop.
</p>

<p>
    Index, and the "(item.id)" is optional. Index is a 0 index number for which
    item its currenly on, useful for a numbered list for example.

    <br />

    (item.id) can be any property of the item object. It's used to label the
    rendered element with a unique id, is useful if you plan on rearranging list
    order, or add/remove items. This is similar to how JSX requires elements
    returned in list.map to have the id attribute.
</p>

<Prism language="svelte">
    {`<script>
    let items = ["🟡 Lemon", "🟢 Lime", "🟣 Grape", "🟠 Orange", "🔴 Strawberry"];  
<\/script>

<h2>Top Skittles Flavors</h2>

<div style="display:flex; flex-direction:column;">
    {#each items as item, index}
        <span>{index + 1}. {item}</span>
    {/each}
</div>
`}
</Prism>

<Frame>
    <h2>Top Skittles Flavors</h2>

    <div style="display:flex; flex-direction:column;">
        {#each items as item, index}
            <span>{index + 1}. {item}</span>
        {/each}
    </div>
</Frame>
