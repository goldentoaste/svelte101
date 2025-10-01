
export const debug = $state<{ [key: string]: any }>({

});

export const canvasCode = `<!-- Canvas.svelte -->
<script lang="ts">
    import { onMount } from "svelte";
    import { debug } from "./shared.svelte";

    let canvas = $state<HTMLCanvasElement>();
    let renderContext = $derived.by(() => {
        if (!canvas) {
            return undefined;
        }
        const ctx = canvas.getContext("2d")!;
        ctx.fillStyle = "red";
        return ctx;
    });

    let playerLoc = $state({ x: 0, y: 0 });

    let currentTime = 0;
    let frameTime = 0;
    function render(t: number) {
        frameTime = t - currentTime;
        currentTime = t;
        debug.frameTime = frameTime; // set global state to store debug info

        renderContext?.clearRect(0,0, 400, 400)
        renderContext?.fillRect(playerLoc.x, playerLoc.y, 10, 10);

        // finished rendering, request next frame
        requestAnimationFrame(render);
    }

    onMount(() => {
        requestAnimationFrame(render);
    });
</script>

<canvas
    bind:this={canvas}
    width="400"
    height="400"
    onmousemove={(e) => {
        playerLoc = {
            x: e.offsetX,
            y: e.offsetY,
        };
        debug.playerPosition = playerLoc;
    }}
>
</canvas>

<style>
    canvas {
        border: 1px solid var(--fg1);
    }
</style>
`

export const gameCode = `<script lang="ts">
    import Canvas from "./Canvas.svelte";
    import { debug } from "./shared.svelte";
</script>

<Canvas></Canvas>

<pre>
    <code>
{JSON.stringify(debug, undefined, 4)}
    </code>
</pre>
`

/**
 * take a array of anything, shuffle it.
 */
function shuffleArr<T>(arr: T[]) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[j], shuffled[i]] = [shuffled[i], shuffled[j]];
    }
    return shuffled;
}
/**
 * true modulo function, js % operator is remainder
 */
function _mod(n: number, d: number) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
    return ((n % d) + d) % d;
}

export type MusicType = "keshi" | "joji";
export const musicCollection: Record<MusicType, string[]> = {
    "keshi": ["Soft Spot", "Id", "Say", "Inside Out", "Beside You", "Angostura", "Atlas", "Always", "More", "2 Soon"],
    "joji": ["Glimpse of Us", "SLOW DANCING IN THE DARK", "Die For You", "Gimme Love", "Sanctuary", "Yeah Right", "Will He"]
};

export class PlayerState {
    // we can declare $states as class property
    trackIndex = $state(0);
    musicType = $state<MusicType>("keshi");
    // can declare $derived states too
    songs = $derived(shuffleArr(musicCollection[this.musicType]));
    currentSong = $derived(this.songs[this.trackIndex]);

    constructor() {
        // effects can be declared in constructor (or anywhere really) to do reactive programming.
        $effect(() => {
            if (this.trackIndex >= this.songs.length) {
                this.songs = shuffleArr(this.songs);
                this.trackIndex = 0;
            }
            // be care when assigning states in effects, as it can cause inf loops.
            // use untrack when you get skill diffed: https://svelte.dev/docs/svelte/svelte#untrack
            this.trackIndex = _mod(this.trackIndex, this.songs.length);
        });
    }
}


export const musicPlayerCode = `<script lang="ts">
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
`

export const musicStateCode = `/**
 * take a array of anything, shuffle it.
 */
function shuffleArr<T>(arr: T[]) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[j], shuffled[i]] = [shuffled[i], shuffled[j]];
    }
    return shuffled;
}
/**
 * true modulo function, js % operator is remainder
 */
function _mod(n: number, d: number) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
    return ((n % d) + d) % d;
}

export type MusicType = "keshi" | "joji";
export const musicCollection: Record<MusicType, string[]> = {
    "keshi": ["Soft Spot", "Id", "Say", "Inside Out", "Beside You", "Angostura", "Atlas", "Always", "More", "2 Soon"],
    "joji": ["Glimpse of Us", "SLOW DANCING IN THE DARK", "Die For You", "Gimme Love", "Sanctuary", "Yeah Right", "Will He"]
};

export class PlayerState {
    // we can declare $states as class property
    trackIndex = $state(0);
    musicType = $state<MusicType>("keshi");
    // can declare $derived states too
    songs = $derived(shuffleArr(musicCollection[this.musicType]));
    currentSong = $derived(this.songs[this.trackIndex]);

    constructor() {
        // effects can be declared in constructor (or anywhere really) to do reactive programming.
        $effect(() => {
            if (this.trackIndex >= this.songs.length) {
                this.songs = shuffleArr(this.songs);
                this.trackIndex = 0;
            }
            // be care when assigning states in effects, as it can cause inf loops.
            // use untrack when you get skill diffed: https://svelte.dev/docs/svelte/svelte#untrack
            this.trackIndex = _mod(this.trackIndex, this.songs.length);
        });
    }
}
`