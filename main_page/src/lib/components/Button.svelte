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
    export let href: string = "";
    export let path: string = "";
    export let selected: boolean = false;
    export let key = "clip";
    export let style = "";

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
        dispatch("click", e.detail);
    }
</script>

<div id="buttonParent">
    {#if !selected}
        <div class="decor" id="upleft"></div>
        <div class="decor" id="upright"></div>
        <div class="decor" id="downleft"></div>
        <div class="decor" id="downright"></div>
    {/if}
    <button on:click={onclick} class:selected {style}>
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
    button {
        position: relative;

        background: var(--fg0);
        border: var(--fg1);

        font-size: large;
        color: var(--bg1);

        padding: 0.75rem;
    }

    button:active {
        transform: scale(0.9);
    }

    #buttonParent:hover > .decor {
        transform: translate(var(--offsetX), var(--offsetY));
    }

    #buttonParent:hover {
        filter: brightness(1.2);
    }

    #buttonParent {
        box-sizing: border-box;
        position: relative;
        height: fit-content;
        width: fit-content;
    }

    #upleft {
        --offsetX: -0.2rem;
        --offsetY: -0.2rem;

        left: 0;
        top: 0;
    }

    #upright {
        --offsetX: 0.2rem;
        --offsetY: -0.2rem;

        top: 0;
        right: 0;
    }

    #downleft {
        --offsetX: -0.2rem;
        --offsetY: 0.2rem;

        bottom: 0;
        left: 0;
    }

    #downright {
        --offsetX: 0.2rem;
        --offsetY: 0.2rem;

        bottom: 0;
        right: 0;
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
