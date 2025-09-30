<script module lang="ts">
    import { onMount } from "svelte";

    export interface Chapter {
        title: string;
        route: string;
        items: ChapterItem[];
        open?: boolean;
    }

    export interface ChapterItem {
        title: string;
        href: string;
    }

    export const treeState = $state<{ prevUrl: string | undefined; nextUrl: string | undefined }>({
        prevUrl: undefined,
        nextUrl: undefined,
    });
</script>

<script lang="ts">
    import { afterNavigate } from "$app/navigation";
    import { fly } from "svelte/transition";

    interface Props {
        chapters?: Chapter[];
        rootRoute: string;
    }

    let { chapters = $bindable([]), rootRoute }: Props = $props();

    let chapterSizes: number[] = $state([]);

    let selectedChap = $state(-1);
    let selectedItem = $state(-1);
    let hrefToIndex: { [href: string]: [number, number] } = {};

    chapters.forEach((i) => {
        i.open = true;
        chapterSizes.push(10000);
    });

    function loadChapterSizes() {
        // TODO update when page is resized?

        chapterSizes.length = 0; // clear

        for (let i = 0; i < chapters.length; i++) {
            chapterSizes.push(document.getElementById("itemContainer" + i)?.scrollHeight!);
            const chapter = chapters[i];
            const route = `/${rootRoute}/${chapter.route}/`;
            for (let j = 0; j < chapter.items.length; j++) {
                hrefToIndex[route + chapter.items[j].href] = [i, j];
            }
        }
    }

    onMount(() => {
        loadChapterSizes();
    });

    afterNavigate((event) => {
        const route = event.to?.route!.id;

        if (route !== undefined && route !== null) {
            const target = hrefToIndex[route];
            if (target) {
                [selectedChap, selectedItem] = hrefToIndex[route];
            } else {
                selectedChap = -1;
                selectedItem = -1;
            }
        } else {
            selectedChap = -1;
            selectedItem = -1;
            return;
        }

        let length = -1;
        if (selectedChap >= 0 && selectedChap < chapters.length) {
            length = chapters[selectedChap].items.length;
        } else {
            return;
        }
        if (selectedItem < length - 1) {
            const chapter = chapters[selectedChap];
            treeState.nextUrl = `/${rootRoute}/${chapter.route}/${chapter.items[selectedItem + 1].href}`;
        } else if (selectedChap < chapters.length - 1) {
            const chapter = chapters[selectedChap + 1];
            treeState.nextUrl = `/${rootRoute}/${chapter.route}/${chapter.items[0].href}`;
        } else {
            treeState.nextUrl = undefined;
        }

        if (selectedItem > 0) {
            const chapter = chapters[selectedChap];
            treeState.prevUrl = `/${rootRoute}/${chapter.route}/${chapter.items[selectedItem - 1].href}`;
        } else if (selectedChap > 0) {
            const chapter = chapters[selectedChap - 1];
            treeState.prevUrl = `/${rootRoute}/${chapter.route}/${
                chapter.items[chapter.items.length - 1].href
            }`;
        } else {
            treeState.prevUrl = undefined;
        }
    });
</script>

<div class="treeContainer">
    {#each chapters as chapter, chapIndex (chapter.title)}
        <div>
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <div
                id={"" + chapIndex}
                class="title"
                onclick={() => {
                    chapters[chapIndex].open = !chapters[chapIndex].open;
                    chapters = chapters;
                }}
                class:closed={!chapter.open}
            >
                {chapIndex + 1}. {chapter.title}
            </div>
            <div
                class="itemWrapper"
                style="max-height: {chapter.open ? chapterSizes[chapIndex] + 10 : 0}px"
            >
                <div class="itemContainer" id={"itemContainer" + chapIndex}>
                    {#each chapter.items as item, itemIndex (item.href)}
                        {@const route = `/${rootRoute}/${chapter.route}/`}
                        <div style="position: relative;">
                            {#if selectedChap === chapIndex && selectedItem === itemIndex}
                                <div
                                    class="arrow"
                                    transition:fly={{
                                        x: -10,
                                    }}
                                ></div>
                            {/if}
                            <a href={route + item.href}
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
        position: sticky;
        top: var(--topPad);

        background-color: var(--bg2);
        overflow: auto;
        border: var(--bg5) solid 2px;
        min-width: 250px;
        width: fit-content;
        height: fit-content;

        max-height: 70vh;

        padding-bottom: 1rem;

        scrollbar-width: thin;
        scrollbar-color: var(--fg0) var(--bg1);
        scrollbar-gutter: stable;
    }

    .title {
        background-color: var(--bg2);
        z-index: 2;
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
