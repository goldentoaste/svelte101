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
            text: "TEST 1",
        },
        {
            href: "test2",
            text: "TEST 2",
        },
    ];
</script>

<Nav items={navTargets}></Nav>

<slot />
