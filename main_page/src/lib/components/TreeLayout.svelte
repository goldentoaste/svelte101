<script context="module" lang="ts">
    import { writable, type Writable } from "svelte/store";

    export interface Chapter {
        title: string;
        items: ChapterItem[];
        open: Writable<boolean>;
    }

    export interface ChapterItem {
        title: string;
        href: string;
    }
</script>

<script lang="ts">
    export let chapters: Chapter[] = [];

    let chapterSizes : number[] = [];

    chapters.forEach((i) => {
        i.open =  writable(true);
        chapterSizes.push(10000)
    });

    function getChapterSizes(){
        // TODO update when page is resized?

        chapterSizes.length = 0; // clear

        for (let i = 0; i < chapters.length; i++){
            chapterSizes.push(document.getElementById("itemContainer" + i)?.scrollHeight!);
        }

    }
</script>

<div class="treeContainer">
    {#each chapters as chapter, chapIndex}
        <div id="''+{chapIndex}" class="title" on:click={()=>{
            chapter
        }}>{chapIndex}. {chapter.title}</div>
        <div class="itemWrapper" style="max-height: {chapter.open? chapterSizes[chapIndex] + 100: 0}px">
            <div class="itemContainer" id={"itemContainer" +chapIndex} >
                {#each chapter.items as item, itemIndex}
                    <a href={item.href}>{chapIndex}.{itemIndex} {item.title}</a>
                {/each}
            </div>
        </div>
    {/each}
</div>

<style>
    .treeContainer {
        background-color: var(--bg2);
    }

    .title {
        color: var(--orange);
        font-size: medium;

        cursor: pointer;
    }

    a {
        color: var(--fg0);
        text-decoration: none;
    }

    a:visited {
        color: var(--fg1);
    }

    .itemContainer {
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 0.75rem;
        padding-left: 1.5rem;
    }

    .itemWrapper {
        position: relative;

        transition: max-height 0.3s ease-out;
    }
</style>
