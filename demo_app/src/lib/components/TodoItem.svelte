<script lang="ts">
    import type { Todo } from "$lib/types";
    import Button from "./Button.svelte";

    import { fly } from "svelte/transition";

    interface Props {
        todo: Todo;
        onDelete: () => void;
        onChange: () => void;
    }

    let { todo = $bindable(), onDelete, onChange }: Props = $props();
</script>

<div class="todoItem" transition:fly={{ x: -50, duration: 500 }}>
    <input type="checkbox" bind:checked={todo.done} onchange={onChange} />

    <div class="title" class:done={todo.done}>{todo.title}</div>

    <Button onclick={onDelete} style="margin-left: auto;">
        <span>🗑️</span>
    </Button>
</div>

<style>
    .todoItem {
        padding: 1rem;
        border: 2px solid var(--focus);
        background-color: var(--bg1);

        min-width: 400px;
        max-width: 400px;

        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .done {
        text-decoration: line-through;
    }

    input[type="checkbox"] {
        scale: 1.5;
        margin: 0.5rem;
    }
</style>
