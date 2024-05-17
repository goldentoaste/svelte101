



<script lang='ts'>
    import type { TodoItem } from "$lib/globals";
    import TodoListItem from "./TodoListItem.svelte";

    export let todos : TodoItem[] = [];
</script>

<div class="listContainer">
    {#each todos as todo}
        <TodoListItem {...todo}></TodoListItem>
    {/each}
</div>

<style>
    .listContainer {
        padding: 1rem;
        border-radius: 10px;
        border: 2px solid var(--focus);

        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>