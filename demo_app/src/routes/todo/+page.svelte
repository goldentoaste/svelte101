<script lang="ts">
    import List from "$lib/components/TodoList.svelte";
    import type { TodoItem } from "$lib/globals";

    let todoItems: TodoItem[] = [
        {
            id:"1",
            message: "Finish workshop website",
            done: false,
        },
        {id:"2",
            message: "Deploy api",
            done: false,
        },
        {id:"3",
            message: "eat dinner",
            done: true,
        },
    ];
</script>

<h1>TODO</h1>

<List todos={todoItems} />

<style>

</style>
