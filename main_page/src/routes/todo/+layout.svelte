<script lang="ts">
    import TreeLayout, {
        type Chapter,
    } from "$lib/components/TreeLayout.svelte";

    let chapters: Chapter[] = [
        {
            route: "testchap",
            title: "Test Chap",
            items: [
                {
                    href: "testPage",
                    title: "TEst 1",
                },
                {
                    href: "testpage2",
                    title: "TEst 2",
                },
            ],
        },
    ];
</script>

<div id="page">
    <div id="left">
        <TreeLayout rootRoute="todo" {chapters}></TreeLayout>
    </div>

    <div id="center"><slot /></div>

    <div id="right"></div>
</div>

<style>
    #page {
        padding: 1rem;
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
        padding: 1rem;
        margin: 0 1rem;

        min-height: 100%;

        border-left: var(--bg5) solid 2px;
        border-right: var(--bg5) solid 2px;

        min-height: calc(100dvh - var(--topPad) - 4rem);
    }
</style>
