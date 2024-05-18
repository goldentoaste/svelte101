<script context="module" lang="ts">
    export interface NavItem {
        text: string;
        href: string;
    }
</script>

<script lang="ts">
    import ButtonGroup from "./ButtonGroup.svelte";
    import ThemeButton from "./ThemeButton.svelte";
    import Toggle from "./Toggle.svelte";

    import { presentMode } from "$lib/globals";
    import { afterNavigate } from "$app/navigation";

    export let items: NavItem[];

    let selectedIndex = 0;
    let showNav = true;

    function handleHover(e: MouseEvent) {
        if (!$presentMode) {
            return;
        }

        if (e.clientY < 50) {
            showNav = true;
            document.body.style.setProperty("padding-top", "var(--topPad)")

        }

        if (e.clientY > 120) {
            showNav = false;
            document.body.style.setProperty("padding-top", "2rem")

        }
    }

    afterNavigate((nav)=>{
        items.forEach((val, index) => {
            console.log( nav.to?.route.id!,  val.href);
            
            if ( nav.to?.route.id?.indexOf(val.href)! >= 0){
                selectedIndex = index;
            }
        });
    })
</script>

<svelte:body on:mousemove={handleHover} />

<nav id="navParent" class:showNav>
    <div style="display: flex; flex-direction:row; align-items:center; gap:0.5rem;">
        <img src="/svelte.svg" alt="svelte logo" />
        <h1>Svelte Intro!</h1>
    </div>
    <ButtonGroup {selectedIndex} buttonParams={items} />

    <div style="margin-left:auto; display:flex; gap: 1rem">
        <Toggle bind:toggleOn={$presentMode}>Present Mode</Toggle>

        <ThemeButton />
    </div>
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
        z-index: 999;
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

        background-color: var(--bg1);

        overflow: hidden;

        border-bottom: 3px solid var(--fg0);

        transition: top 0.4s ease-out;
    }

    nav:not(.showNav) {
        top: calc(0px - var(--navBarHeight));
    }
</style>
