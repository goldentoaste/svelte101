<script context="module" lang="ts">
    import { onMount } from "svelte";

    export interface Chapter {
        title: string;
        items: ChapterItem[];
        open?: boolean;
    }

    export interface ChapterItem {
        title: string;
        href: string;
    }
</script>

<script lang="ts">
    import { afterNavigate } from "$app/navigation";
    import { fly } from "svelte/transition";

    export let chapters: Chapter[] = [];

    let chapterSizes: number[] = [];

    let selectedChap = -1;
    let selectedItem = -1;
    let hrefToIndex: { [href: string]: [number, number] } = {};

    chapters.forEach((i) => {
        i.open = true;
        chapterSizes.push(10000);
    });

    function loadChapterSizes() {
        // TODO update when page is resized?

        chapterSizes.length = 0; // clear

        for (let i = 0; i < chapters.length; i++) {
            chapterSizes.push(
                document.getElementById("itemContainer" + i)?.scrollHeight!,
            );

            for (let j = 0; j < chapters[i].items.length; j++) {
                hrefToIndex[chapters[i].items[j].href] = [i, j];
            }
        }
    }

    onMount(() => {
        loadChapterSizes();
    });

    afterNavigate((event) => {
        const route = event.to?.route!.id;

        if (route !== undefined && route !== null) {
            [selectedChap, selectedItem] = hrefToIndex[route];
            // TODO handle not found
        }
    });
</script>

<div class="treeContainer">
    {#each chapters as chapter, chapIndex (chapter.title)}
        <div>
            <div
                id={"" + chapIndex}
                class="title"
                on:click={() => {
                    chapters[chapIndex].open = !chapters[chapIndex].open;
                    chapters = chapters;
                }}
                class:closed={!chapter.open}
            >
                {chapIndex + 1}. {chapter.title}
            </div>
            <div
                class="itemWrapper"
                style="max-height: {chapter.open
                    ? chapterSizes[chapIndex] + 100
                    : 0}px"
            >
                <div class="itemContainer" id={"itemContainer" + chapIndex}>
                    {#each chapter.items as item, itemIndex (item.href)}
                        <div style="position: relative;">
                            {#if selectedChap === chapIndex && selectedItem === itemIndex}
                                <div
                                    class="arrow"
                                    transition:fly={{
                                        x: -10,
                                    }}
                                ></div>
                            {/if}
                            <a href={item.href}
                                >{chapIndex + 1}.{itemIndex + 1} {item.title}</a
                            >
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    {/each}
</div>

<style>
    .treeContainer {
        background-color: var(--bg2);
        overflow: auto;
        border: var(--bg5) solid 2px;
        min-width: 250px;
        width: fit-content;
    }

    .title {
        background-color: var(--bg2);

        position: sticky;
        top: 0px;
        color: var(--orange);
        font-size: medium;

        cursor: pointer;
        padding: 0.5rem;
        margin: 0.5rem;
        border-bottom: 2px solid var(--bg5);

        transition: border 0.3s ease-out;
    }

    .closed {
        border-bottom: 3px solid var(--orange);
    }

    a {
        color: var(--fg0);
        text-decoration: none;
    }

    a:visited {
        color: var(--fg1);
    }

    .itemContainer {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding-bottom: 0.75rem;
        padding-top: 0;
        padding-left: 2.5rem;
        padding-right: 1rem;
    }

    .itemWrapper {
        overflow: hidden;

        transition: max-height 0.3s ease-out;
    }

    .arrow {
        width: 1rem;
        height: 1rem;
        position: absolute;
        left: 0;
        top: 50%;

        border-top: 0.5rem solid transparent;
        border-bottom: 0.5rem solid transparent;
        border-left: 0.5rem solid var(--red);

        box-sizing: border-box;

        transform: translate(-1rem, -50%);
    }
</style>
