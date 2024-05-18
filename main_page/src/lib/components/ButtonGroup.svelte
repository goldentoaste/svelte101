<script lang="ts">
    import { onMount } from "svelte";
    import Button from "./Button.svelte";
    import type { ButtonParam } from "./Button.svelte";

    export let buttonParams: ButtonParam[] = [];

    export let selectedIndex = 0;
    let buttonContainer: HTMLElement | null;
    let horiOffset = 0;
    let boxWidth = 0;
    let boxHeight = 0;

    onMount(() => {
        buttonContainer = document.getElementById("buttonContainer");

        const firstButtonBox = document
            .getElementById("titleButton0")
            ?.getBoundingClientRect();

        if (firstButtonBox) {
            boxWidth = firstButtonBox.width;
            boxHeight = firstButtonBox.height;

            horiOffset =
                firstButtonBox.left -
                // @ts-ignore
                buttonContainer?.getBoundingClientRect().left;
        }
    });
</script>

<div id="buttonContainer">
    {#each buttonParams as param, index}
        <Button
            href={param.href}
            path={param.path}
            selected={selectedIndex == index}
            id={"titleButton" + index}
            on:click={(click) => {
                const containerBox = buttonContainer?.getBoundingClientRect();

                /** @type {DOMRect} */
                const buttonBox = click.detail.target.getBoundingClientRect();

                // @ts-ignore
                horiOffset = buttonBox.left - containerBox?.left;
                boxWidth = buttonBox.width;

                selectedIndex = index;
            }}
        >
            {param.text}
        </Button>
    {/each}

    <div
        id="box"
        style="left:calc({horiOffset}px ); width:{boxWidth}px; height:{boxHeight}px;"
    ></div>
</div>

<style>
    #box {
        position: absolute;
        top: 1rem;
        left: 1rem;
        border: 2.5px var(--red) solid;
        box-sizing: border-box;

        transition: all 0.45s ease-out;
        pointer-events: none;
    }
    #buttonContainer {
        display: flex;
        position: relative;
        flex-direction: row;
        gap: 1.5rem;
        align-items: center;
        padding: 1rem;
    }
</style>
