
export const upperCase = `
<!-- UpperCaseInput.svelte -->
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

`;
export const mainUpper = `<!-- main page -->
<script lang="ts">
    import UpperCaseInput from "./UpperCaseInput.svelte";

    let text = $state("stuff");
</script>

<UpperCaseInput bind:text />
`;