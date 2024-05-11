<script lang="ts" context="module">
    export type ButtonParam = {
        href?: string;
        path?: string;
        selected?: boolean;
        text: string;
    };
</script>

<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { createEventDispatcher } from "svelte";
    import { fly } from "svelte/transition";
    export let href: string = "";
    export let path: string = "";
    export let selected: boolean = false;
    export let key = "clip";
    export let style = "";
    export let id = "";

    const dispatch = createEventDispatcher();

    function onclick(e: MouseEvent) {
        if (
            href &&
            href !== ($page.route?.id?.replace(/\/?\(\w+\)/g, "") || "/") // do nothing if navigating to current page
        ) {
            goto(href, {
                noScroll: true,
            });
        }
        dispatch("click", e);
    }
</script>

<div class="buttonParent" {id}>
    {#if !selected}
        <div
            out:fly={{
                duration: 400,
                x: -3,
                y: -3,
            }}
            class="decor"
            id="upleft"
        ></div>
        <div
            out:fly={{
                duration: 400,
                x: 3,
                y: -3,
            }}
            class="decor"
            id="upright"
        ></div>
        <div
            out:fly={{
                duration: 400,
                x: -3,
                y: 3,
            }}
            class="decor"
            id="downleft"
        ></div>
        <div
            out:fly={{
                duration: 400,
                x: 3,
                y: 3,
            }}
            class="decor"
            id="downright"
        ></div>
    {/if}
    <div id="backplate"></div>
    <button on:click={onclick} {style}>
        {#if path}
            <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id={key} clipPathUnits="objectBoundingBox">
                        <path d={path} fill="black" />
                    </clipPath>
                </defs>
            </svg>
            <div class="icon" style="clip-path: url('#{key}');" />
        {/if}
        <slot />
    </button>
</div>

<style>
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
