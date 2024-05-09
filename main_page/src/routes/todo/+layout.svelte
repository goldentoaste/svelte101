<script lang="ts">
    import TreeLayout, {
        type Chapter,
    } from "$lib/components/TreeLayout.svelte";

    let chapters: Chapter[] = [
        {
            title: "Preface1",
            items: [
                {
                    href: "/",
                    title: "Stuff",
                },
                {
                    href: "/todo/testPage",
                    title: "Tester",
                },
                {
                    href: "/2",
                    title: "Stuff",
                },
                {
                    href: "/3",
                    title: "Stuff",
                },
                {
                    href: "/4",
                    title: "Stuff",
                },
            ],
        },
        {
            title: "Preface2",
            items: [
                {
                    href: "/1",
                    title: "Stuff",
                },
                {
                    href: "/2",
                    title: "Stuff",
                },
                {
                    href: "/3",
                    title: "Stuff",
                },
                {
                    href: "/4",
                    title: "Stuff",
                },
                {
                    href: "/5",
                    title: "Stuff",
                },
            ],
        },
        {
            title: "Preface3",
            items: [
                {
                    href: "/7",
                    title: "Stuff",
                },
                {
                    href: "/2",
                    title: "Stuff",
                },
                {
                    href: "/1",
                    title: "Stuff",
                },
                {
                    href: "/7111",
                    title: "Stuff",
                },
                {
                    href: "/1111",
                    title: "Stuff",
                },
            ],
        },
        {
            title: "Preface4",
            items: [
                {
                    href: "/2",
                    title: "Stuff1111111111111111111111111111111111111",
                },
                {
                    href: "/1",
                    title: "Stuff",
                },
                {
                    href: "/21",
                    title: "Stuff",
                },
                {
                    href: "/22",
                    title: "Stuff",
                },
                {
                    href: "/76",
                    title: "Stuff",
                },
            ],
        },
    ];
</script>

<div id="page">
    <div id="left">
        <TreeLayout {chapters}></TreeLayout>
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

        height: auto;

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
    }
</style>
