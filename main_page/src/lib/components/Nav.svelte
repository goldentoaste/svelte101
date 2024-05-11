<script context="module" lang="ts">
    export interface NavItem {
        text: string;
        href: string;
    }
</script>

<script lang="ts">
    import Button from "./Button.svelte";
    import ButtonGroup from "./ButtonGroup.svelte";
    import ThemeButton from "./ThemeButton.svelte";

    export let items: NavItem[];
</script>

<nav id="navParent">
    <div
        style="display: flex; flex-direction:row; align-items:center; gap:0.5rem;"
    >
        <img src="/svelte.svg" alt="svelte logo" />
        <h1>Svelte Intro!</h1>
    </div>
    <ButtonGroup buttonParams={items} />
    <ThemeButton style="margin-left:auto;" />
</nav>

<style>
    img {
        width: 2.5rem;
        height: 2.5rem;
    }
    h1 {
        margin: 0;
    }
    nav {
        position: fixed;
        box-sizing: border-box;
        top: 0;
        left: 0;

        width: 100dvw;
        min-width: 800px;
        height: var(--navBarHeight);

        display: flex;
        flex-direction: row;
        gap: 2rem;
        align-items: center;

        padding: 1rem;
        padding-left: 4rem;
        padding-right: 2rem;

        overflow: hidden;

        border-bottom: 3px solid var(--fg0);
    }
</style>
