<script lang="ts">
    import { PlayerState } from "./shared.svelte";

    const musicPlayer = new PlayerState();
</script>

<button
    onclick={() => {
        // simplly choose the music type, then songs will be shuffled
        // song index reset
        // current song title update, all automatically due to our states within the PlayerState.
        // This makes the frontend code very clean.
        musicPlayer.musicType = "keshi";
    }}
>
    Keshi Songs
</button>

<button
    onclick={() => {
        musicPlayer.musicType = "joji";
    }}
>
    Joji Songs
</button>

<p>Current Song title: {musicPlayer.currentSong}</p>

<button
    onclick={() => {
        // similar to swtiching song type, all we need to do is update song index here.
        musicPlayer.trackIndex -= 1;
    }}
>
    Play Prev
</button>
<button
    onclick={() => {
        musicPlayer.trackIndex += 1;
    }}
>
    Play Next
</button>
