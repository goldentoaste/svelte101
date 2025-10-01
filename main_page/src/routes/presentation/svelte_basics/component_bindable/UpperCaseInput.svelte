<script lang="ts">
    interface Props {
        text: string;
    }
    let { text = $bindable("default") }: Props = $props();
</script>

<input
    type="text"
    onchange={(e) => {
        text = e.currentTarget.value.toUpperCase();
    }}
    placeholder="type here..."
    value={text}
/>
