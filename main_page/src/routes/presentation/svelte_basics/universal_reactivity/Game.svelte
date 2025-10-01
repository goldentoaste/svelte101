<script lang="ts">
    import Canvas from "./Canvas.svelte";
    import { debug } from "./shared.svelte";
</script>

<Canvas></Canvas>

<pre>
    <code>
{JSON.stringify(debug, undefined, 4)}
    </code>
</pre>
