<script>
    import Frame from "$lib/components/Frame.svelte";
    import Prism from "svelte-prism";

    let name = "svelte";
    let src = "/svelte.svg";
    let imgageName = "svelte logo";
    
</script>

<h1 class="title">Variables and Attributes</h1>

<p>
    Svelte variables are all declared using "let". Variables can reference in
    html using {"{var_name}"}, like in JSX.
</p>

<Prism language="svelte">
    {`<script>
    let name = "svelte";
    let src = "/svelte.svg";
    let imgageName = "svelte logo";
<\/script>



`}
</Prism>



<Frame> </Frame>
