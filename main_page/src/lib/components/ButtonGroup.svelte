<script lang="ts">
    import Button from "./Button.svelte";
    import type { ButtonParam } from "./Button.svelte";

    interface Props {
        buttonParams?: ButtonParam[];
        selectedIndex?: number;
    }

    let { buttonParams = [], selectedIndex = $bindable(0) }: Props = $props();

</script>

<div id="buttonContainer">
    {#each buttonParams as param, index}
        <Button
            href={param.href}
            path={param.path}
            selected={selectedIndex == index}
            id={"titleButton" + index}
        >
            {param.text}
        </Button>
    {/each}

  
</div>

<style>
   
    #buttonContainer {
        display: flex;
        position: relative;
        flex-direction: row;
        gap: 1.5rem;
        align-items: center;
        padding: 1rem;
    }
</style>
