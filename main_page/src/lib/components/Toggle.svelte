<script lang="ts">
    export let toggleOn : boolean = false;
</script>

<div class="toggleRoot">
    <slot />
    <button
        on:click={() => {
            toggleOn = !toggleOn;
        }}
    >
        <div class="square" class:toggleOn />
        <div class="circle" class:toggleOn />
    </button>
</div>

<style>
    .toggleRoot {
        display: flex;
        align-items: center;gap: 0.5rem;
    }

    button {
        position: relative;

        border-radius: 0.5rem;
        border: 1px solid var(--bg5);

        background-color: var(--bg2);

        overflow: hidden;

        width: 2rem;
        height: 1rem;

        box-sizing: border-box;
    }

    .circle {
        top: 0;
        left: -0.2px;
        position: absolute;

        width: 1rem;
        height: 1rem;

        border-radius: 50%;

        background-color: var(--fg0);
        border: 1px solid var(--fg1);

        z-index: 2;

        transition: left 0.3s ease-out;
        box-sizing: border-box;
    }

    .square {
        position: absolute;
        top: 0;
        right: 1.5rem;

        width: 1.5rem;
        height: 1rem;
        background-color: var(--orange);

        z-index: 1;
        transition: right 0.3s ease-out;
        box-sizing: border-box;
    }

    .circle.toggleOn {
        left: 1rem;
    }

    .square.toggleOn {
        right: 0.5rem;
    }
</style>
