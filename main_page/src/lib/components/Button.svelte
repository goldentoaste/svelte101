<script lang="ts" module>
    export type ButtonParam = {
        href?: string;
        path?: string;
        selected?: boolean;
        text: string;
    };
</script>

<script lang="ts">
    import { fly } from "svelte/transition";
    interface Props {
        href?: string;
        path?: string;
        selected?: boolean;
        key?: string;
        style?: string;
        id?: string;
        onclick?: () => void;
        children?: import("svelte").Snippet;
    }

    let {
        href = "",
        path = "",
        selected = false,
        key = "clip",
        style = "",
        id = "",
        children,
        onclick,
    }: Props = $props();
</script>

{#snippet Content()}
    <button {onclick} {style} class:selected>
        {#if path}
            <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id={key} clipPathUnits="objectBoundingBox">
                        <path d={path} fill="black"></path>
                    </clipPath>
                </defs>
            </svg>
            <div class="icon" style="clip-path: url('#{key}');"></div>
        {/if}
        {@render children?.()}
    </button>
{/snippet}

<div class="buttonParent" {id}>
    {#if !selected}
        <div class="decor" id="upleft"></div>
        <div class="decor" id="upright"></div>
        <div class="decor" id="downleft"></div>
        <div class="decor" id="downright"></div>
    {/if}
    <div id="backplate"></div>
    {#if href}
        <a {href}>
            {@render Content()}
        </a>
    {:else}
        {@render Content()}
    {/if}
</div>

<style>
    a {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        text-decoration: none;
    }
    .decor {
        position: absolute;
        background-color: var(--orange);

        width: 1rem;
        height: 1rem;

        transition: transform 0.2s ease-out;
        transform: translate(0, 0);
    }

    #backplate {
        position: absolute;
        left: 0;
        top: 0;

        background: var(--fg0);
        width: 100%;
        height: 100%;
    }

    button {
        position: relative;
        border: var(--fg1);

        background-color: transparent;
        font-size: large;
        color: var(--bg1);

        padding: 0.75rem;

        border: var(--bg5) solid 2px;
        transition: border-color 250ms ease-out;
    }

    button.selected {
        border-color: var(--red);
    }

    .buttonParent:hover > .decor {
        transform: translate(var(--offsetX), var(--offsetY));
    }

    .buttonParent:hover {
        filter: brightness(1.2);
        box-shadow: 0px 0px 20px var(--glow);
    }

    .buttonParent:active {
        transform: scale(0.95);
        filter: brightness(0.95);
    }

    .buttonParent {
        box-sizing: border-box;
        position: relative;
        height: fit-content;
        width: fit-content;

        transition: all 0.2s ease-out;
    }

    #upleft {
        --offsetX: -0.2rem;
        --offsetY: -0.2rem;

        left: 1px;
        top: 1px;
    }

    #upright {
        --offsetX: 0.2rem;
        --offsetY: -0.2rem;

        top: 1px;
        right: 1px;
    }

    #downleft {
        --offsetX: -0.2rem;
        --offsetY: 0.2rem;

        bottom: 1px;
        left: 1px;
    }

    #downright {
        --offsetX: 0.2rem;
        --offsetY: 0.2rem;

        bottom: 1px;
        right: 1px;
    }

    .icon {
        height: 1.2rem;
        width: 1.2rem;
        margin-left: 0.2rem;
        margin-right: 0.5rem;
        vertical-align: middle;
        background-color: var(--fg);
    }
</style>
