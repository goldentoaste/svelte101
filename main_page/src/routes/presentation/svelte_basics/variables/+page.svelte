<script>
    import Frame from "$lib/components/Frame.svelte";
    import Prism from "svelte-prism";

    let name = "svelte";
    let src = "/svelte.svg";
    let imageName = "svelte logo";

    let code = `\<script\>
    let name = "svelte";
    let src = "/svelte.svg";
    let imageName = "svelte logo";
<\/script\>

<!-- here {name} is a declared variable -->
<h2>Hi, I am {name}!</h2>

<!-- we have a variable called 'src', so the attr name doesn't need to be there -->
<!-- attr value can also be variable like 'imageName', or any js has a value. -->
<img {src} alt={imageName} class="logo" style="width:200px">
`;
</script>

<h1 class="title">Variables and Attributes</h1>

<p>
    Svelte variables are all declared using "let". Variables can reference in
    html using {"{var_name}"}, like in JSX.
</p>

<Prism language="svelte" source="">
    {code}
</Prism>

<Frame>
    <!-- here {name} is a declared variable -->
    <h2>Hi, I am {name}!</h2>

    <!-- we have a variable called 'src', so the attr name doesn't need to be there -->
    <!-- attr value can also be variable like 'imageName', or any js has a value. -->
    <img {src} alt={imageName} class="logo" style="width:200px">
</Frame>
