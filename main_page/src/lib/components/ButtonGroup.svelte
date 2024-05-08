<script lang="ts">
    import { onMount } from "svelte";
    import Button from "./Button.svelte";
    import type { ButtonParam } from "./Button.svelte";

    export let buttonParams: ButtonParam[] = [];

    let selectedIndex = 0;
    let buttonContainer: HTMLElement | null;
    let boxOffset = 0;
    let boxWidth = 0;

    onMount(() => {
        buttonContainer = document.getElementById("buttonContainer");
    });
</script>

<div id="buttonContainer">
    <div id="arrow"></div>
    <div id="box"></div>

    {#each buttonParams as param, index}
        <Button
            href={param.href}
            path={param.path}
            selected={selectedIndex == index}
            on:click={(click) => {
                const containerBox = buttonContainer?.getBoundingClientRect();
                const buttonBox : DOMRect = click.detail.target.getBoundingClientRect();

            boxOffset = buttonBox.
            }}
        >
            {param.text}
        </Button>
    {/each}
</div>

<style>
    #buttonContainer {
        border-bottom: 3px solid var(--red);

        display: flex;
        flex-direction: row;
        gap: 1.5rem;
        align-items: center;
        padding: 1rem;
    }

    #arrow {
        position: absolute;
        bottom: 0;
        left: 0;

        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid var(--red);
    }
</style>
