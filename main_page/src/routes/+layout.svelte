<script lang="ts">
    import Nav, { type NavItem } from "$lib/components/Nav.svelte";
    import "../global.css";

    let navTargets: NavItem[] = [
        {
            href: "/",
            name: "Home",
        },
        {
            href: "test1",
            name: "TEST 1",
        },
        {
            href: "test2",
            name: "TEST 2",
        },
    ];
</script>

<Nav items={navTargets}></Nav>

<slot />
