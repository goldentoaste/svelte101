<script lang="ts">
    import { browser } from "$app/environment";

    import Cookies from "js-cookie";
    import { onMount } from "svelte";

    import { fade, fly } from "svelte/transition";
    export let style = "";

    let show = false;
    export let darkModeEnabled = true;
    onMount(() => {
        darkModeEnabled = Cookies.get("theme") !== "light"; // defaults to dark if no cookies found
        show = true;
    });
</script>

<svelte:head>
    <link rel="preload" href="./sun.svg" />
    <link rel="preload" href="./moon.svg" />
</svelte:head>

{#if show}
    <button
        transition:fade
        on:click={() => {
            if (browser && document !== undefined) {
                darkModeEnabled = !darkModeEnabled;
                document.documentElement.setAttribute(
                    "data-theme",
                    darkModeEnabled ? "dark" : "light",
                );
                Cookies.set("theme", darkModeEnabled ? "dark" : "light", {
                    path: "/",
                    expires: 360,
                    sameSite: "Strict",
                });
            }
        }}
        {style}
    >
        {#key darkModeEnabled}
            <img
                in:fly={{
                    duration: 400,
                    x: -50,
                }}
                out:fly={{
                    duration: 400,
                    x: 50,
                }}
                class={darkModeEnabled?"darkIcon":"lightIcon"}
                src={darkModeEnabled?"/moon.svg":"/sun.svg"}
                alt="toggle dark mode"
            />
        {/key}
    </button>
{/if}

<style>
    button {
        position: relative;

        transition: border 0.2s ease-out;

        width: 2rem;
        height: 2rem;

        overflow: hidden;

        border: none;
        background: none;

        border: 2px solid var(--bg4);
    }

    button:hover {
        border: 2px solid var(--fg0);
    }

    img {
        color: var(--fg0);
        position: absolute;

        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);

        width: 1.5rem;
        height: 1.5rem;
    }
</style>
