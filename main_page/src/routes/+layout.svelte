<script lang="ts">
    import Nav, { type NavItem } from "$lib/components/Nav.svelte";
    import "../global.css";

    let navTargets: NavItem[] = [
        {
            href:"test",
            name:"TEST"
        },
        {
            href:"test2",
            name:"TEST2"
        },

    ];
</script>

<Nav items={navTargets}></Nav>

<slot />
