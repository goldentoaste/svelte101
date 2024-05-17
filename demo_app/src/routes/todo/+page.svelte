<script lang="ts">
    import TodoList from "$lib/components/TodoList.svelte";
    import type { TodoItem } from "$lib/globals";

    let todoItems: TodoItem[] = [
        {
            message: "Finish workshop website",
            done: false,
        },
        {
            message: "Deploy api",
            done: false,
        },
        {
            message: "eat dinner",
            done: true,
        },
    ];
</script>

<h1>TODO</h1>

<TodoList todos={todoItems} />

<style>


    
</style>
