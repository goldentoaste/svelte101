<script lang="ts">
    import Nav, { type NavItem } from "$lib/components/Nav.svelte";

    import "../global.css";
    import "../gruvbox_prism.css";
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();
    let navTargets: NavItem[] = [
        {
            href: "/",
            text: "Home",
        },
        {
            href: "/presentation",
            text: "Presentation",
        },
        {
            href: "/further_readings",
            text: "Further Readings",
        },
        {
            href: "/about",
            text: "About",
        },
    ];
</script>

<Nav items={navTargets}></Nav>

{@render children?.()}
