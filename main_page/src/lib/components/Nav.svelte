<script context="module" lang="ts">
    export interface NavItem {
        name: string;
        href: string;
    }
</script>

<script lang="ts">
    import Button from "./Button.svelte";
    import ThemeButton from "./ThemeButton.svelte";

    export let items: NavItem[];
</script>

<nav id="navParent">
    {#each items as navItem}
        <Button href={navItem.href}>
            {navItem.name}
        </Button>
    {/each}

    <ThemeButton style="margin-left:auto;" />
</nav>

<style>
    nav {
        position: fixed;
        box-sizing: border-box;
        top: 0;
        left: 0;

        width: 100dvw;
        height: var(--navBarHeight);

        display: flex;
        flex-direction: row;
        gap: 2rem;
        align-items: center;

        padding: 1rem;
        padding-left: 4rem;
        padding-right: 2rem;
    }
</style>
