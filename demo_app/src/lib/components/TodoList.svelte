<script lang="ts">
    import type { TodoItem } from "$lib/globals";
    import { v4 as uuid4 } from "uuid";
    import TodoListItem from "./TodoListItem.svelte";

    export let todos: TodoItem[] = [];

    let inputValue: string = "";

    function toggleItem(index: number) {
        todos[index].done = !todos[index].done;
        todos = todos; // just trigger a refresh
    }

    function deleteItem(index: number) {
        todos.splice(index, 1);
        todos = todos; // delete and assign
    }

    function addItem() {
        if (inputValue !== "") {
            todos = [...todos, { message: inputValue, done: false, id: uuid4() }];
            inputValue = "";
        }
    }
</script>

<form on:submit={addItem}>
    <input type="text" bind:value={inputValue} />
</form>

<div class="listContainer">
    {#each todos as todo, index (todo.id)}
        <TodoListItem
            {...todo}
            on:toggleDone={(e) => {
                toggleItem(index);
            }}
            on:delete={(e) => {
                deleteItem(index);
            }}
        />
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

    input {
        margin: 1rem;
        /* reduce by 3 rem due to margin and padding on both sides */
        width: calc(100% - 3rem);

        border: 2px solid var(--focus);
        border-radius: 5px;

        font-size: x-large;
        padding: 0.5rem;
    }
</style>
