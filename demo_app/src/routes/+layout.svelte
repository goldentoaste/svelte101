<script lang="ts">
    import type { NavItem } from "$lib/components/NavBar.svelte";
    import NavBar from "$lib/components/NavBar.svelte";



    import "../global.css";
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props(); // its nice to have a style sheet applied to the entire app, this is one way to do it.

    let navTargets: NavItem[] = [
        {
            name: "Home",
            target: "/",
        },
        {
            name: "Todo",
            target: "/todo",
        },
        {
            name: "About",
            target: "/about",
        },
    ];


</script>

<!-- make the NavBar in layout so that every subpage gets it. -->
<NavBar navItems={navTargets} />

{@render children?.()}
