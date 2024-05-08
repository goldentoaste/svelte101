<script lang="ts">
    import Nav, { type NavItem } from "$lib/components/Nav.svelte";
    import "../global.css";

    let navTargets: NavItem[] = [
        {
            href: "/",
            text: "Home",
        },
        {
            href: "test1",
            text: "Todo App",
        },
        {
            href:"/",
            text:"Further Readings"
        },
        {
            href: "test2",
            text: "About",
        },
    ];
</script>

<Nav items={navTargets}></Nav>

<slot />
