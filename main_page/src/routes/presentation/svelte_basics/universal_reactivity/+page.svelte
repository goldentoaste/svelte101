<script lang="ts">
    import Frame from "$lib/components/Frame.svelte";
    import Prism from "svelte-prism";

    import Game from "./Game.svelte";
    import { canvasCode, gameCode, musicPlayerCode, musicStateCode } from "./shared.svelte";
    import MusicPlayer from "./MusicPlayer.svelte";
</script>

<h1 class="title">Universal Reactivity</h1>

<p>
    A new feature of Svelte 5 is <a target="_blank" href="https://svelte.dev/tutorial/svelte/universal-reactivity">
        Universal Reactivity</a
    >, that is, to be able to declare Svelte states within <b>name.svelte.ts</b> files, outside of
    components. This makes it easy to create shared states, or create re-usable stateful objects
    using <a target="_blank" href="https://svelte.dev/docs/svelte/$state#Classes">classes</a>.
</p>

<p>The following are some longer examples from SH25 site.</p>

<h2 class="title">Global Shared States</h2>

<Prism language="svelte">
    {gameCode}
</Prism>

<Prism language="svelte">
    {canvasCode}
</Prism>

<Prism languages="svelte">
    {`// shared.svelte.ts
export const debug = $state<{ [key: string]: any }>({

});
`}
</Prism>

<Frame>
    <Game></Game>
</Frame>

<h2 class="title" style="margin-top:3rem;">Stateful object as a Class (make oop cool again)</h2>

<Prism language="javascript">
    {musicStateCode}
</Prism>
<Prism language="svelte">
    {musicPlayerCode}
</Prism>

<Frame>
    <MusicPlayer></MusicPlayer>
</Frame>
