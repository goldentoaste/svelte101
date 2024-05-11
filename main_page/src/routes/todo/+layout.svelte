<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import TreeLayout, {
        type Chapter,
    } from "$lib/components/TreeLayout.svelte";
    import { onMount } from "svelte";
    import Cookies from "js-cookie";

    import gruvbox_dark from "svelte-highlight/styles/gruvbox-dark-medium";
    import gruvbox_light from "svelte-highlight/styles/gruvbox-light-medium";

    let chapters: Chapter[] = [
        {
            route: "about",
            title: "About",
            items: [
                {
                    href: "about",
                    title: "About this workshop",
                },
                {
                    href: "setup",
                    title: "Setups",
                },
                {
                    href:"about_me",
                    title:"About me"
                }
            ],
        },

        {
            title: "What is Svelte?",
            route:"whatIsSvelte",
            items: [
                {
                    title:"So what is svelte?",
                    href:"whatIsSvelte"
                }
            ]
        }
    ];

    let darkModeEnabled = Cookies.get("theme") !== "light";

</script>

<svelte:head>
    {@html darkModeEnabled ? gruvbox_dark : gruvbox_light}
</svelte:head>

<div id="page">
    <div id="left">
        <TreeLayout rootRoute="todo" {chapters}></TreeLayout>
    </div>

    <div id="center">
        <slot />

        <div class="bottomNav">
            <Button>Previous</Button>
            <Button>Next</Button>
        </div>
    </div>

    <div id="right"></div>
</div>

<style>
    #page {
        padding: 1rem;
        padding-top: 0;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        width: 100dvw;
        max-width: 100%;

        overflow: visible;
    }

    #left {
        flex: 2;
        display: flex;
        justify-content: center;
    }

    #right {
        flex: 1;
    }

    #center {
        flex: 8;
        min-width: 800px;
        padding: 2rem;
        margin: 0 1rem;

        min-height: 100%;

        border-left: var(--bg5) solid 2px;
        border-right: var(--bg5) solid 2px;

        min-height: calc(100dvh - var(--topPad) - 8rem);

        padding-bottom: 5rem;

        position: relative;
    }

    .bottomNav {
        display: flex;
        flex-direction: row;
        gap: 0.75rem;
        justify-content: end;

        border-top: 2px solid var(--bg5);
        padding: 0.75rem;

        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;

        box-sizing: border-box;
    }
</style>
