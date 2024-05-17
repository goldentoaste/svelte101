<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import TreeLayout, {
        type Chapter,
    } from "$lib/components/TreeLayout.svelte";

    import Cookies from "js-cookie";

    //@ts-ignore
    import { globalConfig } from 'svelte-prism'
    //@ts-ignore
    globalConfig.transform = x => x.replace(/\*\{\}/g, "");
    ;

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
                    title: "Pros and Cons",
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
                    href: "conditional_rendering"
                },
                {
                    title: "Transitions",
                    href:"transitions"
                },
                {
                    title:"List Iteration",
                    href: "list"
                },
                {
                    title:"Variable Bind / More List",
                    href:"bindings"
                },
                {
                    title:"Css Classes",
                    href:"css_classes"
                },
                {
                    title:"Component",
                    href:"component"
                },
                {
                    title: "Custom Events",
                    href:"custom_events"
                }
            ],
        },
        {
            title: "What is SvelteKit?",
            route: "what_is_sveltekit",
            items:[
                {
                    title:"Intro",
                    href:"intro"
                },
                {
                    title: "Project Structure",
                    href:"project_structure"
                },
                {
                    title:"Routing",
                    href:"routing"
                }
            ]
        },
    ];

</script>


<div id="page">
    <div id="left">
        <TreeLayout rootRoute="presentation" {chapters}></TreeLayout>
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