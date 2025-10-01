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
