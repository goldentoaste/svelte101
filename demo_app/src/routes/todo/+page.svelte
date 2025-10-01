<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import TextInput from "$lib/components/TextInput.svelte";
    import TodoItem from "$lib/components/TodoItem.svelte";
    import { onTodoChange, setTodoItem } from "$lib/firebase";
    import type { Todo } from "$lib/types";

    let todoList: { [id: string]: Todo } = $state({
        "1": {
            id: "1",
            title: "Prep workshop note",
            done: true,
        },
        "2": {
            id: "2",
            title: "Prep workshop demo",
            done: false,
        },
        "3": {
            id: "3",
            title: "Sleep",
            done: false,
        },
    });

    let todoTitle = $state("");
    let filterText = $state("");

    let filteredTodoList = $derived.by(() => {
        if (filterText.length < 3) {
            return todoList;
        }
        const out: { [id: string]: Todo } = {};
        for (const todo of Object.values(todoList)) {
            if (todo.title.toLowerCase().includes(filterText)) {
                out[todo.id] = todo;
            }
        }
        return out;
    });

    function addTodoItem() {
        const newId = crypto.randomUUID();
        todoList[newId] = {
            id: newId,
            title: todoTitle,
            done: false,
        };
        todoTitle = "";
        setTodoItem(todoList[newId]);
    }

    function deleteTodoItem(id: string) {
        delete todoList[id];
        deleteTodoItem(id);
    }

    function updateTodoItem(todo: Todo) {
        setTodoItem(todo);
    }

    $effect(() => {
        const unsub = onTodoChange((changes) => {
            for (const change of changes) {
                todoList[change.id] = change;
            }
        });

        return () => {
            unsub();
        };
    });
</script>

<h1>My Message Board</h1>

<div style="display: flex; flex-direction:column; width:400px;">
    <TextInput label="Filter" placeholder="Search text..." bind:value={filterText} />

    <div class="hori">
        <TextInput
            label="Post"
            placeholder="Body of your post here..."
            style="flex:1;"
            bind:value={todoTitle}
        />
        <Button
            onclick={() => {
                addTodoItem();
            }}>Add Item</Button
        >
    </div>
</div>

<div class="posts">
    {#each Object.values(filteredTodoList) as todo, index (todo.id)}
        <TodoItem
            bind:todo={todoList[todo.id]}
            onDelete={() => {
                deleteTodoItem(todo.id);
            }}
            onChange={() => {
                updateTodoItem(todo);
            }}
        />
    {/each}
</div>

<!-- Import and put the TodoList Component here, and give it the list of todoItems. -->

<style>
    .hori {
        display: flex;
        gap: 0.5rem;
    }
    .posts {
        display: flex;
        flex-direction: column-reverse;
        gap: 0.5rem;
    }
</style>
