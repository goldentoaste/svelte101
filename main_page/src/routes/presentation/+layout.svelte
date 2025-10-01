<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import TreeLayout, { treeState, type Chapter } from "$lib/components/TreeLayout.svelte";
    import { globals } from "$lib/globals.svelte";

    //@ts-ignore
    import { globalConfig } from "svelte-prism";
    interface Props {
        children?: import("svelte").Snippet;
    }

    let { children }: Props = $props();
    //@ts-ignore
    globalConfig.transform = (x) => x.replace(/\*\{\}/g, "");

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
                    href: "about_me",
                    title: "About me",
                },
            ],
        },
        {
            title: "What is Svelte?",
            route: "what_is_svelte",
            items: [
                {
                    title: "So what is svelte?",
                    href: "what_is_svelte",
                },
                {
                    title: "Why not Svelte?",
                    href: "pros_cons",
                },
                {
                    title: "Svelte file structure",
                    href: "svelte_structure",
                },
            ],
        },
        {
            title: "Svelte Basics",
            route: "svelte_basics",
            items: [
                {
                    title: "Variables and attributes",
                    href: "variables",
                },
                {
                    title: "Reactivity and Events",
                    href: "reactivity",
                },
                {
                    title: "Conditional Rendering",
                    href: "conditional_rendering",
                },
                {
                    title: "Transitions",
                    href: "transitions",
                },
                {
                    title: "List Iteration",
                    href: "list",
                },
                {
                    title: "Variable Bind / More List",
                    href: "bindings",
                },
                {
                    title: "Css Classes",
                    href: "css_classes",
                },
                {
                    title: "Component",
                    href: "component",
                },
                {
                    title: "Component Bindings",
                    href: "component_bindable",
                },
                {
                    title: "Universal Reactivity",
                    href: "universal_reactivity",
                },
            ],
        },
        {
            title: "What is SvelteKit?",
            route: "what_is_sveltekit",
            items: [
                {
                    title: "Intro",
                    href: "intro",
                },
                {
                    title: "Project Structure",
                    href: "project_structure",
                },
                {
                    title: "Routing",
                    href: "routing",
                },
            ],
        },
        {
            title: "Todo App",
            route: "build_todo",
            items: [
                {
                    title: "Lets build the todo app!",
                    href: "todo",
                },
            ],
        },
        {
            title: "Deploy on Vercel",
            route: "deploy",
            items: [
                {
                    title: "Deploy to Vercel",
                    href: "vercel",
                },
            ],
        },
    ];

    let showLeft = $state(false);
    function handleHover(e: MouseEvent) {
        if (!globals.presentMode) {
            return;
        }

        if (e.clientX < 50) {
            showLeft = true;
        }

        if (e.clientX > 300) {
            showLeft = false;
        }
    }

    $effect(() => {
        if (globals.presentMode) {
            showLeft = false;
        } else {
            showLeft = true;
        }
    });
</script>

<svelte:body onmousemove={handleHover} />

<div id="page">
    <div id="left" class:presentMode={globals.presentMode} class:show={showLeft}>
        <TreeLayout rootRoute="presentation" {chapters} />
    </div>

    <div id="center" class:presentMode={globals.presentMode}>
        {@render children?.()}

        <div class="bottomNav">
            <Button href={treeState.prevUrl}>Previous</Button>
            <Button href={treeState.nextUrl}>Next</Button>
        </div>
    </div>

    <div id="right" class:presentMode={globals.presentMode}></div>
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
        z-index: 999;
        flex: 1;
        display: flex;
        justify-content: center;

        transform: translate(0, 0);

        transition: transform 0.3s ease-out;
    }

    #left.presentMode {
        position: absolute;
        left: 0;
        top: calc(var(--topPad) + 2rem);
    }

    #left:not(.show) {
        transform: translate(-110%, 0);
    }

    #left.show.presentMode {
        transform: translate(10%, 0);
    }

    #right.presentMode {
        flex: 1;
        position: absolute;
    }

    #center {
        flex: 8;
        min-width: 800px;
        padding: 2rem;
        margin: 0 1rem;

        border-left: var(--bg5) solid 2px;
        border-right: var(--bg5) solid 2px;

        min-height: calc(100dvh - var(--topPad) - 8rem);

        padding-bottom: 5rem;
        transition: min-height 0.3s ease-out;
        position: relative;
    }

    #center.presentMode {
        min-height: calc(100dvh - 11rem);
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
