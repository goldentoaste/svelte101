<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { v4 as getUUID } from "uuid";
    export let id: string = getUUID(); // id is required so we know which to delete later
    export let done: boolean = false;
    export let message: string;

    // we will dispatch custom events for toggling todo item, and deleting the item.
    const dispatch =
        createEventDispatcher<// this sections contains typescript typing for the kinds of events we intend on dispatching
        {
            toggleDone: { id: string; oldVal: boolean };
            delete: { id: string };
        }>();
</script>

<div
    class="todoItem"
    class:done
    on:click={() => {
        dispatch("toggleDone", {
            id,
            oldVal: done,
        });
    }}
>
    <!-- We want to display check or cross mark depending on 'done'. Ternery will do. -->
    <span>{done ? "✔️" : "❌"} {message}</span>

    <button
        class="deleteButton"
        on:click={() => {
            dispatch("toggleDone", {
                id,
                oldVal: done,
            });
        }}>Delete</button
    >
</div>

<style>
    .todoItem {
        border-radius: 10px;
        border: 2px solid var(--focus);
        padding: 1rem;
        background-color: var(--bg0);

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .done {
        background-color: var(--red);
    }

    .todoItem:not(.done) {
        /* find .todoItem that isn't .done */
        background-color: var(--green);
    }

    .deleteButton {
        margin-left: 1rem;
        padding: 0.5rem;
        border: 2px solid var(--focus);
        border-radius: 5px;
        background-color: var(--fg1);
    }

    button {
        cursor: pointer;
        transition: all 0.3s ease-out;
    }

    button:hover{
        filter: brightness(1.1);
        background-color: var(--bg0);
    }

    span {
        cursor: pointer;
    }
</style>
