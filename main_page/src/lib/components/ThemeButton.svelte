<script lang="ts">
    import { browser } from "$app/environment";

    import Cookies from "js-cookie";
    import { onMount } from "svelte";

    import { fade, fly } from "svelte/transition";
    export let style = "";

    let show = false;
    export let darkModeEnabled = true;
    onMount(() => {
        darkModeEnabled = Cookies.get("theme") === "dark";
        show = true;
    });
</script>

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
        {#if darkModeEnabled}
            <img
                in:fly={{
                    duration: 400,
                    x: -50,
                }}
                out:fly={{
                    duration: 400,
                    x: 50,
                }}
                class="darkIcon"
                src="./moon.svg"
                alt="darkMode"
            />
        {/if}

        {#if !darkModeEnabled}
            <img
                in:fly={{
                    duration: 200,
                    x: -50,
                }}
                out:fly={{
                    duration: 200,
                    x: 50,
                }}
                class="lightIcon"
                src="./sun.svg"
                alt="lightMode"
            />
        {/if}
    </button>
{/if}

<style>
    button {
        position: relative;
        box-sizing: border-box;
        transition: border 0.2s ease-out;

        width: 2rem;
        height: 2rem;

        overflow: hidden;

        border: none;
        background: none;
    }

    button:hover {
        border: 2px solid var(--fg0);
    }

    img {
        color: var(--fg0);
        position: absolute;
        left: 0.25rem;
        top: 0.25rem;
        width: 1.5rem;
        height: 1.5rem;
    }
</style>
