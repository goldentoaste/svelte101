<script lang="ts">
    import { browser } from "$app/environment";
    import { darkModeEnabled } from "$lib/globals";
    import { fly } from "svelte/transition";
    import Cookies from 'js-cookie'
    export let style = "";

    $: {
        if (browser && document !== undefined) {
            document.documentElement.setAttribute(
                "data-theme",
                $darkModeEnabled ? "dark" : "light",
            );
            
            document.cookie = `darkmode=${$darkModeEnabled ? 'true':'false'}`;
        }
    }
    
</script>

<button
    on:click={() => {
        $darkModeEnabled = !$darkModeEnabled;
    }}
    {style}
>
    {#if $darkModeEnabled}
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

    {#if !$darkModeEnabled}
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
