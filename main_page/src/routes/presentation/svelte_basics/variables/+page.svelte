<script>
    import Frame from "$lib/components/Frame.svelte";
    import Prism from "svelte-prism";

    const name = "svelte";
    let src = "/svelte.svg";
    let imageName = "svelte logo";
    let rotated = $state(false);

    let code = `\<script\>
    let name = "svelte";
    let src = "/svelte.svg";
    let imageName = "svelte logo";
<\/script\>

<img
    {src}
    alt={imageName}
    class="logo"
    style="width:200px; transform: rotate({rotated ? 0 : 90}deg);"
/>
<!-- rotated is a $state, so the corresponding element is updated. -->
<button onclick={()=>{
    rotated = !rotated;
}}>
    Rotate!
</button>

<button onclick={()=>{
    src = "what ever"; // since src is not a $state, it does not cause update.
    // basically src is a useRef() in React
}}>
    Do whatever
</button>
`;
</script>

<h1 class="title">$States and Attributes</h1>

<ul>
    <li>
        Svelte states are declared with <b>let</b> and <b>$state()</b>. <br />
    </li>

    <li>
        Refer to them in HTML using <b>{"{var_name}"}</b>, like in JSX.
    </li>

    <li>Whenever $states are updated, their dependant components updates.</li>
</ul>

<Prism language="svelte" source="">
    {code}
</Prism>

<Frame>
    <!-- here {name} is a declared variable -->
    <h2>Hi, I am {name}!</h2>

    <!-- we have a variable called 'src', so the attr name doesn't need to be there -->
    <!-- attr value can also be variable like 'imageName', or any js has a value. -->
    <img
        {src}
        alt={imageName}
        class="logo"
        style="width:200px; transform: rotate({rotated ? 0 : 90}deg);"
    />
    <!-- rotated is a $state, so the corresponding element is updated. -->
    <button onclick={()=>{
        rotated = !rotated;
    }}>
        Rotate!
    </button>

    <button onclick={()=>{
        src = "what ever"; // since src is not a $state, it does not cause update.
        // basically src is a useRef() in React
    }}>
        Do whatever
    </button>
</Frame>


<style>
    img {
        transition: transform 350ms ease-out;
    }
</style>

